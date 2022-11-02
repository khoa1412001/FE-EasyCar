import { Avatar, Button, Stack, Typography } from '@mui/material';
import variables from '../../../assets/_variable.scss';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import InformationForm from './InformationForm';
import RentForm from './RentForm';
import ImageForm from './ImageForm';

function VehicleSignupBody() {
	const [step, setStep] = useState(1);
	const bodyProcess = () => {
		switch (step) {
			case 1:
				return <InformationForm />;
			case 2:
				return <RentForm />;
			case 3:
				return <ImageForm />;
			default:
				break;
		}
	};
	const handleNext = () => {
		if (step !== 3) setStep(step + 1);
	};
	const handlePrev = () => {
		if (step !== 1) setStep(step - 1);
	};
	return (
		<Stack justifyContent="center" direction="row" bgcolor="#e8eaef">
			<Stack maxWidth="800px" width="800px" py={5} spacing={2}>
				<Stack direction="row" justifyContent="center" bgcolor="white" spacing={4} py={2}>
					<Stack>
						<Avatar
							sx={{
								ml: 1,
								mb: 1,
								width: 56,
								height: 56,
								color: step === 1 ? variables.mainyellowcolor : 'black',
								bgcolor: step === 1 ? variables.mainlightercolor : '#e0e0e0',
							}}
						>
							1
						</Avatar>
						<Typography>Thông tin</Typography>
					</Stack>
					<ArrowForwardIosIcon sx={{ p: 2 }} />
					<Stack>
						<Avatar
							sx={{
								ml: 1,
								mb: 1,
								width: 56,
								height: 56,
								color: step === 2 ? variables.mainyellowcolor : 'black',
								bgcolor: step === 2 ? variables.mainlightercolor : '#e0e0e0',
							}}
						>
							2
						</Avatar>
						<Typography>Cho thuê</Typography>
					</Stack>
					<ArrowForwardIosIcon sx={{ p: 2 }} />
					<Stack>
						<Avatar
							sx={{
								ml: 1,
								mb: 1,
								width: 56,
								height: 56,
								color: step === 3 ? variables.mainyellowcolor : 'black',
								bgcolor: step === 3 ? variables.mainlightercolor : '#e0e0e0',
							}}
						>
							3
						</Avatar>
						<Typography>Hình ảnh</Typography>
					</Stack>
				</Stack>

				{bodyProcess()}
				<Stack direction="row" justifyContent="space-between">
					<Button variant="contained" onClick={handlePrev}>Quay lại</Button>
					<Button variant="contained" onClick={handleNext}>Tiếp theo</Button>
				</Stack>
			</Stack>
		</Stack>
	);
}

export default VehicleSignupBody;
