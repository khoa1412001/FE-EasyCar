import { Button, Stack } from '@mui/material';
import 'assets/style.scss';
import * as React from 'react';
import { useReactToPrint } from 'react-to-print';
import PaperContract from './PaperContract';
import './style.scss';

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
