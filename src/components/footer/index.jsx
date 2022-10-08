import { Box, Container, Grid, Typography } from "@mui/material";
import variables from "assets/_variable.scss";
import momo from "assets/img/momo.png";

var ChinhSach = [ 
    {
    string: 'Giới thiệu về EasyCar'
    },
    {
    string: 'Chính sách và quy định'
    },
    {
    string: 'Quy chế hoạt động'
    },
    {
    string: 'Bảo mật thông tin'
    },
    {
    string: 'Giải quyết tranh chấp'
    },
]
var Introduce = [
    {
        string: 'Hướng dẫn chung'
    },
        {
        string: 'Hướng dẫn đặt xe'
        },
        {
        string: 'Hướng dẫn dành cho chủ xe'
        },
        {
        string: 'Hướng dẫn thanh toán'
        },
        {
        string: 'Hỏi và trả lời'
        },
        {
        string: 'EasyCar blog'
        },
]
var Guide = [
    {
        string: 'Đăng ký chủ xe EasyCar'
    },
    {
        string: 'Đăng ký GPS'
    },
    {
        string: 'Đăng ký Bảo hiểm vật chất & Bảo hiểm TNDS xe ô tô'
    }
]

function Footer() {
    return ( 
        <Container  
        maxWidth={false}
        sx={{ bgcolor: variables.maincolor,bottom: 0 }}>
            <Box py={5}>
            <Container sx={{maxWidth: 'xl'}}>
                <Grid container rowSpacing={2} >
                    <Grid item xs={5}>
                        <Typography
                        variant="h4"
                        component="div"
                        sx={{ fontFamily: "Orbitron", color:variables.mainwhitecolor }}>
                        EasyCar
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Typography fontWeight={'bold'} sx={{ color:variables.mainwhitecolor }}>
                                CHÍNH SÁCH
                                </Typography>
                                {ChinhSach.map((item,index) => (
                                        <Typography sx={{ color:variables.mainwhitecolor }} key={index}>{item.string}</Typography>
                                ))}
                                    
                            </Grid>
                            <Grid item xs={4}>
                            <Typography fontWeight={'bold'} sx={{color:variables.mainwhitecolor }}>
                                TÌM HIỂU THÊM 
                                </Typography>
                                {Introduce.map((item,index) => (
                                        <Typography sx={{color:variables.mainwhitecolor }} key={index}>{item.string}</Typography>
                                ))}
                            </Grid>
                            <Grid item xs={4}>
                            <Typography fontWeight={'bold'} sx={{  color:variables.mainwhitecolor }}>
                            ĐỐI TÁC
                            </Typography>
                                {Guide.map((item,index) => (
                                        <Typography sx={{  color:variables.mainwhitecolor }} key={index}>{item.string}</Typography>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography pb={1} fontWeight={'bold'} sx={{  color:variables.mainwhitecolor }}>CÁCH THỨC THANH TOÁN</Typography>
                        <Box sx= {{bgcolor: variables.mainwhitecolor, display: 'inline-flex',borderRadius: '5px'  }}>
                        <Box
                        component="img"
                        px={3}
                        py={1}
                        sx={{
                        borderRadius:'25%',
                        height: 50,
                        width: 50,
                        }}
                        src={momo}
                        />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </Container>
    );
}

export default Footer;