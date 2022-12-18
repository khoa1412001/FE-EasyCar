import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HistoryIcon from '@mui/icons-material/History';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import WalletIcon from '@mui/icons-material/Wallet';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutSuccess } from 'slices/authSlice';
import { clearUserInfo } from 'slices/userSlice';
import stringAvatar from 'utils/stringavatar';
import './style.scss';
import numWithDot from 'utils/numWithDot';

function Sidebar() {
	const user = useSelector((state) => state.user.info) || {};
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSignOut = () => {
		dispatch(clearUserInfo());
		dispatch(logoutSuccess());
		navigate('/');
	};
	return (
		<Box className="sidebar-container" padding={1}>
			<Stack>
				{user.avatar ? (
					<Avatar
						className="sidebar-container__avatar"
						alt="Remy Sharp"
						src={user.avatar}
						sx={{ width: '80px', height: '80px' }}
					/>
				) : (
					(user.username && <Avatar {...stringAvatar(user.username)} sx={{ width: '80px', height: '80px' }} />)
				)}
				<Typography className="sidebar-container__name" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
					{user.username}
				</Typography>
				<Typography className="sidebar-container__phone" sx={{ fontSize: '14px' }}>
					{user.phoneNumber}
				</Typography>
				<Typography className="sidebar-container__email" sx={{ fontSize: '14px' }}>
					{user.email}
				</Typography>
				<Typography className="sidebar-container__verifystatus" sx={{ fontSize: '14px', fontWeight: 'bolder' }}>
					Trạng thái xác thực:{' '}
					{user.verification ? (
						<CheckCircleRoundedIcon fontSize="small" className="sidebar-container__icon green" />
					) : (
						<CancelRoundedIcon fontSize="small" className="sidebar-container__icon red" />
					)}
				</Typography>
				<Typography className="sidebar-container__verifystatus" sx={{ fontSize: '14px', fontWeight: 'bolder' }}>
					Tài khoản:<span className='green bold large'> {user.balance && numWithDot(user.balance)} đ</span>
				</Typography>
				<Divider sx={{ paddingTop: '8px' }} />
				<Button
					component={Link}
					to="/profile/info"
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
					}}
					startIcon={<AccountCircleIcon />}
				>
					THÔNG TIN TÀI KHOẢN
				</Button>
				<Divider />
				<Button
					component={Link}
					to="/profile/wallet"
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
					}}
					startIcon={<WalletIcon />}
				>
					QUẢN LÝ VÍ
				</Button>
				<Divider />
				<Button
					component={Link}
					to="/profile/history"
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
					}}
					startIcon={<HistoryIcon />}
				>
					Lịch sử
				</Button>
				<Divider />
				<Button
					component={Link}
					to="/profile/verify"
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
					}}
					startIcon={<HowToRegIcon />}
				>
					XÁC THỰC TÀI KHOẢN
				</Button>
				<Divider />
				<Button
					component={Link}
					to="/profile/carmanage"
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
					}}
					startIcon={<CarCrashIcon />}
				>
					QUẢN LÝ XE
				</Button>
				<Divider />
				<Button
					component={Link}
					to="/profile/changepassword"
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
					}}
					startIcon={<LockResetIcon />}
				>
					ĐỔI MẬT KHẨU
				</Button>
				<Divider />
				<Button
					onClick={handleSignOut}
					size="medium"
					className="sidebar-container__button"
					sx={{
						fontWeight: 'bold',
						height: '45px',
						color: variables.redcolor,
					}}
					startIcon={<LogoutIcon />}
				>
					ĐĂNG XUẤT
				</Button>
			</Stack>
		</Box>
	);
}

export default Sidebar;
