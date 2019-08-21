import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class Notification extends Component {
  static navigationOptions = {
    title: 'Notification',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Notification</Text>
      </View>
    );
  }
}

export default Notification;
