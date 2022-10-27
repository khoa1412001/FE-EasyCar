import * as Yup from 'yup';

export const schema = Yup.object().shape({
	username: Yup.string().required('Vui lòng nhập vào trường này').min(8, 'Họ và tên ít nhất 8 kí tự'),
	phoneNumber: Yup.string()
		.required('Vui lòng nhập vào số điện thoại')
		.matches(/^\d+$/, 'Vui lòng nhập số điện thoại hợp lệ')
		.length(10, 'Vui lòng nhập đủ 10 số'),
	location: Yup.string()
		.required('Vui lòng nhập vào địa chỉ hợp lệ')
		.min(10,'Địa chỉ phải dài hơn 10 ký tự'),
});
