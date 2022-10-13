import React from 'react'
import "assets/style.scss";
import variables from "assets/_variable.scss";
import Avatar from '@mui/material/Avatar';
import "./style.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Divider from "@mui/material/Divider";

function Sidebar() {
  return (
    <Box className="sidebar-container" padding={1}>
        <Stack>
            <Avatar className='sidebar-container__avatar' alt="Remy Sharp" src="https://lh3.googleusercontent.com/a/AItbvmnuNwTkaOE1GBzG3Q_veA8kJMna0TYzJKSrQATD=s96-c" sx={{width:'80px',height:'80px'}}/>
            <Typography className='sidebar-container__name' sx={{fontWeight:'bold',fontSize:'18px'}}>
                Nguyễn Phúc An
            </Typography>
            <Typography className='sidebar-container__phone' sx={{fontSize:'14px'}}>
                0928776640
            </Typography>
            <Typography className='sidebar-container__email' sx={{fontSize:'14px'}}>
                cotrang2012@gmail.com
            </Typography>
            <Divider sx={{paddingTop:'8px'}}/>
            <Button
                size="medium"
                className="sidebar-container__button"
                sx={{
                  fontWeight: "bold",
                  height:'45px'
                }}
              >
                THÔNG TIN TÀI KHOẢN
            </Button>
            <Divider/>
            <Button
                size="medium"
                className="sidebar-container__button"
                sx={{
                  fontWeight: "bold",
                  height:'45px'
                }}
              >
                Lịch sử
            </Button>
            <Divider/>
            <Button
                size="medium"
                className="sidebar-container__button"
                sx={{
                  fontWeight: "bold",
                  height:'45px'
                }}
              >
                XÁC THỰC TÀI KHOẢN
            </Button>
            <Divider/>
            <Button
                size="medium"
                className="sidebar-container__button"
                sx={{
                  fontWeight: "bold",
                  height:'45px'
                }}
              >
                ĐỔI MẬT KHẨU
            </Button>
        </Stack>
    </Box>
  )
};

export default Sidebar