'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./util'),
    get = _require.get,
    px = _require.px;

module.exports = function (pseudoclass, prop) {
  return function () {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (props) {
      var style = props[prop || pseudoclass];
      var numberToPx = keys.numberToPx || {};
      for (var key in style) {
        var toPx = numberToPx[key];

        if (!keys[key] && !toPx) continue;
        var themeKey = [keys[key], style[key]].join('.');
        style[key] = get(props.theme, themeKey, style[key]);

        if (toPx) style[key] = px(style[key]);
      }

      return _defineProperty({}, '&:' + pseudoclass, style);
    };
  };
};