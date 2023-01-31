/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import Navigation from './navigation';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView />
      <Navigation />
    </PaperProvider>
  );
}

export default App;
