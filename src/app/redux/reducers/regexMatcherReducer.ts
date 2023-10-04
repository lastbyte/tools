import {createSlice} from '@reduxjs/toolkit'
import {hashAlgorithms} from "@common/constants";
//@ts-ignore
import Hashes from 'jshashes';
export const regexMatcherSlice = createSlice({
    name: 'regexMatcher',
    initialState : {
        flags : {
            i: false,
            m: false,
            s: false,
            u : false,
            y : false
        },
        pattern : '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}',
        testString : 'test@lastbyte.dev',
    },
    reducers: {
        setFlags: (state,action) => {
            state.flags = action.payload
        },

        setPattern: (state,action) => {
            state.pattern = action.payload
        },

        setTestString: (state,action) => {
            state.testString = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setFlags,setPattern,setTestString} = regexMatcherSlice.actions

export default regexMatcherSlice.reducer