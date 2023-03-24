import { Typography, Stack, Button, Box, Divider, Autocomplete, TextField } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './imageForm.scss';
import Grid from '@mui/material/Unstable_Grid2';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
function ImageForm(props) {
	const { imgfront, setImgfront, imgrear, setImgrear, imgleft, setImgleft, imgright, setImgright, handleSent } = props;
	const [state, setState] = React.useState(1);
	const options = [
		{ label: 'Ảnh mặt trước', id: 1 },
		{ label: 'Ảnh mặt sau', id: 2 },
		{ label: 'Ảnh mặt trái', id: 3 },
		{ label: 'Ảnh mặt phải', id: 4 },
	];
	const renderComponent = (state) => {
		switch (state) {
			case 1:
				return (
				<>
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
				</>)
			case 2:
				return (
				<>
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
				</>)
			case 3:
				return (
				<>
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
				</>)
			case 4:
				return (
				<>
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
				</>)
		}
	}
	return (
		<Stack bgcolor="white" className="imageform-container">
			<Stack bgcolor="white" p={1} spacing={2}>
				<Autocomplete
					disablePortal
					disableClearable
					id="combo-box-demo"
					options={options}
					sx={{ width: 260, alignSelf: 'center' }}
					defaultValue={options[0]}
					onChange={(event, newValue) => {
						setState(newValue.id);
					}}
					renderInput={(params) => <TextField {...params} size='small' />}
				/>
				{renderComponent(state)}
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
