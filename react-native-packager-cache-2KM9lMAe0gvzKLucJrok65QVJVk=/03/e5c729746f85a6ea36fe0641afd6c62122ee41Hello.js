'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Hello = function (_Component) {
  babelHelpers.inherits(Hello, _Component);

  function Hello() {
    babelHelpers.classCallCheck(this, Hello);

    var _this = babelHelpers.possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this));

    _this.state = { text: 'React Native' };
    _this.onPressLearnMore = function () {
      _reactNative.Alert.alert(_this.state.text);
    };
    return _this;
  }

  babelHelpers.createClass(Hello, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(_reactNative.TextInput, {
          style: { height: 40, borderColor: 'gray', borderWidth: 1 },
          onChangeText: function onChangeText(text) {
            return _this2.setState({ text: text });
          },
          value: this.state.text
        }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: this.onPressLearnMore,
          title: 'Learn More',
          color: '#841584',
          accessibilityLabel: 'Learn more about this purple button'
        }),
        _react2.default.createElement(
          _reactNative.Text,
          null,
          this.state.text
        )
      );
    }
  }]);
  return Hello;
}(_react.Component);

exports.default = Hello;


_reactNative.AppRegistry.registerComponent('Hello', function () {
  return Hello;
});