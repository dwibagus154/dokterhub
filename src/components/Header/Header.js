import React from 'react';
import "./Header.css"
import { Container, Row, Col } from 'react-bootstrap';
import { Typography, Hidden } from '@material-ui/core';
import CardAction from '../Atoms/CardAction/CardAction';

const Header = () => {
    const actions = [
        {
            title: "BANTUAN CEPAT",
            image: "./images/bantuanAction.png",
            destination: "./bantuan"
        },
        {
            title: "DETEKSI PENYAKIT",
            image: "./images/anamnesisAction.png",
            destination: "./anamnesis"
        },
        {
            title: "BELI OBAT",
            image: "./images/shop.png",
            destination: "./obat"
        },
        {
            title: "BACA ARTIKEL",
            image: "./images/artikel.png",
            destination: "./listartikel"
        }
    ]
    return (
        <>
            <Hidden smDown>
                <div style={{
                    backgroundImage: "url('images/dokter.jpg')", height: "500px", backgroundSize: "cover",
                    paddingTop: "9.5rem", paddingBottom: "6rem", color: "#fff", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", marginBottom: "50px"
                }}>

                    < Container >
                        <div style={{ color: "black", fontSize: "2rem", lineHeight: "1.5rem", fontFamily: "sans-serif", marginBottom: "5px" }}>Solusi Untuk Masyarakat Indonesia</div>
                        <Row style={{ marginTop: "10px" }}>
                            <Col xs={5}>
                                <Typography style={{ marginTop: "15px", color: "black", fontSize: "1rem", marginBottom: "2rem" }}>
                                    Layanan untuk pertolongan cepat, konsultasi penyakit, beli obat, dan masih banyak lagi
                                </Typography>
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
                        <div style={{ color: "black", fontSize: "2rem", fontFamily: "sans-serif" }}>Solusi Untuk Masyarakat Indonesia</div>
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