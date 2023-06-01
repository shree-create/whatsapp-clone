import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from "@react-navigation/native";
import { createRef } from "react";
import { GluestackUIProvider } from "./src/components";
import { config } from "./gluestack-ui.config";
import Navigator from "./src/navigation/Navigator";

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer ref={navigationRef}>
        <Navigator></Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
