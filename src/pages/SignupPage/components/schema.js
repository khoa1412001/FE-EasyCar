import * as Yup from 'yup';
import _debounce from 'lodash/debounce';
import apiAuth from 'apis/apiAuth';

const checkEmail = _debounce((email, resolve) => {
	apiAuth
		.checkEmail({ email })
		.then((res) => resolve(true))
		.catch((res) => resolve(false));
}, 800);
// const checkUsername = _debounce((username, resolve) => {
//   apiAuth.checkUsername({ username })
//     .then(res => resolve(true)).catch(res => resolve(false))
// }, 800)

export const schema = Yup.object().shape({
	username: Yup.string().required('Vui lòng nhập vào trường này').min(8, 'Họ và tên ít nhất 8 kí tự'),
	email: Yup.string()
		.required('Vui lòng nhập vào trường này')
		.matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Vui lòng nhập email hợp lệ')
		.min(8, 'Email ít nhất 8 kí tự')
		.test(
			'Unique Email',
			'Email đã được sử dụng', // <- key, message
			(value) => new Promise((resolve) => checkEmail(value, resolve))
		),
	password: Yup.string()
		.required('Vui lòng nhập vào trường này')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			'Mật khẩu ít nhất 8 kí tự, có chứa chữ in hoa, in thường, số'
		),
	phoneNumber: Yup.string()
		.required('Vui lòng nhập vào số điện thoại')
		.matches(/^\d+$/, 'Vui lòng nhập số điện thoại hợp lệ')
		.length(10, 'Vui lòng nhập đủ 10 số'),
	socialId: Yup.string()
		.required('Vui lòng nhập vào số căn cước công dân')
		.matches(/^\d+$/, 'Vui lòng nhập số căn cước hợp lệ'),
	passwordCf: Yup.string()
		.required('Vui lòng nhập vào trường này')
		.oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
});
