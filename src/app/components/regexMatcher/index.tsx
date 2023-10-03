import React from "react";
import {CardHeader, IconButton} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {Code, Google, MoreVert} from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const RegexMatcherWidget: React.FC<any> = () => {

    return (<>
        <CardContent sx={(theme) => ({fontFamily : "Fira Mono",flexDirection: 'column', display : "flex",flex :1,  gap : theme.spacing(2)})}>
            <Paper variant="outlined"
                sx={(theme) => ({
                    position: "sticky",
                    padding: "4px 16px",
                    boxSizing: 'border-box',
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    fontFamily : "Fira Mono"
                })}
            >
                <Typography sx={(theme) => ({ fontFamily : "Fira Mono"})} color={"primary"}>/</Typography>
                <InputBase
                    inputMode="text"
                    sx={(theme) => ({ml: 1, flex: 1,fontFamily : "Fira Mono"})}
                    placeholder="Regex pattern"
                    inputProps={{"aria-label": "search fonts", style: {paddingLeft: 10}}}
                />
                <Typography sx={(theme) => ({ fontFamily : "Fira Mono"})} color={"primary"}>/g</Typography>
            </Paper>
            <Paper variant="outlined"
                sx={(theme) => ({
                    position: "sticky",
                    padding: "4px 16px",
                    boxSizing: 'border-box',
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    flex : 1,
                })}>
                <InputBase multiline sx={(theme) =>({padding : theme.spacing(2), height: "100%", width : "100%"})} inputProps={{style : {fontFamily : "Fira Mono", height : "100%"}}}/>
            </Paper>
        </CardContent>
    </>)
}

export default RegexMatcherWidget;