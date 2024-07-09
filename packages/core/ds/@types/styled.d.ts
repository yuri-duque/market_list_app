import "styled-components/native";
import {AppThemeType} from "../src";

declare module "styled-components/native" {
  export interface DefaultTheme extends AppThemeType {}
}
