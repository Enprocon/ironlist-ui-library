"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_classnames=_interopRequireDefault(require("classnames")),_propTypes=_interopRequireDefault(require("prop-types")),_ThemeProvider=require("../ThemeProvider"),_utils=require("./utils"),_styles=require("./styles");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function Typography(a){var b=a.children,c=a.variant,d=a.className,e=a.opacity,f=a.transform,g=a.align,h=a.color,i=a.weight,j=a.device,k=_objectWithoutProperties(a,["children","variant","className","opacity","transform","align","color","weight","device"]),l=(0,_utils.getDefaultComponent)(c),m=(0,_ThemeProvider.useThemeContext)();return/*#__PURE__*/_react.default.createElement(l,_extends({className:(0,_classnames.default)(d,(0,_styles.textColorStyles)(h||m.background.darkGrey1),c,(0,_styles.variantStyles)(j),"align-".concat(g),_styles.textAlignStyles,"transform-".concat(f),_styles.textTransformStyles,"opacity-".concat(e),_styles.opacityStyles,_styles.weightStyles,_defineProperty({},"weight-".concat(i),""!==i))},k),b)}Typography.propTypes={color:_propTypes.default.string,className:_propTypes.default.string,device:_propTypes.default.string,opacity:_propTypes.default.oneOf([100,70,60,50,30]),align:_propTypes.default.oneOf(["left","center","right"]),transform:_propTypes.default.oneOf(["capitalize","uppercase","initial"]),children:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.element,_propTypes.default.node]).isRequired,variant:_propTypes.default.oneOf(["h1","h2","h3","h4","h5","h6","h7","p1","p2","p3","p4","p5","p6","p7","p8","p9","l1","l2","l3","l4"]),weight:_propTypes.default.oneOf(["medium","regular",""])},Typography.defaultProps={opacity:100,className:"",device:"",color:"",align:"left",transform:"initial",variant:"p1",weight:""};var _default=Typography;exports.default=_default;