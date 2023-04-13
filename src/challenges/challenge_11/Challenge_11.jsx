import React from 'react'
import { Box, Typography } from '@mui/material'

const Challenge_11 = () => {
    return (
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" sx={{ mt: 4, height: '100%' }}>
            <Typography variant="h2" color="initial">
                ⤴️Challenge 11
            </Typography>
            <Typography variant="body1" component="ul">
                <li>Create a new shared
                    component
                    NavComponent.jsx to
                    handle navigation bar.
                </li>
                <li>
                    Use classes/styles to show a
                    nice menu
                </li>
                <li>
                    Use different styles to
                    highlight active route
                </li>
            </Typography>

        </Box>
    )
}

export default Challenge_11