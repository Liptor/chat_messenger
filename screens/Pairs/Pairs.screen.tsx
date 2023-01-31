import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {SPairs} from './Pairs.style';

interface IPairsScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Pairs'>;
}

export const PairsScreen: FC<IPairsScreenProps> = ({navigation}) => {
  return (
    <View style={SPairs.main}>
      <View style={SPairs.block}>
        <Text>Hello World</Text>
      </View>
    </View>
  );
};
