import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import Item from './Item';
import './style.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

function CarTable() {
	const handleGetCar = () => {};
	return (
		<Stack id="carlist-scroll" className="carlist-container" padding={1} spacing={1} flexWrap="nowrap">
			<InfiniteScroll
				dataLength={4}
				next={handleGetCar}
				hasMore={true}
				scrollableTarget="carlist-scroll"
			>
				<Item />
			</InfiniteScroll>
		</Stack>
	);
}

export default CarTable;
