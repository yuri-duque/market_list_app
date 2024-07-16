import * as React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import {LoadingProvider, ThemeProvider} from "@core/ds";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {Routes} from "./routes";

export const App = () => {
  return (
    <>
      <GestureHandlerRootView>
        <ThemeProvider>
          <LoadingProvider>
            <Routes />
          </LoadingProvider>
        </ThemeProvider>
      </GestureHandlerRootView>

      <Toast />
    </>
  );
};
