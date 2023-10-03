import {Box, Divider, Grid} from "@mui/material";
import _ from "lodash";
import React from "react";
import tinycolor from "tinycolor2";
import Typography from "@mui/material/Typography";
import copy from "copy-to-clipboard";
import Button from "@mui/material/Button";
import {AddOutlined, Delete} from "@mui/icons-material";

interface ColorVariantProps {
    color: string;
    setColor?: any;
    colorPalleteIndex: number;
    height: string | number;
    direction: 'column' | 'row';
    removeFromPallete: any;
}

export function ColorVariant(props: ColorVariantProps) {
    return (
        <Grid container flexDirection="column" gap="8px" width="100%" flexWrap="nowrap">
            <Typography>{tinycolor(props.color).toHexString()}</Typography>
            <Divider />
            <Grid container
                  width="100%"
                  flexWrap="nowrap"
                  sx={{boxSizing: "border-box", alignItems: "center"}}>
                <Grid
                    container
                    flexDirection={props.direction}
                    width="calc(100% - 50px)"
                    flexWrap="nowrap"
                    sx={{boxSizing: "border-box"}}
                >
                    {_.range(-25, 30, 5).map((value, _) => {
                        const colorString =
                            value < 0
                                ? tinycolor(props.color).brighten(Math.abs(value)).toRgbString()
                                : tinycolor(props.color).darken(value).toRgbString();
                        return (
                            <Box
                                key={value}
                                onClick={() => {
                                    props.setColor && props.setColor(colorString);
                                    copy(tinycolor(colorString).toHexString())
                                }}
                                sx={(theme) => ({
                                    boxSizing: "border-box",
                                    border: value === 0 ? "2px solid white" : "none",
                                    background: colorString,
                                    width: "9%",
                                    height: props.height,
                                })}
                            ></Box>
                        );
                    })}
                </Grid>
                <Button
                    variant={"text"}
                    sx={(theme) => ({
                        color: theme.palette.error.dark,
                        minWidth: "50px",
                        fontSize: "24px",
                        height: "32px",
                        width: "50px",
                        boxSizing: 'border-box'
                    })}
                    onClick={() => {
                        props.removeFromPallete(props.colorPalleteIndex);
                    }}
                >
                    <Delete/>
                </Button>
            </Grid>
        </Grid>
    );
}
