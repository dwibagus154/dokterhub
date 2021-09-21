import { Button, Figure } from 'react-bootstrap';
import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import { Typography, Hidden } from '@material-ui/core';
import Dialogbox from '../../components/Atoms/DialogBox/DialogBox';
import { useLocalContext } from '../../context/context';


const Keranjang = () => {

    const [dialogKeranjang, setdialogKeranjang] = useState(false);
    const [dialogPembayaran, setdialogPembayaran] = useState(false)

    const [totalHarga, settotalHarga] = useState("116.100");
    const [totalKuantitas, settotalKuantitas] = useState(9);

    const [deleteState, setdeleteState] = useState(-1)
    const [deleteState1, setdeleteState1] = useState(-1)

    const { obats } = useLocalContext();

    const handleDelete = (id) => {
        setdeleteState(id);
        settotalKuantitas(totalKuantitas - id - 4);
        if (id === 0) {
            settotalHarga(37600);
        } else {
            settotalHarga(79500);
        }
    }
    const handleDelete1 = (id) => {
        setdeleteState1(id);
        settotalKuantitas(0);
        settotalHarga(0);
    }


    const handleClose = () => {
        // setidKeranjang(0);
        setdialogKeranjang(false);
    }
    const handleClose1 = () => {
        // setidKeranjang(0);
        setdialogPembayaran(false);
    }


    return (
        <div>
            <>
                <Dialogbox
                    openStateDialog={dialogKeranjang}
                    handleYesDialogBox={handleClose}
                    handleCloseDialogBox={handleClose}
                    role="keranjang"
                />
                <Dialogbox
                    openStateDialog={dialogPembayaran}
                    handleYesDialogBox={handleClose1}
                    handleCloseDialogBox={handleClose1}
                    role="pembayaran"
                />
                <div >
                    <NavBar />
                    <Container style={{ marginTop: "2%", paddingTop: "2%", paddingBottom: "2%", backgroundColor: "white" }}>
                        <Table responsive="sm">
                            <thead>
                                <tr >
                                    <th>Produk</th>
                                    <th>Nama</th>
                                    <th>Harga Satuan</th>
                                    <th>Kuantitas</th>
                                    <th>Total Harga</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    obats.map((obat, index) => {
                                        if (index < 2 && index !== deleteState) {
                                            if (deleteState1 === -1) {
                                                return (
                                                    <tr>
                                                        <td>{
                                                            <Figure>
                                                                <Figure.Image
                                                                    width={100}
                                                                    height={80}
                                                                    alt="171x180"
                                                                    src={obat.image} />

                                                            </Figure>
                                                        }</td>
                                                        <td>{obat.title}</td>
                                                        <td>{obat.price}</td>
                                                        <td>{index + 4}</td>
                                                        <td>{obat.price * (index + 4)}</td>
                                                        <td>
                                                            {
                                                                deleteState !== -1 ? <td><Button variant="danger" onClick={() => handleDelete1(index)}>Hapus</Button></td>
                                                                    : <td><Button variant="danger" onClick={() => handleDelete(index)}>Hapus</Button></td>
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        }
                                    })
                                }
                            </tbody>
                        </Table>
                    </Container>

                    <Container style={{ marginTop: "2%", paddingTop: "2%", paddingBottom: "2%", backgroundColor: "white" }}>
                        <div style={{ display: "inline" }}>
                            <Typography variant="h5" style={{ marginTop: "10px", display: "inline", marginRight: "10px" }}>
                                Total ({totalKuantitas} produk)
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: "10px", color: "#92E3A9", display: "inline" }}>
                                Rp {totalHarga}
                            </Typography>
                        </div>
                        <div>
                            <div style={{ justifyContent: "space-between", display: "inline-block", marginTop: "10px" }}>

                                <Hidden xsDown>
                                    <Button disabled={totalKuantitas === 0} style={{ backgroundColor: "#f7f7f7", color: "black" }} onClick={() => setdialogKeranjang(true)} >Gunakan Voucher</Button>
                                    <Button disabled={totalKuantitas === 0} style={{ backgroundColor: "#92E3A9", color: "white", marginLeft: "5px" }} onClick={() => setdialogPembayaran(true)}>Lanjut Pembayaran</Button>
                                </Hidden>
                                <Hidden smUp>
                                    <Button disabled={totalKuantitas === 0} style={{ backgroundColor: "#f7f7f7", color: "black", width: "60%" }} onClick={() => setdialogKeranjang(true)} >Gunakan Voucher</Button>
                                    <Button disabled={totalKuantitas === 0} style={{ backgroundColor: "#92E3A9", color: "white", width: "60%", marginTop: "10px" }} onClick={() => setdialogPembayaran(true)}>Lanjut Pembayaran</Button>
                                </Hidden>
                            </div>
                        </div>
                    </Container>

                </div>
            </>
        </div>
    );
};

export default Keranjang;