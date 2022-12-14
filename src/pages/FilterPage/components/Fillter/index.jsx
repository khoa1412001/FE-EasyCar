import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Grid } from '@mui/material/';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
function Fillter(props) {
	const {
		cartype,
		setCartype,
		carbrand,
		setCarbrand,
		fueltype,
		setFueltype,
		price,
		setPrice,
		transmission,
		setTransmission,
    	rating,
   		setRating,
		brandlist,
	} = props;
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};
	const handleSelected = (id) => {
		let newCartype = [...cartype];
		let index = newCartype.findIndex((item) => item.id === id);
		if (index >= 0) {
			newCartype[index] = {
				...newCartype[index],
				selected: !newCartype[index].selected,
			};
			setCartype(newCartype);
		}
	};
	const handleRatingSelected = (id) => {
		let newRating = [...rating];
		newRating.forEach((item) => (item.selected = false));
		let index = newRating.findIndex((item) => item.id === id);
		if (index >= 0) {
			newRating[index] = {
				...newRating[index],
				selected: !newRating[index].selected,
			};
			setRating(newRating);
		}
	};
	const handleCarChange = (event) => {
		setCarbrand(event.target.value);
	};
	const handleTransmissionChange = (event) => {
		setTransmission(event.target.value);
	};
	const handleFueltypeChange = (event) => {
		setFueltype(event.target.value);
	};
	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	};

	const handleButtonReset = () => {
		setTransmission('ALL');
		setFueltype('ALL');
		setPrice('ALL');
		setCarbrand('ALL');
		setRating([
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
		setCartype([
			{
				id: 1,
				text: 'MINI',
				subtext: '4 GH???',
				value: 'MINI-4',
				selected: false,
			},
			{
				id: 2,
				text: 'SEDAN',
				subtext: '4 GH???',
				value: 'SEDAN-4',
				selected: false,
			},
			{
				id: 3,
				text: 'SUV',
				subtext: '5 GH???',
				value: 'SUV-5',
				selected: false,
			},
			{
				id: 4,
				text: 'SUV',
				subtext: '7 GH???',
				value: 'SUV-7',
				selected: false,
			},
			{
				id: 5,
				text: 'MPV',
				subtext: '7 GH???',
				value: 'MPV-7',
				selected: false,
			},
			{
				id: 6,
				text: 'PICK-UP',
				subtext: '4 GH???',
				value: 'PU-4',
				selected: false,
			},
		]);
	};
	return (
		<Box className="fillter-container">
			<Stack padding={1}>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }}>
					M???c gi??
				</Typography>
				<Select id="fillter-container__selectprice" value={price} onChange={handlePriceChange} size="small">
					<MenuItem value={'ALL'}>T???t c???</MenuItem>
					<MenuItem value={'1M'}>D?????i 1.000.000??</MenuItem>
					<MenuItem value={'2M'}>Tr??n 1.000.000?? d?????i 2.000.000??</MenuItem>
					<MenuItem value={'3M'}>Tr??n 2.000.000?? d?????i 3.000.000??</MenuItem>
					<MenuItem value={'4M'}>Tr??n 3.000.000??</MenuItem>
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Lo???i xe
				</Typography>
				<Grid container spacing={1} justifyContent="center">
					{cartype.map((item) => (
						<Grid item xs={4} key={item.id}>
							<Button
								variant={item.selected ? 'contained' : 'outlined'}
								size="medium"
								className="fillter-container__button"
								onClick={() => {handleSelected(item.id)}}
								sx={{
									fontWeight: 'bold',
								}}
							>
								{item.text}
								<br />
								{item.subtext}
							</Button>
						</Grid>
					))}
				</Grid>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					H??ng xe
				</Typography>
				<Select
					id="fillter-container__selectbrand"
					value={carbrand}
					onChange={handleCarChange}
					size="small"
					MenuProps={MenuProps}
				>
					<MenuItem value={'ALL'}>T???t c???</MenuItem>
					{brandlist.map((item) => (
							<MenuItem value={item.brand} key={item.id}>
								{item.brand}
							</MenuItem>
						))}
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Truy???n ?????ng
				</Typography>
				<Select
					id="fillter-container__selecttransmission"
					value={transmission}
					onChange={handleTransmissionChange}
					size="small"
				>
					<MenuItem value={'ALL'}>T???t c???</MenuItem>
					<MenuItem value={'MANUAL'}>S??? s??n</MenuItem>
					<MenuItem value={'AUTO'}>T??? ?????ng</MenuItem>
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Nhi??n li???u
				</Typography>
				<Select id="fillter-container__selectfueltype" value={fueltype} onChange={handleFueltypeChange} size="small">
					<MenuItem value={'ALL'}>T???t c???</MenuItem>
					<MenuItem value={'GASOLINE'}>X??ng</MenuItem>
					<MenuItem value={'DIESEL'}>D???u Diesel</MenuItem>
					<MenuItem value={'ELECTRIC'}>??i???n</MenuItem>
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					????nh gi??
				</Typography>
				<Grid container spacing={1} justifyContent="center">
					{rating.map((item) => (
						<Grid item xs={4} key={item.id}>
							<Button
								variant={item.selected ? 'contained' : 'outlined'}
								size="medium"
								className="fillter-container__button"
								onClick={() => handleRatingSelected(item.id)}
								sx={{
									fontWeight: 'bold',
								}}
							>
								{item.value}
							</Button>
						</Grid>
					))}
				</Grid>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Button
					variant="outlined"
					size="medium"
					className="fillter-container__buttonreset"
					startIcon={<RestartAltIcon />}
					onClick={handleButtonReset}
					sx={{
						color: variables.mainlightercolor,
						bgcolor: variables.mainyellowcolor,
						fontWeight: 'bold',
						marginTop: '8px',
					}}
				>
					B??? L???C
				</Button>
			</Stack>
		</Box>
	);
}
export default Fillter;
