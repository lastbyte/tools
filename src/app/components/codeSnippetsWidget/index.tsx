import React, {useEffect, useRef, useState} from "react";
import {CardActions, Grid, MenuItem, OutlinedInput, Select} from "@mui/material";
import CardContent from "@mui/material/CardContent";
//@ts-ignore
import NestedList from '@editorjs/nested-list';
import {CodeJar} from "codejar";
import highlightJs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import Card from "@mui/material/Card";
import {useDispatch, useSelector} from "react-redux";
import {ArrowDropDownCircle} from "@mui/icons-material";
import {setLanguage} from "@redux/reducers/codeSnipperReducer";
import * as events from "events";
import {languages} from "@common/constants";

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

const CodeSnippetsWidget: React.FC<any> = () => {
    const [codeEditor, setCodeEditor] = useState<any>();
    const editorRef = useRef(null);
    const language = useSelector((state: any) => state.codeSnippet.language)

    const dispatch = useDispatch();

    const highlight = (editor: HTMLElement) => {
        console.log(editor.textContent);
        if (editor.textContent) editor.innerHTML = highlightJs.highlight(editor.textContent, {language}).value;
    }


    useEffect(() => {
        if (editorRef.current) {
            const jar = CodeJar((editorRef.current), highlight, {
                tab: ' '.repeat(4),
                indentOn: /[(\[]$/,
            });
            setCodeEditor(jar);
        }
    }, [])

    return (<>
        <CardContent sx={(theme) => ({})}>
            <Card variant="outlined" sx={(theme) => ({
                boxSizing: 'border-box',
                height: "550px",
                padding: theme.spacing(2, 1),
                fontSize: "12px",
                fontFamily: '"Fira Mono" !important',
                '& > span': {fontFamily: '"Fira Mono" !important'}
            })} ref={editorRef}>
            </Card>
        </CardContent>
        <CardActions sx={(theme) => ({padding: theme.spacing(1, 2)})}>
            <Select
                size="small"
                sx={{width: "200px"}}
                displayEmpty
                input={<OutlinedInput/>}
                value={language}
                onChange={(e) => {
                    dispatch(setLanguage(e.target.value));
                }}
                IconComponent={ArrowDropDownCircle}
                inputProps={{'aria-label': 'Without label'}}
                MenuProps={MenuProps}
                renderValue={(selection: string) => {
                    if (!selection) {
                        return <em>Placeholder</em>;
                    }

                    return language;
                }}
            >
                <MenuItem disabled value="">
                    <em>Placeholder</em>
                </MenuItem>
                {Object.keys(languages).map((key) =>
                    <MenuItem value={languages[key].value}>
                        {languages[key].display}
                    </MenuItem>
                )}
            </Select>
        </CardActions>
    </>);
}

export default CodeSnippetsWidget;