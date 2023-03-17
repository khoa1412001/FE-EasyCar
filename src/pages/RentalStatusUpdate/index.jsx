import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import {
	Button,
	Stack,
	TextField,
	Typography,
	Paper,
} from '@mui/material';
import { useSearchParams,useNavigate } from 'react-router-dom';
import apiRentalHistory from 'apis/apiRentalHistory';
import { toast } from 'react-toastify';
function RentalStatusUpdate() {
	const [statusvideo, setStatusvideo] = React.useState();
	const [imgfront, setImgfront] = React.useState();
	const [imgrear, setImgrear] = React.useState();
	const [imgleft, setImgleft] = React.useState();
	const [imgright, setImgright] = React.useState();
	const [engstatus, setEngstatus] = React.useState('');
	const [intstatus, setIntstatus] = React.useState('');
	const [extstatus, setExtstatus] = React.useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const [id, setId] = React.useState(searchParams.get('id'));
	const [carinfo, setCarinfo] = React.useState({})
	const navigate = useNavigate();
	const handleUpdateStatus = () => {
		let params = new FormData();
		params.append('id',id);
		params.append('statusimage', imgfront);
		params.append('statusimage', imgrear);
		params.append('statusimage', imgleft);
		params.append('statusimage', imgright);
		params.append('engstatus', engstatus);
		params.append('extstatus', extstatus);
		params.append('intstatus', intstatus);
		params.append('statusvideo',statusvideo);
		apiRentalHistory.updateRentalStatus(params).then(res => {
			toast.success("Cập nhật trạng thái cho xe thành công!!")
			setTimeout(() => {navigate('/profile/history')},3000)
			window.location.reload()
		}
		).catch(err => toast.error(err.response.data.message))
	}

	React.useEffect(() => {
		const getCarInfo = () => {
			const params = {
				id: id
			}
			apiRentalHistory.getCarInfoForStatusUpdate(params).then(res => setCarinfo(res.data))
		}
		getCarInfo()
	},[id])
	return (
		<Paper sx={{ margin: '15px' }} elevation={3}>
			<Stack className="carstatusupdate-container" padding={2} spacing={1}>
				<Typography className="carstatusupdate-container__carname" variant="h4" paddingBottom={1} align="center">
					CẬP NHẬT TRẠNG THÁI XE
				</Typography>
				<Typography className="carstatusupdate-container__carname" variant="h5" paddingBottom={1}>
				{carinfo.vehicleId && carinfo.vehicleId.brand} {carinfo.vehicleId && carinfo.vehicleId.model} {carinfo.vehicleId && carinfo.vehicleId.year} - {carinfo.vehicleId && carinfo.vehicleId.licenseplate}
				</Typography>
				<Typography align="center" className="carstatusupdate-container__text">
					Ảnh mặt trước
				</Typography>
				<img className="carstatusupdate-container__img" src={imgfront ? URL.createObjectURL(imgfront) : ''}></img>
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
							setImgfront(event.target.files[0]);
						}}
					/>
				</Button>
				<Typography align="center" className="carstatusupdate-container__text">
					Ảnh mặt sau
				</Typography>
				<img className="carstatusupdate-container__img" src={imgrear ? URL.createObjectURL(imgrear) : ''}></img>
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
							setImgrear(event.target.files[0]);
						}}
					/>
				</Button>

				<Typography align="center" className="carstatusupdate-container__text">
					Ảnh bên trái
				</Typography>
				<img className="carstatusupdate-container__img" src={imgleft ? URL.createObjectURL(imgleft) : ''}></img>
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
							setImgleft(event.target.files[0]);
						}}
					/>
				</Button>

				<Typography align="center" className="carstatusupdate-container__text">
					Ảnh bên phải
				</Typography>
				<img className="carstatusupdate-container__img" src={imgright ? URL.createObjectURL(imgright) : ''}></img>
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
							setImgright(event.target.files[0]);
						}}
					/>
				</Button>

				<Typography variant="h6" sx={{ marginTop: '8px', color: variables.maincolor, fontWeight: 'bold' }}>
					TRẠNG THÁI XE
				</Typography>
				<Typography sx={{ alignSelf: 'start' }}>Video trạng thái xe: {statusvideo ? statusvideo.name : ''}</Typography>
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
							setStatusvideo(event.target.files[0]);
						}}
					/>
				</Button>
				<Typography className="carstatusupdate-container__text" sx={{ alignSelf: 'start' }}>
					<span className="bold blue">NGOẠI THẤT:</span>
				</Typography>
				<TextField
					className="carstatusupdate-container__textfield"
					multiline={true}
					rows={5}
					value={extstatus}
					onChange={(event) => setExtstatus(event.target.value)}
					sx={{ width: '500px' }}
				></TextField>
				<Typography className="carstatusupdate-container__text" sx={{ alignSelf: 'start' }}>
					<span className="bold blue">NỘI THẤT:</span>
				</Typography>
				<TextField
					className="carstatusupdate-container__textfield"
					multiline={true}
					rows={5}
					value={intstatus}
					onChange={(event) => setIntstatus(event.target.value)}
					sx={{ width: '500px' }}
				></TextField>
				<Typography className="carstatusupdate-container__text" sx={{ alignSelf: 'start' }}>
					<span className="bold blue">ĐỘNG CƠ:</span>
				</Typography>
				<TextField
					className="carstatusupdate-container__textfield"
					multiline={true}
					rows={5}
					value={engstatus}
					onChange={(event) => setEngstatus(event.target.value)}
					sx={{ width: '500px' }}
				></TextField>
				<Button
					alignSelf="center"
					className="carstatusupdate-container__update"
					variant="contained"
					onClick={handleUpdateStatus}
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
		</Paper>
	);
}

export default RentalStatusUpdate;
