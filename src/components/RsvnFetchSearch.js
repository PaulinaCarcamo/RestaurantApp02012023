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
import { FormHelperText, IconButton, Input, InputLabel, OutlinedInput } from '@mui/material';
import { Description, Pageview, Search } from '@mui/icons-material';

import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import FirebaseDb from '../firebase/firebase.js';

const theme = createTheme();
const db = getFirestore(FirebaseDb);

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//         email: data.get('email'),
//         password: data.get('password'),
//     });
// };

const RsvnFetchSearch = () => {

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
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" sx={{ minHeight: '75vh' }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            mt: 4,
                            mb: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#536dfe' }}>
                            <Description />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Reservation Status
                        </Typography>
                        <Typography>To find your reservation, please search by typing your NAME or LASTNAME.</Typography>
                        <form onSubmit={(e) => { SearchBlog(e) }}
                        >
                            {/* <InputLabel htmlFor="my-input">Your Reservation</InputLabel> */}

                            <Box sx={{ display: 'flex' }}>
                                <OutlinedInput focused id="my-input" aria-describedby="my-helper-text"
                                    onChange={(e) => { setSearch(e.target.value) }}
                                />

                                <Button type="submit">
                                    <Search />
                                </Button>

                            </Box>

                            <FormHelperText id="my-helper-text">Search by name or lastname</FormHelperText>
                        </form>

                        {searchRsvns.map(item => (
                            <Box component="form"
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
                                    <Grid item>
                                        <Link href="/contact" variant="body2">
                                            {"In case of changes contact us"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default RsvnFetchSearch;