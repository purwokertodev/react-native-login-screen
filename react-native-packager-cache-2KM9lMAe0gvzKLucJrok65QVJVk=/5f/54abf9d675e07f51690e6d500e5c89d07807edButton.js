'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Button = function Button(props) {

  function getContent() {
    if (props.children) {
      return props.children;
    }
    return _react2.default.createElement(
      _reactNative.Text,
      { style: props.styles.label },
      props.label
    );
  }

  return _react2.default.createElement(
    _reactNative.TouchableHighlight,
    {
      underlayColor: '#ccc',
      onPress: props.onPress,
      style: [props.noDefaultStyles ? '' : styles.button, props.styles ? props.styles.button : ''] },
    getContent()
  );
};

var styles = _reactNative.StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

exports.default = Button;