import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm, Controller } from 'react-hook-form';
import apiAuth from 'apis/apiAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
	const { handleSubmit, control } = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
		reValidateMode: 'onChange',
	});
	const navigate = useNavigate();
	const onSubmit = (data) => {
		const {  newPassword, oldPassword } = data;
		const params = {
			newPassword,
			oldPassword,
		};
		apiAuth
			.changepassword(params)
			.then((res) => {
				toast.success('Đổi mật khẩu thành công');
				navigate('/profile');
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	};

	return (
		<Box className="changepassword-container" padding={1} marginLeft="5px" bgcolor="#FFFFFF">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={2}>
					<Typography
						className="changepassword-container__title"
						alignSelf={'center'}
						sx={{ fontWeight: '400', fontSize: '24px', paddingTop: '8px' }}
					>
						ĐỔI MẬT KHẨU
					</Typography>
					<Divider />

					<Stack direction={'row'} justifyContent="center" alignItems={'center'}>
						<Typography className="changepassword-container__text" paddingRight={'74px'}>
							Mật khẩu cũ:
						</Typography>
						<Controller
							name={'oldPassword'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="changepassword-container__oldpassword"
									variant="outlined"
									size="small"
									type={'password'}
									sx={{ marginLeft: '50px' }}
								/>
							)}
						/>
					</Stack>
					<Stack direction={'row'} justifyContent="center" alignItems={'center'}>
						<Typography className="changepassword-container__text" paddingRight={'65px'}>
							Mật khẩu mới:
						</Typography>
						<Controller
							name={'newPassword'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="changepassword-container__newpassword"
									variant="outlined"
									size="small"
									type={'password'}
									sx={{ marginLeft: '50px' }}
								/>
							)}
						/>
					</Stack>
					<Stack direction={'row'} justifyContent="center" alignItems={'center'}>
						<Typography className="changepassword-container__text">Nhập lại mật khẩu mới:</Typography>
						<Controller
							name={'passwordCf'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="changepassword-container__newpasswordagain"
									variant="outlined"
									size="small"
									type={'password'}
									sx={{ marginLeft: '50px' }}
								/>
							)}
						/>
					</Stack>
					<Button
						variant="outlined"
						size="medium"
						className="changepassword-container__button"
						type="submit"
						sx={{
							color: variables.mainlightercolor,
							bgcolor: variables.mainyellowcolor,
							fontWeight: 'bold',
							marginTop: '50px',
							width: '300px',
							alignSelf: 'center',
						}}
					>
						ĐỔI MẬT KHẨU
					</Button>
				</Stack>
			</form>
		</Box>
	);
}

export default ChangePassword;
