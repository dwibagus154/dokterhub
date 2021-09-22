import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Typography, Hidden } from '@material-ui/core';
import CardAction from '../Atoms/CardAction/CardAction';

const Action = () => {
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
    const [keyword, setkeyword] = useState("");
    const handleChange = (e) => {
        setkeyword(e.target.value);
    }
    return (
        <>
            <Hidden smDown>
                < Container >
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
            </Hidden>
            <Hidden mdUp>
                < Container >
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

            </Hidden>
        </>
    );
};

export default Action;