import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import BackgroundImage from '../components/BackgroundImage';

export default class Login extends Component {
  press(){
    Alert.alert('Forgot Password ?');
  }
  render(){
    return(
      <BackgroundImage>
        <ScrollView style={styles.scroll}>
          <Container>
            <Button
              label='Forgot Password ?'
              styles={{button: styles.alignRight, label: styles.label}}
              onPress={this.press.bind(this)}>

            </Button>
          </Container>
          <Container>
            <Label text='Username or Email'/>
            <TextInput style={styles.textInput}/>
          </Container>
          <Container>
            <Label text='Password'/>
            <TextInput secureTextEntry={true} style={styles.textInput}/>
          </Container>
          <View>
            <Container>
              <Button
                label='Forgot Password ?'
                styles={{button: styles.alignRight, label: styles.label}}
                onPress={this.press.bind(this)}>

              </Button>
            </Container>
          </View>
        </ScrollView>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    padding: 30,
    flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },

  alignRight: {
    alignSelf: 'flex-end'
  },
  textInput: {
    height: 80,
    fontSize: 30
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF'
  },
  signButton: {
    backgroundColor: '#42bcf4'
  },
  footer: {
    marginTop: 100
  }
});
