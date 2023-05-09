import { Box, Button, Flex, Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Login = () => {
  const navigation = useNavigation();
  return (
    <Flex center>
      <Text>Login</Text>
      <Button
        title={"register"}
        onPress={() => {
          navigation.navigate("Register");
        }}
      ></Button>
    </Flex>
  );
};

export default Login;
