"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_react2=require("keen-slider/react"),_styledComponents=require("styled-components"),_theme=require("../../theme"),_style=require("./style");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var Slider=function(a){var b=a.children,c=a.hasArrow,d=(0,_react.useState)(0),e=_slicedToArray(d,2),f=e[0],g=e[1],h=(0,_react.useState)(!1),i=_slicedToArray(h,2),j=i[0],k=i[1],l=(0,_react.useRef)(),m=(0,_react2.useKeenSlider)({initial:0,spacing:64,slidesPerView:1,centered:!0,loop:!0,mode:"snap",breakpoints:{"(min-width: 768px)":{slidesPerView:2,mode:"free-snap"},"(min-width: 1200px)":{slidesPerView:3,mode:"snap"}},dragStart:function dragStart(){k(!0)},dragEnd:function dragEnd(){k(!1)},slideChanged:function slideChanged(a){g(a.details().relativeSlide)}}),n=_slicedToArray(m,2),o=n[0],p=n[1];return(0,_react.useEffect)(function(){// 3s interval between each slide, suggested by design team
return l.current=setInterval(function(){!j&&p&&p.next()},3e3),function(){clearInterval(l.current)}},[j,p]),/*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider,{theme:_theme.theme},/*#__PURE__*/_react.default.createElement(_style.GlobalStyle,null),/*#__PURE__*/_react.default.createElement(_style.NavigtationWrapper,null,/*#__PURE__*/_react.default.createElement(_style.SliderWrapper,{ref:o,className:"keen-slider"},_react.default.Children.map(b,function(a){return/*#__PURE__*/_react.default.cloneElement(a,{className:"keen-slider__slide"})}))),c&&/*#__PURE__*/_react.default.createElement("div",null,"Has Arraow"),p&&/*#__PURE__*/_react.default.createElement(_style.Dots,null,_toConsumableArray(Array(p.details().size).keys()).map(function(a){return/*#__PURE__*/_react.default.createElement(_style.SliderDot,{key:a,role:"presentation",onClick:function onClick(){p.moveToSlideRelative(a)},isActive:f===a})})))},_default=Slider;exports.default=_default,Slider.propTypes={children:_propTypes.default.arrayOf(_propTypes.default.element),hasArrow:_propTypes.default.bool},Slider.defaultProps={children:[],hasArrow:!1};