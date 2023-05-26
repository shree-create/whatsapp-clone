import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, OtpScreen } from "../screens";

export type AuthParamsList = {
    Login: undefined;
    OtpScreen: {
        countryCode : string;
        mobileNumber: string;
    }
}

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator<AuthParamsList>();
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='OtpScreen' component={OtpScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthNavigator

