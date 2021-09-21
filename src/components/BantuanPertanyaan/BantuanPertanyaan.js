import { Typography, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocalContext } from '../../context/context';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    rootButton: {
        marginTop: "30px"
    },
    button: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#92E3A9",
            color: "white"

        },
        border: "2px solid #92E3A9",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    },
    buttonChoice: {
        height: "80px", width: "80%", marginBottom: "20px",
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#92E3A9",
            color: "white"

        },
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    },
    buttonSelected: {
        height: "80px", width: "80%", marginBottom: "20px",
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#92E3A9",
            color: "white",
        },
        backgroundColor: "#92E3A9",
        color: "white",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    },
    cardblog: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
            transform: 'translateY(3px)'
        },
        height: "8rem",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
    }
}));

const BantuanPertanyaan = () => {
    const [input, setinput] = useState({
        bantuan: "",
        nama: "",
        alamat: "",
        nomor: "",
        email: ""
    })
    const [tanya, settanya] = useState(0);
    const classes = useStyles();
    const history = useHistory();

    const handleChange = (e) => {
        switch (e.target.name) {
            case "nama":
                setinput({ ...input, nama: e.target.value })
                break;
            case "email":
                setinput({ ...input, email: e.target.value })
                break;
            case "nomor":
                setinput({ ...input, nomor: e.target.value })
                break;
            case "alamat":
                setinput({ ...input, alamat: e.target.value })
                break;
            default:
                break;
        }
    }

    const handleNext = (e) => {
        setinput({ ...input, bantuan: e.target.innerText })
        settanya(tanya + 1);
    }
    const handleBack = () => {
        settanya(tanya - 1);
    }
    const handlebacktohome = () => {
        history.push("/")
    }
    // console.log(input);
    switch (tanya) {
        case 0:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Anda Terkena Covid ? Butuh Bantuan Apa
                    </Typography>
                    <br />
                    <Row style={{ marginTop: "30px", marginRight: "10px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={handleNext} variant="outline" className={input.bantuan === 'TABUNG OKSIGEN' ? classes.buttonSelected : classes.buttonChoice}>Tabung Oksigen</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={handleNext} variant="outline" className={input.bantuan === 'OBAT ATAU VITAMIN' ? classes.buttonSelected : classes.buttonChoice}>Obat atau Vitamin</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={handleNext} variant="outline" className={input.bantuan === 'SEMBAKO' ? classes.buttonSelected : classes.buttonChoice}>Sembako</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Button onClick={handleNext} variant="outline" className={input.bantuan === 'AKSES RUMAH SAKIT' ? classes.buttonSelected : classes.buttonChoice}>Akses Rumah Sakit</Button>
                        </Col>
                    </Row>
                    <div className={classes.rootButton}>
                        <Button variant="outline-success" className={classes.button} onClick={handlebacktohome}>Back</Button>
                    </div>
                </div >
            );
        case 1:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Nama Lengkap Anda
                    </Typography>
                    <TextField name="nama" value={input.nama} onChange={handleChange} multiline style={{ marginTop: "50px", width: "50%" }} id="standard-basic1" />
                    <div className={classes.rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.nama === ""} onClick={handleNext} variant="outline" className={classes.button} onClick={handleNext}>Next</Button>
                    </div>
                </div >
            );
        case 2:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Masukkan Email Anda
                    </Typography>
                    <TextField name="email" value={input.email} onChange={handleChange} multiline style={{ marginTop: "50px", width: "50%" }} id="standard-basic1" />
                    <div className={classes.rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.email === ""} onClick={handleNext} variant="outline-success" className={classes.button} onClick={handleNext}>Next</Button>
                    </div>
                </div >
            );
        case 3:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Nomor Telepon yang Bisa Dihubungi
                    </Typography>
                    <TextField name="nomor" value={input.nomor} onChange={handleChange} multiline style={{ marginTop: "50px", width: "50%" }} id="standard-basic1" />
                    <div className={classes.rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.nomor === ""} onClick={handleNext} variant="outline-success" className={classes.button} onClick={handleNext}>Next</Button>
                    </div>
                </div >
            );
        case 4:
            return (
                <div>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto", marginRight: "35px" }}>
                        Lokasi Anda Sekarang (Provinsi, Kota, Alamat, Kode Pos)
                    </Typography>
                    <TextField name="alamat" value={input.alamat} onChange={handleChange} multiline style={{ marginTop: "50px", width: "50%" }} id="standard-basic1" />
                    <div className={classes.rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={classes.button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.alamat === ""} onClick={handleNext} variant="outline-success" className={classes.button} onClick={handleNext}>Next</Button>
                    </div>
                </div >
            );
        case 5:
            return (
                <div style={{ marginRight: "35px" }}>
                    <Typography variant="h4" display="block" style={{ fontFamily: "roboto" }}>
                        Permintaan anda akan kami proses, kami akan menghubungi lewat Email dan WA. Harap segera mengeceknya
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: "15px" }}>
                        Sistem kemungkinan full, sehingga permintaan anda sedikit terlambat. Jika dalam 5 menit anda tidak mendapat balasan, maka segera hubungi call center kami : 082145673421
                    </Typography>
                    <div className={classes.rootButton}>
                        <Button onClick={handlebacktohome} variant="outline-success" className={classes.button}>Kembali ke Halaman Utama</Button>
                    </div>
                </div >
            );
        default:
            break;
    }
};

export default BantuanPertanyaan;