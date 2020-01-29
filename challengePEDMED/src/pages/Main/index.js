import React, {Component} from 'react';

import {FlatList, Text, View, SafeAreaView, SectionList} from 'react-native';
import {getData} from '../../store/actions/indications';
import {connect} from 'react-redux';
import Accordian from '../../components/Accordian';

class Main extends Component {
  componentDidMount() {
    this.props.onGetData();
  }
  render() {
    const {listIndications} = this.props;
    return (
      <SafeAreaView>
        {/* <SectionList
          sections={listIndications}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>;
          }}
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                padding: 30,
              }}>
              {title}
            </Text>
          )}
        /> */}
        <FlatList
          data={listIndications}
          renderItem={({item}) => {
            console.log('ITEM', item);
            return <Accordian title={item.title} data={item.data} />;
          }}
          keyExtractor={(item, index) => item.title}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({indications}) => ({
  listIndications: indications.listIndications,
});

const mapDispatchToProps = dispatch => ({
  onGetData: () => dispatch(getData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
