import React, { useState } from "react";
import { Text, Box, Input } from '../core';

type inputProp = {
    label: string;
    value: string;
    onChange: any;
    error: string | undefined;
}

const TextInput = ({label, value, onChange, error}: inputProp) => {
    const [isFocused, setIsFocused] = useState(false);
  const labelStyle = {
    position: 'absolute',
     top: !isFocused ? 30 : 8 ,
     left: 4 ,
     color:value!='' && !isFocused ? '#fff' : isFocused ? "#000" : "#A3A3A3",
     backgroundColor : '#fff',
     zIndex: isFocused ? 10 : -2,
     paddingHorizontal: 4,
     fontSize: isFocused ? 12: 18
  }
    return(
        <Box w={"100%"} paddingTop={18}>
          <Text style={labelStyle} >
            {label} {isFocused}
          </Text>
          <Input zIndex={-1} padding={4}>
            <Input.Input
                value={value}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              onChangeText={onChange}
            ></Input.Input>
          </Input>
          {error && <Text color={'$red400'} fontSize={12}>{error}</Text>}
          {!error && <Text color={'$white'} fontSize={12}>error</Text>}
        </Box>
    )
}

export default TextInput;