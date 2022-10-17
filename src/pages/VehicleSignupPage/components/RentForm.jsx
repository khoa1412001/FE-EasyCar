import React from 'react'
import { useState } from 'react'
import { TextField, Typography, Grid, Stack, Switch, Divider, Slider} from '@mui/material'

function RentForm() {
  const [checked,setChecked] = useState(true)
  return (
    <Stack bgcolor='white' p={5} spacing={1}>
      <Typography fontWeight='bold' fontSize='1.25rem'>Đơn giá thuê mặc định</Typography>
      <Typography color='#424242' fontSize='0.95rem'>Đơn giá áp dụng cho tất cả các ngày. Bạn có thuể tuỳ chỉnh giá khác cho các ngày đặc biệt (cuối tuần, lễ, tết...) trong mục quản lý xe sau khi đăng kí.</Typography>
      <Typography py={2} color='#424242' fontSize='0.95rem'>Giá đề xuất: 720K</Typography>
      <Grid container>
        <Grid item xs={3}>
        <TextField fullWidth value='720'></TextField>
        </Grid>
        <Grid item xs={1}>
        <Typography p={2}>K</Typography></Grid>
      </Grid>
      <Typography py={2} fontWeight='bold' fontSize='1.25rem'>Địa chỉ xe</Typography>
      <Typography variant='outlined'>Địa chỉ mặc định để giao nhận xe</Typography>
      <Stack direction='row' justifyContent="space-between">
      <Typography pt={1} fontWeight='bold' fontSize='1.25rem'>Giới hạn số km</Typography>
      <Switch onChange={() => setChecked(!checked)} checked = {checked}/>
      </Stack>
      {checked && 
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <Typography color='#424242' fontSize='0.95rem'>Số km tối đa trong 1 ngày</Typography>
          <Slider/>
          <Typography color='gray' fontSize='0.95rem'>Số km đề xuất: 400km</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color='#424242' fontSize='0.95rem'>Số km tối đa trong 1 ngày</Typography>
          <Slider mx = {2} />
          <Typography color='gray' fontSize='0.95rem'>Số km đề xuất: 400km</Typography>
        </Grid>
      </Grid>}
      <Divider/>
      <Typography>Điều khoản thuê xe</Typography>
      <Typography>Ghi rõ các yêu cầu để khách có thể thuê xe.</Typography>
      <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />
    </Stack>
  )
}

export default RentForm