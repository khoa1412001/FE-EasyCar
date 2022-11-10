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
    setRating
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
	};
	return (
		<Box className="fillter-container">
			<Stack padding={1}>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }}>
					Mức giá
				</Typography>
				<Select id="fillter-container__selectprice" value={price} onChange={handlePriceChange} size="small">
					<MenuItem value={'ALL'}>Tất cả</MenuItem>
					<MenuItem value={'1M'}>Dưới 1.000.000đ</MenuItem>
					<MenuItem value={'2M'}>Trên 1.000.000đ dưới 2.000.000đ</MenuItem>
					<MenuItem value={'3M'}>Trên 2.000.000đ dưới 3.000.000đ</MenuItem>
					<MenuItem value={'4M'}>Trên 3.000.000đ</MenuItem>
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
					<MenuItem value={'MANUAL'}>Số tự động</MenuItem>
					<MenuItem value={'AUTO'}>Số sàn</MenuItem>
				</Select>
				<Divider sx={{ paddingTop: '8px' }}></Divider>
				<Typography className="fillter-container__text" sx={{ fontWeight: 'bold' }} paddingTop="8px">
					Nhiên liệu
				</Typography>
				<Select id="fillter-container__selectfueltype" value={fueltype} onChange={handleFueltypeChange} size="small">
					<MenuItem value={'ALL'}>Tất cả</MenuItem>
					<MenuItem value={'PETRO'}>Xăng</MenuItem>
					<MenuItem value={'DIESEL'}>Dầu</MenuItem>
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
