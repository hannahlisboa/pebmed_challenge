import React, {Component} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import ImageCustom from '../ImageCustom';
export default class Cell extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={[
            styles.childRow,
            item.value ? styles.btnInActive : styles.btnActive,
          ]}
          onPress={() => this.onClick(item)}>
          <View>
            <ImageCustom url={item.urlImage} style={styles.thumb} />
            <Text style={[styles.itemInActive]}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  onClick = item => {
    this.props.action(item);
  };
}
