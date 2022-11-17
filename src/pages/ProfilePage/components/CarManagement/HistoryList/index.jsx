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
import HistoryOwnerDialog from '../HistoryOwnerDialog';
import './style.scss';

function HistoryList(props) {
    const {openHistoryList, setOpenHistoryList} = props
    const [openHistoryOwnerDialog, setOpenHistoryOwnerDialog] = React.useState(false)
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
						<TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>1</span></TableCell>
							<TableCell align="right"><span className='bold'>24/12/2012</span></TableCell>
                            <TableCell align="right"><span className='bold'>24/12/2012</span></TableCell>
                            <TableCell align="right"><span className='bold'>Nguyễn Phúc An</span></TableCell>
                            <TableCell align="right"><span className="green bold fontLarge">190000 ₫</span></TableCell>
							<TableCell align="right"><Chip label="XEM CHI TIẾT" className='success bold' onClick={() => setOpenHistoryOwnerDialog(true)}/></TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination component="div" count={-1} rowsPerPage={10} page={0} />
            </DialogContent>
            <HistoryOwnerDialog openHistoryOwnerDialog={openHistoryOwnerDialog} setOpenHistoryOwnerDialog={setOpenHistoryOwnerDialog}/>
		</Dialog>
  )
}

export default HistoryList