import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
    const { children } = props;



    return (
        <div style={{
            backgroundColor: "black",
            padding: "1.5rem",
            borderRadius: "2rem",
            width: "32rem",
            height: "35rem",
        }} className="bg-white p-6 rounded-lg shadow-md">
            {children}
        </div>
    )
}

export default Card;