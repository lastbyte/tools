import React, {useState} from "react";
import '@pages/styles/home.css';
import ColorWidget from "@components/colorWidget";
import GoogleFontWidget from "@components/googleFontWidget";
import {Grid, SwipeableDrawer} from "@mui/material";
import Widget from "@components/widget";
import GlobalSearchBar from "@components/globalSearchBar";
import ThemeToggleButton from "@components/themeToggleButton";
import {CodeTwoTone, Colorize, Google} from "@mui/icons-material";
import MarkdownEditorWidget from "@components/markdownEditorWidget";
import CodeSnippetsWidget from "@components/codeSnippetsWidget";
import {CodeIcon, ColorPickerIcon, FileCodeIcon, FontIcon, MarkDownIcon} from "@app/utility/faUtility";
import RegexMatcherWidget from "@components/regexMatcherWidget";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {setIsDrawerOpen} from "@redux/reducers/drawerReducer";

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props: HomeProps) => {

    const dispatch = useDispatch();
    const isDrawerOpen = useSelector((state : any) => state.drawer.isOpen);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                dispatch(setIsDrawerOpen(open));
            };
    return <>
        <Grid container sx={(theme) => ({
            gap: theme.spacing(3),
            boxSizing : 'border-box',
            background: theme.palette.background.default,
            flexDirection: 'column',
            height: '100%',
            width: "100%",
            flexWrap: 'nowrap'
        })}>
            <Grid container width="100%" sx={(theme) => ({
                justifyContent: 'center',
                alignItems : "center",
                gap : theme.spacing(2),
                background: theme.palette.background.paper,
                padding : theme.spacing(2,2),
                width: "100%",
                height : "fit-content",
                boxShadow : theme.shadows[5]
            })}>
                <GlobalSearchBar/>

            </Grid>
            <Grid spacing={4} container sx={(theme) => ({
                background: theme.palette.background.default,
                padding : theme.spacing(2),
                flex : 1,
                justifyContent: "flex-start",
                alignSelf: 'stretch',
                flexWrap: 'wrap',
                boxSizing : "border-box"
            })} className="App">
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} boxSizing="border-box">
                    <Widget title="Color Picker" icon={ColorPickerIcon} widget={ColorWidget} height={600}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} boxSizing="border-box">
                    <Widget title="Google Fonts" icon={FontIcon} widget={GoogleFontWidget} minHeight={600} height={600}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} boxSizing="border-box">
                    <Widget title="Regex Matcher" icon={CodeIcon} widget={RegexMatcherWidget} minHeight={600} height={600}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} boxSizing="border-box">
                    <Widget title="Markdown editor" icon={MarkDownIcon} widget={MarkdownEditorWidget} height="auto"/>
                </Grid>
            </Grid>
        </Grid>
            <SwipeableDrawer
                sx={(theme) => ({
                    width : '400px',
                    boxShadow : theme.shadows[3],
                    boxSizing : 'border-box',
                    '& .MuiDrawer-paperAnchorLeft' : {
                        width : '400px'
                    }})}
                anchor={'left'}
                open={isDrawerOpen}
                onClose={() => dispatch(setIsDrawerOpen(false))}
                onOpen={() => dispatch(setIsDrawerOpen(true))}
            >
                <Grid container sx={(theme) => ({
                    justifyContent : 'center', padding : theme.spacing(2, 1),boxSizing : 'border-box'
                })}>
                    <ThemeToggleButton/>
                </Grid>
            </SwipeableDrawer>
    </>;
}

export default Home;