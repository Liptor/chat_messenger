import { deviceHeight, deviceWidth } from './../../constants/Layout';
import { StyleSheet } from 'react-native';

export const SPairs = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff8dc',
  },
  block: {
    height: deviceHeight / 3,
    marginTop: deviceWidth / 2,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: '#e9967a',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { height: 3, width: 3 },
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  nextButton: {
    width: deviceWidth / 2,
    alignSelf: "center",
    backgroundColor: "#8fbc8f",
    marginTop: deviceHeight / 4,
    borderRadius: 50,
  },
  textButton: {
    textAlign: 'center',
    padding: 20,
    color: '#f0fff0'
  }
});
