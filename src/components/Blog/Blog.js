import { Typography } from '@material-ui/core';
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useLocalContext } from '../../context/context';
import CardBlog from '../Atoms/CardBlog/CardBlog'
const Blog = () => {

    const { blogs } = useLocalContext();

    const handleLihatArtikel = () => {
        window.location.href = "/listartikel"
    }
    return (
        <>
            <Container>
                <div style={{ justifyContent: "space-between", display: "flex" }}>
                    <Typography style={{ color: "black", fontSize: "2rem" }} >
                        Lihat Artikel Kesehatan Untuk Anda
                    </Typography>
                </div>
                <hr />
                <br />
                <Row>
                    {blogs.map((blog, index) => {
                        if (index < 3) {
                            return (
                                <Col lg={4} md={6} sm={12} xs={12} >
                                    <CardBlog id={blog.id} image={blog.image} title={blog.title} description={blog.description} />
                                </Col>
                            )
                        }
                    })}
                </Row>
                <br />
                <div style={{ textAlign: "center" }}>
                    <Row>
                        <Col lg={12} sm={12} md={12} xs={12}>
                            <Button onClick={handleLihatArtikel} style={{ backgroundColor: "#92E3A9", display: "inline-block", borderRadius: "10px" }}>Lihat Artikel Lainnya</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Blog;