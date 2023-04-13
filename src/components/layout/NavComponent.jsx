import React from 'react'
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import appRoutes from '../../routes/routes';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const NavComponent = () => {

    const [drawerIsOpen, setDrawingIsOpen] = React.useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=> setDrawingIsOpen(true)}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">

                    </Typography>
                </Toolbar>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={drawerIsOpen}
                    onClose={() => setDrawingIsOpen(false)}
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
                    }}
                    PaperProps={{
                        sx: {
                            backgroundColor: "primary.darker",
                            color: "white.main"
                        }
                    }}
                >
                    <List>
                        {Object.entries(appRoutes)
                            .map(([key, item], index) => (
                                <ListItem key={item.name} disablePadding>
                                    <ListItemButton 
                                        selected={location.pathname === item.route} 
                                        onClick={()=> navigate(item.route)}
                                    >
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                </Drawer>
            </AppBar>
            <Box sx={{mt: '4rem', padding: 0, flexGrow: 1}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default NavComponent