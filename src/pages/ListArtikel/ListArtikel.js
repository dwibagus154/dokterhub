import { Grid, Hidden, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Container, ListGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Copyright from '../../components/Copyright/Copyright';
import NavBar from '../../components/NavBar/NavBar';
import { useLocalContext } from '../../context/context';

const ListArtikel = () => {
    const [keyword, setkeyword] = useState("");
    const { blogs } = useLocalContext();
    const handleChange = (e) => {
        setkeyword(e.target.value);
    }
    return (
        <div>

            <NavBar />
            <Container>

                <Grid style={{ justifyContent: "center", marginTop: "10px" }} container spacing={1}>
                    <Grid item md={8} sm={8} xs={12} >
                        <h3>Daftar Artikel</h3>
                        <Hidden smDown>
                            <img style={{ marginTop: "20px", marginBottom: "20px" }} src='/images/blogs/blogs1.jpg' alt="blog" width="80%" />
                        </Hidden>
                        <Hidden mdUp>
                            <img style={{ marginTop: "20px", marginBottom: "20px" }} src='/images/blogs/blogs1.jpg' alt="blog" width="100%" />
                        </Hidden>

                        <h3>Efek Alkohol Jangka Pendek yang Harus Diwaspadai</h3>
                        <p>Efek alkohol jangka pendek dapat dirasakan sejak tegukan pertama. Efek pertama yang biasanya muncul adalah pusing dan mual. Namun, semakin banyak minuman beralkohol dikonsumsi, semakin banyak pula efek yang dapat dirasakan dan tentunya perlu diwaspadai ...</p>
                        <a href={"/artikel/1"} style={{ textDecoration: "none" }}>Baca selengkapnya</a>
                        <Hidden smDown>
                            <div style={{ marginTop: "30px" }}>
                                <Form>
                                    <Form.Control onChange={handleChange} value={keyword} style={{ width: "50%", display: "inline-block", borderRadius: "10px" }} placeholder="Cari Artikel" />
                                </Form>
                            </div>
                        </Hidden>
                        <Hidden mdUp>
                            <>
                            </>
                        </Hidden>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <h6 style={{ marginTop: "10px" }}>Artikel Populer Lainnya</h6>
                        <ListGroup variant="flush">
                            {blogs.map((blog, index) => {
                                if (index > 0) {
                                    return (
                                        <ListGroup.Item style={{ marginTop: "15px" }}>
                                            <Link to={"/artikel/" + blog.id} style={{ textDecoration: "none", color: "black" }}>
                                                <Grid style={{ justifyContent: "center" }} container spacing={1}>
                                                    <Grid item lg={4} sm={6} xs={4}>
                                                        <img src={blog.image} alt="blog" width="100%" />
                                                    </Grid>
                                                    <Grid item sm={8} sm={6} xs={8}>
                                                        <Typography>
                                                            {blog.title.length > 30 ? blog.title.substring(0, 30) + "..." : blog.title}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Link>
                                        </ListGroup.Item>
                                    );
                                }
                            })}
                        </ListGroup>

                    </Grid>
                </Grid>
                <Hidden xsDown>
                    <Grid item md={8} sm={8} xs={12} >
                        <ListGroup variant="flush" style={{ marginTop: "20px" }}>
                            {blogs.map((blog, index) => {
                                if (index > keyword.length) {
                                    return (
                                        <ListGroup.Item>
                                            <Grid style={{ justifyContent: "center" }} container spacing={1}>
                                                <Grid item sm={6} md={4}>
                                                    <Link to={"/artikel/" + blog.id} style={{ textDecoration: "none", color: "black" }}>
                                                        <img src={blog.image} width="100%" />
                                                    </Link>
                                                </Grid>
                                                <Grid item sm={6} md={8}>
                                                    <strong>{blog.title}</strong>
                                                    <p>{blog.description.paragraf1}</p>
                                                    <a href={"/artikel/" + blog.id} style={{ textDecoration: "none" }}>Baca selengkapnya</a>
                                                </Grid>
                                            </Grid>
                                        </ListGroup.Item>
                                    );
                                }
                            })}
                        </ListGroup>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <></>
                </Hidden>
            </Container>
            <Copyright />
        </div >
    );
};

export default ListArtikel;