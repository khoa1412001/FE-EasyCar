import { TextField, Typography, Grid, Select, MenuItem, Stack} from '@mui/material'
import { set } from 'lodash'
import * as React from 'react'

function InformationForm(props) {
  const {licenseplate, setLicenseplate, brand, setBrand, model, setModel, type, setType, transmission, setTransmission, fueltype, setFueltype, year, setYear, fuelconsumption, setFuelconsumption, description, setDescription} = props
  const [test,setTest] = React.useState('')
  const handleChange = () => {}
  return (
    <Stack bgcolor='white' p={5} spacing={2}>
    <Typography fontWeight='bold' fontSize='1.2rem'>Biển số xe</Typography>
    <Typography color='red' fontSize='0.85rem'>Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng ký</Typography>
    <Grid container>
      <Grid item xs={6}>
        <TextField fullWidth value={licenseplate} onChange={(event) => setLicenseplate(event.target.value)} placeholder="59A-159.22"></TextField>
      </Grid>
    </Grid>
    <Typography fontWeight='bold' fontSize='1.2rem'>Thông tin cơ bản</Typography>
    <Typography color='red' fontSize='0.85rem'>Lưu ý: Các thông tin cơ bản sẽ không thể thay đổi sau khi đăng ký</Typography>
    <Grid container columns={13} rowSpacing={2}>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Hãng xe</Typography>
              <Select
                fullWidth
                displayEmpty
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              >
                <MenuItem value="">
                  Chọn hãng xe
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Mẫu xe</Typography>
              <Select
                fullWidth
                displayEmpty
                value={model}
                onChange={(event) => {setModel(event.target.value)}}
              >
                <MenuItem value="">
                  Chọn hãng xe
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
        </Grid>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Kiểu xe</Typography>
              <Select
                fullWidth
                displayEmpty
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <MenuItem value="MINI-4">Mini 4 chỗ</MenuItem>
                <MenuItem value="SEDAN-4">Sedan 4 chỗ</MenuItem>
                <MenuItem value="SUV-5">SUV 5 chỗ</MenuItem>
                <MenuItem value="SUV-7">SUV 7 chỗ</MenuItem>
                <MenuItem value="MPV-7">MPV 7 chỗ</MenuItem>
                <MenuItem value="PU-4">Pick-up 4 chỗ</MenuItem>
              </Select>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Truyền động</Typography>
              <Select
                fullWidth
                displayEmpty
                value={transmission}
                onChange={(event) => setTransmission(event.target.value)}
              >
                <MenuItem value="AUTO">Tự động</MenuItem>
                <MenuItem value="MANUAL">Số sàn</MenuItem>
              </Select>
        </Grid>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Loại nhiên liệu</Typography>
              <Select
                fullWidth
                displayEmpty
                value={fueltype}
                onChange={(event) => setFueltype(event.target.value)}
              >
                <MenuItem value="GASOLINE">Xăng</MenuItem>
                <MenuItem value="DIESEL">Dầu DO</MenuItem>
                <MenuItem value="ELECTRIC">Điện</MenuItem>
              </Select>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Năm sản xuất</Typography>
              <TextField
                fullWidth
                value={year}
                onChange={(event) => setYear(event.target.value)}
                placeholder='2021'
              >
              </TextField>
        </Grid>
    </Grid>
    <Typography fontWeight='bold' fontSize='1.2rem'>Mức tiêu thụ nhiên liệu</Typography>
    <Typography color='gray' fontSize='0.85rem'>Số lít nhiên liệu cho quãng đường 100km.</Typography>
    <Grid container>
      <Grid item xs={6}>
        <TextField fullWidth value={fuelconsumption} onChange={(event) => setFuelconsumption(event.target.value)}></TextField>
      </Grid>
    </Grid>
    <Typography fontWeight='bold' fontSize='1.2rem'>Mô tả</Typography>
    <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange = {(event) => setDescription(event.target.value)}
        />
    </Stack>
  )
}

export default InformationForm