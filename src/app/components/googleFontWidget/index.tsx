import {Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton} from "@mui/material";
import React, {useState} from "react";
import {GoogleFontCard} from "./GoogleFontCard";
import {searchFonts} from "./googleFontsClient";
import SearchBar from "./searchBar";
import fonts from './fonts.json';
import {red} from "@mui/material/colors";
import {Google, MoreVert, OpenInNew, Settings} from "@mui/icons-material";

export default function GoogleFontWidget() {

    const [fontList, setFontList] = useState<any[]>(fonts.items);

    function handleClick(keyword: string) {
        const fonts = searchFonts(keyword);
        setFontList(fonts);
        console.log(fonts);
    }

    function handleChange(keyword: string) {
        const fonts = searchFonts(keyword);
        setFontList(fonts);
        console.log(fonts);
    }

    return (
        <>

            <CardContent
                sx={(theme) => ({
                    display: "flex",
                    gap: "10px",
                    padding: theme.spacing(2),
                    flexDirection: "column",
                    boxSizing: "border-box",
                    flex : 1,
                    height : 'calc(100% - 58px)'
                })}
            >
                <SearchBar
                    keyword={""}
                    onChange={handleChange}
                    onClick={handleClick}
                />
                <Grid
                    container
                    flexDirection="column"
                    flexWrap="nowrap"
                    sx={(theme) => ({
                        flex: "1",
                        gap: theme.spacing(1),
                        overflowY: "scroll",
                        height : '100%'
                    })}
                >
                    <Grid
                        container
                        flexDirection="column"
                        flexWrap="nowrap"
                        sx={(theme) => ({
                            gap: theme.spacing(1),
                        })}
                    >
                        {fontList.map((font) => {
                            return (
                                <GoogleFontCard font={font}/>
                            );
                        })}
                    </Grid>
                </Grid>
            </CardContent>
        </>
    );
}
