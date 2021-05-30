"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cardImage=exports.card=void 0;var _templateObject,_templateObject2,_css=require("@emotion/css");function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var card=function(a){return(0,_css.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  width: 922px;\n  border-radius: 4px;\n  border: solid 1px #d3d9de;\n  display: flex;\n\n  .card-content-wrapper {\n    padding: 12px;\n    width: 100%;\n  }\n  .card-tag {\n    margin-bottom: 8px;\n  }\n  .card-title {\n    margin-bottom: 2px;\n  }\n  .card-subtitle {\n    margin-bottom: 16px;\n  }\n  .card-location-wrapper {\n    display: flex;\n    align-items: flex-end;\n  }\n  .card-location {\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n  .card-bottom {\n    display: flex;\n    justify-content: space-between;\n  }\n  .card-icon {\n    margin-left: 16px;\n  }\n  .sale-info {\n    padding: 4px 8px;\n    background-color: ",";\n    width: fit-content;\n    border-radius: 4px;\n    margin-bottom: 8px;\n  }\n"])),a.background.bgGrey1)};exports.card=card;var cardImage=function(a){return(0,_css.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  background: url('","') no-repeat center center;\n  background-size: cover;\n  height: 194px;\n  min-width: 296px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n"])),a)};exports.cardImage=cardImage;