import React from 'react'
import { Box } from '@mui/material';
import Header from 'components/Header';
import Fillter from 'pages/FilterPage/components/Fillter'
import DateLocationFillter from './components/DateLocationFillter';
import CarItem from './components/CarItem';
import { Stack } from "@mui/system";
import 'pages/FilterPage/style.scss'

function FilterPage() {
  return (
    <Box>
      <Header/>
      <Box className='fillter-page-bg'>
        <Box className='fillter-page-container' paddingTop={'5px'}>
          <Box className='fillter-page-container__datetimecontainer' paddingBottom={'5px'}>
            <DateLocationFillter/>
          </Box>
          <Stack direction={'row'}>
            <Fillter/>
            <Box paddingLeft={'5px'}>
              <CarItem/>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default FilterPage