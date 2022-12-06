import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import CarStatusDialog from './CarStatusDialog';
import './style.scss';
import * as React from 'react';
import CarItem from './CarItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiUser from 'apis/apiUser';
import apiCar from 'apis/apiCar';
function CarManagement() {
	const [carinforlist, setCarinforlist] = React.useState([]);
	const nextPage = () => {};
	React.useEffect(() => {
		apiCar.getOwnedVehicle().then((res) => setCarinforlist(res.data));
	}, []);
	return (
		<Stack className="carmanagement-container" paddingLeft={1} spacing={1} marginLeft="5px">
			<InfiniteScroll
				dataLength={carinforlist.length}
				next={() => nextPage()}
				hasMore={false}
				scrollableTarget="carmanagement-container"
			>
				{carinforlist.map((item) => (
					<CarItem item={item} />
				))}
			</InfiniteScroll>
		</Stack>
	);
}

export default CarManagement;
