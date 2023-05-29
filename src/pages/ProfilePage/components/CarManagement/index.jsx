import { Stack } from '@mui/system';
import apiCar from 'apis/apiCar';
import 'assets/style.scss';
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CarItem2 from './CarItem2';
import './style.scss';
function CarManagement() {
	const [carinforlist, setCarinforlist] = React.useState([]);
	const nextPage = () => {};
	React.useEffect(() => {
		apiCar.getOwnedVehicle().then((res) => setCarinforlist(res.data));
	}, []);
	return (
		<Stack className="carmanagement-container" spacing={1} marginLeft="5px">
			<InfiniteScroll
				dataLength={carinforlist.length}
				next={() => nextPage()}
				hasMore={false}
				scrollableTarget="carmanagement-container"
				style= {{overflow: 'hidden'}}
			>
				{carinforlist.map((item) => (
					<CarItem2 item={item} />
				))}
			</InfiniteScroll>
		</Stack>
	);
}

export default CarManagement;
