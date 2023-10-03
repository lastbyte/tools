import {createSlice} from '@reduxjs/toolkit'
import {act} from "@testing-library/react";
import {THEME} from "@common/constants";

export const themeSlice = createSlice({
    name: 'theme',
    initialState : {
        value : THEME.dark,
    },
    reducers: {
        setTheme: (state,action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setTheme} = themeSlice.actions

export default themeSlice.reducer