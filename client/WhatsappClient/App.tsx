import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from "@react-navigation/native";
import { createRef } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { Button, GluestackUIProvider } from "./src/components";
import { config } from "./gluestack-ui.config";
import { SafeAreaView } from "react-native";

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer ref={navigationRef}>
        <AuthNavigator></AuthNavigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
