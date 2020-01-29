import React, {Component} from 'react';
import {Image} from 'react-native';

export default class LogoTitle extends Component {
  render() {
    return (
      <Image
        style={{width: 180, height: 40}}
        resizeMode="contain"
        source={require('../../assets/images/logo_pedmed.png')}
      />
    );
  }
}
