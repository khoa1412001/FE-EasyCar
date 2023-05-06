import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import * as React from 'react';
import CarStatusList from '../CarStatusListDialog';
import HistoryList from '../HistoryList';
import numWithSpace from 'utils/numWithSpace';
import ConfirmDialog from 'components/ConfirmDialog';
import apiCar from 'apis/apiCar';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import CarUpdateDialog from '../CarUpdateDialog';
function CarItem2(props) {
	const { item } = props;
	const [handleApi, setHandleApi] = React.useState(() => () => {
		handlePostpone();
	});
	const [text, setText] = React.useState('');
	const [openDialog, setOpenDialog] = React.useState(false);
	const [vehicleId, setVehicleId] = React.useState(item._id);
	const [openCarUpdateDialog, setOpenCarUpdateDialog] = React.useState(false);
	const handlePostpone = () => {
		const params = {
			id: item._id,
		};
		apiCar
			.postponeCar(params)
			.then((res) => {
				toast.success('Tạm dừng cho thuê xe thành công!!!');
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => toast.error(err.response.data.message));
	};

	const handleResume = () => {
		const params = {
			id: item._id,
		};
		apiCar
			.resumeCar(params)
			.then((res) => {
				toast.success('Tiếp tục cho thuê xe thành công!!!');
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => toast.error(err.response.data.message));
	};
	const handleStatus = (status) => {
		switch (status) {
			case 2:
				return (
					<Button
						variant="outlined"
						size="medium"
						className="carmanagement-container-item__stop"
						onClick={() => {
							setText('Bạn có chắc muốn tạm dừng cho thuê xe ?');
							setHandleApi(() => () => {
								handlePostpone();
							});
							setOpenDialog(true);
						}}
						sx={{
							borderColor: variables.orangecolor,
							color: variables.orangecolor,
							fontWeight: 'bold',
							width: '180px ',
							alignSelf: 'center',
						}}
					>
						TẠM DỪNG
					</Button>
				);
			case 1:
				return (
					<Button
						variant="outlined"
						size="medium"
						className="carmanagement-container-item__stop"
						onClick={() => {
							setText('Bạn có chắc muốn tiếp tục cho thuê xe ?');
							setHandleApi(() => () => {
								handleResume();
							});
							setOpenDialog(true);
						}}
						sx={{
							borderColor: variables.orangecolor,
							color: variables.orangecolor,
							fontWeight: 'bold',
							width: '180px ',
							alignSelf: 'center',
						}}
					>
						TIẾP TỤC
					</Button>
				);
			case 0:
				return <></>;
		}
	};
	const handleDelete = () => {
		const params = {
			id: item._id,
		};
		apiCar
			.deleteCar(params)
			.then((res) => {
				toast.success('Xoá xe thành công!!!');
				setTimeout(() => {
					window.location.reload(false);
				}, 2000);
			})
			.catch((err) => toast.error(err.response.data.message));
	};
	const transmission = (transmissiontype) => {
		switch (transmissiontype) {
			case 'AUTO':
				return 'Tự động';
			case 'MANUAL':
				return 'Số sàn';
		}
	};

	const fuel = (fueltype) => {
		switch (fueltype) {
			case 'GASOLINE':
				return 'Xăng';
			case 'DIESEL':
				return 'Dầu Diesel';
			case 'ELECTRIC':
				return 'Điện';
		}
	};
	const [openHistoryList, setOpenHistoryList] = React.useState(false);
	const [openStatusList, setOpenStatusList] = React.useState(false);
	return (
		<Stack direction={'row'} className="carmanagement-container-item" spacing={1} marginTop={1} marginLeft={1}>
			<Box width="400px" height="310px" sx={{minWidth:'400px',display:'grid',}}>
				<img className="carmanagement-container-item__img" src={item.vehicleimage[0]} alt="" />
			</Box>
			<Stack paddingLeft={2} paddingTop={1} sx={{ width: '100%' }}>
				<Stack height="210px">
					<Typography
						className="carmanagement-container-item__name"
						sx={{
							fontWeight: 'bold',
							fontSize: '20px',
							letterSpacing: '0.4px',
						}}
					>
						{item.brand} {item.model} {item.year} - {item.rating}{' '}
						<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="rentalhistory-container-item__icon" />
					</Typography>
					<Typography
						className="carmanagement-container-item__option"
						sx={{
							fontWeight: '600',
							fontSize: '15px',
							letterSpacing: '0.4px',
							color: variables.textgreycolor,
						}}
					>
						{transmission(item.transmission)} - {fuel(item.fueltype)} - {item.seats} Ghế
					</Typography>
					<Typography
						className="carmanagement-container-item__location"
						sx={{ fontWeight: '600', fontSize: '15px', letterSpacing: '0.6px' }}
					>
						{item.ownerId.location}
					</Typography>
					<Typography
						className="carmanagement-container-item__price"
						sx={{
							fontWeight: '600',
							fontSize: '24px',
							letterSpacing: '0.6px',
							color: variables.textgreencolor,
						}}
					>
						{numWithSpace(item.rentprice)} ₫
					</Typography>
				</Stack>
				<Stack justifyContent={'center'} direction="row" sx={{ width: '100%' }}>
					<Button
						variant="outlined"
						size="medium"
						className="carmanagement-container-item__history"
						onClick={() => setOpenHistoryList(true)}
						sx={{
							fontWeight: 'bold',
							width: '180px ',
							marginBottom: '8px',
						
						}}
					>
						LỊCH SỬ
					</Button>
					<Button
						variant="outlined"
						size="medium"
						className="carmanagement-container-item__history"
						onClick={() => setOpenCarUpdateDialog(true)}
						sx={{
							fontWeight: 'bold',
							width: '180px ',
							marginBottom: '8px',
							marginLeft: '8px',
						}}
					>
						CẬP NHẬT
					</Button>
				</Stack>
				<Stack justifyContent={'center'} direction="row" spacing={1} sx={{ width: '100%' }}>
					<Button
						variant="outlined"
						size="medium"
						className="carmanagement-container-item__status"
						onClick={() => setOpenStatusList(true)}
						sx={{
							borderColor: variables.textgreencolor,
							color: variables.textgreencolor,
							fontWeight: 'bold',
							width: '180px ',
							alignSelf: 'center',
						}}
					>
						TRẠNG THÁI XE
					</Button>
					{handleStatus(item.status)}
					<Button
						variant="outlined"
						size="medium"
						className="carmanagement-container-item__delete"
						onClick={() => {
							setText('Bạn có chắc muốn xoá thông tin xe ?');
							setHandleApi(() => () => {
								handleDelete();
							});
							setOpenDialog(true);
						}}
						sx={{
							borderColor: variables.redcolor,
							color: variables.redcolor,
							fontWeight: 'bold',
							width: '180px ',
							alignSelf: 'center',
						}}
					>
						XOÁ
					</Button>
				</Stack>
			</Stack>
			{openStatusList && (
				<CarStatusList openStatusList={openStatusList} setOpenStatusList={setOpenStatusList} vehicleId={vehicleId} />
			)}
			{openHistoryList && (
				<HistoryList openHistoryList={openHistoryList} setOpenHistoryList={setOpenHistoryList} vehicleId={vehicleId} />
			)}
			{openCarUpdateDialog && (
				<CarUpdateDialog openCarUpdateDialog={openCarUpdateDialog} setOpenCarUpdateDialog={setOpenCarUpdateDialog} vehicleId={vehicleId} />
			)}
			<ConfirmDialog openDialog={openDialog} setOpenDialog={setOpenDialog} text={text} handleApi={handleApi} />
		</Stack>
	);
}

export default CarItem2;
