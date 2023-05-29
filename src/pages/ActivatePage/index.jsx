import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import apiAuth from 'apis/apiAuth';
import variables from 'assets/_variable.scss';
import 'assets/style.scss';
import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.scss';

function ActivatePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = React.useState(searchParams.get('token'))
  const navigate = useNavigate();
  React.useEffect(() => {
    const ActivateAccount = () => {
      const params = {
        token: token,
      }
      apiAuth.activateaccount(params).then((res) => {
        toast.success('Kích hoạt tài khoản thành công!!!')
        setTimeout(() => {navigate('/')},5000)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        
        setTimeout(() => {navigate('/')},5000)
      })
    }
    ActivateAccount()
  },[])
  return (
    <Stack className="activatepage-container" display={'flex'} justifyContent='center' alignItems='center' spacing={1}>
        <CheckCircleOutlineIcon className="activatepage-container__icon" sx={{fontSize:'180px'}}/>
        <Typography variant="h4" sx={{color:variables.textgreencolor}}>KÍCH HOẠT TÀI KHOẢN !!!</Typography>
        
    </Stack>
  )
}

export default ActivatePage