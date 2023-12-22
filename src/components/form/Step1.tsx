import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Step1Props {
    nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
    const { register, handleSubmit, formState: { errors } } = useFormContext();

    const onSubmit = (data: any) => {
    console.log(data);
    nextStep();
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label>Full Name</label>
        <input {...register('fullName', { required: 'Full Name is required' })} />
        {errors && errors.fullName && <p>FILL IT</p>}
        </div>
        <div>
        <label>Email Address</label>
        <input {...register('email', { required: 'Email is required' })} />
        {errors && errors.email && <p>FILL IT</p>}
        </div>
        <div>
        <label>Date of Birth</label>
        <input {...register('dateOfBirth', { required: 'Date of Birth is required' })} />
        {errors && errors.dateOfBirth && <p>FILL IT</p>}
        </div>
        <button type="submit">Next</button>
    </form>
    );
};

export default Step1;
