import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import HeroImage from './app/components/HeroImage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <HeroImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
