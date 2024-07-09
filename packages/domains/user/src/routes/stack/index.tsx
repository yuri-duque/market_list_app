import React from "react";
import {useNavigation} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {ForgotPasswordScreen, SigninScreen, SignupScreen} from "../../screens";

type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Signin">
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{title: "Register", headerShown: true}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export const useAuthStack = () =>
  useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
