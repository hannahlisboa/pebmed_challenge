import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../Accordian/colors';

export default StyleSheet.create({
  listItem: {
    width: Dimensions.get('window').width / 2,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 10,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.GRAY,
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  itemInActive: {
    fontSize: 14,
    color: Colors.DARKGRAY,
    marginTop: 10,
  },
  thumb: {
    width: Dimensions.get('window').width / 2 - 20,
    height: (Dimensions.get('window').width / 2 - 20) * 0.75,
    borderRadius: 15,
  },
});
