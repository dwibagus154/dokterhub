import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    cardblog: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
            transform: 'translateY(3px)'
        },
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
    }

}));
const CardAction = (props) => {
    const { image, title, destination } = props;
    const classes = useStyles();
    return (
        <Link to={destination} style={{ textDecoration: "none" }}>
            <Card className={classes.cardblog}>
                <div>
                    <img src={image} style={{ width: "100%", borderRadius: "14rem", marginTop: "5px" }} />
                </div>

                <Card.Body style={{ height: "50%", marginTop: "-10px" }}>
                    <Hidden xsDown>
                        <Typography style={{ color: "black", fontSize: "12px", fontWeight: "20px" }}>{title}</Typography>
                    </Hidden>
                    <Hidden smUp>
                        <Typography style={{ color: "black", fontSize: "6px", fontWeight: "20px" }}>{title}</Typography>
                    </Hidden>
                </Card.Body>
            </Card >
        </Link>
    );
};

export default CardAction;