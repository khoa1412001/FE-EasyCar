import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
function CarStatusUpdate() {
	const [selectedImage, setSelectedImage] = React.useState();
	const [selectedVideo, setSelectedVideo] = React.useState();
	return (
		<Stack className="carstatusupdate-container" padding={2}>
			<Typography className="carstatusupdate-container__carname" variant="h5" paddingBottom={1}>
				KIA MORNING 2020 - 51K 13116
			</Typography>
			<Grid container spacing={1} paddingBottom={1}>
				<Grid item xs={6}>
					<Typography align="center" className="carstatusupdate-container__text">
						Ảnh mặt trước
					</Typography>
					<img
						className="carstatusupdate-container__img"
						src={selectedImage ? URL.createObjectURL(selectedImage) : ''}
					></img>
					<Button
						variant="outlined"
						size="medium"
						className="carstatusupdate-container__upimg"
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
					<Typography align="center" className="carstatusupdate-container__text">
						Ảnh mặt sau
					</Typography>
					<img
						className="carstatusupdate-container__img"
						src={selectedImage ? URL.createObjectURL(selectedImage) : ''}
					></img>
					<Button
						variant="outlined"
						size="medium"
						className="carstatusupdate-container__upimg"
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
					<Typography align="center" className="carstatusupdate-container__text">
						Ảnh bên trái
					</Typography>
					<img
						className="carstatusupdate-container__img"
						src={selectedImage ? URL.createObjectURL(selectedImage) : ''}
					></img>
					<Button
						variant="outlined"
						size="medium"
						className="carstatusupdate-container__upimg"
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
					<Typography align="center" className="carstatusupdate-container__text">
						Ảnh bên phải
					</Typography>
					<img
						className="carstatusupdate-container__img"
						src={selectedImage ? URL.createObjectURL(selectedImage) : ''}
					></img>
					<Button
						variant="outlined"
						size="medium"
						className="carstatusupdate-container__upimg"
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
			<Stack padding={2} spacing={1}>
				<Typography variant="h6" sx={{ alignSelf: 'start' }}>
					TRẠNG THÁI XE
				</Typography>
				<Typography sx={{ alignSelf: 'start' }}>Video trạng thái xe: {selectedVideo ? selectedVideo.name : ''}</Typography>
				<Button
					variant="outlined"
					size="medium"
					className="carstatusupdate-container__upvideo"
					component="label"
					align="center"
					sx={{
						color: variables.textgreencolor,
						borderColor: variables.textgreencolor,
						fontWeight: 'bold',
						width: '250px',
						alignSelf: 'start',
					}}
				>
					CHỌN VIDEO
					<input
						type="file"
						hidden
						accept=".mp4,.mpv,.mkv,.avi,.m4v"
						onChange={(event) => {
							setSelectedVideo(event.target.files[0]);
						}}
					/>
				</Button>
				<Typography className="carstatusupdate-container__text" sx={{ alignSelf: 'start' }}>
					Ngoại thất:
				</Typography>
				<TextField
					className="carstatusupdate-container__textfield"
					multiline={true}
					rows={5}
					maxRows={7}
					sx={{ width: '500px' }}
				></TextField>
				<Typography className="carstatusupdate-container__text" sx={{ alignSelf: 'start' }}>
					Nội thất:
				</Typography>
                <TextField
					className="carstatusupdate-container__textfield"
					multiline={true}
					rows={5}
					maxRows={7}
					sx={{ width: '500px' }}
				></TextField>
				<Typography className="carstatusupdate-container__text" sx={{ alignSelf: 'start' }}>
					Động cơ:
				</Typography>
                <TextField
					className="carstatusupdate-container__textfield"
					multiline={true}
					rows={5}
					maxRows={7}
					sx={{ width: '500px' }}
				></TextField>
				<Button
					alignSelf="center"
					className="carstatusupdate-container__update"
					variant="contained"
					sx={{
						color: '#FFF',
						borderColor: variables.textgreencolor,
						fontWeight: 'bold',
						width: '250px',
						bgcolor: variables.textgreencolor,
						alignSelf: 'center',
					}}
				>
					CẬP NHẬT TRẠNG THÁI
				</Button>
			</Stack>
		</Stack>
	);
}

export default CarStatusUpdate;
