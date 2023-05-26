import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Text, Box, IconButton, Button, useTheme, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthParamsList } from "../../navigation/AuthNavigator";
import { TextInput } from "react-native";

type IProp = NativeStackScreenProps<AuthParamsList, "OtpScreen">;

const OtpScreen = ({ route }: IProp) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const inputRef1 = useRef<TextInput>();
  const inputRef2 = useRef<TextInput>();
  const inputRef3 = useRef<TextInput>();
  const inputRef4 = useRef<TextInput>();
  const inputArray: React.MutableRefObject<TextInput | undefined>[] = [
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
  ];
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
      <Box alignItems={"center"}>
        <Text mb={4}>
          Code has been send to +{route.params.countryCode}{" "}
          {route.params.mobileNumber}
        </Text>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"80%"}
        >
          {inputArray.map((array, index) => {
            return (
              <Input
                width={50}
                height={50}
                autoFocus={index == 0}
                ref={array}
                key={index}
                returnKeyType={"next"}
                blurOnSubmit={false}
                _focus={{borderColor: isInvalidInput ? colors.danger[900] : colors.black[100], backgroundColor: isInvalidInput ? colors.danger[800] : 'transparent', width: 55, height: 55}}
                onChange={(val) => {
                  if(val.nativeEvent.text.length === 1){
                    if(val.nativeEvent.text.match(/^[0-9]*$/)){
                      setIsInvalidInput(false)
                      if(index+1 === inputArray.length){
                        inputArray[index].current?.blur()
                        return
                      }
                      inputArray[index + 1].current?.focus();
                    }else{
                      setIsInvalidInput(true)
                    }
                  }
                }}
              ></Input>
            );
          })}
        </Box>
        <Text marginTop={4}>
          Resend Code in <Text color={colors.primary[800]}>56</Text> s
        </Text>
      </Box>
      <Box>
        <Button borderRadius={25} backgroundColor={colors.black[100]}>
          <Text
            color={colors.secondary[100]}
            fontSize={18}
            fontWeight={"medium"}
          >
            Verify
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default OtpScreen;

