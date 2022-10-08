import React from 'react'
import "assets/style.scss";
import variables from "assets/_variable.scss";
import "./style.scss";
import { Stack } from "@mui/system";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import Divider from "@mui/material/Divider";

function CarItem() {
  return (
    <Stack className='carlist-container' padding={1} spacing={1} flexWrap='nowrap'>
        <Box className='caritem-container'>

        </Box>
        <Box className='caritem-container'>

        </Box>

    </Stack>
  )
}

export default CarItem