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
import { ContactMail } from '@mui/icons-material';

import { collection, addDoc, getFirestore } from "firebase/firestore";
import FirebaseDb from '../firebase/firebase.js';
import { Link } from 'react-router-dom';

const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {

    const [name, setName] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;

    const db = getFirestore(FirebaseDb);
    const dbRef = collection(db, "contacts");
    const data = {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message
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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ minHeight: '80vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://mui.kitchen/__export/1666876495403/sites/muikitchen/img/2022/10/27/704568eebeb49c347cb9bacc371cbefc.jpeg_1228306336.jpeg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                        <Container>
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'teal' }}>
                                    <ContactMail />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Contact Us
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

                                        <Grid item xs={12}>
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                fullWidth
                                                label="Message"
                                                multiline
                                                rows={4}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
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
                                        sx={{ mt: 3, mb: 2, bgcolor: 'teal' }}
                                    >
                                        Submit
                                    </Button>

                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Snackbar open={open}
                                            autoHideDuration={6000}
                                            onClose={handleClose}
                                            anchorOrigin={{ vertical, horizontal }}
                                            key={vertical + horizontal}
                                        >
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                Message sent successfully!
                                            </Alert>
                                        </Snackbar>
                                    </Stack>

                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Typography>
                                                <Link to="/reservation">
                                                    Want to make a reservation?
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

export default ContactForm;