import React, {ChangeEvent, useState} from "react";
import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import {ArrowDropDownCircle} from "@mui/icons-material";
import {hashAlgorithms} from "@common/constants";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import {setHashAlgorithm, setInput, setOutput} from "@redux/reducers/hashGeneratorReducer";
//@ts-ignore
import Hashes from 'jshashes';

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
const HashGeneratorWidget: React.FC<any> = () => {

    const dispatch = useDispatch();
    const hashAlgorithm = useSelector((state: any) => state.hashGenerator.hashAlgorithm)
    const input = useSelector((state: any) => state.hashGenerator.input)
    const output = useSelector((state: any) => state.hashGenerator.output)

    const MD5 = new Hashes.MD5;
    const SHA1 = new Hashes.SHA1;
    const SHA256 = new Hashes.SHA256;
    const SHA512 = new Hashes.SHA512;
    const RMD160 = new Hashes.RMD160;

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log({val : e.target.value});
        if (e.target.value == "") {
            dispatch(setInput(e.target.value));
            dispatch(setOutput(''));
            return;
        }
        dispatch(setInput(e.target.value));
        switch (hashAlgorithm) {
            case 'sha1' :
                dispatch(setOutput(SHA1.hex(e.target.value)));
                break;
            case 'sha256' :
                dispatch(setOutput(SHA256.hex(e.target.value)));
                break;
            case 'sha512' :
                dispatch(setOutput(SHA512.hex(e.target.value)));
                break;
            case 'md5' :
                dispatch(setOutput(MD5.hex(e.target.value)));
                break;
            case 'rmd160' :
                dispatch(setOutput(RMD160.hex(e.target.value)));
                break;
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
                       fontFamily: "Fira Mono"
                   })}
            >
                <FormControl>
                    <InputLabel id="hash-selector">Hash Algorithm</InputLabel>
                    <Select
                        id={"hash-selector"}
                        size="small"
                        sx={{width: "200px", flex: 1}}
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
                <Button variant="contained">Import from file</Button>
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