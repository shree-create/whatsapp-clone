import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React, { useState } from "react";
import { Center, Box, Button, Pressable, Text } from "../../../components";
import TextInput from "../../../components/app/TextInput";
import * as yup from "yup";
import axios from "axios";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Password is required"),
  });
  return (
    <Box flex={1} justifyContent={"center"} alignItems={"center"}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:3000/users/signup", {
              name: values.name,
              email: values.email,
              password: values.password,
            })
            .then((data) => {
              setError("");
              console.log("data...", data.data);
            })
            .catch((err) => {
              console.log("error...", err.response.data.message);
              setError(err.response.data.message);
            });
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <Center
              width={"90%"}
              backgroundColor={"$white"}
              paddingHorizontal={20}
              paddingVertical={30}
              borderRadius={8}
              shadowColor={"$black"}
              shadowOpacity={0.2}
            >
              <TextInput
                label={"Name"}
                value={values.name}
                onChange={handleChange("name")}
                error={errors.name}
              ></TextInput>
              <TextInput
                label={"Email"}
                value={values.email}
                onChange={handleChange("email")}
                error={errors.email}
              ></TextInput>
              <TextInput
                label={"Password"}
                value={values.password}
                onChange={handleChange("password")}
                error={errors.password}
              ></TextInput>
              <Button
                width={"100%"}
                marginTop={"12%"}
                backgroundColor={"$success800"}
                onPress={() => {
                  handleSubmit();
                }}
              >
                <Button.Text
                  color={"$white"}
                  fontWeight={"$medium"}
                  fontSize={18}
                >
                  SignUp
                </Button.Text>
              </Button>
              <Box flexDirection="row" marginTop={6}>
                <Text color={"$black"} marginRight={4}>
                  Already have an account?
                </Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate("SignIn");
                  }}
                >
                  <Text color={"$success800"} fontWeight={"$medium"}>
                    SignIn
                  </Text>
                </Pressable>
              </Box>
              <Box marginTop={4}>
                {error != "" ? (
                  <Text
                    color={"$red700"}
                    fontWeight={"$medium"}
                    key={Math.random().toString()}
                  >
                    {error}
                  </Text>
                ) : (
                  <Text color={"$transparent"} fontWeight={"$medium"}>
                    error
                  </Text>
                )}
              </Box>
            </Center>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default SignUp;
