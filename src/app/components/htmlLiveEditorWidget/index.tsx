import React, {useEffect, useRef} from "react";
import {Grid, Tab, Tabs} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import 'highlight.js/styles/github-dark.css';
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab, setCssContent, setHtmlContent, setJsContent} from "@redux/reducers/liveEditorReducer";
import CodeFlask from 'codeflask';
import useWindowResize from "@app/hooks/windowResizeHook";

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
    const html = useSelector((state: any) => state.liveEditor.htmlContent);
    const css = useSelector((state: any) => state.liveEditor.cssContent);
    const js = useSelector((state: any) => state.liveEditor.jsContent);
    const dispatch = useDispatch();

    const [width, height] = useWindowResize();

    useEffect(() => {
        if (editorRef.current) {
            const codeEditor = new CodeFlask(editorRef.current, {language: 'html', lineNumbers: true, defaultTheme : true });
            codeEditor.updateCode(html);
            codeEditor.onUpdate( () => {dispatch(setHtmlContent(codeEditor.getCode()))})
        }
    }, [])

    useEffect(() => {
        switch (activeTab) {
            case 0 :
                if (editorRef.current) {
                    const codeEditor = new CodeFlask(editorRef.current, {language: 'html', lineNumbers: true});
                    codeEditor.updateCode(html);
                    codeEditor.onUpdate( () => {dispatch(setHtmlContent(codeEditor.getCode()))})
                }
                break;
            case 1 :
                if (editorRef.current) {
                    const codeEditor = new CodeFlask(editorRef.current, {language: 'css', lineNumbers: true});
                    codeEditor.updateCode(css);
                    codeEditor.onUpdate( () => {dispatch(setCssContent(codeEditor.getCode()))})
                }
                break;
            case 2 :
                if (editorRef.current) {
                    const codeEditor = new CodeFlask(editorRef.current, {language: 'js', lineNumbers: true});
                    codeEditor.updateCode(js);
                    codeEditor.onUpdate( () => {dispatch(setJsContent(codeEditor.getCode()))})
                }
                break;
        }
    }, [activeTab])

    return (<>
        <CardContent sx={(theme) => ({display: 'flex', flexDirection : width < 1000 ? 'column' : "row",width : width < 1000 ? '100%' : "row", flex: 1, boxSizing: 'border-box', gap: theme.spacing(1)})}>
            <Grid item xs={width < 1000 ? 12 : 6} sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                height: "100%",
                gap: theme.spacing(1)
            })}>

                <Tabs sx={(theme) => ({background: theme.palette.grey[900]})} value={activeTab}
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
                <Grid sx={(theme) => ({
                    boxSizing: 'border-box',
                    background: theme.palette.grey[700],
                    height: "100%",
                    fontSize: "12px",
                    position : "relative",
                    fontFamily: '"Fira Mono" !important',
                    '& > span': {fontFamily: '"Fira Mono" !important'}
                })} ref={editorRef}>
                </Grid>
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
                }} height="100%" width="100%" srcDoc={`<style>${css}</style>${html}<script>${js}</script>`}></iframe>
            </Grid>
        </CardContent>
    </>);
}

export default HtmlLiveEditorWidget;