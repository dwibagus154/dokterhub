import React from 'react';
import { Card } from 'react-bootstrap';
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
    }

}));

const ubahDescription = (deskripsi) => {
    let des = deskripsi.split(" ");
    let output = "";
    if (des.length >= 6) {
        for (let i = 0; i < 7; i++) {
            output += des[i] + " ";
        }
        output += "...";
        return output;
    } else {
        return deskripsi;
    }
}

const handleBlog = (id) => {
    window.location.href = "/artikel/" + id;
}

const CardBlog = (props) => {
    const { id, image, title, description } = props;
    const classes = useStyles();
    return (
        <Card className={classes.cardblog}>
            <Card.Img onClick={() => handleBlog(id)} className={classes.imgBlog} variant="top" src={image} />
            <Card.Body>
                <Card.Title style={{ height: "3rem" }}>{title}</Card.Title>
                <Card.Text>
                    {/* {description.paragraf1.length > 50 ? description.paragraf1.substring(0, 50) + " ..." : description.paragraf1} */}
                    {ubahDescription(description.paragraf1)}
                </Card.Text>
                <a href={"/artikel/" + id} style={{ textDecoration: "none" }}>Baca selengkapnya</a>
            </Card.Body>
        </Card >
    );
};

export default CardBlog;