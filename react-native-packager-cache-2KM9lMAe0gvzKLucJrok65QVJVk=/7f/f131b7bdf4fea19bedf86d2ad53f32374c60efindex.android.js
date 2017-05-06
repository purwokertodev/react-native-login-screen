Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Login = require('./src/pages/Login');

var _Login2 = babelHelpers.interopRequireDefault(_Login);

var MyApp1 = function (_Component) {
  babelHelpers.inherits(MyApp1, _Component);

  function MyApp1() {
    babelHelpers.classCallCheck(this, MyApp1);
    return babelHelpers.possibleConstructorReturn(this, (MyApp1.__proto__ || Object.getPrototypeOf(MyApp1)).apply(this, arguments));
  }

  babelHelpers.createClass(MyApp1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Login2.default, null);
    }
  }]);
  return MyApp1;
}(_react.Component);

exports.default = MyApp1;


_reactNative.AppRegistry.registerComponent('MyApp1', function () {
  return MyApp1;
});