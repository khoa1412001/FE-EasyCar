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
        <Box className='caritem-container' padding={1}>
          <img className='caritem-container__img' src="https://zoomcar-assets.zoomcar.com/photographs/original/2e3221d37b756442191ad5a81cdc0e4a49696811.png?1663874774" alt=""/>
        </Box>

    </Stack>
  )
}

export default CarItem