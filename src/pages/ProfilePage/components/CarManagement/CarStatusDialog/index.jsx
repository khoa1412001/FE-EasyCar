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
function CarStatusDialog(props) {
	const { openCarStatus, setOpenCarStatus } = props;
	const [selectedImage, setSelectedImage] = React.useState();
	return (
		<Dialog
			open={openCarStatus}
			maxWidth="xl"
			fullWidth
			onClose={() => setOpenCarStatus(false)}
			className="carstatus-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					TRẠNG THÁI XE - <span className="blue">01/11/2022</span>
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Typography className='carstatus-container__carname' variant='h5' paddingBottom={1}>KIA MORNING 2020 - 51K 13116</Typography>
				<Grid container spacing={1} paddingBottom={1}>
					<Grid item xs={6}>
						<Typography align='center' className='carstatus-container__text'>Ảnh mặt trước</Typography>
						<img className="carstatus-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
					</Grid>
					<Grid item xs={6}>
					<Typography align='center' className='carstatus-container__text'>Ảnh mặt sau</Typography>
						<img className="carstatus-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
					</Grid>
					<Grid item xs={6}>
					<Typography align='center' className='carstatus-container__text'>Ảnh bên trái</Typography>
						<img className="carstatus-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
					</Grid>
					<Grid item xs={6}>
					<Typography align='center' className='carstatus-container__text'>Ảnh bên phải</Typography>
						<img className="carstatus-container__img" src={selectedImage ? URL.createObjectURL(selectedImage) : ''}></img>
					</Grid>
				</Grid>
				<Typography variant='h6'>TRẠNG THÁI XE:</Typography>
				<Stack alignItems='center' paddingBottom={2} spacing={1}>
				<video width="900" controls>
				</video>
				<Typography className='carstatus-container__text' sx={{alignSelf:'start'}}>Ngoại thất: TỐT</Typography>
				<Typography className='carstatus-container__text' sx={{alignSelf:'start'}}>Nội thất: TỐT</Typography>
				<Typography className='carstatus-container__text' sx={{alignSelf:'start'}}>Động cơ: TỐT</Typography>
				<Button alignSelf="center" variant='contained'>
					CẬP NHẬT TRẠNG THÁI
				</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default CarStatusDialog;
