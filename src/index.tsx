import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from "./theme";
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Router>
            <App/>
        </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// т.к. MUI это css in js все стили будут прикручиваться через функции
// для того чтобы это работало для всего приложения оборачиваем его в ThemeProvider

// MUI 5 версии не работал на фукнции makeStyles() поэтому перешел на 4 версию