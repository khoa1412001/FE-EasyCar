import * as React from "react";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import "./style.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

function ChangePassword() {
  return (
    <Box className="changepassword-container" padding={1} marginLeft="5px" bgcolor="#FFFFFF">
      <Stack spacing={2}>
        <Typography
          className="changepassword-container__title"
          alignSelf={"center"}
          sx={{ fontWeight: "400", fontSize: "24px",paddingTop:"8px" }}
        >
          ĐỔI MẬT KHẨU
        </Typography>
        <Divider />

        <Stack direction={"row"} justifyContent="center" alignItems={'center'}>
          <Typography
            className="changepassword-container__text"
            paddingRight={"74px"}
          >
            Mật khẩu cũ:
          </Typography>
          <TextField
            id="changepassword-container__oldpassword"
            variant="outlined"
            size="small"
            type={'password'}
            sx={{ marginLeft: "50px" }}
            value={null}
          />
        </Stack>
        <Stack direction={"row"} justifyContent="center" alignItems={'center'}>
          <Typography
            className="changepassword-container__text"
            paddingRight={"65px"}
          >
            Mật khẩu mới:
          </Typography>
          <TextField
            id="changepassword-container__newpassword"
            variant="outlined"
            size="small"
            type={'password'}
            sx={{ marginLeft: "50px" }}
            value={null}
          />
        </Stack>
        <Stack direction={"row"} justifyContent="center" alignItems={'center'}>
          <Typography
            className="changepassword-container__text"
          >
            Nhập lại mật khẩu mới:
          </Typography>
          <TextField
            id="changepassword-container__newpasswordagain"
            variant="outlined"
            size="small"
            type={'password'}
            sx={{ marginLeft: "50px" }}
            value={null}
          />
        </Stack>
        <Button
          variant="outlined"
          size="medium"
          className="changepassword-container__button"
          sx={{
            color: variables.mainlightercolor,
            bgcolor: variables.mainyellowcolor,
            fontWeight: "bold",
            marginTop: "50px",
            width:"300px",
            alignSelf:"center"
          }}
        >
          ĐỔI MẬT KHẨU
        </Button>
      </Stack>
    </Box>
  );
}

export default ChangePassword;
