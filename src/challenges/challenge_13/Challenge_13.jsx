import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { Button, Box, Typography } from '@mui/material'

const Challenge_13 = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (

        <Box
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3}}
        >
            <Button
                onClick={() => dispatch(increment())}
                variant='contained'
                sx={{mr: 2}}
            >
                +
            </Button>
            <Typography variant="body1" color="initial">{count}</Typography>
            <Button
                disabled={count === 0}
                onClick={() => dispatch(decrement())}
                variant='contained'
                sx={{ml: 2}}
            >
                -
            </Button>
        </Box>
    );
}

export default Challenge_13;