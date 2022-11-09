import * as React from 'react';
import { TextField, Typography, Stack, Switch, Divider, Slider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
function RentForm(props) {
	const {kmlimit,setKmlimit,priceover,setPriceover,checked,setChecked,rentprice,setRentprice, rentterm, setRentterm} = props
	return (
		<Stack bgcolor="white" p={5} spacing={1}>
			<Typography fontWeight="bold" fontSize="1.25rem">
				Đơn giá thuê mặc định
			</Typography>
			<Typography color="#424242" fontSize="0.95rem">
				Đơn giá áp dụng cho tất cả các ngày. Bạn có thuể tuỳ chỉnh giá khác cho các ngày đặc biệt (cuối tuần, lễ, tết...)
				trong mục quản lý xe sau khi đăng kí.
			</Typography>
			<Typography py={2} color="#424242" fontSize="0.95rem">
				Giá đề xuất: 750.000 đ
			</Typography>
			<Grid container>
				<Grid item xs={3}>
					<TextField
						fullWidth
						value={rentprice}
						onChange={(event) => setRentprice(event.target.value)}
						sx={{ '& input': { textAlign: 'end' } }}
					></TextField>
				</Grid>
				<Grid item xs={3}>
					<Typography p={2}>000 đ</Typography>
				</Grid>
			</Grid>
			<Typography py={2} fontWeight="bold" fontSize="1.25rem">
				Địa chỉ xe
			</Typography>
			<Typography variant="outlined">
				Địa chỉ mặc định để giao nhận xe sẽ là địa chỉ được ghi trong trang cá nhân
			</Typography>
			<Stack direction="row" justifyContent="space-between">
				<Typography pt={1} fontWeight="bold" fontSize="1.25rem">
					Giới hạn số km
				</Typography>
				<Switch onChange={() => setChecked(!checked)} checked={checked} />
			</Stack>
			{checked && (
				<Grid container justifyContent="space-between" spacing={2}>
					<Grid item xs={6}>
						<Typography color="#424242" fontSize="0.95rem">
							Số km tối đa trong 1 ngày: {kmlimit} km
						</Typography>
						<Slider step={5} value={kmlimit} onChange={(event) => setKmlimit(event.target.value)} min={300} max={500} />
						<Typography color="gray" fontSize="0.95rem">
							Số km đề xuất: 400km
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography color="#424242" fontSize="0.95rem">
							Phí vượt giới hạn (tính mỗi km): {priceover} đ
						</Typography>
						<Slider
							step={1000}
							value={priceover}
							onChange={(event) => setPriceover(event.target.value)}
							min={1000}
							max={5000}
						/>
						<Typography color="gray" fontSize="0.95rem">
							Phí đề xuất: 3000 đ
						</Typography>
					</Grid>
				</Grid>
			)}
			<Divider />
			<Typography>Điều khoản thuê xe</Typography>
			<Typography>Ghi rõ các yêu cầu để khách có thể thuê xe.</Typography>
			<TextField fullWidth multiline rows={4} variant="outlined" value={rentterm} onChange={(event)=>setRentterm(event.target.value)}/>
		</Stack>
	);
}

export default RentForm;
