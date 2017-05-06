'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Label = function Label(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    { style: props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel },
    props.text
  );
};

var styles = _reactNative.StyleSheet.create({
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#595856',
    marginBottom: 10
  }
});

exports.default = Label;