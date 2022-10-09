import { Typography, TextField, Divider,Stack, InputAdornment, Checkbox,FormControlLabel, Button,Box} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import variables from "../../../assets/_variable.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import './signin.scss'
import { useState } from "react";

function SigninBody() {
    const [checked, setChecked] = useState(true)
    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    return (
        <Stack justifyContent='center' direction='row'>
            <Stack maxWidth='450px' width='450px' py={10} spacing={2}>
                <Typography align='center' fontSize='24px' fontWeight='bold'>Đăng ký tài khoản</Typography>
                <TextField
                placeholder="Điện thoại hoặc email"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                    <PhoneIcon style={{ color: variables.maincolor }}/>
                    </InputAdornment>
                    ),
                }}/>
                <TextField
                placeholder="Tên hiển thị"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                    <PersonIcon style={{ color: variables.maincolor }}/>
                    </InputAdornment>
                    ),
                }}/>
                <Stack direction='row' justifyContent='center' spacing={4}>
                
                    <TextField
                    placeholder="Mật khẩu"
                    type="password"
                    variant="outlined"
                    />
                    <TextField
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                    variant="outlined"
                    />
                </Stack>
                <TextField
                    placeholder="Nhập mã giới thiệu nếu có"
                    variant="outlined"
                    />
                <TextField
                    placeholder="CMND hoặc Mã số thuế"
                    variant="outlined"
                    />
                <Stack direction='row' justifyContent='center' spacing={4}>
                
                <TextField
                placeholder="Ngày cấp"
                variant="outlined"
                />
                <TextField
                placeholder="Nơi cấp"
                variant="outlined"
                />
                </Stack>
                <FormControlLabel 
                control={<Checkbox style={{padding:0}} checked={checked}
                onChange = {handleChange}/>} 
                label = {<Typography pl={1}>Tôi đã đọc và đồng ý với chính sách của EasyCar</Typography>}/>
                <Button align='center' className="signin__button" disabled={!checked} variant="standard" sx={{color: variables.mainyellowcolor, bgcolor:variables.mainlightercolor}}>Đăng ký</Button>
                <Divider/>
                <Typography align='center'>Hoặc đăng nhập bằng tài khoản</Typography>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    }}
                >
                <Button variant="outlined" sx={{px: 6}} startIcon={<FacebookIcon />}>
                    Facebook
                </Button>
                <Button variant="standard" sx={{px: 7,bgcolor:'#f34a38',color:'#FFFFFF',
                "&.MuiButtonBase-root:hover": {
                    bgcolor: '#f34a38'
                }
                }} startIcon={<GoogleIcon style={{color:"#FFFFFF"}} />}>
                    Google
                </Button>
                </Box>
                </Stack>
        </Stack>)
}

export default SigninBody;