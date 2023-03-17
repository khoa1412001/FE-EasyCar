import { BrowserRouter } from 'react-router-dom';
import ConfigRoute from 'ConfigRoute';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance, axiosInstanceMultiPart } from 'apis/axiosClient';
import CheckAuthentication from 'components/CheckAuthentication';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import variables from 'assets/_variable.scss'; 
import ChatbotComponent from 'components/Chatbot';
import './style.scss';
import * as React from 'react';
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
			<ChatBubbleRoundedIcon className='chat-icon' onClick={turnOnOffChatbot} sx={{position:'fixed', zIndex: 10, color: variables.bluecolor, bottom: 20, right: 20, fontSize:'55px' }} />
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
