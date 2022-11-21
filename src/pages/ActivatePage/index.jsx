import React from 'react'
import { Box, Typography } from '@mui/material';
import './style.scss';
import variables from 'assets/_variable.scss';
import 'assets/style.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Stack } from '@mui/system';


function ActivatePage() {
  return (
    <Stack className="activatepage-container" display={'flex'} justifyContent='center' alignItems='center' spacing={1}>
        <CheckCircleOutlineIcon className="activatepage-container__icon" sx={{fontSize:'180px'}}/>
        <Typography variant="h4" sx={{color:variables.textgreencolor}}>KÍCH HOẠT TÀI KHOẢN !!!</Typography>
        
    </Stack>
  )
}

export default ActivatePage