import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {SPairs} from './Pairs.style';
import {DropDownComponent} from '../../components/dropdowns/Dropdown.screen';
import {LPairs} from './Pairs.logic';
import {AppStyle} from '../../styles/App.screen';

interface IPairsScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Pairs'>;
}

export const PairsScreen: FC<IPairsScreenProps> = ({navigation}) => {
  const {value, setValue, items, setItems, onNext} = LPairs({navigation});

  return (
    <AppStyle>
      <>
      <View style={SPairs.block}>
        <DropDownComponent
          setValue={setValue}
          setItems={setItems}
          value={value}
          items={items}
        />
        <DropDownComponent
          setValue={setValue}
          setItems={setItems}
          value={value}
          items={items}
        />
      </View>

      <View style={SPairs.nextButton}>
        <TouchableOpacity onPress={onNext}>
          <Text style={SPairs.textButton}>Watch</Text>
        </TouchableOpacity>
      </View>
      </>
    </AppStyle>
  );
};
