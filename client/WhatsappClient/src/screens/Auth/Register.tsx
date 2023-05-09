import { Box, Button, Flex, Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Register = () => {
  const navigation = useNavigation();
  return (
    <Flex center>
      <Text>Register</Text>
      <Button
        title={"Login"}
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Button>
    </Flex>
  );
};

export default Register;
