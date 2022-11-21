import './style.scss';
import variables from 'assets/_variable.scss';
import 'assets/style.scss';
import * as React from 'react';
import ReactToPrint from 'react-to-print';
import { Avatar, Box, Button, Divider, Drawer, Stack, Typography } from '@mui/material';
import PaperContract from './PaperContract';

function ContractPaper() {
	return (
		<Box>
			<PaperContract />
		</Box>
	);
}

export default ContractPaper;
