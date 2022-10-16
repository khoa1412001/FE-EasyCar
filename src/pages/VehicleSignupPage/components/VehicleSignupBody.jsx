import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react'
import InformationForm from './InformationForm';
import { Box } from '@mui/system';
import RentForm from './RentForm';

function VehicleSignupBody() {
	const [step,setStep] = useState(1)
  return (
    <Stack justifyContent='center' direction='row' bgcolor='#e8eaef'>
      <Stack maxWidth='800px' width='800px' py={5} spacing={2}>
				<Stack direction='row' justifyContent='center' bgcolor='white' spacing={3} py={2}>
					<Avatar sx={{ width: 56, height: 56 }}>1</Avatar>
					<ArrowForwardIosIcon sx={{p:2}}/>
					<Avatar sx={{ width: 56, height: 56 }}>2</Avatar>
					<ArrowForwardIosIcon sx={{p:2}}/>
					<Avatar sx={{ width: 56, height: 56 }}>3</Avatar>
				</Stack>
				<InformationForm/>
				<RentForm/>
				<Stack direction='row' justifyContent='space-between'>
				<Button>Quay lại</Button>
				<Button>Tiếp theo</Button>
			</Stack>
			</Stack>
		</Stack>
  )
}

export default VehicleSignupBody