import React from "react";
import { NavigationContainer, NavigationContainerRef, ParamListBase } from "@react-navigation/native";
import { createRef } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator></AuthNavigator>
    </NavigationContainer>
  );
}
