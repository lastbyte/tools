import {CopyAll, OpenInNew} from "@mui/icons-material";
import {Button, Card, CardContent, Grid, IconButton, Typography} from "@mui/material";
import React from "react";

interface GoogleFontCardProps {
    font: any;
    style?: any;
}

export function GoogleFontCard(props: GoogleFontCardProps) {

    const text = (type: "LINK" | "IMPORT") =>
        type === "LINK"
            ? `<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=${encodeURI(
                props?.font?.family
            )}&display=swap" rel="stylesheet">`
            : `<style>
    @import url('https://fonts.googleapis.com/css2?family=${encodeURI(
                props?.font?.family
            )}&display=swap');
    </style>`;

    return (
        <>
            <CardContent sx={(theme) => ({display: "flex", flexDirection : "column", width: "100%", gap: theme.spacing(2),padding: theme.spacing(2,0)})}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Typography
                            variant="body1"
                            sx={(theme) => ({
                                color: theme.palette.primary.main,
                            })}
                        >
                            {props.font.family}
                        </Typography>
                        <IconButton size="small">
                            <OpenInNew sx={{fontSize: '16px'}} color="primary" onClick={() => {
                                window.postMessage("openUri", '')
                            }}/>
                        </IconButton>
                    </Grid>
                    <iframe
                        width={"100%"}
                        height={"fit-content"}
                        style={{
                            border: "none",
                            background: "white",
                            borderRadius: "4px",
                        }}
                        srcDoc={`${text("LINK")} <style>body{ font-family : '${
                            props.font.family
                        }';font-size : 18px} p { word-break: break-all;letter-spacing : 1px;
    white-space: normal;}</style><p>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</p>`}
                    ></iframe>
                    <Grid container justifyContent="space-evenly">
                        <Button startIcon={<CopyAll/>} variant="outlined" size="small">
                            &lt;link&gt;
                        </Button>
                        <Button startIcon={<CopyAll/>} variant="outlined" size="small">
                            @import
                        </Button>
                    </Grid>
            </CardContent>
        </>
    );
}
