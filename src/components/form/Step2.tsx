// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { FormikProps } from 'formik';

// interface Step2Props {
//   nextStep: () => void;
//   prevStep: () => void;
//   formikProps: FormikProps<{ streetAddress: string; city: string; state: string; zipCode: string }>;
// }

// const Step2: React.FC<Step2Props> = ({ nextStep, prevStep, formikProps }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<{ streetAddress: string; city: string; state: string; zipCode: string }>();

//   const onSubmit: SubmitHandler<{ streetAddress: string; city: string; state: string; zipCode: string }> = (data) => {
//     // Validate form data if needed
//     console.log('Step 2 data:', data);

//     // Move to the next step
//     nextStep();
//   };

import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Step2Props {
    nextStep: () => void;
    prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
    const { register, handleSubmit, formState: { errors } } = useFormContext();

    const onSubmit = (data: any) => {
    // Validate form data if needed
    console.log('Step 2 data:', data);

    // Move to the next step
    nextStep();
    };

    return (
    <div>
        <h2>Step 2: Address Information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Street Address</label>
            <input {...register('streetAddress', { required: 'Street Address is required' })} />
            {errors.streetAddress && <p>input your adress</p>}
        </div>
        <div>
            <label>City</label>
            <input {...register('city', { required: 'City is required' })} />
            {errors.city && <p>input your city</p>}
        </div>
        <div>
            <label>State</label>
            <input {...register('state', { required: 'State is required' })} />
            {errors.state && <p>input your state</p>}
        </div>
        <div>
            <label>Zip Code</label>
            <input {...register('zipCode', { required: 'Zip Code is required' })} />
            {errors.zipCode && <p>input your zip</p>}
        </div>
        <button type="button" onClick={prevStep}>
            Previous
        </button>
        <button type="submit">Next</button>
        </form>

    </div>
    );
};

export default Step2;

  