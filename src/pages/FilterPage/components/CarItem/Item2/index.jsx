import * as React from 'react';
import variables from 'assets/_variable.scss';
import 'assets/style.scss';
import './style.scss';
import { Typography, Stack, Box } from '@mui/material';
import numWithSpace from 'utils/numWithSpace';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import StarIcon from '@mui/icons-material/Star';

function Item2(props) {
	const { item } = props;
	const [searchParams, setSearchParams] = useSearchParams();
	const [startdate, setStartdate] = React.useState(moment.unix(searchParams.get('startdate')));
	const [enddate, setEnddate] = React.useState(moment.unix(searchParams.get('enddate')));
	const navigate = useNavigate();

	const handleDetails = () => {
		window.open(`/details?id=${item._id}&startdate=${startdate.unix()}&enddate=${enddate.unix()}`, '_blank');
	};
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

	return (
		<Stack direction={'column'} className="caritem-container" marginTop={1} marginLeft={1} onClick={handleDetails}>
			<Box width="400px" height="310px">
				<img
					className="caritem-container__img"
					src={item.vehicleimage[0]}
					alt=""
				/>
			</Box>
			<Stack direction={'row'} sx={{height:'100%',}}>
				<Stack paddingLeft={'10px'} paddingTop={'8px'} width="280px">
					<Typography
						className="caritem-container__name"
						sx={{
							fontWeight: 'bold',
							fontSize: '16px',
							letterSpacing: '0.6px',
						}}
					>
						{item.brand} {item.model} {item.year}{' '}
						- 4.0 <StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className='icon'/>
					</Typography>
					<Typography
						className="caritem-container__option"
						sx={{
							fontWeight: '600',
							fontSize: '14px',
							letterSpacing: '0.4px',
							color: variables.textgreycolor,
							paddingTop:'4px',
						}}
					>
						{transmission(item.transmission)} - {fuel(item.fueltype)} - {item.seats} Ghế
					</Typography>
				</Stack>
				<Typography
						className="caritem-container__price"
						sx={{
							fontWeight: '600',
							fontSize: '22px',
							color: variables.textgreencolor,
							textAlign:'center',
							alignSelf:'center',
						}}
					>
						{numWithSpace(item.totalprice)} ₫
				</Typography>
			</Stack>
		</Stack>
	);
}

export default Item2;
