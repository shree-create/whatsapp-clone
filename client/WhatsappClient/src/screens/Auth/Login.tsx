import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  Box,
  Button,
  useTheme,
  Center,
  Divider,
  Input,
  Pressable,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import { Formik } from "formik";
import * as yup from "yup";

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
  const { colors } = useTheme();
  return (
    <Box
      safeArea
      marginY={20}
      justifyContent={"space-between"}
      alignItems={"center"}
      flex={1}
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
            <Center w={"80%"}>
              <Text mr={4} fontSize={20} fontWeight={"bold"}>
                Enter your phone number
              </Text>
              <Text fontSize={13} mt={6}>
                WhatsApp will need to verify your phone number.
              </Text>
              <Box w={"100%"} alignItems={"center"} mt={20}>
                <Box flexDirection={"row"} alignItems={"center"}>
                  <CountryPicker
                    visible={isSelected}
                    onSelect={onSelect}
                    withFilter={true}
                    renderFlagButton={() => {
                      return <Text>{countryName}</Text>;
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
                <Box w={"70%"}>
                  <Divider
                    my="2"
                    _light={{
                      bg: colors.primary[800],
                    }}
                    _dark={{
                      bg: "muted.50",
                    }}
                  />
                </Box>
                <Box
                  justifyContent={"space-between"}
                  flexDirection={"row"}
                  w={"70%"}
                >
                  <Box
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    w={"20%"}
                    borderColor={colors.primary[800]}
                    borderBottomWidth={1}
                  >
                    <AntDesign name="plus" size={12} color="black" />
                    <Text>{countryCode}</Text>
                  </Box>
                  <Box w={"75%"}>
                    <Input
                      variant="underlined"
                      fontSize={16}
                      borderColor={colors.primary[800]}
                      onChangeText={handleChange("mobileNumber")}
                      onBlur={handleBlur("mobileNumber")}
                      value={values.mobileNumber}
                    ></Input>
                  </Box>
                </Box>
                {errors.mobileNumber && (
                  <Box
                    mt={2}
                    backgroundColor={colors.danger[800]}
                    px={2}
                    py={1}
                    borderRadius={25}
                  >
                    <Text fontSize={12} color={colors.danger[900]}>
                      {errors.mobileNumber}
                    </Text>
                  </Box>
                )}
              </Box>
            </Center>
            <Button
              backgroundColor={colors.primary[800]}
              px={6}
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text color={colors.secondary[100]} fontWeight={"semibold"}>
                Next
              </Text>
            </Button>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default Login;

