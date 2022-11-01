import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import * as React from 'react';
import bgimg from 'assets/img/landingpage_bg.jpg';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import _debounce from 'lodash/debounce';
import apiUtils from 'apis/apiUtils';

function LandingBody() {
	const [suggestion, setSuggestion] = React.useState([]);
	const [startdatetime, setStartDatetime] = React.useState(moment());
	const [enddatetime, setEndDatetime] = React.useState(moment());
	const [location, setLocation] = React.useState('');
	const [error, setError] = React.useState({ startdate: false, enddate: false });
	const navigate = useNavigate();
	const handleFind = () => {
		if(!error.startdate && !error.enddate){
			navigate(`/fillter?startdate=${startdatetime.unix()}&enddate=${enddatetime.unix()}&address=${location}`);
		}
	};
	React.useEffect(() => {
		const checkDateTime = () => {
			if ((startdatetime.unix() <= moment().unix()) && (enddatetime.unix() <= moment().unix())) {
				setError({startdate: true, enddate: true });
			} else {
				if (startdatetime.unix() <= moment().unix()) {
					setError({startdate: true, enddate: false });
				} else {			
					setError({startdate: false, enddate: false });
					if ((enddatetime.unix() <= moment().unix()) || (enddatetime.unix() <= startdatetime.unix())) {
						setError({startdate: false, enddate: true });
					} else {
						setError({startdate: false, enddate: false });
					}
				}
			}
		}
		checkDateTime();
	},[startdatetime,enddatetime])

	React.useEffect(() => {
		const GetLocations = (location) => {handleApi(location)};
		GetLocations(location);
	}, [location]);

	const handleApi = React.useCallback(
		_debounce((location) => {
			const params = {
				address: location,
			};
			apiUtils
				.findLocation(params)
				.then((res) => {
					setSuggestion(res)
				})
				.catch((err) => {});
		}, 1000),
		[]
	);

	return (
		<Box className="landing-container" sx={{ backgroundImage: `url(${bgimg})` }}>
			<Typography variant="h3" className="landing-container__maintext" sx={{ fontFamily: 'Orbitron', paddingTop: '75px' }}>
				EasyCar
			</Typography>
			<Typography variant="h3" className="landing-container__maintext" sx={{ fontFamily: 'Orbitron' }}>
				Thuê xe nhanh chóng
			</Typography>
			<Box className="landing-container__inputcomponent">
				<Stack spacing={2} justifyContent="center" padding={2} sx={{ height: '365px' }}>
					<Typography className="landing-container__inputcomponent__text">
						<LocationOnIcon fontSize="small" /> Địa điểm
					</Typography>
					<Autocomplete
						freeSolo
						disableClearable
						options={suggestion.map((option) => option.address)}
						onSelect={(event) => setLocation(event.target.value)}
						renderInput={(params) => (
							<TextField
								{...params}
								placeholder="Nhập vị trí thành phố, quận, đường..."
								variant="outlined"
								size="normal"
								value={location}
								onChange={(event) => {
									setLocation(event.target.value);
								}}
							/>
						)}
					/>
					<Typography className="landing-container__inputcomponent__text">
						<CalendarMonthIcon fontSize="small" /> Ngày bắt đầu
					</Typography>
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DateTimePicker
							inputFormat="DD/MM/YYYY hh:mm A"
							renderInput={(props) => (
								<TextField {...props} error={error.startdate} helperText={error.startdate ? 'Vui lòng chọn ngày khác' : ''} />
							)}
							value={startdatetime}
							onChange={(newValue) => {setStartDatetime(newValue)}}
							size="small"
						/>
					</LocalizationProvider>
					<Typography className="landing-container__inputcomponent__text">
						<CalendarMonthIcon fontSize="small" /> Ngày kết thúc
					</Typography>
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DateTimePicker
							inputFormat="DD/MM/YYYY hh:mm A"
							renderInput={(props) => (
								<TextField {...props} error={error.enddate} helperText={error.enddate ? 'Vui lòng chọn ngày khác' : ''} />
							)}
							value={enddatetime}
							onChange={(newValue) => {
								setEndDatetime(newValue);
							}}
							size="small"
						/>
					</LocalizationProvider>
					<Button
						variant="contained"
						className="landing-container__inputcomponent__inputbutton"
						onClick={handleFind}
						sx={{
							bgcolor: variables.mainyellowcolor,
							color: variables.mainlightercolor,
							fontWeight: 'bold',
						}}
					>
						<SearchIcon />
						TÌM XE
					</Button>
				</Stack>
			</Box>
		</Box>
	);
}
export default LandingBody;
