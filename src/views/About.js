import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Face, Favorite, LunchDining, Star } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createTheme();

const contentFont = createTheme({
    typography: {
        fontFamily: [
            'Barlow',
            'serif',
        ].join(','),
    },
});

const tiers = [
    {
        title: 'Atmosphere',
        price: '0',
        img: 'https://img.freepik.com/vector-premium/plantilla-poster-fiesta-retro-cassette-audio_155102-13.jpg?w=2000',
        description: [
            'Iconic Googie architecture that captivates the hearts of classic diner lovers.',
            'Characteristic late-50s soft light glowing style.'
        ],
        buttonText: 'Ask for Delivery',
        buttonVariant: 'outlined',
    },
    {
        title: 'Classic',
        img: 'https://static.vecteezy.com/system/resources/thumbnails/000/365/285/small/Retro_Sign_Vector_3.jpg',
        // subheader: 'Most popular',
        price: '15',
        description: [
            'Transport back to a time when things were simpler.',
            'Delicious burger, a side of fries. Classic milkshake or float.',
        ],
        buttonText: 'See the Menu',
        buttonVariant: 'contained',
    },
    {
        title: 'Experience',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/823/740/products/quadro-39-e7afe0f8efdbe4b8cd16448100181571-640-0.png',
        price: '30',
        description: [
            'There s something nostalgic about a dining establishment that has been around when the golden era of diners was truly at its peak.',
        ],
        buttonText: 'Make a Reservation',
        buttonVariant: 'outlined',
    },
];

function AboutUs() {
    return (
        <React.Fragment>
            <Navbar />
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            {/* Hero unit */}


            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <ThemeProvider theme={theme}>

                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    // color="text.primary"
                    gutterBottom
                    theme={contentFont}
                    fontWeight="medium"
                >
                    Our Restaurant
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p"  theme={contentFont}>
                    Bistro's opened its doors for the first time in 1958 and has been serving up classic diner dishes ever since. Not only does this diner offer special menus for the holidays, but it's a popular fixture in Alaska, where the locals know they can go to get comfort food and so much more.
                </Typography>
                </ThemeProvider>
            </Container>
            {/* End hero unit */}

            <Container maxWidth="md" component="main" sx={{ mb: 4 }}>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            
                            <Card>
                       
                                <CardHeader
                                    title={tier.title}
                                    // subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Classic' ? <Favorite /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {/* ${tier.price} */}
                                            {/* <img src={tier.img}></img> */}

                                            <Avatar
                                                alt="Remy Sharp"
                                                src={tier.img}
                                                sx={{ width: 56, height: 56 }}
                                            />
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
}

export default function About() {
    return <AboutUs />;
}
