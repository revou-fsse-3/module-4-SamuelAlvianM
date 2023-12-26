import { InputHTMLAttributes } from "react";

type InputProps = {
    label : string;
    erromessage? : string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({erromessage, label, ...rest}: InputProps) => {
    return (
        <>
            <label style={{
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                margin: '1rem 5.7rem ',
                color: 'cyan', 
                textShadow: '.5px .5px 30px yellow', 
                fontSize: '1.3rem', 
                letterSpacing: '1.5px', 
            }}>
                {label}
            </label>
            <div style={{
                color: 'yellow',
                fontSize:'12px',
            }}>
                <input {...rest}/>
                {erromessage && <p>Fill the Required Data Before Submit</p>}
            </div>
        </>
    )
}

export default Input;