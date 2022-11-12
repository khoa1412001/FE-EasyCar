import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import "./style.scss";

function Item(props) {
	const {item} = props
	const transmission = (transmissiontype) => {
		switch (transmissiontype){
			case 'AUTO':
				return 'Tự động'
			case 'MANUAL':
				return 'Số sàn'
		};
	}

	const fuel = (fueltype) => {
		switch (fueltype){
			case 'GASOLINE':
				return 'Xăng'
			case 'DIESEL':
				return 'Dầu Diesel'
			case 'ELECTRIC':
				return 'Điện'
		};
	}
	return (
		<Stack direction={'row'} className="caritem-container" padding={1} marginTop={1}>
			<img
				className="caritem-container__img"
				src="https://zoomcar-assets.zoomcar.com/photographs/original/2e3221d37b756442191ad5a81cdc0e4a49696811.png?1663874774"
				alt=""
			/>
			<Stack paddingLeft={'5px'}>
				<Typography
					className="caritem-container__name"
					sx={{
						fontWeight: 'bold',
						fontSize: '18px',
						letterSpacing: '0.6px',
					}}
				>
					{item.brand}{' '}{item.model}
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
					{transmission(item.transmission)}{' '}-{' '}{fuel(item.fueltype)}{' '}-{' '}{item.seats}{' '}Ghế
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
					<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} /> {item.rating} - 8k kms
				</Typography>
			</Stack>
			<Typography
				className="caritem-container__location"
				paddingTop={'5px'}
				paddingLeft={'20px'}
				sx={{ fontWeight: '600', fontSize: '12px', letterSpacing: '0.6px' }}
			>
				Phường 12, Quận Gò Vấp
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
					2,738,225₫
				</Typography>
				<Button
					variant="outlined"
					size="medium"
					className="caritem-container__button"
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
