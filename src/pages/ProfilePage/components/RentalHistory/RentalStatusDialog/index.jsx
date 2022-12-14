import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle, Stack, Typography
} from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import { toast } from 'react-toastify';
import apiRentalHistory from 'apis/apiRentalHistory';
function RentalStatusDialog(props) {
	const { openRentalStatus, setOpenRentalStatus, id } = props;
	const [carstatus, setCarstatus] = React.useState({});
	React.useEffect(() => {
		const getCarStatus = () => {
			const params = {
				id: id
			}
			apiRentalHistory.getCarStatusDetail(params).then((result) => {
				setCarstatus(result.data)
			}).catch((err) => {
				toast.error(err.response.data.message)
			});
		}
		getCarStatus()
	},[])
	return (
		<Dialog
			open={openRentalStatus}
			maxWidth="lg"
			fullWidth
			onClose={() => setOpenRentalStatus(false)}
			className="carstatus-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					TRẠNG THÁI XE - <span className="blue">{carstatus.rentalStatusId && (new Date(carstatus.rentalStatusId.createdAt)).getDate()}/{carstatus.rentalStatusId && (new Date(carstatus.rentalStatusId.createdAt)).getMonth() + 1}/{carstatus.rentalStatusId && (new Date(carstatus.rentalStatusId.createdAt)).getFullYear()}</span>
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="carstatus-container__carname" variant="h5" paddingBottom={1}>
						{carstatus.vehicleId && carstatus.vehicleId.brand} {carstatus.vehicleId && carstatus.vehicleId.model} {carstatus.vehicleId && carstatus.vehicleId.year} - {carstatus.vehicleId && carstatus.vehicleId.licenseplate}
					</Typography>
					<Typography align="center" className="carstatus-container__text">
						Ảnh mặt trước
					</Typography>
					<img
						className="carstatus-container__img"
						src={carstatus.rentalStatusId && (carstatus.rentalStatusId.statusimage ? carstatus.rentalStatusId.statusimage[0] : "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/xnwr46xbb6jOk50sKpeKLw.jpg")}
					></img>

					<Typography align="center" className="carstatus-container__text">
						Ảnh mặt sau
					</Typography>
					<img
						className="carstatus-container__img"
						src={carstatus.rentalStatusId && (carstatus.rentalStatusId.statusimage ? carstatus.rentalStatusId.statusimage[1] : "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/3NyFytvwayVWqgOgxkK5JQ.jpg")}
					></img>

					<Typography align="center" className="carstatus-container__text">
						Ảnh bên trái
					</Typography>
					<img
						className="carstatus-container__img"
						src={carstatus.rentalStatusId && (carstatus.rentalStatusId.statusimage ? carstatus.rentalStatusId.statusimage[2] : "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/hIsku-RuEf55l_XeMXARxQ.jpg")}
					></img>

					<Typography align="center" className="carstatus-container__text">
						Ảnh bên phải
					</Typography>
					<img
						className="carstatus-container__img"
						src= {carstatus.rentalStatusId && (carstatus.rentalStatusId.statusimage ? carstatus.rentalStatusId.statusimage[3] : "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/FeJPP4rV9k56Ddceum2Vug.jpg")}
					></img>
				</Stack>
				<Typography variant="h6" sx={{ marginTop: '8px', color: variables.maincolor, fontWeight: 'bold' }}>
					TRẠNG THÁI XE
				</Typography>
				<Stack alignItems="center" paddingBottom={2} spacing={1}>
					<video width="900" src={carstatus.rentalStatusId ? carstatus.rentalStatusId.statusvideo : '' } controls></video>
					<Typography className="carstatus-container__text" sx={{ alignSelf: 'start' }}>
						<span className="bold blue">NGOẠI THẤT:</span> {carstatus.rentalStatusId && carstatus.rentalStatusId.extstatus}
					</Typography>
					<Typography className="carstatus-container__text" sx={{ alignSelf: 'start' }}>
						<span className="bold blue">NỘI THẤT:</span> {carstatus.rentalStatusId && carstatus.rentalStatusId.intstatus}
					</Typography>
					<Typography className="carstatus-container__text" sx={{ alignSelf: 'start' }}>
						<span className="bold blue">ĐỘNG CƠ:</span> {carstatus.rentalStatusId && carstatus.rentalStatusId.engstatus}
					</Typography>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default RentalStatusDialog;
