import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Copyright from '../components/Copyright';
import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {addUser, fetchUsers} from '../redux/users/userActions';
import {
    selectUserViaEmail,
    selectUserViaName,
} from '../redux/users/userSelectors';
import {createUser} from '../utils/userDataUtils';

const theme = createTheme();

export default function Registration() {
    useFetch(fetchUsers());
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secPassword, setSecPassword] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');
    const [valid, setValid] = useState(true);

    const handleSetEmail = (e) => setEmail(e.target.value);
    const handleSetPassword = (e) => setPassword(e.target.value);
    const handleSetSecondPassword = (e) => setSecPassword(e.target.value);
    const handleSetName = (e) => setName(e.target.value);
    const handleSetNickName = (e) => setNickName(e.target.value);

    const userDataReset = () => {
        setValid(false);
        setEmail('');
        setName('');
        setSecPassword('');
        setPassword('');
    };

    const userEmailCheck = useSelector((store) =>
        selectUserViaEmail(store, email)
    );
    const userNameCheck = useSelector((store) =>
        selectUserViaName(store, name)
    );

    const handleSubmit = useCallback(() => {
        const user = createUser(email, password, name, nickname);
        if (
            name.length !== 0 &&
            nickname.length !== 0 &&
            password.length !== 0 &&
            secPassword.length !== 0 &&
            email.length !== 0 &&
            password === secPassword &&
            userEmailCheck.length === 0 &&
            userNameCheck.length === 0
        ) {
            dispatch(addUser(user));
            navigate('/login');
        } else {
            userDataReset();
            return;
        }
    }, [
        dispatch,
        email,
        name,
        navigate,
        nickname,
        password,
        secPassword,
        userEmailCheck.length,
        userNameCheck.length,
    ]);
    return (
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
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3823/3823207.png"
                        alt="octo"
                        className="h-12 m-1"
                    ></img>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{mt: 3}}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    value={name}
                                    onChange={handleSetName}
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    value={nickname}
                                    onChange={handleSetNickName}
                                    label="Nickname"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={valid ? 0 : 1}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={handleSetEmail}
                                    value={email}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={valid ? 0 : 1}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handleSetPassword}
                                    value={password}
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={valid ? 0 : 1}
                                    required
                                    fullWidth
                                    name="repeat-password"
                                    label="Repeat Password"
                                    type="password"
                                    onChange={handleSetSecondPassword}
                                    value={secPassword}
                                    id="rep-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary"
                                        />
                                    }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 5}} />
            </Container>
        </ThemeProvider>
    );
}
