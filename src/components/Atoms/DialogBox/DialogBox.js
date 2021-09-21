import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
    dialogBox: {
        width: "300px",
        maxWidth: "100%",
        minHeight: "175px",
        padding: "15px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },

    dialogDeleteButton: {
        width: "125px",
        backgroundColor: theme.palette.error.main,
        color: "white",
        border: `1px solid ${theme.palette.error.main}`,
        "&:focus, &:hover": {
            backgroundColor: theme.palette.error.dark,
            color: "white",
            border: `1px solid ${theme.palette.error.dark}`,
        },
    },
    dialogCancelButton: {
        width: "125px",
        backgroundColor: "white",
        color: theme.palette.error.main,
        border: `1px solid ${theme.palette.error.main}`,
        "&:focus, &:hover": {
            backgroundColor: "white",
            color: theme.palette.error.dark,
            border: `1px solid ${theme.palette.error.dark}`,
        },
    },
    checkboxModeButton: {
        color: "#757575",
        backgroundColor: "rgb(241 243 244)",
        "&:focus, &:hover": {
            backgroundColor: theme.palette.action.disabledBackground,
            color: "black",
        },
        marginRight: "3px",
    },
    checkboxIconPrimary: {
        width: "125px",
        backgroundColor: "white",
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:focus, &:hover": {
            backgroundColor: "white",
            color: theme.palette.error.dark,
            border: `1px solid ${theme.palette.error.dark}`,
        },

    },

}));

export default function Dialogbox(props) {
    const classes = useStyles();
    const { openStateDialog, handleYesDialogBox, handleCloseDialogBox, role } = props


    return (
        <div>
            <Dialog
                open={openStateDialog}
                onClose={handleCloseDialogBox}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    className={classes.dialogBox}
                >
                    <Grid
                        item
                        container
                        justify="center"
                        style={{ marginBottom: "20px" }}
                    >
                        <Typography variant="h6" gutterBottom align="center">
                            {role === "logout" ?
                                "Anda Ingin Logout"
                                : role === "keranjang" ? "Anda tidak memiliki voucher"
                                    : role === "inKeranjang" ? "Barang anda telah dimasukkan ke dalam keranjang"
                                        : role === "pembayaran" ? "Instruksi Pembayaran"
                                            : role === "dialogForm" ? "Pertanyaan belum disederhanakan"
                                                : role === "authregister" ? "Username telah terdaftar atau password anda tidak cocok"
                                                    : role === "authlogin" ? "Username atau password anda salah"
                                                        : role === "delete" ? "Anda yakin ingin menghapus barang ini ?"
                                                            : "Anda Harus Login Terlebih Dahulu"
                            }
                        </Typography>
                    </Grid>
                    {role === "pembayaran" ?
                        <Grid
                            item
                            container
                            style={{ marginBottom: "20px" }}
                        >
                            <Typography variant="body2" gutterBottom align="leftr">
                                1. Lakukan pembayaran ke nomor rekening yang tertera dibawah ini
                            </Typography>
                            <Typography variant="body2" gutterBottom >
                                No rekening : 635467283636 (BCA)
                            </Typography>
                            <Typography variant="body2" gutterBottom >
                                Atas nama : Farming
                            </Typography>
                            <Typography variant="body2" gutterBottom align="leftr">
                                2. Tunggu hingga status pembayaran berubah
                            </Typography>
                            <Typography variant="body2" gutterBottom >
                                3. Jika terdapat pertanyaan silahkan hubungi nomor dibawah ini
                            </Typography>
                            <Typography variant="body2" gutterBottom >
                                0812345678
                            </Typography>
                        </Grid>
                        : role === "isLogin" ?
                            <Grid
                                item
                                container
                                style={{ marginBottom: "20px" }}
                            >
                                <Typography variant="body2" gutterBottom align="leftr">
                                    Website masih prototype gunakan email dan password berikut
                                </Typography>
                                <Typography variant="body2" gutterBottom >
                                    email : dwi@gmail.com, password: 123
                                </Typography>
                               
                            </Grid>
                            : <></>}
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item>
                            <Button
                                onClick={handleYesDialogBox}
                                startIcon={<CheckCircleIcon />}
                                className={role === "logout" ? classes.dialogDeleteButton : classes.checkboxIconPrimary}
                            >
                                {role === "delete" ? "Iya" : "Oke"}
                            </Button>
                        </Grid>

                        {role !== "authregister" && role !== "authlogin" && role !== "keranjang" && role !== "inKeranjang" && role !== "pembayaran" && role !== "dialogForm" ?
                            <Grid item>
                                <Button
                                    onClick={handleCloseDialogBox}
                                    startIcon={<CancelIcon />}
                                    className={classes.dialogCancelButton}
                                >
                                    {role === "isLogin" ? "Kembali" : "Tidak"}
                                </Button>
                            </Grid>
                            : <></>

                        }
                    </Grid>
                </Grid>
            </Dialog>
        </div >
    );
}