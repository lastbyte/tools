import {Card, CardContent, Grid} from "@mui/material";
import React, {useState} from "react";
import {GoogleFontCard} from "./GoogleFontCard";
import {searchFonts} from "./googleFontsClient";
import SearchBar from "./searchBar";

export default function FontAwesomeIconWidget() {

    const [iconList, setIconList] = useState<any[]>([]);

    function handleClick(keyword: string) {
        const fonts = searchFonts(keyword);
        setIconList(fonts);
        console.log(fonts);
    }

    function handleChange(keyword: string) {
        const fonts = searchFonts(keyword);
        setIconList(fonts);
        console.log(fonts);
    }

    return (
        <CardContent
            sx={(theme) => ({
                display: "flex",
                gap: "10px",
                padding: theme.spacing(2),
                flexDirection: "column",
                boxSizing: "border-box",
                height : "100%"
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
                    {iconList.map((font) => {
                        return (
                            <GoogleFontCard font={font}/>
                        );
                    })}
                </Grid>
            </Grid>
        </CardContent>
    );
}
