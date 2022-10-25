import * as React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Box } from "@mui/material";
import "assets/style.scss";
import variables from "assets/_variable.scss";
import "./style.scss";
import ImageGallery from "react-image-gallery";
import { Grid } from "@mui/material/";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import Avatar from "@mui/material/Avatar";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
function CarDetails() {
  const [startdatetime, setStartDatetime] = React.useState(moment());
  const images = [
    {
      original:
        "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_camry_2014/p/g/2022/04/27/19/xGUI-Cc1Nzjcf1EprlWnpg.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalHeight: "450px",
    },
    {
      original:
        "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_camry_2014/p/g/2022/04/27/19/obnujsQ87MSovZB_moCFUg.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      originalHeight: "450px",
    },
    {
      original:
        "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_camry_2014/p/g/2022/04/28/13/Pol4KFUnFvK8gxQCVWNdkg.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      originalHeight: "450px",
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
        <Typography className="carinfo-container__carname" padding={3}>
          TOYOTA VELOZ CROSS 2022 - 5.0
          <StarIcon htmlColor={variables.mainyellowcolor} fontSize="medium" />
        </Typography>
        <Grid
          container
          justifyContent="center"
          paddingLeft={3}
          paddingRight={3}
          marginBottom={3}
        >
          <Grid item xs={3}>
            <Typography
              className="carinfo-container__spectext"
              sx={{ fontWeight: "bold" }}
            >
              ĐẶC ĐIỂM
            </Typography>
          </Grid>
          <Grid item xs={5} spacing={2}>
            <Typography className="carinfo-container__text">
              Số ghế: 7
            </Typography>
            <Typography className="carinfo-container__text">
              Nhiên liệu: Xăng
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className="carinfo-container__text">
              Truyền động: Tự động
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          paddingLeft={3}
          paddingRight={3}
          marginBottom={3}
        >
          <Grid item xs={3}>
            <Typography
              className="carinfo-container__spectext"
              sx={{ fontWeight: "bold" }}
            >
              MÔ TẢ
            </Typography>
          </Grid>
          <Grid item xs={9} spacing={2}>
            <Typography className="carinfo-container__text">
              Xe toyota veloz cross xe moi 2022
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          paddingLeft={3}
          paddingRight={3}
          marginBottom={3}
        >
          <Grid item xs={3}>
            <Typography
              className="carinfo-container__spectext"
              sx={{ fontWeight: "bold" }}
            >
              GIẤY TỜ THUÊ XE
            </Typography>
          </Grid>
          <Grid item xs={9} spacing={2}>
            <Typography className="carinfo-container__text">
              <PermIdentityIcon
                fontSize="medium"
                className="payment-container__icon"
              />{" "}
              CMND và GPLX
            </Typography>
            <Typography className="carinfo-container__text">
              Và chọn 1 trong 2 hình thức
            </Typography>
            <Typography className="carinfo-container__text">
              <AssignmentIndOutlinedIcon
                fontSize="medium"
                className="payment-container__icon"
              />{" "}
              Passport hoặc Hộ khẩu hoặc KT3 (giữ lại)
            </Typography>
            <Typography className="carinfo-container__text">
              <RecentActorsOutlinedIcon
                fontSize="medium"
                className="payment-container__icon"
              />{" "}
              Căn cước công dân gắn chip (đối chiếu)
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          paddingLeft={3}
          paddingRight={3}
          marginBottom={3}
        >
          <Grid item xs={3}>
            <Typography
              className="carinfo-container__spectext"
              sx={{ fontWeight: "bold" }}
            >
              ĐIỀU KHOẢN
            </Typography>
          </Grid>
          <Grid item xs={9} spacing={2}>
            <Typography className="carinfo-container__text">
              Quy định khác:
              <br />- Sử dụng xe đúng mục đích.
              <br />- Không sử dụng xe thuê vào mục đích phi pháp, trái pháp
              luật.
              <br />- Không sử dụng xe thuê để cầm cố, thế chấp.
              <br />- Không hút thuốc, nhả kẹo cao su, xả rác trong xe.
              <br />- Không chở hàng quốc cấm dễ cháy nổ.
              <br />- Không chở hoa quả, thực phẩm nặng mùi trong xe.
              <br />- Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng
              vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe.
              <br />- Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi
              tuyệt vời !
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          paddingLeft={3}
          paddingRight={3}
          marginBottom={3}
        >
          <Grid item xs={3}>
            <Typography
              className="carinfo-container__spectext"
              sx={{ fontWeight: "bold" }}
            >
              CHỦ XE
            </Typography>
          </Grid>
          <Grid item xs={9} spacing={2}>
            <Stack>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
                  sx={{ width: 95, height: 95 }}
                />
                <Stack>
                  <Typography className="carinfo-container__name">
                    Nguyễn Phúc An
                  </Typography>
                  <Typography>
                    5.0
                    <StarIcon
                      htmlColor={variables.mainyellowcolor}
                      fontSize="medium"
                      className="payment-container__icon"
                    />
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Stack className="payment-container" padding={3}>
        <Typography
          sx={{ fontWeight: "bold", color: variables.textgreyercolor }}
          alignSelf="center"
        >
          <span className="payment-container__price">950K</span> /ngày
        </Typography>
        <Typography
          className="payment-container__title"
          sx={{ fontWeight: "bold", color: variables.textblackcolor }}
        >
          Ngày nhận xe
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} size="small" />}
            value={startdatetime}
            onChange={(newValue) => {
              setStartDatetime(newValue);
            }}
            size="small"
          />
        </LocalizationProvider>
        <Box padding="10px" />
        <Typography
          className="payment-container__title"
          sx={{ fontWeight: "bold", color: variables.textblackcolor }}
        >
          Ngày trả xe
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} size="small" />}
            value={startdatetime}
            onChange={(newValue) => {
              setStartDatetime(newValue);
            }}
            size="small"
          />
        </LocalizationProvider>
        <Box padding="10px" />
        <Typography
          className="payment-container__title"
          sx={{ fontWeight: "bold", color: variables.textblackcolor }}
        >
          Địa điểm giao nhận xe
        </Typography>
        <Typography className="payment-container__location">
          <LocationOnIcon className="payment-container__icon" /> Quận Gò Vấp,
          TP. Hồ Chí Minh
        </Typography>
        <Box padding="10px" />
        <Typography
          className="payment-container__title"
          sx={{ fontWeight: "bold", color: variables.textblackcolor }}
        >
          Các chi phí khác
        </Typography>
        <Box className="payment-container__textbox" padding={1}>
          <Typography className="payment-container__smalltext">
            Giới hạn quãng đường: 400km/ngày
          </Typography>
          <Typography className="payment-container__subtext">
            Phí: <span className="bold">3 000đ/km</span> vượt giới hạn
          </Typography>
        </Box>
        <Box className="payment-container__textbox" padding={1}>
          <Typography className="payment-container__smalltext">
            Quá giờ
          </Typography>
          <Typography className="payment-container__subtext">
            Phí: <span className="bold">90 000đ/giờ</span>. Quá 5 giờ tính thành
            1 ngày thuê xe
          </Typography>
        </Box>
        <Box className="payment-container__textbox" padding={1}>
          <Typography className="payment-container__smalltext">
            Vệ sinh xe
          </Typography>
          <Typography className="payment-container__subtext">
            Phí: <span className="bold">100 000đ</span> (nếu trả xe nhiều vết
            bẩn, bùn cát, sình lầy.... cần phải vệ sinh lại trước khi giao cho
            khách sau)
          </Typography>
        </Box>
        <Box className="payment-container__textbox" padding={1}>
          <Typography className="payment-container__smalltext">
            Khử mùi xe
          </Typography>
          <Typography className="payment-container__subtext">
            Phí: <span className="bold">400 000đ</span> (nếu hút thuốc lá trong
            xe, chở sầu riêng, hải sản nặng mùi .... cần phải đi khử mùi trước
            khi giao cho khách sau)
          </Typography>
        </Box>
        <Box padding="10px" />
        <Typography
          className="payment-container__title"
          sx={{ fontWeight: "bold", color: variables.textblackcolor }}
        >
          Chi tiết giá
        </Typography>
        <Stack
          className="payment-container__pricebox"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography className="payment-container__smalltext">
            Đơn giá thuê:
          </Typography>
          <Typography className="payment-container__smalltext">
            950 000 / ngày
          </Typography>
        </Stack>
        <Stack
          className="payment-container__pricebox"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography className="payment-container__smalltext">
            Phí dịch vụ:
          </Typography>
          <Typography className="payment-container__smalltext">
            80 000 / ngày
          </Typography>
        </Stack>
        <Divider sx={{ marginBottom: "5px" }} />
        <Stack
          className="payment-container__pricebox"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography className="payment-container__smalltext bold">
            Tổng cộng:
          </Typography>
          <Typography className="payment-container__smalltext bold">
            1 030 000 / ngày
          </Typography>
        </Stack>
        <Button
          variant="outlined"
          className="payment-container__button"
          startIcon={<CheckIcon />}
        >
          ĐẶT XE
        </Button>
      </Stack>
    </Stack>
  );
}

export default CarDetails;