import { Typography, Stack, Button, Box, Divider } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './imageForm.scss';
import Grid from '@mui/material/Unstable_Grid2';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
function ImageForm(props) {
	const { imgfront, setImgfront, imgrear, setImgrear, imgleft, setImgleft, imgright, setImgright, handleSent } = props;
	return (
		<Stack bgcolor="white" className="imageform-container">
			<Stack bgcolor="white" p={1} spacing={2}>
				<Typography align="center" className="imageform-container__text">
					Ảnh mặt trước
				</Typography>
				<img className="imageform-container__img" src={imgfront ? URL.createObjectURL(imgfront) : ''} key={imgfront}></img>
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
						alignSelf: 'center',
					}}
				>
					CHỌN ẢNH
					<input
						type="file"
						hidden
						accept=".jpg,.png"
						onChange={(event) => {
							setImgfront(event.target.files[0]);
						}}
					/>
				</Button>
				<Divider/>
				<Typography align="center" className="imageform-container__text">
					Ảnh mặt sau
				</Typography>
				<img className="imageform-container__img" src={imgrear ? URL.createObjectURL(imgrear) : ''} key={imgrear}></img>
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
							setImgrear(event.target.files[0]);
						}}
					/>
				</Button>
				<Divider/>		
				<Typography align="center" className="imageform-container__text">
					Ảnh bên trái
				</Typography>
				<img className="imageform-container__img" src={imgleft ? URL.createObjectURL(imgleft) : ''} key={imgleft}></img>
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
							setImgleft(event.target.files[0]);
						}}
					/>
				</Button>
				<Divider/>		
				<Typography align="center" className="imageform-container__text">
					Ảnh bên phải
				</Typography>
				<img className="imageform-container__img" src={imgright ? URL.createObjectURL(imgright) : ''} key={imgright}></img>
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
							setImgright(event.target.files[0]);
						}}
					/>
				</Button>
				<Divider/>
				<Button
					className="imageform-container__sent"
					variant="contained"
					sx={{ fontSize: '16px', fontWeight: 'bold', backgroundColor: variables.textgreencolor }}
					endIcon={<SendRoundedIcon />}
					onClick={() => handleSent()}
				>
					ĐĂNG KÝ
				</Button>
			</Stack>
		</Stack>
	);
}

export default ImageForm;
