import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router/router.tsx";
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}/>
      {/* <App /> */}
    </ThemeProvider>
  </React.StrictMode>
);
