import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { bgcolor, Stack } from "@mui/system";
import * as React from "react";
import logo from "../../assets/img/logo_ec.png";
import "../../assets/style.scss";
import variables from "../../assets/_variable.scss";
import "./style.scss";
import Button from '@mui/material/Button';
function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: variables.maincolor }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className="header__logo" />
          <Typography
            variant="h4"
            component="div"
            flex="1"
            sx={{ fontFamily: "Orbitron" }}
          >
            EasyCar
          </Typography>
          {true && (
            <Stack direction="row">
              <Box alignSelf="center" paddingRight={5}>
                <Button variant="outlined" className="header__button" sx={{bgcolor: variables.mainyellowcolor, color:variables.mainlightercolor, fontWeight:"bold", fontSize:15}}>Trở thành chủ xe</Button>
              </Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://n1-astg.mioto.vn/g/2022/08/02/21/f4VeE-IlZhkA073LQ7xv_A.jpg"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              <Typography alignSelf="center" paddingRight={5} fontSize={20}>
                Nguyen Phuc An
              </Typography>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
