/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './navigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider style={styles.main}>
      <SafeAreaView />
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
});

export default App;
