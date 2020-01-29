import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  thumb: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.75,
  },
});
