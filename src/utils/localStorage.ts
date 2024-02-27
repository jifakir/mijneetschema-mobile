import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (name: string, value: string) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (e: any) {
    console.log(e);
  }
};

export const getItem = async (name: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(name);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e: any) {
    console.log(e);
  }
};
