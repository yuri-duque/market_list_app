import {StyleSheet} from "react-native";
import {DefaultTheme} from "styled-components/native";

export const getStyle = (theme: DefaultTheme) => {
  return StyleSheet.create({
    input: {
      height: 48,
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: theme.colors.light,
      elevation: 4,
      shadowColor: theme.colors.dark,
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
      fontSize: theme.fontSizes.S,
      fontFamily: theme.fontFamily.roboto,
      color: theme.colors.dark,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
