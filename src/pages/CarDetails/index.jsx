import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { Box } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import ImageGallery from 'react-image-gallery';
import { Grid, FormControlLabel, Checkbox } from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import Avatar from '@mui/material/Avatar';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiCar from 'apis/apiCar';
import { toast } from 'react-toastify';
import numWithSpace from 'utils/numWithSpace';
import Contract from 'components/Contract';
import apiUser from 'apis/apiUser';

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
					toast.error('L???i h??? th???ng, vui l??ng th??? l???i sau!!');
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
				setBasic(`B???o hi???m Basic ${numWithSpace(carinfo.basicinsurance)} ??`);
				setPremium(`B???o hi???m Premium ${numWithSpace(carinfo.premiuminsurance)} ??`);
			}
		};
		GetImage();
	}, [carinfo]);

  React.useEffect(() => {
		const ChangeInsurance = () => {
			if (carinfo.basicinsurance) {
				if(checkedbasic){
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
				return 'T??? ?????ng';
			case 'MANUAL':
				return 'S??? s??n';
		}
	};

	const fuel = (fueltype) => {
		switch (fueltype) {
			case 'GASOLINE':
				return 'X??ng';
			case 'DIESEL':
				return 'D???u Diesel';
			case 'ELECTRIC':
				return '??i???n';
		}
	};

  const handleApi = () => {
    const params = {
      vehicleId : id,
      rentalDateStart: startdate.unix(),
      rentalDateEnd: enddate.unix(),
      insurance: insurance,
      insurancetype: insurancetype,
      servicefee: carinfo.servicefee,
      rentprice: carinfo.rentprice,
      totalPrice: carinfo.totalprice + insurance,
    };
    apiUser.addRentalHistory(params).then(res => {
		toast.success("?????t xe th??nh c??ng, vui l??ng thanh to??n trong l???ch s??? !!!")
		setTimeout(() => {navigate('/profile/history')},5000)
	}).catch(err => toast.error(err.response.data.message))
  }

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
							?????C ??I???M
						</Typography>
					</Grid>
					<Grid item xs={5} spacing={2}>
						<Typography className="carinfo-container__text">S??? gh???: {carinfo.seats}</Typography>
						<Typography className="carinfo-container__text">Nhi??n li???u: {fuel(carinfo.fueltype)}</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography className="carinfo-container__text">Truy???n ?????ng: {transmission(carinfo.transmission)}</Typography>
						<Typography className="carinfo-container__text">
							Ti??u th??? nhi??n li???u: {carinfo.fuelconsumption} l/100km
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							M?? T???
						</Typography>
					</Grid>
					<Grid item xs={9} spacing={2}>
						<Typography className="carinfo-container__text">
							<pre style={{ fontFamily: 'inherit' }}>
								{carinfo.description}
							</pre>
							</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							GI???Y T??? THU?? XE
						</Typography>
					</Grid>
					<Grid item xs={9} spacing={2}>
						<Typography className="carinfo-container__text">
							<PermIdentityIcon fontSize="medium" className="payment-container__icon" /> CMND v?? GPLX
						</Typography>
						<Typography className="carinfo-container__text">V?? ch???n 1 trong 2 h??nh th???c</Typography>
						<Typography className="carinfo-container__text">
							<AssignmentIndOutlinedIcon fontSize="medium" className="payment-container__icon" /> Passport ho???c H??? kh???u ho???c
							KT3 (gi??? l???i)
						</Typography>
						<Typography className="carinfo-container__text">
							<RecentActorsOutlinedIcon fontSize="medium" className="payment-container__icon" /> C??n c?????c c??ng d??n g???n chip
							(?????i chi???u)
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							??I???U KHO???N
						</Typography>
					</Grid>
					<Grid item xs={9} spacing={2}>
						<Typography className="carinfo-container__text">
							{/* Quy ?????nh kh??c:
              <br />- S??? d???ng xe ????ng m???c ????ch.
              <br />- Kh??ng s??? d???ng xe thu?? v??o m???c ????ch phi ph??p, tr??i ph??p
              lu???t.
              <br />- Kh??ng s??? d???ng xe thu?? ????? c???m c???, th??? ch???p.
              <br />- Kh??ng h??t thu???c, nh??? k???o cao su, x??? r??c trong xe.
              <br />- Kh??ng ch??? h??ng qu???c c???m d??? ch??y n???.
              <br />- Kh??ng ch??? hoa qu???, th???c ph???m n???ng m??i trong xe.
              <br />- Khi tr??? xe, n???u xe b???n ho???c c?? m??i trong xe, kh??ch h??ng
              vui l??ng v??? sinh xe s???ch s??? ho???c g???i ph??? thu ph?? v??? sinh xe.
              <br />- Tr??n tr???ng c???m ??n, ch??c qu?? kh??ch h??ng c?? nh???ng chuy???n ??i
              tuy???t v???i ! */}
			  				<pre style={{ fontFamily: 'inherit' }}>
							  {carinfo.rentterm}
							</pre>
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" paddingLeft={3} paddingRight={3} marginBottom={3}>
					<Grid item xs={3}>
						<Typography className="carinfo-container__spectext" sx={{ fontWeight: 'bold' }}>
							CH??? XE
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
			</Stack>
			<Stack className="payment-container" padding={3}>
				<Typography sx={{ fontWeight: 'bold', color: variables.textgreyercolor }} alignSelf="center">
					<span className="payment-container__price"> {carinfo.rentprice && numWithSpace(carinfo.rentprice)} ?? </span> /ng??y
				</Typography>
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					Ng??y nh???n xe
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
					Ng??y tr??? xe
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
					?????a ??i???m giao nh???n xe
				</Typography>
				<Typography className="payment-container__location">
					<LocationOnIcon className="payment-container__icon" /> {carinfo.ownerId && carinfo.ownerId.location}
				</Typography>
				<Box padding="10px" />
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					C??c chi ph?? kh??c
				</Typography>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">Gi???i h???n qu??ng ???????ng: {carinfo.kmlimit}km/ng??y</Typography>
					<Typography className="payment-container__subtext">
						Ph??: <span className="bold">{carinfo.priceover && numWithSpace(carinfo.priceover)}??/km</span> v?????t gi???i h???n
					</Typography>
				</Box>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">Qu?? gi???</Typography>
					<Typography className="payment-container__subtext">
						Ph??: <span className="bold">90 000??/gi???</span>. Qu?? 5 gi??? t??nh th??nh 1 ng??y thu?? xe
					</Typography>
				</Box>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">V??? sinh xe</Typography>
					<Typography className="payment-container__subtext">
						Ph??: <span className="bold">100 000??</span> (n???u tr??? xe nhi???u v???t b???n, b??n c??t, s??nh l???y.... c???n ph???i v??? sinh l???i
						tr?????c khi giao cho kh??ch sau)
					</Typography>
				</Box>
				<Box className="payment-container__textbox" padding={1}>
					<Typography className="payment-container__smalltext">Kh??? m??i xe</Typography>
					<Typography className="payment-container__subtext">
						Ph??: <span className="bold">400 000??</span> (n???u h??t thu???c l?? trong xe, ch??? s???u ri??ng, h???i s???n n???ng m??i .... c???n
						ph???i ??i kh??? m??i tr?????c khi giao cho kh??ch sau)
					</Typography>
				</Box>
				<Box padding="10px" />
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					B???o hi???m
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
				<Typography className="payment-container__smalltext">B???n tr??? t???i ??a 50% t???ng gi?? tr??? thi???t h???i</Typography>
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
				<Typography className="payment-container__smalltext">B???n tr??? t???i ??a 20% t???ng gi?? tr??? thi???t h???i</Typography>
				<Box padding="10px" />
				<Typography className="payment-container__title" sx={{ fontWeight: 'bold', color: variables.textblackcolor }}>
					Chi ti???t gi??
				</Typography>
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">????n gi?? thu??:</Typography>
					<Typography className="payment-container__smalltext">
						{carinfo.rentprice && numWithSpace(carinfo.rentprice)} ??/ ng??y
					</Typography>
				</Stack>
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">Ph?? d???ch v???:</Typography>
					<Typography className="payment-container__smalltext">
						{carinfo.servicefee && numWithSpace(carinfo.servicefee)} ??/ ng??y
					</Typography>
				</Stack>
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">T???ng ph?? thu?? xe:</Typography>
					<Typography className="payment-container__smalltext">
						{numWithSpace(carinfo.servicefee + carinfo.rentprice)} ?? x {carinfo.days} ng??y
					</Typography>
				</Stack>
        <Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext">Ph?? b???o hi???m:</Typography>
					<Typography className="payment-container__smalltext">{insurance && numWithSpace(insurance)} ??</Typography>
				</Stack>
				<Divider sx={{ marginBottom: '5px' }} />
				<Stack className="payment-container__pricebox" direction="row" justifyContent="space-between" alignItems="center">
					<Typography className="payment-container__smalltext bold">T???ng c???ng:</Typography>
					<Typography className="payment-container__smalltext bold">
						{carinfo.totalprice && numWithSpace(carinfo.totalprice + insurance)} ??
					</Typography>
				</Stack>
				<Button
					variant="outlined"
					className="payment-container__button"
					startIcon={<CheckIcon />}
					onClick={() => setOpenSignin(true)}
				>
					?????T XE
				</Button>
			</Stack>
      <Contract openSignin={openSignin} setOpenSignin={setOpenSignin} handleApi={handleApi}/>
		</Stack>
	);
}

export default CarDetails;
