import { TextField, Typography, Grid, Select, MenuItem, Stack} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

function InformationForm() {
  const [age,setAge] = useState('')
  const handleChange = event => (setAge(event.target.value))
  return (
    <Stack bgcolor='white' p={5}>
    <Typography>Biển số xe</Typography>
    <Typography>Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng ký</Typography>
    <Grid container>
      <Grid item xs={6}>
        <TextField fullWidth></TextField>
      </Grid>
    </Grid>
    <Typography>Thông tin cơ bản</Typography>
    <Typography>Lưu ý: Các thông tin cơ bản sẽ không thể thay đổi sau khi đăng ký</Typography>
    <Grid container columns={13} rowSpacing={2}>
        <Grid item xs={6}>
            <Typography>Hãng xe</Typography>
              <Select
                fullWidth
                displayEmpty
                value={age}
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
            <Typography>Mẫu xe</Typography>
              <Select
                fullWidth
                displayEmpty
                value={age}
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
            <Typography>Số ghế</Typography>
              <Select
                fullWidth
                displayEmpty
                value={age}
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
            <Typography>Năm sản xuất</Typography>
              <Select
                fullWidth
                displayEmpty
                value={age}
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
            <Typography>Truyền động</Typography>
              <Select
                fullWidth
                displayEmpty
                value={age}
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
            <Typography>Loại nhiên liệu</Typography>
              <Select
                fullWidth
                displayEmpty
                value={age}
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
    <Typography>Mức tiêu thụ nhiên liệu</Typography>
    <Typography>Số lít nhiên liệu cho quãng đường 100km.</Typography>
    <Grid container>
      <Grid item xs={6}>
        <TextField fullWidth></TextField>
      </Grid>
    </Grid>
    <Typography>Mô tả</Typography>
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