import ConfigRoute from 'ConfigRoute';
import { axiosInstance, axiosInstanceMultiPart } from 'apis/axiosClient';
import chaticon from "assets/img/chat.png";
import ChatbotComponent from 'components/Chatbot';
import CheckAuthentication from 'components/CheckAuthentication';
import Footer from 'components/Footer';
import Header from 'components/Header';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

function App() {
	const [chatbotState, setChatbotState] = React.useState(false)
	const accessToken = useSelector((state) => state.auth.accessToken);
	const dispatch = useDispatch();
	if (accessToken) {
		axiosInstance(accessToken, dispatch);
		axiosInstanceMultiPart(accessToken);
	}
	if (accessToken === '') {
		axiosInstance('', dispatch);
		axiosInstanceMultiPart('');
	}

	const turnOnOffChatbot = () => {
		const elements = document.querySelectorAll('.react-chatbot-kit-chat-container');
		if(chatbotState){
			elements.forEach(elem => elem.style['display'] = 'none');
			setChatbotState(false)
		}
		else {
			elements.forEach(elem => elem.style['display'] = 'block');
			setChatbotState(true)
		}
	}
	
	return (
		<BrowserRouter>
			<Header />
			<ChatbotComponent />
			<img src={chaticon} className='chat-icon' onClick={turnOnOffChatbot}></img>
			<CheckAuthentication>
				<ConfigRoute />
				<ToastContainer
					autoClose={1500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					pauseOnFocusLoss
					pauseOnHover={false}
				/>
			</CheckAuthentication>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
