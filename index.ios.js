import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/pages/Login';

export default class MyApp1 extends Component {

  render() {
    return (
      <Login />
    );
  }

}

AppRegistry.registerComponent('MyApp1', () => MyApp1);
