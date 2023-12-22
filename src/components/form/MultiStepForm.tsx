import React from 'react';
// import { useForm } from 'react-hook-form';
import { Formik, Form, FormikProps, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
    
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    dateOfBirth: Yup.date()
        .required('Date of Birth is required')
        .max(new Date(), 'Date of Birth cannot be in the future'),
    streetAddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip Code is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Password must contain at least 8 characters, including one letter and one number'
        ),
    });

    const initialValues = {
    fullName: '',
    email: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: '',
    activeStep: 1,
    };
    
    const onSubmit = async (
        values: FormikValues,
        { setSubmitting }: FormikHelpers<typeof initialValues> ) => {

        try {
            console.log('Submitting form:', values);
            console.log('Form submitted successfully!');
            
            const response = await submitFormDataToAPI(values);

            if (response.status === 200) {
            console.log('Form submitted successfully!');

          // Redirect or perform other actions after successful submission
        } else {
            console.error('Form submission failed', response.statusText);
        }
    } catch (error) {
        console.error('Form submission error:', error);
    } finally {
        setSubmitting(false);
    }
    };

    const submitFormDataToAPI = async (formData: FormikValues) => {
    const response = await fetch('https://api.example.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });

        return response;
    };
    
        const nextStep = (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) =>
        setFieldValue('activeStep', (prevStep: number) => prevStep + 1);
    
        const prevStep = (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) =>
        setFieldValue('activeStep', (prevStep: number) => prevStep - 1);
    
        return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {({
            values,
            handleSubmit,
            isSubmitting,
            setFieldValue,
        }: FormikProps<typeof initialValues>) => (
            <Form>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              {/* Step 1 */}
                {values.activeStep === 1 && <Step1 nextStep={() => nextStep(setFieldValue)} />}
              {/* Step 2 */}
                {values.activeStep === 2 && (
                <Step2
                    nextStep={() => nextStep(setFieldValue)}
                    prevStep={() => prevStep(setFieldValue)}
                />
                )}
              {/* Step 3 */}
                {values.activeStep === 3 && <Step3 prevStep={() => prevStep(setFieldValue)} />}
              {/* Submit Button at Step 3 */}
                {values.activeStep === 3 && (
                <button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            handleSubmit(e as unknown as React.MouseEvent<HTMLFormElement>);
            }}
            disabled={isSubmitting}
        >
            Submit
        </button>
                )}
            </div>
            </Form>
        )}
        </Formik>
    </div>
    );
};

export default MultiStepForm;