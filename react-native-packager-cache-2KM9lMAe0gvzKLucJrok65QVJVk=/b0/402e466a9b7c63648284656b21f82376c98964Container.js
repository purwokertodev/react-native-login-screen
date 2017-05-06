'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Container = function Container(props) {
  return _react2.default.createElement(
    _reactNative.View,
    { style: styles.labelContainer },
    props.children
  );
};

var styles = _reactNative.StyleSheet.create({
  labelContainer: {
    marginBottom: 20
  }
});

exports.default = Container;