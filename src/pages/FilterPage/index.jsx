import * as React from 'react';
import { Box } from '@mui/material';
import _debounce from 'lodash/debounce';
import Fillter from 'pages/FilterPage/components/Fillter';
import DateLocationFillter from './components/DateLocationFillter';
import { Stack } from '@mui/system';
import 'pages/FilterPage/style.scss';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import apiUtils from 'apis/apiUtils';
import CarTable from './components/CarItem';
import apiCar from 'apis/apiCar';

function FilterPage() {
	const [carinforlist, setCarinfolist] = React.useState([]);
	const [carrenderlist, setCarrenderlist] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [total,setTotal] = React.useState(1);
	const [suggestion, setSuggestion] = React.useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [startdate, setStartdate] = React.useState(moment.unix(searchParams.get('startdate')));
	const [enddate, setEnddate] = React.useState(moment.unix(searchParams.get('enddate')));
	const [address, setAddress] = React.useState(searchParams.get('address'));
	const [latitude, setLatitude] = React.useState(Number(searchParams.get('lat')));
	const [longitude, setLongitude] = React.useState(Number(searchParams.get('lon')));
	const [price, setPrice] = React.useState('ALL');
	const [fueltype, setFueltype] = React.useState('ALL');
	const [carbrand, setCarbrand] = React.useState('ALL');
	const [transmission, setTransmission] = React.useState('ALL');
	const [brandlist, setBrandlist] = React.useState([]);
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
		rating: rating,
		latitude,
		longitude,
	});

	React.useEffect(() => {
		const getLatLon = () => {
			const foundlocation = suggestion.find(item => item.address == address)
			if(foundlocation)
			{
				setLatitude(foundlocation.lat)
				setLongitude(foundlocation.lon)
			}
		}
		getLatLon()
	},[suggestion])

	React.useEffect(() => {
		const getBrandList = () => {
			apiCar
				.getBrand()
				.then((res) => {
					setBrandlist(res.data);
				})
				.catch();
		};
		getBrandList();
	}, []);

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

				if (item.selected === false) {
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
				rating:rating,
				latitude,
				longitude,
			});
		};
		changeFillter();
	}, [price, carbrand, cartype, fueltype, transmission, rating, startdate, enddate, address,rating,longitude,latitude]);

	React.useEffect(() => {
		handleApi(fillter);
	}, [fillter]);

	const handleApi = React.useCallback(
		_debounce((fillter) => {
			apiCar.getCarFillter(fillter).then((res) => {
				setTotal(res.totalPage)
				setPage(0)
				setCarinfolist(res.data)
			})
		}, 1000),
		[]
	);
	
	React.useEffect(() => {
		const calTotalPage = () => {
			const totalPage = Math.ceil(carinforlist.length / 10)
			setTotal(totalPage)
			const data = carinforlist.slice(0 * 10, 0 * 10 + 10)
			setCarrenderlist(data)
		}
		calTotalPage()
	},[carinforlist])

	const nextPage = () => {
		if(page <= total) {
			const data = carinforlist.slice((page+1) * 10, (page+1) * 10 + 10)
			setCarrenderlist([...carrenderlist,...data])
			setPage(page+1)
			// const params = {
			// 	...fillter,
			// 	page: page + 1
			// }

			// apiCar.getCarFillter(params).then((res)=> {
			// 	setCarinfolist([...carinforlist,...res.data])
			// 	setPage(page+1)
			// 	console.log(carinforlist)
			// })
		}
	}


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
							brandlist={brandlist}
						/>
						<Box paddingLeft={'5px'} id="caritem-box">
							<CarTable nextPage={nextPage}  carinforlist={carrenderlist} />
						</Box>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default FilterPage;
