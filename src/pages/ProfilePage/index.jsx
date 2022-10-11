import React from 'react';
import Sidebar from './components/Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AccountInfo from './components/AccountInfo';
import { Stack } from "@mui/system";
function ProfilePage() {
  return (
    <>
      <Header/>
      <Stack direction={'row'}>
        <Sidebar/>
        <AccountInfo/>
      </Stack>
      <Footer/>
    </>
  )
};

export default ProfilePage