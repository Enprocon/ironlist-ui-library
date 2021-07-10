"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_propTypes=_interopRequireDefault(require("prop-types")),_ThemeProvider=require("../ThemeProvider"),_style=require("./style");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var Input=function(a){var b=a.type,c=a.placeholder,d=a.size,e=a.defaultValue,f=a.onChange,g=a.multiline,h=a.rows,i=a.className,j=a.value,k=a.disabled,l=a.label,m=(0,_ThemeProvider.useThemeContext)(),n=g?"textarea":"input",o=(0,_react.useState)(!1),p=_slicedToArray(o,2),q=p[0],r=p[1],s=(0,_react.useCallback)(function(a){f(a.target.value,a)},[f]);return/*#__PURE__*/_react.default.createElement("div",{className:(0,_style.inputWrapper)(m,q,k)},l&&/*#__PURE__*/_react.default.createElement("label",{className:"input-label",htmlFor:l},l),/*#__PURE__*/_react.default.createElement(n,{type:b,rows:h,value:j,defaultValue:e,placeholder:c,onChange:s,className:(0,_classnames.default)((0,_style.inputStyles)(m,d),i),onFocus:function onFocus(){return r(!0)},onBlur:function onBlur(){return r(!1)},disabled:k,id:l}),/*#__PURE__*/_react.default.createElement("div",{className:"focus-indicator"}))},_default=Input;exports.default=_default,Input.propTypes={label:_propTypes.default.string,type:_propTypes.default.string,size:_propTypes.default.string,className:_propTypes.default.string,multiline:_propTypes.default.bool,rows:_propTypes.default.number,placeholder:_propTypes.default.string,value:_propTypes.default.any,defaultValue:_propTypes.default.any,onChange:_propTypes.default.func,disabled:_propTypes.default.bool},Input.defaultProps={label:"",type:"text",size:"medium",value:void 0,className:"",multiline:!1,rows:3,placeholder:"Enter your text here...",defaultValue:void 0,onChange:function onChange(){},disabled:!1};