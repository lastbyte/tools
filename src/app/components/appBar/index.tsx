import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {setIsDrawerOpen} from "@redux/reducers/drawerReducer";
import {GitHub, LinkedIn} from "@mui/icons-material";
import {Grid} from "@mui/material";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {

    const dispatch = useDispatch();
    const isDrawerOpen = useSelector((state: any) => state.drawer.isOpen);
    return (
        <AppBar position="relative" elevation={5}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{mr: 2}}
                    onClick={() => {
                        dispatch(setIsDrawerOpen(!isDrawerOpen))
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    ToolBox
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search widgets"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
                <Grid container width="fit-content" sx={(theme) => ({
                    padding: theme.spacing(1),
                    paddingLeft: theme.spacing(2),
                })}>
                    <IconButton
                        onClick={() => window.open('https://github.com/lastbyte', '_blank')}><GitHub/></IconButton>
                    <IconButton
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        onClick={() => window.open('https://www.linkedin.com/in/lastbyte/', '_blank')}><LinkedIn/></IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}