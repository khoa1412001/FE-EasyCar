import './style.scss';
import variables from 'assets/_variable.scss';
import 'assets/style.scss';
import * as React from 'react';
import { Avatar, Box, Button, Divider, Drawer, Stack, Typography } from '@mui/material';
import PaperContract from './PaperContract';
import { useReactToPrint } from 'react-to-print';

function ContractPaper() {
	const componentRef = React.useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	  });
	return (
		<Stack paddingTop={2} paddingBottom={2}>
			<PaperContract ref={componentRef}/>
			<Button variant='contained' onClick={handlePrint} sx={{width:'820px',alignSelf:'center'}}>
			IN HỘP ĐỒNG
			</Button>
		</Stack>
	);
}

export default ContractPaper;
