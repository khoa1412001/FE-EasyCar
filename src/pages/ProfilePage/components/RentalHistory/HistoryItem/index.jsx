import * as React from 'react';
import {
	Button,
	Box,
	Stack,
	Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import numWithSpace from 'utils/numWithSpace';
import HistoryDetail from '../HistoryDetail';
import apiPayment from 'apis/apiPayment';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import RentalStatusDialog from '../RentalStatusDialog';
import apiRentalHistory from 'apis/apiRentalHistory';
import RatingDialog from 'components/RatingDialog';

function HistoryItem(props) {
	const { item } = props;
	const [openHistoryDialog, setOpenHistoryDialog] = React.useState(false);
	const [openRentalStatus, setOpenRentalStatus] = React.useState(false);
	const [openRatingDialog, setOpenRatingDialog] = React.useState(false);
	const [startdate, setStartdate] = React.useState(new Date(item.rentalDateStart));
	const [enddate, setEnddate] = React.useState(new Date(item.rentalDateEnd));
	const [rating, setRating] = React.useState(item.rating);
	const [comment, setComment] = React.useState('');
	const updatestatus = () => {
		window.open(`/rentalstatus?id=${item._id}`,'_blank')
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

	const israteable = () => {
		if(item.rating == 0){
			return false;
		}
		else {
			return true;
		}
	}

	const SendRating = () => {
		if(!israteable() && (rating !== 0)){
			const params = {
				id: item._id,
				rating: rating,
				comment: comment,
			}
			apiRentalHistory.updateRating(params).then(res => {
				toast.success('Gửi đánh giá chuyến đi thành công !!!')
				setTimeout(() => {window.location.reload(false)},2000)
			}).catch(err =>{
				toast.error(err.response.data.message)
			})
		}
	}

	const makePayment = () => {
		const params = {
			orderId: uuidv4(),
			recordId: item._id,
		}
		apiPayment.makePaymentmomo(params).then((result) => {
			if (result.payUrl) {
				window.location.replace(result.payUrl);
			  } else {
				toast.warning(
				  "Có lỗi trong quá trình giao dịch, vui lòng thực hiện lại"
				);
			  }
		});
		console.log("Thanh toán ");
	}

	const status = (status) => {
		if(status) {
			return (
			<>
				<Button
					variant="outlined"
					size="medium"
					className="rentalhistory-container-item__details"
					onClick={() => setOpenHistoryDialog(true)}
					sx={{
						borderColor: variables.bluecolor,
						color: variables.bluecolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					CHI TIẾT
				</Button>
				<Button
					variant="outlined"
					size="medium"
					className="rentalhistory-container-item__rebook"
					sx={{
						borderColor: variables.textgreencolor,
						color: variables.textgreencolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					ĐẶT LẠI
				</Button>
				{item.carstatusupdate ? (
					<Button
						variant="outlined"
						size="medium"
						className="rentalhistory-container-item__updatestatus"
						onClick={() => setOpenRentalStatus(true)}
						sx={{
							borderColor: variables.orangecolor,
							color: variables.orangecolor,
							fontWeight: 'bold',
							width: '180px ',
							alignSelf: 'center',
						}}
					>
						XEM TRẠNG THÁI
					</Button>
				) : (
					<Button
						variant="outlined"
						size="medium"
						className="rentalhistory-container-item__updatestatus"
						onClick={updatestatus}
						sx={{
							borderColor: variables.orangecolor,
							color: variables.orangecolor,
							fontWeight: 'bold',
							width: '180px ',
							alignSelf: 'center',
						}}
					>
						CẬP NHẬT
					</Button>
				)}
			</>)
		}
		else {
			return (<Button
				variant="outlined"
				size="medium"
				className="rentalhistory-container-item__rebook"
				onClick={makePayment}
				sx={{
					borderColor: variables.textgreencolor,
					color: variables.textgreencolor,
					fontWeight: 'bold',
					width: '180px ',
					alignSelf: 'center',
				}}
			>
				THANH TOÁN
			</Button>)
		}
	}
	return (
		<Stack direction={'row'} className="rentalhistory-container-item" padding={1} spacing={1} marginTop={1}>
			<Box width='240px'>
				<img
					className="rentalhistory-container-item__img"
					src={item.vehicleId.modelimage}
					alt=""
				/>
			</Box>
			<Stack width="200px">
				<Typography
					className="rentalhistory-container-item__name"
					sx={{
						fontWeight: 'bold',
						fontSize: '18px',
						letterSpacing: '0.6px',
					}}
				>
					{item.vehicleId.brand} {item.vehicleId.model}
				</Typography>
				<Typography
					className="rentalhistory-container-item__option"
					sx={{
						fontWeight: '600',
						fontSize: '12px',
						letterSpacing: '0.4px',
						color: variables.textgreycolor,
					}}
				>
					{transmission(item.vehicleId.transmission)} - {fuel(item.vehicleId.fueltype)} - {item.vehicleId.seats} Ghế
				</Typography>
				<Typography
					className="rentalhistory-container-item__rating"
					sx={{
						fontWeight: '400',
						fontSize: '12px',
						letterSpacing: '0.6px',
						color: variables.maincolor,
					}}
				>
					<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="rentalhistory-container-item__icon" />{' '}
					{item.vehicleId.rating}
				</Typography>
				<Button
				variant="outlined"
				size="medium"
				className="rentalhistory-container-item__rating"
				disabled={israteable()}
				onClick={() => setOpenRatingDialog(true)}
				sx={{
					fontWeight: 'bold',
					width: '180px',
					marginTop:'12px',
				}}
				>
					ĐÁNH GIÁ
				</Button>
			</Stack>
			<Stack width="200px">
				<Typography
					className="rentalhistory-container-item__location"
					paddingTop={'5px'}
					sx={{ fontWeight: '600', fontSize: '12px', letterSpacing: '0.6px' }}
				>
					{item.vehicleId.ownerId.location}
				</Typography>
				<Typography
					className="rentalhistory-container-item__startdate"
					paddingTop={'5px'}
					sx={{ fontSize: '14px', letterSpacing: '0.8px' }}
				>
					Từ: {startdate.getDate()}/{startdate.getMonth() + 1}/{startdate.getFullYear()}
				</Typography>
				<Typography
					className="rentalhistory-container-item__enddate"
					paddingTop={'5px'}
					sx={{ fontSize: '14px', letterSpacing: '0.8px' }}
				>
					Đến: {enddate.getDate()}/{enddate.getMonth() + 1}/{enddate.getFullYear()}
				</Typography>
			</Stack>
			<Stack justifyContent={'center'} width="150px">
				<Typography
					className="rentalhistory-container-item__price"
					sx={{
						fontWeight: '600',
						fontSize: '24px',
						letterSpacing: '0.6px',
						color: variables.textgreencolor,
					}}
				>
					{numWithSpace(item.totalPrice)} ₫
				</Typography>
			</Stack>
			<Stack flex={1} justifyContent={'center'} spacing={1}>
				{status(item.status)}
			</Stack>
			{openHistoryDialog && <HistoryDetail openHistoryDialog={openHistoryDialog} setOpenHistoryDialog={setOpenHistoryDialog} rentalid={item._id}/>}
			{openRentalStatus && <RentalStatusDialog openRentalStatus={openRentalStatus} setOpenRentalStatus={setOpenRentalStatus} id={item._id}/>}
			{openRatingDialog && <RatingDialog openRatingDialog={openRatingDialog} setOpenRatingDialog={setOpenRatingDialog} rating={rating} setRating={setRating} SendRating={SendRating} comment={comment} setComment={setComment}/>}
		</Stack>
	);
}

export default HistoryItem;
