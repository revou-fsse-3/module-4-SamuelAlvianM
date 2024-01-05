import { Button, Card, CardContent, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { AppContext, ContextType } from "../../Provider";

interface FormProps {
    username?: string;
    email?: string;
    password?: string
}

const schema = yup
    .object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    })
.required()


const Register = () => {
    const navigate = useNavigate();

    const context = useContext<ContextType>(AppContext)
    const setOpen = context?.setOpen
    const setMessage = context?.setMessage

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleError = (message: string) => {
        setOpen?.(true)
        setMessage?.(message)
    }

    const onSubmit = async (data: FormProps) => {
        try {
            await axios.post('https://mock-api.arikmpt.com/api/user/register', {
                username: data.username,
                email: data.email,
                password: data.password
            })

            navigate('/login')
        } catch (error) {
            const err = error as AxiosError as any
            const errors = err.response?.data?.errors
            if(Array.isArray(errors)) {
                return
            }
            handleError(errors)
        }
        
    }
    
    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className="login-box">
            <Card sx={{ maxWidth: 300 }}>
                <CardContent className={'login-content'}>
                    <Typography sx={{ fontSize: 14, fontWeight: 700, textAlign: "center"}}>
                        Hi New User, Register Your Account Here!
                    </Typography>
                    <div className="login-form">
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => <TextField value={field.value} onChange={field.onChange} label="username" variant="outlined" size="small" 
                                helperText={errors.username?.message} error={!!errors.username}/>}
                        />

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <TextField value={field.value} onChange={field.onChange} label="email" variant="outlined" size="small" 
                                helperText={errors.email?.message} error={!!errors.email}/>}
                        />
                        
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <TextField type="password" value={field.value} onChange={field.onChange} label="password" variant="outlined" size="small" 
                                helperText={errors.password?.message} error={!!errors.password}/>}
                        />
                    </div>
                    <Button 
                    variant="contained" 
                    fullWidth onClick={handleSubmit(onSubmit)}
                    sx={{ mt: 1, mb: 1, backgroundColor: "#43766C", color: "#FAEF5D", fontWeight: 600 }} >Register
                    </Button>
                    <Button 
                    variant="outlined" 
                    fullWidth onClick={handleLogin}
                    sx={{ mt: 1, mb: 1, backgroundColor: "#33186B", color: "#80BCBD", fontWeight: 600 }} >Already Have Account</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register