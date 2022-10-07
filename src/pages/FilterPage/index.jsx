import React from 'react'
import { Box } from '@mui/material';
import Header from 'components/Header';
import Fillter from 'pages/FilterPage/components/Fillter'
import DateLocationFillter from './components/DateLocationFillter';

function FilterPage() {
  return (
    <Box>
      <Header/>
      <DateLocationFillter/>
      <Fillter/>
    </Box>
  )
}

export default FilterPage