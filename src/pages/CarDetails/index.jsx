import * as React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Box } from "@mui/material";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import "./style.scss";
import ImageGallery from "react-image-gallery";

function CarDetails() {
  const images = [
    {
      original:
        "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_camry_2014/p/g/2022/04/27/19/xGUI-Cc1Nzjcf1EprlWnpg.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalHeight:"450px",
    },
    {
      original:
        "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_camry_2014/p/g/2022/04/27/19/obnujsQ87MSovZB_moCFUg.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      originalHeight:"450px",
    },
    {
      original:
        "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_camry_2014/p/g/2022/04/28/13/Pol4KFUnFvK8gxQCVWNdkg.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      originalHeight:"450px",
    },
  ];
  return (
    <Stack
      direction={"row"}
      spacing={1}
      padding={2}
      justifyContent="center"
      bgcolor={variables.maingreycolor}
    >
      <Stack className="carinfo-container">
        <ImageGallery
          additionalClass="carinfo-container__imgcontainer"
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showBullets={true}
          items={images}
        />
      </Stack>
      <Stack className="payment-container"></Stack>
    </Stack>
  );
}

export default CarDetails;
