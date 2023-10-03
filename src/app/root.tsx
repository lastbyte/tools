import React, {Suspense, useEffect, useState} from 'react';
import AppRouter from "@app/common/appRouter"
import {ThemeProvider} from "@mui/material";
import lightTheme from "@app/theme/lightTheme";
import darkTheme from "@app/theme/darkTheme";
import {useSelector} from "react-redux";
import {THEME} from "@common/constants";

const useThemeDetector = () => {

    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = ((e: any) => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}


function App() {

    const isDarkTheme = useThemeDetector();
    const selectedTheme = useSelector((state: any) => state.theme.value);
    return (
        <ThemeProvider
            theme={selectedTheme === THEME.system ? isDarkTheme ? darkTheme : lightTheme : selectedTheme === THEME.light ? lightTheme : darkTheme}>
            <Suspense fallback={<div></div>}>
                <AppRouter>
                </AppRouter>
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
