import React, { useState } from 'react';
import "./Header.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Typography, Hidden } from '@material-ui/core';
import CardAction from '../Atoms/CardAction/CardAction';

const Header = () => {
    const actions = [
        {
            title: "CARI OBAT",
            image: "./images/shop.png",
            destination: "./obat"
        },
        {
            title: "ARTIKEL",
            image: "./images/artikel.png",
            destination: "./listartikel"
        },
        {
            title: "BANTUAN COVID-19",
            image: "./images/bantuanAction.png",
            destination: "./bantuan"
        },
        {
            title: "CARI TAU PENYAKIT",
            image: "./images/anamnesisAction.png",
            destination: "./anamnesis"
        }
    ]
    const [keyword, setkeyword] = useState("");
    const handleChange = (e) => {
        setkeyword(e.target.value);
    }
    return (
        <>
            <Hidden smDown>
                <div style={{
                    backgroundImage: "url('images/dokter.jpg')", height: "500px", backgroundSize: "cover",
                    paddingTop: "4rem", paddingBottom: "6rem", color: "#fff", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", marginBottom: "50px"
                }}>

                    < Container >
                        <div style={{ color: "black", fontSize: "2rem", lineHeight: "1.5rem", fontFamily: "sans-serif", marginBottom: "5px" }}>Layanan Kesehatan Terbaik di Indonesia</div>
                        <Row style={{ marginTop: "10px" }}>
                            <Col xs={5}>
                                <Typography style={{ marginTop: "15px", color: "black", fontSize: "1rem", marginBottom: "2rem" }}>
                                    Website memiliki fitur pertolongan cepat COVID-19, mencari tau penyakit atau konsultasi, mencari obat, ratusan artikel untuk dibaca, dan masih banyak lagi
                                </Typography>
                                <Row style={{ marginBottom: "30px", justifyContent: "space-between" }}>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <Form>
                                            <Form.Control onChange={handleChange} value={keyword} style={{ width: "100%", display: "inline-block", borderRadius: "10px" }} placeholder="Cari di DokterHub" />
                                        </Form>
                                    </Col>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <Button onClick={() => window.location.href = "/listartikel"} style={{ backgroundColor: "#92E3A9" }}>Cari</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                            </Col>
                        </Row>

                        <Row>
                            <Hidden mdDown>
                                <Col sm={12} md={8}>
                                    <Row>
                                        {actions.map(act => {
                                            return (
                                                <Col xs={2}>
                                                    <CardAction title={act.title} image={act.image} destination={act.destination} />
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </Col>
                            </Hidden>
                            <Hidden lgUp>
                                <Col sm={12} md={12}>
                                    <Row>
                                        {actions.map(act => {
                                            return (
                                                <Col xs={2}>
                                                    <CardAction title={act.title} image={act.image} destination={act.destination} />
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </Col>
                            </Hidden>
                            <Col>
                            </Col>
                        </Row>
                    </Container >
                </div >
            </Hidden>
            <Hidden mdUp>
                <div style={{
                    height: "400px", backgroundSize: "cover",
                    paddingTop: "1rem", color: "#fff", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll",
                }}>

                    < Container >
                        <div style={{ color: "black", fontSize: "2rem", fontFamily: "sans-serif" }}>Layanan Kesehatan Terbaik di Indonesia</div>
                        <Row>
                            <Typography style={{ marginTop: "15px", color: "black", fontSize: "1rem", marginBottom: "2rem" }}>
                                Layanan untuk pertolongan cepat, konsultasi penyakit, beli obat, dan masih banyak lagi
                            </Typography>

                        </Row>

                        <Row>
                            <Col sm={12} md={12}>
                                <Row>
                                    {actions.map(act => {
                                        return (
                                            <Col xs={3}>
                                                <CardAction title={act.title} image={act.image} destination={act.destination} />
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container >
                </div >
            </Hidden>
        </>
    );
};

export default Header;