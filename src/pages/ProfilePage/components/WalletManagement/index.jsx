import {
	Stack,
	Divider,
	TextField,
	Typography,
	Select,
	MenuItem,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
    Chip,
} from '@mui/material';
import 'assets/style.scss';
import './style.scss';
import * as React from 'react';
import variables from 'assets/_variable.scss';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import ConfirmDialog from 'components/ConfirmDialog';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm, Controller } from 'react-hook-form';
function WalletManagement() {
	const user = useSelector((state) => state.user.info) || {};
	const [bank, setBank] = React.useState(user.bank || 'NONE');
	const [bankaccountname, setBankaccountname] = React.useState(user.bankaccountname ||'');
	const [banknumber, setBanknumber] = React.useState(user.banknumber || '')
	const [updated, setUpdated] = React.useState(false)
	const [openDialog, setOpenDialog] = React.useState(false)
	const [handleApi, setHandleApi] = React.useState(() => () => {handleUpdate()})
	const [text,setText] = React.useState('Vui lòng kiểm tra thông tin tài khoản ngân hàng kỹ càng, bạn chỉ có thể cập nhật thông tin 1 lần duy nhất, những lần sau bạn phải liên hệ người quản trị')
	React.useEffect(() => {
		const getBankinfo = () => {
			if(user.banknumber !== ''){
				setUpdated(true)
			}
		}
		getBankinfo()
	},[])

	const { handleSubmit, control } = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
		reValidateMode: 'onChange',
	});

	const onSubmit = (data) => {
		const { amount} = data
       const params = {
		amount:amount,
	   }

	   console.log(params)
    }

	const handleUpdate = () => {
		const params = {
			bank: bank,
			bankaccountname: bankaccountname,
			banknumber: banknumber,
		}
		console.log(params)
	}

	const banklist = [
		{
			id: 1,
			value: 'BIDV',
		},
		{
			id: 2,
			value: 'VietinBank',
		},
		{
			id: 3,
			value: 'VietcomBank',
		},
		{
			id: 4,
			value: 'VPBank',
		},
		{
			id: 5,
			value: 'MBBank',
		},
		{
			id: 6,
			value: 'TechcomBank',
		},
		{
			id: 7,
			value: 'ACB',
		},
		{
			id: 8,
			value: 'SHB',
		},
		{
			id: 9,
			value: 'HDBank',
		},
		{
			id: 10,
			value: 'SCB',
		},
		{
			id: 11,
			value: 'Sacombank',
		},
		{
			id: 12,
			value: 'TPBank',
		},
		{
			id: 13,
			value: 'VIB',
		},
		{
			id: 14,
			value: 'MSB',
		},
		{
			id: 15,
			value: 'SeABank',
		},
		{
			id: 16,
			value: 'OCB',
		},
		{
			id: 17,
			value: 'Eximbank',
		},
		{
			id: 18,
			value: 'LienVietPostBank',
		},
		{
			id: 19,
			value: 'Bac A Bank',
		},
		{
			id: 20,
			value: 'ABBANK',
		},
	];
	return (
		<Stack
			className="walletmanagement-container"
			padding={1}
			marginLeft="5px"
			spacing={1}
			flexWrap="nowrap"
			bgcolor="#FFFFFF"
		>
			<form onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<Typography
					className="walletmanagement-container__title"
					alignSelf={'center'}
					sx={{ fontWeight: '400', fontSize: '24px' }}
				>
					QUẢN LÝ VÍ
				</Typography>
				<Divider />
				<Typography
					className="walletmanagement-container__detail"
					sx={{ fontWeight: '400', fontSize: '18px', paddingTop: '8px' }}
				>
					Thông tin tài khoản ngân hàng
				</Typography>
				<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
					<Typography className="walletmanagement-container__text" paddingRight={'10px'}>
						Họ và tên:
					</Typography>
					<TextField
						id="walletmanagement-container__email"
						variant="outlined"
						size="small"
						disabled={updated}
						onChange={(event) => setBankaccountname(event.target.value)}
						sx={{ marginLeft: '81px' }}
						value={bankaccountname}
					/>
				</Stack>
				<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
					<Typography className="walletmanagement-container__text" paddingRight={'10px'}>
						Số tài khoản:
					</Typography>
					<TextField
						id="walletmanagement-container__email"
						variant="outlined"
						size="small"
						disabled={updated}
						onChange={(event) => setBanknumber(event.target.value)}
						sx={{ marginLeft: '60px' }}
						value={banknumber}
					/>
				</Stack>
				<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
					<Typography className="walletmanagement-container__text" paddingRight={'10px'}>
						Ngân hàng:
					</Typography>
					<Select
						labelId="walletmanagement-container__age-label"
						id="walletmanagement-container__age"
						size="small"
						sx={{ width: '224px', marginLeft: '71px' }}
						value={bank}
						disabled={updated}
						onChange={(event) => setBank(event.target.value)}
					>
						<MenuItem value="NONE">Chọn ngân hàng</MenuItem>
						{banklist.map((item) => (
							<MenuItem value={item.value} key={item.id}>
								{item.value}
							</MenuItem>
						))}
					</Select>
				</Stack>
				<Button
					variant="outlined"
					size="medium"
					className="walletmanagement-container__update"
					startIcon={<CheckIcon />}
					disabled={updated}
					onClick={
						() => {
							setHandleApi(() => () => handleUpdate())
							setOpenDialog(true)
						}
					}
					sx={{
						color: variables.mainlightercolor,
						bgcolor: variables.mainyellowcolor,
						fontWeight: 'bold',
						marginTop: '10px',
						width: '300px',
						alignSelf: 'center',
					}}
				>
					UPDATE
				</Button>
				<Divider sx={{ paddingTop: '8px' }} />
				<Typography
					className="walletmanagement-container__detail"
					sx={{ fontWeight: '400', fontSize: '18px', paddingTop: '8px' }}
				>
					Thông tin ví
				</Typography>
				<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
					<Typography className="walletmanagement-container__text" paddingRight={'10px'}>
						Số tiền: <span className="green bold fontLarge">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.balance} đ</span>
					</Typography>
				</Stack>
				<Stack direction={'row'} alignItems="center" paddingTop="8px" paddingLeft="15px">
					<Typography className="walletmanagement-container__text" paddingRight={'10px'}>
						Rút tiền:
					</Typography>
					<Controller
						name={'amount'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<TextField
								{...field}
								error={error !== undefined}
								id="walletmanagement-container__email"
								variant="outlined"
								size="small"
								disabled={!updated}
								sx={{ marginLeft: '94px' }}
							/>
						)}
					/>
				</Stack>
				<Button
					variant="outlined"
					size="medium"
					type="submit"
					disabled={!updated}
					className="walletmanagement-container__withdraw"
					startIcon={<CheckIcon />}
					sx={{
						color: 'white',
						bgcolor: variables.textgreencolor,
						fontWeight: 'bold',
						marginTop: '10px',
						width: '300px',
						alignSelf: 'center',
					}}
				>
					RÚT TIỀN
				</Button>
				<Divider sx={{ paddingTop: '8px' }} />
			</Stack>
			<TableContainer component={Paper}>
				<Table sx={{ maxHeight: '328px' }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell align="right">Số tiền</TableCell>
							<TableCell align="right">Ngày thực hiện</TableCell>
							<TableCell align="right">Trạng thái</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>1</span></TableCell>
							<TableCell align="right"><span className="green bold fontLarge">190000 ₫</span></TableCell>
							<TableCell align="right"><span className='bold'>24/12/2012</span></TableCell>
							<TableCell align="right">{false ? (<Chip label="CHẤP NHẬN" className='success bold'/>): (<Chip label="TỪ CHỐI" className='bold' sx={{bgcolor:'red', color:'white'}}/>)}</TableCell>
						</TableRow>
                        <TableRow key={2} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>1</span></TableCell>
							<TableCell align="right"><span className="green bold fontLarge">190000 ₫</span></TableCell>
							<TableCell align="right"><span className='bold'>24/12/2012</span></TableCell>
							<TableCell align="right">{false ? (<Chip label="CHẤP NHẬN" className='success bold'/>): (<Chip label="TỪ CHỐI" className='bold' sx={{bgcolor:'red', color:'white'}}/>)}</TableCell>
						</TableRow>
                        <TableRow key={3} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>1</span></TableCell>
							<TableCell align="right"><span className="green bold fontLarge">190000 ₫</span></TableCell>
							<TableCell align="right"><span className='bold'>24/12/2012</span></TableCell>
							<TableCell align="right">{true ? (<Chip label="CHẤP NHẬN" className='success bold'/>): (<Chip label="TỪ CHỐI" className='bold' sx={{bgcolor:'red', color:'white'}}/>)}</TableCell>
						</TableRow>
                        <TableRow key={4} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="left"><span className='bold'>1</span></TableCell>
							<TableCell align="right"><span className="green bold fontLarge">190000 ₫</span></TableCell>
							<TableCell align="right"><span className='bold'>24/12/2012</span></TableCell>
							<TableCell align="right">{true ? (<Chip label="CHỜ DUYỆT" sx={{bgcolor:variables.orangecolor, color:'white',fontWeight:'bold'}} />): (<Chip label="TỪ CHỐI" className='bold' sx={{bgcolor:'red', color:'white'}}/>)}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			</form>
			<TablePagination component="div" count={-1} rowsPerPage={4} page={0} rowsPerPageOptions={4} />
			<ConfirmDialog openDialog={openDialog} setOpenDialog={setOpenDialog} text={text} handleApi={handleApi}/>
		</Stack>
	);
}

export default WalletManagement;
