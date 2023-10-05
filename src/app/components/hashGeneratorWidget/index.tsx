import React, {ChangeEvent, useEffect, useState} from "react";
import {FormControl, InputLabel, MenuItem, OutlinedInput, Select, useMediaQuery, useTheme} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import {ArrowDropDownCircle, FileOpen} from "@mui/icons-material";
import {hashAlgorithms} from "@common/constants";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import {setHashAlgorithm, setInput, setOutput} from "@redux/reducers/hashGeneratorReducer";
//@ts-ignore
import Hashes from 'jshashes';
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";

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

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const HashGeneratorWidget: React.FC<any> = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const dispatch = useDispatch();
    const hashAlgorithm = useSelector((state: any) => state.hashGenerator.hashAlgorithm)
    const input = useSelector((state: any) => state.hashGenerator.input)
    const output = useSelector((state: any) => state.hashGenerator.output)

    const MD5 = new Hashes.MD5;
    const SHA1 = new Hashes.SHA1;
    const SHA256 = new Hashes.SHA256;
    const SHA512 = new Hashes.SHA512;
    const RMD160 = new Hashes.RMD160;

    useEffect(() => {
        if (input=='') {
            dispatch(setOutput(''));
            return
        }
        switch (hashAlgorithm) {
            case 'sha1' :
                dispatch(setOutput(SHA1.hex(input)));
                break;
            case 'sha256' :
                dispatch(setOutput(SHA256.hex(input)));
                break;
            case 'sha512' :
                dispatch(setOutput(SHA512.hex(input)));
                break;
            case 'md5' :
                dispatch(setOutput(MD5.hex(input)));
                break;
            case 'rmd160' :
                dispatch(setOutput(RMD160.hex(input)));
                break;
        }
    },[hashAlgorithm, input])
    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setInput(e.target.value));
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            dispatch(setInput(event?.target?.result));
        });
        if (e.target?.files) reader.readAsText(e.target.files[0]);
    }

    return (<>
        <CardContent sx={(theme) => ({
            flexDirection: 'column',
            display: "flex",
            flex: 1,
            gap: theme.spacing(2)
        })}>
            <Paper elevation={0}
                   sx={(theme) => ({
                       position: "sticky",
                       padding: theme.spacing(0.5, 2),
                       gap: theme.spacing(1),
                       boxSizing: 'border-box',
                       display: "flex",
                       alignItems: "center",
                       justifyContent: 'space-between',
                       width: "100%",
                   })}
            >
                <FormControl sx={(theme) => ({display : "flex"})}>
                    <InputLabel id="hash-selector">Hash Algorithm</InputLabel>
                    <Select
                        id={"hash-selector"}
                        size="small"
                        sx={{width: matches ?  "150px" : "200px", flex: 1,fontFamily: "Fira Mono",}}
                        displayEmpty
                        value={hashAlgorithm}
                        onChange={(e) => {
                            dispatch(setHashAlgorithm(e.target.value));
                        }}
                        IconComponent={ArrowDropDownCircle}
                        input={<OutlinedInput label="Hash Algorithm"/>}
                        inputProps={{'aria-label': 'With label'}}
                        MenuProps={MenuProps}
                        renderValue={(selection: string) => {
                            if (!selection) {
                                return <em>Select an algorithm</em>;
                            }

                            return hashAlgorithms[hashAlgorithm].display;
                        }}
                    >
                        <MenuItem disabled value="">
                            <em>Select an algorithm</em>
                        </MenuItem>
                        {Object.keys(hashAlgorithms).map((key) =>
                            <MenuItem  key={key} value={hashAlgorithms[key].value}>
                                {hashAlgorithms[key].display}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <Button component="label" variant="contained" sx={(theme) => ({ height : theme.spacing(5)})} startIcon={<FileOpen />} size="small" ><VisuallyHiddenInput type="file" onChange={handleFileChange}/><Typography variant="subtitle2">Import File</Typography></Button>
            </Paper>
            <Paper elevation={0}
                   sx={(theme) => ({
                       position: "sticky",
                       padding: theme.spacing(1),
                       boxSizing: 'border-box',
                       display: "flex",
                       flexDirection: "column",
                       gap: theme.spacing(1),
                       alignItems: "center",
                       width: "100%",
                       flex: 1,
                   })}>
                <FormControl sx={(theme) => ({width: "100%", flex: 1})}>
                    <InputLabel></InputLabel>
                    <OutlinedInput onChange={onInputChange} value={input} multiline
                                   sx={(theme) => ({
                                       lineHeight: 1.5,
                                       padding: theme.spacing(2),
                                       height: "100%",
                                       width: "100%"
                                   })}
                                   inputProps={{style: {fontFamily: "Fira Mono", height: "100%"}}}/>
                </FormControl>
                <FormControl sx={(theme) => ({width: "100%", flex: 1})}>
                    <OutlinedInput value={output} multiline
                                   sx={(theme) => ({
                                       lineHeight: 1.5,
                                       padding: theme.spacing(2),
                                       height: "100%",
                                       width: "100%"
                                   })}
                                   inputProps={{style: {fontFamily: "Fira Mono", height: "100%"}}}/>
                </FormControl>
            </Paper>
        </CardContent>
    </>)
}

export default HashGeneratorWidget;