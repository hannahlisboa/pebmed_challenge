import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  thumb: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.75,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_description: {
    color: 'gray',
  },
  container_data: {
    padding: 20,
  },
  container: {
    flex: 1,,
  },
});
