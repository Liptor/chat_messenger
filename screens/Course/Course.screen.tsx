import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import { SCourse } from './Course.style';

interface ICourseScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Course'>;
}

export const CourseScreen: FC<ICourseScreenProps> = ({navigation}) => {
  return (
    <View style={SCourse.main}>
      <Text>Hello</Text>
    </View>
  );
};
