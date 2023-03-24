import * as React from 'react';
import { CircularProgress } from '@mui/material';
import './style.scss';
function Loading() {
	return (
    <div id="overlay">
        <CircularProgress size={200} thickness={3} className='loading-icon' sx={{position:'fixed',top:'35%', left:'45%' }}/>;
    </div>
    )
}

export default Loading;
