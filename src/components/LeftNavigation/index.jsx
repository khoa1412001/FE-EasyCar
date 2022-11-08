import { Stack, Typography, Avatar, Box, Button, IconButton, Drawer, Divider } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import stringAvatar from 'utils/stringavatar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from 'slices/userSlice';
import { logoutSuccess } from 'slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
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
						<Avatar
							alt="Remy Sharp"
							src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
							sx={{ width: 75, height: 75 }}
						/>
						<Stack>
							<Typography className="leftnavigation-container__name">Nguyễn Phúc An</Typography>
							<Typography className="leftnavigation-container__email">cotrang2012@gmail.com</Typography>
							<Typography className="leftnavigation-container__phone">0928776640</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</Drawer>
	);
}

export default LeftNavigation;
