/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class HeroImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../images/img2.jpg')}
          style={styles.hero}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 250,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
