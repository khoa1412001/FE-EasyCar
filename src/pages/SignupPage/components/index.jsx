import {
	Typography,
	TextField,
	Divider,
	Stack,
	InputAdornment,
	Checkbox,
	FormControlLabel,
	Button,
	Box,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import variables from '../../../assets/_variable.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm, Controller } from 'react-hook-form';
import './signup.scss';
import * as React from 'react';
import { toast } from 'react-toastify';
import apiAuth from 'apis/apiAuth'
import {useNavigate} from 'react-router-dom'

function SigninBody() {
	const [checked, setChecked] = React.useState(false);

    const navigate = useNavigate();
	const { handleSubmit, control } = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
		reValidateMode: 'onChange',
	});
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	const onSubmit = (data) => {
        const { username, password, email,phoneNumber,socialId } = data
        const params = {
            email,
            username,
            password,
            phoneNumber,
            socialId,
        }

        apiAuth.register(params)
            .then(res => {
                toast.success("Đăng ký tài khoản thành công, vui lòng truy cập email đã đăng ký để kích hoạt tài khoản")
                navigate('/')
            })
            .catch(err => {
                toast.error("Đăng ký tài khoản không thành công")
            })
            .finally(() => {

            })
    }
	return (
		<Stack justifyContent="center" direction="row">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack maxWidth="450px" width="450px" py={10} spacing={2} sx={{ clear: 'both' }}>
					<Typography align="center" fontSize="24px" fontWeight="bold">
						Đăng ký tài khoản
					</Typography>
					<Controller
						name={'email'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<TextField
								{...field}
								error={error !== undefined}
								helperText={error ? error.message : ''}
								placeholder="Nhập email"
								variant="outlined"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<EmailIcon style={{ color: variables.maincolor }} />
										</InputAdornment>
									),
								}}
							/>
						)}
					/>
					<Controller
						name={'username'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<TextField
								{...field}
								error={error !== undefined}
								helperText={error ? error.message : ''}
								placeholder="Họ và Tên"
								variant="outlined"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PersonIcon style={{ color: variables.maincolor }} />
										</InputAdornment>
									),
								}}
							/>
						)}
					/>
					<Controller
						name={'phoneNumber'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<TextField
								{...field}
								error={error !== undefined}
								helperText={error ? error.message : ''}
								placeholder="Nhập số điện thoại"
								variant="outlined"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PhoneIcon style={{ color: variables.maincolor }} />
										</InputAdornment>
									),
								}}
							/>
						)}
					/>
					<Stack direction="row" justifyContent="center" spacing={4}>
						<Controller
							name={'password'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									placeholder="Mật khẩu"
									type="password"
									variant="outlined"
								/>
							)}
						/>
						<Controller
							name={'passwordCf'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									placeholder="Nhập lại mật khẩu"
									type="password"
									variant="outlined"
								/>
							)}
						/>
					</Stack>
					<Controller
						name={'socialId'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<TextField
								{...field}
								error={error !== undefined}
								helperText={error ? error.message : ''}
								placeholder="Căn cước công dân"
								variant="outlined"
							/>
						)}
					/>
					<FormControlLabel
						control={<Checkbox style={{ padding: 0 }} checked={checked} onChange={handleChange} />}
						label={
							<Typography pl={1}>
								Tôi đã đọc và đồng ý với <a href="#">chính sách của EasyCar</a>
							</Typography>
						}
					/>
					<Button
						align="center"
						className="signup__button"
						disabled={!checked}
						variant="standard"
						type = 'submit'
						sx={{ color: variables.mainlightercolor, bgcolor: variables.mainyellowcolor }}
					>
						Đăng ký
					</Button>

					<Divider />
					<Typography align="center">Hoặc đăng nhập bằng tài khoản</Typography>
						<Button
							variant="standard"
							sx={{
								px: 7,
								bgcolor: '#f34a38',
								color: '#FFFFFF',
								'&.MuiButtonBase-root:hover': {
									bgcolor: '#f34a38',
								},
							}}
							startIcon={<GoogleIcon style={{ color: '#FFFFFF' }} />}
						>
							Google
						</Button>
				</Stack>
			</form>
		</Stack>
	);
}

export default SigninBody;
