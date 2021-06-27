"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Option=exports.Select=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_classnames=_interopRequireDefault(require("classnames")),_ironlistIcons=require("@ironlist/ironlist-icons"),_ThemeProvider=require("../ThemeProvider"),_useOutSideClick=_interopRequireDefault(require("./useOutSideClick")),_style=require("./style");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var Select=function(a){var b,c=a.className,d=a.defaultValue,e=a.children,f=a.onChange,g=a.isMenuOpen,h=a.onSelectBoxClick,i=a.placeholder,j=a.width,k=a.prefix,l=(0,_ThemeProvider.useThemeContext)(),m=(0,_react.useState)(d),n=_slicedToArray(m,2),o=n[0],p=n[1],q=(0,_react.useRef)(null),r=(0,_react.useState)(g),s=_slicedToArray(r,2),t=s[0],u=s[1];(0,_useOutSideClick.default)(function handleClick(a){var b=a.target&&a.target.className&&a.target.className.baseVal;q.current.contains(a.target)||b&&b.includes("select-icon")||u(!1)});var v=function(a){f(a),p(a),u(!1)},w=function(a){u(!t),h(a)},x=j||(null===q||void 0===q||null===(b=q.current)||void 0===b?void 0:b.offsetWidth),y=t?_ironlistIcons.ChevronupThick:_ironlistIcons.ChevrondownThick;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement("div",{ref:q,onClick:function onClick(a){return w(a)},className:(0,_classnames.default)((0,_style.selectContainer)(l,x),"".concat(k?"".concat(k,"select-container"):""," select-container"),c),role:"presentation"},o?/*#__PURE__*/_react.default.createElement(_style.SelectedText,{theme:l,className:"".concat(k?"".concat(k,"select-text"):""," select-text")},o.label):i,/*#__PURE__*/_react.default.createElement(y,{height:16,width:16,fill:l.background.darkGrey1,className:"".concat(k?"".concat(k,"select-icon"):""," select-icon")})),t&&/*#__PURE__*/_react.default.createElement(_style.OptionList,{theme:l,style:{width:x||q.current.offsetWidth},className:"".concat(k?"".concat(k,"select-option-list"):""," select-option-list")},_react.Children.map(e,function(a,b){return/*#__PURE__*/(0,_react.cloneElement)(a,{onClick:v,isFirst:0===b,isLast:b===e.length-1,prefix:k})})))};exports.Select=Select;var Option=function(a){var b=a.value,c=a.children,d=a.onClick,e=a.isFirst,f=a.isLast,g=a.prefix,h=(0,_ThemeProvider.useThemeContext)();return/*#__PURE__*/_react.default.createElement(_style.OptionContainer,{theme:h,isFirst:e,isLast:f,onClick:function onClick(){return d({label:c,value:b})},className:"".concat(g?"".concat(g,"select-option"):""," select-option")},c)};exports.Option=Option;var _default=Select;exports.default=_default,Select.propTypes={defaultValue:_propTypes.default.shape({label:_propTypes.default.string,value:_propTypes.default.string}),placeholder:_propTypes.default.string,children:_propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf([_propTypes.default.node,_propTypes.default.element])),_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.element])]),className:_propTypes.default.string,onChange:_propTypes.default.func,onSelectBoxClick:_propTypes.default.func,isMenuOpen:_propTypes.default.bool,width:_propTypes.default.string,prefix:_propTypes.default.string},Select.defaultProps={defaultValue:{label:"",value:""},placeholder:"Select from options...",children:[],className:"",onChange:function onChange(){},onSelectBoxClick:function onSelectBoxClick(){},isMenuOpen:!1,width:"",prefix:""},Option.propTypes={value:_propTypes.default.string,children:_propTypes.default.oneOfType([_propTypes.default.element,_propTypes.default.string]),onClick:_propTypes.default.func,isFirst:_propTypes.default.bool,isLast:_propTypes.default.bool,prefix:_propTypes.default.string},Option.defaultProps={value:"",children:"",onClick:function onClick(){},isFirst:!1,isLast:!1,prefix:""};