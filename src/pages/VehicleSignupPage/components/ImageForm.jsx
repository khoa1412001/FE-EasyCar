import { Typography, Stack, Button, Box } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './imageForm.scss';
import Grid from '@mui/material/Unstable_Grid2';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
function ImageForm() {
	const [selectedImage, setSelectedImage] = React.useState();
	return (
		<Stack bgcolor="white" className="imageform-container">
			<Stack bgcolor="white" p={1} spacing={1}>
				<Grid container spacing={1} paddingBottom={1}>
					<Grid item xs={6}>
						<Typography align="center" className="imageform-container__text">
							Ảnh mặt trước
						</Typography>
						<img className="imageform-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
						<Button
							variant="outlined"
							size="medium"
							className="imageform-container__upimg"
							component="label"
							sx={{
								color: variables.textgreencolor,
								borderColor: variables.textgreencolor,
								fontWeight: 'bold',
								width: '250px',
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
					</Grid>
					<Grid item xs={6}>
						<Typography align="center" className="imageform-container__text">
							Ảnh mặt sau
						</Typography>
						<img className="imageform-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
						<Button
							variant="outlined"
							size="medium"
							className="imageform-container__upimg"
							component="label"
							align="center"
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
					</Grid>
					<Grid item xs={6}>
						<Typography align="center" className="imageform-container__text">
							Ảnh bên trái
						</Typography>
						<img className="imageform-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
						<Button
							variant="outlined"
							size="medium"
							className="imageform-container__upimg"
							component="label"
							align="center"
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
					</Grid>
					<Grid item xs={6}>
						<Typography align="center" className="imageform-container__text">
							Ảnh bên phải
						</Typography>
						<img className="imageform-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
						<Button
							variant="outlined"
							size="medium"
							className="imageform-container__upimg"
							component="label"
							align="center"
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
					</Grid>
				</Grid>
				<Button
					className="imageform-container__sent"
					variant="contained"
					sx={{ fontSize: '16px', fontWeight: 'bold', backgroundColor: variables.textgreencolor }}
					endIcon={<SendRoundedIcon />}
				>
					ĐĂNG KÝ
				</Button>
			</Stack>
		</Stack>
	);
}

export default ImageForm;
