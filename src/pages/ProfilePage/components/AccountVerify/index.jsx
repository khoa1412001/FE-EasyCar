import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm, Controller } from 'react-hook-form';

function AccountVerify() {
	const [selectedImage, setSelectedImage] = React.useState();
	const { handleSubmit, control } = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
		reValidateMode: 'onChange',
	});

	const onSubmit = (data) => {
		const { username, driverlincense, birthday } = data;
    const params = {
      username: username,
      driverlincense: driverlincense,
      birthday: birthday,
      image: selectedImage,
    }

    console.log(params)
	};
	return (
		<Box className="accountverify-container" padding={1} marginLeft="5px" bgcolor="#FFFFFF">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={2}>
					<Typography
						className="accountverify-container__title"
						alignSelf={'center'}
						sx={{ fontWeight: '400', fontSize: '24px' }}
					>
						XÁC THỰC TÀI KHOẢN
					</Typography>
					<Divider />
					<Stack spacing={1}>
						<Typography
							className="accountverify-container__text"
							sx={{ fontWeight: '600', fontSize: '16px', paddingRight: '340px' }}
							alignSelf="center"
						>
							Số GPLX:
						</Typography>
						<Controller
							name={'driverlincense'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="accountverify-container__licensenumber"
									variant="outlined"
									size="small"
									placeholder="Dãy 12 chữ số ở mặt trước GPLX"
									sx={{ width: '418px', alignSelf: 'center' }}
								/>
							)}
						/>
						<Typography
							className="accountverify-container__text"
							sx={{ fontWeight: '600', fontSize: '16px', paddingRight: '330px' }}
							alignSelf="center"
						>
							Họ Và Tên:
						</Typography>
						<Controller
							name={'username'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="accountverify-container__name"
									variant="outlined"
									size="small"
									placeholder="Nhập đầy đủ họ và tên"
									sx={{ width: '418px', alignSelf: 'center' }}
								/>
							)}
						/>
						<Typography
							className="accountverify-container__text"
							sx={{ fontWeight: '600', fontSize: '16px', paddingRight: '331px' }}
							alignSelf="center"
						>
							Ngày sinh:
						</Typography>
						<Controller
							name={'birthday'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									{...field}
									error={error !== undefined}
									helperText={error ? error.message : ''}
									id="accountverify-container__licensenumber"
									variant="outlined"
									size="small"
									placeholder="DD/MM/YYYY"
									sx={{ width: '418px', alignSelf: 'center' }}
								/>
							)}
						/>

						<Typography
							className="accountverify-container__text"
							sx={{ fontWeight: '600', fontSize: '16px', paddingRight: '289px' }}
							alignSelf="center"
						>
							Ảnh bằng lái xe:
						</Typography>
						<Typography
							className="accountverify-container__subtext"
							sx={{ fontWeight: '400', fontSize: '14px', paddingRight: '84px' }}
							alignSelf="center"
						>
							Hình chụp cần thấy được {<span className="fontbold">Ảnh đại diện</span>} và{' '}
							{<span className="fontbold">Số GPLX</span>}
						</Typography>
						<img className="accountverify-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
						<Button
							variant="outlined"
							size="medium"
							className="accountverify-container__upimg"
							component="label"
							sx={{
								color: variables.textgreencolor,
								borderColor: variables.textgreencolor,
								fontWeight: 'bold',
								width: '250px',
								alignSelf: 'center',
							}}
						>
							CHỌN ẢNH
							<input
								type="file"
								hidden
								accept=".jpg,.png"
								onChange={(event) => {
									setSelectedImage(event.target.files[0]);
								}}
							/>
						</Button>
						<Button
							variant="contained"
							size="medium"
							className="accountverify-container__update"
							startIcon={<CheckIcon />}
              type="submit"
							sx={{
								color: '#FFF',
								bgcolor: variables.textgreencolor,
								fontWeight: 'bold',
								width: '250px',
								alignSelf: 'center',
							}}
						>
							CẬP NHẬT
						</Button>
					</Stack>
				</Stack>
			</form>
		</Box>
	);
}

export default AccountVerify;
