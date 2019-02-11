'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var cleanElement = function cleanElement(Component) {
  return function (_React$Component) {
    _inherits(Cleaned, _React$Component);

    function Cleaned() {
      _classCallCheck(this, Cleaned);

      return _possibleConstructorReturn(this, (Cleaned.__proto__ || Object.getPrototypeOf(Cleaned)).apply(this, arguments));
    }

    _createClass(Cleaned, [{
      key: 'render',
      value: function render() {
        var next = {};
        var keys = Object.keys(Cleaned.propTypes || {});
        for (var key in this.props) {
          if (keys.includes(key)) continue;
          next[key] = this.props[key];
        }

        return React.createElement(Component, next);
      }
    }]);

    return Cleaned;
  }(React.Component);
};

module.exports = cleanElement;