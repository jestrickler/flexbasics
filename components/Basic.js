import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1, // 1:3
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    flex: 3, // 3:6
    backgroundColor: '#FFEEE4',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  boxTwo: {
    flex: 1, // 1:6
    backgroundColor: '#F17F42'
  },
  boxThree: {
    flex: 2, // 2:6
    flexDirection: 'row',
    justifyContent: 'space-between', // main axis
    alignItems: 'flex-end', // cross axis
    backgroundColor: '#CE6D39',
  },
});


import { Bat, Hat, Cat } from '../icons'

export default class Basic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <Bat />
          <Bat />
          <Bat />
        </View>
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Hat />
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
          <Cat />
          <Cat />
          <Cat />
          <Cat />
          <Cat />
        </View>
      </View>
    );
  }
}
