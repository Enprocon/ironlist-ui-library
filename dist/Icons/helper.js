"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getIcon=exports.iconList=exports.size=void 0;var _User=_interopRequireDefault(require("./User")),_AfterNoon=_interopRequireDefault(require("./AfterNoon")),_Filter=_interopRequireDefault(require("./Filter")),_Navigation=_interopRequireDefault(require("./Navigation"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var size=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:a;return{width:a,height:b,viewBox:"0 0 ".concat(a," ").concat(b)}};exports.size=size;var iconList={user:_User.default,afternoon:_AfterNoon.default,filter:_Filter.default,navigation:_Navigation.default};exports.iconList=iconList;var getIcon=function(a){return iconList[a]};exports.getIcon=getIcon;