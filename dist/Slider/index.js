"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_ironlistIcons=require("@ironlist/ironlist-icons"),_react2=require("keen-slider/react"),_ThemeProvider=require("../ThemeProvider"),_style=require("./style");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var ArrowLeft=function(a){var b=a.disabled,c=a.onClick,d=(0,_ThemeProvider.useThemeContext)();return b?null:/*#__PURE__*/_react.default.createElement(_style.ArrowWrapper,{theme:d,onClick:c,left:!0},/*#__PURE__*/_react.default.createElement(_ironlistIcons.ChevronleftThick,null))},ArrowRight=function(a){var b=a.disabled,c=a.onClick,d=(0,_ThemeProvider.useThemeContext)();return b?null:/*#__PURE__*/_react.default.createElement(_style.ArrowWrapper,{theme:d,onClick:c,right:!0},/*#__PURE__*/_react.default.createElement(_ironlistIcons.ChevronrightThick,null))},Slider=function(a){var b=a.children,c=a.hasArrow,d=a.hasDots,e=a.autoScroll,f=a.keenSliderProps,g=a.slideProps,h=(0,_react.useState)(0),i=_slicedToArray(h,2),j=i[0],k=i[1],l=(0,_react.useState)(!1),m=_slicedToArray(l,2),n=m[0],o=m[1],p=(0,_react.useRef)(),q=(0,_ThemeProvider.useThemeContext)(),r=f.slidesToPreview,s=f.duration,t=(0,_react2.useKeenSlider)(_objectSpread(_objectSpread({initial:0,slidesPerView:r||1},f),{},{breakpoints:{"(min-width: 768px)":{slidesPerView:r||2,mode:"free-snap"},"(min-width: 1200px)":{slidesPerView:r||3,mode:"snap"}},dragStart:function dragStart(){o(!0)},dragEnd:function dragEnd(){o(!1)},slideChanged:function slideChanged(a){k(a.details().relativeSlide)}})),u=_slicedToArray(t,2),v=u[0],w=u[1];return(0,_react.useEffect)(function(){return e?(p.current=setInterval(function(){!n&&w&&w.next()},s),function(){clearInterval(p.current)}):{}},[n,w,s,e]),/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_style.GlobalStyle,null),/*#__PURE__*/_react.default.createElement(_style.SliderContainer,null,/*#__PURE__*/_react.default.createElement(_style.NavigtationWrapper,null,/*#__PURE__*/_react.default.createElement(_style.SliderWrapper,{ref:v,className:"keen-slider"},_react.Children.map(b,function(a){return/*#__PURE__*/(0,_react.cloneElement)(a,_objectSpread({className:"keen-slider__slide"},g))}))),w&&c&&/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(ArrowLeft,{onClick:function onClick(a){return a.stopPropagation()||w.prev()},disabled:0===j}),/*#__PURE__*/_react.default.createElement(ArrowRight,{onClick:function onClick(a){return a.stopPropagation()||w.next()},disabled:j===w.details().size-1-r})),w&&d&&/*#__PURE__*/_react.default.createElement(_style.Dots,null,_toConsumableArray(Array(w.details().size).keys()).slice(0,w.details().size-r).map(function(a){return/*#__PURE__*/_react.default.createElement(_style.SliderDot,{key:a,theme:q,role:"presentation",onClick:function onClick(){w.moveToSlideRelative(a)},isActive:j===a})}))))},_default=Slider;exports.default=_default,Slider.propTypes={children:_propTypes.default.arrayOf(_propTypes.default.element),hasArrow:_propTypes.default.bool,hasDots:_propTypes.default.bool,autoScroll:_propTypes.default.bool,keenSliderProps:_propTypes.default.shape({centered:_propTypes.default.bool,loop:_propTypes.default.bool,mode:_propTypes.default.string,duration:_propTypes.default.number,slidesToPreview:_propTypes.default.number,spacing:_propTypes.default.number}),slideProps:_propTypes.default.objectOf(_propTypes.default.any)},Slider.defaultProps={children:[],hasArrow:!1,hasDots:!1,autoScroll:!1,keenSliderProps:{centered:!0,loop:!0,mode:"snap",duration:3e3,slidesToPreview:1,spacing:64},slideProps:{}},ArrowLeft.propTypes={disabled:_propTypes.default.bool,onClick:_propTypes.default.func},ArrowLeft.defaultProps={disabled:!1,onClick:function onClick(){}},ArrowRight.propTypes={disabled:_propTypes.default.bool,onClick:_propTypes.default.func},ArrowRight.defaultProps={disabled:!1,onClick:function onClick(){}};