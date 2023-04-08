import React from 'react';
import apiChatbot from 'apis/apiChatbot';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const params = {
      sender:'test_user',
      message:message,
    }

    apiChatbot.sendmessage(params).then(res => {
      actions.handleHello(res[0].text);
    })
    .catch(err => {
      actions.handleHello('Hệ thống đang có lỗi, bạn vui lòng thử lại sau!');
    })
  };

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