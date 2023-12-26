import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <button {...rest}>{children}</button>
    )
}

export default Button;