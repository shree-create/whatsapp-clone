import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  return data;
};

export const setItem = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, value);
};
