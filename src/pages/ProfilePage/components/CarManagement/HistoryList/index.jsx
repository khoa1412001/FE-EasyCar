import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Stack,
	Typography,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
    Chip,
} from '@mui/material';
import apiUser from 'apis/apiUser';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import HistoryOwnerDialog from '../HistoryOwnerDialog';
import './style.scss';
import { toast } from 'react-toastify';
import apiCar from 'apis/apiCar';

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
                            <TableCell align="right">Người thuê</TableCell>
                            <TableCell align="right">Tổng số tiền</TableCell>
							<TableCell align="right">Hành động</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(historylist.slice(page * 10, page * 10 + 10)).map((row) => (
						<TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>{row._id}</span></TableCell>
							<TableCell align="right"><span className='bold'>{(new Date(row.rentalDateStart)).getDate()}/{(new Date(row.rentalDateStart)).getMonth() + 1}/{(new Date(row.rentalDateStart)).getFullYear()}</span></TableCell>
                            <TableCell align="right"><span className='bold'>{(new Date(row.rentalDateEnd)).getDate()}/{(new Date(row.rentalDateEnd)).getMonth() + 1}/{(new Date(row.rentalDateEnd)).getFullYear()}</span></TableCell>
                            <TableCell align="right"><span className='bold'>{row.userId.username}</span></TableCell>
                            <TableCell align="right"><span className="green bold fontLarge">{row.totalPrice} ₫</span></TableCell>
							<TableCell align="right"><Chip label="XEM CHI TIẾT" className='success bold' onClick={() => {
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