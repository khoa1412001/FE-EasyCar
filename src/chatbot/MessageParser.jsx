import React from 'react';
import apiChatbot from 'apis/apiChatbot';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const params = {
      sender:'test_user',
      message:message.trim(),
    }
   
    if(isNumber(params.message.at(0))) {
      apiChatbot.rentalrecommend(params).then(res => {
        if(res.data.length == 0) {
          actions.handleHello("Không có xe phù hợp yêu cầu");
        } else {
          var resultString = "Những xe phù hợp yêu cầu \n";
          var carRecommend = "";
          res.data.map(item => {
            carRecommend = carRecommend.concat('',`\n${item.name} \n ${item.link} \n`); 
          })
          resultString = resultString.concat('',carRecommend);
          actions.handleHello(resultString);
        }
      })
      .catch(err => {
        actions.handleHello('Hệ thống đang có lỗi, bạn vui lòng thử lại sau!');
      })
    }
    else {
      apiChatbot.sendmessage(params).then(res => {
        actions.handleHello(res[0].text);
      })
      .catch(err => {
        actions.handleHello('Hệ thống đang có lỗi, bạn vui lòng thử lại sau!');
      })
    }
  };

  const isNumber = (char) => {
    if (typeof char !== 'string') {
      return false;
    }
  
    if (char.trim() === '') {
      return false;
    }
  
    return !isNaN(char);
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;