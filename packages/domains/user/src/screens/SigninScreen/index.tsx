import {useState} from "react";
import {Text} from "react-native";
import {Button, Card, Input, Page, Spacing, Typography} from "@core/ds";
import * as S from "./styles";

export const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Page>
      <S.Container>
        <Card
          header={
            <Typography
              text="Sign in"
              weight="bold"
              align="center"
              color="secondary"
            />
          }>
          <Spacing size="M" />
          <Input value={email} onChangeText={setEmail} placeholder="Username" />
          <Spacing size="S" />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <Spacing size="M" />
          <Button
            text="Sign in"
            onPress={() => {}}
            textProps={{weight: "semiBold"}}
          />
          <Spacing size="S" />
          <Button
            text="Sign up"
            onPress={() => {}}
            color="secondary"
            variation="outlined"
            textProps={{weight: "semiBold"}}
          />
        </Card>
      </S.Container>
    </Page>
  );
};
