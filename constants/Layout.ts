import { Dimensions } from "react-native";


export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export default {
    window: {
        deviceWidth,
        deviceHeight
    },
    isSmallDevice: deviceWidth < 375
}