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
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";

function HistoryOwnerDialog(props) {
	const { openHistoryOwnerDialog, setOpenHistoryOwnerDialog } = props;
    const [startdate, setStartdate] = React.useState(moment());
    const [enddate, setEndate] = React.useState(moment());
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
							{/* {carinfo.brand} {carinfo.model} {carinfo.year} - {carinfo.rating} */}
                            MAZDA CX-3 2019 - 5.0
							<StarIcon htmlColor={variables.mainyellowcolor} fontSize="medium" />
						</Typography>
						<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
							<Grid item xs={3}>
								<Typography className="historyinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
									ĐẶC ĐIỂM
								</Typography>
							</Grid>
							<Grid item xs={5} spacing={2}>
								<Typography className="historyinfo-container__text">Số ghế: 4</Typography>
								<Typography className="historyinfo-container__text">Nhiên liệu: Xăng</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography className="historyinfo-container__text">Truyền động: Tự động</Typography>
								<Typography className="historyinfo-container__text">
									Tiêu thụ nhiên liệu: 21 l/100km
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
								<Typography className="historyinfo-container__text">AAAAAAAAAAAA</Typography>
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
									Quy định khác:
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
              tuyệt vời !
									{/* {carinfo.rentterm} */}
								</Typography>
							</Grid>
						</Grid>
						<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
							<Grid item xs={3}>
								<Typography className="historyinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
									CHỦ XE
								</Typography>
							</Grid>
							<Grid item xs={9} spacing={2}>
								<Stack>
									<Stack direction="row" alignItems={'center'} spacing={1}>
										<Avatar alt="Remy Sharp" src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg" sx={{ width: 95, height: 95 }} />
										<Stack>
											<Typography className="historyinfo-container__name">
                                                {/* {carinfo.ownerId && carinfo.ownerId.username} */}
                                                Khoa Dang
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
                                {/* {carinfo.rentprice} ₫  */}
                                750 000₫
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
                            {/* {carinfo.ownerId && carinfo.ownerId.location} */}
                            Quang Trung, Go Vap
						</Typography>
						<Box padding="10px" />
						<Typography className="paymenthistory-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Các chi phí khác
						</Typography>
						<Box className="paymenthistory-container__textbox" padding={1}>
							<Typography className="paymenthistory-container__smalltext">Giới hạn quãng đường: 
                            {/* {carinfo.kmlimit}km/ngày */}
                            300km/ngày
                            </Typography>
							<Typography className="paymenthistory-container__subtext">
								Phí: <span className="bold">
                                    {/* {carinfo.priceover && numWithSpace(carinfo.priceover)}đ/km */}
                                    3000đ/km
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
						<Typography className="paymenthistory-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
							Chi tiết giá
						</Typography>
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext">Đơn giá thuê:</Typography>
							<Typography className="paymenthistory-container__smalltext">
                                {/* {carinfo.rentprice} 000 / ngày */}
                                750 000đ / ngày
                                </Typography>
						</Stack>
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext">Phí dịch vụ:</Typography>
							<Typography className="paymenthistory-container__smalltext">
                                {/* {carinfo.servicefee} 000 / ngày */}
                                90 000đ / ngày
                                </Typography>
						</Stack>
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext">Tổng phí thuê xe:</Typography>
							<Typography className="paymenthistory-container__smalltext">
								{/* {carinfo.servicefee + carinfo.rentprice} 000 x {carinfo.days} ngày */}
                                1 000 000đ / ngày
							</Typography>
						</Stack>
						<Divider sx={{ marginBottom: '5px' }} />
						<Stack className="paymenthistory-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
							<Typography className="paymenthistory-container__smalltext bold">Tổng cộng:</Typography>
							<Typography className="paymenthistory-container__smalltext bold">
								{/* {carinfo.totalprice && numWithSpace(carinfo.totalprice)} 000 đ */}
                                1 000 000đ
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default HistoryOwnerDialog;
