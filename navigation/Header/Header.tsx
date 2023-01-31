import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {HArrowBack} from './Header.conf';
import {SHeader} from './Header.styles';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {SvgIcon} from '../../utils/SvgIcon';

export interface IHeaderProps {
  navigation: NavigationProp<RootStackParamList, 'Course'>;
  iconColor?: string;
}

export const Header: React.FC<IHeaderProps> = ({navigation, iconColor}) => {
  const arrowBackMemo = React.useMemo(() => HArrowBack(iconColor), [iconColor]);

  return (
    <View style={SHeader.iconBlock}>
      <View style={SHeader.icon}>
        <TouchableOpacity
          onPress={() => {
            navigation?.goBack();
          }}>
          <SvgIcon icon={arrowBackMemo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
