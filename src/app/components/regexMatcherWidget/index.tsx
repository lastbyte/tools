import React, {useEffect, useRef, useState} from "react";
import {FormControl, Grid, Input} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Mark from 'mark.js';
import FlagSelector from "@components/regexMatcherWidget/flagSelector";
import {useDispatch, useSelector} from "react-redux";
import {setFlags, setPattern, setTestString} from "@redux/reducers/regexMatcherReducer";


const RegexMatcherWidget: React.FC<any> = () => {

    const testStringDomRef = useRef(null);
    const pattern = useSelector( (state: any) => state.regexMatcher.pattern);
    const testString = useSelector( (state: any) => state.regexMatcher.testString);
    const flags = useSelector( (state: any) => state.regexMatcher.flags);

    const dispatch = useDispatch();

    const flagsToString = () => Object.keys(flags).map((k: string)=>{ if (flags[k]) return k;}).join('');

    useEffect(() => {
        try {
            testStringDomRef.current && new Mark(testStringDomRef.current).markRegExp(new RegExp(pattern, flagsToString()));
        } catch (error) {
            console.log(error);
        }
    },[]);

    useEffect(() => {
        try {
            console.log({testString,pattern, flags});
            //@ts-ignore
            if (testStringDomRef.current) testStringDomRef.current.innerText = testString;
            testStringDomRef.current && new Mark(testStringDomRef.current).markRegExp(new RegExp(pattern, flagsToString()));
        } catch (error) {
        }
    }, [pattern, testString,flags]);


    return (<>
        <CardContent sx={(theme) => ({
            fontFamily: "Fira Mono",
            flexDirection: 'column',
            display: "flex",
            flex: 1,
            gap: theme.spacing(2)
        })}>
            <Grid container>
                <Paper variant="outlined"
                       sx={(theme) => ({
                           position: "sticky",
                           padding: "4px 16px",
                           boxSizing: 'border-box',
                           display: "flex",
                           alignItems: "center",
                           flex: 1,
                           fontFamily: "Fira Mono"
                       })}
                >

                    <Typography sx={(theme) => ({fontFamily: "Fira Mono"})} color={"primary"}>/</Typography>
                    <InputBase
                        onChange={(e) => {
                            dispatch(setPattern(e.target.value));
                        }}
                        value={pattern}
                        inputMode="text"
                        sx={(theme) => ({ml: 1, flex: 1, fontFamily: "Fira Mono"})}
                        placeholder="Regex pattern"
                        inputProps={{"aria-label": "search fonts", style: {paddingLeft: 10}}}
                    />
                    <Typography sx={(theme) => ({fontFamily: "Fira Mono"})} color={"primary"}>/{flagsToString()}</Typography>
                </Paper>
                <FlagSelector/>
                </Grid>
            <Paper variant="outlined"
                   sx={(theme) => ({
                       position: "sticky",
                       padding: "4px 16px",
                       boxSizing: 'border-box',
                       display: "flex",
                       alignItems: "center",
                       width: "100%",
                       flex: 1,
                   })}>
                <FormControl sx={(theme) => ({
                    position: "relative",
                    boxSizing: 'border-box',
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    '& mark': {
                        background: 'greenyellow !important'
                    }
                })}>
                    <pre style={{
                        fontFamily: "Fira Mono",
                        lineHeight: 1.5,
                        padding: "16px 16px",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        margin: 0,
                        height: "100%",
                        width: "100%"
                    }} ref={testStringDomRef}>{testString}</pre>
                    <Input multiline onChange={(e) => {
                        dispatch(setTestString(e.target.value));
                    }}
                           inputProps={{style: {height: "100%", width: "100%", fontFamily: "Fira Mono"}}}
                           value={testString}
                           sx={(theme) => ({
                               lineHeight: 1.5,
                               opacity: 1,
                               color: 'transparent',
                               caretColor: 'red',
                               padding: theme.spacing(2),
                               height: "100%",
                               width: "100%",
                               '&:before, &:after': {
                                   display: "none"
                               }
                           })}
                    />
                </FormControl>
            </Paper>
        </CardContent>
    </>)
}

export default RegexMatcherWidget;