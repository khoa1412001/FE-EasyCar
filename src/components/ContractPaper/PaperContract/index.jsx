import './style.scss';
import variables from 'assets/_variable.scss';
import 'assets/style.scss';
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiRentalHistory from 'apis/apiRentalHistory';
import { toast } from 'react-toastify';
import numWithDot from 'utils/numWithDot';
const PaperContract = React.forwardRef((props,ref) =>{
	const [searchParams, setSearchParams] = useSearchParams();
	const [id, setId] = React.useState(searchParams.get('id'));
	const [contractdata, setContractdata] = React.useState({});
	const getPageMargins = () => {
		return `@page { margin: 40px 20px 40px 20px !important; }`;
	  };

	const navigate = useNavigate();
	React.useEffect(() => {
		const GetContractData = () => {
			const params = {
				id:id,
			}
			apiRentalHistory.getContractData(params)
			.then(res => setContractdata(res.data))
			.catch(err => {
				toast.error('Lỗi hệ thống, vui lòng thử lại sau!!');
				setTimeout(() => {navigate('/profile/')},3000)
			})
		}
		GetContractData()
	},[])
	
	return (
		<Box className="papercontract-container" ref={ref} px={4}>
			<style>{getPageMargins()}</style>
			<Typography className="time bold center" sx={{ fontSize: '18px' }}>
				CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
			</Typography>
			<Typography className="time bold center underline" sx={{ fontSize: '18px' }}>
				Độc lập – Tự do – Hạnh phúc
			</Typography>
			<Typography className="time bold center" sx={{ fontSize: '18px' }}>
				HỢP ĐỒNG CHO THUÊ XE Ô TÔ TỰ LÁI
			</Typography>
			<Typography className="time bold center" sx={{ fontSize: '18px' }}>
				(Số:……/ HĐCTXTL)
			</Typography>
			<Typography className="time italic" sx={{ fontSize: '18px' }}>
				- Căn cứ Bộ Luật Dân sự số: 91/2015/QH13 ngày 24/11/2015 có hiệu lực từ 1/1/2017;
				<br />- Căn cứ Luật Thương mại số: 36/2015/QH11 ngày 14/06/2005 có hiêu lực từ 1/1/2006;
				<br />- Căn cứ Chính sách và quy định ứng dụng EasyCar;
				<br />- Căn cứ theo nhu cầu và khả năng cung ứng của hai bên
			</Typography>
			<Typography className="time " sx={{ fontSize: '18px' }}>
				Hôm nay, ngày {(new Date(contractdata.rentalDateStart)).getDate()}/{(new Date(contractdata.rentalDateStart)).getMonth() + 1}/{(new Date(contractdata.rentalDateStart)).getFullYear()}, tại địa chỉ số {contractdata.vehicleId && contractdata.vehicleId.ownerId.location}
				<br />
				chúng tôi gồm có:
			</Typography>
			<Typography className="time" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="bold">BÊN CHO THUÊ XE (BÊN A):</span> {contractdata.vehicleId && contractdata.vehicleId.ownerId.username}
			</Typography>
			<Typography className="time" sx={{ fontSize: '18px' }}>
				CMND/CCCD số: {contractdata.vehicleId && contractdata.vehicleId.ownerId.socialId} cấp ngày: .../.../...... tại ....................................
				<br />
				Địa chỉ: {contractdata.vehicleId && contractdata.vehicleId.ownerId.location}
				<br />
				Điện thoại: {contractdata.vehicleId && contractdata.vehicleId.ownerId.phoneNumber}
			</Typography>
			<Typography className="time" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="bold">BÊN THUÊ XE (BÊN B):</span> {contractdata.userId && contractdata.userId.username}
			</Typography>
			<Typography className="time justify" sx={{ fontSize: '18px' }}>
				CMND/CCCD số: {contractdata.userId && contractdata.userId.socialId} cấp ngày: .../.../...... tại ....................................
				<br />
				Địa chỉ: {contractdata.userId && contractdata.userId.location}
				<br />
				Điện thoại: {contractdata.userId && contractdata.userId.phoneNumber}
				<br />
				Hộ khẩu/ Tạm trú/ Passport số:.................... cấp ngày: .../.../...... tại ....................................
				<br />
				GPLX số:..................................................... cấp ngày: .../.../...... tại
				....................................
				<br />
				Địa chỉ thường
				trú:................................................................................................................
				<br />
				Địa chỉ liên
				hệ:......................................................................................................................
				<br />
				Điện
				thoại:.............................................................................................................................
			</Typography>
			<Typography className="time" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				Sau khi bàn bạc, hai bên cùng tiến hành thống nhất ký kết hợp đồng thuê xe ô tô tự lái với các điều khoản sau:
			</Typography>
			<Typography className="time bold" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="underline">ĐIỀU 1</span>: ĐỐI TƯỢNG VÀ NỘI DUNG
			</Typography>
			<Typography className="time justify" sx={{ fontSize: '18px' }}>
				Bên A cho Bên B thuê 01 (một) chiếc xe ô tô có thông tin sau đây:
				<br /> - Biển số xe: {contractdata.vehicleId && contractdata.vehicleId.licenseplate} Nhãn hiệu: {contractdata.vehicleId && contractdata.vehicleId.brand} {contractdata.vehicleId && contractdata.vehicleId.model}
				<br /> - Sản xuất năm: {contractdata.vehicleId && contractdata.vehicleId.year} Màu:.................................................
				<br /> - Giấy đăng ký xe ô tô số: ......................................................... ngày
				cấp:..........................
				<br /> Tại
				.......................................................................................................................................
				<br /> - Tên chủ xe: {contractdata.vehicleId && contractdata.vehicleId.ownerId.username}
			</Typography>
			<Typography className="time bold" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="underline">ĐIỀU 2</span>: MỤC ĐÍCH THUÊ XE
			</Typography>
			<Typography className="time" sx={{ fontSize: '18px' }}>
				Bên B thuê xe nêu trên vào mục đích: Thuê xe ô tô tự lái.
			</Typography>
			<Typography className="time bold" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="underline">ĐIỀU 3</span>: GIÁ TRỊ HỢP ĐỒNG, PHƯƠNG THỨC THANH TOÁN, ĐỊA ĐIỂM BÀN GIAO XE
			</Typography>
			<Typography className="time justify" sx={{ fontSize: '18px' }}>
				<span className="bold">3.1.</span> Đơn giá thuê: {contractdata.rentprice && numWithDot(contractdata.rentprice)} VNĐ/ngày
				<br />
				<span className="bold">3.2.</span> Khống chế quảng đường: {contractdata.vehicleId && numWithDot(contractdata.vehicleId.kmlimit)}km/ngày
				<br />
				Phụ trội: {contractdata.vehicleId && contractdata.vehicleId.priceover} VNĐ/km
				<br />
				<span className="bold">3.3.</span> Thời gian thuê
				<br /> - Từ .......giờ.......phút, ngày {(new Date(contractdata.rentalDateStart)).getDate()}/{(new Date(contractdata.rentalDateStart)).getMonth() + 1}/{(new Date(contractdata.rentalDateStart)).getFullYear()}
				<br /> - Đến .......giờ.......phút, ngày {(new Date(contractdata.rentalDateEnd)).getDate()}/{(new Date(contractdata.rentalDateEnd)).getMonth() + 1}/{(new Date(contractdata.rentalDateEnd)).getFullYear()}
				<br /> - Phụ trội: 90.000 VNĐ/giờ
				<br /> - Quá thời gian thuê 3 giờ nêu trên mà bên B chưa bàn giao xe cho bên A thì tính thêm 1 (một) ngày thuê xe.
				<br /> <span className="bold">Tổng giá trị thuê xe là: {contractdata.totalPrice && numWithDot(contractdata.totalPrice)} VNĐ</span>
				<br />
				<span className="bold">3.5.</span> Hình thức thanh toán
				<br /> - Bên B thanh toán trước <span className="bold">30% giá trị hợp đồng tại Điều 3.4</span> sau khi kết nối
				thành công với bên A thông qua ứng dụng EasyCar 
				<br /> - Bên B thanh toán <span className="bold">70% còn lại</span> cho bên A bằng hình thức tiền mặt hoặc chuyển
				khoản sau khi ký hợp đồng này. 
				<br />
				<span className="bold">3.6.</span> Địa điểm bàn giao xe:{' '}
				{contractdata.vehicleId && contractdata.vehicleId.ownerId.location}
			</Typography>
			<Typography className="time bold" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="underline">ĐIỀU 4</span>: QUYỀN VÀ NGHĨA VỤ CỦA BÊN GIAO XE
			</Typography>
			<Typography className="time justify" sx={{ fontSize: '18px' }}>
				<span className="bold">A 4.1. Quyền của bên A</span>
				<br /> - Nhận đủ tiền thuê theo phương thức đã thỏa thuận;
				<br /> - Khi hết hạn hợp đồng có quyền nhận lại tài sản thuê như tình trạng thỏa thuận ban đầu, trừ hao mòn tự
				nhiên, trường hợp giá trị tài sản giảm sút so với giá trị ban đầu thì Bên B phải bồi thường thiệt hại đã gây ra;
				<br /> - Có quyền đơn phương chấm dứt hợp đồng và yêu cầu bồi thường thiệt hại nếu Bên B có các hành vi sử dụng tài
				sản thuê không đúng mục đích như đã thỏa thuận, làm hư hỏng, mất mát tài sản thuê, sửa chữa, đổi cho người khác thuê
				lại mà không có sự đồng ý của Bên A;
				<br /> - Báo cho cơ quan công an và EasyCar khi bên A không liên lạc được với bên B hoặc bên B tắt/tháo thiết bị
				định vị trên xe hoặc quá thời hạn thuê tại khoản 3.3 Điều 3 Hợp đồng này bên B không giao xe cho bên A.
				<br />
				<span className="bold">A 4.2. Nghĩa vụ của bên A</span>
				<br /> - Giao đúng xe và toàn bộ giấy tờ liên quan đến xe trong tình trạng xe an toàn, vệ sinh sạch sẽ nhằm đảm bảo
				chất lượng dịch vụ khi bên B sử dụng;
				<br /> - Giao xe tại địa điểm bàn giao xe và đúng thời gian theo Hợp đồng này;
				<br /> - Các giấy tờ xe liên quan bao gồm: giấy đăng ký xe ô tô (bản photo sao y trong thời hạn 06 tháng), giấy kiểm
				định xe ô tô (bản chính), giấy bảo hiểm xe ô tô bắt buộc (bản chính);
				<br /> - Chịu trách nhiệm pháp lý về nguồn gốc và quyền sở hữu của xe;
				<br /> - Bên A chịu mọi trách nhiệm chi trả hoặc đền bù trong trường hợp tài sản thế chấp của bên B bị thiệt hại do
				lỗi bên A
				<br /> - Bên A có trách nhiệm hoàn trả đầy đủ tài sản thế chấp của bên B khi 2 bên đã hoàn tất hợp đồng và bên B đã
				thanh toán đầy đủ các chi phí phát sinh
				<br /> - Báo trước cho bên B trong vòng 24 tiếng nếu xe cho thuê không thể thuê được vì xe bị hư hỏng buộc phải sửa
				chữa hoặc vì lý do khác không thể khắc phục được và phải giao xe ô tô khác tương tự như xe đã cho thuê.
			</Typography>
			<Typography className="time bold" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="underline">ĐIỀU 5</span>: QUYỀN VÀ NGHĨA VỤ CỦA BÊN GIAO XE
			</Typography>
			<Typography className="time justify" sx={{ fontSize: '18px' }}>
				<span className="bold">B 5.1. Quyền của bên B</span>
				<br /> - Nhận đúng xe và các giấy tờ liên quan đến xe theo Hợp đồng này;
				<br /> - Sửa chữa xe trong trường hợp cấp thiết và yêu cầu bên A thanh toán chi phí hợp lý làm gia tăng giá trị của
				xe thuê;
				<br /> - Yêu cầu bên A đổi xe nếu không đúng như thỏa thuận, sửa chữa nếu xe có hư hỏng do lỗi của bên A, bồi thường
				thiệt hại nếu bên A chậm giao hoặc giao xe không đúng như thỏa thuận;
				<br /> - Đơn phương chấm dứt hợp đồng và yêu cầu bồi thường thiệt hại nếu bên A thực hiện các hành vi sau:
				<br /> + Bên A giao xe không đúng thời hạn như thỏa thuận, trừ trường hợp bất khả kháng. (Trường hợp bất khả kháng
				được hiểu là một bên cố gắng thực hiện bằng mọi biện pháp để thực hiện nghĩa vụ của mình nhưng không thể thực hiện
				được vì trở ngại khách quan: mưa bão, dịch bệnh…). Bên nào viện dẫn trường hợp bất khả kháng thì bên đó có nghĩa vụ
				chứng minh. Trường hợp giao xe chậm gây thiệt hại cho Bên B thì phải bồi thường.
				<br /> + Xe có khuyết tật dẫn đến bên B không đạt được mục đích thuê mà bên B không biết
				<br /> + Xe có tranh chấp về quyền sở hữu giữa bên A với bên thứ ba mà bên B không biết dẫn đến bên B không xác lập
				được mục đích sử dụng xe trong quá trình thuê như đã thỏa thuận
				<br />
				<span className="bold">B 5.2. Nghĩa vụ của Bên B</span>
				<br /> - Kiểm tra kỹ xe trước khi nhận và trước khi hoàn trả xe. Ký xác nhận biên bản bàn giao về tình trạng xe khi
				nhận và khi hoàn trả.
				<br /> - Thanh toán đầy đủ tiền thuê xe cho bên A khi bên B nhận xe.
				<br /> - Xuất trình đầy đủ các giấy tờ liên quan cho bên A: CMND, GPLX, Hộ khẩu hoặc KT3 hoặc Passport. Đặt cọc Hộ
				khẩu/KT3/Passport, tiền mặt (15 triệu đồng hoặc tùy thỏa thuận với chủ xe) hoặc tài sản có giá trị tương đương (xe
				máy và cà vẹt xe) trước khi nhận xe. Đối với các xe thuê có giá trị cao, tài sản thế chấp có thể là giấy chứng quyền
				sử dụng đất.
				<br /> - Chịu trách nhiệm pháp lý về nguồn gốc và quyền sở hữu của tài sản thế chấp
				<br /> - Tuân thủ quy định trả xe như đã được ký kết trong hợp đồng. Thời gian thuê xe được tính từ lúc bên B nhận
				xe đến khi bên B trả xe và ký xong Biên bản Bàn giao (kiêm "Thanh lý Hợp đồng"). Nếu trả xe không đúng thời hạn, bên
				B sẽ phải trả thêm tiền phụ trội, và số tiền trả thêm sẽ được tính theo giờ như quy định tại Điều 3 Hợp đồng này.
				<br /> - Bên B chịu trách nhiệm đền bù mọi thất thoát về phụ tùng, phụ kiện của xe. Nếu bên A phát hiện linh kiện
				phụ tùng bị tráo đổi thì bên B phải đền bù 100% theo giá phụ tùng chính hãng. Bên B phải chịu 100% chi phí sửa chữa
				xe nếu có xảy ra hỏng hóc tùy theo mức độ hư tổn của chiếc xe đó, địa điểm sữa chữa theo sự chỉ định của bên A hoặc
				2 bên tự thỏa thuận. Các ngày xe nghỉ không chạy được do lỗi của bên B thì bên B phải trả tiền hoàn toàn trong các
				ngày đó, giá được tính bằng giá thuê trong hợp đồng. Ngoài ra, nếu xe trong tình trạng không được sạch sẽ, bên B sẽ
				phải chịu thêm khoản phí vệ sinh xe (hoặc tùy 2 bên tự thỏa thuận).
				<br /> - Mọi chi phí đi lại, ăn ở của bên A để giải quyết việc do lỗi của bên B gây ra, bên B phải chịu hoàn toàn
				<br /> - Nghiêm túc chấp hành đúng lệ luật giao thông đường bộ. Tự chịu trách nhiệm dân sự, hình sự trong suốt thời
				gian thuê xe. Tự chịu chi phí xăng dầu, cầu phà, bến bãi, tiền phạt nóng, tiền phạt nguội theo các lỗi mà luật pháp
				Việt Nam quy định. Nếu có phát sinh bất cứ chi phí nào tại thời điểm bên B thuê xe, Bên B vẫn phải chịu chi phí đó
				mặc dù hợp đồng đã thanh lý. Bên A sẽ căn cứ vào giờ đi và ngày đi trong hợp đồng đã ký cùng với giấy phạt nguội làm
				bằng chứng để giải quyết sai phạm.
				<br /> - Tuyệt đối không sử dụng xe cho các hành vi trái pháp luật: cầm cố, đua xe, chở hàng lậu, hàng cấm, cho
				người khác thuê lại… Không giao tay lái cho người không đủ năng lực hành vi, không có GPLX từ B1 trở lên. Trường hợp
				bên A có căn cứ thấy rằng bên B có dấu hiệu vi phạm thì bên A có quyền đơn phương chấm dứt hợp đồng, đồng thời sẽ
				thông báo với cơ quan công an để truy tìm xe. Bên B phải hoàn toàn chịu trách nhiệm hình sự trước pháp luật và chịu
				các phí tổn phát sinh khác.
				<br /> - Trường hợp bên B thực hiện hủy giao dịch trong khoảng thời gian 7 ngày trước thời điểm bắt đầu chuyến đi vì
				không mang theo đầy đủ giấy tờ, hoặc giấy tờ không hợp lệ, hoặc không đến nhận xe theo như hợp đồng đã ký giữa hai
				bên, nếu như không thỏa thuận được với bên A hoặc không có sự đồng ý từ phía bên A, thì bên B sẽ mất 100% số tiền mà
				bên B đã đặt cọc thông qua Công ty Cổ phần EasyCar Việt Nam.
				<br /> - Trường hợp bên B thực hiện hủy giao dịch ngoài khoảng thời gian 7 ngày trước thời điểm bắt đầu chuyến đi vì
				không mang theo đầy đủ giấy tờ, hoặc giấy tờ không hợp lệ, hoặc không đến nhận xe theo như hợp đồng đã ký giữa hai
				bên, nếu như không thỏa thuận được với bên A hoặc không có sự đồng ý từ phía bên A, thì bên B sẽ được hoàn lại 70%
				số tiền mà bên B đã đặt cọc thông qua Công ty Cổ phần EasyCar Việt Nam.
			</Typography>
			<Typography className="time bold" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="underline">ĐIỀU 6</span>: CHÍNH SÁCH BẢO HIỂM THEO CHUYẾN ĐI
			</Typography>
			<Typography className="time justify" sx={{ fontSize: '18px' }}>
				<span className="bold">6.1 Đối tượng bảo hiểm và thời gian bảo hiểm:</span>
				<br /> - Chỉ áp dụng với chuyến đi có mua bảo hiểm chuyến trên ứng dụng đặt xe EasyCar.
				<br /> - Thời gian bảo hiểm tính từ thời gian bên B bắt đầu và hết hiệu lực theo thời gian bên B kết thúc chuyến đi
				đã đăng ký trên ứng dụng EasyCar.
				<br />
				<span className="bold">6.2 Phạm vi bảo hiểm:</span>
				<br /> - Nhà bảo hiểm chịu trách nhiệm bồi thường cho bên A những thiệt hại vật chất do thiên tai, tai nạn bất ngờ,
				va chạm xe, không lường trước được trong những trường hợp sau:
				<br /> • Đâm,va (bao gồm cả va chạm với vật thể khác ngoài xe cơ giới)
				<br /> • Hỏa hoạn, cháy, nổ
				<br /> • Mất cắp, mất nguyên chiếc
				<br /> • Thủy kích (khấu trừ 20% số tiền bảo hiểm, tối thiểu 3.000.000 VNĐ)
				<br /> - Mức khấu trừ: 2.000.000 VNĐ/vụ
				<br />
				<span className="bold">6.3 Quyền và nghĩa vụ:</span>
				<br /> - Trường hợp chuyến đi được hỗ trợ bảo hiểm chuyến do Mioto cung cấp, khi xảy ra sự cố va chạm trong quá
				trình di chuyển, bên B có trách nhiệm báo ngay cho bên A. Bên B phải chụp hình ảnh hiện trường sự cố và liên hệ ngay
				tổng đài bảo hiểm để khai báo sự cố và làm theo hướng dẫn xử lý.
				<br /> - Bên B có trách nhiệm thanh toán chi phí sửa chữa theo điều khoản bảo hiểm được quy đinh rõ trong chi tiết
				chuyến đi trên ứng dụng Mioto.
				<br /> - Bên B có nghĩa vụ phối hợp với bên A để xử lý sự cố theo hướng dẫn của nhà bảo hiểm.
				<br /> - Trường hợp bên B báo sự cố phát sinh ngoài thời gian của chuyến thuê xe trên ứng dụng Mioto và không được
				bảo hiểm bồi thường sự cố, bên B phải có nghĩa vụ thực hiện đền bù theo điều khoản 5.2
			</Typography>
			<Typography className="time bold" sx={{ fontSize: '18px', paddingTop: '5px' }}>
				<span className="underline">ĐIỀU 7</span>: ĐIỀU KHOẢN CHUNG
			</Typography>
			<Typography className="time justify" sx={{ fontSize: '18px' }}>
				<span className="bold">7.1 </span>Hợp đồng này và các phụ lục bổ sung hợp đồng (nếu có) là bộ phận không tách rời
				của hợp đồng, các bên phải có nghĩa vụ thực hiện, cam kết thi hành đúng các điều khoản của hợp đồng, không bên nào
				tự ý đơn phương sửa đổi, đình chỉ hoặc hủy bỏ hợp đồng. Mọi sự vi phạm phải được xử lý theo pháp luật.
				<br />
				<span className="bold">7.2 </span>Hai bên nghiêm chỉnh thực hiện các điều khoản của hợp đồng này. Trong trường hợp
				có sự thay đổi, phải thông báo cho nhau bằng văn bản báo trước 03 ngày trước ngày dự kiến khởi hành.
				<br />
				<span className="bold">7.3 </span>Trong quá trình thực hiện hợp đồng, nếu có vấn đề phát sinh các bên sẽ cùng bàn
				bạc giải quyết trên tinh thần hợp tác và tôn trọng lợi ích của cả hai bên và được thể hiện bằng văn bản. Nếu không
				giải quyết được thì đưa ra Tòa án nhân dân có thẩm quyền để giải quyết. Bên thua kiện sẽ chịu toàn bộ chi phí.
				<br />
				<span className="bold">7.4 </span>HHợp đồng này được thanh lý khi bên B hoàn trả xe cho bên A, được bên A chấp nhận
				và thanh toán các chi phí liên quan. Hai bên đồng ý ký vào Biên bản bàn giao và thanh lý hợp đồng
				<br />
				<span className="bold">7.5 </span>Hợp đồng có hiệu lực kể từ ngày hai bên ký hợp đồng.
				<br />
				<span className="bold">7.6 </span>Hợp đồng được lập thành 02 (hai) bản, mỗi bên giữ một bản và có giá trị như nhau.
				<br />
				<br />
			</Typography>
			<Typography className="time" sx={{ fontSize: '18px', textAlign:'center' }}>
				<span className="bold">
					Bên A – Chủ xe
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Bên B – Khách thuê xe
				</span>
        <br/>
        <br/>
        <br/>
        <span className='papercontract-container__signature'>
        (Ký, ghi rõ họ tên)
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        (Ký, ghi rõ họ tên)
        </span>
			</Typography>
      <br/>
      <br/>
      <br/>
		</Box>
	);
})




export default PaperContract;
