import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import ImageGallery from 'react-image-gallery';
import { Grid, FormControlLabel, Checkbox, Pagination, Box, Stack, Typography, Button, Divider, Avatar, TextField } from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiCar from 'apis/apiCar';
import { toast } from 'react-toastify';
import numWithSpace from 'utils/numWithSpace';
import Contract from 'components/Contract';
import apiUser from 'apis/apiUser';
import RatingItem from './RatingItem';

function CarDetails() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [startdate, setStartdate] = React.useState(moment.unix(searchParams.get('startdate')));
	const [enddate, setEnddate] = React.useState(moment.unix(searchParams.get('enddate')));
	const [id, setId] = React.useState(searchParams.get('id'));
	const [carinfo, setCarinfo] = React.useState([]);
	const [openSignin, setOpenSignin] = React.useState(false);
	const [carimages, setCarimages] = React.useState([]);
	const [insurance, setInsurance] = React.useState(0);
	const [basic, setBasic] = React.useState('');
	const [premium, setPremium] = React.useState('');
	const [checkedbasic, setCheckedbasic] = React.useState(true);
	const [checkedpremium, setCheckedpremium] = React.useState(false);
	const [insurancetype, setInsurancetype] = React.useState(0);
	const navigate = useNavigate();
	React.useEffect(() => {
		const getInfo = () => {
			const params = {
				id: id,
				startdate: startdate.unix(),
				enddate: enddate.unix(),
			};
			apiCar
				.getCarDetails(params)
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
		const GetImage = () => {
			if (carinfo.length != 0) {
				const newImages = carinfo.vehicleimage.map((item) => ({
					original: item,
					thumbnail: 'https://picsum.photos/id/1018/250/150/',
					originalHeight: '450px',
				}));
				setCarimages(newImages);
			}
			if (carinfo.basicinsurance) {
				setInsurance(carinfo.basicinsurance);
				setInsurancetype(0);
				setBasic(`Bảo hiểm Basic ${numWithSpace(carinfo.basicinsurance)} đ`);
				setPremium(`Bảo hiểm Premium ${numWithSpace(carinfo.premiuminsurance)} đ`);
			}
		};
		GetImage();
	}, [carinfo]);

	React.useEffect(() => {
		const ChangeInsurance = () => {
			if (carinfo.basicinsurance) {
				if (checkedbasic) {
					setInsurance(carinfo.basicinsurance);
					setInsurancetype(0);
				} else {
					setInsurance(carinfo.premiuminsurance);
					setInsurancetype(1);
				}
			}
		};
		ChangeInsurance();
	}, [checkedbasic]);

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

	const handleApi = () => {
		const params = {
			vehicleId: id,
			rentalDateStart: startdate.unix(),
			rentalDateEnd: enddate.unix(),
			insurance: insurance,
			insurancetype: insurancetype,
			servicefee: carinfo.servicefee,
			rentprice: carinfo.rentprice,
			totalPrice: carinfo.totalprice + insurance,
		};
		apiUser
			.addRentalHistory(params)
			.then((res) => {
				toast.success('Đặt xe thành công, vui lòng thanh toán trong lịch sử !!!');
				setTimeout(() => {
					navigate('/profile/history');
				}, 5000);
			})
			.catch((err) => toast.error(err.response.data.message));
	};

	return (
		<Stack direction={'row'} spacing={1} padding={2} justifyContent="center" bgcolor={variables.maingreycolor}>
			<Stack className="carinfo-container">
				<ImageGallery
					additionalClass="carinfo-container__imgcontainer"
					showThumbnails={false}
					showPlayButton={false}
					showFullscreenButton={false}
					showBullets={true}
					items={carimages}
				/>
				<Typography className="carinfo-container__carname" padding={3}>
					{carinfo.brand} {carinfo.model} {carinfo.year} - {carinfo.rating}
					<StarIcon htmlColor={variables.mainyellowcolor} fontSize="medium" />
				</Typography>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							ĐẶC ĐIỂM
						</Typography>
					</Grid>
					<Grid item xs={5} spacing={2}>
						<Typography className="carinfo-container__text">Số ghế: {carinfo.seats}</Typography>
						<Typography className="carinfo-container__text">Nhiên liệu: {fuel(carinfo.fueltype)}</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography className="carinfo-container__text">Truyền động: {transmission(carinfo.transmission)}</Typography>
						<Typography className="carinfo-container__text">
							Tiêu thụ nhiên liệu: {carinfo.fuelconsumption} l/100km
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							MÔ TẢ
						</Typography>
					</Grid>
					<Grid item xs={9} spacing={2}>
						<Typography className="carinfo-container__text">
							<pre style={{ fontFamily: 'inherit' }}>{carinfo.description}</pre>
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							GIẤY TỜ THUÊ XE
						</Typography>
					</Grid>
					<Grid item xs={9} spacing={2}>
						<Typography className="carinfo-container__text">
							<PermIdentityIcon fontSize="medium" className="payment-container__icon" /> CMND và GPLX
						</Typography>
						<Typography className="carinfo-container__text">Và chọn 1 trong 2 hình thức</Typography>
						<Typography className="carinfo-container__text">
							<AssignmentIndOutlinedIcon fontSize="medium" className="payment-container__icon" /> Passport hoặc Hộ khẩu hoặc
							KT3 (giữ lại)
						</Typography>
						<Typography className="carinfo-container__text">
							<RecentActorsOutlinedIcon fontSize="medium" className="payment-container__icon" /> Căn cước công dân gắn chip
							(đối chiếu)
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							ĐIỀU KHOẢN
						</Typography>
					</Grid>
					<Grid item xs={9} spacing={2}>
						<Typography className="carinfo-container__text">
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
							<pre style={{ fontFamily: 'inherit' }}>{carinfo.rentterm}</pre>
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							CHỦ XE
						</Typography>
					</Grid>
					<Grid item xs={9} spacing={2}>
						<Stack>
							<Stack direction="row" alignItems={'center'} spacing={1}>
								<Avatar alt="Remy Sharp" src={carinfo.ownerId && carinfo.ownerId.avatar} sx={{ width: 95, height: 95 }} />
								<Stack>
									<Typography className="carinfo-container__name">{carinfo.ownerId && carinfo.ownerId.username}</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
				<Divider sx={{marginLeft:'24px', marginRight:'24px',}}/>
				<Typography className="carinfo-container__carname" paddingLeft={3} paddingTop={1}>
					ĐÁNH GIÁ
				</Typography>
				<RatingItem/>
				<RatingItem/>
				<RatingItem/>
				<RatingItem/>
				<RatingItem/>
				<Pagination count={10} shape="rounded" sx={{ alignSelf: 'center', justifySelf: 'flex-end', marginTop:'10px', marginBottom:'10px', }}/>
			</Stack>
			<Stack className="payment-container" padding={3}>
				<Typography sx={{ fontWeight: 'bold', color: variables.textgreyercolor }} alignSelf="center">
					<span className="payment-container__price"> {carinfo.rentprice && numWithSpace(carinfo.rentprice)} đ </span> /ngày
				</Typography>
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
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
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
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
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					Địa điểm giao nhận xe
				</Typography>
				<Typography className="payment-container__location">
					<LocationOnIcon className="payment-container__icon" /> {carinfo.ownerId && carinfo.ownerId.location}
				</Typography>
				<Box padding="10px" />
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					Các chi phí khác
				</Typography>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">Giới hạn quãng đường: {carinfo.kmlimit}km/ngày</Typography>
					<Typography className="payment-container__subtext">
						Phí: <span className="bold">{carinfo.priceover && numWithSpace(carinfo.priceover)}đ/km</span> vượt giới hạn
					</Typography>
				</Box>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">Quá giờ</Typography>
					<Typography className="payment-container__subtext">
						Phí: <span className="bold">90 000đ/giờ</span>. Quá 5 giờ tính thành 1 ngày thuê xe
					</Typography>
				</Box>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">Vệ sinh xe</Typography>
					<Typography className="payment-container__subtext">
						Phí: <span className="bold">100 000đ</span> (nếu trả xe nhiều vết bẩn, bùn cát, sình lầy.... cần phải vệ sinh lại
						trước khi giao cho khách sau)
					</Typography>
				</Box>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">Khử mùi xe</Typography>
					<Typography className="payment-container__subtext">
						Phí: <span className="bold">400 000đ</span> (nếu hút thuốc lá trong xe, chở sầu riêng, hải sản nặng mùi .... cần
						phải đi khử mùi trước khi giao cho khách sau)
					</Typography>
				</Box>
				<Box padding="10px" />
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					Bảo hiểm
				</Typography>
				<FormControlLabel
					control={
						<Checkbox
							checked={checkedbasic}
							className="payment-container__checkbox"
							onChange={() => {
								setCheckedpremium(false);
								setCheckedbasic(true);
							}}
						/>
					}
					label={basic}
				/>
				<Typography className="payment-container__smalltext">Bạn trả tối đa 50% tổng giá trị thiệt hại</Typography>
				<FormControlLabel
					control={
						<Checkbox
							checked={checkedpremium}
							className="payment-container__checkbox"
							onChange={() => {
								setCheckedpremium(true);
								setCheckedbasic(false);
							}}
						/>
					}
					label={premium}
				/>
				<Typography className="payment-container__smalltext">Bạn trả tối đa 20% tổng giá trị thiệt hại</Typography>
				<Box padding="10px" />
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					Chi tiết giá
				</Typography>
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">Đơn giá thuê:</Typography>
					<Typography className="payment-container__smalltext">
						{carinfo.rentprice && numWithSpace(carinfo.rentprice)} đ/ ngày
					</Typography>
				</Stack>
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">Phí dịch vụ:</Typography>
					<Typography className="payment-container__smalltext">
						{carinfo.servicefee && numWithSpace(carinfo.servicefee)} đ/ ngày
					</Typography>
				</Stack>
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">Tổng phí thuê xe:</Typography>
					<Typography className="payment-container__smalltext">
						{numWithSpace(carinfo.servicefee + carinfo.rentprice)} đ x {carinfo.days} ngày
					</Typography>
				</Stack>
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">Phí bảo hiểm:</Typography>
					<Typography className="payment-container__smalltext">{insurance && numWithSpace(insurance)} đ</Typography>
				</Stack>
				<Divider sx={{ marginBottom: '5px' }} />
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext bold">Tổng cộng:</Typography>
					<Typography className="payment-container__smalltext bold">
						{carinfo.totalprice && numWithSpace(carinfo.totalprice + insurance)} đ
					</Typography>
				</Stack>
				<Button
					variant="outlined"
					className="payment-container__button"
					startIcon={<CheckIcon />}
					onClick={() => setOpenSignin(true)}
				>
					ĐẶT XE
				</Button>
			</Stack>
			<Contract openSignin={openSignin} setOpenSignin={setOpenSignin} handleApi={handleApi} />
		</Stack>
	);
}

export default CarDetails;
