import { Box, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'assets/style.scss';
import * as React from 'react';
import './style.scss';
import Autocomplete from '@mui/material/Autocomplete';
function DateLocationFillter(props) {
	const { address, setAddress, startdate, setStartdate, enddate, setEnddate, suggestion } = props;
	return (
		<Box className="datelocationfillter-container">
			<Stack direction={'row'} alignItems="center" padding={1} height={'34px'}>
				<Typography className="datelocationfillter-container__text" paddingRight={'10px'} sx={{ fontWeight: 'bold' }}>
					Địa điểm:
				</Typography>
				<Autocomplete
					freeSolo
					disableClearable
					options={suggestion.map((option) => option.address)}
					value={address}
					onSelect={(event) => setAddress(event.target.value)}
					renderInput={(params) => (
						<TextField
							{...params}
							placeholder="Nhập vị trí thành phố, quận, đường..."
							variant="standard"
							size="small"
							onChange={(event) => setAddress(event.target.value)}
              sx={{width:'239px'}}
						/>
					)}
				/>
				<Divider orientation="vertical" sx={{ paddingLeft: '10px' }} />
				<Typography
					className="datelocationfillter-container__text"
					paddingRight={'10px'}
					paddingLeft={'10px'}
					sx={{ fontWeight: 'bold' }}
				>
					Ngày bắt đầu:
				</Typography>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DateTimePicker
						inputFormat="DD/MM/YYYY hh:mm A"
						renderInput={(props) => <TextField {...props} variant="standard" size="small" />}
						value={startdate}
						onChange={(newValue) => {
							setStartdate(newValue);
						}}
						size="small"
					/>
				</LocalizationProvider>
				<Divider orientation="vertical" sx={{ paddingLeft: '10px' }} />
				<Typography
					className="datelocationfillter-container__text"
					paddingRight={'10px'}
					paddingLeft={'10px'}
					sx={{ fontWeight: 'bold' }}
				>
					Ngày kết thúc:
				</Typography>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DateTimePicker
						inputFormat="DD/MM/YYYY hh:mm A"
						renderInput={(props) => <TextField {...props} variant="standard" size="small" />}
						value={enddate}
						onChange={(newValue) => {
							setEnddate(newValue);
						}}
						size="small"
					/>
				</LocalizationProvider>
			</Stack>
		</Box>
	);
}

export default DateLocationFillter;
