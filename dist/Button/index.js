"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_styledComponents=require("styled-components"),_theme=require("../theme"),_style=require("./style");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var Button=function(a){var b=a.children,c=a.onClick,d=a.type,e=a.className,f=a.size,g=a.disabled;return/*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider,{theme:_theme.theme},/*#__PURE__*/_react.default.createElement(_style.ButtonWrapper,{type:d,size:f,disabled:g,onClick:function onButtonClick(a){g||c(a)},className:e},b))},_default=Button;exports.default=_default,Button.propTypes={type:_propTypes.default.oneOf(["primary","secondary","tertiary"]),children:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.element,_propTypes.default.node]),onClick:_propTypes.default.func,size:_propTypes.default.oneOf(["large","xl"]),className:_propTypes.default.string,disabled:_propTypes.default.bool},Button.defaultProps={type:"primary",children:"Submit",onClick:function onClick(){},className:"",size:"large",disabled:!1};