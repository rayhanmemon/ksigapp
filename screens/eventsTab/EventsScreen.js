import React, { Component } from 'react';
import { View } from 'react-native';

export default class FeedScreen extends Component {
  static navigationOptions = {
    title: 'Events',
    headerStyle: {
      backgroundColor: '#ff0000',
    },
    headerTintColor: '#fff'
  };

  render() {
    return (
      <View />
    );
  }
}
