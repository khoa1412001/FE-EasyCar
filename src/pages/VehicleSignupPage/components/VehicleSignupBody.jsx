import { Avatar, Button, Stack, Typography } from '@mui/material';
import variables from '../../../assets/_variable.scss';
import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import InformationForm from './InformationForm';
import RentForm from './RentForm';
import ImageForm from './ImageForm';

function VehicleSignupBody() {
	const [step, setStep] = useState(1);
	const [licenseplate, setLicenseplate] = React.useState('');
	const [brand, setBrand] = React.useState('');
	const [model, setModel] = React.useState('');
	const [type, setType] = React.useState('MINI-4');
	const [transmission, setTransmission] = React.useState('AUTO');
	const [fueltype, setFueltype] = React.useState('GASOLINE');
	const [year, setYear] = React.useState('');
	const [fuelconsumption, setFuelconsumption] = React.useState('');
	const [description, setDescription] = React.useState('');
	const bodyProcess = () => {
		switch (step) {
			case 1:
				return (
					<InformationForm
						licenseplate={licenseplate}
						setLicenseplate={setLicenseplate}
						brand={brand}
						setBrand={setBrand}
						model={model}
						setModel={setModel}
						type={type}
						setType={setType}
						transmission={transmission}
						setTransmission={setTransmission}
						fueltype={fueltype}
						setFueltype = {setFueltype}
						year = {year}
						setYear = {setYear}
						fuelconsumption = {fuelconsumption}
						setFuelconsumption = {setFuelconsumption}
						description = {description}
						setDescription = {setDescription}
					/>
				);
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
					<Button variant="contained" onClick={handlePrev} sx={{ width: '120px' }}>
						Quay lại
					</Button>
					<Button variant="contained" onClick={handleNext} sx={{ width: '120px' }}>
						Tiếp theo
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
}

export default VehicleSignupBody;
