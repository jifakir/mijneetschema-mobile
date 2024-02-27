import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'src/components';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 font-integral bg-black-light px-6">
      <StatusBar />
      <View className="mt-20">
        <Text className="text-white font-integral text-4xl">
          Hello <Text className="font-integral-bold">Mike,</Text>
        </Text>
        <Text className=" font-open text-white text-[15px]">Good morning.</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
