'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-1d0a0e6a.js');
require('@keg-hub/jsutils');
require('./defaults-75e5d8bf.js');
require('./colors-b60a70f0.js');
require('@keg-hub/re-theme/colors');
require('./buildColorStyles.js');
require('./platformFlatten-19172034.js');
require('./buildTheme.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./ensureClassArray.js');
require('./getInputValue.js');
require('./getReadOnly.js');
require('./handleRefUpdate.js');
require('./updateClassNames.js');
require('./validateFunctions.js');
require('react-native');
require('./useClassName-afee43f7.js');
require('@keg-hub/re-theme/styleInjector');
require('@keg-hub/re-theme');
require('./useInputHandlers.js');
require('./usePressHandlers.js');
require('./useThemePath.js');
require('./useThemeWithHeight.js');
require('./touchable.js');
require('./withTouch.js');
require('./input-5c8f3124.js');
var input$1 = require('./input-168cf924.js');

var Radio = function Radio(props) {
  return React__default.createElement(input$1.Input, _rollupPluginBabelHelpers._extends({}, props, {
    type: "radio"
  }));
};

exports.Radio = Radio;
//# sourceMappingURL=radio.js.map
