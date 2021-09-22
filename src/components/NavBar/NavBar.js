import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Dialogbox from "../../components/Atoms/DialogBox/DialogBox"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = (props) => {
    const { type } = props;
    const [openLogOutDialog, setopenLogOutDialog] = useState(false);
    const handleDialog = () => {
        setopenLogOutDialog(true);
    }
    const handleLogout = () => {
        localStorage.removeItem("15emailcek");
        window.location.href = "/";
    }
    const handleClose = () => {
        setopenLogOutDialog(false);
    };
    const handleCart = () => {
        window.location.href = `/keranjang`;
    }
    return (
        <>
            <Dialogbox
                openStateDialog={openLogOutDialog}
                handleYesDialogBox={handleLogout}
                handleCloseDialogBox={handleClose}
                role="logout"
            />
            <Navbar collapseOnSelect expand="lg" bg="white" style={{ color: "#92E3A9" }}>
                <Container >
                    <Navbar.Brand href="/" style={{ color: "#92E3A9", fontWeight: "700" }}>DOKTERHUB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/listartikel" style={{ fontWeight: "500" }} >ARTIKEL</Nav.Link>
                            <Nav.Link href="/bantuan" style={{ fontWeight: "500" }} >BANTUAN COVID-19</Nav.Link>
                            <Nav.Link href="/anamnesis" style={{ fontWeight: "500" }} >KONSULTASI PENYAKIT</Nav.Link>
                        </Nav>
                        {type !== "auth" ?
                            localStorage.getItem("15emailcek") ?
                                <Nav>
                                    <Nav.Link onClick={handleCart} style={{ color: "#92E3A9", marginTop: "5px" }}><ShoppingCartIcon /></Nav.Link>
                                    <Nav.Link onClick={handleDialog} style={{}}>
                                        <Button style={{ border: "2px solid #92E3A9", backgroundColor: "white", color: "black", fontWeight: "400" }}>LOG OUT</Button>
                                    </Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link href="/login" style={{}}>
                                        <Button style={{ border: "2px solid #92E3A9", backgroundColor: "white", color: "black", fontWeight: "400" }}>LOGIN</Button>
                                    </Nav.Link>
                                    <Nav.Link eventKey={2} href="/register">
                                        <Button style={{ border: "2px solid #92E3A9", backgroundColor: "white", color: "black", fontWeight: "400" }}>BUAT AKUN</Button>
                                    </Nav.Link>
                                </Nav>

                            : <></>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;