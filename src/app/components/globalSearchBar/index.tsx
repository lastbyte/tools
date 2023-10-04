import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import Card from "@mui/material/Card";
import {useDispatch, useSelector} from "react-redux";
import {setIsDrawerOpen} from "@redux/reducers/drawerReducer";

export default function GlobalSearchBar() {

    const dispatch = useDispatch();
    const isDrawerOpen = useSelector((state : any) => state.drawer.isOpen);
    return (
        <Card variant="outlined"
              sx={(theme) => ({background : theme.palette.background.default, p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: '500px', width: "100%"})}
        >
            <IconButton sx={{p: '10px'}} aria-label="menu" onClick={() => dispatch(setIsDrawerOpen(!isDrawerOpen))}>
                <MenuIcon/>
            </IconButton>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search Widgets"
                inputProps={{'aria-label': 'search commands'}}
            />
            <IconButton color='primary' type="button" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Card>
    );
}