import {
	Button,
	Dialog,
	DialogContent, DialogTitle, Stack, Typography
} from '@mui/material';
import variables from 'assets/_variable.scss';
import 'assets/style.scss';
import { useNavigate } from 'react-router-dom';
import './style.scss';
function Contract(props) {
	const { openSignin, setOpenSignin, handleApi } = props;
	const navigate = useNavigate();
	return (
		<Dialog open={openSignin} maxWidth="xl" fullWidth onClose={() => setOpenSignin(false)} className="contract-container">
			<DialogTitle>
				<Typography fontSize="1.75rem" fontWeight="bold" align="center">
					ĐIỀU KHOẢN THUÊ XE
				</Typography>
			</DialogTitle>
			<DialogContent align="center" dividers="true">
				<Stack spacing={2}>
					<Typography align="left" className="contract-container__title">
						Trách nhiệm của khách thuê xe và chủ xe trong giao dịch cho thuê xe tự lái
					</Typography>
					<Typography align="left" className="contract-container__text">
						Mục đích lâu dài của EasyCar là hướng đến việc xây dựng cộng đồng chia sẻ xe ô tô văn minh và uy tín tại Việt Nam.
						Vì thế, để đảm bảo các giao dịch thuê xe trong cộng đồng được diễn ra một cách thuận lợi và thành công tốt đẹp thì
						việc quy định trách nhiệm của các bên trong tuân thủ các chính sách của EasyCar và các điều khoản cam kết là rất
						quan trọng.
					</Typography>
					<Typography align="left" className="contract-container__heading">
						A. Trách nhiệm của chủ xe
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Giao xe và toàn bộ giấy tờ liên quan đến xe đúng thời gian và trong tình trạng an toàn, vệ sinh sạch sẽ nhằm đảm
						bảo chất lượng dịch vụ.
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Các giấy tờ xe liên quan bao gồm: giấy đăng ký xe (bản photo công chứng), giấy kiểm định, giấy bảo hiểm xe (bản
						photo công chứng hoặc bản gốc).
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Chịu trách nhiệm pháp lý về nguồn gốc và quyền sở hữu của xe.
					</Typography>
					<Typography align="left" className="contract-container__heading">
						B. Trách nhiệm khách thuê xe
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Kiểm tra kỹ xe trước khi nhận và trước khi hoàn trả xe. Kí xác nhận biên bản bàn giao về tình trạng xe khi nhận
						và khi hoàn trả.
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Thanh toán đầy đủ tiền thuê xe cho Chủ xe khi nhận xe.
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Xuất trình đầy đủ các giấy tờ liên quan cho chủ xe: CMND, GPLX, Hộ khẩu hoặc KT3. Đặt cọc Hộ khẩu/KT3, tiền mặt
						(15 triệu đồng hoặc tùy thỏa thuận với chủ xe) hoặc tài sản có giá trị tương đương (xe máy và cà vẹt xe) trước khi
						nhận xe.
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Tuân thủ quy định và thời gian trả xe như 2 bên đã thỏa thuận.
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Chịu trách nhiệm đền bù mọi thất thoát về phụ tùng, phụ kiện của xe, đền bù 100% theo giá phụ tùng chính hãng
						nếu phát hiện phụ tùng bị tráo đổi, chịu 100% chi phí sửa chữa xe nếu có xảy ra hỏng hóc tùy theo mức độ hư tổn
						của xe, chi phí các ngày xe nghỉ không chạy được do lỗi của khách thuê xe (giá được tính bằng giá thuê trong hợp
						đồng) và các khoản phí vệ sinh xe nếu có.
					</Typography>
					<Typography align="left" className="contract-container__heading">
						C. Trách nhiệm và khuyến nghị của EasyCar
					</Typography>
					<Typography align="left" className="contract-container__text">
						- EasyCar khuyến nghị Chủ xe và Khách thuê xe cần thực hiện việc giao kết bằng văn bản "Hợp đồng cho thuê xe tự lái"
						cũng như kí kết "Biên bản bàn giao xe" nhằm đảm bảo quyền lợi của cả 2 bên trong trường hợp phát sinh tranh chấp.
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Chủ xe có thể tham khảo sử dụng mẫu "Hợp đồng thuê xe tự lái" và "Biên bản bàn giao xe" của EasyCar (vui lòng cung
						cấp email cho bộ phận CSKH của EasyCar để nhận thông tin).
					</Typography>
					<Typography align="left" className="contract-container__text">
						- Chủ xe và khách thuê xe tự chịu toàn bộ trách nhiệm dân sự và hình sự nếu có phát sinh tranh chấp giữa hai bên
						nếu có. EasyCar chỉ đóng vai trò hỗ trợ hai bên dàn xếp các vấn đề một cách tốt đẹp nhất, tuân theo các điều khoản,
						chính sách và quy chế hoạt động cả hai bên đã cam kết với EasyCar.
					</Typography>
				</Stack>
				<Stack direction={'row'} justifyContent="center" spacing={3} paddingTop={2}>
					<Button
						variant="standard"
            			onClick={()=>setOpenSignin(false)}
						sx={{
							width:'300px',
							bgcolor: '#f34a38',
							color: '#FFFFFF',
							'&.MuiButtonBase-root:hover': {
								bgcolor: '#f34a38',
							},
						}}
					>
						TỪ CHỐI
					</Button>
					<Button
						variant="standard"
						onClick={() => {
							handleApi()
							setOpenSignin(false)
							navigate("/profile/history")
							window.location.reload()
						}}
						sx={{
							width:'300px',
							bgcolor: variables.textgreencolor,
							color: '#FFFFFF',
							'&.MuiButtonBase-root:hover': {
								bgcolor: variables.textgreencolor,
							},
						}}
					>
						ĐỒNG Ý
					</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

export default Contract;
