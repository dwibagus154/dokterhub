import { Typography } from '@material-ui/core';
import React from 'react';

const Copyright = () => {
    return (
        <div style={{ height: "50px" }}>
            <div style={{ marginTop: '20px' }}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'All rights reserved © dokterhub.com '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: "5px" }}>
                    {'Semua gambar dan data diambil dari preferensi farmaku.com, alodokter.com, dan halodoc.com'}
                </Typography>
            </div>
        </div>
    );
};

export default Copyright;