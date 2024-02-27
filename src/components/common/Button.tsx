import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
type ButtonProps = {
  title: string;
  className?: string;
};
const Button = ({
  title,
  className,
  ...rest
}: ButtonProps & PressableProps) => {
  return (
    <Pressable
      {...rest}
      className={twMerge(
        'mt-5 bg-primary py-3 px-5 rounded-full min-w-[120px]',
        className
      )}
    >
      <Text className="text-center font-semibold text-lg">{title}</Text>
    </Pressable>
  );
};

export default Button;
