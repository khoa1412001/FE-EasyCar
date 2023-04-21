import * as React from 'react';
import './style.scss';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import { Button, Stack, TextField, Typography, Paper, Checkbox, FormControlLabel, Box } from '@mui/material';
import { useNavigate,useSearchParams } from 'react-router-dom';
import apiReport from 'apis/apiReport';
import { toast } from 'react-toastify';
function ReportPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [id, setId] = React.useState(searchParams.get('id'));
	const [reportInfo, setReportInfo] = React.useState({});
	const [price, setPrice] = React.useState(false);
	const [quality, setQuality] = React.useState(false);
	const [owner, setOwner] = React.useState(false);
	const [other, setOther]= React.useState(false);
	const [comment, setComment] = React.useState('');
	const navigate = useNavigate();

	React.useEffect(() => {
		const getReport = () => {
			const params = {
				id:id,
			}
			apiReport.getReportInfo(params).then(res => setReportInfo(res.data))
			.catch(err => {
				toast.error('Lỗi hệ thống, vui lòng thử lại sau!!');
				setTimeout(() => {navigate('/profile/')},3000)
			})
		}
		getReport()
	}, []);

	const createReport = () => {
		const params = {
			vehicleId: reportInfo.vehicleId._id,
			quality : quality,
			other: other,
			price: price,
			owner: owner,
			comment: comment,
		}

		apiReport.createReport(params).then(res => {
			toast.success('Gửi báo xấu thành công!!');
			setTimeout(() => {window.close();},3000)
		})
		.catch(err => {
			toast.error('Lỗi hệ thống, vui lòng thử lại sau!!');
			setTimeout(() => {navigate('/profile/')},3000)
		})
	}

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
						value={reportInfo.vehicleId && reportInfo.vehicleId.licenseplate}
						size="small"
						sx={{ width: '600px' }}
						disabled={true}
					/>
					<Typography className="reportcar-container__carinfo" variant="h5">
						HÃNG XE - MẪU XE - NĂM SẢN XUẤT
					</Typography>
					<TextField
						placeholder="Nhập biển số xe"
						variant="outlined"
						value={reportInfo.vehicleId && (reportInfo.vehicleId.brand+' '+reportInfo.vehicleId.model+' '+reportInfo.vehicleId.year)}
						size="small"
						sx={{ width: '600px' }}
						disabled={true}
					/>
					<Typography className="reportcar-container__carinfo" variant="h5">
						LÝ DO BÁO XẤU
					</Typography>
					<Stack>
						<FormControlLabel control={<Checkbox size="small" onChange={(event) => {setQuality(event.target.checked)}} />} label="Chất lượng xe" />
						<FormControlLabel control={<Checkbox size="small" onChange={(event) => {setPrice(event.target.checked)}}/>} label="Giá cả không rõ ràng" />
						<FormControlLabel control={<Checkbox size="small" onChange={(event) => {setOwner(event.target.checked)}}/>} label="Giao xe, lấy xe không đúng giờ" />
						<FormControlLabel control={<Checkbox size="small" onChange={(event) => {setOther(event.target.checked)}}/>} label="Khác" />
					</Stack>
					<TextField
						placeholder="Nhập nội dung báo xấu"
						variant="outlined"
						value={comment}
						onChange={(event) => setComment(event.target.value)}
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
						onClick={createReport}
					>
						BÁO XẤU
					</Button>
				</Stack>
			</Paper>
		</Box>
	);
}

export default ReportPage;
