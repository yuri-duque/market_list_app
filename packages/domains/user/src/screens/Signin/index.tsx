import {useState} from "react";
import {View} from "react-native";
import {Button, Card, Input, Page, Typography} from "@core/ds";
import {useAuthStack} from "../../routes";
import * as S from "./styles";

export const SigninScreen = () => {
  const navigation = useAuthStack();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {};

  const goToRegister = () => {
    navigation.navigate("Signup");
  };

  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <Page>
      <S.Container>
        <Card
          header={
            <Typography
              text="Login"
              weight="bold"
              align="center"
              color="secondary"
              size="L"
            />
          }>
          <S.InputsGroup>
            <Input value={email} onChangeText={setEmail} label="Email" />
            <Input
              value={password}
              onChangeText={setPassword}
              label="Password"
              type="password"
            />
          </S.InputsGroup>

          <S.ForgotPasswordContainer onPress={goToForgotPassword}>
            <Typography
              text="forgot password"
              align="right"
              size="S"
              color="primary"
            />
          </S.ForgotPasswordContainer>

          <S.ButtonsContainer>
            <S.ButtonContainer>
              <Button
                text="Register"
                onPress={goToRegister}
                color="primary"
                variation="outlined"
                textProps={{weight: "semiBold", size: "M"}}
              />
            </S.ButtonContainer>
            <S.ButtonContainer>
              <Button
                text="Login"
                onPress={onLogin}
                textProps={{weight: "semiBold"}}
              />
            </S.ButtonContainer>
          </S.ButtonsContainer>
        </Card>
      </S.Container>
    </Page>
  );
};
