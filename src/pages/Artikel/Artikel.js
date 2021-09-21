import { Grid, Typography, Hidden } from '@material-ui/core';
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { useLocalContext } from '../../context/context';
import Copyright from "../../components/Copyright/Copyright"

const Artikel = (props) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const { blogs } = useLocalContext();
    let newblog;

    for (let i = 0; i < blogs.length; i++) {
        if (String(blogs[i].id) === props.match.params.id) {
            newblog = blogs[i];
        }
    }
    // console.log(blog);
    const handleLihatArtikel = () => {
        window.location.href = "/listartikel"
    }
    // console.log(props.match.params.id);
    return (
        <div>
            <NavBar />
            <Container>
                <Grid style={{ justifyContent: "center", marginTop: "30px" }} container spacing={1}>
                    <Grid item md={8} sm={8} xs={12}>
                        <h3>{newblog.title}</h3>
                        <Hidden smDown>
                            <img style={{ marginTop: "20px" }} src={newblog.image} alt="blog" width="80%" />
                        </Hidden>
                        <Hidden mdUp>
                            <img style={{ marginTop: "20px" }} src={newblog.image} alt="blog" width="100%" />
                        </Hidden>
                        <div style={{ marginTop: "20px" }}>
                            <Typography style={{ fontWeight: "600" }}>
                                {newblog.description.paragraf1}
                            </Typography>
                            <br />
                            <Typography>
                                {newblog.description.paragraf2}
                            </Typography>
                            <br />
                            <Typography>
                                {newblog.description.paragraf3}
                            </Typography>
                            <br />
                            <Typography>
                                {newblog.description.paragraf4}
                            </Typography>
                            <br />
                            <Typography>
                                {newblog.description.paragraf5}
                            </Typography>
                            <br />
                            <Typography>
                                Referensi:<br />
                                Centers for Disease Control and Prevention. Diakses pada 2021. <br />
                                Frequently Asked Questions about COVID-19 Vaccination.
                                Centers for Disease Control and Prevention. Diakses pada 2021. <br />
                                Understanding How COVID-19 Vaccines Work.
                                Centers for Disease Control and Prevention. Diakses pada 2021. <br />
                                What to Do if You Have an Allergic Reaction After Getting A COVID-19 Vaccine.
                                Covid19.go.id. Diakses pada 2021. <br /> Tanya Jawab UNICEF Diakses pada 2021. What to Do Before, During and After Getting Vaccinated for COVID-19.</Typography>
                            <br />

                        </div>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <h6>Artikel lainnya</h6>
                        <ListGroup variant="flush">
                            {blogs.map(blog => {
                                if (String(blog.id) !== props.match.params.id) {
                                    return (
                                        <ListGroup.Item style={{ marginTop: "15px" }}>
                                            <Link to={"/artikel/" + blog.id} style={{ textDecoration: "none", color: "black" }}>
                                                <Grid style={{ justifyContent: "center" }} container spacing={1}>
                                                    <Grid item lg={4} sm={6} xs={4}>
                                                        <img src={blog.image} alt="blog" width="70px" />
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
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <a href="/listartikel" style={{ textDecoration: "none" }}>Lihat Lebih Banyak</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Copyright />
        </div>
    );
};

export default Artikel;