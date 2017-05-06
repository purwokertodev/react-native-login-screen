Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _FontAwesome = require('react-native-vector-icons/FontAwesome');

var _FontAwesome2 = babelHelpers.interopRequireDefault(_FontAwesome);

var _Container = require('../components/Container');

var _Container2 = babelHelpers.interopRequireDefault(_Container);

var _Button = require('../components/Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var _Label = require('../components/Label');

var _Label2 = babelHelpers.interopRequireDefault(_Label);

var _BackgroundImage = require('../components/BackgroundImage');

var _BackgroundImage2 = babelHelpers.interopRequireDefault(_BackgroundImage);

var Login = function (_Component) {
  babelHelpers.inherits(Login, _Component);

  function Login() {
    babelHelpers.classCallCheck(this, Login);
    return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  babelHelpers.createClass(Login, [{
    key: 'press',
    value: function press() {
      _reactNative.Alert.alert('Forgot Password ?');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _BackgroundImage2.default,
        null,
        _react2.default.createElement(
          _reactNative.ScrollView,
          { style: styles.scroll },
          _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Button2.default, {
              label: 'Forgot Password ?',
              styles: { button: styles.alignRight, label: styles.label },
              onPress: this.press.bind(this) })
          ),
          _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Label2.default, { text: 'Username or Email' }),
            _react2.default.createElement(_reactNative.TextInput, { style: styles.textInput })
          ),
          _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Label2.default, { text: 'Password' }),
            _react2.default.createElement(_reactNative.TextInput, { secureTextEntry: true, style: styles.textInput })
          )
        )
      );
    }
  }]);
  return Login;
}(_react.Component);

exports.default = Login;


var styles = _reactNative.StyleSheet.create({
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
  }
});