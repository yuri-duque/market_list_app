import {useEffect} from "react";
import {Auth} from "@core/integration";
import background from "../../../assets/images/background.png";
import {useAppStack} from "../../routes/stack";
import * as S from "./styles";

export const SplashScreen = () => {
  const navigation = useAppStack();
  const auth = new Auth();

  useEffect(() => {
    if (auth.userId) {
      navigation.navigate("MarketList");
    } else {
      navigation.navigate("Auth");
    }
  });

  return (
    <S.Image
      source={background}
      accessibilityLabel={"An image of Billy giving you a concerned look"}
    />
  );
};
