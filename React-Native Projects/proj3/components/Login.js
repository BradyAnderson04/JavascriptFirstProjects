/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,

} from 'react-native';
import Myform from './Myform';

export default class Login extends Component {
  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
            style ={styles.logo}
            source = {require('./images/loginpic.jpg')}
          />
          <Text style={styles.title}>Welcome to NotifyMe</Text>
        </View>
        <View style={styles.myForm}>
          <Myform />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    width: Dimensions.get('window').width,
  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height/3 ,
    width: Dimensions.get('window').width * (98/100),
  },
  myForm: {
    flex: 2,
  },
  title:  {
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
  },
});
