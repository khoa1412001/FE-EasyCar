import { BrowserRouter } from 'react-router-dom';
import VehicleSignupPage from 'pages/VehicleSignupPage';
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
function App() {
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
	return (
		<BrowserRouter>
			<Header />
			<ChatBubbleRoundedIcon className='chat-icon' sx={{position:'fixed', zIndex: 10, color: variables.bluecolor, bottom: 20, right: 20, fontSize:'55px' }} />
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
