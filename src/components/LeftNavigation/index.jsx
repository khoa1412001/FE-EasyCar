import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import HistoryIcon from '@mui/icons-material/History';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, Button, Divider, Drawer, Stack, Typography } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutSuccess } from 'slices/authSlice';
import { clearUserInfo } from 'slices/userSlice';
import './style.scss';
import stringAvatar from 'utils/stringavatar';
function LeftNavigation(props) {
	const { open, setOpen } = props;
	const user = useSelector((state) => state.user.info) || {};
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSignOut = () => {
		dispatch(clearUserInfo());
		dispatch(logoutSuccess());
		navigate('/');
	};
	return (
		<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
			<Box className="leftnavigation-container">
				<Stack padding={1}>
					<Stack direction="row" alignItems={'center'} spacing={1} alignSelf="center">
						{user.avatar ? (
							<Avatar
								className="sidebar-container__avatar"
								alt="Remy Sharp"
								src={user.avatar}
								sx={{ width: '80px', height: '80px' }}
							/>
						) : (
							<Avatar {...stringAvatar(user.username)} sx={{ width: '80px', height: '80px' }} />
						)}
						<Stack>
							<Typography className="leftnavigation-container__name">{user.username}</Typography>
							<Typography className="leftnavigation-container__email">{user.phoneNumber}</Typography>
							<Typography className="leftnavigation-container__phone">{user.email}</Typography>
						</Stack>
					</Stack>
					<Divider sx={{ paddingTop: '8px' }} />
					<Button
						component={Link}
						to="/profile/info"
						size="medium"
						className="leftnavigation-container__button"
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
						to="/profile/history"
						size="medium"
						className="leftnavigation-container__button"
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
						className="leftnavigation-container__button"
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
						className="leftnavigation-container__button"
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
						className="leftnavigation-container__button"
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
						className="leftnavigation-container__button"
						sx={{
							fontWeight: 'bold',
							height: '45px',
							color: variables.redcolor,
						}}
						startIcon={<LogoutIcon />}
					>
						ĐĂNG XUẤT
					</Button>
					<Typography
						align="center"
						variant="h4"
						sx={{
							color: variables.maincolor,
							fontFamily: 'Orbitron',
							paddingBottom: '8px',
						}}
					>
						EasyCar
					</Typography>
				</Stack>
			</Box>
		</Drawer>
	);
}

export default LeftNavigation;
