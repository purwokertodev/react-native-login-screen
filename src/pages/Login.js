import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import BackgroundImage from '../components/BackgroundImage';

export default class Login extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  forgotPasswordAction(){
    Alert.alert('Forgot Password ?');
  }

  loginAction(){
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(user);
    Alert.alert(`Login as ${user.username}`);
  }

  registerAction(){
    Alert.alert('Registering');
  }

  render(){
    return(
      <BackgroundImage>
        <ScrollView style={styles.scroll}>
          <Container>
            <Button
              label='Forgot Password ?'
              styles={{button: styles.alignRight, label: styles.label}}
              onPress={this.forgotPasswordAction.bind(this)}>

            </Button>
          </Container>
          <Container>
            <Label text='Username or Email'/>
            <TextInput style={styles.textInput}  onChangeText={(text) => this.setState({username: text})}/>
          </Container>
          <Container>
            <Label text='Password'/>
            <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(text) => this.setState({password: text})}/>
          </Container>
          <View>
            <Container>
              <Button
                label='Login'
                styles={{button: styles.loginButton, label: styles.buttonWhiteText}}
                onPress={this.loginAction.bind(this)}>

              </Button>
              <Button
                label='Register'
                styles={{label: styles.registerButton}}
                onPress={this.registerAction.bind(this)}>

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
    color: '#04acdb',
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
  loginButton: {
    backgroundColor: '#f43924'
  },
  registerButton: {
    color: '#f43924',
    fontSize: 20
  },
  footer: {
    marginTop: 100
  }
});
