import {
	Chip,
	Dialog,
	DialogContent,
	DialogTitle,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from '@mui/material';
import apiCar from 'apis/apiCar';
import 'assets/style.scss';
import * as React from 'react';
import { toast } from 'react-toastify';
import numWithDot from 'utils/numWithDot';
import HistoryOwnerDialog from '../HistoryOwnerDialog';
import './style.scss';
import variables from 'assets/_variable.scss';
function HistoryList(props) {
    const {openHistoryList, setOpenHistoryList, vehicleId} = props
    const [openHistoryOwnerDialog, setOpenHistoryOwnerDialog] = React.useState(false)
	const [historylist, setHistorylist] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [rentalid, setRentalid] = React.useState('');
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * 10 - historylist.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	  };

	React.useEffect(() => {
		const getHistoryList = () => {
			const params = {
				id: vehicleId,
			}

			apiCar.getRentalHistoryOfVehicle(params).then(res => {
				setHistorylist(res.data);
			}).catch(err => toast.error(err.response.data.message))

		}

		getHistoryList()
	},[])

	const chipStatus = (status) => {
		switch (status) {
			case true:
				return (<Chip label="CHỜ THANH TOÁN" sx={{bgcolor:variables.orangecolor, color:'white',fontWeight:'bold'}} />);
			case false:
				return (<Chip label="ĐÃ THANH TOÁN" className='success bold'/>)
		}
	}
  return (
    <Dialog
			open={openHistoryList}
			maxWidth="lg"
			fullWidth
			onClose={() => setOpenHistoryList(false)}
			className="historylist-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					LỊCH SỬ THUÊ XE<span className="blue"></span>
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
            <TableContainer component={Paper}>
				<Table sx={{ maxHeight: '328px' }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell align="right">Ngày đặt xe</TableCell>
                            <TableCell align="right">Ngày kết thúc</TableCell>
                            <TableCell align="center">Người thuê</TableCell>
                            <TableCell align="right">Tổng số tiền</TableCell>
							<TableCell align="center">Trạng thái</TableCell>
							<TableCell align="center">Hành động</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(historylist.slice(page * 10, page * 10 + 10)).map((row) => (
						<TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>{row._id}</span></TableCell>
							<TableCell align="right"><span className='bold'>{(new Date(row.rentalDateStart)).getDate()}/{(new Date(row.rentalDateStart)).getMonth() + 1}/{(new Date(row.rentalDateStart)).getFullYear()}</span></TableCell>
                            <TableCell align="right"><span className='bold'>{(new Date(row.rentalDateEnd)).getDate()}/{(new Date(row.rentalDateEnd)).getMonth() + 1}/{(new Date(row.rentalDateEnd)).getFullYear()}</span></TableCell>
                            <TableCell align="right"><span className='bold'>{row.userId.username}</span></TableCell>
                            <TableCell align="right"><span className="green bold fontLarge">{numWithDot(row.totalPrice)} ₫</span></TableCell>
							<TableCell align="center">{chipStatus(row.status)}</TableCell>
							<TableCell align="center"><Chip label="XEM CHI TIẾT" className='success bold' onClick={() => {
								setOpenHistoryOwnerDialog(true)
								setRentalid(row._id)
								}}/></TableCell>
						</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination component="div" count={historylist.length} rowsPerPage={10} page={page} rowsPerPageOptions={10}  onPageChange={handleChangePage}/>
            </DialogContent>
            {openHistoryOwnerDialog && <HistoryOwnerDialog openHistoryOwnerDialog={openHistoryOwnerDialog} setOpenHistoryOwnerDialog={setOpenHistoryOwnerDialog} rentalid={rentalid}/>}
		</Dialog>
  )
}

export default HistoryList