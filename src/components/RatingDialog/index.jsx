import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import {
	Button,
	Stack,
	Typography,
	Dialog,
	DialogContent,
	DialogTitle,
	Rating,
	TextField,
} from '@mui/material';

function RatingDialog(props) {
	const { openRatingDialog, setOpenRatingDialog, rating, setRating, SendRating } = props;
	return (
		<Dialog
			open={openRatingDialog}
			maxWidth="sm"
			fullWidth
			onClose={() => setOpenRatingDialog(false)}
			className="dialog-container"
		>
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					ĐÁNH GIÁ
				</Typography>
			</DialogTitle>
			<DialogContent align="center" dividers="true">
			<TextField
					placeholder="Nhập biển số xe"
					variant="outlined"
					value='MITSUBISHI XPANDER 2022'
					size='small'
					sx={{width: '500px'}}
					multiline
					rows={5}
				/>
				<Rating name="no-value" value={rating} onChange={(event) => setRating(event.target.value)} sx={{ paddingTop: '20px' }} />
				<Stack direction={'row'} justifyContent="center" spacing={3} paddingTop={2}>
					<Button
						variant="standard"
						onClick={() => {
							SendRating();
							setOpenRatingDialog(false);
						}}
						sx={{
							width: '300px',
							bgcolor: variables.textgreencolor,
							color: '#FFFFFF',
							'&.MuiButtonBase-root:hover': {
								bgcolor: variables.textgreencolor,
							},
						}}
					>
						GỬI ĐÁNH GIÁ
					</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default RatingDialog;
