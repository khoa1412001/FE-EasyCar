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

function CarStatusList(props) {
	const { openStatusList, setOpenStatusList } = props;
    const [openCarStatus, setOpenCarStatus] = React.useState(false);
    
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
						<TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>1</span></TableCell>
							<TableCell align="right"><span className='bold'>24/12/2012</span></TableCell>
							<TableCell align="right"><Chip label="XEM TRẠNG THÁI" className='success bold' onClick={() => setOpenCarStatus(true)}/></TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination component="div" count={-1} rowsPerPage={10} page={0} rowsPerPageOptions={10} />
            </DialogContent>
            <CarStatusDialog openCarStatus={openCarStatus} setOpenCarStatus={setOpenCarStatus}></CarStatusDialog>
		</Dialog>
	);
}

export default CarStatusList;
