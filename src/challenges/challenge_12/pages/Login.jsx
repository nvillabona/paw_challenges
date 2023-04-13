import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Box, Typography, Button, TextField } from '@mui/material'


const Login = () => {
    const [ userName, setUserName ] =  useState('');
    const { setAuthValues } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setAuthValues({isAutenticated: true, user: userName});
        navigate('/challenge12/home');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h2" sx={{ mb: 2 }}>Login Page</Typography>
            <form onSubmit={handleLogin}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    mt: 2,
                    gap: 2,
                }}
            >
                    <TextField
                        id=""
                        label="UserName"
                        type='text'
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                    <TextField
                        id=""
                        label="Password"
                        type='password'
                    />


                    <Button type="submit" variant='contained'>Login</Button>
            </Box>
        </form>
        </Box >
    );
};

export default Login;
