import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import { Typography, Box, Avatar, Rating, Divider} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function RatingItem() {
	return (
		<Box marginTop='8px'>
			<Grid container paddingLeft={3} paddingTop={1} className='ratingitem-container' height='135px'>
				<Grid item xs={2}>
					<Avatar alt="Remy Sharp" src='https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg' sx={{ width: 75, height: 75 }} />
				</Grid>
				<Grid item xs={8}>
					<Typography className='ratingitem-container__name' sx={{paddingLeft:'4px'}}>Bành Đăng Khoa</Typography>
					<Rating readOnly value={3}/>
					<Typography className='ratingitem-container__comment' sx={{paddingLeft:'4px', paddingTop:'10px',paddingRight:'10px', height:'66px'}}>
						Xe còn mới, chạy rất êm, chủ xe tốt, đúng giờ giấc.
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography>12/13/2012</Typography>
				</Grid>
			</Grid>
			<Divider sx={{marginLeft:'24px', marginRight:'24px',}}/>
		</Box>
	);
}

export default RatingItem;
