import React, {Component} from 'react';

import {View} from 'react-native';
import ImageCustom from '~/components/ImageCustom';
import styles from './styles';
export default class Detail extends Component {
  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <ImageCustom url={item.urlImage} style={styles.thumb} />
      </View>
    );
  }
}
