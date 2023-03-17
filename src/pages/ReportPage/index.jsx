import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import { Button, Stack, TextField, Typography, Paper, Checkbox, FormControlLabel, Box } from '@mui/material';

function ReportPage() {
	return (
		<Box sx={{backgroundColor: variables.maingreycolor, overflow: 'auto',}}>
			<Paper sx={{ marginTop: '15px', marginBottom: '15px', marginRight: '100px', marginLeft: '100px' }} elevation={3}>
				<Stack className="reportcar-container" padding={2} spacing={2}>
					<Typography className="reportcar-container__title" variant="h4" align="center">
						BÁO XẤU VI PHẠM
					</Typography>
					<Typography className="reportcar-container__carinfo" variant="h5">
						BIỂN SỐ XE
					</Typography>
					<TextField
						placeholder="Nhập biển số xe"
						variant="outlined"
						value="58-123.12"
						size="small"
						sx={{ width: '600px' }}
					/>
					<Typography className="reportcar-container__carinfo" variant="h5">
						HÃNG XE - MẪU XE - NĂM SẢN XUẤT
					</Typography>
					<TextField
						placeholder="Nhập biển số xe"
						variant="outlined"
						value="MITSUBISHI XPANDER 2022"
						size="small"
						sx={{ width: '600px' }}
					/>
					<Typography className="reportcar-container__carinfo" variant="h5">
						LÝ DO BÁO XẤU
					</Typography>
					<Stack>
						<FormControlLabel control={<Checkbox size="small" />} label="Chất lượng xe" />
						<FormControlLabel control={<Checkbox size="small" />} label="Giá cả không rõ ràng" />
						<FormControlLabel control={<Checkbox size="small" />} label="Giao xe, lấy xe không đúng giờ" />
						<FormControlLabel control={<Checkbox size="small" />} label="Khác" />
					</Stack>
					<TextField
						placeholder="Nhập biển số xe"
						variant="outlined"
						value="MITSUBISHI XPANDER 2022"
						size="small"
						sx={{ width: '600px' }}
						multiline
						rows={5}
					/>
					<Button
						alignSelf="center"
						className="reportcar-container__update"
						variant="contained"
						sx={{
							fontWeight: 'bold',
							width: '350px',
							alignSelf: 'center',
						}}
					>
						BÁO XẤU
					</Button>
				</Stack>
			</Paper>
		</Box>
	);
}

export default ReportPage;
