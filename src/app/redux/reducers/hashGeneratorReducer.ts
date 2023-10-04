import {createSlice} from '@reduxjs/toolkit'
import {hashAlgorithms} from "@common/constants";
//@ts-ignore
import Hashes from 'jshashes';
export const hashGeneratorSlice = createSlice({
    name: 'codeSnippet',
    initialState : {
        hashAlgorithm : hashAlgorithms['md5'].value,
        input : 'secret ',
        output : (new Hashes.MD5).hex('apple'),
    },
    reducers: {
        setHashAlgorithm: (state,action) => {
            state.hashAlgorithm = action.payload
        },

        setInput: (state,action) => {
            state.input = action.payload
        },

        setOutput: (state,action) => {
            state.output = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setHashAlgorithm,setInput,setOutput} = hashGeneratorSlice.actions

export default hashGeneratorSlice.reducer