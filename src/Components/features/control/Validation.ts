import * as yup from 'yup'

export const validationSchema = yup.object({
    fullname : yup.string().required(),
    email : yup.string().email().required(),
    datebirth : yup.date().required(),
    streetAddress : yup.string().required(),
    city :  yup.string().required(),
    state : yup.string().required(),
    zipcode : yup.string().required(),
    username : yup.string().required(),
    password : yup.string().required(),
})