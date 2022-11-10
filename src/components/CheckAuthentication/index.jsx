import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const privatePath = ['/profile', '/car-signup','/profile/'];

function CheckAuthentication(props) {
	const user = useSelector((state) => state.user.info);
    const accessToken = useSelector((state) => state.auth.accessToken)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const check = () => {
            const isPrivate = privatePath.findIndex(e => location.pathname.includes(e)) >= 0 ? true : false
            if(isPrivate){
                if(user == null){
                    navigate('/')
 
                }
                if(accessToken === ''){
                    navigate('/')
                }
            }
        }
        check()
    },[accessToken,user,location.pathname])
	return (
        <>{props.children}</>
    );
}

export default CheckAuthentication;
