import { Typography } from '@material-ui/core';
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useLocalContext } from '../../context/context';
import CardBlog from '../Atoms/CardBlog/CardBlog'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardblog: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
        },
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
        marginBottom: "20px"
    },
    imgBlog: {
        '&:hover': {
            cursor: "pointer"
        }
    },
    cardBlog: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#92E3A9",
            color: "white",
            cursor: "pointer"

        },
        borderColor: "#92E3A9",
        color: "grey",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
        height: "25.8rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"
    }


}));

const Blog = () => {
    const classes = useStyles();
    const { blogs } = useLocalContext();

    const handleLihatArtikel = () => {
        window.location.href = "/listartikel"
    }
    return (
        <>
            <Container>
                <div style={{ justifyContent: "space-between", display: "flex" }}>
                    <Typography style={{ color: "black", fontSize: "2rem" }} >
                        Artikel Kesehatan Untuk Anda
                    </Typography>
                </div>
                <hr />
                <br />
                <Row>
                    {blogs.map((blog, index) => {
                        return (
                            <Col lg={4} md={6} sm={12} xs={12} >
                                <CardBlog id={blog.id} image={blog.image} title={blog.title} description={blog.description} />
                            </Col>
                        )

                    })}
                    <Col lg={4} md={6} sm={12} xs={12} >
                        <Card onClick={handleLihatArtikel} className={classes.cardBlog}>
                            <div>
                                <Typography style={{ fontSize: "1.8rem" }} >
                                    LIHAT LEBIH BANYAK
                                </Typography>
                            </div>
                        </Card >
                    </Col>
                </Row>
                <br />
                {/* <div style={{ textAlign: "center" }}>
                    <Row>
                        <Col lg={12} sm={12} md={12} xs={12}>
                            <Button onClick={handleLihatArtikel} style={{ backgroundColor: "#92E3A9", display: "inline-block", borderRadius: "10px" }}>Lihat Artikel Lainnya</Button>
                        </Col>
                    </Row>
                </div> */}
            </Container>
        </>
    );
};

export default Blog;