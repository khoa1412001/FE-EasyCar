import { Typography, Stack, Button, Box } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './imageForm.scss';
function ImageForm() {
	const [selectedImage, setSelectedImage] = React.useState();
	return (
		<Stack bgcolor="white" className="imageform-container">
			<Stack bgcolor="white" p={1} spacing={1} direction="row">
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
							alignSelf: 'center',
							marginTop: '5px',
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
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
							alignSelf: 'center',
							marginTop: '5px',
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
				</Box>
			</Stack>
      <Stack bgcolor="white" p={1} spacing={1} direction="row">
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
							alignSelf: 'center',
							marginTop: '5px',
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
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
							alignSelf: 'center',
							marginTop: '5px',
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
				</Box>
			</Stack>
		</Stack>
	);
}

export default ImageForm;
