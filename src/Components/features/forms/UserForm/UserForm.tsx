import { useFormikContext } from "formik"
import Input from "../../../base/input/input"


type FormInterface = {
    fullname : string;
    email : string;
    datebirth : Date;
}

const UserForm = () => {

    const {errors ,values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="Full Name :" value={values.fullname} name="fullname" onChange={handleChange} onBlur={handleBlur} erromessage={errors.fullname} 
            style={{width:"20rem", height:"2rem"}}/>
            <Input type="text" label="Email :" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} erromessage={errors.email}
            style={{width:"20rem", height:"2rem"}}/>
            <Input type="date" label="Date of Birth :" value={values.datebirth as any} name="datebirth" onChange={handleChange} onBlur={handleBlur} erromessage={errors.datebirth as any} 
            style={{width:"20rem", height:"2rem"}}/>
        </>
    )
}

export default UserForm;