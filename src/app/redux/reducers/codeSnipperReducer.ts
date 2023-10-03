import {createSlice} from '@reduxjs/toolkit'
import {act} from "@testing-library/react";
import {languages, THEME} from "@common/constants";

export const codeSnippetSlice = createSlice({
    name: 'codeSnippet',
    initialState : {
        language : languages.typescript.value,
    },
    reducers: {
        setLanguage: (state,action) => {
            state.language = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setLanguage} = codeSnippetSlice.actions

export default codeSnippetSlice.reducer