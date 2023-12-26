import { useFormikContext } from "formik"
import Input from "../../../base/input/input"


type FormInterface = {
    streetAddress : string;
    city : string;
    state : string;
    zipcode : string;
}


const AddressForm = () => {

    const {errors, values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="Street Address  :" value={values.streetAddress} name="address" onChange={handleChange} onBlur={handleBlur} erromessage={errors.streetAddress} 
            style={{width:"20rem", height:"2rem"}}/>

            <Input type="text" label="City  :" value={values.city} name="city" onChange={handleChange} onBlur={handleBlur} erromessage={errors.city} 
            style={{width:"20rem", height:"2rem"}}/>

            <Input type="text" label="State :" value={values.state} name="state" onChange={handleChange} onBlur={handleBlur} erromessage={errors.state} 
            style={{width:"20rem", height:"2rem"}}/>

            <Input type="text" label="Zip Code  :" value={values.zipcode} name="zipcode" onChange={handleChange} onBlur={handleBlur} erromessage={errors.zipcode} 
            style={{width:"20rem", height:"2rem"}}/>
        </>
    )
}

export default AddressForm;