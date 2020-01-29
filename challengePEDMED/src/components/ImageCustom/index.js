import React, {Component} from 'react';

import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

// import { Container } from './styles';

export default class ImageCustom extends Component {
  render() {
    const {url, style} = this.props;
    return (
      <FastImage
        style={style}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }
}
