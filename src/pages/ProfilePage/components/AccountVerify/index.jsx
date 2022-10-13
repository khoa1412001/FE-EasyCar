import * as React from "react";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import "./style.scss";
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

function AccountVerify() {
  return (
    <Box className="accountverify-container" padding={1} marginLeft="5px">
      <Stack spacing={2}>
        <Typography
          className="accountverify-container__title"
          alignSelf={"center"}
          sx={{ fontWeight: "400", fontSize: "24px" }}
        >
          XÁC THỰC TÀI KHOẢN
        </Typography>
        <Divider />
        <Stack spacing={1}>
          <Typography
            className="accountverify-container__text"
            sx={{ fontWeight: "600", fontSize: "16px",paddingRight:"340px" }}
            alignSelf="center"
          >
            Số GPLX:
          </Typography>
          <TextField
            id="accountverify-container__licensenumber"
            variant="outlined"
            size="small"
            placeholder="Dãy 12 chữ số ở mặt trước GPLX"
            sx={{ width: "418px", alignSelf: "center" }}
            value=""
          />
          <Typography
            className="accountverify-container__text"
            sx={{ fontWeight: "600", fontSize: "16px", paddingRight:"330px" }}
            alignSelf="center"
          >
            Họ Và Tên:
          </Typography>
          <TextField
            id="accountverify-container__name"
            variant="outlined"
            size="small"
            placeholder="Nhập đầy đủ họ và tên"
            sx={{ width: "418px", alignSelf: "center" }}
            value=""
          />
          <Typography
            className="accountverify-container__text"
            sx={{ fontWeight: "600", fontSize: "16px", paddingRight:"331px" }}
            alignSelf="center"
          >
            Ngày sinh:
          </Typography>
          <TextField
            id="accountverify-container__licensenumber"
            variant="outlined"
            size="small"
            placeholder="DD/MM/YYYY"
            sx={{ width: "418px", alignSelf: "center" }}
            value=""
          />
          <Typography
            className="accountverify-container__text"
            sx={{ fontWeight: "600", fontSize: "16px", paddingRight:"289px" }}
            alignSelf="center"
          >
            Ảnh bằng lái xe:
          </Typography>
          <Typography
            className="accountverify-container__subtext"
            sx={{ fontWeight: "400", fontSize: "14px", paddingRight:"84px" }}
            alignSelf="center"
          >
            Hình chụp cần thấy được {<span className="fontbold">Ảnh đại diện</span>} và {<span className="fontbold">Số GPLX</span>}
          </Typography>
          <img className="accountverify-container__img" ></img>
          <Button
          variant="outlined"
          size="medium"
          className="accountverify-container__upimg"
          sx={{
            color: variables.textgreencolor,
            borderColor: variables.textgreencolor,
            fontWeight: "bold",
            width:"250px",
            alignSelf:"center"
          }}
        >
          CHỌN ẢNH
        </Button>
        <Button
          variant="contained"
          size="medium"
          className="accountverify-container__update"
          startIcon={<CheckIcon/>}
          sx={{
            color: "#FFF",
            bgcolor: variables.textgreencolor,
            fontWeight: "bold",
            width:"250px",
            alignSelf:"center"
          }}
        >
          CẬP NHẬT
        </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AccountVerify;
