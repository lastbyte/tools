import {configureStore} from '@reduxjs/toolkit'
import themeReducer from "@redux/reducers/themeReducer";
import codeSnipperReducer from "@redux/reducers/codeSnipperReducer";

export default configureStore({
    reducer: {theme: themeReducer, codeSnippet : codeSnipperReducer},
})