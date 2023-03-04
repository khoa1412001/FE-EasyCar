import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Stack,
	Typography,
    Box,
    Avatar,
    TextField,
    Grid,
    Divider,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";
import apiRentalHistory from 'apis/apiRentalHistory';
import numWithSpace from 'utils/numWithSpace';
import { useSelector } from 'react-redux';
function HistoryOwnerDialog(props) {
	const user = useSelector((state) => state.user.info);
	const { openHistoryOwnerDialog, setOpenHistoryOwnerDialog, rentalid } = props;
    const [startdate, setStartdate] = React.useState(moment());
    const [enddate, setEnddate] = React.useState(moment());
	const [historydetail, setHistorydetail] = React.useState({});
	React.useEffect(() => {
		const getHistoryDetail = () => {
			const params = {
				id: rentalid,
			}
			apiRentalHistory.getRentalHistoryOwner(params).then(res => setHistorydetail(res.data))
		}
		getHistoryDetail()
	},[])

	React.useEffect(() => {
		const updateDate = () => {
			if(historydetail.rentalDateStart)
			{
				setStartdate(moment(historydetail.rentalDateStart))
				setEnddate(moment(historydetail.rentalDateEnd))
			}
		}
		updateDate()
	}, [historydetail])

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

	const insurance = () => {
		switch(historydetail.insurancetype) {
			case 0: 
				return (<><FormControlLabel
					control={
						<Checkbox
							checked={true}
							className="payment-container__checkbox"
						/>
					}
					label={`Bảo hiểm Basic ${numWithSpace(historydetail.insurance)} đ`}
				/>
				<Typography className="payment-container__smalltext">Bạn trả tối đa 50% tổng giá trị thiệt hại</Typography></>)
			case 1: 
				return (<><FormControlLabel
					control={
						<Checkbox
							checked={true}
							className="payment-container__checkbox"
						/>
					}
					label={`Bảo hiểm Premium ${numWithSpace(historydetail.insurance)} đ`}
				/>
				<Typography className="payment-container__smalltext">Bạn trả tối đa 20% tổng giá trị thiệt hại</Typography></>)
		}
	}

	const handleContract = () => {
		window.open(`/contract?id=${rentalid}`,'_blank')
	}
	return (
		<Dialog
			open={openHistoryOwnerDialog}
			maxWidth="lg"
			fullWidth
			onClose={() => setOpenHistoryOwnerDialog(false)}
			className="historylist-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					CHI TIẾT THUÊ XE<span className="blue"></span>
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack direction={'row'} spacing={1} justifyContent="center">
					<Stack className="historyinfo-container">
						<Typography className="historyinfo-container__carname" padding={3}>
							{historydetail.vehicleId && historydetail.vehicleId.brand} {historydetail.vehicleId && historydetail.vehicleId.model} {historydetail.vehicleId && historydetail.vehicleId.year} - {historydetail.vehicleId && historydetail.vehicleId.rating}
							<StarIcon htmlColor={variables.mainyellowcolor} fontSize="medium" />
						</Typography>
						<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
							<Grid item xs={3}>
								<Typography className="historyinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
									ĐẶC ĐIỂM
								</Typography>
							</Grid>
							<Grid item xs={5} spacing={2}>
								<Typography className="historyinfo-container__text">Số ghế: {historydetail.vehicleId && historydetail.vehicleId.seats}</Typography>
								<Typography className="historyinfo-container__text">Nhiên liệu: {historydetail.vehicleId && fuel(historydetail.vehicleId.fueltype)}</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography className="historyinfo-container__text">Truyền động: {historydetail.vehicleId && transmission(historydetail.vehicleId.transmission)}</Typography>
								<Typography className="historyinfo-container__text">
									Tiêu thụ nhiên liệu: {historydetail.vehicleId && historydetail.vehicleId.fuelconsumption} l/100km
								</Typography>
							</Grid>
						</Grid>
						<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
							<Grid item xs={3}>
								<Typography className="historyinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
									MÔ TẢ
								</Typography>
							</Grid>
							<Grid item xs={9} spacing={2}>
								<Typography className="historyinfo-container__text">
									<pre style={{ fontFamily: 'inherit' }}>
										{historydetail.vehicleId && historydetail.vehicleId.description}
									</pre>
								</Typography>
							</Grid>
						</Grid>
						<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
							<Grid item xs={3}>
								<Typography className="historyinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
									GIẤY TỜ THUÊ XE
								</Typography>
							</Grid>
							<Grid item xs={9} spacing={2}>
								<Typography className="historyinfo-container__text">
									<PermIdentityIcon fontSize="medium" className="paymenthistory-container__icon" /> CMND và GPLX
								</Typography>
								<Typography className="historyinfo-container__text">Và chọn 1 trong 2 hình thức</Typography>
								<Typography className="historyinfo-container__text">
									<AssignmentIndOutlinedIcon fontSize="medium" className="paymenthistory-container__icon" /> Passport hoặc Hộ khẩu hoặc
									KT3 (giữ lại)
								</Typography>
								<Typography className="historyinfo-container__text">
									<RecentActorsOutlinedIcon fontSize="medium" className="paymenthistory-container__icon" /> Căn cước công dân gắn chip
									(đối chiếu)
								</Typography>
							</Grid>
						</Grid>
						<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
							<Grid item xs={3}>
								<Typography className="historyinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
									ĐIỀU KHOẢN
								</Typography>
							</Grid>
							<Grid item xs={9} spacing={2}>
								<Typography className="historyinfo-container__text">
									{/* Quy định khác:
              <br />- Sử dụng xe đúng mục đích.
              <br />- Không sử dụng xe thuê vào mục đích phi pháp, trái pháp
              luật.
              <br />- Không sử dụng xe thuê để cầm cố, thế chấp.
              <br />- Không hút thuốc, nhả kẹo cao su, xả rác trong xe.
              <br />- Không chở hàng quốc cấm dễ cháy nổ.
              <br />- Không chở hoa quả, thực phẩm nặng mùi trong xe.
              <br />- Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng
              vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe.
              <br />- Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi
              tuyệt vời ! */}
									<pre style={{ fontFamily: 'inherit' }}>
										{historydetail.vehicleId && historydetail.vehicleId.rentterm}
									</pre>
								</Typography>
							</Grid>
						</Grid>
						<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
							<Grid item xs={3}>
								<Typography className="historyinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
									NGƯỜI THUÊ XE
								</Typography>
							</Grid>
							<Grid item xs={9} spacing={2}>
								<Stack>
									<Stack direction="row" alignItems={'center'} spacing={1}>
										<Avatar alt="Remy Sharp" src={historydetail.userId && historydetail.userId.avatar} sx={{ width: 95, height: 95 }} />
										<Stack>
											<Typography className="historyinfo-container__name">
												{historydetail.userId && historydetail.userId.username}
                                                </Typography>
												<Typography className="historyinfo-container__name">
												{historydetail.userId && historydetail.userId.phoneNumber}
                                                </Typography>
										</Stack>
									</Stack>
								</Stack>
							</Grid>
						</Grid>
					</Stack>
					<Stack className="paymenthistory-container" padding={3}>
						<Typography sx={{ fontWeight: 'bold', color: variables.textgreyercolor }} alignSelf="center">
							<span className="paymenthistory-container__price">
                                {historydetail.rentprice && numWithSpace(historydetail.rentprice)} đ
                                </span> /ngày
						</Typography>
						<Typography className="paymenthistory-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Ngày nhận xe
						</Typography>
						<LocalizationProvider dateAdapter={AdapterMoment}>
							<DateTimePicker
								inputFormat="DD/MM/YYYY hh:mm A"
								renderInput={(props) => <TextField {...props} size="small" />}
								value={startdate}
								readOnly={true}
								size="small"
							/>
						</LocalizationProvider>
						<Box padding="10px" />
						<Typography className="paymenthistory-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Ngày trả xe
						</Typography>
						<LocalizationProvider dateAdapter={AdapterMoment}>
							<DateTimePicker
								inputFormat="DD/MM/YYYY hh:mm A"
								renderInput={(props) => <TextField {...props} size="small" />}
								value={enddate}
								readOnly={true}
								size="small"
							/>
						</LocalizationProvider>
						<Box padding="10px" />
						<Typography className="paymenthistory-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Địa điểm giao nhận xe
						</Typography>
						<Typography className="paymenthistory-container__location">
							<LocationOnIcon className="paymenthistory-container__icon" /> 
                            {user.location}
						</Typography>
						<Box padding="10px" />
						<Typography className="paymenthistory-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Các chi phí khác
						</Typography>
						<Box className="paymenthistory-container__textbox" padding={1}>
							<Typography className="paymenthistory-container__smalltext">Giới hạn quãng đường: 
                            {historydetail.vehicleId && historydetail.kmlimit}km/ngày
                            </Typography>
							<Typography className="paymenthistory-container__subtext">
								Phí: <span className="bold">
                                    {historydetail.vehicleId &&  numWithSpace(historydetail.vehicleId.priceover)}đ/km
                                    </span> vượt giới hạn
							</Typography>
						</Box>
						<Box className="paymenthistory-container__textbox" padding={1}>
							<Typography className="paymenthistory-container__smalltext">Quá giờ</Typography>
							<Typography className="paymenthistory-container__subtext">
								Phí: <span className="bold">90 000đ/giờ</span>. Quá 5 giờ tính thành 1 ngày thuê xe
							</Typography>
						</Box>
						<Box className="paymenthistory-container__textbox" padding={1}>
							<Typography className="paymenthistory-container__smalltext">Vệ sinh xe</Typography>
							<Typography className="paymenthistory-container__subtext">
								Phí: <span className="bold">100 000đ</span> (nếu trả xe nhiều vết bẩn, bùn cát, sình lầy.... cần phải vệ sinh
								lại trước khi giao cho khách sau)
							</Typography>
						</Box>
						<Box className="paymenthistory-container__textbox" padding={1}>
							<Typography className="paymenthistory-container__smalltext">Khử mùi xe</Typography>
							<Typography className="paymenthistory-container__subtext">
								Phí: <span className="bold">400 000đ</span> (nếu hút thuốc lá trong xe, chở sầu riêng, hải sản nặng mùi .... cần
								phải đi khử mùi trước khi giao cho khách sau)
							</Typography>
						</Box>
						<Box padding="10px" />
						<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Bảo hiểm
						</Typography>
						{insurance()}
						<Box padding="10px" />
						<Typography className="paymenthistory-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Chi tiết giá
						</Typography>
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext">Đơn giá thuê:</Typography>
							<Typography className="paymenthistory-container__smalltext">
								{historydetail.rentprice && numWithSpace(historydetail.rentprice)} đ / ngày
                                </Typography>
						</Stack>
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext">Phí dịch vụ:</Typography>
							<Typography className="paymenthistory-container__smalltext">
								{historydetail.servicefee && numWithSpace(historydetail.servicefee)} đ / ngày
                                </Typography>
						</Stack>
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext">Tổng phí thuê xe:</Typography>
							<Typography className="paymenthistory-container__smalltext">
								{numWithSpace(historydetail.servicefee + historydetail.rentprice)} x {historydetail.days} ngày
							</Typography>
						</Stack>
						<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="payment-container__smalltext">Phí bảo hiểm:</Typography>
							<Typography className="payment-container__smalltext">{historydetail.insurance && numWithSpace(historydetail.insurance)} đ</Typography>
						</Stack>
						<Divider sx={{ marginBottom: '5px' }} />
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext bold">Tổng cộng:</Typography>
							<Typography className="paymenthistory-container__smalltext bold">
								{historydetail.totalPrice && numWithSpace(historydetail.totalPrice)} đ
							</Typography>
						</Stack>
						<Button variant='contained' onClick={handleContract}>
							IN HỘP ĐỒNG
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default HistoryOwnerDialog;
