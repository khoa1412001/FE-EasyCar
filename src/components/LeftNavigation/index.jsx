import { Stack, Typography, Avatar, Box, Button, IconButton, Drawer } from '@mui/system';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import * as React from 'react';
import './style.scss';
import stringAvatar from 'utils/stringavatar';

function LeftNavigation() {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
	return (
		<Drawer anchor='left' open={true} onClose={toggleDrawer('left', false)}>
			<Box className="">

			</Box>
		</Drawer>
	);
}

export default LeftNavigation;
