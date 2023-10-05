import {configureStore} from '@reduxjs/toolkit'
import themeReducer from "@redux/reducers/themeReducer";
import drawerReducer from "@redux/reducers/drawerReducer";
import hashGeneratorReducer from "@redux/reducers/hashGeneratorReducer";
import RegexMatcherReducer from "@redux/reducers/regexMatcherReducer";
import LiveEditorReducer from "@redux/reducers/liveEditorReducer";
import NotificationReducer from "@redux/reducers/noitificationReducer";

export default configureStore({
    reducer: {
        theme: themeReducer,
        drawer: drawerReducer,
        notification: NotificationReducer,
        hashGenerator: hashGeneratorReducer,
        regexMatcher: RegexMatcherReducer,
        liveEditor : LiveEditorReducer
    },
})