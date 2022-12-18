import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import numWithSpace from 'utils/numWithSpace';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import * as React from 'react';
import Box from '@mui/material/Box';

function Item(props) {
	const { item } = props;
	const [searchParams, setSearchParams] = useSearchParams();
	const [startdate, setStartdate] = React.useState(moment.unix(searchParams.get('startdate')));
	const [enddate, setEnddate] = React.useState(moment.unix(searchParams.get('enddate')));
	const navigate = useNavigate();
	const handleDetails = () => {
		window.open(`/details?id=${item._id}&startdate=${startdate.unix()}&enddate=${enddate.unix()}`,'_blank')
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
		<Stack direction={'row'} className="caritem-container" padding={1} marginTop={1}>
			<Box width='240px'>
			<img
				className="caritem-container__img"
				src={item.modelimage}
				alt=""
			/>
			</Box>
			<Stack paddingLeft={'5px'} width="176px">
				<Typography
					className="caritem-container__name"
					sx={{
						fontWeight: 'bold',
						fontSize: '18px',
						letterSpacing: '0.6px',
					}}
				>
					{item.brand} {item.model}
				</Typography>
				<Typography
					className="caritem-container__option"
					sx={{
						fontWeight: '600',
						fontSize: '12px',
						letterSpacing: '0.4px',
						color: variables.textgreycolor,
					}}
				>
					{transmission(item.transmission)} - {fuel(item.fueltype)} - {item.seats} Ghế
				</Typography>
				<Typography
					className="caritem-container__rating"
					sx={{
						fontWeight: '400',
						fontSize: '12px',
						letterSpacing: '0.6px',
						color: variables.maincolor,
					}}
				>
					<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} /> {item.rating} 
				</Typography>
			</Stack>
			<Typography
				className="caritem-container__location"
				paddingTop={'5px'}
				paddingLeft={'20px'}
				width='210px'
				sx={{ fontWeight: '600', fontSize: '12px', letterSpacing: '0.6px' }}
			>
				{item.ownerId.location}
			</Typography>
			<Stack>
				<Typography
					className="caritem-container__price"
					paddingTop={'2px'}
					paddingLeft={'40px'}
					sx={{
						fontWeight: '600',
						fontSize: '18px',
						letterSpacing: '0.6px',
						color: variables.textgreencolor,
					}}
				>
					{numWithSpace(item.totalprice)} ₫
				</Typography>
				<Button
					variant="outlined"
					size="medium"
					className="caritem-container__button"
					onClick={handleDetails}
					sx={{
						borderColor: variables.textgreencolor,
						color: variables.textgreencolor,
						fontWeight: 'bold',
						marginTop: '70px',
						marginLeft: '20px',
						minWidth: '147px ',
					}}
				>
					ĐẶT XE
				</Button>
			</Stack>
		</Stack>
	);
}

export default Item;
