import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Pin from './Pin';

export default class PinContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pin: {
        ange: {
          source: require('../assets/images/ange.png'),
          width: 1000,
          height: 667
        },
        cover: {
          source: require('../assets/images/cover.png'),
          width: 1280,
          height: 720
        },
        harley: {
          source: require('../assets/images/harley.jpg'),
          width: 800,
          height: 1199
        },
      }
    }
  }

  render() {
    return (
      <ScrollView>
        <Pin img={this.state.pin.ange}/>
        <Pin img={this.state.pin.harley}/>
        <Pin img={this.state.pin.cover}/>
      </ScrollView>
    );
  }
}
