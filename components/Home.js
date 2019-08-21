import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Notification from './Notification';
class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
        <Button
          title="Go to Notification"
          onPress={() => this.props.navigation.navigate('Notification')}
        />
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
