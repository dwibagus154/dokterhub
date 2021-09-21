import { Typography } from '@material-ui/core';
import React from 'react';

const Copyright = () => {
    return (
        <div style={{ height: "50px" }}>
            <div style={{ marginTop: '20px' }}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © SKUYDOKTER '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </div>
        </div>
    );
};

export default Copyright;