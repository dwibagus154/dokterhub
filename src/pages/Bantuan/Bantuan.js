import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import BantuanPertanyaan from '../../components/BantuanPertanyaan/BantuanPertanyaan.js';


const Bantuan = () => {
    return (
        <div>
            <NavBar />
            <div style={{ height: "500px" }}>
                <Hidden smDown>
                    <Grid container spacing={3}>
                        <Grid item xs={6} style={{ backgroundImage: `url('./images/bantuan.jpg')`, backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", height: "600px", marginTop: "-30px" }}>
                        </Grid>
                        <Grid item xs={6} style={{ marginTop: "80px" }}>
                            <BantuanPertanyaan />
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <div style={{ marginLeft: "10px", marginTop: "40px" }}>
                        <BantuanPertanyaan />
                    </div>
                </Hidden>
            </div>
        </div >
    );
};

export default Bantuan;