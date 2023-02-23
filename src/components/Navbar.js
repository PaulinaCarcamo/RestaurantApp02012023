import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Tooltip from '@mui/material/Tooltip';
import { Fastfood } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { allimages } from '../data/allimages.js';

const pages = [
    { title: "About", route: "about" },
    { title: "Menu", route: "menu" },
    { title: "Contact", route: "contact" }
]

const actions = [
    { title: "New Reservation", route: "reservation" },
    { title: "Check Reservation", route: "rsvnsearch" },
]

const Navbar = () => {

    const [anchorNav, setAnchorNav] = React.useState(null);
    const [anchorActions, setAnchorActions] = React.useState(null);

    const openNavMenu = (event) => {
        setAnchorNav(event.currentTarget);
    };

    const closeNavMenu = () => {
        setAnchorNav(null);
    };

    const openActions = (event) => {
        setAnchorActions(event.currentTarget);
    };

    const closeActions = () => {
        setAnchorActions(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: '#263238' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Fastfood sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                            BISTRO
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={openNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorNav)}
                            onClose={closeNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={closeNavMenu}>
                                    <Link to={`/${page.route}`} style={{ textDecoration: 'none', color: '#000' }}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                            BISTRO
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={`/${page.route}`} style={{ textDecoration: 'none' }}>
                                <Button
                                    key={page.title}
                                    onClick={closeNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >{page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open actions">
                            <IconButton onClick={openActions} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={allimages[3].img} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorActions}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorActions)}
                            onClose={closeActions}
                        >
                            {actions.map((item) => (
                                <MenuItem key={item.title} onClick={closeActions} >
                                    <Link to={`/${item.route}`} style={{ textDecoration: 'none', color: '#000' }}>
                                        <Typography textAlign="center">{item.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
