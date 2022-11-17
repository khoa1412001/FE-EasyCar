import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import CarStatusDialog from "./CarStatusDialog";
import "./style.scss";
import * as React from 'react';
import CarItem from "./CarItem";
function CarManagement() {
  const [openCarStatus, setOpenCarStatus] = React.useState(true)
  return (
    <Stack className='carmanagement-container' padding={1} spacing={1} marginLeft="5px">
       <CarItem/>
    </Stack>
  )
}

export default CarManagement