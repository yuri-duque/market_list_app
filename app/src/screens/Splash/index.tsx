import {useCallback, useEffect} from "react";
import {Auth} from "@core/integration";
import {useFocusEffect} from "@react-navigation/native";
import background from "../../../assets/images/background.png";
import {useAppStack} from "../../routes/stack";
import * as S from "./styles";

export const SplashScreen = () => {
  const navigation = useAppStack();
  const auth = new Auth();

  const loadUser = async () => {
    setTimeout(async () => {
      if (auth.userId) {
        navigation.navigate("MarketList");
      } else {
        navigation.navigate("Auth");
      }
    }, 1000);
  };

  useEffect(() => {
    loadUser();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadUser();
    }, []),
  );

  return (
    <S.Image
      source={background}
      accessibilityLabel={"An image of Billy giving you a concerned look"}
    />
  );
};
