import { Alert, Snackbar } from "@mui/material"
import { useState, useContext, useEffect, Children, ReactNode } from "react"
import { AppContext, ContextType } from "../Provider";
import { useNavigate } from 'react-router-dom';


interface Props {
    children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
    const context = useContext<ContextType>(AppContext);
    const open = context?.open;
    const setOpen = context?.setOpen;
    const message = context?.message;
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen?.(false);
    };


    return (
        <>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            {children}
        </>
    );
};

export default ProtectedLayout;

// interface Props {
//     children: ReactNode
// }

// const navigate = useNavigate;

// const ProtectedLayout = ({ children } : Props) => {


//     const context = useContext<ContextType>(AppContext)
//     const open = context?.open
//     const setOpen = context?.setOpen
//     const message = context?.message

//     const handleClose = () => {
//         setOpen?.(false)

//     const handleLogout = () => {
//         localStorage.removeItem('authToken');
//         navigate('/');
//     }
// }

//     return (
//         <>
//             <Snackbar open={open} anchorOrigin={
//                 { vertical: 'top', horizontal: 'center' }
//             } autoHideDuration={2000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
//                     {message}
//                 </Alert>
//             </Snackbar>
//             {children}
//         </>
//     )

// }

// export default ProtectedLayout