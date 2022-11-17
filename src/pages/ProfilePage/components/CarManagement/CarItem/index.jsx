import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import * as React from 'react';
import CarStatusList from '../CarStatusListDialog';
import HistoryList from '../HistoryList';

function CarItem() {
	const [openHistoryList, setOpenHistoryList] = React.useState(false);
	const [openStatusList, setOpenStatusList] = React.useState(false);
	return (
		<Stack direction={'row'} className="carmanagement-container-item" padding={1} spacing={1}>
			<img
				className="carmanagement-container-item__img"
				src="https://www.motortrend.com/uploads/sites/10/2019/09/2020-chevrolet-sonic-lt-automatic-sedan-angular-front.png?fit=around%7C960:600"
				alt=""
			/>
			<Stack width="200px">
				<Typography
					className="carmanagement-container-item__name"
					sx={{
						fontWeight: 'bold',
						fontSize: '18px',
						letterSpacing: '0.6px',
					}}
				>
					Mazda CX-3
				</Typography>
				<Typography
					className="carmanagement-container-item__option"
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
					className="carmanagement-container-item__rating"
					sx={{
						fontWeight: '400',
						fontSize: '12px',
						letterSpacing: '0.6px',
						color: variables.maincolor,
					}}
				>
					<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="carmanagement-container-item__icon"/> 5.00 
				</Typography>
				<Button
					variant="outlined"
					size="medium"
					className="carmanagement-container-item__history"
					onClick={() => setOpenHistoryList(true)}
					sx={{
						fontWeight: 'bold',
						width: '180px ',
						marginTop:'14px'
					}}
				>
					LỊCH SỬ
				</Button>
			</Stack>
			<Stack width="200px" justifyContent='space-between'>
				<Typography
					className="carmanagement-container-item__location"
					paddingTop={'5px'}
			
					sx={{ fontWeight: '600', fontSize: '12px', letterSpacing: '0.6px' }}
				>
					Phường 12, Quận Gò Vấp
				</Typography>
			</Stack>
			<Stack justifyContent={'center'} width="150px">
				<Typography
					className="carmanagement-container-item__price"
					paddingLeft={'20px'}
					sx={{
						fontWeight: '600',
						fontSize: '24px',
						letterSpacing: '0.6px',
						color: variables.textgreencolor,
					}}
				>
					2,738,225₫
				</Typography>
			</Stack>
			<Stack flex={1} justifyContent={'center'} spacing={1}>
				<Button
					variant="outlined"
					size="medium"
					className="carmanagement-container-item__status"
					onClick={() => setOpenStatusList(true)}
					sx={{
						borderColor: variables.textgreencolor,
						color: variables.textgreencolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					TRẠNG THÁI XE
				</Button>
				<Button
					variant="outlined"
					size="medium"
					className="carmanagement-container-item__stop"
					sx={{
						borderColor: variables.orangecolor,
						color: variables.orangecolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					TẠM DỪNG
				</Button>
				<Button
					variant="outlined"
					size="medium"
					className="carmanagement-container-item__delete"
					sx={{
						borderColor: variables.redcolor,
						color: variables.redcolor,
						fontWeight: 'bold',
						width: '180px ',
						alignSelf: 'center',
					}}
				>
					XOÁ
				</Button>
			</Stack>
			<CarStatusList openStatusList={openStatusList} setOpenStatusList={setOpenStatusList}/>
			<HistoryList openHistoryList={openHistoryList} setOpenHistoryList={setOpenHistoryList}/>
		</Stack>
	);
}

export default CarItem;
