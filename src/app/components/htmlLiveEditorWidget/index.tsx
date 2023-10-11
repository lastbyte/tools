import React, {useEffect, useRef} from "react";
import {Grid, Tab, Tabs} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import 'highlight.js/styles/github-dark.css';
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab, setCssContent, setHtmlContent, setJsContent} from "@redux/reducers/liveEditorReducer";
import CodeFlask from 'codeflask';
import useWindowResize from "@app/hooks/windowResizeHook";
import CodeMirror, {ViewUpdate} from "@uiw/react-codemirror";
import {html} from "@codemirror/lang-html";
import {css} from "@codemirror/lang-css";
import {javascript} from "@codemirror/lang-javascript";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const HtmlLiveEditorWidget: React.FC<any> = () => {

    const editorRef = useRef(null);
    const activeTab = useSelector((state: any) => state.liveEditor.activeTab);
    const htmlContent = useSelector((state: any) => state.liveEditor.htmlContent);
    const cssContent = useSelector((state: any) => state.liveEditor.cssContent);
    const jsContent = useSelector((state: any) => state.liveEditor.jsContent);
    const selectedTheme = useSelector((state: any) => state.theme.value);
    const dispatch = useDispatch();

    const [width, height] = useWindowResize();

    function handleChange(val: string, vUpdate: ViewUpdate) {
        switch (activeTab) {
            case 0 :
                dispatch(setHtmlContent(val));
                return;
            case 1 :
                dispatch(setCssContent(val));
                return;
            case 2 :
                dispatch(setJsContent(val));
                return;
        }
    }

    return (<>
        <CardContent sx={(theme) => ({
            display: 'flex',
            flexDirection: width < 1000 ? 'column' : "row",
            width: width < 1000 ? '100%' : "row",
            flex: 1,
            boxSizing: 'border-box',
            gap: theme.spacing(1)
        })}>
            <Grid item xs={width < 1000 ? 12 : 6} sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                height: "100%",
                gap: theme.spacing(1)
            })}>

                <Tabs sx={(theme) => ({background: theme.palette.background.paper})} value={activeTab}
                      aria-label="live editor tabs">
                    <Tab onClick={() => {
                        dispatch((setActiveTab(0)))
                    }} label="index.html"/>
                    <Tab onClick={() => {
                        dispatch((setActiveTab(1)))
                    }} label="styles.css"/>
                    <Tab onClick={() => {
                        dispatch((setActiveTab(2)))
                    }} label="script.js"/>
                </Tabs>
                <CodeMirror height="590px" style={{
                    fontSize: "14px",
                    position: "relative",
                    fontFamily: '"Fira Mono" !important',
                }} value={activeTab === 0 ? htmlContent : activeTab === 1 ? cssContent : jsContent} lang={"json"} theme={selectedTheme}
                            extensions={activeTab === 0 ? [html()] : activeTab === 1 ? [css()] : [javascript()]} onChange={handleChange}></CodeMirror>
            </Grid>
            <Grid item xs={width < 1000 ? 12 : 6} sx={(theme) => ({
                boxSizing: 'border-box',
                height: "100%",
                position: 'relative',
                padding: theme.spacing(1, 1),
                fontSize: "12px"
            })}>
                <iframe style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    background: "white",
                    borderRadius: "8px"
                }} height="100%" width="100%" srcDoc={`<style>${cssContent}</style>${htmlContent}<script>${jsContent}</script>`}></iframe>
            </Grid>
        </CardContent>
    </>);
}

export default HtmlLiveEditorWidget;
