import React, {Component} from 'react';
import {View, Text} from 'react-native';
class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Search</Text>
      </View>
    );
  }
}

export default Search;
