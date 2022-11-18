import { Avatar, Button, Stack, Typography } from '@mui/material';
import variables from '../../../assets/_variable.scss';
import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import InformationForm from './InformationForm';
import RentForm from './RentForm';
import ImageForm from './ImageForm';
import apiCar from 'apis/apiCar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function VehicleSignupBody() {
	const [step, setStep] = useState(1);
	const [licenseplate, setLicenseplate] = React.useState('');
	const [brand, setBrand] = React.useState('NONE');
	const [model, setModel] = React.useState('NONE');
	const [type, setType] = React.useState('MINI-4');
	const [transmission, setTransmission] = React.useState('AUTO');
	const [fueltype, setFueltype] = React.useState('GASOLINE');
	const [year, setYear] = React.useState('');
	const [fuelconsumption, setFuelconsumption] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [rentprice, setRentprice] = React.useState('750');
	const [kmlimit, setKmlimit] = React.useState(300);
	const [priceover, setPriceover] = React.useState(3000);
	const [rentterm, setRentterm] = React.useState('');
	const [checked, setChecked] = React.useState(true);
	const [imgfront, setImgfront] = React.useState();
	const [imgrear, setImgrear] = React.useState();
	const [imgleft, setImgleft] = React.useState();
	const [imgright, setImgright] = React.useState();
	const [brandlist, setBrandlist] = React.useState([]);
	const [modellist, setModellist] = React.useState([]);
	const [modelimage, setModelimage] = React.useState('');
	const [turnoffback, setTurnofback] = React.useState(false);
	const [turnoffforward, setTurnofforward] = React.useState(false);
	const navigate = useNavigate();
	React.useEffect(() => {
		const getBrandList = () => {
			apiCar
				.getBrand()
				.then((res) => {
					setBrandlist(res.data);
				})
				.catch();
		};
		getBrandList();
	}, []);

	React.useEffect(() => {
		const getModelList = () => {
			const params = {
				brand: brand,
			};
			if (brand !== 'NONE' && brand !== 'KHÁC') {
				apiCar
					.getModel(params)
					.then((res) => {
						setModellist(res.data);
					})
					.catch();
			}
			setModel('NONE');
		};
		getModelList();
	}, [brand]);
	const getImage = (modelstring) => {
		const modelobj = modellist.find(item => item.model === modelstring)
		setModelimage(modelobj.image)
	}

	const handleSent = () => {
		let params = new FormData();
		params.append('licenseplate', licenseplate);
		params.append('brand', brand);
		params.append('model', model);
		params.append('type', type);
		params.append('transmission', transmission);
		params.append('fueltype', fueltype);
		params.append('year', year);
		params.append('fuelconsumption', fuelconsumption);
		params.append('description', description);
		params.append('rentprice', rentprice);
		if (checked) {
			params.append('kmlimit', kmlimit);
			params.append('priceover', priceover);
		}
		params.append('rentterm', rentterm);
		params.append('checked', checked);
		params.append('modelimage',modelimage)
		params.append('vehicleimage', imgfront);
		params.append('vehicleimage', imgrear);
		params.append('vehicleimage', imgleft);
		params.append('vehicleimage', imgright);

		apiCar.registerCar(params).then((res) => {
			toast.success('Gửi đăng ký thành công!!!');
			navigate('/');
			
		}).catch(err => toast.warning(err.response.data.message));
	};
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
						setFueltype={setFueltype}
						year={year}
						setYear={setYear}
						fuelconsumption={fuelconsumption}
						setFuelconsumption={setFuelconsumption}
						description={description}
						setDescription={setDescription}
						brandlist={brandlist}
						modellist={modellist}
						setModelimage={setModelimage}
						getImage={getImage}
					/>
				);
			case 2:
				return (
					<RentForm
						rentprice={rentprice}
						setRentprice={setRentprice}
						kmlimit={kmlimit}
						setKmlimit={setKmlimit}
						priceover={priceover}
						setPriceover={setPriceover}
						checked={checked}
						setChecked={setChecked}
						rentterm={rentterm}
						setRentterm={setRentterm}
					/>
				);
			case 3:
				return (
					<ImageForm
						imgfront={imgfront}
						setImgfront={setImgfront}
						imgrear={imgrear}
						setImgrear={setImgrear}
						imgleft={imgleft}
						setImgleft={setImgleft}
						imgright={imgright}
						setImgright={setImgright}
						handleSent={handleSent}
					/>
				);
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
	React.useEffect(() => {
		const checkStep = () => {
			if(step === 1){
				setTurnofback(true)
			}
			else {
				setTurnofback(false)
			}
			if(step === 3){
				setTurnofforward(true)
			}
			else {
				setTurnofforward(false)
			}
		}
		checkStep()
	}, [step])
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
					<Button variant="contained" onClick={handlePrev} sx={{ width: '120px' }} disabled={turnoffback}>
						Quay lại
					</Button>
					<Button variant="contained" onClick={handleNext} sx={{ width: '120px' }} disabled={turnoffforward}>
						Tiếp theo
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
}

export default VehicleSignupBody;
