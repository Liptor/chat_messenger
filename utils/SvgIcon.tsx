import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';

export interface ISvgIconsProps {
  style?: StyleProp<ViewStyle>;
  icon: any;
}

export const SvgIcon: React.FC<ISvgIconsProps> = ({style, icon}) => {
  return <SvgXml style={style} xml={icon} />;
};
