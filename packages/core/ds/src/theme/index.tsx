import {ReactNode} from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components/native";
import {ThemeDefault} from "./theme";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={ThemeDefault}>{children}</StyledThemeProvider>
  );
};
