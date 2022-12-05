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

function CarItem(props) {
	const {item} = props;
	const [handleApi, setHandleApi] = React.useState(()=> () => {handlePostpone()})
	const [text, setText] = React.useState('')
	const [openDialog, setOpenDialog] = React.useState(false);
	const [vehicleId, setVehicleId] = React.useState(item._id);
	const handlePostpone = () => {
		const params = {
			id: item._id
		}
		apiCar.postponeCar(params).then(res => {
			toast.success('Tạm dừng cho thuê xe thành công!!!')
			setTimeout(() => {window.location.reload(false)},2000)
		}).catch(err => toast.error(err.response.data.message))
	}
	const handleStatus = (status) => {
		switch (status) {
			case 2:
				return (<Button
					variant="outlined"
					size="medium"
					className="carmanagement-container-item__stop"
					onClick={() => {
						setText('Bạn có chắc muốn tạm dừng cho thuê xe ?')
						setHandleApi(() => () => {handlePostpone()})
						setOpenDialog(true)
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
				</Button>)
			case 1:
				return (<Button
					variant="outlined"
					size="medium"
					className="carmanagement-container-item__stop"
					onClick={() => {
						setText('Bạn có chắc muốn tiếp tục cho thuê xe ?')
						setHandleApi(() => () => {handlePostpone()})
						setOpenDialog(true)
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
				</Button>)
			case 0:
				return (<></>)
		}
	}
	const handleDelete = () => {
		const params = {
			id: item._id
		}
		apiCar.deleteCar(params).then(res => {
			toast.success('Xoá xe thành công!!!')
			setTimeout(() => {window.location.reload(false)},2000)
		}
		).catch(err => toast.error(err.response.data.message))
	}
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
		<Stack direction={'row'} className="carmanagement-container-item" padding={1} spacing={1} marginTop={1}>
			<img
				className="carmanagement-container-item__img"
				src="https://www.motortrend.com/uploads/sites/10/2019/09/2020-chevrolet-sonic-lt-automatic-sedan-angular-front.png?fit=around%7C960:600"
				alt=""
			/>
			<Stack width="200px">
				<Typography
					className="carmanagement-container-item__name"
					sx={{
						fontWeight: 'bold',
						fontSize: '18px',
						letterSpacing: '0.6px',
					}}
				>
					{item.brand} {item.model}
				</Typography>
				<Typography
					className="carmanagement-container-item__option"
					sx={{
						fontWeight: '600',
						fontSize: '12px',
						letterSpacing: '0.4px',
						color: variables.textgreycolor,
					}}
				>
					{transmission(item.transmission)} - {fuel(item.fueltype)} - {item.seats} Ghế
				</Typography>
				<Typography
					className="carmanagement-container-item__rating"
					sx={{
						fontWeight: '400',
						fontSize: '12px',
						letterSpacing: '0.6px',
						color: variables.maincolor,
					}}
				>
					<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="carmanagement-container-item__icon"/> 5.00 
				</Typography>
				<Button
					variant="outlined"
					size="medium"
					className="carmanagement-container-item__history"
					onClick={() => setOpenHistoryList(true)}
					sx={{
						fontWeight: 'bold',
						width: '180px ',
						marginTop:'14px'
					}}
				>
					LỊCH SỬ
				</Button>
			</Stack>
			<Stack width="200px" justifyContent='space-between'>
				<Typography
					className="carmanagement-container-item__location"
					paddingTop={'5px'}
			
					sx={{ fontWeight: '600', fontSize: '12px', letterSpacing: '0.6px' }}
				>
					{item.ownerId.location}
				</Typography>
			</Stack>
			<Stack justifyContent={'center'} width="150px">
				<Typography
					className="carmanagement-container-item__price"
					paddingLeft={'20px'}
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
			<Stack flex={1} justifyContent={'center'} spacing={1}>
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
						setText('Bạn có chắc muốn xoá thông tin xe ?')
						setHandleApi(() => () => {handleDelete()})
						setOpenDialog(true)
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
			<CarStatusList openStatusList={openStatusList} setOpenStatusList={setOpenStatusList}/>
			<HistoryList openHistoryList={openHistoryList} setOpenHistoryList={setOpenHistoryList} vehicleId={vehicleId}/>
			<ConfirmDialog openDialog={openDialog} setOpenDialog={setOpenDialog} text={text} handleApi={handleApi} />
		</Stack>
	);
}

export default CarItem;
