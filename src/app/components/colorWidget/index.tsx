import {AddOutlined, Colorize, ContentCopyRounded, Google, MoreVert, Settings} from "@mui/icons-material";
import {CardHeader, Chip, Grid, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {SketchPicker} from "react-color";
import tinycolor from "tinycolor2";
import {ColorVariant} from "./colorVariant";
import MenuIcon from "@mui/icons-material/Menu";

export default function ColorWidget() {
    const [selectedColor, setSelectedColor] = React.useState("#1b5");
    const [colorPallete, setColorPallete] = React.useState(["#1b5"]);

    return (
        <>
            <CardContent
                sx={{
                    display: "flex",
                    gap: "10px",
                    height : "calc(100% - 58px)",
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
                    <SketchPicker
                        width="auto"
                        disableAlpha={false}
                        color={selectedColor}
                        onChange={(e) => {
                            console.log(e);
                            setSelectedColor(tinycolor(e.hsl).toRgbString());
                        }}
                    />
                    <Grid
                        container
                        flexWrap="wrap"
                        flex="1"
                        width="auto"
                        sx={(theme) => ({gap: theme.spacing(1)})}
                    >
                        <Chip
                            sx={{width: "fit-content", flex: "1"}}
                            label={tinycolor(selectedColor).toHexString()}
                            onClick={() => {
                            }}
                            onDelete={() => {
                            }}
                            deleteIcon={<ContentCopyRounded/>}
                        />
                        <Chip
                            sx={{width: "fit-content", flex: "1"}}
                            label={tinycolor(selectedColor).toRgbString()}
                            onClick={() => {
                            }}
                            onDelete={() => {
                            }}
                            deleteIcon={<ContentCopyRounded/>}
                        />
                        <Chip
                            sx={{width: "fit-content", flex: "1"}}
                            label={tinycolor(selectedColor).toHslString()}
                            onClick={() => {
                            }}
                            onDelete={() => {
                            }}
                            deleteIcon={<ContentCopyRounded/>}
                        />
                    </Grid>
                    <Grid container sx={(theme) => ({gap: theme.spacing(1)})}>
                        <Grid width={"60%"}>
                            <ColorVariant
                                color={selectedColor}
                                setColor={setSelectedColor}
                                height={32}
                            />
                        </Grid>
                        <Button
                            variant="outlined"
                            sx={{height: "32px", flex: 1}}
                            endIcon={<AddOutlined/>}
                            onClick={() => {
                                const newPallete = [...colorPallete];
                                newPallete.push(selectedColor);
                                setColorPallete(newPallete);
                            }}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
                <Grid container
                    sx={(theme) => ({
                        gap: theme.spacing(2),
                        flexDirection: "column",
                        width: "100%",
                        overflow : 'scroll',
                        flexWrap : "nowrap"
                    })}
                >
                    <Typography variant="button" sx={(theme) => ({ position : "sticky"})}>
                        PALLETE
                    </Typography>
                    {colorPallete.map((color) => (
                        <ColorVariant
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
