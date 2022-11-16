import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';

function HistoryItem() {
	return (
		<Stack direction={'row'} className="rentalhistory-container-item" padding={1} spacing={1}>
			<img
				className="rentalhistory-container-item__img"
				src="https://zoomcar-assets.zoomcar.com/photographs/original/2e3221d37b756442191ad5a81cdc0e4a49696811.png?1663874774"
				alt=""
			/>
			<Stack width="200px">
				<Typography
					className="rentalhistory-container-item__name"
					sx={{
						fontWeight: 'bold',
						fontSize: '18px',
						letterSpacing: '0.6px',
					}}
				>
					Mazda CX-3
				</Typography>
				<Typography
					className="rentalhistory-container-item__option"
					sx={{
						fontWeight: '600',
						fontSize: '12px',
						letterSpacing: '0.4px',
						color: variables.textgreycolor,
					}}
				>
					Tự động - Xăng - 5 Ghế
				</Typography>
				<Typography
					className="rentalhistory-container-item__rating"
					sx={{
						fontWeight: '400',
						fontSize: '12px',
						letterSpacing: '0.6px',
						color: variables.maincolor,
					}}
				>
					<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="rentalhistory-container-item__icon"/> 5.00 
				</Typography>
				<Rating name="no-value" value={null} sx={{ paddingTop: '20px' }} />
			</Stack>
			<Stack width="200px">
				<Typography
					className="rentalhistory-container-item__location"
					paddingTop={'5px'}
					sx={{ fontWeight: '600', fontSize: '12px', letterSpacing: '0.6px' }}
				>
					Phường 12, Quận Gò Vấp
				</Typography>
				<Typography
					className="rentalhistory-container-item__startdate"
					paddingTop={'5px'}
					sx={{ fontSize: '14px', letterSpacing: '0.8px' }}
				>
					Từ: 09/10/2022
				</Typography>
				<Typography
					className="rentalhistory-container-item__enddate"
					paddingTop={'5px'}
					sx={{ fontSize: '14px', letterSpacing: '0.8px' }}
				>
					Đến: 11/10/2022
				</Typography>
			</Stack>
			<Stack justifyContent={'center'} width="150px">
				<Typography
					className="rentalhistory-container-item__price"
					sx={{
						fontWeight: '600',
						fontSize: '24px',
						letterSpacing: '0.6px',
						color: variables.textgreencolor,
					}}
				>
					2 738 225₫
				</Typography>
			</Stack>
			<Stack flex={1} justifyContent={'center'} spacing={1}>
			<Button
					variant="outlined"
					size="medium"
					className="rentalhistory-container-item__details"
					sx={{
						borderColor: variables.bluecolor,
						color: variables.bluecolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					CHI TIẾT
				</Button>
				<Button
					variant="outlined"
					size="medium"
					className="rentalhistory-container-item__rebook"
					sx={{
						borderColor: variables.textgreencolor,
						color: variables.textgreencolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					ĐẶT LẠI
				</Button>
				<Button
					variant="outlined"
					size="medium"
					className="rentalhistory-container-item__updatestatus"
					sx={{
						borderColor: variables.orangecolor,
						color: variables.orangecolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					CẬP NHẬT
				</Button>
			</Stack>
		</Stack>
	);
}

export default HistoryItem;
