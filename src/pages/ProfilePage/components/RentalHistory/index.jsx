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

function RentalHistory() {
	return (
		<Stack className="rentalhistory-container" padding={1} marginLeft="5px" spacing={1} flexWrap="nowrap">
			<HistoryItem/>
			<HistoryItem/>
		</Stack>
	);
}

export default RentalHistory;
