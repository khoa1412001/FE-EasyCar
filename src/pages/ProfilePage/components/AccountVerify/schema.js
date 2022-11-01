import * as Yup from 'yup';

export const schema = Yup.object().shape({
	username: Yup.string().required('Vui lòng nhập vào trường này').min(8, 'Họ và tên ít nhất 8 kí tự'),
	driverlincense: Yup.string()
		.required('Vui lòng nhập vào số giấy phép lấy xe')
		.matches(/^\d+$/, 'Vui lòng nhập số giấy phép lấy xe hợp lệ')
		.length(12, 'Vui lòng nhập đủ 12 số'),
	birthday: Yup.date()
		.required('Vui lòng nhập vào ngày sinh hợp lệ')
        .typeError('Vui lòng nhập vào ngày hợp lệ')
});
