
import React, { useState } from 'react';
import { Formik, Form, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


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
    };

    const MultiStepForm: React.FC = () => {
    const [step, setStep] = useState(1);

    const onSubmit = async (values: any, { resetForm, setSubmitting }: FormikHelpers<any>) => {
        try {
        console.log('Submitting form:', values);
        console.log('Form submitted successfully!');
        resetForm();
        // Redirect or perform other actions after successful submission
        } catch (error) {
        console.error('Form submission error:', error);
        } finally {
        setSubmitting(false);
        }
    };

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const renderStep = () => {
        switch (step) {
        case 1:
            return <Step1 nextStep={nextStep} />;
        case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} />;
        case 3:
             return <Step3 prevStep={prevStep} />;
        default:
            return null;
        }
    };
    
        return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formikProps: FormikProps<any>) => (
            <Form>
                {renderStep()}
                <div>
                {step !== 1 && <button type="button" onClick={prevStep}>Previous</button>}
                {step !== 3 ? (
                    <button type="button" onClick={nextStep}>
                    Next
                    </button>
                ) : (
                    <button type="submit" disabled={formikProps.isSubmitting}>
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