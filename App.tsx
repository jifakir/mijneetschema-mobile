import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux';
import ToastManager from 'toastify-react-native';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    Integral: require('./assets/fonts/IntegralCF-Regular.otf'),
    'Integral-Bold': require('./assets/fonts/IntegralCF-Bold.otf'),
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView className="flex-1">
          <Navigation />
          <ToastManager />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
