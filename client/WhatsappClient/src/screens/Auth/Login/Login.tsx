import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Box,
  Center,
  Text,
  Pressable,
  Divider,
  Button,
  Input,
} from "../../../components";
import { SafeAreaView } from "react-native";

type countryType = {
  name: string;
  callingCode: string;
};

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState("91");
  const [countryName, setCountryName] = useState("India");
  const [isSelected, setIsSelected] = useState(false);
  const onSelect = (country: countryType) => {
    setCountryCode(country.callingCode);
    setCountryName(country.name);
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const loginValidationSchema = yup.object().shape({
    mobileNumber: yup
      .string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ mobileNumber: "" }}
        onSubmit={(values) => {
          navigation.navigate("OtpScreen", {
            countryCode: countryCode,
            mobileNumber: values.mobileNumber,
          });
        }}
      >
        {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
          <>
            <Center w={"80%"} marginTop={"10%"}>
              <Text mr={4} fontSize={20} fontWeight={"bold"} color={"$black"}>
                Enter your phone number
              </Text>
              <Text fontSize={13} mt={6} color={"$black"}>
                WhatsApp will need to verify your phone number.
              </Text>
              <Box w={"100%"} alignItems={"center"} mt={20}>
                <Box
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w={"80%"}
                >
                  <CountryPicker
                    visible={isSelected}
                    onSelect={onSelect}
                    withFilter={true}
                    renderFlagButton={() => {
                      return (
                        <Text textAlign="center" color={"$black"}>
                          {countryName}
                        </Text>
                      );
                    }}
                  />
                  <Pressable
                    onPress={() => {
                      setIsSelected(!isSelected);
                    }}
                    ml={4}
                  >
                    <AntDesign name="caretdown" size={14} color="black" />
                  </Pressable>
                </Box>
                <Box w={"80%"}>
                  <Divider my={2} bgColor={"$success800"} />
                </Box>
                <Box
                  justifyContent={"space-between"}
                  flexDirection={"row"}
                  w={"80%"}
                >
                  <Box
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    w={"15%"}
                    borderColor={"$success800"}
                    borderBottomWidth={1}
                  >
                    <AntDesign name="plus" size={12} color="black" />
                    <Text color={"$black"}>{countryCode}</Text>
                  </Box>
                  <Box w={"80%"}>
                    <Input variant={"underlined"} borderColor={"$success800"}>
                      <Input.Input
                        fontSize={16}
                        onChangeText={handleChange("mobileNumber")}
                        borderColor={"$success800"}
                        onBlur={handleBlur("mobileNumber")}
                        value={values.mobileNumber}
                      ></Input.Input>
                    </Input>
                  </Box>
                </Box>
                {errors.mobileNumber && (
                  <Box mt={2} px={2} py={1} borderRadius={25}>
                    <Text fontSize={12} color={"$red700"}>
                      {errors.mobileNumber}
                    </Text>
                  </Box>
                )}
              </Box>
            </Center>
            <Button
              backgroundColor={"$success800"}
              onPress={() => {
                handleSubmit();
              }}
            >
              <Button.Text color={"$white"} fontWeight={"semibold"}>
                Next
              </Button.Text>
            </Button>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
