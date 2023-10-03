import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";

interface SearchBarProps {
    onClick: any;
    onChange: any;
    keyword: string;
}

export default function SearchBar(props: SearchBarProps) {
    const [keyword, setKeyword] = React.useState(props.keyword);
    return (
        <Paper
            sx={{
                position: "sticky",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}
        >

            <InputBase
                inputMode="text"
                onChange={(event) => {
                    setKeyword(event.target.value);
                }}
                onKeyDown={(event) => {
                    console.log(event.key);
                    if (event.key === "Enter") {
                        props.onClick(keyword);
                    }
                }}
                sx={{ml: 1, flex: 1}}
                placeholder="Search fonts"
                value={keyword}
                inputProps={{"aria-label": "search fonts"}}
            />

            <IconButton
                color="primary"
                sx={{p: "10px"}}
                aria-label="search"
                onClick={() => props.onClick(keyword)}
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
