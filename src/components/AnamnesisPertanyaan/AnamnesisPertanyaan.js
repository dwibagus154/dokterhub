import { Typography, TextField, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocalContext } from '../../context/context';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    rootButton: {
        marginTop: "20px"
    },
    button: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#92E3A9",
            color: "white"

        },
        border: "2px solid #92E3A9",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    },
    buttonChoice: {
        height: "80px", marginBottom: "30px", width: "80%",
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#92E3A9",
            color: "white"

        },
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    },
    buttonSelected: {
        height: "80px", width: "80%", marginBottom: "20px",
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            color: "white"
        },
        backgroundColor: "#92E3A9",
        color: "white",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    },
    cardblog: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
            transform: 'translateY(3px)',
            cursor: "pointer"
        },
        height: "8rem",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
    }

}));

const AnamnesisPertanyaan = () => {
    const [input, setinput] = useState({
        dimana: "",
        kapan: "",
        bagaimana: "",
        sering: "",
        makin: "",
        reda: "",
        penyerta: "",
        riwayat: "",
        keluarga: "",
        lingkungan: ""
    })
    const [tanya, settanya] = useState(0);
    const classes = useStyles();
    const history = useHistory();

    const handleChange = (e) => {
        switch (e.target.name) {
            case "riwayat":
                setinput({ ...input, riwayat: e.target.value })
                break;
            case "keluarga":
                setinput({ ...input, keluarga: e.target.value })
                break;
            case "lingkungan":
                setinput({ ...input, lingkungan: e.target.value })
                break;
            case "penyerta":
                setinput({ ...input, penyerta: e.target.value })
                break;
            default:
                break;
        }
    }
    const handleNext1 = () => {
        settanya(tanya + 1);
    }

    const handleNext = (type, e) => {
        switch (type) {
            case "dimana":
                setinput({ ...input, dimana: e.target.innerText })
                break;
            case "kapan":
                setinput({ ...input, kapan: e.target.innerText })
                break;
            case "bagaimana":
                setinput({ ...input, bagaimana: e.target.innerText })
                break;
            case "sering":
                setinput({ ...input, sering: e.target.innerText })
                break;
            case "makin":
                setinput({ ...input, makin: e.target.innerText })
                break;
            case "reda":
                setinput({ ...input, reda: e.target.innerText })
                break;
            default:
                break;
        }
        settanya(tanya + 1);
    }
    const handleBack = () => {
        settanya(tanya - 1);
    }
    const handlebacktohome = () => {
        window.location.href = "/";
    }
    const handleCart = () => {
        window.location.href = "../obat"
    }
    // console.log(input);
    switch (tanya) {
        case 0:
            return (
                <div>
                    <Typography variant="h5" display="block" style={{ fontFamily: "roboto" }}>
                        MULAI MENCARI TAHU PENYEBAB KELUHAN ANDA
                    </Typography>

                    <div className={classes.rootButton}>
                        <Button onClick={handleNext1} variant="outline-success" className={classes.button}>MULAI</Button>
                    </div>
                </div >
            );
        case 1:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Di bagian tubuh mana terjadi keluhan ?
                    </Typography>
                    <Row style={{ marginTop: "40px", marginRight: "10px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("dimana", e)} variant="outline" className={input.dimana === 'Sekitar Kepala' ? classes.buttonSelected : classes.buttonChoice}>Sekitar Kepala</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("dimana", e)} variant="outline" className={input.dimana === 'Sekitar Badan' ? classes.buttonSelected : classes.buttonChoice}>Sekitar Badan</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("dimana", e)} variant="outline" className={input.dimana === 'Sekitar Tangan' ? classes.buttonSelected : classes.buttonChoice}>Sekitar Tangan</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("dimana", e)} variant="outline" className={input.dimana === 'Sekitar Kaki' ? classes.buttonSelected : classes.buttonChoice}>Sekitar Kaki</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("dimana", e)} variant="outline" className={input.dimana === 'Organ Dalam' ? classes.buttonSelected : classes.buttonChoice}>Organ Dalam</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("dimana", e)} variant="outline" className={input.dimana === 'Yang Lainnya' ? classes.buttonSelected : classes.buttonChoice}>Yang Lainnya</Button>
                        </Col>
                    </Row>
                    <div className={classes.rootButton}>
                        <Button variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                    </div>
                </div >
            );
        case 2:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Mulai sejak kapan dikeluhkan
                    </Typography>
                    {/* <TextField name="curahhujan" value={input.curahhujan} onChange={handleChange} multiline style={{ marginTop: "40px", width: "50%" }} id="standard-basic1" /> */}
                    <br />
                    <Row style={{ marginTop: "40px", marginRight: "10px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("kapan", e)} variant="outline" className={input.kapan === '1 Hari' ? classes.buttonSelected : classes.buttonChoice}>1 Hari</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("kapan", e)} variant="outline" className={input.kapan === '3 Hari' ? classes.buttonSelected : classes.buttonChoice}>3 Hari</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("kapan", e)} variant="outline" className={input.kapan === 'Lebih 3 Hari' ? classes.buttonSelected : classes.buttonChoice}>Lebih 3 Hari</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("kapan", e)} variant="outline" className={input.kapan === 'Lebih 1 Minggu' ? classes.buttonSelected : classes.buttonChoice}>Lebih 1 Minggu</Button>
                        </Col>
                    </Row>

                    <div className={classes.rootButton}>
                        <Button variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                    </div>
                </div >
            );
        case 3:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Bagaimana sensasi keluhannya
                    </Typography>
                    <br />
                    <Row style={{ marginTop: "40px", marginRight: "10px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("bagaimana", e)} variant="outline" className={input.bagaimana === 'Tidak Terlalu Nyeri' ? classes.buttonSelected : classes.buttonChoice}>Tidak Terlalu Nyeri</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("bagaimana", e)} variant="outline" className={input.bagaimana === 'Nyeri Sekali' ? classes.buttonSelected : classes.buttonChoice}>Nyeri Sekali</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("bagaimana", e)} variant="outline" className={input.bagaimana === 'Biasa Saja' ? classes.buttonSelected : classes.buttonChoice}>Biasa Saja</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("bagaimana", e)} variant="outline" className={input.bagaimana === 'Yang Lainnya' ? classes.buttonSelected : classes.buttonChoice}>Yang Lainnya</Button>
                        </Col>
                    </Row>
                    <div className={classes.rootButton}>
                        <Button variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                    </div>
                </div >
            );
        case 4:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Seberapa sering muncul keluhannya
                    </Typography>
                    <br />
                    <Row style={{ marginTop: "40px", marginRight: "10px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("sering", e)} variant="outline" className={input.sering === 'Kadang Kadang' ? classes.buttonSelected : classes.buttonChoice}>Kadang Kadang</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("sering", e)} variant="outline" className={input.sering === 'Di Waktu Tertentu' ? classes.buttonSelected : classes.buttonChoice}>Di Waktu Tertentu</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("sering", e)} variant="outline" className={input.sering === 'Setiap Saat' ? classes.buttonSelected : classes.buttonChoice}>Setiap Saat</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("sering", e)} variant="outline" className={input.sering === 'Sehabis Aktivitas' ? classes.buttonSelected : classes.buttonChoice}>Sehabis Aktivitas</Button>
                        </Col>
                    </Row>
                    <div className={classes.rootButton}>
                        <Button variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                    </div>
                </div >
            );
        case 5:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Selama kurun waktu munculnya gejala, keluhannya makin keras atau mereda
                    </Typography>
                    <br />
                    <Row style={{ marginTop: "40px", marginRight: "10px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("makin", e)} variant="outline" className={input.makin === 'Makin Keras' ? classes.buttonSelected : classes.buttonChoice}>Makin Keras</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("makin", e)} variant="outline" className={input.makin === 'Mereda' ? classes.buttonSelected : classes.buttonChoice}>Mereda</Button>
                        </Col>
                    </Row>
                    <div className={classes.rootButton}>
                        <Button variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                    </div>
                </div >
            );
        case 6:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Ada/tidak hal yang meredakan atau memperberat keluhan
                    </Typography>
                    <Row style={{ marginTop: "40px", marginRight: "10px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("reda", e)} variant="outline" className={input.reda === 'Ada' ? classes.buttonSelected : classes.buttonChoice}>Ada</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={(e) => handleNext("reda", e)} variant="outline" className={input.reda === 'Tidak' ? classes.buttonSelected : classes.buttonChoice}>Tidak</Button>
                        </Col>
                    </Row>
                    <div className={classes.rootButton}>
                        <Button variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                    </div>
                </div >
            );
        case 7:
            return (
                <div>
                    <Typography variant="h6" display="block" style={{ fontFamily: "roboto", marginTop: "-20px" }}>
                        Gejala penyerta lainnya
                    </Typography>
                    <Form.Control as="textarea" name="penyerta" value={input.penyerta} onChange={handleChange} multiline style={{ marginTop: "5px", marginBottom: "15px", width: "70%" }} id="standard-basic1" />
                    <Typography variant="h6" display="block" style={{ fontFamily: "roboto" }}>
                        Riwayat penyakit terdahulu
                    </Typography>
                    <Form.Control as="textarea" name="riwayat" value={input.riwayat} onChange={handleChange} multiline style={{ marginTop: "5px", marginBottom: "15px", width: "70%" }} id="standard-basic1" />
                    <Typography variant="h6" display="block" style={{ fontFamily: "roboto" }}>
                        Riwayat kesehatan keluarga
                    </Typography>
                    <Form.Control as="textarea" name="keluarga" value={input.keluarga} onChange={handleChange} multiline style={{ marginTop: "5px", marginBottom: "15px", width: "70%" }} id="standard-basic1" />
                    <Typography variant="h6" display="block" style={{ fontFamily: "roboto" }}>
                        Riwayat lingkungan sosial
                    </Typography>
                    <Form.Control as="textarea" name="lingkungan" value={input.lingkungan} onChange={handleChange} multiline style={{ marginTop: "5px", marginBottom: "15px", width: "70%" }} id="standard-basic2" />

                    <div className={classes.rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.penyerta === "" || input.riwayat === "" || input.keluarga === "" || input.lingkungan === ""} onClick={handleNext1} variant="outline-success" className={classes.button}>Next</Button>
                    </div>
                </div >
            );
        // case 8:
        //     return (
        //         <div>
        //             <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
        //                 Riwayat penyakit terdahulu
        //             </Typography>
        //             <TextField name="riwayat" value={input.riwayat} onChange={handleChange} multiline style={{ marginTop: "50px", width: "50%" }} id="standard-basic1" />

        //             <div className={classes.rootButton}>
        //                 <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
        //                 <Button disabled={input.riwayat === ""} onClick={handleNext1} variant="outline-success" className={classes.button} >Next</Button>
        //             </div>
        //         </div >
        //     );
        // case 9:
        //     return (
        //         <div>
        //             <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
        //                 Riwayat kesehatan keluarga
        //             </Typography>
        //             <TextField name="keluarga" value={input.keluarga} onChange={handleChange} multiline style={{ marginTop: "50px", width: "50%" }} id="standard-basic1" />
        //             <div className={classes.rootButton}>
        //                 <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
        //                 <Button disabled={input.keluarga === ""} onClick={handleNext} variant="outline-success" className={classes.button} >Next</Button>
        //             </div>
        //         </div >
        //     );
        // case 10:
        //     return (
        //         <div>
        //             <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
        //                 Riwayat lingkungan sosial
        //             </Typography>
        //             <TextField name="lingkungan" value={input.lingkungan} onChange={handleChange} multiline style={{ marginTop: "50px", width: "50%" }} id="standard-basic2" />
        //             <div className={classes.rootButton}>
        //                 <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
        //                 <Button disabled={input.lingkungan === ""} onClick={handleNext1} variant="outline-success" className={classes.button} >Next</Button>
        //             </div>
        //         </div >
        //     );
        case 8:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Anda Kemungkinan Terkena COVID-19
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px", marginRight: "35px" }}>
                        Dari hasil anamnesis yang dilakukan secara online ini. Anda memenuhi gejala gejala bagi orang yang penderita covid. Jangan Panik ! segera periksakan ke dokter untuk mendapatkan hasil yang lebih akurat
                        Jika benar teridentifikasi covid, segera hubungi satgas covid-19 untuk mendapatkan pemantauan.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h6" display="block" style={{ fontFamily: "roboto" }}>
                        Anda mungkin butuh ini
                    </Typography>

                    <Row style={{ marginTop: "15px" }}>
                        <Col lg={2} xs={4} sm={3} md={2}>
                            <Card className={classes.cardblog} onClick={handleCart}>
                                <div>
                                    <img src="./images/shop.png" style={{ width: "4.5rem", borderRadius: "14rem", marginTop: "5px" }} />
                                </div>

                                <Card.Body style={{ height: "3rem", marginTop: "-10px" }}>
                                    <Typography style={{ color: "black", fontSize: "10px", fontWeight: "20px" }}>Obat COVID-19</Typography>
                                </Card.Body>
                            </Card >
                        </Col>
                        <Col lg={2} xs={4} sm={3} md={2}>
                            <Card className={classes.cardblog} onClick={handleCart}>
                                <div>
                                    <img src="./images/artikel.png" style={{ width: "4.5rem", borderRadius: "14rem", marginTop: "5px" }} />
                                </div>

                                <Card.Body style={{ height: "3rem", marginTop: "-10px" }}>
                                    <Typography style={{ color: "black", fontSize: "10px", fontWeight: "20px" }}>Artikel COVID-19</Typography>
                                </Card.Body>
                            </Card >
                        </Col>
                    </Row>
                    <div className={classes.rootButton}>
                        <Button onClick={handlebacktohome} variant="outline-success" className={classes.button}>Kembali ke Halaman Utama</Button>
                    </div>
                </div >
            );
        default:
            break;
    }
};

export default AnamnesisPertanyaan;