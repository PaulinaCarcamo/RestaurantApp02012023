import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Favorite, Image } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { aboutCards } from '../data/aboutCards.js';
import { padding } from '@mui/system';

const theme = createTheme();
const contentFont = createTheme({
    typography: {
        fontFamily: [
            'Barlow',
            'serif',
        ].join(','),
    },
});

function AboutUs() {
    return (
        <React.Fragment>
            <Navbar />
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />

            <Container disableGutters maxWidth="sm" component="main"
                sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
                    flexDirection: 'row', minHeight: '40vh'
                }}
            >
                <ThemeProvider theme={theme}>
                    <Box>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            gutterBottom
                            theme={contentFont}
                            fontWeight="medium"
                        >
                            Our Restaurant
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" component="p" theme={contentFont}>
                            Bistro's opened its doors for the first time in 1958 and has been serving up classic diner dishes ever since. Not only does this diner offer special menus for the holidays, but it's a popular fixture in Alaska, where the locals know they can go to get comfort food and so much more.
                        </Typography>
                    </Box>
                </ThemeProvider>
            </Container>

            <Container maxWidth="md" component="main" sx={{ mb: 6 }}>
                <Grid container spacing={5} alignItems="flex-end">
                    {aboutCards.map((item) => (

                        <Grid
                            item
                            key={item.title}
                            xs={12}
                            sm={item.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={item.title}
                                    // subheader={item.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={item.title === 'Classic' ? <Favorite /> : null}
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

                                            <Avatar
                                                alt="Remy Sharp"
                                                src={item.img}
                                                sx={{ width: 56, height: 56 }}
                                            />
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {item.description.map((line) => (
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
                                {/* <CardActions>
                                    <Button fullWidth variant={item.buttonVariant}>
                                        {item.buttonText}
                                    </Button>
                                </CardActions> */}
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
};
