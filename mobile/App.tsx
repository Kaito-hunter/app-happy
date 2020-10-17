import React from 'react';
import { useFonts } from 'expo-font';
import Spinner from 'react-native-loading-spinner-overlay';

import Routes from './src/routes';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

export default function App() {
  const [fonstLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fonstLoaded) {
    return <Spinner />;
  }
  return <Routes />;
}
