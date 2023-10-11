import {createSlice} from '@reduxjs/toolkit'
import {act} from "@testing-library/react";
import {languages, THEME} from "@common/constants";
import beautify from  'json-beautify';


let complex = {
    numbers: [1, 2, 3],
    boolean: true,
    null: null,
    number: 123,
    anObject: {
        a: "b",
        e: "d",
        c: 'f"',
    },
    string: "Hello World",
    url: "https://github.com/mohsen1/json-formatter-js",
    date: new Date(),
};

// @ts-ignore
export const jsonViewerSlice = createSlice({
    name: 'jsonViewer',
    initialState : {
        //@ts-ignore
        json : beautify(complex, null,4, 60),
        valid  : false,
    },
    reducers: {
        setJsonContent: (state,action) => {
            state.json = action.payload
        },

        setJsonValidity: (state,action) => {
            state.valid = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setJsonContent, setJsonValidity} = jsonViewerSlice.actions

export default jsonViewerSlice.reducer
