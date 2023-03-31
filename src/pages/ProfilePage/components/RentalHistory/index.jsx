import { Stack } from '@mui/system';
import apiUser from 'apis/apiUser';
import 'assets/style.scss';
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import HistoryItem from './HistoryItem';
import './style.scss';
import HistoryItem2 from './HistoryItem2';

function RentalHistory() {
	const [rentalhistory, setRentalhistory] = React.useState([]);
	const nextPage = () => {};
	React.useEffect(() => {
		const getRentalhistory = () => {
			apiUser.getRentalHistory().then(res => {setRentalhistory(res.data)})
		}
		getRentalhistory()
	}, []);
	
	return (
		<Stack className="rentalhistory-container" marginLeft="5px" spacing={1} flexWrap="nowrap">
			<InfiniteScroll
				dataLength={rentalhistory.length}
				next={() => nextPage()}
				hasMore={false}
				scrollableTarget="rentalhistory-container"
				style= {{overflow: 'hidden'}}
			>
				{rentalhistory.map((item) => (
					<HistoryItem2 item={item} />
				))}
			</InfiniteScroll>
		</Stack>
	);
}

export default RentalHistory;
