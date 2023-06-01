import React, { useEffect, useState } from "react";
import AuthContext from "../utils/authContext";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACCESS_TOKEN } from "../utils/constants";
import { getItem, setItem } from "../utils/commonFunctions";

const Navigator = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getItem(ACCESS_TOKEN).then((data) => {
      if (data && data != undefined) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {authenticated ? (
        <AppNavigator></AppNavigator>
      ) : (
        <AuthNavigator></AuthNavigator>
      )}
    </AuthContext.Provider>
  );
};

export default Navigator;
