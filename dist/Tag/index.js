"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_styledComponents=require("styled-components"),_theme=require("../theme"),_style=require("./style");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var Tag=function(a){var b=a.children,c=a.backgroundColor,d=a.hasRoundBorder;return/*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider,{theme:_theme.theme},/*#__PURE__*/_react.default.createElement(_style.TagContainer,{backgroundColor:c,hasRoundBorder:d},b))},_default=Tag;exports.default=_default,Tag.propTypes={children:_propTypes.default.oneOfType([_propTypes.default.element,_propTypes.default.string]),backgroundColor:_propTypes.default.string,hasRoundBorder:_propTypes.default.bool},Tag.defaultProps={children:"",backgroundColor:"black",hasRoundBorder:!1};