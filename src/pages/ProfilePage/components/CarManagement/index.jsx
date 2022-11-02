import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import CarStatusDialog from "./CarStatusDialog";
import "./style.scss";
import * as React from 'react';
function CarManagement() {
  const [openCarStatus, setOpenCarStatus] = React.useState(true)
  return (
    <Stack className='carmanagement-container' padding={1} marginLeft="5px">
        <Stack
        direction={"row"}
        className="carmanagement-container-item"
        padding={1}
        spacing={2}
      >
        <img
          className="carmanagement-container-item__img"
          src="https://zoomcar-assets.zoomcar.com/photographs/original/2e3221d37b756442191ad5a81cdc0e4a49696811.png?1663874774"
          alt=""
        />
        <Stack paddingLeft={"5px"}>
          <Typography
            className="carmanagement-container-item__name"
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "0.6px",
            }}
          >
            Mazda CX-3
          </Typography>
          <Typography
            className="carmanagement-container-item__option"
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
            className="carmanagement-container-item__rating"
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
        </Stack>
        <Stack>
        <Typography
          className="carmanagement-container-item__location"
          paddingTop={"5px"}
          paddingLeft={"20px"}
          sx={{ fontWeight: "600", fontSize: "12px", letterSpacing: "0.6px" }}
        >
          Phường 12, Quận Gò Vấp
        </Typography>
        <Typography
          className="carmanagement-container-item__startdate"
          paddingTop={"5px"}
          paddingLeft={"20px"}
          sx={{ fontSize: "14px", letterSpacing: "0.8px" }}
        >
          Từ: 09/10/2022
        </Typography>
        <Typography
          className="carmanagement-container-item__enddate"
          paddingTop={"5px"}
          paddingLeft={"20px"}
          sx={{ fontSize: "14px", letterSpacing: "0.8px" }}
        >
          Đến: 11/10/2022
        </Typography>
        </Stack>
        <Stack justifyContent={"center"}>
          <Typography
            className="carmanagement-container-item__price"
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
        <Stack flex={1} justifyContent={"center"} spacing={1}>
          <Button
            variant="outlined"
            size="medium"
            className="carmanagement-container-item__status"
            sx={{
              borderColor: variables.textgreencolor,
              color: variables.textgreencolor,
              fontWeight: "bold",
              width: "215px ",
              alignSelf:"center"
            }}
          >
            TRẠNG THÁI XE
          </Button>
          <Button
            variant="outlined"
            size="medium"
            className="carmanagement-container-item__stop"
            sx={{
              borderColor: variables.orangecolor,
              color: variables.orangecolor,
              fontWeight: "bold",
              width: "215px ",
              alignSelf:"center"
            }}
          >
            TẠM DỪNG
          </Button>
          <Button
            variant="outlined"
            size="medium"
            className="carmanagement-container-item__delete"
            sx={{
              borderColor: variables.redcolor,
              color: variables.redcolor,
              fontWeight: "bold",
              width: "215px ",
              alignSelf:"center"
            }}
          >
            XOÁ
          </Button>
        </Stack>
      </Stack>
      <CarStatusDialog openCarStatus={openCarStatus} setOpenCarStatus={setOpenCarStatus}>

      </CarStatusDialog>
    </Stack>
  )
}

export default CarManagement