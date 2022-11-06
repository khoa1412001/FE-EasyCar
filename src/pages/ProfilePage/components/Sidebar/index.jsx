import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import { Link, useNavigate, redirect } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import stringAvatar from 'utils/stringavatar';
import variables from 'assets/_variable.scss';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from 'slices/userSlice';
import { logoutSuccess } from 'slices/authSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
function Sidebar() {
	const user = useSelector((state) => state.user.info) || {}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(clearUserInfo())
    dispatch(logoutSuccess())
    navigate('/')
   
  }
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
					<Avatar {...stringAvatar('Nguyen Phuc An')} sx={{ width: '80px', height: '80px' }} />
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
					startIcon={<AccountCircleIcon/>}
				>
					THÔNG TIN TÀI KHOẢN
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
					startIcon={<HistoryIcon/>}
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
					startIcon={<HowToRegIcon/>}
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
					startIcon={<CarCrashIcon/>}
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
					startIcon={<LockResetIcon/>}
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
            			color:variables.redcolor,
					}}
					startIcon={<LogoutIcon/>}
				>
					ĐĂNG XUẤT
				</Button>
			</Stack>
		</Box>
	);
}

export default Sidebar;
