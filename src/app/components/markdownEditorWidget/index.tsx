import React, {useEffect, useRef, useState} from "react";
import {Grid} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {useSelector} from "react-redux";
import {stat} from "copy-webpack-plugin/types/utils";
import chartPlugin from "@toast-ui/editor-plugin-chart";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import tableMergedCellPlugin from "@toast-ui/editor-plugin-table-merged-cell";
import umlPlugin from "@toast-ui/editor-plugin-uml";
import colorPlugin from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/chart/dist/toastui-chart.min.css";
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";
import {mdText} from "@components/markdownEditorWidget/markdownDefaultText";

const MarkdownEditorWidget : React.FC<any> = () => {

    const theme = useSelector((state : any) => state.theme.value);
    const [editor, setEditor] = useState<any>(null);
    const [editorText, setEditorText] = useState(mdText);

    const markdownRef = useRef(null);
    useEffect(() => {
        if (markdownRef.current) {
            const newEditor = new Editor({
                el: markdownRef.current,
                height: '600px',
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                initialValue : editorText,
                theme : theme,
                plugins : [umlPlugin, tableMergedCellPlugin, codeSyntaxHighlightPlugin, chartPlugin,colorPlugin ]
            });

            newEditor.on("change", () => {
                setEditorText(newEditor.getEditorElements().mdEditor.innerText);
            })
            setEditor(newEditor);
        }
    },[])

    useEffect(() => {
        if (editor && markdownRef?.current) {
            editor.destroy();
            const newEditor = new Editor({
                el: markdownRef.current,
                height: '600px',
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                initialValue : editorText,
                theme : theme,
                plugins : [umlPlugin, tableMergedCellPlugin, codeSyntaxHighlightPlugin, chartPlugin,colorPlugin ]
            });

            newEditor.on("change", () => {
                setEditorText(newEditor.getEditorElements().mdEditor.innerText);
            })

            setEditor(newEditor);

        }
    },[theme])

    return (<>
        <CardContent sx={(theme) => ({})}>
        <div style={{ width : "100%"}} ref={markdownRef}>
        </div>
        </CardContent>
    </>);
}

export default MarkdownEditorWidget;