import * as React from 'react';
import 'assets/style.scss';
import variables from 'assets/_variable.scss';
import './style.scss';
import { Typography, Stack} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import numWithSpace from 'utils/numWithSpace';

function RecommendItem() {
  return (
    <Stack className="recommend-item-container">
      <img
				className="recommend-item-container__img"
				src='https://media.hatla2eestatic.com/uploads/ncarteraz/37835/big-up_a3647f6571981438fb449fc3ba488499.jpg'
				alt=""
			/>
      <Typography
					className="recommend-item-container__name"
					sx={{
						fontWeight: 'bold',
						fontSize: '18px',
						letterSpacing: '0.6px',
            marginTop:'8px',
            marginLeft:'8px',
					}}
				>
					MITSUBISHI XPANDER 2020
			</Typography>
      <Typography
					className="recommend-item-container__option"
					sx={{
						fontWeight: '600',
						fontSize: '12px',
						letterSpacing: '0.4px',
						color: variables.textgreycolor,
            marginLeft:'8px',
					}}
				>
					Tự động - Xăng - 5 Ghế
				</Typography>
        <Typography
					className="recommend-item-container__rating"
					sx={{
						fontWeight: '400',
						fontSize: '12px',
						letterSpacing: '0.6px',
						color: variables.maincolor,
            marginLeft:'8px',
					}}
				>
					<StarIcon fontSize="small" htmlColor={variables.mainyellowcolor} className="recommend-item-container__icon"/> 4.5
				</Typography>
        <Typography
					className="recommend-item-container__price"
					sx={{
						fontWeight: '600',
						fontSize: '18px',
						letterSpacing: '0.6px',
						color: variables.textgreencolor,
            marginTop:'6px',
            marginLeft:'8px',
					}}
				>
					895 125 ₫
				</Typography>
    </Stack>
  )
}

export default RecommendItem