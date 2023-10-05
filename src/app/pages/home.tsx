import React from "react";
import '@pages/styles/home.css';
import ColorWidget from "@components/colorWidget";
import GoogleFontWidget from "@components/googleFontWidget";
import {Drawer, Grid} from "@mui/material";
import Widget from "@components/widget";
import MarkdownEditorWidget from "@components/markdownEditorWidget";
import HtmlLiveEditorWidget from "@components/htmlLiveEditorWidget";
import {
    CodeIcon,
    ColorPickerIcon,
    FileCodeIcon,
    FontIcon,
    GithubIcon,
    HashTag,
    LinkedInIcon,
    MarkDownIcon
} from "@app/utility/faUtility";
import RegexMatcherWidget from "@components/regexMatcherWidget";
import {useDispatch, useSelector} from "react-redux";
import {setIsDrawerOpen} from "@redux/reducers/drawerReducer";
import HashGeneratorWidget from "@components/hashGeneratorWidget";
import SearchAppBar from "@components/appBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationBar from "@app/utility/notifier";

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
            minHeight: '100%',
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
                        component={HtmlLiveEditorWidget} height="760"/>
            </Grid>
        </Grid>
        <Drawer
            sx={(theme) => ({
                boxShadow: theme.shadows[3],
                boxSizing: 'border-box',
                '& .MuiDrawer-paperAnchorLeft': {
                    padding: theme.spacing(2),
                    boxSizing: 'border-box'
                }
            })}
            anchor={'bottom'}
            open={isDrawerOpen}
            onClose={() => dispatch(setIsDrawerOpen(false))}
            transitionDuration={250}
        >
            <Grid container sx={(theme) => ({
                justifyContent: 'center',alignItems: 'center', gap: theme.spacing(2, ), padding: theme.spacing(2, 2), boxSizing: 'border-box'
            })}>
                <Grid flexDirection="column" alignItems="center" container flex="1" gap="8px" justifyContent="center">
                    <Typography variant="body2" component="div">
                        Welcome to a developer's best friend! Packed with essential tools like a color picker, hash generator, markdown and HTML editors, regex matcher, and a font library, we're here to simplify your daily tasks and empower your coding journey. Say goodbye to time-consuming searches and hello to streamlined development – welcome to your new coding haven!
                    </Typography>
                    <Typography variant="body1" color={"primary"}>
                        Connect with me
                    </Typography>
                    <Grid container width="fit-content" sx={(theme) => ({
                        padding: theme.spacing(1),
                    })}>
                        <IconButton
                            color="primary"
                            onClick={() => window.open('https://github.com/lastbyte/', '_blank')}><GithubIcon/></IconButton>
                        <IconButton
                            color="primary"
                            onClick={() => window.open('https://www.linkedin.com/in/lastbyte/', '_blank')}><LinkedInIcon/></IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Drawer>
        <NotificationBar/>
    </>;
}

export default Home;