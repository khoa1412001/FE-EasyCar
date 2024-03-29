import { Stack } from '@mui/system';
import 'assets/style.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import Item2 from './Item2';
import './style.scss';
function CarTable(props) {
	const {nextPage, carinforlist} = props
	return (
		// <Stack id="carlist-scroll" className="carlist-container" paddingLeft={1} flexWrap="nowrap">
		// 	<InfiniteScroll
		// 		dataLength={carinforlist.length}
		// 		next={() => nextPage()}
		// 		hasMore={true}
		// 		scrollableTarget="carlist-scroll"
		// 	>
		// 		{carinforlist.map((item) =>(<Item item={item}/>))}
		// 	</InfiniteScroll>
		// </Stack>
		<Stack id="carlist-scroll" className="carlist-container" flexWrap="nowrap">
			<InfiniteScroll
				dataLength={carinforlist.length}
				next={() => nextPage()}
				hasMore={true}
				scrollableTarget="carlist-scroll"
				style= {{display: 'flex', flexDirection: 'row', flexWrap:'wrap',}}
			>
				{carinforlist.map((item) =>(<Item2 item={item}/>))}

			</InfiniteScroll>
		</Stack>
	);
}

export default CarTable;
