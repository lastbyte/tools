import {createSlice} from '@reduxjs/toolkit'
import {act} from "@testing-library/react";
import {THEME} from "@common/constants";

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState : {
        isOpen : false,
    },
    reducers: {
        setIsDrawerOpen: (state,action) => {
            state.isOpen = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setIsDrawerOpen} = drawerSlice.actions

export default drawerSlice.reducer