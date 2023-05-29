import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Box, Button, Divider, MenuItem, Select, Typography, TextField } from '@mui/material/';
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
		elasticquery,
		setElasticquery,
		handleElasticSearch,
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
	};
	
	return (
		<Box className="fillter-container">
			<Stack padding={1}>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }}>
					Tìm kiếm
				</Typography>
				<Stack direction='row' spacing={1}>
					<TextField 
						variant="outlined"
						size="small"
						value={elasticquery}
						onChange={(event) => setElasticquery(event.target.value)}
						sx={{
							width: '237px',
						}}>
					</TextField>
					<Button
						variant="outlined"
						size="medium"
						className="fillter-container__buttonreset"
						onClick={handleElasticSearch}
						sx={{
							color: variables.mainlightercolor,
							bgcolor: variables.mainyellowcolor,
							fontWeight: 'bold',
							marginTop: '8px',
						}}
					>
						<SearchIcon />
					</Button>
				</Stack>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }}>
					Mức giá
				</Typography>
				<Select id="fillter-container__selectprice" value={price} onChange={handlePriceChange} size="small">
					<MenuItem value={'ALL'}>Tất cả</MenuItem>
					<MenuItem value={'1M'}>Dưới 1.000.000đ</MenuItem>
					<MenuItem value={'2M'}>Dưới 2.000.000đ</MenuItem>
					<MenuItem value={'3M'}>Dưới 3.000.000đ</MenuItem>
					<MenuItem value={'4M'}>Dưới 4.000.000đ</MenuItem>
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Loại xe
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
					Hãng xe
				</Typography>
				<Select
					id="fillter-container__selectbrand"
					value={carbrand}
					onChange={handleCarChange}
					size="small"
					MenuProps={MenuProps}
				>
					<MenuItem value={'ALL'}>Tất cả</MenuItem>
					{brandlist.map((item) => (
							<MenuItem value={item.brand} key={item.id}>
								{item.brand}
							</MenuItem>
						))}
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Truyền động
				</Typography>
				<Select
					id="fillter-container__selecttransmission"
					value={transmission}
					onChange={handleTransmissionChange}
					size="small"
				>
					<MenuItem value={'ALL'}>Tất cả</MenuItem>
					<MenuItem value={'MANUAL'}>Số sàn</MenuItem>
					<MenuItem value={'AUTO'}>Tự động</MenuItem>
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Nhiên liệu
				</Typography>
				<Select id="fillter-container__selectfueltype" value={fueltype} onChange={handleFueltypeChange} size="small">
					<MenuItem value={'ALL'}>Tất cả</MenuItem>
					<MenuItem value={'GASOLINE'}>Xăng</MenuItem>
					<MenuItem value={'DIESEL'}>Dầu Diesel</MenuItem>
					<MenuItem value={'ELECTRIC'}>Điện</MenuItem>
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Đánh giá
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
					BỎ LỌC
				</Button>
			</Stack>
		</Box>
	);
}
export default Fillter;
