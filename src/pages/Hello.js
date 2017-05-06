'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text , View, Button, Alert, TextInput} from 'react-native';

export default class Hello extends Component {

  constructor(){
    super();
    this.state = {text: 'React Native'}
    this.onPressLearnMore = () => {
      Alert.alert(this.state.text);
    }
  }

  render() {
    return (
      <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Hello', () => Hello);
