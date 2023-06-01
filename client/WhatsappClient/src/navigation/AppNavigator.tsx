import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../screens";

export type AppNavigatorParams = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
