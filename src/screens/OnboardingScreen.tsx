import React, { useState } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Image } from 'expo-image';
import { Button } from '../components';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

const image1 = require('../../assets/onboarding1.jpg');
const image2 = require('../../assets/onboarding2.jpg');
const image3 = require('../../assets/onboarding3.jpg');

const slides = [
  {
    text: {
      line1: 'meet your coach',
      line2: 'start your journey',
    },
    imgUrl: image1,
  },
  {
    text: {
      line1: 'Create a workout plan',
      line2: 'to stay fit',
    },
    imgUrl: image2,
  },
  {
    text: {
      line1: 'Action is the',
      line2: 'key to all success',
    },
    imgUrl: image3,
  },
];

const OnboardingScreen = () => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (direction = 'left') => {
    console.log('Swiped!');
    if (direction === 'left') {
      setIndex((prev) => (prev >= 2 ? 0 : prev + 1));
    } else {
      setIndex((prev) => (prev === 0 ? 2 : prev--));
    }
  };

  const gesture = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd((props) => console.log('right', props));

  return (
    <GestureDetector gesture={gesture}>
      <View className="flex-1">
        <StatusBar backgroundColor={'transparent'} translucent />
        {slides.map((slide, idx) => (
          <View
            key={idx}
            className={`relative flex-1 justify-center items-center ${
              index === idx ? 'block' : 'hidden'
            }`}
          >
            <Image
              source={slide.imgUrl}
              className="flex-1 w-full h-full"
              contentFit="cover"
              transition={1000}
              placeholder={'skadjfkdjfkdjk485748574'}
            />
            <View className="absolute top-1/2 left-0 right-0 bottom-0">
              <View className="mt-28">
                <Text className="text-white text-2xl px-5 text-center font-integral">
                  {slide.text.line1}
                </Text>
                <Text className="font-integral-bold text-white text-2xl px-5 text-center">
                  {slide.text.line2}
                </Text>
              </View>
              {index === 2 && (
                <View className="flex justify-center items-center">
                  <Button title="Hello" />
                </View>
              )}
              <View className="flex-row justify-center items-center gap-5 mt-28">
                {slides.map((_, idx) => (
                  <View
                    key={`indicator_${idx}`}
                    className={`h-1 ${
                      index === idx ? 'w-8 bg-primary' : 'w-5 bg-gray-500'
                    }`}
                  />
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </GestureDetector>
  );
};

export default OnboardingScreen;
