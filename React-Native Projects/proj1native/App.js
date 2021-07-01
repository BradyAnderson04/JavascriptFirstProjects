import React from 'react';
import { StyleSheet, Text, View, Button, DrawerNavigator } from 'react-native';
import Superman from './components/Superman.js';
import Red from './components/Red.js';
import Blue from './components/Blue.js';
import Green from './components/Green.js';
export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <Red />
        <Blue />
        <Green />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE8E7',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
});
