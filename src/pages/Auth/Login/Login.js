import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router';
import { Form } from 'react-bootstrap';
import NavBar from '../../../components/NavBar/NavBar';
import Dialogbox from '../../../components/Atoms/DialogBox/DialogBox';
import { useLocalContext } from '../../../context/context';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#92E3A9",
        color: "white"
    },
}));

const Login = () => {
    const { fromKeranjang } = useLocalContext();
    const [authlogin, setauthlogin] = useState(false);
    const classes = useStyles();
    const [input, setInput] = useState({ email: "", password: "" });

    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(input);
        if (input.email === 'dwi@gmail.com' && input.password === '123') {
            localStorage.setItem("15emailcek", input.email)
            fromKeranjang === null ? history.push('/') : window.location.href = "/detail/" + fromKeranjang;
        } else {
            setauthlogin(true);
        }
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "email": {
                setInput({ ...input, email: value })
                break;
            }
            case "password": {
                setInput({ ...input, password: value })
                break;
            }
            default: { break; }
        }
    }
    const handleClose = () => {
        setauthlogin(false);
        window.location.reload();
    }
    return (
        <div style={{ backgroundColor: "white", height: "100vh" }}>
            <Dialogbox
                openStateDialog={authlogin}
                handleYesDialogBox={handleClose}
                handleCloseDialogBox={handleClose}
                role="authlogin"
            />
            <NavBar type="auth" />
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>

                    <Form className={classes.form} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" onChange={handleChange}
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={input.email} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handleChange}
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={input.password} />
                        </Form.Group>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: "#92E3A9", color: "white", marginBottom: "10px" }}>LOGIN</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="./forgot" variant="body2">
                                    Lupa Password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="./register" variant="body2">
                                    {"Belum punya akun? Register"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </div>
            </Container >
        </div>
    );
};

export default Login;