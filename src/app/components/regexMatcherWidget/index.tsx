import React, {useState} from "react";
import {CardActions, CardHeader, Grid, IconButton} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {Code, Google, MoreVert} from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const RegexMatcherWidget: React.FC<any> = () => {

    const [pattern, setPattern] = useState<string>('p');
    const [testString, setTestString] = useState('apple');
    const [flags, setFlags] = useState<string>('g')
    const [matchedIndices, setMatchedIndices] = useState<number[]>([])

    function matchPattern() {
        try {
            const matchIterator = testString.matchAll(new RegExp(pattern, flags));
            let match = matchIterator.next();
            const matchedIndex: number[] = [];
            while (match && match.value) {
                const index = match.value.index;
                const len = match.value[0].length;
                for (let i = index; i < index + len; i++)
                    matchedIndex.push(i);
                match = matchIterator.next();
            }
            setMatchedIndices(matchedIndex);
        }catch(e) {
            console.log(e);
        }
    }

    return (<>
        <CardContent sx={(theme) => ({
            fontFamily: "Fira Mono",
            flexDirection: 'column',
            display: "flex",
            flex: 1,
            gap: theme.spacing(2)
        })}>
            <Paper variant="outlined"
                   sx={(theme) => ({
                       position: "sticky",
                       padding: "4px 16px",
                       boxSizing: 'border-box',
                       display: "flex",
                       alignItems: "center",
                       width: "100%",
                       fontFamily: "Fira Mono"
                   })}
            >
                <Typography sx={(theme) => ({fontFamily: "Fira Mono"})} color={"primary"}>/</Typography>
                <InputBase
                    onChange={(e) => {
                        setPattern(e.target.value)
                    }}
                    value={pattern}
                    inputMode="text"
                    sx={(theme) => ({ml: 1, flex: 1, fontFamily: "Fira Mono"})}
                    placeholder="Regex pattern"
                    inputProps={{"aria-label": "search fonts", style: {paddingLeft: 10}}}
                />
                <Typography sx={(theme) => ({fontFamily: "Fira Mono"})} color={"primary"}>/g</Typography>
            </Paper>
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
                <Grid sx={(theme) => ({
                    position: 'absolute',
                    height: '100%',
                    zIndex: -1,
                    padding: theme.spacing(1)
                })}>
                    {[...testString].map((c, _) => {
                        switch (c) {
                            case '\n' :
                                return <br/>;
                            case ' ' :
                                return <Typography
                                    sx={(theme) => ({
                                        display: 'inline-block',
                                        height: 'max-content',
                                        padding : '1px',
                                        marringBottom : '4px',
                                        width: 'max-content',
                                        lineHeight: 1.5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: 'center',
                                        fontFamily: 'Fira Mono',
                                        color : 'rgba(255,255,255,0.2)',
                                        backgroundColor: matchedIndices.includes(_) ? 'rgba(161, 245, 196, 0.5)' : 'transparent'
                                    })}
                                    component="span">{'.'}</Typography>
                            default :
                                return <Typography
                                    sx={(theme) => ({
                                        display: 'inline-block',
                                        height: 'max-content',
                                        width: 'max-content',
                                        lineHeight: 1.5,
                                        padding : '1px',
                                        marringBottom : '4px',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: 'center',
                                        fontFamily: 'Fira Mono',
                                        backgroundColor: matchedIndices.includes(_) ? 'rgba(161, 245, 196, 0.5)' : 'transparent'
                                    })}
                                    component="span">{c}</Typography>
                        }
                    })}

                </Grid>
                <InputBase onChange={(e) => {
                    setTestString(e.target.value)
                }} value={testString} multiline
                           sx={(theme) => ({opacity: 0, padding: theme.spacing(2), height: "100%", width: "100%"})}
                           inputProps={{style: {fontFamily: "Fira Mono", height: "100%"}}}/>
            </Paper>
        </CardContent>
        <CardActions>
            <Button color="primary" onClick={matchPattern}> Match </Button>
        </CardActions>
    </>)
}

export default RegexMatcherWidget;