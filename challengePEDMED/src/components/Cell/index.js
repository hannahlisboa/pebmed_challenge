import React, {Component} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

// import { Container } from './styles';

export default class Cell extends Component {
  render() {
    const {item, index} = this.props;

    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={[
            styles.childRow,
            item.value ? styles.btnInActive : styles.btnActive,
          ]}
          onPress={() => this.onClick(index)}>
          <View>
            <FastImage
              style={styles.thumb}
              source={{
                uri: item.urlImage,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={[styles.itemInActive]}>{item.name}</Text>
          </View>

          {/* <Icon
          name={'check-circle'}
          size={24}
          color={item.value ? Colors.LIGHTGRAY : Colors.GREEN}
        /> */}
        </TouchableOpacity>
      </View>
    );
  }
}
