import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CourseScreen} from '../screens/Course/Course.screen';
import {CurrencyScreen} from '../screens/Currency/Currency.screen';
import {PairsScreen} from '../screens/Pairs/Pairs.screen';
import {RootStackParamList} from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  const navRef = React.useRef<NavigationContainerRef>(null);

  return (
    <NavigationContainer ref={navRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pairs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Pairs" component={PairsScreen} />
      <Stack.Screen
        name="Currency"
        component={CurrencyScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="Course"
        component={CourseScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};
