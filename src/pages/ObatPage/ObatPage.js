import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import Obat from '../../components/Obat/Obat';
import { useLocalContext } from '../../context/context';
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../../components/Copyright/Copyright"
import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1)',
            backgroundColor: "#92E3A9",
            color: "white"

        },
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0)',
        width: "100%", marginBottom: "20px"
    },
    buttonall: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1)',
            color: "white"
        },
        backgroundColor: "#92E3A9",
        color: "white",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0)',
        width: "100%", marginBottom: "20px"
    }

}));

const ObatPage = () => {
    const { obats } = useLocalContext();
    const classes = useStyles();
    const [keyword, setkeyword] = useState("");
    const [type, settype] = useState(1)
    const handleChange = (e) => {
        setkeyword(e.target.value);
    }
    const handleType = (integerr) => {
        settype(integerr);
        setAnchorEl(null);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div >
            <NavBar />
            <Container style={{ height: "100vh" }} >
                <div>
                    {
                        type === 2 ? <h2 >COVID-19</h2>
                            : type === 3 ? <h2 >BATUK</h2>
                                : type === 4 ? <h2 >FLU</h2>
                                    : type === 5 ? <h2 >VITAMIN</h2>
                                        : type === 6 ? <h2 >ALERGI</h2>
                                            : type === 7 ? <h2 >KULIT</h2>
                                                : type === 8 ? <h2 >MATA</h2>
                                                    : type === 9 ? <h2 >ORGAN DALAM</h2>
                                                        : <h2 >Obat dan Vitamin</h2>
                    }
                    <Row>
                        <Col lg={9} md={6} sm={12} xs={12} >
                            <Form style={{ marginTop: "15px" }}>
                                <Form.Control onChange={handleChange} value={keyword} style={{ width: "100%", display: "inline-block", borderRadius: "5px" }} placeholder="Cari Obat atau Vitamin" />
                            </Form>
                        </Col>
                        <Col lg={3} md={6} sm={12} xs={12} >
                            <Button style={{ marginTop: "15px", backgroundColor: "#92E3A9" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Urutkan Berdasarkan Penyakit
                            </Button>

                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => handleType(1)}>SEMUA JENIS</MenuItem>
                                <MenuItem onClick={() => handleType(2)}>COVID-19</MenuItem>
                                <MenuItem onClick={() => handleType(3)}>BATUK</MenuItem>
                                <MenuItem onClick={() => handleType(4)}>FLU</MenuItem>
                                <MenuItem onClick={() => handleType(5)}>VITAMIN</MenuItem>
                                <MenuItem onClick={() => handleType(6)}>ALERGI</MenuItem>
                                <MenuItem onClick={() => handleType(7)}>KULIT</MenuItem>
                                <MenuItem onClick={() => handleType(8)}>MATA</MenuItem>
                            </Menu>
                        </Col>
                    </Row>
                </div>
                <Obat keyword={keyword.length} type={type} />
                <Copyright />
            </Container>
        </div >
    );
};

export default ObatPage;