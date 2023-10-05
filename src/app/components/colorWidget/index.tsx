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
import {setIsNotificationIsOpen, setMessage} from "@redux/reducers/noitificationReducer";
import {useDispatch} from "react-redux";

export default function ColorWidget() {
    const [selectedColor, setSelectedColor] = React.useState("#1b5");
    const [colorPallete, setColorPallete] = React.useState(["#1b5"]);
    const dispatch = useDispatch();

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
                    height: "fit-content",
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
                        <Grid container sx={(theme) => ({flex : 1, boxSizing : 'border-box', maxWidth: "400px"})}>
                        <SketchPicker
                            width="260px"
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
                                sx={{ display : {sm : 'none !important', md : 'flex'}, minWidth : "50px",fontSize:"24px", height: "32px", width: "50px", boxSizing : 'border-box'}}
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
                        {[tinycolor(selectedColor).toHexString(),tinycolor(selectedColor).toRgbString(),tinycolor(selectedColor).toHslString()].map((color) => {
                          return   <Chip
                              key={color}
                              sx={(theme) => ({flex: "1",padding : theme.spacing(1)})}
                              label={<Typography variant="body1">{color}</Typography>}
                              onClick={() => {
                                  try {
                                      copy(color)
                                      dispatch(setMessage(`color ${color} copied to clipboard`))
                                      dispatch(setIsNotificationIsOpen(true));
                                  }catch(e){}
                              }}
                              onDelete={() => {
                                  try {
                                      copy(color)
                                      dispatch(setMessage(`color ${color} copied to clipboard`))
                                      dispatch(setIsNotificationIsOpen(true));
                                  }catch(e){

                                  }

                              }}
                              deleteIcon={<ContentCopyRounded/>}
                          />;
                        })}
                    </Grid>
                </Grid>
                <Divider orientation="vertical"/>
                <Grid container
                      sx={(theme) => ({
                          gap: theme.spacing(2),
                          flexDirection: "column",
                          width: "100%",
                          overflow: 'scroll',
                          flexWrap: "nowrap",
                          display : {sm : 'none', md : 'flex'}
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
