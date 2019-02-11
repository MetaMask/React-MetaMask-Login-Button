"use strict";

exports.__esModule = true;
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _core = _interopRequireDefault(require("@svgr/core"));

var _rollupPluginutils = require("rollup-pluginutils");

var _core2 = require("@babel/core");

var _pluginSvgo = _interopRequireDefault(require("@svgr/plugin-svgo"));

var _pluginJsx = _interopRequireDefault(require("@svgr/plugin-jsx"));

var _presetReact = _interopRequireDefault(require("@babel/preset-react"));

var _presetEnv = _interopRequireDefault(require("@babel/preset-env"));

var _pluginTransformReactConstantElements = _interopRequireDefault(require("@babel/plugin-transform-react-constant-elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const babelOptions = {
  babelrc: false,
  configFile: false,
  presets: [(0, _core2.createConfigItem)(_presetReact.default, {
    type: 'preset'
  }), (0, _core2.createConfigItem)([_presetEnv.default, {
    modules: false
  }], {
    type: 'preset'
  })],
  plugins: [(0, _core2.createConfigItem)(_pluginTransformReactConstantElements.default)]
};

function svgrPlugin(options = {}) {
  const filter = (0, _rollupPluginutils.createFilter)(options.include || '**/*.svg', options.exclude);
  const {
    babel = true
  } = options;
  return {
    name: 'svgr',

    async transform(data, id) {
      if (!filter(id)) return null;
      if (id.slice(-4) !== '.svg') return null;

      const load = _fs.default.readFileSync(id, 'utf8');

      const exportMatches = data.match(/^module.exports\s*=\s*(.*)/) || data.match(/export\sdefault\s(.*)/);
      const previousExport = exportMatches ? data : null;
      const ast = {
        type: 'Program',
        sourceType: 'module',
        start: 0,
        end: null,
        body: []
      };
      const jsCode = await (0, _core.default)(load, options, {
        filePath: id,
        caller: {
          name: '@svgr/rollup',
          previousExport,
          defaultPlugins: [_pluginSvgo.default, _pluginJsx.default]
        }
      });

      if (babel) {
        const {
          code
        } = await (0, _core2.transformAsync)(jsCode, babelOptions);
        return {
          code,
          map: {
            mappings: ''
          }
        };
      }

      return {
        ast,
        code: jsCode,
        map: {
          mappings: ''
        }
      };
    }

  };
}

var _default = svgrPlugin;
exports.default = _default;