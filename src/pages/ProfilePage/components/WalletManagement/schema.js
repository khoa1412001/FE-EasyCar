import * as Yup from 'yup';

export const schema = Yup.object().shape({
    amount: Yup.string()
    .matches(/^\d+$/,"Vui lòng nhập vào số")
});
