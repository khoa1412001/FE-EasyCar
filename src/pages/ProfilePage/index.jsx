import React from 'react';
import Sidebar from './components/Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AccountInfo from './components/AccountInfo';
import RentalHistory from './components/RentalHistory';
import ChangePassword from './components/ChangePassword';
import AccountVerify from './components/AccountVerify';
import CarManagement from './components/CarManagement';
import { Stack } from "@mui/system";
import { Outlet } from 'react-router-dom';
function ProfilePage() {
  return (
    <>
      <Stack direction={'row'} justifyContent="center" paddingTop={2} paddingBottom={2} bgcolor="#e8eaef">
        <Sidebar/>
        <Outlet/>
      </Stack>
    </>
  )
};

export default ProfilePage