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
