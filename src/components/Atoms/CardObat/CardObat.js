import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardObat: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
        },
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)'
    },
    imgObat: {
        '&:hover': {
            cursor: "pointer"
        },
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
const ubahHarga = (harga) => {
    return harga.substring(0, harga.length - 3) + '.' + harga.substring(harga.length - 3, harga.length);
}

const handleObat = (id) => {
    window.location.href = "/detail/" + id;
}

const CardObat = (props) => {
    const { id, image, title, description, price, unit } = props;
    const classes = useStyles();

    return (
        <div style={{ marginBottom: "20px" }}>
            <Card className={classes.cardObat} style={{ height: "17.5rem" }}>
                <Card.Img onClick={() => handleObat(id)} variant="top" style={{ height: "45%" }} className={classes.imgObat} src={image} />
                <Card.Body>
                    <Card.Title style={{ height: "30%" }}>
                        <Typography style={{ fontSize: '14px', fontWeight: "1005" }}>
                            {title}
                        </Typography>
                    </Card.Title>

                    <Rating size="small" name="read-only" value={2} readOnly />
                    <Card.Text style={{ fontSize: "12px", height: "10%", marginTop: "20px" }}>
                        Rp {ubahHarga(String(price))},00 / {unit}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardObat;