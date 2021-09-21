import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/NavBar/NavBar';

import { Figure, Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Dialogbox from '../../components/Atoms/DialogBox/DialogBox';
import { useLocalContext } from '../../context/context';
import Obat from '../../components/Obat/Obat';
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../../components/Copyright/Copyright";


const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            backgroundColor: "#92E3A9",
            color: "white"

        }
    }
}));


const ubahHarga = (harga) => {
    return harga.substring(0, harga.length - 3) + '.' + harga.substring(harga.length - 3, harga.length);
}

const DetailObat = (props) => {
    const history = useHistory();
    const { obats, fromKeranjang, setfromKeranjang } = useLocalContext();
    const classes = useStyles();
    let newobat;
    for (let i = 0; i < obats.length; i++) {
        if (String(obats[i].id) === props.match.params.id) {
            newobat = obats[i];
        }
    }
    const [inKeranjang, setinKeranjang] = useState(false)
    const [isLogin, setisLogin] = useState(false)
    const [kuantitas, setkuantitas] = useState(0)
    // console.log("masuk sini")
    // console.log(props.match.params);

    const handleMinus = () => {
        kuantitas === 0 ? setkuantitas(0)
            : setkuantitas(kuantitas - 1);
    }
    const handlePlus = () => {
        setkuantitas(kuantitas + 1);
    }
    const handleChange = (e) => {
        setkuantitas(e.target.value)
    }
    const handleBeli = () => {
        if (localStorage.getItem("15emailcek")) {
            window.location.href = "/keranjang"
        } else {
            setisLogin(true);
        }
    }
    const handleKeranjang = () => {
        if (localStorage.getItem("15emailcek")) {
            setinKeranjang(true);
        } else {
            setisLogin(true);
        }
    }
    const handleClose1 = () => {
        setinKeranjang(false);
    }
    const handleClose2 = () => {
        setisLogin(false);
    };
    const handleYes = () => {
        setfromKeranjang(props.match.params.id);
        history.push("/login")
    }

    return (
        <div>
            <Dialogbox
                openStateDialog={inKeranjang}
                handleYesDialogBox={handleClose1}
                handleCloseDialogBox={handleClose1}
                role="inKeranjang"
            />
            <Dialogbox
                openStateDialog={isLogin}
                handleYesDialogBox={handleYes}
                handleCloseDialogBox={handleClose2}
                role="isLogin"
            />
            <div>
                <Navbar />

                <Container style={{ marginTop: "2%", paddingTop: "2%", paddingBottom: "2%" }}>
                    <Row style={{ marginBottom: "30px" }}>
                        <Col xs={12} lg={6} style={{ textAlign: "center" }}>
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={310}
                                    alt="171x180"
                                    src={newobat.image}
                                />
                            </Figure>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <Typography component="h5" variant="h5">
                                    {newobat.title}
                                </Typography>
                                <Typography component="h6" variant="h6" style={{ marginTop: "15px", color: "#92E3A9" }}>
                                    {newobat.type}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
                                    {newobat.description}
                                </Typography>
                                <div style={{ backgroundColor: "#f7f7f7" }}>
                                    <Typography variant="h3" style={{ marginTop: "35px", color: "#92E3A9" }}>
                                        Rp {ubahHarga(String(newobat.price))},00 / {newobat.unit}
                                    </Typography>
                                </div>
                                <Row style={{ marginTop: "10px" }}>
                                    <Col lg={4} md={3} sm={4} xs={5} >
                                        <InputGroup className="mb-3">
                                            <Button className={classes.button} variant="outline-secondary" onClick={handleMinus}>-</Button>
                                            <FormControl value={kuantitas} onChange={handleChange} />
                                            <Button className={classes.button} variant="outline-secondary" onClick={handlePlus}>+</Button>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
                                            Total Persediaan : {newobat.stock} {newobat.unit}
                                        </Typography>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <Button disabled={kuantitas === 0} onClick={handleKeranjang} style={{ backgroundColor: "#f7f7f7", color: "black" }} >Masukkan Keranjang</Button>
                                <Button disabled={kuantitas === 0} onClick={handleBeli} style={{ backgroundColor: "#92E3A9", color: "white", marginLeft: "5px", width: "80px" }}>Beli</Button>
                            </div>
                        </Col>
                    </Row>
                    <h2>Obat dan Vitamin Lain</h2>
                    <hr />
                    <Obat keyword={0} type={1} />
                </Container>
                <Copyright />
            </div>
        </div >
    );
};

export default DetailObat;