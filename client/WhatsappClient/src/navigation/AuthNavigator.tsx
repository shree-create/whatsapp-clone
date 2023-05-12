import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from "../screens";

export type AuthParamsList = {
    Login: undefined;
    Register: undefined;
}

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator<AuthParamsList>();
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='Register' component={Register}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthNavigator
