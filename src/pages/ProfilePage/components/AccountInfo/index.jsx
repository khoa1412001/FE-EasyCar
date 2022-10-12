import CheckIcon from '@mui/icons-material/Check';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import * as React from "react";
import "./style.scss";

function AccountInfo() {
  const [gender, setGender] = React.useState("MALE");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Box className="accountinfo-container" padding={1} marginLeft="5px">
      <Stack>
        <Typography
          className="accountinfo-container__title"
          alignSelf={"center"}
          sx={{ fontWeight: "400", fontSize: "24px" }}
        >
          THÔNG TIN TÀI KHOẢN
        </Typography>
        <Divider />
        <Typography
          className="accountinfo-container__detail"
          sx={{ fontWeight: "400", fontSize: "18px", paddingTop: "8px" }}
        >
          Chi tiết tài khoản
        </Typography>
        <Stack
          direction={"row"}
          alignItems="center"
          paddingTop="8px"
          paddingLeft="15px"
        >
          <Typography
            className="accountinfo-container__text"
            paddingRight={"10px"}
          >
            Email:
          </Typography>
          <TextField
            id="accountinfo-container__email"
            variant="outlined"
            size="small"
            disabled
            sx={{ marginLeft: "80px" }}
            value="cotrang2012@gmail.com"
          />
        </Stack>
        <Stack
          direction={"row"}
          alignItems="center"
          paddingTop="8px"
          paddingLeft="15px"
        >
          <Typography
            className="accountinfo-container__text"
            paddingRight={"10px"}
          >
            Số điện thoại:
          </Typography>
          <TextField
            id="accountinfo-container__phone"
            variant="outlined"
            size="small"
            sx={{ marginLeft: "25px" }}
            value="0928776640"
          />
        </Stack>
        <Divider sx={{ paddingTop: "8px" }} />
        <Typography
          className="accountinfo-container__detail"
          sx={{ fontWeight: "400", fontSize: "18px", paddingTop: "8px" }}
        >
          Thông tin cá nhân
        </Typography>
        <Stack
          direction={"row"}
          alignItems="center"
          paddingTop="8px"
          paddingLeft="15px"
        >
          <Typography
            className="accountinfo-container__text"
            paddingRight={"10px"}
          >
            Họ và tên:
          </Typography>
          <TextField
            id="accountinfo-container__email"
            variant="outlined"
            size="small"
            disabled
            sx={{ marginLeft: "50px" }}
            value="Nguyễn Phúc An"
          />
        </Stack>
        <Stack
          direction={"row"}
          alignItems="center"
          paddingTop="8px"
          paddingLeft="15px"
        >
          <Typography
            className="accountinfo-container__text"
            paddingRight={"10px"}
          >
            Giới tính:
          </Typography>
          <Select
            labelId="accountinfo-container__age-label"
            id="accountinfo-container__age"
            value={gender}
            onChange={handleGenderChange}
            size="small"
            sx={{width:"224px",marginLeft:"55px"}}
          >
            <MenuItem value='MALE'>Nam</MenuItem>
            <MenuItem value='FEMALE'>Nữ</MenuItem>
          </Select>
        </Stack>
        <Button
          variant="outlined"
          size="medium"
          className="accountinfo-container__update"
          startIcon={<CheckIcon/>}
          sx={{
            color: variables.mainlightercolor,
            bgcolor: variables.mainyellowcolor,
            fontWeight: "bold",
            marginTop: "50px",
            width:"300px",
            alignSelf:"center"
          }}
        >
          UPDATE
        </Button>
      </Stack>
    </Box>
  );
}

export default AccountInfo;
