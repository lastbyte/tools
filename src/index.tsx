import React from 'react';
import ReactDOM from 'react-dom/client';
import '@src/index.css';
import App from '@app/root';
import reportWebVitals from '@src/instrumentation/reportWebVitals';
import {Provider} from "react-redux";
import store from '@redux/store';
import {ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
