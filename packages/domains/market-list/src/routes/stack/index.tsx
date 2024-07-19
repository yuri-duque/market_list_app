import React from "react";
import {useNavigation} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {AddProductScreen, ListScreen} from "../../screens";

export type MarketStackParamList = {
  List: undefined;
  AddProduct: {listId: string};
  Home: undefined;
};

const Stack = createNativeStackNavigator<MarketStackParamList>();

export const MarketStack = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerTitleAlign: "center",
  };

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="List">
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{title: "Add Product", headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export const useMarketStack = () =>
  useNavigation<NativeStackNavigationProp<MarketStackParamList>>();
