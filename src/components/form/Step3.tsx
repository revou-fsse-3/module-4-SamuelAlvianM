import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Step3Props {
    prevStep: () => void;
  }

const Step3: React.FC<Step3Props> = ({ prevStep }) => {
    const { register, handleSubmit, formState: { errors } } = useFormContext();
  
    const onSubmit = (data: any) => {
      console.log('Step 3 data:', data);
      
    };

return (
    <div>
    <h2>Step 3: Account Information</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label>Username</label>
        <input {...register('username', { required: 'Username is required' })} />
        {errors.username && <p>still error</p>}
        </div>
        <div>
        <label>Password</label>
        <input
            type="password"
            {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>enter your password</p>}
        </div>
        <button type="button" onClick={prevStep}>
        Previous
        </button>
        <button type="submit">Submit</button>
    </form>
    </div>
);
};

export default Step3;


