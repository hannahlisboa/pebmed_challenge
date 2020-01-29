import React, {Component} from 'react';

import {FlatList, Text, View, SafeAreaView, SectionList} from 'react-native';
import {getData} from '../../store/actions/indications';
import {connect} from 'react-redux';
import Accordian from '../../components/Accordian';
import CustomLoading from '~/components/CustomLoading';
import LogoTitle from '~/components/LogoTitle';
class Main extends Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
  };
  componentDidMount() {
    this.props.onGetData();
  }
  onAction = item => {
    console.log('CHEGOUUU', item);
    this.props.navigation.navigate('Detail', {
      item,
    });
  };

  render() {
    const {listIndications, isFetching} = this.props;
    return (
      <SafeAreaView>
        <CustomLoading visible={isFetching} />
        <FlatList
          data={listIndications}
          renderItem={({item}) => {
            return (
              <Accordian
                title={item.title}
                data={item.data}
                action={this.onAction}
              />
            );
          }}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({indications}) => ({
  listIndications: indications.listIndications,
  isFetching: indications.isFetching,
});

const mapDispatchToProps = dispatch => ({
  onGetData: () => dispatch(getData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
