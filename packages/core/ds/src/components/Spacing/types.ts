import {ThemeType} from "../../theme/types";

export type SpacingProps = {
  size: keyof ThemeType["sizeVariations"];
};
