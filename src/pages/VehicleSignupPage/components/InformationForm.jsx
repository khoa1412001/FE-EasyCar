import { TextField, Typography, Grid, Select, MenuItem, Stack} from '@mui/material'
import React, { useState } from 'react'

function InformationForm() {
  const [test,setTest] = useState('')
  const handleChange = event => (setTest(event.target.value))
  return (
    <Stack bgcolor='white' p={5} spacing={2}>
    <Typography fontWeight='bold' fontSize='1.2rem'>Biển số xe</Typography>
    <Typography color='red' fontSize='0.85rem'>Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng ký</Typography>
    <Grid container>
      <Grid item xs={6}>
        <TextField fullWidth></TextField>
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
                value={test}
                onChange={handleChange}
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
                value={test}
                onChange={handleChange}
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
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Số ghế</Typography>
              <Select
                fullWidth
                displayEmpty
                value={test}
                onChange={handleChange}
              >
                <MenuItem value="">
                  Chọn hãng xe
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Năm sản xuất</Typography>
              <Select
                fullWidth
                displayEmpty
                value={test}
                onChange={handleChange}
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
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Truyền động</Typography>
              <Select
                fullWidth
                displayEmpty
                value={test}
                onChange={handleChange}
              >
                <MenuItem value="">
                  Chọn hãng xe
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={6}>
            <Typography pb={1} color='#424242' fontSize='0.95rem'>Loại nhiên liệu</Typography>
              <Select
                fullWidth
                displayEmpty
                value={test}
                onChange={handleChange}
              >
                <MenuItem value="">
                  Chọn hãng xe
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
        </Grid>
    </Grid>
    <Typography fontWeight='bold' fontSize='1.2rem'>Mức tiêu thụ nhiên liệu</Typography>
    <Typography color='gray' fontSize='0.85rem'>Số lít nhiên liệu cho quãng đường 100km.</Typography>
    <Grid container>
      <Grid item xs={6}>
        <TextField fullWidth></TextField>
      </Grid>
    </Grid>
    <Typography fontWeight='bold' fontSize='1.2rem'>Mô tả</Typography>
    <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />
    </Stack>
  )
}

export default InformationForm