import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Basic from './components/Basic';
import PinContainer from './components/PinContainer';

export default class flexbasics extends Component {
  render() {
    return (
      <PinContainer />
    );
  }
}

AppRegistry.registerComponent('flexbasics', () => flexbasics);
