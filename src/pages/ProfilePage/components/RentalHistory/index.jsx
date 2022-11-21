import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import HistoryItem from './HistoryItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiUser from 'apis/apiUser';

function RentalHistory() {
	const [rentalhistory, setRentalhistory] = React.useState([]);
	const nextPage = () => {};
	React.useEffect(() => {
		apiUser.getRentalHistory().then(res => {setRentalhistory(res.data)})
	}, []);
	return (
		<Stack className="rentalhistory-container" paddingLeft={1}  marginLeft="5px" spacing={1} flexWrap="nowrap">
			<InfiniteScroll
				dataLength={rentalhistory.length}
				next={() => nextPage()}
				hasMore={false}
				scrollableTarget="rentalhistory-container"
			>
				{rentalhistory.map((item) => (
					<HistoryItem item={item} />
				))}
			</InfiniteScroll>
		</Stack>
	);
}

export default RentalHistory;
