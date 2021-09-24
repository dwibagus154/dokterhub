import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import CardObat from '../Atoms/CardObat/CardObat';
import { useLocalContext } from '../../context/context';
const Obat = (props) => {
    const [selanjutnya, setselanjutnya] = useState(1)
    const { obats } = useLocalContext();
    const { keyword, type } = props;
    const [lihatLainnya, setlihatLainnya] = useState("");

    const handleNext = () => {
        setselanjutnya(selanjutnya + 1);
    }
    return (
        <>
            <Container>
                <br />
                <Row>
                    {obats.map((obat, index) => {
                        if (index > keyword - 1 && (index + 1) % type == 0) {
                            return (
                                <Col lg={2} md={3} sm={4} xs={6}>
                                    <CardObat
                                        id={obat.id}
                                        image={obat.image}
                                        title={obat.title}
                                        type={obat.type}
                                        rating={obat.rating}
                                        description={obat.description}
                                        price={obat.price}
                                        unit={obat.unit}
                                    />
                                </Col>
                            );
                        }
                    })}
                    {obats.map((obat, index) => {
                        return (
                            <Col lg={2} md={3} sm={4} xs={6}>
                                <CardObat
                                    id={obat.id}
                                    image={obat.image}
                                    title={obat.title}
                                    type={obat.type}
                                    rating={obat.rating}
                                    description={obat.description}
                                    price={obat.price}
                                    unit={obat.unit}
                                />
                            </Col>
                        );

                    })}
                    {
                        selanjutnya > 1 ?
                            obats.map((obat, index) => {
                                if (index > keyword - 1) {
                                    return (
                                        <Col lg={2} md={3} sm={4} xs={6}>
                                            <CardObat
                                                id={obat.id}
                                                image={obat.image}
                                                title={obat.title}
                                                type={obat.type}
                                                rating={obat.rating}
                                                description={obat.description}
                                                price={obat.price}
                                                unit={obat.unit}
                                            />
                                        </Col>
                                    );
                                }
                            })
                            : <></>
                    }
                    {
                        selanjutnya > 2 ?
                            obats.map((obat, index) => {
                                if (index > keyword - 1) {
                                    return (
                                        <Col lg={2} md={3} sm={4} xs={6}>
                                            <CardObat
                                                id={obat.id}
                                                image={obat.image}
                                                title={obat.title}
                                                type={obat.type}
                                                rating={obat.rating}
                                                description={obat.description}
                                                price={obat.price}
                                                unit={obat.unit}
                                            />
                                        </Col>
                                    );
                                }
                            })
                            : <></>
                    }
                    {
                        selanjutnya > 3 ?
                            obats.map((obat, index) => {
                                if (index > keyword - 1) {
                                    return (
                                        <Col lg={2} md={3} sm={4} xs={6}>
                                            <CardObat
                                                id={obat.id}
                                                image={obat.image}
                                                title={obat.title}
                                                type={obat.type}
                                                rating={obat.rating}
                                                description={obat.description}
                                                price={obat.price}
                                                unit={obat.unit}

                                            />
                                        </Col>
                                    );
                                }
                            })
                            : <></>
                    }
                    {
                        selanjutnya > 4 ?
                            obats.map((obat, index) => {
                                if (index > keyword - 1) {
                                    return (
                                        <Col lg={2} md={3} sm={4} xs={6}>
                                            <CardObat
                                                id={obat.id}
                                                image={obat.image}
                                                title={obat.title}
                                                type={obat.type}
                                                rating={obat.rating}
                                                description={obat.description}
                                                price={obat.price}
                                                unit={obat.unit}

                                            />
                                        </Col>
                                    );
                                }
                            })
                            : <></>
                    }
                </Row>

                <br />
                {
                    selanjutnya !== 5 && type === 1 ?
                        <div style={{ textAlign: "center" }}>
                            <Button onClick={handleNext} style={{ width: "40%", backgroundColor: "#92E3A9", display: "inline-block", borderRadius: "10px" }}>Selanjutnya</Button>
                        </div> : <></>
                }
            </Container>
        </>
    );
};

export default Obat;