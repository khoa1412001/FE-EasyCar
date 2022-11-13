import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from '@mui/material';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';

function ConfirmDialog(props) {
	const { openDialog, setOpenDialog } = props;
	return (
		<Dialog open={openDialog} maxWidth="xs" fullWidth onClose={() => setOpenDialog(false)} className="dialog-container">
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					XÁC NHẬN HÀNH ĐỘNG
				</Typography>
			</DialogTitle>
			<DialogContent align="center" dividers="true">
				<DialogContentText>Nội dung</DialogContentText>
				<Stack direction={'row'} justifyContent="center" spacing={3} paddingTop={2}>
					<Button
						variant="standard"
						onClick={() => setOpenDialog(false)}
						sx={{
							width: '300px',
							bgcolor: '#f34a38',
							color: '#FFFFFF',
							'&.MuiButtonBase-root:hover': {
								bgcolor: '#f34a38',
							},
						}}
					>
						TỪ CHỐI
					</Button>
					<Button
						variant="standard"
						sx={{
							width: '300px',
							bgcolor: variables.textgreencolor,
							color: '#FFFFFF',
							'&.MuiButtonBase-root:hover': {
								bgcolor: variables.textgreencolor,
							},
						}}
					>
						ĐỒNG Ý
					</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default ConfirmDialog;
