import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import {DarkMode, LightMode, Monitor} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "@redux/reducers/themeReducer";
import {THEME} from "@common/constants";

const ThemeToggleButton: React.FC<any> = () => {

    const dispatch = useDispatch();
    const selectedTheme = useSelector((state: any) => state.theme.value);

    return (<ToggleButtonGroup
        color="primary"
        exclusive
        aria-label="Platform"
        sx={(theme) =>({background : theme.palette.background.default})}
    >
        <ToggleButton selected={selectedTheme === THEME.light} onClick={() => {
            dispatch(setTheme(THEME.light))
        }} value="light" sx={(theme) => ({display: 'flex', alignItems: "center", gap: theme.spacing(1)})}><LightMode/>
            <Typography variant="button">Light</Typography></ToggleButton>
        <ToggleButton selected={selectedTheme === THEME.dark} onClick={() => {
            dispatch(setTheme(THEME.dark))
        }} value="dark" sx={(theme) => ({
            display: 'flex',
            alignItems: "center",
            gap: theme.spacing(1)
        })}><DarkMode/><Typography variant="button">Dark</Typography></ToggleButton>
        <ToggleButton selected={selectedTheme === THEME.system} onClick={() => {
            dispatch(setTheme(THEME.system))
        }} value="system" sx={(theme) => ({
            display: 'flex',
            alignItems: "center",
            gap: theme.spacing(1)
        })}><Monitor/><Typography variant="button">System</Typography></ToggleButton>
    </ToggleButtonGroup>)
}

export default ThemeToggleButton;