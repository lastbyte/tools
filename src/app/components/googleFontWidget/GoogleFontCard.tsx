import {CopyAll, OpenInNew} from "@mui/icons-material";
import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, IconButton} from "@mui/material";
import React, {useState} from "react";
import copy from "copy-to-clipboard";

interface GoogleFontCardProps {
    font: any;
    style?: any;
}

export function GoogleFontCard(props: GoogleFontCardProps) {

    const [preview, setPreview] = useState(false);

    const text = (type: "LINK" | "IMPORT") =>
        type === "LINK"
            ? `<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=${encodeURI(
                props?.font?.family
            )}&display=swap" rel="stylesheet">`
            : `@import url('https://fonts.googleapis.com/css2?family=${encodeURI(props?.font?.family)}&display=swap');`;

    return (
        <Card variant="outlined">
            <CardHeader sx={(theme) => ({padding: theme.spacing(1, 2)})} titleTypographyProps={{variant: "body1"}}
                        title={props.font.family} action={
                <IconButton aria-label="settings">
                    <OpenInNew fontSize="small"/>
                </IconButton>
            }/>
            <CardContent sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                width: "100%",
                boxSizing: 'border-box',
                padding: theme.spacing(1, 2),
                gap: theme.spacing(2),
            })}>
                <Divider/>
                {preview ? <iframe
                    loading="lazy"
                    width={"100%"}
                    height="120px"
                    style={{
                        border: "none",
                        background: "white",
                        borderRadius: "4px",
                    }}
                    srcDoc={`${text("LINK")} <style>body{margin : 4px; font-family : '${
                        props.font.family
                    }';font-size : 18px} p { margin : 0;word-break: break-all;letter-spacing : 1px;
    white-space: normal;}</style><p>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</p>`}
                ></iframe> : <Grid container sx={(theme) => ({
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "120px"
                })}><Button onClick={() => setPreview(true)} variant="contained"> Show preview </Button></Grid>}

                <Divider/>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    copy(text("LINK"))
                }} startIcon={<CopyAll/>} variant="outlined" size="small">
                    &lt;link&gt;
                </Button>
                <Button onClick={() => {
                    copy(text("IMPORT"))
                }} startIcon={<CopyAll/>} variant="outlined" size="small">
                    @import
                </Button>
            </CardActions>
        </Card>
    );
}
