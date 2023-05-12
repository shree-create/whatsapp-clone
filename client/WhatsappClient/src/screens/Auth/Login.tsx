import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Box, Button, useTheme } from "native-base";

const Login = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <Box safeArea>
      <Text>Login</Text>
      <Button
        onPress={() => {
          navigation.navigate("Register");
        }}
        backgroundColor={colors.primary[800]}
      >
        <Text>Register</Text>
      </Button>
    </Box>
  );
};

export default Login;
