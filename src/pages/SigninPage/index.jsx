import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  InputAdornment,
  Stack,
  Box,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import variables from "../../assets/_variable.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import "./signin.scss";
import React from "react";
import apiAuth from 'apis/apiAuth'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
function SigninPage(props) {
  const { title, children, openSignin, setOpenSignin } = props;
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()
  const handleLogin = () => {
    const params = {
      email: email,
      password: password
    }

    apiAuth.login(params)
            .then(res => {
                if (res) {
                    // dispatch(loginSuccess(res))
                    // dispatch(setUserInfo(res))
                    console.log("Dang nhap thanh cong")
                    toast.success("Đăng nhập thành công")
                    navigate('/')
                }
                else {
                    toast.error("Sai tên đăng nhập hoặc mật khẩu")
                }
            })
            .catch(err => {
                console.log(err)
                console.log("Loi")
                // toast.warning(getMessageError(err))
            })
            .finally(() => console.log("Hoan thanh"))
  }
  return (
    <Dialog open={openSignin} maxWidth="sm" fullWidth onClose={() => setOpenSignin(false)}>
      <DialogTitle>
        <Box display="flex" sx={{ justifyContent: "flex-end" }}>
          <IconButton onClick={() => setOpenSignin(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography fontSize="1.75rem" fontWeight="bold" align="center">
          Đăng nhập
        </Typography>
      </DialogTitle>
      <DialogContent align="center">
        <Stack justifyContent="center" direction="row">
          <Stack maxWidth="450px" width="450px" py={5} spacing={2}>
            <TextField
              fullWidth
              placeholder="Điện thoại hoặc email"
              variant="outlined"
              value  = {email}
              onChange = {(event) => setEmail(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: variables.maincolor }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              placeholder="Mật khẩu"
              type='password'
              variant="outlined"
              value = {password}
              onChange = {(event) => setPassword(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: variables.maincolor }} />
                  </InputAdornment>
                ),
              }}
            />
            <Box display="flex" sx={{ justifyContent: "flex-end" }}>
              <Typography>Quên mật khẩu</Typography>
            </Box>
            <Button
              align="center"
              className="signup__button"
              variant="standard"
              onClick= {handleLogin}
              sx={{
                color: variables.mainlightercolor,
                bgcolor: variables.mainyellowcolor,
              }}
            >
              Đăng nhập
            </Button>
            <Stack spacing={1} direction="row">
              <Typography color="gray">Bạn chưa là thành viên?</Typography>
              <Typography>Hãy đăng kí ngay!</Typography>
            </Stack>
            <Divider />
            <Typography align="center">
              Hoặc đăng nhập bằng tài khoản
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Button
                variant="outlined"
                sx={{ px: 6 }}
                startIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
              <Button
                variant="standard"
                sx={{
                  px: 7,
                  bgcolor: "#f34a38",
                  color: "#FFFFFF",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#f34a38",
                  },
                }}
                startIcon={<GoogleIcon style={{ color: "#FFFFFF" }} />}
              >
                Google
              </Button>
            </Box>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default SigninPage;
