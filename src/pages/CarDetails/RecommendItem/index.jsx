import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import { Typography, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import numWithSpace from 'utils/numWithSpace';
import moment from 'moment';
import { useSearchParams } from 'react-router-dom';

function RecommendItem(props) {
	const { item } = props;
	const [searchParams, setSearchParams] = useSearchParams();
	const [startdate, setStartdate] = React.useState(moment.unix(searchParams.get('startdate')));
	const [enddate, setEnddate] = React.useState(moment.unix(searchParams.get('enddate')));

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

	const handleDetails = () => {
		window.open(`/details?id=${item._id}&startdate=${startdate.unix()}&enddate=${enddate.unix()}`, '_blank');
	};

	return (
		<Stack className="recommend-item-container" onClick={handleDetails}>
			<img className="recommend-item-container__img" src={item.vehicleimage[0]} alt="" />
			<Typography
				className="recommend-item-container__name"
				sx={{
					fontWeight: 'bold',
					fontSize: '18px',
					letterSpacing: '0.6px',
					marginTop: '8px',
					marginLeft: '8px',
				}}
			>
				{item.brand} {item.model} {item.year} - {item.rating}{' '}
				<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="icon" />
			</Typography>
			<Typography
				className="recommend-item-container__option"
				sx={{
					fontWeight: '600',
					fontSize: '12px',
					letterSpacing: '0.4px',
					color: variables.textgreycolor,
					marginLeft: '8px',
				}}
			>
				{transmission(item.transmission)} - {fuel(item.fueltype)} - {item.seats} Ghế
			</Typography>
			<Typography
				className="recommend-item-container__rating"
				sx={{
					fontWeight: '400',
					fontSize: '12px',
					letterSpacing: '0.6px',
					color: variables.maincolor,
					marginLeft: '8px',
				}}
			>
				<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="recommend-item-container__icon" />{' '}
				{item.rating}
			</Typography>
			<Typography
				className="recommend-item-container__price"
				sx={{
					fontWeight: '600',
					fontSize: '18px',
					letterSpacing: '0.6px',
					color: variables.textgreencolor,
					marginTop: '6px',
					marginLeft: '8px',
				}}
			>
				{numWithSpace(item.totalprice)} ₫
			</Typography>
		</Stack>
	);
}

export default RecommendItem;
