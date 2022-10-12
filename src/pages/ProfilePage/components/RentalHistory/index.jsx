import * as React from "react";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import Avatar from "@mui/material/Avatar";
import "./style.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import FavoriteIcon from '@mui/icons-material/Favorite';

function RentalHistory() {
  return (
    <Stack
      className="rentalhistory-container"
      padding={1}
      marginLeft="5px"
      spacing={1}
      flexWrap="nowrap"
    >
      <Stack
        direction={"row"}
        className="rentalhistory-container-item"
        padding={1}
        spacing={2}
      >
        <img
          className="rentalhistory-container-item__img"
          src="https://zoomcar-assets.zoomcar.com/photographs/original/2e3221d37b756442191ad5a81cdc0e4a49696811.png?1663874774"
          alt=""
        />
        <Stack paddingLeft={"5px"}>
          <Typography
            className="rentalhistory-container-item__name"
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "0.6px",
            }}
          >
            Mazda CX-3
          </Typography>
          <Typography
            className="rentalhistory-container-item__option"
            sx={{
              fontWeight: "600",
              fontSize: "12px",
              letterSpacing: "0.4px",
              color: variables.textgreycolor,
            }}
          >
            Tự động - Xăng - 5 Ghế
          </Typography>
          <Typography
            className="rentalhistory-container-item__rating"
            sx={{
              fontWeight: "400",
              fontSize: "12px",
              letterSpacing: "0.6px",
              color: variables.maincolor,
            }}
          >
            <StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} />{" "}
            5.00 - 8k kms
          </Typography>
          <Rating name="no-value" value={null} sx={{ paddingTop: "20px" }} />
        </Stack>
        <Stack>
        <Typography
          className="rentalhistory-container-item__location"
          paddingTop={"5px"}
          paddingLeft={"20px"}
          sx={{ fontWeight: "600", fontSize: "12px", letterSpacing: "0.6px" }}
        >
          Phường 12, Quận Gò Vấp
        </Typography>
        <Typography
          className="rentalhistory-container-item__startdate"
          paddingTop={"5px"}
          paddingLeft={"20px"}
          sx={{ fontSize: "14px", letterSpacing: "0.8px" }}
        >
          Từ: 09/10/2022
        </Typography>
        <Typography
          className="rentalhistory-container-item__enddate"
          paddingTop={"5px"}
          paddingLeft={"20px"}
          sx={{ fontSize: "14px", letterSpacing: "0.8px" }}
        >
          Đến: 11/10/2022
        </Typography>
        </Stack>
        <Stack justifyContent={"center"}>
          <Typography
            className="rentalhistory-container-item__price"
            paddingLeft={"20px"}
            sx={{
              fontWeight: "600",
              fontSize: "24px",
              letterSpacing: "0.6px",
              color: variables.textgreencolor,
            }}
          >
            2,738,225₫
          </Typography>
        </Stack>
        <Stack flex={1} justifyContent={"center"} spacing={2}>
          <Button
            variant="outlined"
            size="medium"
            className="rentalhistory-container-item__rebook"
            sx={{
              borderColor: variables.textgreencolor,
              color: variables.textgreencolor,
              fontWeight: "bold",
              width: "215px ",
              alignSelf:"center"
            }}
          >
            ĐẶT LẠI
          </Button>
          <Button
            variant="outlined"
            size="medium"
            className="rentalhistory-container-item__favorite"
            startIcon={<FavoriteIcon/>}
            sx={{
              borderColor: variables.orangecolor,
              color: variables.orangecolor,
              fontWeight: "bold",
              width: "215px ",
              alignSelf:"center"
            }}
          >
            ƯU THÍCH
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default RentalHistory;
