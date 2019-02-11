'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./util'),
    get = _require.get,
    is = _require.is,
    arr = _require.arr,
    num = _require.num,
    px = _require.px,
    breaks = _require.breaks,
    dec = _require.dec,
    media = _require.media,
    merge = _require.merge;

module.exports = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (props) {
    // support for legacy API
    var arg = args[0],
        _prop = args[1],
        _bool = args[2];

    var _ref = typeof arg === 'string' ? { cssProperty: arg, prop: _prop, boolValue: _bool } : arg,
        cssProperty = _ref.cssProperty,
        prop = _ref.prop,
        boolValue = _ref.boolValue,
        key = _ref.key,
        numberToPx = _ref.numberToPx;

    prop = prop || cssProperty;
    var n = props[prop];
    if (!is(n)) return null;

    var bp = breaks(props);
    var scale = get(props, ['theme', key || prop].join('.'), {});
    var sx = function sx(val) {
      return get(scale, '' + val, numberToPx ? px(val) : val);
    };

    if (!Array.isArray(n)) {
      return _defineProperty({}, cssProperty, sx(bool(boolValue)(n)));
    }

    var val = arr(n);
    return val.map(bool(boolValue)).map(sx).map(dec(cssProperty)).map(media(bp)).reduce(merge, {});
  };
};

var bool = function bool(val) {
  return function (n) {
    return n === true ? val : n;
  };
};