import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp } from "../screens";

export type AuthParamsList = {
    SignIn: undefined;
    SignUp: undefined;
}

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator<AuthParamsList>();
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='SignIn' component={SignIn}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthNavigator

