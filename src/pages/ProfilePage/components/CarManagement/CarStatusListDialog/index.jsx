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
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import CarStatusDialog from '../CarStatusDialog';
import apiCar from 'apis/apiCar';
import { toast } from 'react-toastify';

function CarStatusList(props) {
	const { openStatusList, setOpenStatusList, vehicleId } = props;
    const [openCarStatus, setOpenCarStatus] = React.useState(false);
    const [carstatuslist, setCarstatuslist] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * 10 - carstatuslist.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	  };

	React.useEffect(() => {
		const getCarStatusList = () => {
			const params = {
				id: vehicleId,
			}

			apiCar.getCarStatusList(params).then(res => {
				setCarstatuslist(res.data);
			}).catch(err => toast.error(err.response.data.message))

		}

		getCarStatusList()
	},[])

	return (
		<Dialog
			open={openStatusList}
			maxWidth="lg"
			fullWidth
			onClose={() => setOpenStatusList(false)}
			className="carstatuslist-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					TRẠNG THÁI XE<span className="blue"></span>
				</Typography>
			</DialogTitle>
			<DialogContent dividers="true">
            <TableContainer component={Paper}>
				<Table sx={{ maxHeight: '328px' }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell align="right">Ngày cập nhật</TableCell>
							<TableCell align="right">Hành động</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						
						{(carstatuslist.slice(page * 10, page * 10 + 10)).map((row) => (
						<TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>{row._id}</span></TableCell>
							<TableCell align="right"><span className='bold'>{(new Date(row.createdAt)).getDate()}/{(new Date(row.createdAt)).getMonth() + 1}/{(new Date(row.createdAt)).getFullYear()}</span></TableCell>
							<TableCell align="right"><Chip label="XEM TRẠNG THÁI" className='success bold' onClick={() => setOpenCarStatus(true)}/></TableCell>
						</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination component="div" count={carstatuslist.length} rowsPerPage={10} page={page} rowsPerPageOptions={10} onPageChange={handleChangePage}/>
            </DialogContent>
            <CarStatusDialog openCarStatus={openCarStatus} setOpenCarStatus={setOpenCarStatus}></CarStatusDialog>
		</Dialog>
	);
}

export default CarStatusList;
