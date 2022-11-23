import { Stack } from '@mui/system';
import apiUser from 'apis/apiUser';
import 'assets/style.scss';
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import HistoryItem from './HistoryItem';
import './style.scss';

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
