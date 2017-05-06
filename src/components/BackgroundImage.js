'use strict';

import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

export default class BackgroundImage extends Component {
  render(){
    return(
      <Image source={require('../../public/images/bg1.jpg')} style={styles.backgroundImage}>
        {this.props.children}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  }
});
