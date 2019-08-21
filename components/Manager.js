import React, {Component} from 'react';
import {View, Text} from 'react-native';
class Manager extends Component {
  static navigationOptions = {
    title: 'Manager',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Manager</Text>
      </View>
    );
  }
}

export default Manager;
