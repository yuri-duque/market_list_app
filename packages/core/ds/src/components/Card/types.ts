import React from "react";
import {AppThemeType} from "../../theme";

export type CardProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  radius?: keyof AppThemeType["sizeVariations"];
  backgroundColor?: keyof AppThemeType["colors"];
  flex?: boolean;
  margin?: keyof AppThemeType["sizeVariations"];
  padding?: keyof AppThemeType["sizeVariations"];
};
