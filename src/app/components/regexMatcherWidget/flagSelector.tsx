import React from "react";
import IconButton from "@mui/material/IconButton";
import {SettingsOutlined} from "@mui/icons-material";
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Popover} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {setFlags} from "@redux/reducers/regexMatcherReducer";

const  FlagSelector : React.FC<any> = () => {

    const flags = useSelector( (state: any) => state.regexMatcher.flags);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {...flags, [event.target.name]: event.target.checked }
        dispatch(setFlags(newState));
    };

    const {i,m,s,u,y} = flags;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (<>
            <IconButton sx={{background: 'transparent'}} aria-describedby={id} onClick={handleClick}>
                <SettingsOutlined/>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box sx={(theme) => ({display: 'flex', padding: theme.spacing(2)})}>
                    <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={i} onChange={handleChange} name="i"/>
                                }
                                label={<><Typography variant="body1" color="primary" fontWeight="600"
                                                     component="span"> i </Typography> - <Typography
                                    variant="body2" component="span">Makes matches case-insensitive. Matches
                                    both uppercase and lowercase.</Typography></>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={m} onChange={handleChange} name="m"/>
                                }
                                label={<><Typography variant="body1" color="primary" fontWeight="600"
                                                     component="span"> m </Typography> - <Typography
                                    variant="body2" component="span"> Performs multiline matches. (Changes
                                    behavior of ^,$)</Typography></>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={s} onChange={handleChange} name="s"/>
                                }
                                label={<><Typography variant="body1" color="primary" fontWeight="600"
                                                     component="span"> s </Typography> - <Typography
                                    variant="body2" component="span">Allows . to match newline
                                    characters.</Typography></>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={u} onChange={handleChange} name="u"/>
                                }
                                label={<><Typography variant="body1" color="primary" fontWeight="600"
                                                     component="span"> u </Typography> - <Typography
                                    variant="body2" component="span">Enables Unicode support.</Typography></>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={y} onChange={handleChange} name="y"/>
                                }
                                label={<><Typography variant="body1" color="primary" fontWeight="600"
                                                     component="span"> y </Typography> - <Typography
                                    variant="body2" component="span">Matches are sticky, looking
                                    only at exact position in the text.</Typography></>}
                            />
                        </FormGroup>
                        <FormHelperText>Select the regex flags</FormHelperText>
                    </FormControl>
                </Box>
            </Popover>
        </>
    );
}
export default FlagSelector;