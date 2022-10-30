import * as React from 'react';
import { Box } from '@mui/material';
import _debounce from 'lodash/debounce';
import Fillter from 'pages/FilterPage/components/Fillter';
import DateLocationFillter from './components/DateLocationFillter';
import CarItem from './components/CarItem';
import { Stack } from '@mui/system';
import 'pages/FilterPage/style.scss';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import apiUtils from 'apis/apiUtils';

function FilterPage() {
	const [suggestion, setSuggestion] = React.useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [startdate, setStartdate] = React.useState(moment.unix(searchParams.get('startdate')));
	const [enddate, setEnddate] = React.useState(moment.unix(searchParams.get('enddate')));
	const [address, setAddress] = React.useState(searchParams.get('address'));
	const [price, setPrice] = React.useState('ALL');
	const [fueltype, setFueltype] = React.useState('ALL');
	const [carbrand, setCarbrand] = React.useState('ALL');
	const [transmission, setTransmission] = React.useState('ALL');
	const [cartype, setCartype] = React.useState([
		{
			id: 1,
			text: 'MINI',
			subtext: '4 GHẾ',
			value: 'MINI-4',
			selected: false,
		},
		{
			id: 2,
			text: 'SEDAN',
			subtext: '4 GHẾ',
			value: 'SEDAN-4',
			selected: false,
		},
		{
			id: 3,
			text: 'SUV',
			subtext: '5 GHẾ',
			value: 'SUV-5',
			selected: false,
		},
		{
			id: 4,
			text: 'SUV',
			subtext: '7 GHẾ',
			value: 'SUV-7',
			selected: false,
		},
		{
			id: 5,
			text: 'MPV',
			subtext: '7 GHẾ',
			value: 'MPV-7',
			selected: false,
		},
		{
			id: 6,
			text: 'PICK-UP',
			subtext: '4 GHẾ',
			value: 'PU-4',
			selected: false,
		},
	]);
	const [rating, setRating] = React.useState([
		{
			id: 1,
			value: '3+',
			selected: false,
		},
		{
			id: 2,
			value: '4+',
			selected: false,
		},
		{
			id: 3,
			value: 'All',
			selected: true,
		},
	]);
	const [fillter, setFillter] = React.useState({
		price: price,
		carbrand: carbrand,
		cartype: ['ALL'],
		fueltype: fueltype,
		transmission: transmission,
		address: address,
		startdate: startdate.unix(),
		enddate: enddate.unix(),
	});

	React.useEffect(() => {
		const GetLocations = (address) => {
			handleFind(address);
		};
		GetLocations(address);
	}, [address]);

	const handleFind = React.useCallback(
		_debounce((address) => {
			const params = {
				address: address,
			};
			apiUtils
				.findLocation(params)
				.then((res) => {
					setSuggestion(res);
				})
				.catch((err) => {});
		}, 1000),
		[]
	);

	React.useEffect(() => {
		const changeFillter = () => {
			let cartypefillter = ['ALL'];
			cartype.forEach((item) => {
				if (item.selected === true) {
					cartypefillter.push(item.value);
				}

				if (item.select === false) {
					const index = cartypefillter.indexOf(item.value);
					if (index > -1) {
						cartypefillter.splice(index, 1);
					}
				}
			});

			setFillter({
				price: price,
				carbrand: carbrand,
				cartype: cartypefillter,
				fueltype: fueltype,
				transmission: transmission,
				address: address,
				startdate: startdate.unix(),
				enddate: enddate.unix(),
			});
		};
		changeFillter();
	}, [price, carbrand, cartype, fueltype, transmission, rating, startdate, enddate, address]);

	React.useEffect(() => {
		handleApi(fillter);
	}, [fillter]);
	const handleApi = React.useCallback(
		_debounce((fillter) => {
			console.log(fillter);
		}, 1000),
		[]
	);

	return (
		<Box>
			<Box className="fillter-page-bg">
				<Box className="fillter-page-container" paddingTop={'5px'}>
					<Box className="fillter-page-container__datetimecontainer" paddingBottom={'5px'}>
						<DateLocationFillter
							address={address}
							setAddress={setAddress}
							startdate={startdate}
							setStartdate={setStartdate}
							enddate={enddate}
							setEnddate={setEnddate}
							suggestion={suggestion}
						/>
					</Box>
					<Stack direction={'row'}>
						<Fillter
							price={price}
							setPrice={setPrice}
							fueltype={fueltype}
							setFueltype={setFueltype}
							transmission={transmission}
							setTransmission={setTransmission}
							carbrand={carbrand}
							setCarbrand={setCarbrand}
							cartype={cartype}
							setCartype={setCartype}
							rating={rating}
							setRating={setRating}
						/>
						<Box paddingLeft={'5px'}>
							<CarItem />
						</Box>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default FilterPage;
