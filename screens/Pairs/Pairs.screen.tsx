import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {SPairs} from './Pairs.style';
import {DropDownComponent} from '../../components/dropdowns/Dropdown.screen';
import {LPairs} from './Pairs.logic';
import {SvgIcon} from '../../utils/SvgIcon';
import {HArrowDown} from '../../navigation/Header/Header.conf';
import {Card} from 'react-native-paper';

interface IPairsScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Pairs'>;
}

export const PairsScreen: FC<IPairsScreenProps> = ({navigation}) => {
  const {value, setValue, items, setItems, onNext} = LPairs({navigation});

  return (
    <>
      <Card mode="outlined" style={SPairs.block}>
        <Card.Title title="Choose Pairs" />
        <Card.Content>
          <DropDownComponent
            setValue={setValue}
            setItems={setItems}
            value={value}
            items={items}
          />
          <View style={SPairs.arrowStyle}>
            <SvgIcon icon={HArrowDown()} />
          </View>
          <DropDownComponent
            setValue={setValue}
            setItems={setItems}
            value={value}
            items={items}
          />
        </Card.Content>
      </Card>

      <View style={SPairs.nextButton}>
        <TouchableOpacity onPress={onNext}>
          <Text style={SPairs.textButton}>Watch</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
