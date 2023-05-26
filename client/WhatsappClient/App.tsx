import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from "@react-navigation/native";
import { createRef } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { NativeBaseProvider } from "native-base";
import { theme } from "./src/Theme/theme";

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <AuthNavigator></AuthNavigator>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}
