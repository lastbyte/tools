import {configureStore} from '@reduxjs/toolkit'
import themeReducer from "@redux/reducers/themeReducer";
import codeSnipperReducer from "@redux/reducers/codeSnipperReducer";
import drawerReducer from "@redux/reducers/drawerReducer";

export default configureStore({
    reducer: {theme: themeReducer, codeSnippet : codeSnipperReducer,drawer : drawerReducer},
})