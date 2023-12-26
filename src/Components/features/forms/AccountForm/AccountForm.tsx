import { useFormikContext } from "formik"
import Input from "../../../base/input/input"


type FormInterface = {
    username : string;
    password : string;
}


const AccountInformation = () => {

    const {errors, values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="Username :" value={values.username} name="username" onChange={handleChange} onBlur={handleBlur} erromessage={errors.username} 
            style={{width:"20rem", height:"2rem"}}/>
            <Input type="password" label="Password :" value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} erromessage={errors.password} 
            style={{width:"20rem", height:"2rem"}}/>
        </>
    )
}

export default AccountInformation;