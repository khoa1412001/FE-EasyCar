import { Box, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/system";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "assets/style.scss";
import moment from "moment";
import * as React from "react";
import "./style.scss";
function DateLocationFillter() {
  const [startdatetime, setStartDatetime] = React.useState(moment());
  const [enddatetime, setEndDatetime] = React.useState(moment());
  return (
    <Box className="datelocationfillter-container">
      <Stack direction={"row"} alignItems="center" padding={1} height={"34px"}>
        <Typography
          className="datelocationfillter-container__text"
          paddingRight={"10px"}
          sx={{ fontWeight: "bold" }}
        >
          Địa điểm:
        </Typography>
        <TextField
          placeholder="Nhập vị trí thành phố, quận, đường..."
          variant="standard"
          size="small"
        />
        <Divider orientation="vertical" sx={{ paddingLeft: "10px" }} />
        <Typography
          className="datelocationfillter-container__text"
          paddingRight={"10px"}
          paddingLeft={"10px"}
          sx={{ fontWeight: "bold" }}
        >
          Ngày bắt đầu:
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} variant="standard" size="small" />}
            value={startdatetime}
            onChange={(newValue) => {
              setStartDatetime(newValue);
            }}
            size="small"
          />
        </LocalizationProvider>
        <Divider orientation="vertical" sx={{ paddingLeft: "10px" }} />
        <Typography
          className="datelocationfillter-container__text"
          paddingRight={"10px"}
          paddingLeft={"10px"}
          sx={{ fontWeight: "bold" }}
        >
          Ngày kết thúc:
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} variant="standard" size="small" />}
            value={enddatetime}
            onChange={(newValue) => {
              setEndDatetime(newValue);
            }}
            size="small"
          />
        </LocalizationProvider>
      </Stack>
    </Box>
  );
}

export default DateLocationFillter;
