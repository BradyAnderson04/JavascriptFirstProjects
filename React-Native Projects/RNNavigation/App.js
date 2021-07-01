/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Settings from './screens/Settings';
import Home from './screens/Home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = StackNavigator({
  SettingScreen: {screen: Settings},
  HomeScreen: { screen: Home},
})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
