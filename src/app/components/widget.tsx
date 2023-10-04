import React, {useState} from "react";
import Card from "@mui/material/Card";
import {CardHeader, Grid, IconButton} from "@mui/material";
import {Fullscreen, FullscreenExit, LaunchOutlined} from "@mui/icons-material";

interface WidgetProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    title: string;
    icon: React.FC<any>;
    component: React.FC<any>;
    style?: React.CSSProperties;
    height?: number | string;
    width?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    item: boolean;
}

const Widget: React.FC<WidgetProps> = (props: WidgetProps) => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    return (<Grid item={props.item} xs={props.xs ? props.xs : false} sm={props.sm ? props.sm : false}
                  md={props.md ? props.md : false}
                  lg={props.lg ? props.lg : false} xl={props.xl ? props.xl : false}
                  height={"fit-content"}
                  sx={(theme) => ({boxSizing: 'border-box'})}>
        <Card variant="outlined" sx={(theme) => ({
            position: isFullScreen ? 'fixed' : 'relative',
            top: isFullScreen ? "50%" : 'none',
            left: isFullScreen ? "50%" : 'none',
            boxShadow: isFullScreen ? theme.shadows[4] : 'none',
            transitionDuration : '500ms',
            transitionProperty : 'height width',
            transform: isFullScreen ? "translate(-50%, -50%)" : 'none',
            zIndex: isFullScreen ? "1000" : '0',
            borderRadius: isFullScreen ? 0 : 8,
            display: "flex",
            flexDirection: "column",
            background: theme.palette.background.paper,
            boxSizing: "border-box",
            overflow: "scroll",
            height: isFullScreen ? "100%" : props.height ? props.height : 'auto',
            width: isFullScreen ? "100%" : props.width ? props.width : 'auto',
            minHeight: props.minHeight ? props.minHeight : 'auto',
            minWidth: props.minWidth ? props.minWidth : 'auto',
            ...props.style
        })}>
            <CardHeader avatar={
                <props.icon/>
            } sx={(theme) => ({})} title={props.title}
                        titleTypographyProps={{fontWeight: 500, fontSize: '14px'}}
                        action={<IconButton aria-label="settings" onClick={() => setIsFullScreen(isFullScreen => !isFullScreen)}>
                            {!isFullScreen ? <LaunchOutlined/> : <FullscreenExit/>}
                        </IconButton>}/>
            <props.component/>
        </Card>
    </Grid>);
}

export default Widget;