const yup = require("yup");

const schema = yup.object().shape({
    name: yup.string().required('نام الزامی می‌باشد').min(3, 'نام باید حداقل 3 کاراکتر باشد').max(50, 'نام حداکثر باید 50 کاراکتر باشد'),
    melliCode: yup.string().required('کد ملی الزامی می‌باشد').min(10, 'کد ملی باید حداقل 10 رقم باشد').max(10, 'کد ملی باید حداکثر 10 رقم باشد'),
    phoneNumber: yup.string().required('شماره موبایل الزامی می‌باشد').min(11, 'شماره موبایل باید حداقل 11 رقم باشد').max(11, 'شماره موبایل باید حداکثر 11 رقم باشد').matches(/^09/, 'شماره موبایل باید با "09" شروع شود'),
});



module.exports = (data) => {
    return schema.validate(data,{abortEarly:false});
};
