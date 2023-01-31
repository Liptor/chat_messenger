import React, {FC} from 'react';
import { View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {SCourse} from './Course.style';
import { Header } from '../../navigation/Header/Header';
import { AppStyle } from '../../styles/App.screen';

interface ICourseScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Course'>;
}

export const CourseScreen: FC<ICourseScreenProps> = ({navigation}) => {
  return (
    <AppStyle>
      <View style={SCourse.header}>
        <Header navigation={navigation} />
      </View>
    </AppStyle>
  );
};
