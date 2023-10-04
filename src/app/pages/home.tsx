import React from "react";
import '@pages/styles/home.css';
import ColorWidget from "@components/colorWidget";
import GoogleFontWidget from "@components/googleFontWidget";
import {Drawer, Grid} from "@mui/material";
import Widget from "@components/widget";
import GlobalSearchBar from "@components/globalSearchBar";
import ThemeToggleButton from "@components/themeToggleButton";
import MarkdownEditorWidget from "@components/markdownEditorWidget";
import LiveEditorWidget from "@components/liveEditorWidget";
import {CodeIcon, ColorPickerIcon, FileCodeIcon, FontIcon, HashTag, MarkDownIcon} from "@app/utility/faUtility";
import RegexMatcherWidget from "@components/regexMatcherWidget";
import {useDispatch, useSelector} from "react-redux";
import {setIsDrawerOpen} from "@redux/reducers/drawerReducer";
import HashGeneratorWidget from "@components/hashGeneratorWidget";
import SearchAppBar from "@components/appBar";

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props: HomeProps) => {

    const dispatch = useDispatch();
    const isDrawerOpen = useSelector((state: any) => state.drawer.isOpen);

    return <>
        <Grid container sx={(theme) => ({
            boxSizing: 'border-box',
            background: theme.palette.background.default,
            flexDirection: 'column',
            height: '100%',
            width: "100%",
        })}>
            {/*<Grid container width="100%" sx={(theme) => ({*/}
            {/*    justifyContent: 'center',*/}
            {/*    alignItems: "center",*/}
            {/*    gap: theme.spacing(2),*/}
            {/*    background: theme.palette.background.paper,*/}
            {/*    padding: theme.spacing(2, 2),*/}
            {/*    width: "100%",*/}
            {/*    height: "fit-content",*/}
            {/*    boxShadow: theme.shadows[1]*/}
            {/*})}>*/}
            {/*    <GlobalSearchBar/>*/}

            {/*</Grid>*/}
            <SearchAppBar/>
            <Grid spacing={2} container sx={(theme) => ({
                background: theme.palette.background.default,
                padding: theme.spacing(0,2),
                marginTop: theme.spacing(2),
                flex: 1,
                justifyContent: "flex-start",
                flexWrap: 'wrap',
                boxSizing: "border-box"
            })} className="App">

                <Widget item xs={12} sm={12} md={6} lg={6} xl={6} title="Color Picker" icon={ColorPickerIcon}
                        component={ColorWidget} height={600}/>

                <Widget item xs={12} sm={12} md={6} lg={6} xl={6} title="Google Fonts" icon={FontIcon}
                        component={GoogleFontWidget} minHeight={600}
                        height={600}/>

                <Widget item xs={12} sm={12} md={6} lg={6} xl={6} title="Regex Matcher" icon={CodeIcon}
                        component={RegexMatcherWidget} minHeight={600}
                        height={'fit-content'}/>

                <Widget item xs={12} sm={12} md={6} lg={6} xl={6} title="Hash Generator" icon={HashTag}
                        component={HashGeneratorWidget} minHeight={600}
                        height={600}/>

                <Widget item xs={12} sm={12} md={12} lg={12} xl={12} title="Markdown editor" icon={MarkDownIcon}
                        component={MarkdownEditorWidget} height="auto"/>
                <Widget item xs={12} sm={12} md={12} lg={12} xl={12} title="Live editor" icon={FileCodeIcon}
                        component={LiveEditorWidget} height="760"/>
            </Grid>
        </Grid>
        <Drawer
            sx={(theme) => ({
                boxShadow: theme.shadows[3],
                boxSizing: 'border-box',
                '& .MuiDrawer-paperAnchorLeft': {
                    width: 'fit-content',
                    padding: theme.spacing(2),
                    boxSizing: 'border-box'
                }
            })}
            anchor={'left'}
            open={isDrawerOpen}
            onClose={() => dispatch(setIsDrawerOpen(false))}
            transitionDuration={250}
        >
            <Grid container sx={(theme) => ({
                justifyContent: 'center', padding: theme.spacing(2, 1), boxSizing: 'border-box'
            })}>
                <ThemeToggleButton/>
            </Grid>
        </Drawer>
    </>;
}

export default Home;