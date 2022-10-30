import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import apiUser from 'apis/apiUser';
import { toast } from 'react-toastify';
import apiAuth from 'apis/apiAuth';
import { setUserInfo } from 'slices/userSlice';

function AccountInfo() {
	const user = useSelector((state) => state.user.info) || {};
	const [gender, setGender] = React.useState(user.gender || 'MALE');
	const dispatch = useDispatch();
	React.useEffect(() => {
		reset(user);
	}, [user]);

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	const { handleSubmit, control, reset } = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
		reValidateMode: 'onChange',
		defaultValues: {
			username: user.username,
			phoneNumber: user.phoneNumber,
			location: user.location,
		},
	});

	const onSubmit = (data) => {
		const { location, phoneNumber, username } = data;
		const params = {
			location,
			username,
			phoneNumber,
			gender,
		};
		apiUser
			.updateUser(params)
			.then((res) => {
				toast.success('Cập nhật thông tin thành công');
				apiAuth
					.getuserinfo()
					.then((res) => {
						if (res) {
							dispatch(setUserInfo(res));
						}
					})
					.catch()
					.finally();
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	};
	return (
		<Box className="accountinfo-container" padding={1} marginLeft="5px" bgcolor="#FFFFFF">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack>
					<Typography
						className="accountinfo-container__title"
						alignSelf={'center'}
						sx={{ fontWeight: '400', fontSize: '24px' }}
					>
						THÔNG TIN TÀI KHOẢN
					</Typography>
					<Divider />
					<Typography
						className="accountinfo-container__detail"
						sx={{ fontWeight: '400', fontSize: '18px', paddingTop: '8px' }}
					>
						Chi tiết tài khoản
					</Typography>
					<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
						<Typography className="accountinfo-container__text" paddingRight={'10px'}>
							Email:
						</Typography>
						<TextField
							id="accountinfo-container__email"
							variant="outlined"
							size="small"
							disabled
							sx={{ marginLeft: '80px' }}
							value={user.email}
						/>
					</Stack>
					<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
						<Typography className="accountinfo-container__text" paddingRight={'10px'}>
							Số điện thoại:
						</Typography>
						<Controller
							name={'phoneNumber'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="accountinfo-container__phone"
									variant="outlined"
									size="small"
									sx={{ marginLeft: '25px' }}
								/>
							)}
						/>
					</Stack>
					<Divider sx={{ paddingTop: '8px' }} />
					<Typography
						className="accountinfo-container__detail"
						sx={{ fontWeight: '400', fontSize: '18px', paddingTop: '8px' }}
					>
						Thông tin cá nhân
					</Typography>
					<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
						<Typography className="accountinfo-container__text" paddingRight={'10px'}>
							Họ và tên:
						</Typography>
						<Controller
							name={'username'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="accountinfo-container__email"
									variant="outlined"
									size="small"
									sx={{ marginLeft: '50px' }}
								/>
							)}
						/>
					</Stack>
					<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
						<Typography className="accountinfo-container__text" paddingRight={'10px'}>
							Giới tính:
						</Typography>
						<Select
							labelId="accountinfo-container__age-label"
							id="accountinfo-container__age"
							value={gender}
							onChange={handleGenderChange}
							size="small"
							sx={{ width: '224px', marginLeft: '57px' }}
						>
							<MenuItem value="MALE">Nam</MenuItem>
							<MenuItem value="FEMALE">Nữ</MenuItem>
						</Select>
					</Stack>
					<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
						<Typography className="accountinfo-container__text" paddingRight={'10px'}>
							Địa chỉ:
						</Typography>
						<Controller
							name={'location'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="accountinfo-container__email"
									variant="outlined"
									size="small"
									sx={{ marginLeft: '70px' }}
								/>
							)}
						/>
					</Stack>
					<Button
						variant="outlined"
						size="medium"
						type="submit"
						className="accountinfo-container__update"
						startIcon={<CheckIcon />}
						sx={{
							color: variables.mainlightercolor,
							bgcolor: variables.mainyellowcolor,
							fontWeight: 'bold',
							marginTop: '50px',
							width: '300px',
							alignSelf: 'center',
						}}
					>
						UPDATE
					</Button>
				</Stack>
			</form>
		</Box>
	);
}

export default AccountInfo;
