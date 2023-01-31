import React, {FC} from 'react';
import {View} from 'react-native';
import {SAppStyle} from './App.style';

interface IAppStyle {
  children: JSX.Element;
}

export const AppStyle: FC<IAppStyle> = ({children}) => {
  return <View style={SAppStyle.main}>{children}</View>;
};
