
import { useState } from "react";
import Button from "../../base/button/button";
import Card from "../card/card";
import UserForm from "../forms/UserForm/UserForm";
import AddressForm from "../forms/AddressForm/AddressForm";
import AccountForm from "../forms/AccountForm/AccountForm";

const pages : any = {
    1 : UserForm,
    2 : AddressForm,
    3 : AccountForm,
}

const Navigation = () => {

    const [step, setStep] = useState(1);

    const btnNext = () => {
        if( step < 3 ) {
            setStep(step + 1)
        }
    }

    const btnPrev = () => {
        if (step > 1 ) {
            setStep(step - 1)
        }
    }

    const FormPage = pages[step]

    return (
        <Card>
            <FormPage />
            {step > 1 && (
            <Button onClick={btnPrev} type="button">
                Back
            </Button>
            )}

            {step < 3 && (
            <Button onClick={btnNext} type="button">
                Next
            </Button>
            )}

            {step === 3 && (
                <Button type="submit">
                    Submit
                </Button>
            )}

        </Card>
    )
}

export default Navigation;