import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import * as React from "react";
import bgimg from "assets/img/landingpage_bg.jpg";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import "./style.scss";
function LandingBody() {
  const [startdatetime, setStartDatetime] = React.useState(moment());
  const [enddatetime, setEndDatetime] = React.useState(moment());
  return (
    <Box className="landing-container" sx={{ backgroundImage: `url(${bgimg})` }}>
        <Typography variant="h3" className="landing-container__maintext" sx={{ fontFamily: "Orbitron",paddingTop:"75px" }}>
            EasyCar 
        </Typography>
        <Typography variant="h3" className="landing-container__maintext" sx={{ fontFamily: "Orbitron" }}>
            Thuê xe nhanh chóng
        </Typography>
      <Box className="landing-container__inputcomponent">
        <Stack
          spacing={2}
          justifyContent="center"
          padding={2}
          sx={{ height: "365px" }}
        >
          <Typography className="landing-container__inputcomponent__text">
            <LocationOnIcon fontSize="small" /> Địa điểm
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Nhập vị trí thành phố, quận, đường..."
            variant="outlined"
            size="normal"
          />
          <Typography className="landing-container__inputcomponent__text">
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
          <Typography className="landing-container__inputcomponent__text">
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
            className="landing-container__inputcomponent__inputbutton"
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
export default LandingBody;
