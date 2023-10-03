import React from "react";
import '@pages/styles/home.css';
import ColorWidget from "@components/colorWidget";
import GoogleFontWidget from "@components/googleFontWidget";
import {Grid} from "@mui/material";
import Widget from "@components/widget";
import GlobalSearchBar from "@components/globalSearchBar";
import RegexMatcherWidget from "@components/regexMatcher";
import ThemeToggleButton from "@components/themeToggleButton";
import {CodeTwoTone, Colorize, Google} from "@mui/icons-material";
import MarkdownEditorWidget from "@components/markdownEditorWidget";
import CodeSnippetsWidget from "@components/codeSnippetsWidget";
import {CodeIcon, ColorPickerIcon, FileCodeIcon, FontIcon, MarkDownIcon} from "@app/utility/faUtility";

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return <>
        <Grid container sx={(theme) => ({
            gap: theme.spacing(4),
            boxSizing : 'border-box',
            background: theme.palette.background.default,
            flexDirection: 'column',
            height: '100%',
            width: "100%",
            flexWrap: 'nowrap'
        })}>
            <Grid container width="100%" sx={(theme) => ({
                justifyContent: 'space-between',
                gap : theme.spacing(2),
                background: theme.palette.background.paper,
                padding : theme.spacing(2,2),
                width: "100%",
                height : "fit-content",
                boxShadow : theme.shadows[5]
            })}>
                <GlobalSearchBar/>
                <ThemeToggleButton/>
            </Grid>
            <Grid spacing={4} container sx={(theme) => ({
                background: theme.palette.background.default,
                padding : theme.spacing(1),
                flex : 1,
                justifyContent: "flex-start",
                alignSelf: 'stretch',
                flexWrap: 'wrap',
                boxSizing : "border-box"
            })} className="App">
                <Grid item xs={12} sm={8} md={8} lg={6} xl={6} boxSizing="border-box">
                    <Widget title="Color Picker" icon={ColorPickerIcon} widget={ColorWidget} height={600}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3} xl={3} boxSizing="border-box">
                    <Widget title="Google Fonts" icon={FontIcon} widget={GoogleFontWidget} minHeight={600} height={600}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3} xl={3} boxSizing="border-box">
                    <Widget title="Regex Matcher" icon={CodeIcon} widget={RegexMatcherWidget} minHeight={600} height={600}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} boxSizing="border-box">
                    <Widget title="Markdown editor" icon={MarkDownIcon} widget={MarkdownEditorWidget} height="auto"/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} boxSizing="border-box">
                    <Widget title="Code Snippets" icon={FileCodeIcon} widget={CodeSnippetsWidget} height="auto"/>
                </Grid>
            </Grid>
        </Grid>
    </>;
}

export default Home;