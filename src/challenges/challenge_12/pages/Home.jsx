import React, {useContext} from 'react'
import { Box, Typography, Button } from '@mui/material'
import {AuthContext} from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { setAuthValues, authValues } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuthValues({isAutenticated: false, user: ''});
        navigate('/challenge12/');
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
            <Typography variant="h3" color="initial">Hello {authValues.user}, You are loged in</Typography>
            <Button variant="contained" color="primary" onClick={()=> handleLogout()}>
                Log out
            </Button>
        </Box>
    )
}

export default Home