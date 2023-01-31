import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import { SCurrency } from './Currency.style';

interface ICurrencyScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Currency'>;
}

export const CurrencyScreen: FC<ICurrencyScreenProps> = ({navigation}) => {
  return (
    <View style={SCurrency.main}>
      <Text>Hello</Text>
    </View>
  );
};
