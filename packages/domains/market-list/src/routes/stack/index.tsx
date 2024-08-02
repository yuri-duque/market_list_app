import React from "react";
import {useNavigation} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {ListScreen, ProductFormScreen} from "../../screens";

export type MarketStackParamList = {
  List: undefined;
  ProductForm: {listId: string; productId?: string};
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
        name="ProductForm"
        component={ProductFormScreen}
        options={{title: "Add Product", headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export const useMarketStack = () =>
  useNavigation<NativeStackNavigationProp<MarketStackParamList>>();
