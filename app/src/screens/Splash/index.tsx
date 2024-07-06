import {useEffect} from "react";

import background from "../../../assets/images/background.png";
import {useAppStack} from "../../routes/stack";
import * as S from "./styles";

export const SplashScreen = () => {
  const navigation = useAppStack();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("AuthStack");
    }, 1000);
  });

  return (
    <S.Image
      source={background}
      accessibilityLabel={"An image of Billy giving you a concerned look"}
    />
  );
};
