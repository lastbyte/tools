import {createSlice} from '@reduxjs/toolkit'
import {act} from "@testing-library/react";
import {languages, THEME} from "@common/constants";

export const liveEditorSlice = createSlice({
    name: 'liveEditor',
    initialState : {
        activeTab : 0,
        htmlContent : '<h1>This is a live editor</h1>\n' +
            '<button id="btn">click me </button>',
        cssContent : 'h1 { color : greenyellow}',
        jsContent : 'document.getElementById("btn").addEventListener("click", () => { alert("clicked")})',
    },
    reducers: {
        setActiveTab: (state,action) => {
            state.activeTab = action.payload
        },

        setHtmlContent: (state,action) => {
            state.htmlContent = action.payload
        },

        setCssContent: (state,action) => {
            state.cssContent = action.payload
        },

        setJsContent: (state,action) => {
            state.jsContent = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setActiveTab, setHtmlContent, setCssContent, setJsContent} = liveEditorSlice.actions

export default liveEditorSlice.reducer
