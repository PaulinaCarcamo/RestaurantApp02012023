import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mainFeaturedPost = 
{
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://www.miamiculinarytours.com/wp-content/uploads/2020/12/Miami-Diner-milkshake.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};


const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://i.pinimg.com/originals/41/35/d0/4135d0480141c30bdebc5982163607f5.jpg',
        imageLabel: 'Image Text',
    },

    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
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

                        <MainFeaturedPost post={mainFeaturedPost} />

                        <Grid container spacing={4}>
                            {featuredPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} />
                            ))}
                        </Grid>

                    </main>
                </Container>
            </ThemeProvider>
            <Footer />
        </React.Fragment>
    );
}