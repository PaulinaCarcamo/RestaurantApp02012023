import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const theme = createTheme();

const headingFont = createTheme({
    typography: {
        fontFamily: [
            'Yanone Kaffeesatz',
            'serif',
        ].join(','),
    },
});

const contentFont = createTheme({
    typography: {
        fontFamily: [
            'Barlow',
            'serif',
        ].join(','),
    },
});

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '90vh' }}>
                    <CssBaseline />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
                    >
                        <Container>
                            {/* Hero unit */}
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                }}
                            >
                                <Container maxWidth="sm">

                                    <Typography
                                        theme={headingFont}
                                        component="h1"
                                        variant="h2"
                                        // align="center"
                                        color="text.primary"
                                        gutterBottom
                                    >
                                        Bistro Café
                                    </Typography>


                                    <Typography variant="h5" align="center" color="text.secondary" paragraph
                                        theme={contentFont}>
                                        Bistro's Café has been a long-standing tradition in Alaska for some time now. With retro 50s details that are unmistakable from the outside in, Bistro's is serving up a classic menu along with some local favorites. With delicious dishes such as pancakes or waffles and a classic chili burger, this menu is sure to warm anyone up on a cold day or night.
                                    </Typography>
                                    <Stack
                                        sx={{ pt: 4 }}
                                        direction="row"
                                        spacing={2}
                                        justifyContent="center"
                                    >
                                        <Link to="/reservation" style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" sx={{bgcolor: 'teal'}}>Make a reservation</Button>
                                        </Link>

                                        <Button variant="outlined">Request delivery</Button>
                                    </Stack>
                                </Container>

                                {/* <OutlinedCard /> */}

                            </Box>
                            {/* End hero unit */}


                        </Container>
                    </Grid>

                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://m3arch.com/img/projects/americandiner/americandiner-1.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </Grid>
            </ThemeProvider>
            <Footer />
        </React.Fragment>
    );
}

export default Home;