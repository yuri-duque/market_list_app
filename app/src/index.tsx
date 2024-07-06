import * as React from "react";
import {ThemeProvider} from "@core/ds";
import {Routes} from "./routes";

export const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};
