import React, {FC} from 'react';
import {View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {SCourse} from './Course.style';
import {Header} from '../../navigation/Header/Header';

interface ICourseScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Course'>;
}

export const CourseScreen: FC<ICourseScreenProps> = ({navigation}) => {
  return (
    <View style={SCourse.header}>
      <Header navigation={navigation} />
    </View>
  );
};
