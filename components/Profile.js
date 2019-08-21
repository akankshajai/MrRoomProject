import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default Profile;
