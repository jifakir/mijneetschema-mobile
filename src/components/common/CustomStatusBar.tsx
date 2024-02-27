import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
type CustomStatusBarProps = {
  bgColor?: string;
  translucent?: boolean;
};

const CustomStatusBar = ({
  bgColor,
  translucent,
  ...rest
}: CustomStatusBarProps & StatusBarProps) => {
  return (
    <StatusBar
      {...rest}
      backgroundColor={bgColor ?? '#1C1C1E'}
      translucent={translucent}
    />
  );
};

export default CustomStatusBar;
