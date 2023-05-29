import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthParamsList } from "../../../navigation/AuthNavigator";
import { SafeAreaView, TextInput } from "react-native";
import { Button, Text, Input, Box, Pressable } from "../../../components";

type IProp = NativeStackScreenProps<AuthParamsList, "OtpScreen">;

const OtpScreen = ({ route }: IProp) => {
  const navigation = useNavigation();
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
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        marginTop={4}
        paddingHorizontal={10}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          alignSelf={"center"}
          marginRight={4}
        >
          <Ionicons name="arrow-back" size={24} color={"black"} />
        </Pressable>
        <Text
          fontSize={24}
          fontWeight={"bold"}
          color={"$black"}
          lineHeight={24}
        >
          Enter OTP Code
        </Text>
      </Box>
      <Box alignItems={"center"}>
        <Text mb={4} color={"$black"} marginBottom={"$4"}>
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
              <Input key={index} sx={{ minWidth: 50, height: 50 }}>
                <Input.Input
                  autoFocus={index == 0}
                  ref={array}
                  returnKeyType={"next"}
                  blurOnSubmit={false}
                  sx={{
                    ":focus": {
                      borderColor: isInvalidInput ? "$red700" : "$black",
                      width: 55,
                      height: 55,
                    },
                  }}
                  onChange={(val) => {
                    if (val.nativeEvent.text.length === 1) {
                      if (val.nativeEvent.text.match(/^[0-9]*$/)) {
                        setIsInvalidInput(false);
                        if (index + 1 === inputArray.length) {
                          inputArray[index].current?.blur();
                          return;
                        }
                        inputArray[index + 1].current?.focus();
                      } else {
                        console.log("error");
                        setIsInvalidInput(true);
                      }
                    }
                  }}
                ></Input.Input>
              </Input>
            );
          })}
        </Box>
        <Text marginTop={8} color={"$black"}>
          Resend Code in <Text color={"$success800"}>56</Text> s
        </Text>
      </Box>
      <Box w={"$80%"} alignSelf={"center"}>
        <Button borderRadius={25} backgroundColor={"$black"}>
          <Text color={"$white"} fontSize={18} fontWeight={"medium"}>
            Verify
          </Text>
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default OtpScreen;
