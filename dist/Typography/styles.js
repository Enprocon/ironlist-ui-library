"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColorStyles=exports.weightStyles=exports.opacityStyles=exports.textTransformStyles=exports.textAlignStyles=exports.variantStyles=void 0;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_css=require("@emotion/css");function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var variantStyles=function(a){return(0,_css.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  margin: 0;\n\n  &.h1 {\n    font-size: 48px;\n    line-height: 48px;\n    letter-spacing: 0.8px;\n    font-family: Geomanist-Medium;\n    font-weight: 500;\n\n    ","\n  }\n\n  &.h2 {\n    font-size: 40px;\n    line-height: 36px;\n    letter-spacing: 0.3px;\n    font-family: Geomanist-Medium;\n    font-weight: 500;\n    ","\n  }\n\n  &.h3,\n  &.h4 {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.3px;\n    ","\n  }\n\n  &.h3 {\n    font-family: Geomanist-Medium;\n    font-weight: 500;\n  }\n\n  &.h4 {\n    font-family: Geomanist-Regular;\n  }\n\n  &.h5,\n  &.h6 {\n    font-size: 24px;\n    line-height: 32px;\n    letter-spacing: 0.2px;\n  }\n\n  &.h5 {\n    font-family: Geomanist-Medium;\n    font-weight: 500;\n\n    ","\n  }\n\n  &.h6 {\n    font-family: Geomanist-Regular;\n    ","\n  }\n  &.h7 {\n    font-size: 22px;\n    font-weight: 500;\n    line-height: 1.09;\n    font-family: Geomanist-Medium;\n  }\n\n  &.p1 {\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.1px;\n    font-family: Geomanist-Regular;\n    ","\n  }\n\n  &.p2,\n  &.p3 {\n    font-size: 18px;\n    line-height: 24px;\n    ","\n  }\n\n  &.p2 {\n    letter-spacing: 0.1px;\n    font-family: Geomanist-Regular;\n  }\n\n  &.p3 {\n    letter-spacing: 0.1px;\n    font-family: Geomanist-Medium;\n    font-weight: 500;\n  }\n\n  &.p4,\n  &.p5,\n  &.p6 {\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 0;\n    ","\n  }\n\n  ","\n\n  &.p4 {\n    font-family: Geomanist-Regular;\n    font-weight: 300;\n  }\n\n  &.p5 {\n    font-family: Geomanist-Regular;\n  }\n\n  &.p6 {\n    font-family: Geomanist-Medium;\n    letter-spacing: 0.1px;\n    font-weight: 500;\n  }\n\n  &.p7,\n  &.p8,\n  &.p9 {\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0;\n    ","\n  }\n\n  &.p7 {\n    font-family: Geomanist-Regular;\n    letter-spacing: 0;\n  }\n\n  &.p8 {\n    font-family: Geomanist-Medium;\n    letter-spacing: 0.2px;\n  }\n\n  &.p9 {\n    font-family: Geomanist-Regular;\n    font-style: italic;\n    letter-spacing: 0.2px;\n  }\n\n  &.l1 {\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 0.8px;\n    font-family: Geomanist-Medium;\n    font-weight: 500;\n\n    ","\n  }\n\n  &.l2,\n  &.l3 {\n    font-size: 14px;\n    line-height: 16px;\n    font-family: Geomanist-Regular;\n    ","\n  }\n\n  &.l2 {\n    letter-spacing: 0.8px;\n  }\n\n  &.l3 {\n    letter-spacing: 0.4px;\n  }\n\n  &.l4 {\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: 1.2px;\n    font-family: Geomanist-Regular;\n    ","\n  }\n"])),"mobile"===a?"\n      font-size: 40px;\n      line-height: 1;\n      letter-spacing: 0.5px;\n    ":"","mobile"===a?"\n        font-size: 32px;\n        line-height: 1.13;\n        letter-spacing: 0.3px;\n      ":"","mobile"===a?"\n        font-size: 24px;\n        line-height: 26px;\n        letter-spacing: 0.3px;\n      ":"","mobile"===a?"\n        opacity: 0.7;\n        font-size: 20px;\n        line-height: 24px;\n        letter-spacing: 0.2px;\n    ":"","mobile"===a?"\n      font-size: 20px;\n      line-height: 24px;\n      letter-spacing: 0.2px;\n    ":"","mobile"===a?"\n      font-size: 18px;\n    ":"","mobile"===a?"\n      font-size: 16px;\n      line-height: 20px;\n    ":"","mobile"===a?"\n      font-size: 14px;\n      line-height: 20px;\n      letter-spacing: 0.1px;\n    ":"","mobile"===a&&"\n    &.p5 {\n      font-size: 14px;\n      line-height: 20px;\n      letter-spacing: 0.1px;\n    }\n\n    &.p7 {\n      font-size: 12px;\n      line-height: 16px;\n      letter-spacing: 0.2px;\n    }\n  ","mobile"===a?"\n      font-size: 12px;\n      line-height: 16px;\n      letter-spacing: 0.2px;\n    ":"","mobile"===a?"\n      font-size: 14px;\n      line-height: 16px;\n      letter-spacing: 0.8px;\n    ":"","mobile"===a?"\n      font-size: 12px;\n      line-height: 16px;\n    ":"","mobile"===a?"\n      font-size: 10px;\n      line-height: 16px;\n      letter-spacing: 1px;\n    ":"")};exports.variantStyles=variantStyles;var textAlignStyles=(0,_css.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  &.align-left {\n    text-align: left;\n  }\n\n  &.align-center {\n    text-align: center;\n  }\n\n  &.align-right {\n    text-align: right;\n  }\n"])));exports.textAlignStyles=textAlignStyles;var textTransformStyles=(0,_css.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  &.transform-capitalize {\n    text-transform: capitalize;\n  }\n\n  &.transform-uppercase {\n    text-transform: uppercase;\n  }\n"])));exports.textTransformStyles=textTransformStyles;var opacityStyles=(0,_css.css)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  &.opacity-100 {\n    opacity: 1;\n  }\n\n  &.opacity-70 {\n    opacity: 0.7;\n  }\n\n  &.opacity-60 {\n    opacity: 0.6;\n  }\n\n  &.opacity-50 {\n    opacity: 0.5;\n  }\n\n  &.opacity-30 {\n    opacity: 0.3;\n  }\n"])));exports.opacityStyles=opacityStyles;var weightStyles=(0,_css.css)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  &.weight-regular {\n    font-family: Geomanist-Regular;\n  }\n\n  &.weight-medium: {\n    font-family: Geomanist-Medium;\n  }\n"])));exports.weightStyles=weightStyles;var textColorStyles=function(a){return(0,_css.css)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  color: ",";\n"])),a)};exports.textColorStyles=textColorStyles;