// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const tiers = [
//     {
//         title: 'Free',
//         price: '0',
//         description: [
//             '10 users included',
//             '2 GB of storage',
//             'Help center access',
//             'Email support',
//         ],
//         buttonText: 'Sign up for free',
//         buttonVariant: 'outlined',
//     },
//     {
//         title: 'Pro',
//         subheader: 'Most popular',
//         price: '15',
//         description: [
//             '20 users included',
//             '10 GB of storage',
//             'Help center access',
//             'Priority email support',
//         ],
//         buttonText: 'Get started',
//         buttonVariant: 'contained',
//     },
//     {
//         title: 'Enterprise',
//         price: '30',
//         description: [
//             '50 users included',
//             '30 GB of storage',
//             'Help center access',
//             'Phone & email support',
//         ],
//         buttonText: 'Contact us',
//         buttonVariant: 'outlined',
//     },
// ];

// const footers = [
//     {
//         title: 'Company',
//         description: ['Team', 'History', 'Contact us', 'Locations'],
//     },
//     {
//         title: 'Features',
//         description: [
//             'Cool stuff',
//             'Random feature',
//             'Team feature',
//             'Developer stuff',
//             'Another one',
//         ],
//     },
//     {
//         title: 'Resources',
//         description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//     },
//     {
//         title: 'Legal',
//         description: ['Privacy policy', 'Terms of use'],
//     },
// ];

// function PricingContent() {
//     return (
//         <React.Fragment>
//             <Navbar />
//             <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
//             <CssBaseline />


//             {/* Hero unit */}
//             <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
//                 <Typography
//                     component="h1"
//                     variant="h2"
//                     align="center"
//                     color="text.primary"
//                     gutterBottom
//                 >
//                     Pricing
//                 </Typography>
//                 <Typography variant="h5" align="center" color="text.secondary" component="p">
//                     Quickly build an effective pricing table for your potential customers with
//                     this layout. It&apos;s built with default MUI components with little
//                     customization.
//                 </Typography>
//             </Container>
//             {/* End hero unit */}
//             <Container maxWidth="md" component="main">
//                 <Grid container spacing={5} alignItems="flex-end">
//                     {tiers.map((tier) => (
//                         // Enterprise card is full width at sm breakpoint
//                         <Grid
//                             item
//                             key={tier.title}
//                             xs={12}
//                             sm={tier.title === 'Enterprise' ? 12 : 6}
//                             md={4}
//                         >
//                             <Card>
//                                 <CardHeader
//                                     title={tier.title}
//                                     subheader={tier.subheader}
//                                     titleTypographyProps={{ align: 'center' }}
//                                     action={tier.title === 'Pro' ? <StarIcon /> : null}
//                                     subheaderTypographyProps={{
//                                         align: 'center',
//                                     }}
//                                     sx={{
//                                         backgroundColor: (theme) =>
//                                             theme.palette.mode === 'light'
//                                                 ? theme.palette.grey[200]
//                                                 : theme.palette.grey[700],
//                                     }}
//                                 />
//                                 <CardContent>
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'baseline',
//                                             mb: 2,
//                                         }}
//                                     >
//                                         <Typography component="h2" variant="h3" color="text.primary">
//                                             ${tier.price}
//                                         </Typography>
//                                         <Typography variant="h6" color="text.secondary">
//                                             /mo
//                                         </Typography>
//                                     </Box>
//                                     <ul>
//                                         {tier.description.map((line) => (
//                                             <Typography
//                                                 component="li"
//                                                 variant="subtitle1"
//                                                 align="center"
//                                                 key={line}
//                                             >
//                                                 {line}
//                                             </Typography>
//                                         ))}
//                                     </ul>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Button fullWidth variant={tier.buttonVariant}>
//                                         {tier.buttonText}
//                                     </Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>


//             <Footer />


//         </React.Fragment>
//     );
// }

// export default function Pricing() {
//     return (
//         <PricingContent />
//     )
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/StarBorder';
import { Stack } from '@mui/system';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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


// {
//     title: 'Enterprise',
//     price: '30',
//     description: [
//         '50 users included',
//         '30 GB of storage',
//         'Help center access',
//         'Phone & email support',
//     ],
//     buttonText: 'Contact us',
//     buttonVariant: 'outlined',
// },


const theme = createTheme();

export default function SignInSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (

        <React.Fragment>
            <Navbar />
            <ThemeProvider theme={theme}>

                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />



                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                            mx: 'auto',
                            my: 4
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Bistro Café
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Bistro's Café is family-owned and has been a long-standing tradition in Alaska for some time now. With retro 1950s details that are unmistakable from the outside in, Bistro's is serving up a classic menu along with some local Alaskan favorites. With delicious dishes such as reindeer sausage, chicken and waffles, a number of skillets, and a classic chili burger with our special chili, this menu is sure to warm anyone up on a cold Alaskan day or night.
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button variant="contained">Make a reservation</Button>
                                <Button variant="outlined">Request delivery</Button>
                            </Stack>
                        </Container>
                    </Box>
                    {/* <Container sx={{ py: 8 }} maxWidth="md"> */}
                    {/* End hero unit */}

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