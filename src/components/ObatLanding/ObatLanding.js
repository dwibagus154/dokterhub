import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useLocalContext } from '../../context/context';
import CardObat from '../Atoms/CardObat/CardObat'
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardObat: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#92E3A9",
            color: "white",
            cursor: "pointer"

        },
        borderColor: "#92E3A9",
        color: "grey",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
        height: "18rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"
    }

}));


const ObatLanding = () => {
    const { obats } = useLocalContext();
    const classes = useStyles();
    const handleLihatObat = () => {
        window.location.href = "/obat"
    }
    const handleCart = () => {
        window.location.href = "/obat"
    }
    const typeObat = [
        "COVID-19", "BATUK", "FLU", "KULIT", "MATA", "LIHAT-SEMUA"
    ]
    return (
        <div>
            <Container style={{ marginTop: "20px" }}>
                <div style={{ justifyContent: "space-between", display: "flex" }}>
                    <Typography style={{ color: "black", fontSize: "2rem" }} >
                        Obat dan Vitamin
                    </Typography>

                </div>
                <hr />
                <br />
                <Row>
                    {obats.map((obat, index) => {
                        if (index < 5) {
                            return (
                                <Col lg={2} md={3} sm={4} xs={6} >
                                    <CardObat id={obat.id} image={obat.image} title={obat.title} rating={obat.rating} description={obat.description} price={obat.price} unit={obat.unit} />
                                </Col>
                            )
                        }
                    })}
                    {/* {typeObat.map(type => {
                        return ( */}
                    <Col lg={2} md={3} sm={4} xs={6} >
                        <Card className={classes.cardObat} onClick={handleCart}>
                            <div>
                                <Typography style={{ fontSize: "1.2rem" }} >
                                    Lihat Semua
                                </Typography>
                            </div>

                        </Card>
                    </Col>
                    {/* );
                    })} */}
                </Row>
                <br />
            </Container>
        </div>
    );
};

export default ObatLanding;