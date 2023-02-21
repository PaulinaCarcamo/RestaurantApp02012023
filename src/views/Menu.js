import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainMeals from '../components/MainMeals';
import FeaturedMeals from '../components/FeaturedMeals';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mainMeals =
{
    title: 'Diner Classic',
    description:
        "Handcrafted patties cooked to medium, with choice of fries, tater tots, a cup of soup, coleslaw or potato salad. Substitute a house or caesar salad, onion rings or a cup of chili.",
    image: 'https://www.miamiculinarytours.com/wp-content/uploads/2020/12/Miami-Diner-milkshake.jpg',
    imageText: ' ',
    linkText: 'Ask for Delivery',
};


const featuredMeals = [
    {
        title: 'French Toast',
        date: '8.50',
        description:
            'Battered texas toast topped with powdered sugar & cinnamon',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'Pancakes',
        date: '7.50',
        description:
            'Pancakes with bananas, blueberries, strawberries, or chocolate chips',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'BLT Sandwich',
        date: '12.95',
        description:
            'Smoked bacon, lettuce, tomato & mayo on toasted sourdough',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'Chili Burger',
        date: '15.95',
        description:
            'Open-faced, covered in Granny s chili, grated cheese, & onions',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'Country Benedict',
        date: '14.95',
        description:
            'Sausage patty, two eggs smothered in sausage gravy on a toasted biscuit',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'Route 66',
        date: '15.95',
        description:
            'Cheddar, bacon, lettuce, tomatoes, onions, pickles, mayo & bbq sauce on a hoagie bun',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },
];

const theme = createTheme();

export default function Menu() {
    return (
        <React.Fragment>
            <Navbar />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ my: 8 }}>
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