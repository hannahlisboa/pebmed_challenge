import React, {Component} from 'react';

import {View, Text, ScrollView} from 'react-native';
import ImageCustom from '~/components/ImageCustom';
import styles from './styles';

export default class Detail extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => (
        <Text style={[styles.text, {color: 'white'}]}>
          {navigation.getParam('item').name}
        </Text>
      ),
      headerTintColor: '#ffffff',
      headerTransparent: true,
      headerStyle: {borderBottomWidth: 0},
    };
  };
  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageCustom url={item.urlImage} style={styles.thumb} />
          <View style={styles.container_data}>
            <Text style={[styles.text, {marginBottom: 20}]}>DESCRIÇÃO</Text>
            <Text style={styles.text_description}>{item.description}</Text>
            <Text style={[styles.text, {marginTop: 20}]}>
              REFERÊNCIAS BIBLIOGRÁFICAS
            </Text>
            {item.authors.map(author => (
              <Text style={[styles.text_description, {marginTop: 20}]}>
                {author.name}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
