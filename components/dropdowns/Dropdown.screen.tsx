import {SDropdown} from './Dropdown.style';
import React, {useState, FC} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';
import {IDropDownComponent} from './Dropdown.types';

export const DropDownComponent: FC<IDropDownComponent> = ({
  setValue,
  value,
  items,
  setItems,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={SDropdown.dropDown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};
