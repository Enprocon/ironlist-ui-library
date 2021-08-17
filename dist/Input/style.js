"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.inputStyles=exports.inputWrapper=void 0;var _templateObject,_templateObject2,_css=require("@emotion/css");function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var inputWrapper=function(a,b,c){return(0,_css.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  .focus-indicator {\n    ","\n  }\n\n  .input-label {\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0.1px;\n    margin-bottom: 4px;\n    color: ",";\n    opacity: ",";\n  }\n"])),b?"\n      position: absolute;\n      background-color: ".concat(a.background.darkGrey1,";\n      bottom: 0;\n      height: 2px;\n      width: 100%;\n    "):"",a.background.darkGrey1,c?.3:1)};exports.inputWrapper=inputWrapper;var inputStyles=function(a,b,c){return(0,_css.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  border: none;\n  box-shadow: none;\n  box-sizing: border-box;\n  outline: none;\n  resize: none;\n  background-color: ",";\n  font-family: Geomanist-Regular;\n  font-size: 16px;\n  line-height: 1.25;\n  letter-spacing: 0.1px;\n  border-radius: 4px;\n\n  ","\n\n  ","\n\n  padding: 15px 16px 13px 16px;\n\n  color: ",";\n\n  ::placeholder {\n    color: ",";\n    opacity: ",";\n  }\n\n  :-ms-input-placeholder {\n    color: ",";\n    opacity: ",";\n  }\n\n  ::-ms-input-placeholder {\n    color: ",";\n    opacity: ",";\n  }\n"])),a.background.bgGrey2,"medium"===b||"small"===b&&"\n      height: 32px;\n      font-size: 14px;\n      line-height: 1.14;\n      letter-spacing: 0.8px;\n  ","large"===b&&"\n      height: 48px;\n      font-size: 16px;\n      line-height: 1.25;\n      letter-spacing: 0.1px;\n  ",a.background.darkGrey1,a.background.darkGrey1,c?.3:.5,a.background.darkGrey1,c?.3:.5,a.background.darkGrey1,c?.3:.5)};exports.inputStyles=inputStyles;