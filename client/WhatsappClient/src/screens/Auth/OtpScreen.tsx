import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Box, IconButton, Button, useTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthParamsList } from "../../navigation/AuthNavigator";

type IProp = NativeStackScreenProps<AuthParamsList,'OtpScreen'>;

const OtpScreen = ({route}: IProp) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <Box safeArea flex={1} justifyContent={"space-between"} padding={"24px"}>
      <Box flexDirection={"row"} alignItems={"center"}>
        <IconButton
          icon={<Ionicons name="arrow-back" size={24} color={"black"} />}
          backgroundColor={"transparent"}
          onPress={() => {
            navigation.goBack();
          }}
        ></IconButton>
        <Text fontSize={24} fontWeight={"bold"}>
          Enter OTP Code
        </Text>
      </Box>
      <Box alignItems={'center'}>
        <Text>Code has been send to +{route.params.countryCode} {route.params.mobileNumber}</Text>
        <Text>Resend Code in <Text color={colors.primary[800]}>56</Text> s</Text>
      </Box>
      <Box>
        <Button borderRadius={25} backgroundColor={colors.black[100]}>
          <Text color={colors.secondary[100]} fontSize={18} fontWeight={'medium'}>Verify</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default OtpScreen;
