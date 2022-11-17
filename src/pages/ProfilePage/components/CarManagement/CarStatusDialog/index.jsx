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
function CarStatusDialog(props) {
	const { openCarStatus, setOpenCarStatus } = props;
	const [selectedImage, setSelectedImage] = React.useState();
	return (
		<Dialog
			open={openCarStatus}
			maxWidth="lg"
			fullWidth
			onClose={() => setOpenCarStatus(false)}
			className="carstatus-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					TRẠNG THÁI XE - <span className="blue">01/11/2022</span>
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
				<Stack spacing={1}>
					<Typography className="carstatus-container__carname" variant="h5" paddingBottom={1}>
						KIA MORNING 2020 - 51K 13116
					</Typography>
					<Typography align="center" className="carstatus-container__text">
						Ảnh mặt trước
					</Typography>
					<img
						className="carstatus-container__img"
						src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/xnwr46xbb6jOk50sKpeKLw.jpg"
					></img>

					<Typography align="center" className="carstatus-container__text">
						Ảnh mặt sau
					</Typography>
					<img
						className="carstatus-container__img"
						src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/3NyFytvwayVWqgOgxkK5JQ.jpg"
					></img>

					<Typography align="center" className="carstatus-container__text">
						Ảnh bên trái
					</Typography>
					<img
						className="carstatus-container__img"
						src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/hIsku-RuEf55l_XeMXARxQ.jpg"
					></img>

					<Typography align="center" className="carstatus-container__text">
						Ảnh bên phải
					</Typography>
					<img
						className="carstatus-container__img"
						src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/honda_city_2019/p/g/2022/03/06/08/FeJPP4rV9k56Ddceum2Vug.jpg"
					></img>
				</Stack>
				<Typography variant="h6" sx={{ marginTop: '8px', color: variables.maincolor, fontWeight: 'bold' }}>
					TRẠNG THÁI XE
				</Typography>
				<Stack alignItems="center" paddingBottom={2} spacing={1}>
					<video width="900" controls></video>
					<Typography className="carstatus-container__text" sx={{ alignSelf: 'start' }}>
						<span className="bold blue">NGOẠI THẤT:</span> TỐT
					</Typography>
					<Typography className="carstatus-container__text" sx={{ alignSelf: 'start' }}>
						<span className="bold blue">NỘI THẤT:</span> TỐT
					</Typography>
					<Typography className="carstatus-container__text" sx={{ alignSelf: 'start' }}>
						<span className="bold blue">ĐỘNG CƠ:</span> TỐT
					</Typography>
					<Button alignSelf="center" variant="contained">
						CẬP NHẬT TRẠNG THÁI
					</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default CarStatusDialog;
