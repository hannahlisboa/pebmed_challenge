import React, {Component} from 'react';
import {View, TouchableOpacity, Text, FlatList, StyleSheet} from 'react-native';
import {Colors} from './colors';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Cell from '../Cell';
export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: true,
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
          <Icon
            name={
              this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
            }
            size={30}
            color={Colors.DARKGRAY}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View>
            <FlatList
              style={{padding: 10}}
              data={this.state.data}
              numColumns={2}
              renderItem={({item, index}) => <Cell item={item} index={index} />}
            />
          </View>
        )}
      </View>
    );
  }

  onClick = index => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({data: temp});
  };

  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  };
}
