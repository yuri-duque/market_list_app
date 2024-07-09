import {useState} from "react";
import {Button, Card, Input, Page, Spacing, Typography} from "@core/ds";
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
          <Input value={email} onChangeText={setEmail} placeholder="Email" keyboardType={"email-address"}/>
          <Spacing size="S" />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <Spacing size="XXL" />
          <Button
            text="Login"
            onPress={onLogin}
            textProps={{weight: "semiBold"}}
          />
          <Spacing size="S" />
          <Button
            text="Register"
            onPress={goToRegister}
            color="secondary"
            variation="outlined"
            textProps={{weight: "semiBold", size: "M"}}
          />
        </Card>
      </S.Container>
    </Page>
  );
};
