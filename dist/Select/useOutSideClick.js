"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),useOutSideClick=function(a){(0,_react.useEffect)(function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}},[])},_default=useOutSideClick;exports.default=_default;