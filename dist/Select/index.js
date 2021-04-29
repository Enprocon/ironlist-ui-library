"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Option=exports.Select=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_styledComponents=require("styled-components"),_useOutSideClick=_interopRequireDefault(require("./useOutSideClick")),_theme=require("../theme"),_Icons=_interopRequireDefault(require("../Icons")),_style=require("./style");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var Select=function(a){var b=a.defaultValue,c=a.children,d=a.onChange,e=a.isMenuOpen,f=a.onSelectBoxClick,g=a.placeholder,h=(0,_react.useState)(b),i=_slicedToArray(h,2),j=i[0],k=i[1],l=(0,_react.useRef)(null),m=(0,_react.useState)(e),n=_slicedToArray(m,2),o=n[0],p=n[1];(0,_useOutSideClick.default)(function handleClick(a){var b=a.target&&a.target.className&&a.target.className.baseVal;l.current.contains(a.target)||b&&b.includes("select-icon")||p(!1)});var q=function(a){d(a),k(a),p(!1)},r=function(a){p(!o),f(a)},s=o?"up":"down";return/*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider,{theme:_theme.theme},/*#__PURE__*/_react.default.createElement(_style.SelectContainer,{ref:l,onClick:function onClick(a){return r(a)}},j?/*#__PURE__*/_react.default.createElement("div",null,j.label):g,/*#__PURE__*/_react.default.createElement(_Icons.default,{type:s,height:16,width:16,className:"select-icon"})),o&&/*#__PURE__*/_react.default.createElement(_style.OptionList,{style:{width:l.current.offsetWidth}},_react.Children.map(c,function(a,b){return/*#__PURE__*/(0,_react.cloneElement)(a,{onClick:q,isFirst:0===b,isLast:b===c.length-1})})))};exports.Select=Select;var Option=function(a){var b=a.value,c=a.children,d=a.onClick,e=a.isFirst,f=a.isLast;return/*#__PURE__*/_react.default.createElement(_style.OptionContainer,{isFirst:e,isLast:f,onClick:function onClick(){return d({label:c,value:b})}},c)};exports.Option=Option;var _default=Select;exports.default=_default,Select.propTypes={defaultValue:_propTypes.default.shape({label:_propTypes.default.string,value:_propTypes.default.string}),placeholder:_propTypes.default.string,children:_propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf([_propTypes.default.node,_propTypes.default.element])),_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.element])]),onChange:_propTypes.default.func,onSelectBoxClick:_propTypes.default.func,isMenuOpen:_propTypes.default.bool},Select.defaultProps={defaultValue:{label:"",value:""},placeholder:"Select from options...",children:[],onChange:function onChange(){},onSelectBoxClick:function onSelectBoxClick(){},isMenuOpen:!1},Option.propTypes={value:_propTypes.default.string,children:_propTypes.default.oneOfType([_propTypes.default.element,_propTypes.default.string]),onClick:_propTypes.default.func,isFirst:_propTypes.default.bool,isLast:_propTypes.default.bool},Option.defaultProps={value:"",children:"",onClick:function onClick(){},isFirst:!1,isLast:!1};