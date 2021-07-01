/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (

      <ScrollView horizontal ={true}
      pagingEnabled={true}
      style={styles.container}>
        <View style={styles.outer}>
          <Text style={styles.inner}>Welcome to NotifyMe</Text>
          <Text style={styles.innertwo}>I need to know now!</Text>
        </View>
        <View style={[styles.outer, styles.red]}>
          <Text style={styles.inner}>Helping facilitate Communication</Text>
          <Text style={styles.innertwo}>From School shootings to Dangerous Weather!</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.inner}>Our Innovative Approach</Text>
          <Text style={styles.innertwo}>Combines the experience of Students, Teachers, Parents, Police, and School Adminastrators</Text>
        </View>
        <View style={styles.outer}>
          <Text style={styles.inner}>Available on Android or iOS</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  red: {
    backgroundColor: '#dd4b39',
  },
  green: {
    backgroundColor: '#27ae60',
  },
  inner: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  },
  innertwo: {
    color: '#fff',
    fontSize: 19,
  },
});
