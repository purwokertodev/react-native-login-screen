'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var BackgroundImage = function (_Component) {
  babelHelpers.inherits(BackgroundImage, _Component);

  function BackgroundImage() {
    babelHelpers.classCallCheck(this, BackgroundImage);
    return babelHelpers.possibleConstructorReturn(this, (BackgroundImage.__proto__ || Object.getPrototypeOf(BackgroundImage)).apply(this, arguments));
  }

  babelHelpers.createClass(BackgroundImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.Image,
        { source: require('../../public/images/bg1.jpg'), style: styles.backgroundImage },
        this.props.children
      );
    }
  }]);
  return BackgroundImage;
}(_react.Component);

exports.default = BackgroundImage;


var styles = _reactNative.StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  }
});