import { Stack } from "@mui/system";
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
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