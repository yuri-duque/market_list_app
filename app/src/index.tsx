import * as React from "react";
import Toast from "react-native-toast-message";
import {LoadingProvider, ThemeProvider} from "@core/ds";
import {Routes} from "./routes";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <LoadingProvider>
          <Routes />
        </LoadingProvider>
      </ThemeProvider>
      <Toast />
    </>
  );
};
