import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import MainMeals from '../components/MainMeals.js';
import FeaturedMeals from '../components/FeaturedMeals.js';
import { featuredMeals } from '../data/featuredMeals.js';
import { mainMeals } from '../data/mainMeals.js';

const theme = createTheme();

const Menu = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
                    <main>
                        <MainMeals post={mainMeals} />
                        <Grid container spacing={4}>
                            {featuredMeals.map((post) => (
                                <FeaturedMeals key={post.title} post={post} />
                            ))}
                        </Grid>
                    </main>
                </Container>
            </ThemeProvider>
            <Footer />
        </React.Fragment>
    );
}

export default Menu;