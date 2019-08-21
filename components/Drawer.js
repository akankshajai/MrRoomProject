import React, {Component} from 'react';
import {NavigationActions, DrawerActions} from 'react-navigation';
import {ScrollView, View, Text} from 'react-native';
import PropTypes from 'prop-types';

class Drawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text onPress={this.navigateToScreen('Home')}>Home</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('Search')}>Search</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('Profile')}>Profile</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('Manager')}>Manager</Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('Notification')}>
              Notification
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object,
};

export default Drawer;
