import * as React from "react";
import {AutocompleteDropdownContextProvider} from "react-native-autocomplete-dropdown";
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
          <AutocompleteDropdownContextProvider>
            <LoadingProvider>
              <BottomSheetModalProvider>
                <Routes />
              </BottomSheetModalProvider>
            </LoadingProvider>
          </AutocompleteDropdownContextProvider>
        </ThemeProvider>
      </GestureHandlerRootView>

      <Toast />
    </>
  );
};
