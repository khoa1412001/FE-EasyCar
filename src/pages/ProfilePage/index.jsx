import React from 'react';
import Sidebar from './components/Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AccountInfo from './components/AccountInfo';
import RentalHistory from './components/RentalHistory';
import { Stack } from "@mui/system";
function ProfilePage() {
  return (
    <>
      <Header/>
      <Stack direction={'row'}>
        <Sidebar/>
        <RentalHistory/>
      </Stack>
      <Footer/>
    </>
  )
};

export default ProfilePage