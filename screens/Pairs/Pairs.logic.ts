import {NavigationProp} from '@react-navigation/native';
import {useState} from 'react';
import {IItems} from '../../components/dropdowns/Dropdown.types';
import {RootStackParamList} from '../../types';

interface ILPairs {
  navigation: NavigationProp<RootStackParamList, 'Pairs'>;
}

export const LPairs = ({navigation}: ILPairs) => {
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<IItems[]>([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const handleNextButtonPress = () => {
    navigation.navigate('Course');
  };

  return {
    value,
    setValue,
    items,
    setItems,
    onNext: handleNextButtonPress,
  };
};
