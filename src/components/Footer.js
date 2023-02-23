import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { teal } from '@mui/material/colors';

function Copyright() {
    return (
        <Typography variant="body2" color="white" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                BistroCafe
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const color = teal[500]
const theme = createTheme();

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ bgcolor: '#263238', p: 6, color: 'white' }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Bistro Café
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="white"
                    component="p"
                >
                    0742 Evergreen Terrace, Alaska, Fake Av. 46407-3050
                </Typography>
                <Copyright />
            </Box>
        </ThemeProvider>
    );
}

export default Footer;

