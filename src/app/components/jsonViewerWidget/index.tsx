import React, {useEffect, useRef} from "react";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import CardContent from "@mui/material/CardContent";
import useWindowResize from "@app/hooks/windowResizeHook";
import JSONFormatter from 'json-formatter-js'
import CodeFlask from "codeflask";
import {setJsonContent, setJsonValidity} from "@redux/reducers/jsonViewerReducer";
import beautify from "json-beautify";
import Button from "@mui/material/Button";
import CodeMirror, {ViewUpdate} from '@uiw/react-codemirror';
import {oneDarkTheme} from '@codemirror/theme-one-dark'
import {json, jsonLanguage} from '@codemirror/lang-json'
import {languages} from '@codemirror/language-data';


const JsonViewerWidget: React.FC<any> = () => {

    const editorRef = useRef<HTMLDivElement>(null);
    const jsonViewRef = useRef<HTMLDivElement>(null);
    const selectedTheme = useSelector((state: any) => state.theme.value);

    const jsonInput = useSelector((state: any) => state.jsonViewer.json);
    const isJsonValid = useSelector((state: any) => state.jsonViewer.valid);
    const [width, height] = useWindowResize();

    const dispatch = useDispatch();

    useEffect(() => {
        //update the json Input in the editor
        // set up the JSON view
        try {
            const jsonToView = JSON.parse(jsonInput);
            dispatch(setJsonValidity(true));
            const formatter = new JSONFormatter(jsonToView, 1, {
                hoverPreviewEnabled: true,
                hoverPreviewArrayCount: 100,
                hoverPreviewFieldCount: 5,
                theme: selectedTheme,
                animateOpen: true,
                animateClose: true,
                useToJSON: true,
            });
            if (jsonViewRef && jsonViewRef.current) jsonViewRef.current.innerHTML = '';
            jsonViewRef && jsonViewRef.current && jsonViewRef.current.appendChild(formatter.render());
        } catch (error) {
            dispatch(setJsonValidity(false));
            console.log(error);
        }

    }, [jsonInput, selectedTheme]);

    function formatInput() {
        try {
                //@ts-ignore
                const formattedInput = beautify(JSON.parse(jsonInput), null, 4, 60);
                dispatch(setJsonContent(formattedInput));
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(val: string, vUpdate: ViewUpdate) {
        dispatch(setJsonContent(val));
    }

    return (<CardContent sx={(theme) => ({
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
            position : 'relative',
            gap: theme.spacing(1)
        })}>
            <Grid item sx={(theme) => ({
                display: 'flex',
                flexDirection: 'row-reverse',
                boxSizing: 'border-box',
                height: "fit-content",
                position : 'absolute',
                zIndex : 100,
                right : 0,
                top : 0,
                gap: theme.spacing(1)
            })}>
                <Button size="medium" sx={(theme) => ({width: "fit-content", padding: "8px 24px"})} variant="outlined"
                        onClick={formatInput}>Format</Button>
            </Grid>
            <CodeMirror height="660px" style={{
                fontSize: "14px",
                position: "relative",
                fontFamily: '"Fira Mono" !important',
            }} value={jsonInput} lang={"json"} theme={selectedTheme} extensions={[json()]} onChange={handleChange}></CodeMirror>
        </Grid>
        <Grid item ref={jsonViewRef} xs={width < 1000 ? 12 : 6} sx={(theme) => ({
            boxSizing: 'border-box',
            height: "100%",
            position: 'relative',
            padding: theme.spacing(1, 1),
            fontSize: "12px"
        })}>
        </Grid>
    </CardContent>)
}

export default JsonViewerWidget;
