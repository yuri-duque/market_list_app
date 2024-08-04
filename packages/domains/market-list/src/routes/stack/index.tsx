import React from "react";
import {useNavigation} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {ListHeader} from "../../components/ListHeader";
import {ListProvider} from "../../context";
import {AddProductScreen, EditProductScreen, ListScreen} from "../../screens";

export type MarketStackParamList = {
  List: undefined;
  AddProduct: {listId: string};
  EditProduct: {listId: string; productId?: string};
  Home: undefined;
};

const Stack = createNativeStackNavigator<MarketStackParamList>();

export const MarketStack = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerTitleAlign: "center",
  };

  return (
    <ListProvider>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="List">
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerShown: true,
            headerBackVisible: false,
            headerTitle: "",
            headerRight: ListHeader,
          }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{title: "Add Product", headerShown: true}}
        />
        <Stack.Screen
          name="EditProduct"
          component={EditProductScreen}
          options={{title: "Edit Product", headerShown: true}}
        />
      </Stack.Navigator>
    </ListProvider>
  );
};

export const useMarketStack = () =>
  useNavigation<NativeStackNavigationProp<MarketStackParamList>>();
