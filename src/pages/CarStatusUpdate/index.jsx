import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import { Button, Stack, TextField, Typography, Paper, Autocomplete } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiCar from 'apis/apiCar';
import { toast } from 'react-toastify';
import Loading from 'components/Loading';
function CarStatusUpdate() {
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
	const [carinfo, setCarinfo] = React.useState({});
	const [state, setState] = React.useState(1);
	const navigate = useNavigate();
	const [uploading, setUploading] = React.useState(false);
	const handleUpdateStatus = () => {
		setUploading(true)
		let params = new FormData();
		params.append('id', id);
		params.append('statusimage', imgfront);
		params.append('statusimage', imgrear);
		params.append('statusimage', imgleft);
		params.append('statusimage', imgright);
		params.append('engstatus', engstatus);
		params.append('extstatus', extstatus);
		params.append('intstatus', intstatus);
		params.append('statusvideo', statusvideo);
		apiCar
			.updateCarStatus(params)
			.then((res) => {
				toast.success('Cập nhật trạng thái cho xe thành công!!');
				setUploading(false)
				setTimeout(() => {
					navigate('/profile/carmanage');
				}, 3000);
			})
			.catch((err) => toast.error(err.response.data.message));
	};

	React.useEffect(() => {
		const getCarInfo = () => {
			const params = {
				id: id,
			};
			apiCar.getCarInfoForStatusUpdate(params).then((res) => setCarinfo(res.data));
		};
		getCarInfo();
	}, [id]);

	const options = [
		{ label: 'Ảnh mặt trước', id: 1 },
		{ label: 'Ảnh mặt sau', id: 2 },
		{ label: 'Ảnh mặt trái', id: 3 },
		{ label: 'Ảnh mặt phải', id: 4 },
		{ label: 'Video', id: 5 },
	];

	const renderComponent = (state) => {
		switch (state) {
			case 1:
				return (
				<>
				<img className="carstatusupdate-container__img" src={imgfront ? URL.createObjectURL(imgfront) : ''}></img>
				<Button
					variant="outlined"
					size="medium"
					className="carstatusupdate-container__upimg"
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
							setImgfront(event.target.files[0]);
						}}
					/>
				</Button>
				</>)
			case 2:
				return (
				<>
				<img className="carstatusupdate-container__img" src={imgrear ? URL.createObjectURL(imgrear) : ''}></img>
				<Button
					variant="outlined"
					size="medium"
					className="carstatusupdate-container__upimg"
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
							setImgrear(event.target.files[0]);
						}}
					/>
				</Button>
				</>)
			case 3:
				return (
				<>
				<img className="carstatusupdate-container__img" src={imgleft ? URL.createObjectURL(imgleft) : ''}></img>
				<Button
					variant="outlined"
					size="medium"
					className="carstatusupdate-container__upimg"
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
							setImgleft(event.target.files[0]);
						}}
					/>
				</Button>
				</>)
			case 4:
				return (
				<>
				<img className="carstatusupdate-container__img" src={imgright ? URL.createObjectURL(imgright) : ''}></img>
				<Button
					variant="outlined"
					size="medium"
					className="carstatusupdate-container__upimg"
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
							setImgright(event.target.files[0]);
						}}
					/>
				</Button>
				</>)
			case 5:
				return (
				<>
				<Typography sx={{ alignSelf: 'start' }}>Video trạng thái xe: {statusvideo ? statusvideo.name : ''}</Typography>
				<Button
					variant="outlined"
					size="medium"
					className="carstatusupdate-container__upvideo"
					component="label"
					sx={{
						color: variables.textgreencolor,
						borderColor: variables.textgreencolor,
						fontWeight: 'bold',
						width: '250px',
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
				</>)
		}
	}

	return (
		<Paper sx={{ marginTop: '15px', marginBottom:'15px',marginLeft:'70px', marginRight:'70px' }} elevation={3}>
			<Stack className="carstatusupdate-container" padding={2} spacing={1}>
				<Typography className="carstatusupdate-container__carname" variant="h4" paddingBottom={1} align="center">
					CẬP NHẬT TRẠNG THÁI XE
				</Typography>
				<Typography className="carstatusupdate-container__carname" variant="h5" paddingBottom={1}>
					{carinfo.brand} {carinfo.model} {carinfo.year} - {carinfo.licenseplate}
				</Typography>
				<Autocomplete
					disablePortal
					disableClearable
					id="combo-box-demo"
					options={options}
					sx={{ width: 300 }}
					defaultValue={options[0]}
					onChange={(event, newValue) => {
						setState(newValue.id);
					}}
					renderInput={(params) => <TextField {...params} size='small' />}
				/>
				{renderComponent(state)}
			
				<Typography variant="h6" sx={{ marginTop: '8px', color: variables.maincolor, fontWeight: 'bold' }}>
					TRẠNG THÁI XE
				</Typography>
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
			{uploading && <Loading/>}
		</Paper>
	);
}

export default CarStatusUpdate;
