import React, { useState } from "react"

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import NavBar from "../../../components/NavBar/NavBar";
import Dialogbox from "../../../components/Atoms/DialogBox/DialogBox";
import { useLocalContext } from "../../../context/context";



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const Register = () => {
    const { fromKeranjang } = useLocalContext();
    const [authregister, setauthregister] = useState(false)
    const classes = useStyles();
    const history = useHistory();
    const [input, setInput] = useState({ email: "", password: "", confirm: "" })



    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.password === input.confirm) {
            localStorage.setItem("15emailcek", input.email);
            fromKeranjang === null ? history.push('/') : history.push("/detail/" + fromKeranjang)
        } else {
            setauthregister(true);
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
            case "confirm": {
                setInput({ ...input, confirm: value })
                break;
            }
            default: { break; }
        }
        // console.log(input);
    }
    const handleClose = () => {
        setauthregister(false);
        window.location.reload();
    }
    return (
        <>
            <Dialogbox
                openStateDialog={authregister}
                handleYesDialogBox={handleClose}
                handleCloseDialogBox={handleClose}
                role="authregister"
            />
            <NavBar type="auth" />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Konfirmasi Password</Form.Label>
                            <Form.Control type="password" placeholder="Konfirmasi Password" onChange={handleChange}
                                name="confirm"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={input.confirm} />
                        </Form.Group>
                        <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: "#92E3A9", color: "white", marginBottom: "10px" }}>REGISTER</Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Sudah punya akun ? masuk
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </>
    );
};

export default Register;