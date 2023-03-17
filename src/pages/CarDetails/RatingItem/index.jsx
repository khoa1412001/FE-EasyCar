import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import { Typography, Box, Avatar, Rating, Divider} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function RatingItem(props) {
	const {item} = props
	return (
		<Box marginTop='8px'>
			<Grid container paddingLeft={3} paddingTop={1} className='ratingitem-container' height='135px'>
				<Grid item xs={2}>
					<Avatar alt="Remy Sharp" src={item.userId && item.userId.avatar} sx={{ width: 75, height: 75 }} />
				</Grid>
				<Grid item xs={8}>
					<Typography className='ratingitem-container__name' sx={{paddingLeft:'4px'}}>{item.userId && item.userId.username}</Typography>
					<Rating readOnly value={item.rating}/>
					<Typography className='ratingitem-container__comment' sx={{paddingLeft:'4px', paddingTop:'10px',paddingRight:'10px', height:'66px'}}>
						{item.comment}
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography>{(new Date(item.createdAt)).getDate()}/{(new Date(item.createdAt)).getMonth() + 1}/{(new Date(item.createdAt)).getFullYear()}</Typography>
				</Grid>
			</Grid>
			<Divider sx={{marginLeft:'24px', marginRight:'24px',}}/>
		</Box>
	);
}

export default RatingItem;
