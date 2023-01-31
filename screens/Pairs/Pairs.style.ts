import { deviceHeight, deviceWidth } from './../../constants/Layout';
import { StyleSheet } from 'react-native';

export const SPairs = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff8dc',
  },
  block: {
    marginTop: deviceWidth / 3,
    marginRight: 25,
    marginLeft: 25,
    justifyContent: 'center',
  },
  arrowStyle: {
    alignSelf: 'center'
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
