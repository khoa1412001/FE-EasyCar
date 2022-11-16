import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import logo from 'assets/img/logo_ec.png';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import SigninPage from 'pages/SigninPage';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import stringAvatar from 'utils/stringavatar';
import {useDispatch} from 'react-redux'
import {setUserInfo} from 'slices/userSlice'
import apiAuth from 'apis/apiAuth';
import LeftNavigation from 'components/LeftNavigation';
import ConfirmDialog from 'components/ConfirmDialog';
function Header() {
	const [openDialog, setOpenDialog] = React.useState(true)
	const [openSignin, setOpenSignin] = React.useState(false);
	const user = useSelector((state) => state.user.info);
	const accesstoken = useSelector((state) => state.auth.accessToken);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);
	React.useEffect(() => {
		const getInfo = () => {
			if(accesstoken){
				apiAuth
					.getuserinfo()
					.then((res) => {
						if (res) {
							dispatch(setUserInfo(res));
						}
					})
					.catch()
					.finally();
			}
		}
		getInfo()
	},[accesstoken])
	return (
		<Box sx={{ flexGrow: 1 }}>
			{user && <LeftNavigation open={open} setOpen={setOpen}/>}
			<AppBar position="static" sx={{ bgcolor: variables.maincolor }}>
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 0,cursor:'pointer' }} onClick={()=> setOpen(true)}>
						<MenuIcon />
					</IconButton>
					<img src={logo} className="header__logo" onClick={() => {navigate('/')}}/>
					<Typography variant="h4" component="div" flex="1" onClick={() => {navigate('/')}} sx={{ fontFamily: 'Orbitron', cursor:'pointer' }}>
						EasyCar
					</Typography>
					{user ? (
						<Stack direction="row">
							<Box alignSelf="center" paddingRight={5}>
								<Button
									component={Link}
									to="/car-signup"
									variant="outlined"
									className="header__button"
									sx={{
										bgcolor: variables.mainyellowcolor,
										color: variables.mainlightercolor,
										fontWeight: 'bold',
										fontSize: 15,
									}}
								>
									Trở thành chủ xe
								</Button>
							</Box>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={() => navigate('/profile')}
								color="inherit"
							>
								{user.avatar ? (
									<Avatar alt="Remy Sharp" src={user.avatar} />
								) : (
									<Avatar {...stringAvatar('Nguyen Phuc An')} />
								)}
							</IconButton>
							<Typography alignSelf="center" paddingRight={5} fontSize={20} sx={{cursor:'pointer'}} id="username">
								{user.username}
							</Typography>
						</Stack>
					) : (
						<Stack direction="row">
							<Box alignSelf="center" paddingRight={5}>
								<Button
									onClick={() => setOpenSignin(true)}
									variant="outlined"
									className="header__button"
									sx={{
										bgcolor: variables.mainyellowcolor,
										color: variables.mainlightercolor,
										fontWeight: 'bold',
										fontSize: 15,
									}}
								>
									ĐĂNG NHẬP
								</Button>
							</Box>
							<Box alignSelf="center" paddingRight={5}>
								<Button
									component={Link}
									to="/signup"
									variant="outlined"
									className="header__button"
									sx={{
										bgcolor: variables.mainyellowcolor,
										color: variables.mainlightercolor,
										fontWeight: 'bold',
										fontSize: 15,
									}}
								>
									ĐĂNG KÝ
								</Button>
							</Box>
						</Stack>
					)}
				</Toolbar>
			</AppBar>
			<ConfirmDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
			<SigninPage openSignin={openSignin} setOpenSignin={setOpenSignin}></SigninPage>
		</Box>
	);
}
export default Header;
