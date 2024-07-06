import * as S from "./styles";
import background from "../../../assets/images/background.png";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackRouterParamList} from "../../routes/stack/types";

export const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRouterParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  });

  return (
    <S.Image
      source={background}
      accessibilityLabel={"An image of Billy giving you a concerned look"}
    />
  );
};
