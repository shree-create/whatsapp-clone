import React, { useState } from "react";
import { Text, Box, Input, Pressable } from "../core";
import { Ionicons } from '@expo/vector-icons';

type inputProp = {
  label: string;
  value: string;
  onChange: any;
  error: string | undefined;
};

const TextInput = ({ label, value, onChange, error }: inputProp) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const labelStyle = {
    position: "absolute",
    top: !isFocused ? 30 : 8,
    left: 4,
    color: value != "" && !isFocused ? "#fff" : isFocused ? "#000" : "#A3A3A3",
    backgroundColor: "#fff",
    zIndex: isFocused ? 10 : -2,
    paddingHorizontal: 4,
    fontSize: isFocused ? 12 : 18,
  };
  return (
    <Box w={"100%"} paddingTop={18}>
      <Text style={labelStyle}>
        {label} {isFocused}
      </Text>
      <Input zIndex={-1} padding={4} alignItems={'center'}>
        <Input.Input
          value={value}
          type={label == 'Password' && !isShown ? 'password' : 'text'}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChangeText={onChange}
        ></Input.Input>
        {label == 'Password' && <Pressable onPress={()=>{setIsShown(!isShown)}}>
         {isShown ? <Ionicons name="eye-off-outline" size={20} color="black" />:<Ionicons name="eye-outline" size={20} color="black" />}
        </Pressable>}
      </Input>
      {error && (
        <Text color={"$red400"} fontSize={12}>
          {error}
        </Text>
      )}
      {!error && (
        <Text color={"$white"} fontSize={12}>
          error
        </Text>
      )}
    </Box>
  );
};

export default TextInput;
