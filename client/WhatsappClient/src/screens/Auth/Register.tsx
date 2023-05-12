import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Box, Button } from "native-base";

const Register = () => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      <Text>Register</Text>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Login</Text>
      </Button>
    </Box>
  );
};

export default Register;
