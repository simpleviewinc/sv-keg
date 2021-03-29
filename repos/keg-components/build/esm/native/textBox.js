import React, { createElement } from 'react';
import { V as View } from './view.native-b0b1ddd4.js';
import { Text } from './text.js';
import { get } from '@keg-hub/jsutils';
import './icon-1b76b631.js';
import { TouchableIcon } from './touchableIcon.js';
import 'react-native-svg';
import '@keg-hub/re-theme';
import { e as _extends } from './_rollupPluginBabelHelpers-b6f65682.js';
import { S as SvgIcon } from './svgIcon-51ab090d.js';
import '@keg-hub/re-theme/colors';
import { useThemePath } from './useThemePath.js';
import './useThemeWithHeight.js';
import { Clipboard } from 'react-native';
import { u as useThemeTypeAsClass } from './useThemeTypeAsClass.native-a05b9a50.js';
import './useClassName.native-32e8827d.js';
import './kegText-f9567f63.js';
import './kegText.js';
import './useTextAccessibility.js';
import '@keg-hub/re-theme/styleInjector';
import './useTextStyles.js';
import './renderFromType.js';
import './isValidComponent.js';
import './useClassList.native-70068878.js';
import './withTouch.js';
import './touchable-9cc6e181.js';
import './touchable.js';

var Copy = function Copy(props) {
  return createElement(SvgIcon, _extends({}, props, {
    viewBox: "0 0 448 512",
    delta: "M433.941 65.941l-51.882-51.882A48 48 0 00348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 00-14.059-33.941zM266 464H54a6 6 0 01-6-6V150a6 6 0 016-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 01-6 6zm128-96H182a6 6 0 01-6-6V54a6 6 0 016-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 01-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 011.757 4.243V112z"
  }));
};

var TextBox = function TextBox(props) {
  props.className;
      var _props$maxLines = props.maxLines,
      maxLines = _props$maxLines === void 0 ? 100 : _props$maxLines,
      styles = props.styles,
      text = props.text,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$themePath = props.themePath,
      themePath = _props$themePath === void 0 ? "textBox.outlined.".concat(type) : _props$themePath,
      _props$useClipboard = props.useClipboard,
      useClipboard = _props$useClipboard === void 0 ? false : _props$useClipboard;
  var style = useThemePath(themePath, styles);
  return React.createElement(View, {
    className: useThemeTypeAsClass(),
    style: style.main
  }, React.createElement(View, {
    className: "keg-textbox-container",
    style: get(style, 'content.wrapper')
  }, React.createElement(Text, {
    className: "keg-textbox-text",
    numberOfLines: maxLines,
    style: get(style, 'content.text')
  }, text || '')), React.createElement(Text, null, useClipboard && text && React.createElement(TouchableIcon, {
    Component: Copy,
    size: 15,
    className: "keg-textbox-clipboard",
    touchStyle: get(style, 'content.clipboard'),
    onPress: function onPress(_) {
      return text && Clipboard.setString(text);
    }
  })));
};

export { TextBox };
//# sourceMappingURL=textBox.js.map
