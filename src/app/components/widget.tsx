import React, {ReactNode} from "react";
import Card from "@mui/material/Card";
import {CardHeader, IconButton, SxProps, Theme} from "@mui/material";
import {Colorize, MoreVert} from "@mui/icons-material";

interface WidgetProps {
    title: string;
    icon: React.FC<any> ;
    widget: React.FC<any>;
    style?: React.CSSProperties;
    height?: number | string;
    width?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}

const Widget: React.FC<WidgetProps> = (props: WidgetProps) => {
    return (<Card variant="outlined" sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        background : theme.palette.background.paper,
        boxSizing: "border-box",
        overflow: "scroll",
        height: props.height ? props.height : 'auto',
        width: props.width ? props.width : 'auto',
        minHeight: props.minHeight ? props.minHeight : 'auto',
        minWidth: props.minWidth ? props.minWidth : 'auto',
        ...props.style,

    })}>
        <CardHeader avatar={
            <props.icon/>
        } sx={(theme) => ({})} title={props.title}
                    titleTypographyProps={{fontWeight: 500, fontSize: '14px'}}/>
        <props.widget/>
    </Card>);
}

export default Widget;