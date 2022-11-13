import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import Item from './Item';
import './style.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as React from 'react';
function CarTable(props) {
	const {nextPage, page, setPage, carinforlist} = props
	return (
		<Stack id="carlist-scroll" className="carlist-container" padding={1} flexWrap="nowrap">
			<InfiniteScroll
				dataLength={carinforlist.length}
				next={() => nextPage()}
				hasMore={true}
				scrollableTarget="carlist-scroll"
			>
				{carinforlist.map((item) =>(<Item item={item}/>))}
			</InfiniteScroll>
		</Stack>
	);
}

export default CarTable;
