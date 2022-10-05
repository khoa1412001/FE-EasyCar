import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { bgcolor, Stack } from "@mui/system";
import * as React from "react";
import logo from "../../assets/img/logo_ec.png";
import bgimg from "../../assets/img/landingpage_bg.jpg";
import TextField from "@mui/material/TextField";
import "../../assets/style.scss";
import variables from "../../assets/_variable.scss";
import "./style.scss";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Landingpage() {
  const [startdatetime, setStartDatetime] = React.useState(moment());
  const [enddatetime, setEndDatetime] = React.useState(moment());
  return (
    <Box className="container" sx={{ backgroundImage: `url(${bgimg})` }}>
        <Typography variant="h3" className="container__maintext" sx={{ fontFamily: "Orbitron",paddingTop:"75px" }}>
            EasyCar 
        </Typography>
        <Typography variant="h3" className="container__maintext" sx={{ fontFamily: "Orbitron" }}>
            Thuê xe nhanh chóng
        </Typography>
      <Box className="container__inputcomponent">
        <Stack
          spacing={2}
          justifyContent="center"
          padding={2}
          sx={{ height: "365px" }}
        >
          <Typography className="container__inputcomponent__text">
            <LocationOnIcon fontSize="small" /> Địa điểm
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Nhập vị trí thành phố, quận, đường..."
            variant="outlined"
            size="normal"
          />
          <Typography className="container__inputcomponent__text">
            <CalendarMonthIcon fontSize="small"/> Ngày bắt đầu
          </Typography>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={startdatetime}
              onChange={(newValue) => {
                setStartDatetime(newValue);
              }}
              size="small"
            />
          </LocalizationProvider>
          <Typography className="container__inputcomponent__text">
            <CalendarMonthIcon fontSize="small"/> Ngày kết thúc
          </Typography>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={enddatetime}
              onChange={(newValue) => {
                setEndDatetime(newValue);
              }}
              size="small"
            />
          </LocalizationProvider>
          <Button
            variant="contained"
            className="container__inputcomponent__inputbutton"
            sx={{
              bgcolor: variables.mainyellowcolor,
              color: variables.mainlightercolor,
              fontWeight: "bold",
            }}
          >
            <SearchIcon />
            TÌM XE
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
export default Landingpage;
