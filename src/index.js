import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import AlertDemo from "./AlertDemo";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AlertDemo />
    </StyledEngineProvider>
  </React.StrictMode>
);
