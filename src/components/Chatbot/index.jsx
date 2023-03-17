//import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
//Chatbot
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from 'chatbot/config';
import MessageParser from 'chatbot/MessageParser';
import ActionProvider from 'chatbot/ActionProvider';

function ChatbotComponent() {
	return (
		<div>
			<Chatbot 
			headerText='Trợ lý ảo'
			placeholderText='Hãy nhập vào câu hỏi của bạn'
			config={config} 
			messageParser={MessageParser} 
			actionProvider={ActionProvider} />
		</div>
	);
}

export default ChatbotComponent;
