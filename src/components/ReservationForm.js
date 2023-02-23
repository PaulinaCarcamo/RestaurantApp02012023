import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Restaurant } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import FirebaseDb from '../firebase/firebase.js';
import { allimages } from '../data/allimages.js';

const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RsvnForm = () => {

    const [name, setName] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [table, setTable] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'center',
    });
    console.log(setState);
    const { vertical, horizontal } = state;

    const db = getFirestore(FirebaseDb);
    const dbRef = collection(db, "reservations");
    const data = {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        date: JSON.stringify(date),
        // time: JSON.stringify(time),
        time: time,
        table: table,
    }

    const Submit = (e) => {
        e.preventDefault();

        addDoc(dbRef, data)
            .then((docRef) => {
                console.log("Document added successfully");
                setOpen(true)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleChange = (event) => {
        setTable(event.target.value);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ minHeight: '80vh' }}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7}
                        sx={{
                            backgroundImage: `url(${allimages[2].img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                        <Container>
                            <Box sx={{
                                marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'
                            }}>
                                <Avatar sx={{ m: 1, bgcolor: '#03a9f4' }}>
                                    <Restaurant />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Reservation
                                </Typography>
                                <Box component="form" noValidate onSubmit={Submit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="phone"
                                                label="Phone Number"
                                                name="phone"
                                                autoComplete="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Date"
                                                    value={date}
                                                    onChange={(newDate) => {
                                                        setDate(newDate);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                                />
                                            </LocalizationProvider>
                                        </Grid>

                                        {/* <Grid item xs={12} sm={6}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <TimePicker
                                                    label="Time"
                                                    value={time}
                                                    onChange={(newTime) => {
                                                        setTime(newTime);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                                />
                                            </LocalizationProvider>
                                        </Grid> */}

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                id="time"
                                                label="Time"
                                                type="time"
                                                defaultValue="00:00"
                                                value={time}
                                                onChange={(e) => setTime(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Table</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={table}
                                                    label="Table"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={1}>Bar Seating (1 guest)</MenuItem>
                                                    <MenuItem value={2}>High Top Table (2 guests)</MenuItem>
                                                    <MenuItem value={4}>Classic Booth (4 guests)</MenuItem>
                                                    <MenuItem value={6}>Banquet Table (6 guests)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="I want to receive latest menu updates, promotions and discounts via email."
                                            />
                                        </Grid>
                                    </Grid>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, bgcolor: '#03a9f4' }}
                                    >
                                        Submit
                                    </Button>

                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Snackbar open={open}
                                            autoHideDuration={6000}
                                            onClose={closeSnackbar}
                                            anchorOrigin={{ vertical, horizontal }}
                                            key={vertical + horizontal}
                                        >
                                            <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%' }}>
                                                Reservation created successfully!
                                            </Alert>
                                        </Snackbar>
                                    </Stack>

                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Typography>
                                                <Link to="/contact">
                                                    Want to contact us?
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default RsvnForm;