import { Button, Dialog, DialogContent, DialogTitle, Stack, Typography, TextField, Autocomplete, Divider } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import CarStatusDialog from '../CarStatusDialog';
import apiCar from 'apis/apiCar';
import { toast } from 'react-toastify';

function CarUpdateDialog(props) {
	const { openCarUpdateDialog, setOpenCarUpdateDialog, vehicleId } = props;
	const [rentprice, setRentprice] = React.useState('');
	const [imgfront, setImgfront] = React.useState();
	const [imgrear, setImgrear] = React.useState();
	const [imgleft, setImgleft] = React.useState();
	const [imgright, setImgright] = React.useState();
	const [state, setState] = React.useState(1);
	const [carinfo, setCarinfo] = React.useState([]);
	const [description, setDescription] = React.useState('');
	const [rentterm, setRentterm] = React.useState('');
	const options = [
		{ label: 'Ảnh mặt trước', id: 1 },
		{ label: 'Ảnh mặt sau', id: 2 },
		{ label: 'Ảnh mặt trái', id: 3 },
		{ label: 'Ảnh mặt phải', id: 4 },
	];

	React.useEffect(() => {
		const getInfo = () => {
			const params = {
				id: vehicleId,
			};
			apiCar
				.getOwnedCarDetail(params)
				.then((res) => {
					setCarinfo(res.data);
				})
				.catch((err) => {
					toast.error('Lỗi hệ thống, vui lòng thử lại sau!!');
				});
		};
		getInfo();
	}, []);

	React.useEffect(() => {
		const setImg = () => {
			if (carinfo.vehicleimage) {
				setImgfront(carinfo.vehicleimage[0]);
				setImgrear(carinfo.vehicleimage[1]);
				setImgleft(carinfo.vehicleimage[2]);
				setImgright(carinfo.vehicleimage[3]);
				setDescription(carinfo.description);
				setRentterm(carinfo.rentterm);
				setRentprice(carinfo.rentprice);
			}
		};
		setImg();
	}, [carinfo]);

	const handleUpdatePrice = () => {
		const params = {
			id : vehicleId,
			rentprice: rentprice,
		}
		
		apiCar.updateVehicleRentPrice(params)
		.then((res) => {
			toast.success('Cập nhật giá thuê xe thành công!!!');
			setOpenCarUpdateDialog(false);
			setTimeout(() => {
				window.location.reload(false);
			}, 2000);
		})
		.catch((err) => {
			toast.error('Lỗi hệ thống, vui lòng thử lại sau!!');
		});
	}

	const handleUpdateInfo = () => {
		const params = {
			id : vehicleId,
			rentterm: rentterm,
			description: description,
		}
		
		apiCar.updateVehicleInfo(params)
		.then((res) => {
			toast.success('Cập nhật thông tin xe thành công!!!');
			setOpenCarUpdateDialog(false);
			setTimeout(() => {
				window.location.reload(false);
			}, 2000);
		})
		.catch((err) => {
			toast.error('Lỗi hệ thống, vui lòng thử lại sau!!');
		});
	}

	const handleUpdateImage = () => {
		let params = new FormData();
		var updateable = false;
		params.append('id', vehicleId);
		if(!isValidUrl(imgfront)){
			params.append('order', 1);
			params.append('vehicleimage', imgfront);
			updateable = true;
		}

		if(!isValidUrl(imgrear)){
			params.append('order', 2);
			params.append('vehicleimage', imgrear);
			updateable = true;
		}

		if(!isValidUrl(imgleft)){
			params.append('order', 3);
			params.append('vehicleimage', imgleft);
			updateable = true;
		}

		if(!isValidUrl(imgright)){
			params.append('order', 4);
			params.append('vehicleimage', imgright);
			updateable = true;
		}
		
		if(updateable) {
			apiCar.updateVehicleImage(params)
			.then((res) => {
				toast.success('Cập nhật hình ảnh xe thành công!!!');
				setOpenCarUpdateDialog(false);
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => {
				toast.error('Lỗi hệ thống, vui lòng thử lại sau!!');
			});
		}
	}

	const isValidUrl = (urlString) => {
		var urlPattern = new RegExp(
			'^(https?:\\/\\/)?' + // validate protocol
				'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
				'((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
				'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
				'(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
				'(\\#[-a-z\\d_]*)?$',
			'i'
		); // validate fragment locator
		return !!urlPattern.test(urlString);
	};

	const ProcessURL = (url) => {
		if(url) {
			if(isValidUrl(url)) {
				return url;
			}
			return URL.createObjectURL(url);
		}
	}

	const renderComponent = (state) => {
		switch (state) {
			case 1:
				return (
					<>
						<img className="carupdatedialog-container__img" src={ProcessURL(imgfront)}></img>
						<Button
							variant="outlined"
							size="medium"
							className="carupdatedialog-container__upimg"
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
					</>
				);
			case 2:
				return (
					<>
						<img className="carupdatedialog-container__img" src={ProcessURL(imgrear)}></img>
						<Button
							variant="outlined"
							size="medium"
							className="carupdatedialog-container__upimg"
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
					</>
				);
			case 3:
				return (
					<>
						<img className="carupdatedialog-container__img" src={ProcessURL(imgleft)}></img>
						<Button
							variant="outlined"
							size="medium"
							className="carupdatedialog-container__upimg"
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
					</>
				);
			case 4:
				return (
					<>
						<img className="carupdatedialog-container__img" src={ProcessURL(imgright)}></img>
						<Button
							variant="outlined"
							size="medium"
							className="carupdatedialog-container__upimg"
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
					</>
				);
		}
	};
	return (
		<Dialog
			open={openCarUpdateDialog}
			maxWidth="lg"
			fullWidth
			onClose={() => setOpenCarUpdateDialog(false)}
			className="carupdatedialog-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CẬP NHẬT THÔNG TIN XE
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="carupdatedialog-container__tilte">GIÁ THUÊ THEO NGÀY</Typography>
					<TextField
						className="carupdatedialog-container__textfield"
						value={rentprice}
						onChange={(event) => setRentprice(event.target.value)}
						sx={{ width: '500px' }}
					></TextField>
					<Button
							variant="contained"
							size="medium"
							className="carupdatedialog-container__upimg"
							component="label"
							onClick={handleUpdatePrice}
							sx={{
								color: 'white',
								borderColor: variables.textgreencolor,
								fontWeight: 'bold',
								width: '250px',
								alignSelf:'center',
							}}
						>
							CẬP NHẬT GIÁ TIỀN THUÊ
					</Button>
					<Divider></Divider>
					<Typography className="carupdatedialog-container__tilte">MÔ TẢ</Typography>
					<TextField
						className="carupdatedialog-container__textfield"
						multiline={true}
						rows={5}
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						sx={{ width: '500px' }}
					></TextField>
					<Typography className="carupdatedialog-container__tilte">QUY ĐỊNH</Typography>
					<TextField
						className="carupdatedialog-container__textfield"
						multiline={true}
						rows={5}
						value={rentterm}
						onChange={(event) => setRentterm(event.target.value)}
						sx={{ width: '500px' }}
					></TextField>
					<Button
							variant="contained"
							size="medium"
							className="carupdatedialog-container__upimg"
							component="label"
							onClick={handleUpdateInfo}
							sx={{
								color: 'white',
								borderColor: variables.textgreencolor,
								fontWeight: 'bold',
								width: '250px',
								alignSelf:'center',
							}}
						>
							CẬP NHẬT THÔNG TIN XE
					</Button>
					<Divider></Divider>
					<Typography className="carupdatedialog-container__tilte">HÌNH ẢNH</Typography>
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
						renderInput={(params) => <TextField {...params} size="small" />}
					/>
					{renderComponent(state)}
					<Button
							variant="contained"
							size="medium"
							className="carupdatedialog-container__upimg"
							component="label"
							onClick={handleUpdateImage}
							sx={{
								color: 'white',
								borderColor: variables.textgreencolor,
								fontWeight: 'bold',
								width: '250px',
								alignSelf:'center',
							}}
						>
							CẬP NHẬT HÌNH ẢNH
					</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default CarUpdateDialog;
