import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./store/store.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { themeGlobal } from "../src/services/theme.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={themeGlobal}>
    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
