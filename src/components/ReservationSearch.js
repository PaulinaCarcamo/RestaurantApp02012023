import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormHelperText, Input, InputLabel } from '@mui/material';
import { Pageview } from '@mui/icons-material';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import FirebaseDb from '../firebase/firebase.js';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

const theme = createTheme();
const db = getFirestore(FirebaseDb);

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

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//         email: data.get('email'),
//         password: data.get('password'),
//     });
// };

const RsvnSearch = () => {

    const [rsvns, setRsvns] = useState([]);
    const [search, setSearch] = useState('');
    const [searchRsvns, setSearchRsvns] = useState([]);

    const rsvnData = async () => {
        const q = query(collection(db, "reservations"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log(data);
        setRsvns(data)
    };

    useEffect(() => {
        rsvnData();
    }, []);

    const SearchBlog = (e) => {
        e.preventDefault();

        setSearchRsvns(rsvns.filter((rsvns) =>
            rsvns.name.toLowerCase().includes(search.toLowerCase()) ||
            rsvns.lastname.toLowerCase().includes(search.toLowerCase())
        ));
    };

    return (
        <React.Fragment>
            <Navbar />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <Pageview />
                        </Avatar>
                        {/* <Typography component="h1" variant="h5">
                        Sign in
                    </Typography> */}
                        <form onSubmit={(e) => { SearchBlog(e) }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <InputLabel htmlFor="my-input">Your Reservation</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text"
                                onChange={(e) => { setSearch(e.target.value) }} />
                            <FormHelperText id="my-helper-text">Search by name or lastname</FormHelperText>
                            <Button type="submit">Search</Button>
                        </form>

                        {searchRsvns.map(item => (
                            <Box component="form"
                                // onSubmit={handleSubmit} 
                                noValidate sx={{ mt: 1 }}
                                key={item.id}>
                                <TextField
                                    disabled
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    defaultValue={`${item.name} ${item.lastname}`}
                                />
                                <TextField
                                    disabled
                                    margin="normal"
                                    fullWidth
                                    id="date"
                                    label="Date"
                                    name="date"
                                    autoComplete="date"
                                    autoFocus
                                    defaultValue={item.date}
                                />
                                <TextField
                                    disabled
                                    margin="normal"
                                    fullWidth
                                    id="time"
                                    label="Time"
                                    name="time"
                                    autoComplete="time"
                                    autoFocus
                                    defaultValue={item.time}
                                />

                                <TextField
                                    disabled
                                    margin="normal"
                                    fullWidth
                                    id="guests"
                                    label="Guests"
                                    name="guests"
                                    autoComplete="guests"
                                    autoFocus
                                    defaultValue={item.table}
                                />
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
            <Footer />
        </React.Fragment>
    );
};

export default RsvnSearch;