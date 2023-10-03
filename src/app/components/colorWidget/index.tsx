import {AddOutlined, Colorize, ContentCopyRounded, Google, MoreVert, Settings} from "@mui/icons-material";
import {CardHeader, Chip, Divider, Grid, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {SketchPicker} from "react-color";
import tinycolor from "tinycolor2";
import {ColorVariant} from "./colorVariant";
import MenuIcon from "@mui/icons-material/Menu";
import copy from "copy-to-clipboard";
import {ColorVariantVertical} from "@components/colorWidget/colorVariantVertical";

export default function ColorWidget() {
    const [selectedColor, setSelectedColor] = React.useState("#1b5");
    const [colorPallete, setColorPallete] = React.useState(["#1b5"]);

    function removeFromPallete(index : number) {
        console.log("Removing color ", colorPallete, index);
        setColorPallete(colorPallete.slice(0,index).concat(colorPallete.slice(index+1)))
    }
    return (
        <>
            <CardContent
                sx={{
                    display: "flex",
                    gap: "10px",
                    height: "calc(100% - 58px)",
                    flexDirection: "row",
                    boxSizing: "border-box",
                }}
            >
                <Grid sx={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    boxSizing: "border-box",
                }}>
                    <Grid container flexDirection={"row"} flexWrap={"nowrap"} gap={8} sx={{ marginLeft : 0}}>
                        <Grid container sx={(theme) => ({flex : 1, boxSizing : 'border-box'})}>
                        <SketchPicker
                            width="auto"
                            disableAlpha={false}
                            color={selectedColor}
                            onChange={(e) => {
                                console.log(e);
                                setSelectedColor(tinycolor(e.hsl).toRgbString());
                            }}
                        />
                        </Grid>
                        <Grid container sx={(theme) => ({width  : '50px', gap: theme.spacing(1)})}>
                            <ColorVariantVertical
                                direction="column"
                                color={selectedColor}
                                setColor={setSelectedColor}
                                height={32}
                                width={50}
                            />
                            <Button
                                variant={"contained"}
                                sx={{minWidth : "50px",fontSize:"24px", height: "32px", width: "50px", boxSizing : 'border-box'}}
                                onClick={() => {
                                    const newPallete = [...colorPallete];
                                    newPallete.push(selectedColor);
                                    setColorPallete(newPallete);
                                }}
                            >
                                <AddOutlined/>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        flexWrap="wrap"
                        flexDirection="column"
                        flex="1"
                        width="auto"
                        sx={(theme) => ({gap: theme.spacing(1)})}
                    >
                        <Chip
                            sx={{ flex: "1"}}
                            label={tinycolor(selectedColor).toHexString()}
                            onClick={() => {
                                copy(tinycolor(selectedColor).toHexString())
                            }}
                            onDelete={() => {
                                copy(tinycolor(selectedColor).toHexString())
                            }}
                            deleteIcon={<ContentCopyRounded/>}
                        />
                        <Chip
                            sx={{flex: "1"}}
                            label={tinycolor(selectedColor).toRgbString()}
                            onClick={() => {
                                copy(tinycolor(selectedColor).toRgbString())
                            }}
                            onDelete={() => {
                                copy(tinycolor(selectedColor).toRgbString())
                            }}
                            deleteIcon={<ContentCopyRounded/>}
                        />
                        <Chip
                            sx={{ flex: "1"}}
                            label={tinycolor(selectedColor).toHslString()}
                            onClick={() => {
                                copy(tinycolor(selectedColor).toHslString());
                            }}
                            onDelete={() => {
                                copy(tinycolor(selectedColor).toHslString());
                            }}
                            deleteIcon={<ContentCopyRounded/>}
                        />
                    </Grid>
                </Grid>
                <Divider orientation="vertical"/>
                <Grid container
                      sx={(theme) => ({
                          gap: theme.spacing(2),
                          flexDirection: "column",
                          width: "100%",
                          overflow: 'scroll',
                          flexWrap: "nowrap"
                      })}
                >
                    <Typography variant="h6" sx={(theme) => ({position: "sticky"})}>
                        PALLETE
                    </Typography>
                    {colorPallete.map((color,index) => (
                        <ColorVariant
                            colorPalleteIndex={index}
                            removeFromPallete={removeFromPallete}
                            direction="row"
                            key={color}
                            color={color}
                            setColor={setSelectedColor}
                            height={50}
                        />
                    ))}
                </Grid>
            </CardContent>
        </>
    );
}
