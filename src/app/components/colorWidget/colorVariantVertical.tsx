import {Box, Divider, Grid} from "@mui/material";
import _ from "lodash";
import React from "react";
import tinycolor from "tinycolor2";
import Typography from "@mui/material/Typography";
import copy from "copy-to-clipboard";
import {setIsNotificationIsOpen, setMessage} from "@redux/reducers/noitificationReducer";
import {useDispatch} from "react-redux";

interface ColorVariantProps {
    color: string;
    setColor?: any;
    height?: string | number;
    width?: string | number;
    direction: 'column' | 'row';
}

export function ColorVariantVertical(props: ColorVariantProps) {
    const dispatch = useDispatch();

    return (
        <Grid container flexDirection="column" sx={{height : "calc(100% - 50px)", alignItems : "center"}} flexWrap="nowrap">
            <Grid
                container
                flexDirection='column'
                flex={1}
                flexWrap="nowrap"
                sx={{boxSizing: "border-box"}}
            >
                {_.range(-25, 30, 5).map((value) => {
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
                                dispatch(setMessage(`color ${tinycolor(colorString).toHexString()} copied to clipboard`))
                                dispatch(setIsNotificationIsOpen(true));
                            }}
                            sx={(theme) => ({
                                boxSizing: "border-box",
                                border: value === 0 ? "2px solid white" : "none",
                                background: colorString,
                                width: props.width,
                                height:"9%",
                                '&:hover' : {
                                    border : "1px solid #fefefe"
                                }
                            })}
                        ></Box>
                    );
                })}
            </Grid>
        </Grid>
    );
}
