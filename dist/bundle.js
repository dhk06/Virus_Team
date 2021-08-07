(self["webpackChunksocket_test_front"] = self["webpackChunksocket_test_front"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0;\r\n}\r\n#map{\r\n    width: 100vw;\r\n    height: calc(100vh - 90px);\r\n}\r\n#resultDiv{\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0px;\r\n\r\n    background-color: rgb(0, 0, 0, 0.75);\r\n    color: white;\r\n    width: calc(100vw - 10px);\r\n    height: 30px;\r\n    font-size: 15px;\r\n    text-align: right;\r\n\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    z-index: 101;\r\n}\r\n#underbar{\r\n    width: 100vw;\r\n    height: 125px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 100;\r\n}\r\n#setUnderBar{\r\n    width: 100vw;\r\n    height: 90px;\r\n    background: linear-gradient( to right, #1e201f 10%, gray 50%, #1e201f);\r\n    position: inherit;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    z-index: 105;\r\n    bottom: 0;\r\n}\r\n#setUnderBar > div{\r\n    display: flex;\r\n}\r\n#peo1{\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: green;\r\n    border-radius: 50%;\r\n}\r\n.mylocate{\r\n    display: flex;\r\n    font-size: 60px;\r\n    font-weight: bolder;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    color: white;\r\n\r\n    position: absolute;\r\n    z-index: 102;\r\n    top: calc(50% - 100px);\r\n    left: 50%;\r\n    transition: all 0.5s;\r\n    transform: translate(-50%, -20%);\r\n    filter: opacity(0%) drop-shadow(0 0 3px black);\r\n\r\n    animation: move_arrow 0.5s linear infinite alternate forwards;\r\n\r\n    user-select: none;\r\n}\r\n.Capslock_alert{\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 1;\r\n\r\n    filter: opacity(0%);\r\n}\r\n\r\n\r\n@keyframes move_arrow{ /* 플레이어 위치 화살표 애니메이션 */\r\n    from {transform: translate(-50%, 0%);}\r\n    to {transform: translate(-50%, -20%);}\r\n}\r\n\r\n\r\n/* 사이트 메인 메뉴 애니메이션 */\r\n.mainMenu{\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border: 2px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 50%;\r\n    background: #323235;\r\n    \r\n    box-sizing: border-box;\r\n    z-index: 150;\r\n}\r\n.mainMenu:before, .mainMenu:after{\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 30px;\r\n    height: 4px;\r\n    border-radius: 2px;\r\n    background: white;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    -webkit-transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n}\r\n.mainMenu:before{\r\n    margin-top: -8px;\r\n}\r\n.mainMenu:after{\r\n    margin-top: 4px;\r\n}\r\n.mainMenu.active:before{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n}\r\n.mainMenu.active:after{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n}\r\n\r\n/* 사이드 메뉴 내용 */\r\n#mainMenu_contents{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background: #323235;\r\n    padding-top: 50px;\r\n    align-items: center;\r\n\r\n    box-sizing: border-box;\r\n    overflow-y: hidden;\r\n    z-index: 149;\r\n\r\n    transition: all 0.2s;\r\n}\r\n#mainMenu_contents div{\r\n    display: flex;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    margin: 5px 0;\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #424249;\r\n    box-shadow: 0px 0px 1px 1.5px #56565f;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}#mainMenu_contents div:hover{\r\n    background-color: #3f3f46;\r\n}#mainMenu_contents div:active{\r\n    background-color: #3f3f46;\r\n    box-shadow: none;\r\n}\r\n\r\n.Peopleshow{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 110px;\r\n    height: 22px;\r\n\r\n    background-color: #323235;\r\n    border-radius: 5px;\r\n\r\n    margin: 0 5px;\r\n}.Peopleshow div{\r\n    width: calc(100% - 30px);\r\n    height: 20px;\r\n\r\n    font-size: 15px;\r\n    box-sizing: border-box;\r\n}\r\n#S_showbox{\r\n    color: white;\r\n}#I_showbox{\r\n    color: red;\r\n}#R_showbox{\r\n    color: green;\r\n}#D_showbox{\r\n    color: white;\r\n}\r\n\r\n#timeshow{\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    background-color: #323235;\r\n    color: white;\r\n    border-radius: 5px;\r\n    border: 1px solid #4b4b52;\r\n}\r\n#timeset{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    text-align: center;\r\n\r\n    z-index: 100;\r\n}\r\n#timeSpeed{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n\r\n    word-spacing: -10px;\r\n    line-height: 21px;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n.virus_infection{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    border-radius: 5px;\r\n\r\n    user-select: none;\r\n}.virus_infection:active{\r\n    background-color: #323235;\r\n}\r\n\r\n#timebox{\r\n    position: relative;\r\n    display: flex;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n#timeShadow{\r\n    position: absolute;\r\n    z-index: 101;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0 0 5px black inset;\r\n    background-color: transparent;\r\n}\r\n#world_name{\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    margin: 0 50px;\r\n    text-align: center;\r\n    padding: 2px 0;\r\n    font-size: 15px;\r\n    background-color: #1e201f;\r\n    color: white;\r\n    border-radius: 5px;\r\n\r\n    box-sizing: border-box;\r\n}\r\n#Square{\r\n    width: 0px;\r\n    height: 25px;\r\n    background-color: #c9fe71;\r\n}#clock{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    width: 100px;\r\n    height: 25px;\r\n\r\n    color: rgb(180, 180, 180);\r\n    background-color: transparent;\r\n\r\n    font-size: 15px;\r\n    text-align: center;\r\n    line-height: 25px;\r\n}\r\n\r\n#P_inf{\r\n    display: none;\r\n    filter: opacity(0%);\r\n\r\n    width: 250px;\r\n    height: 250px;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    z-index: 105;\r\n\r\n    text-align: right;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    color: white;\r\n\r\n    text-shadow: 0px 0px 10px black, 0px 0px 10px black, 0px 0px 10px black, 0px 0px 2px black;\r\n\r\n    transition: all 0s;\r\n}\r\n.graphDiv{\r\n    background: white;\r\n    border: 3px solid black;\r\n}\r\n#barDiv{\r\n    display: none;\r\n\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}#lineDiv{\r\n    display: none;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}\r\n\r\n.area{\r\n    position: absolute;\r\n    background: #fff;\r\n    border: 1px solid #888;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    top: -5px;\r\n    left: 15px;\r\n    padding:2px;\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.part{\r\n    width: 100%;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n}\r\n#part1{\r\n    height: 60%;\r\n    justify-content: center;\r\n}\r\n#part2{\r\n    position: inherit;\r\n    height: 40%;\r\n\r\n    bottom: 0;\r\n    padding: 0px 50px;\r\n    align-items: flex-start;\r\n}\r\n.policy{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 55px;\r\n    height: 35px;\r\n    background-color: #4b4b52;\r\n\r\n    margin: 0 10px;\r\n    border-radius: 5px;\r\n    font-size: 22px;\r\n\r\n    user-select: none;\r\n}\r\n.pol_input input[type=\"checkbox\"] {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip:rect(0,0,0,0);\r\n    border: 0;\r\n}\r\n.pol_input input[type=\"checkbox\"] + label {\r\n    display: inline-block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    margin: 0;\r\n}\r\n#map{\r\n    width: 100vw;\r\n    height: calc(100vh - 90px);\r\n}\r\n#resultDiv{\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0px;\r\n\r\n    background-color: rgb(0, 0, 0, 0.75);\r\n    color: white;\r\n    width: calc(100vw - 10px);\r\n    height: 30px;\r\n    font-size: 15px;\r\n    text-align: right;\r\n\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    z-index: 101;\r\n}\r\n#underbar{\r\n    width: 100vw;\r\n    height: 125px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 100;\r\n}\r\n#setUnderBar{\r\n    width: 100vw;\r\n    height: 90px;\r\n    background: linear-gradient( to right, #1e201f 10%, gray 50%, #1e201f);\r\n    position: inherit;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    z-index: 105;\r\n    bottom: 0;\r\n}\r\n#setUnderBar > div{\r\n    display: flex;\r\n}\r\n#peo1{\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: green;\r\n    border-radius: 50%;\r\n}\r\n.mylocate{\r\n    display: flex;\r\n    font-size: 60px;\r\n    font-weight: bolder;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    color: white;\r\n\r\n    position: absolute;\r\n    z-index: 102;\r\n    top: calc(50% - 100px);\r\n    left: 50%;\r\n    transition: all 0.5s;\r\n    transform: translate(-50%, -20%);\r\n    filter: opacity(0%) drop-shadow(0 0 3px black);\r\n\r\n    animation: move_arrow 0.5s linear infinite alternate forwards;\r\n\r\n    user-select: none;\r\n}\r\n.Capslock_alert{\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 1;\r\n\r\n    filter: opacity(0%);\r\n}\r\n\r\n\r\n@keyframes move_arrow{ /* 플레이어 위치 화살표 애니메이션 */\r\n    from {transform: translate(-50%, 0%);}\r\n    to {transform: translate(-50%, -20%);}\r\n}\r\n\r\n\r\n/* 사이트 메인 메뉴 애니메이션 */\r\n.mainMenu{\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border: 2px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 50%;\r\n    background: #323235;\r\n    \r\n    box-sizing: border-box;\r\n    z-index: 150;\r\n}\r\n.mainMenu:before, .mainMenu:after{\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 30px;\r\n    height: 4px;\r\n    border-radius: 2px;\r\n    background: white;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    -webkit-transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n}\r\n.mainMenu:before{\r\n    margin-top: -8px;\r\n}\r\n.mainMenu:after{\r\n    margin-top: 4px;\r\n}\r\n.mainMenu.active:before{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n}\r\n.mainMenu.active:after{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n}\r\n\r\n/* 사이드 메뉴 내용 */\r\n#mainMenu_contents{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background: #323235;\r\n    padding-top: 50px;\r\n    align-items: center;\r\n\r\n    box-sizing: border-box;\r\n    overflow-y: hidden;\r\n    z-index: 149;\r\n\r\n    transition: all 0.2s;\r\n}\r\n#mainMenu_contents div{\r\n    display: flex;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    margin: 5px 0;\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #424249;\r\n    box-shadow: 0px 0px 1px 1.5px #56565f;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}#mainMenu_contents div:hover{\r\n    background-color: #3f3f46;\r\n}#mainMenu_contents div:active{\r\n    background-color: #3f3f46;\r\n    box-shadow: none;\r\n}\r\n\r\n.Peopleshow{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 110px;\r\n    height: 22px;\r\n\r\n    background-color: #323235;\r\n    border-radius: 5px;\r\n\r\n    margin: 0 5px;\r\n}.Peopleshow div{\r\n    width: calc(100% - 30px);\r\n    height: 20px;\r\n\r\n    font-size: 15px;\r\n    box-sizing: border-box;\r\n}\r\n#S_showbox{\r\n    color: white;\r\n}#I_showbox{\r\n    color: red;\r\n}#R_showbox{\r\n    color: green;\r\n}#D_showbox{\r\n    color: white;\r\n}\r\n\r\n#timeshow{\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    background-color: #323235;\r\n    color: white;\r\n    border-radius: 5px;\r\n    border: 1px solid #4b4b52;\r\n}\r\n#timeset{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    text-align: center;\r\n\r\n    z-index: 100;\r\n}\r\n#timeSpeed{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n\r\n    word-spacing: -10px;\r\n    line-height: 21px;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n.virus_infection{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    border-radius: 5px;\r\n\r\n    user-select: none;\r\n}.virus_infection:active{\r\n    background-color: #323235;\r\n}\r\n\r\n#timebox{\r\n    position: relative;\r\n    display: flex;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n#timeShadow{\r\n    position: absolute;\r\n    z-index: 101;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0 0 5px black inset;\r\n    background-color: transparent;\r\n}\r\n#world_name{\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    margin: 0 50px;\r\n    text-align: center;\r\n    padding: 2px 0;\r\n    font-size: 15px;\r\n    background-color: #1e201f;\r\n    color: white;\r\n    border-radius: 5px;\r\n\r\n    box-sizing: border-box;\r\n}\r\n#Square{\r\n    width: 0px;\r\n    height: 25px;\r\n    background-color: #c9fe71;\r\n}#clock{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    width: 100px;\r\n    height: 25px;\r\n\r\n    color: rgb(180, 180, 180);\r\n    background-color: transparent;\r\n\r\n    font-size: 15px;\r\n    text-align: center;\r\n    line-height: 25px;\r\n}\r\n\r\n#P_inf{\r\n    display: none;\r\n    filter: opacity(0%);\r\n\r\n    width: 250px;\r\n    height: 250px;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    z-index: 105;\r\n\r\n    text-align: right;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    color: white;\r\n\r\n    text-shadow: 0px 0px 10px black, 0px 0px 10px black, 0px 0px 10px black, 0px 0px 2px black;\r\n\r\n    transition: all 0s;\r\n}\r\n.graphDiv{\r\n    background: white;\r\n    border: 3px solid black;\r\n}\r\n#barDiv{\r\n    display: none;\r\n\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}#lineDiv{\r\n    display: none;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}\r\n\r\n.area{\r\n    position: absolute;\r\n    background: #fff;\r\n    border: 1px solid #888;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    top: -5px;\r\n    left: 15px;\r\n    padding:2px;\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.part{\r\n    width: 100%;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n}\r\n#part1{\r\n    height: 60%;\r\n    justify-content: center;\r\n}\r\n#part2{\r\n    position: inherit;\r\n    height: 40%;\r\n\r\n    bottom: 0;\r\n    padding: 0px 50px;\r\n    align-items: flex-start;\r\n}\r\n.policy{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 55px;\r\n    height: 35px;\r\n    background-color: #4b4b52;\r\n\r\n    margin: 0 10px;\r\n    border-radius: 5px;\r\n    font-size: 22px;\r\n\r\n    user-select: none;\r\n}\r\n.pol_input input[type=\"checkbox\"] {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip:rect(0,0,0,0);\r\n    border: 0;\r\n}\r\n.pol_input input[type=\"checkbox\"] + label {\r\n    display: inline-block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/Death.ts":
/*!**********************!*\
  !*** ./src/Death.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plusDeadRate": () => (/* binding */ plusDeadRate)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");


function plusDeadRate() {
    for (var i = 0; i < _variable__WEBPACK_IMPORTED_MODULE_1__.peoples.length; i++) {
        var p = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[i];
        if (p.color == 'red') {
            p.fatalityRate++;
            Fper(p, p.fatalityRate);
        }
    }
}
function Fper(p, per) {
    var rand = Math.random();
    var num = per / 100;
    if (rand <= num) {
        p.death();
        _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Infectious--;
        _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.deadPer++;
    }
}



/***/ }),

/***/ "./src/ansanRange.ts":
/*!***************************!*\
  !*** ./src/ansanRange.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

// 지도에 표시할 다각형을 생성합니다
var polygon = new kakao.maps.Polygon({
    path: _constants__WEBPACK_IMPORTED_MODULE_0__.ANSANrange,
    strokeWeight: 3,
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    fillOpacity: 0
});
function init(map) {
    polygon.setMap(map);
}


/***/ }),

/***/ "./src/barGraph.ts":
/*!*************************!*\
  !*** ./src/barGraph.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");



chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register.apply(chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart, chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);
var n = _constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.wholePer;
function init() {
    var barC = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(_constants__WEBPACK_IMPORTED_MODULE_2__.barGraph, {
        type: 'bar',
        data: {
            labels: ['S', 'I', 'R'],
            datasets: [{
                    label: 'bar_Graph',
                    data: [_constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.wholePer, _constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.Infectious, _constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.Recovered],
                    backgroundColor: [
                        'rgba(99, 255, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(99, 255, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            responsive: false,
            indexAxis: 'y',
            scales: {
                x: {
                    min: 0,
                    max: _constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.wholePer
                }
            }
        }
    });
    barC.hide(0);
    setInterval(function () {
        updateChart(barC);
        if (_variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.main == false) {
            _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.display = 'none';
            barC.hide(0);
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.bar = false;
        }
    }, 60);
    _constants__WEBPACK_IMPORTED_MODULE_2__.barGraph_btn.addEventListener('click', function () {
        if (_variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.bar == false) {
            _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.display = 'block';
            _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.zIndex = _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.zIndex + 1;
            barC.show(0);
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.line = false;
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.bar = true;
        }
        else {
            _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.display = 'none';
            _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.zIndex = '150';
            barC.hide(0);
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.bar = false;
        }
    });
    if (_variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.main == true) {
        _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.display = 'none';
        barC.hide(0);
        _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.bar = false;
        _constants__WEBPACK_IMPORTED_MODULE_2__.barDiv.style.zIndex = '150';
    }
    function updateChart(chart) {
        chart.data.datasets[0].data = [_constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.wholePer, _constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.Infectious, _constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.Recovered];
        chart.update();
    }
}


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANSANrange": () => (/* binding */ ANSANrange),
/* harmony export */   "ANSANvector": () => (/* binding */ ANSANvector),
/* harmony export */   "MOVE_PARAMS": () => (/* binding */ MOVE_PARAMS),
/* harmony export */   "_NumOfPeople": () => (/* binding */ _NumOfPeople),
/* harmony export */   "NumOfPeople": () => (/* binding */ NumOfPeople),
/* harmony export */   "timeset": () => (/* binding */ timeset),
/* harmony export */   "timebox": () => (/* binding */ timebox),
/* harmony export */   "timeSpeed": () => (/* binding */ timeSpeed),
/* harmony export */   "mylocate": () => (/* binding */ mylocate),
/* harmony export */   "Capslock_alert": () => (/* binding */ Capslock_alert),
/* harmony export */   "virus_infection": () => (/* binding */ virus_infection),
/* harmony export */   "P_inf": () => (/* binding */ P_inf),
/* harmony export */   "Square": () => (/* binding */ Square),
/* harmony export */   "clock": () => (/* binding */ clock),
/* harmony export */   "barDiv": () => (/* binding */ barDiv),
/* harmony export */   "barGraph": () => (/* binding */ barGraph),
/* harmony export */   "barGraph_btn": () => (/* binding */ barGraph_btn),
/* harmony export */   "lineDiv": () => (/* binding */ lineDiv),
/* harmony export */   "lineGraph": () => (/* binding */ lineGraph),
/* harmony export */   "lineGraph_btn": () => (/* binding */ lineGraph_btn)
/* harmony export */ });
/* harmony import */ var _output_nOp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output_nOp */ "./src/output_nOp.ts");

var ANSANrange = [
    new kakao.maps.LatLng(37.34536601340117, 126.7833366872930),
    new kakao.maps.LatLng(37.35239803210191, 126.8064317710519),
    new kakao.maps.LatLng(37.34918610614613, 126.8269359139766),
    new kakao.maps.LatLng(37.33741173896692, 126.8628928729008),
    new kakao.maps.LatLng(37.33331815195747, 126.8766215596434),
    new kakao.maps.LatLng(37.29995866705562, 126.8917447303047),
    new kakao.maps.LatLng(37.28129194168943, 126.8600178364447),
    new kakao.maps.LatLng(37.28130541929755, 126.8354696387777),
    new kakao.maps.LatLng(37.29512443086514, 126.7833116904543),
    new kakao.maps.LatLng(37.32416999356896, 126.7671055736911),
];
//움직임 범위 제한
var ANSANvector = [
    { x: 0.0230950837589, y: 0.00703201870074 },
    { x: 0.0205041429247, y: -0.00321192595578 },
    { x: 0.0359569589242, y: -0.01177436717921 },
    { x: 0.0137286867426, y: -0.00409358700945 },
    { x: 0.0151231706613, y: -0.03335948490185 },
    { x: -0.03172689386, y: -0.01866672536619 },
    { x: -0.024548197667, y: 0.00001347760812 },
    { x: -0.0521579483234, y: 0.01381901156759 },
    { x: -0.0162061167632, y: 0.02904556270382 },
    { x: 0.02119601983221, y: 0.02904556270382 }
];
var MOVE_PARAMS = {
    'w': {
        vx: 0.00003,
        vy: 0
    },
    's': {
        vx: -0.00003,
        vy: 0
    },
    'a': {
        vx: 0,
        vy: -0.00003
    },
    'd': {
        vx: 0,
        vy: 0.00003
    }
};
var _NumOfPeople = {
    wholePer: 800,
    Infectious: 0,
    Recovered: 0,
    deadPer: 0
};
var NumOfPeople = new Proxy(_NumOfPeople, {
    get: function (target, name) {
        return target[name];
    },
    set: function (target, name, value) {
        target[name] = value;
        if (name == 'wholePer' || name == 'Infectious' || name == 'Recovered' || name == 'deadPer') {
            (0,_output_nOp__WEBPACK_IMPORTED_MODULE_0__.numPshow)();
        }
        return true;
    }
});
var timeset = document.querySelector('#timeset');
var timebox = document.querySelector('#timebox');
var timeSpeed = document.querySelector('#timeSpeed');
var mylocate = document.querySelector('.mylocate');
var Capslock_alert = document.querySelector('.Capslock_alert');
var virus_infection = document.querySelector('.virus_infection');
var P_inf = document.querySelector('#P_inf');
var Square = document.querySelector('#Square');
var clock = document.querySelector('#clock');
var barDiv = document.querySelector('#barDiv');
var barGraph = document.querySelector('#barGraph');
var barGraph_btn = document.querySelector('#barGraph_btn');
var lineDiv = document.querySelector('#lineDiv');
var lineGraph = document.querySelector('#lineGraph');
var lineGraph_btn = document.querySelector('#lineGraph_btn');


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _setting_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting_map */ "./src/setting_map.ts");
/* harmony import */ var _ansanRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ansanRange */ "./src/ansanRange.ts");
/* harmony import */ var _side_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side_menu */ "./src/side_menu.ts");
/* harmony import */ var _moving_people__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moving_people */ "./src/moving_people.ts");
/* harmony import */ var _infec_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infec_range */ "./src/infec_range.ts");
/* harmony import */ var _timeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeBox */ "./src/timeBox.ts");
/* harmony import */ var _player_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player_location */ "./src/player_location.ts");
/* harmony import */ var _time_ACC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time_ACC */ "./src/time_ACC.ts");
/* harmony import */ var _barGraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./barGraph */ "./src/barGraph.ts");
/* harmony import */ var _lineGraph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lineGraph */ "./src/lineGraph.ts");
/* harmony import */ var _roadPoint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roadPoint */ "./src/roadPoint.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./임시사람 */ "./src/임시사람.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











// import { init as roadData } from './roadData'



var world_name = document.querySelector('#world_name');
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var worldname, np, map;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    worldname = prompt("What's the name of this world?", 'meta_1');
                    np = Number(prompt("How many people in " + worldname, '800'));
                    _constants__WEBPACK_IMPORTED_MODULE_13__.NumOfPeople.wholePer = np;
                    world_name.innerHTML = worldname;
                    map = (0,_setting_map__WEBPACK_IMPORTED_MODULE_1__.init)().map;
                    (0,_ansanRange__WEBPACK_IMPORTED_MODULE_2__.init)(map);
                    return [4 /*yield*/, (0,_roadPoint__WEBPACK_IMPORTED_MODULE_11__.init)()];
                case 1:
                    _a.sent();
                    (0,_side_menu__WEBPACK_IMPORTED_MODULE_3__.init)();
                    (0,_moving_people__WEBPACK_IMPORTED_MODULE_4__.init)(map);
                    // roadData(map)
                    (0,___WEBPACK_IMPORTED_MODULE_12__.init)(map);
                    (0,_infec_range__WEBPACK_IMPORTED_MODULE_5__.init)();
                    (0,_timeBox__WEBPACK_IMPORTED_MODULE_6__.init)();
                    (0,_player_location__WEBPACK_IMPORTED_MODULE_7__.init)();
                    (0,_time_ACC__WEBPACK_IMPORTED_MODULE_8__.init)();
                    (0,_barGraph__WEBPACK_IMPORTED_MODULE_9__.init)();
                    (0,_lineGraph__WEBPACK_IMPORTED_MODULE_10__.init)();
                    return [2 /*return*/];
            }
        });
    });
}
init();


/***/ }),

/***/ "./src/infec_range.ts":
/*!****************************!*\
  !*** ./src/infec_range.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "fun": () => (/* binding */ fun)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _output_nOp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output_nOp */ "./src/output_nOp.ts");



function init() {
    _variable__WEBPACK_IMPORTED_MODULE_1__.variable.set2 = setInterval(fun, _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue2);
}
function fun() {
    if (_variable__WEBPACK_IMPORTED_MODULE_1__.variable.movingStart == true) {
        for (var i = 0; i < _variable__WEBPACK_IMPORTED_MODULE_1__.peoples.length; i++) {
            for (var j = 0; j < _variable__WEBPACK_IMPORTED_MODULE_1__.peoples.length; j++) {
                if (_variable__WEBPACK_IMPORTED_MODULE_1__.peoples[i].color == 'red' && _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j].color == 'green') {
                    var p1x = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[i].position.x;
                    var p1y = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[i].position.y;
                    var p2x = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j].position.x;
                    var p2y = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j].position.y;
                    var result = Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2));
                    if (result < 0.001) {
                        console.log('a');
                        per(10, _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j]);
                    }
                }
            }
        }
    }
}
function per(n, peo) {
    var rand = Math.random();
    var num = n / 100;
    if (rand <= num) {
        peo.changeColor();
        _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Infectious++;
        _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.wholePer--;
        (0,_output_nOp__WEBPACK_IMPORTED_MODULE_2__.numPshow)();
    }
}



/***/ }),

/***/ "./src/lineGraph.ts":
/*!**************************!*\
  !*** ./src/lineGraph.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");



chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register.apply(chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart, chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);
var arr = ['wholePer', 'Infectious', 'Resistent'];
function init() {
    var lineC = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(_constants__WEBPACK_IMPORTED_MODULE_2__.lineGraph, {
        type: 'line',
        data: {
            datasets: [{
                    label: 'S',
                    type: 'line',
                    data: [],
                    backgroundColor: 'rgba(99, 255, 132, 0.2)',
                    borderColor: 'rgba(99, 255, 132, 1)',
                    order: 2,
                    tension: 0.4
                }, {
                    label: 'I',
                    data: [],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    type: 'line',
                    order: 1,
                    tension: 0.4
                }, {
                    label: 'R',
                    data: [],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    type: 'line',
                    order: 3,
                    tension: 0.4
                }],
            labels: []
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: _constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople.wholePer
                }
            },
            elements: {
                point: {
                    borderWidth: 0,
                    borderColor: 'transparent'
                }
            },
            interaction: {
                intersect: false
            }
        }
    });
    lineC.hide(0);
    var i = 0;
    var n = null;
    var snd = 0;
    setInterval(function () {
        n = _variable__WEBPACK_IMPORTED_MODULE_1__.time_DHS.min % 10;
        if (n == 0 && snd !== Math.floor(_variable__WEBPACK_IMPORTED_MODULE_1__.time_DHS.min / 10)) {
            snd = Math.floor(_variable__WEBPACK_IMPORTED_MODULE_1__.time_DHS.min / 10);
            updateChart(lineC);
        }
        if (_variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.main == false) {
            _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.display = 'none';
            lineC.hide(0);
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.line = false;
        }
    }, 60);
    _constants__WEBPACK_IMPORTED_MODULE_2__.lineGraph_btn.addEventListener('click', function () {
        if (_variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.line == false) {
            _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.display = 'block';
            _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.zIndex = _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.zIndex + 1;
            lineC.show(0);
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.bar = false;
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.line = true;
        }
        else {
            _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.display = 'none';
            lineC.hide(0);
            _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.zIndex = '150';
            _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.line = false;
        }
    });
    if (_variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.main == true) {
        _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.display = 'none';
        lineC.hide(0);
        _constants__WEBPACK_IMPORTED_MODULE_2__.lineDiv.style.zIndex = '150';
        _variable__WEBPACK_IMPORTED_MODULE_1__.menuBtn_click.line = false;
    }
    function updateChart(chart) {
        chart.data.labels.push("T" + i++);
        chart.data.datasets.forEach(function (dataset, index) {
            dataset.data.push(_constants__WEBPACK_IMPORTED_MODULE_2__.NumOfPeople[arr[index]]);
        });
        chart.update();
    }
}


/***/ }),

/***/ "./src/moving_people.ts":
/*!******************************!*\
  !*** ./src/moving_people.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person */ "./src/person.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _output_nOp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output_nOp */ "./src/output_nOp.ts");




var currentPeople = null;
var setPeople = null;
var setPeoplePosition = null;
var infec_peo = false;
var map = null;
function init(_map) {
    map = _map;
    var _loop_1 = function (i) {
        var person = new _person__WEBPACK_IMPORTED_MODULE_1__.Person(map);
        _variable__WEBPACK_IMPORTED_MODULE_2__.peoples.push(person);
        kakao.maps.event.addListener(person.circle, 'click', function (mouseEvent) {
            currentPeople = person;
            _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.style.display = 'block';
            _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.innerHTML = "x: " + _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i].position.x + "<br>y: " + _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i].position.y + "<br>infection: " + _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i].infection;
            _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.style.filter = 'opacity(100%)';
            _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.style.transition = 'all 0.3s';
            setTimeout(function () {
                _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.style.filter = 'opacity(0%)';
                setTimeout(function () {
                    _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.style.display = 'none';
                    _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.style.transition = 'all 0s';
                }, 300);
            }, 1500);
        });
    };
    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.wholePer; i++) {
        _loop_1(i);
    }
    (0,_output_nOp__WEBPACK_IMPORTED_MODULE_3__.numPshow)();
    window.onkeydown = function (evt) {
        if (evt.getModifierState("CapsLock") == true) {
            _constants__WEBPACK_IMPORTED_MODULE_0__.Capslock_alert.style.filter = 'opacity(100%)';
        }
        else {
            _constants__WEBPACK_IMPORTED_MODULE_0__.Capslock_alert.style.filter = 'opacity(0%)';
            if (['w', 'a', 's', 'd'].includes(evt.key) && currentPeople != null) {
                var currentPosition = currentPeople.circle.getPosition();
                if ((Math.abs(currentPeople.position.y - map.getCenter().getLat()) > 0.00005 || Math.abs(currentPeople.position.x - map.getCenter().getLng()) > 0.00005) && _variable__WEBPACK_IMPORTED_MODULE_2__.variable.panto == false) {
                    console.log("panto!");
                    map.panTo(currentPosition);
                    _variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.key = evt.key;
                    _variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.d = new Date();
                    _variable__WEBPACK_IMPORTED_MODULE_2__.variable.panto = true;
                }
                else {
                    _variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.key = evt.key;
                }
            }
            else if (evt.keyCode == 27) {
                console.log('ESC');
                _variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.key = '';
                currentPeople = null;
            }
        }
    };
    window.onkeyup = function (e) {
        if (e.keyCode == 32) {
            console.log('spacebar');
            if (_constants__WEBPACK_IMPORTED_MODULE_0__.timeset.innerHTML == 'II') {
                _constants__WEBPACK_IMPORTED_MODULE_0__.timeset.innerHTML = '▶';
                _constants__WEBPACK_IMPORTED_MODULE_0__.timeset.style.lineHeight = 'normal';
                _variable__WEBPACK_IMPORTED_MODULE_2__.variable.movingStart = false;
            }
            else {
                _constants__WEBPACK_IMPORTED_MODULE_0__.timeset.innerHTML = 'II';
                _constants__WEBPACK_IMPORTED_MODULE_0__.timeset.style.lineHeight = '25px';
                _variable__WEBPACK_IMPORTED_MODULE_2__.variable.movingStart = true;
            }
        }
        else if (e.key == _variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.key) {
            _variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.key = '';
        }
    };
    requestAnimationFrame(step);
    _constants__WEBPACK_IMPORTED_MODULE_0__.virus_infection.addEventListener('click', function () {
        if (currentPeople != null) {
            infec_peo = true;
        }
    });
}
function step() {
    // 플레이 w,a,s,d
    var p = _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_PARAMS[_variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.key];
    if (p != null && currentPeople != null) {
        if (+_variable__WEBPACK_IMPORTED_MODULE_2__.moveOpts.d + 500 < +new Date()) {
            currentPeople.position.x += p.vy;
            currentPeople.position.y += p.vx;
            var currentPosition = new kakao.maps.LatLng(currentPeople.position.y, currentPeople.position.x);
            currentPeople.circle.setPosition(currentPosition);
            map.setCenter(currentPosition);
        }
    }
    for (var i = 0; i < _variable__WEBPACK_IMPORTED_MODULE_2__.peoples.length; i++) {
        var people = _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i];
        if (_variable__WEBPACK_IMPORTED_MODULE_2__.variable.movingStart == true) {
            if (currentPeople == people) {
                if (infec_peo == true && people.color == 'green') {
                    people.changeColor();
                    _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Infectious++;
                    _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.wholePer--;
                    infec_peo = false;
                }
                continue;
            }
            if (people.die == false) {
                people.randVel();
                people.velCheck();
                people.move();
                people.limitRange();
                setPeople = people.circle;
                setPeoplePosition = setPeople.getPosition();
                setPeoplePosition.La = people.position.x;
                setPeoplePosition.Ma = people.position.y;
                setPeople.setPosition(setPeoplePosition);
            }
        }
    }
    requestAnimationFrame(step);
}


/***/ }),

/***/ "./src/output_nOp.ts":
/*!***************************!*\
  !*** ./src/output_nOp.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numPshow": () => (/* binding */ numPshow)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

var S_show = document.querySelector('#S_show');
var I_show = document.querySelector('#I_show');
var R_show = document.querySelector('#R_show');
var D_show = document.querySelector('#D_show');
function numPshow() {
    S_show.innerHTML = "" + _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.wholePer;
    I_show.innerHTML = "" + _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Infectious;
    R_show.innerHTML = "" + _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Recovered;
    D_show.innerHTML = "" + _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.deadPer;
}



/***/ }),

/***/ "./src/person.ts":
/*!***********************!*\
  !*** ./src/person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": () => (/* binding */ Person)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _roadPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadPoint */ "./src/roadPoint.ts");



var Person = /** @class */ (function () {
    function Person(map) {
        var loc = null;
        var randLocation = null;
        loc = Math.floor(Math.random() * _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData.length);
        randLocation = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[loc].latlng;
        this.circle = new kakao.maps.Circle({
            center: randLocation,
            radius: 5,
            strokeOpacity: 0,
            fillColor: 'green',
            fillOpacity: 1 // 채우기 불투명도
        });
        this.circle.setMap(map);
        this.position = { x: randLocation.getLng(), y: randLocation.getLat() };
        this.velocity = { x: 0, y: 0 };
        this.color = 'green';
        this.infection = false;
        this.fatalityRate = 0;
        this.die = false;
    }
    Person.prototype.changeColor = function () {
        if (this.color == 'green') {
            this.circle.setOptions({ fillColor: 'red' });
            this.color = 'red';
            this.infection = true;
        }
    };
    Person.prototype.death = function () {
        this.circle.setOptions({ fillColor: 'gray' });
        this.color = 'gray';
        this.die = true;
    };
    Person.prototype.randVel = function () {
        var rand = Math.random();
        if (rand < 0.25) {
            this.velocity.x += 0.000002;
        }
        else if (rand < 0.5) {
            this.velocity.x -= 0.000002;
        }
        else if (rand < 0.75) {
            this.velocity.y += 0.000002;
        }
        else {
            this.velocity.y -= 0.000002;
        }
    };
    Person.prototype.velCheck = function () {
        if (this.velocity.x >= _variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange) {
            this.velocity.x = _variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange;
        }
        else if (this.velocity.x <= -_variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange) {
            this.velocity.x = -_variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange;
        }
        else if (this.velocity.y >= _variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange) {
            this.velocity.y = _variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange;
        }
        else if (this.velocity.y <= -_variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange) {
            this.velocity.y = -_variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange;
        }
    };
    Person.prototype.move = function () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    };
    Person.prototype.limitRange = function () {
        for (var j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__.ANSANvector.length; j++) {
            var ansan = _constants__WEBPACK_IMPORTED_MODULE_0__.ANSANrange[j];
            var vec = _constants__WEBPACK_IMPORTED_MODULE_0__.ANSANvector[j];
            var v2x = this.position.x - ansan.getLng();
            var v2y = this.position.y - ansan.getLat();
            var result = vec.x * v2y - vec.y * v2x;
            if (result >= 0) {
                this.velocity.x *= -1;
                this.velocity.y *= -1;
                break;
            }
        }
    };
    return Person;
}());



/***/ }),

/***/ "./src/player_location.ts":
/*!********************************!*\
  !*** ./src/player_location.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");


function init() {
    setInterval(function () {
        if (_variable__WEBPACK_IMPORTED_MODULE_1__.moveOpts.key == '') {
            _constants__WEBPACK_IMPORTED_MODULE_0__.mylocate.style.filter = 'opacity(0%) drop-shadow(0 0 3px black)';
            _variable__WEBPACK_IMPORTED_MODULE_1__.variable.panto = false;
        }
        else {
            _constants__WEBPACK_IMPORTED_MODULE_0__.mylocate.style.filter = 'opacity(100%) drop-shadow(0 0 3px black)';
        }
    }, 50);
}


/***/ }),

/***/ "./src/roadPoint.ts":
/*!**************************!*\
  !*** ./src/roadPoint.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointData": () => (/* binding */ pointData),
/* harmony export */   "lineData": () => (/* binding */ lineData),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _setting_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting_map */ "./src/setting_map.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var pointData = [];
var lineData = [];
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var res1, res2, txt1, txt2, arr1, arr2, i, j, linePath_, n, i, j, px, py, l_lastX, l_lastY, l_fstX, l_fstY, _i, pointData_1, i, _a, lineData_1, j;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch('./data/ansanzone_point.txt')];
                case 1:
                    res1 = _b.sent();
                    return [4 /*yield*/, fetch('./data/ansanzone_road.txt')];
                case 2:
                    res2 = _b.sent();
                    return [4 /*yield*/, res1.text()];
                case 3:
                    txt1 = _b.sent();
                    return [4 /*yield*/, res2.text()];
                case 4:
                    txt2 = _b.sent();
                    arr1 = txt1.split('\n').filter(function (v) { return v.trim(); }).map(function (v) { return JSON.parse(v).geometry.coordinates; });
                    arr2 = txt2.split('\n').filter(function (v) { return v.trim(); }).map(function (v) { return JSON.parse(v).geometry.coordinates; });
                    for (i = 0; i < arr1.length; i++) {
                        pointData.push({
                            name: "" + i,
                            latlng: new kakao.maps.LatLng(arr1[i][1] - 0.0027781231371076888, arr1[i][0] + 0.002080213816618034),
                            lines: []
                        });
                    }
                    for (j = 0; j < arr2.length; j++) {
                        linePath_ = [];
                        for (n = 0; n < arr2[j].length; n++) {
                            linePath_.push(new kakao.maps.LatLng(arr2[j][n][1] - 0.0027781231371076888, arr2[j][n][0] + 0.002080213816618034));
                        }
                        lineData.push({
                            road_id: j,
                            linePath: linePath_
                        });
                    }
                    for (i = 0; i < pointData.length; i++) {
                        for (j = 0; j < lineData.length; j++) {
                            px = pointData[i].latlng.getLat();
                            py = pointData[i].latlng.getLng();
                            l_lastX = lineData[j].linePath[lineData[j].linePath.length - 1].getLat();
                            l_lastY = lineData[j].linePath[lineData[j].linePath.length - 1].getLng();
                            l_fstX = lineData[j].linePath[0].getLat();
                            l_fstY = lineData[j].linePath[0].getLng();
                            if (Math.sqrt(Math.pow(px - l_fstX, 2) + Math.pow(py - l_fstY, 2)) < 0.0002 || Math.sqrt(Math.pow(px - l_lastX, 2) + Math.pow(py - l_lastY, 2)) < 0.0002) {
                                pointData[i].lines.push(lineData[j].road_id);
                            }
                        }
                    }
                    console.log(pointData, lineData);
                    for (_i = 0, pointData_1 = pointData; _i < pointData_1.length; _i++) {
                        i = pointData_1[_i];
                        displayPoint(i);
                    }
                    for (_a = 0, lineData_1 = lineData; _a < lineData_1.length; _a++) {
                        j = lineData_1[_a];
                        displayLine(j);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function displayPoint(arr) {
    var circle = new kakao.maps.Circle({
        center: arr.latlng,
        radius: 10,
        strokeWeight: 0,
        fillColor: '#A2FF99',
        fillOpacity: 0.5
    });
    var customOverlay = new kakao.maps.CustomOverlay({
        position: arr.latlng,
        content: arr.name
    });
    kakao.maps.event.addListener(circle, 'mouseover', function (mouseEvent) {
        customOverlay.setContent("<div class='area'>" + arr.name + "</div>");
        customOverlay.setPosition(mouseEvent.latLng);
        customOverlay.setMap(_setting_map__WEBPACK_IMPORTED_MODULE_0__.map);
    });
    kakao.maps.event.addListener(circle, 'mouseout', function () {
        customOverlay.setMap(null);
    });
    kakao.maps.event.addListener(circle, 'mousemove', function (mouseEvent) {
        customOverlay.setPosition(mouseEvent.latLng);
    });
    circle.setMap(_setting_map__WEBPACK_IMPORTED_MODULE_0__.map);
}
function displayLine(arr) {
    var line = new kakao.maps.Polyline({
        path: arr.linePath,
        strokeWeight: 2,
        strokeColor: 'black',
        strokeOpacity: 0.2,
        strokeStyle: 'solid'
    });
    line.setMap(_setting_map__WEBPACK_IMPORTED_MODULE_0__.map);
}


/***/ }),

/***/ "./src/setting_map.ts":
/*!****************************!*\
  !*** ./src/setting_map.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
var resultDiv = document.querySelector('#resultDiv');
var map = null;
function init() {
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.32191655510652, 126.83084311183287),
        minLevel: 2,
        maxLevel: 6,
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    map = new kakao.maps.Map(container, options);
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        // 클릭한 위도, 경도 정보 가져오기
        var latlng = mouseEvent.latLng;
        var message = '클릭한 위치의 좌표 (위도,경도) : ' + latlng.getLat() + ', ' + latlng.getLng();
        resultDiv.innerHTML = "" + message;
    });
    return {
        map: map
    };
}


/***/ }),

/***/ "./src/side_menu.ts":
/*!**************************!*\
  !*** ./src/side_menu.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");

function init() {
    // 사이드 메인 메뉴 애니메이션 실행
    var mainMenu = document.querySelector('.mainMenu');
    var mainMenu_contents = document.querySelector('#mainMenu_contents');
    mainMenu.addEventListener('click', function () {
        if (_variable__WEBPACK_IMPORTED_MODULE_0__.menuBtn_click.main == false) {
            mainMenu_contents.style.height = '220px';
            _variable__WEBPACK_IMPORTED_MODULE_0__.menuBtn_click.main = true;
        }
        else {
            mainMenu_contents.style.height = '50px';
            _variable__WEBPACK_IMPORTED_MODULE_0__.menuBtn_click.main = false;
        }
        this.classList.toggle('active');
    });
}


/***/ }),

/***/ "./src/timeBox.ts":
/*!************************!*\
  !*** ./src/timeBox.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "time": () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _Death__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Death */ "./src/Death.ts");



var num = 0;
function init() {
    _variable__WEBPACK_IMPORTED_MODULE_0__.variable.set1 = setInterval(time, _variable__WEBPACK_IMPORTED_MODULE_0__.variable.speedValue1);
}
function time() {
    if (_variable__WEBPACK_IMPORTED_MODULE_0__.variable.movingStart == true) {
        _constants__WEBPACK_IMPORTED_MODULE_1__.Square.style.backgroundColor = '#c9fe71';
        _variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.min++;
        num += _constants__WEBPACK_IMPORTED_MODULE_1__.timebox.offsetWidth / 1440;
        if (_variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.min >= 60) {
            _variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.hour++;
            _variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.min = 0;
            if (_variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.hour >= 24) {
                _variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.date++;
                (0,_Death__WEBPACK_IMPORTED_MODULE_2__.plusDeadRate)();
                num = _constants__WEBPACK_IMPORTED_MODULE_1__.timebox.offsetWidth;
                _variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.hour = 0;
            }
        }
        var d = String(_variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.date);
        var h = String(_variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.hour);
        var s = String(_variable__WEBPACK_IMPORTED_MODULE_0__.time_DHS.min);
        _constants__WEBPACK_IMPORTED_MODULE_1__.Square.style.width = num + "px";
        if (num > _constants__WEBPACK_IMPORTED_MODULE_1__.timebox.offsetWidth) {
            num = 0;
        }
        _constants__WEBPACK_IMPORTED_MODULE_1__.clock.innerHTML = d.padStart(2, '0') + " / " + h.padStart(2, '0') + " / " + s.padStart(2, '0');
    }
    else {
        _constants__WEBPACK_IMPORTED_MODULE_1__.Square.style.backgroundColor = '#fe7371';
    }
}



/***/ }),

/***/ "./src/time_ACC.ts":
/*!*************************!*\
  !*** ./src/time_ACC.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _timeBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeBox */ "./src/timeBox.ts");
/* harmony import */ var _infec_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infec_range */ "./src/infec_range.ts");





var check = 0;
function init() {
    _constants__WEBPACK_IMPORTED_MODULE_0__.timeSpeed.addEventListener('click', timeAcc);
}
function timeAcc() {
    clearInterval(_variable__WEBPACK_IMPORTED_MODULE_1__.variable.set1);
    clearInterval(_variable__WEBPACK_IMPORTED_MODULE_1__.variable.set2);
    if (check == 0) {
        _constants__WEBPACK_IMPORTED_MODULE_0__.timeSpeed.style.color = '#f3c127';
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue1 = 60;
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue2 = 250;
        setmove(0.00006, -0.00006, -0.00006, 0.00006);
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange = 0.0002;
        check = 1;
    }
    else if (check == 1) {
        _constants__WEBPACK_IMPORTED_MODULE_0__.timeSpeed.style.color = '#fe7371';
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue1 = 10;
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue2 = 25;
        setmove(0.0006, -0.0006, -0.0006, 0.0006);
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange = 0.0001;
        check = 2;
    }
    else {
        _constants__WEBPACK_IMPORTED_MODULE_0__.timeSpeed.style.color = 'white';
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue1 = 200;
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue2 = 500;
        setmove(0.00003, -0.00003, -0.00003, 0.00003);
        _variable__WEBPACK_IMPORTED_MODULE_1__.variable.velRange = 0.00001;
        check = 0;
    }
    _variable__WEBPACK_IMPORTED_MODULE_1__.variable.set1 = setInterval(_timeBox__WEBPACK_IMPORTED_MODULE_2__.time, _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue1);
    _variable__WEBPACK_IMPORTED_MODULE_1__.variable.set2 = setInterval(_infec_range__WEBPACK_IMPORTED_MODULE_3__.fun, _variable__WEBPACK_IMPORTED_MODULE_1__.variable.speedValue2);
}
function setmove(w, s, a, d) {
    _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_PARAMS.w.vx = w;
    _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_PARAMS.s.vx = s;
    _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_PARAMS.a.vy = a;
    _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_PARAMS.d.vy = d;
}


/***/ }),

/***/ "./src/variable.ts":
/*!*************************!*\
  !*** ./src/variable.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveOpts": () => (/* binding */ moveOpts),
/* harmony export */   "peoples": () => (/* binding */ peoples),
/* harmony export */   "variable": () => (/* binding */ variable),
/* harmony export */   "menuBtn_click": () => (/* binding */ menuBtn_click),
/* harmony export */   "time_DHS": () => (/* binding */ time_DHS)
/* harmony export */ });
var moveOpts = {
    key: '',
    d: null
};
var peoples = [];
var variable = {
    movingStart: true,
    panto: false,
    speedValue1: 200,
    set1: null,
    speedValue2: 500,
    set2: null,
    velRange: 0.00001
};
var menuBtn_click = {
    main: false,
    bar: false,
    line: false,
    save: false
};
var time_DHS = {
    date: 0,
    hour: 0,
    min: 0
};


/***/ }),

/***/ "./src/임시사람.ts":
/*!*********************!*\
  !*** ./src/임시사람.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _roadPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roadPoint */ "./src/roadPoint.ts");

// class Heap<T>{
//     private arr:{score:number, data:T}[] = [];
//     constructor(){}
//     private heapifyInc(num:number):boolean{
//         if(num === 0) return true;
//         const arr = this.arr;
//         const pum = Math.floor(num / 2);
//         const cur = arr[num];
//         const nex = arr[pum];
//         if(cur.score < nex.score){
//             arr[num] = nex;
//             arr[pum] = cur;
//             return this.heapifyInc(pum);
//         } else {
//             return true;
//         }
//     }
//     push(data:T, score:number){
//         if(isNaN(score)) throw Error('score 숫자를 쓰세요');
//         const num = this.arr.push({ data, score }) - 1;
//         return this.heapifyInc(num);
//     }
//     private heapifyDec(num = 0):boolean{
//         const n2 = (num + 1) * 2;
//         const n1 = n2 - 1;
//         const arr = this.arr;
//         const cur = arr[num];
//         const nex1 = arr[n1];
//         const nex2 = arr[n2];
//         if(nex2){
//             let pick: number;
//             if(nex2.score > nex1.score){
//                 pick = n1;
//             } else {
//                 pick = n2;
//             }
//             const nex = arr[pick];
//             if(nex.score < cur.score){
//                 arr[pick] = cur;
//                 arr[num] = nex;
//                 return this.heapifyDec(pick);
//             }
//             return true;
//         } else if(nex1){
//             if(nex1.score < cur.score){
//                 arr[n1] = cur;
//                 arr[num] = nex1;
//             }
//             return true;
//         } else {
//             return true;
//         }
//     }
//     pop(){
//         if(this.isEmpty()) return null;
//         const arr = this.arr;
//         const now = arr[0];
//         const cur = arr.pop();
//         if(arr.length !== 0) {
//             arr[0] = cur;
//             this.heapifyDec();
//         }
//         return now.data;
//     }
//     isEmpty(){
//         if(this.arr.length === 0) return true;
//         return false;
//     }
// }
// // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const moveStart = (circle:kakao.maps.Circle, startPoint = Math.floor(Math.random() * roadData.length)) => {
//     const codes = findPath(startPoint);
//     const way = codes[0];
//     const END = way[way.length - 1];
//     const history = codes[1];
//     const Y:number = roadData[way[0]].latlng.getLat();
//     const X:number = roadData[way[0]].latlng.getLng();
//     const position = new kakao.maps.LatLng(Y, X);
//     circle.setPosition(position)
//     let from = roadData[way[0]];
//     let to = roadData[way[1]];
//     const speed = 100000;
//     let i = 0;
//     let index = 0;
//     const moving = () => {
//         const prex = from.latlng.getLng();
//         const prey = from.latlng.getLat();
//         const nexx = to.latlng.getLng();
//         const nexy = to.latlng.getLat();
//         const dist = ((nexx - prex) ** 2 + (nexy - prey) ** 2) ** 0.5 * speed;
//         const X = (i * nexx + (dist - i) * prex) / dist;
//         const Y = (i * nexy + (dist - i) * prey) / dist;
//         const position = new kakao.maps.LatLng(Y, X);
//         circle.setPosition(position);
//         i++;
//         if(i >= dist){
//             i = 0;
//             index++;
//             if(way.length - 1 === index){
//                 moveStart(circle, END);
//                 return;
//             }
//             from = roadData[way[index]];
//             to = roadData[way[index + 1]];
//         }
//         requestAnimationFrame(moving);
//     };
//     moving();
//     return { X, Y };
// }
// const findPath = (startPoint:number) => {
//     const r = startPoint;
//     let choose:number = Math.floor(Math.random() * roadData.length);
//     const findWay = (start:Data , goal: number):[number[], Data[]] => {
//         const history:Data[] = [];
//         const heap = new Heap<Data>();
//         let data = start;
//         history[data.data] = data;
//         while(goal != data.data){
//             let n = data.data;
//             for(let i = 0; i < roadData[n].road.length; i++){
//                 if(typeof history[roadData[n].road[i]] === 'undefined'){
//                     let pytha = Math.sqrt(Math.pow(roadData[n].latlng.getLat() - roadData[roadData[n].road[i]].latlng.getLat() , 2) + Math.pow(roadData[n].latlng.getLng() - roadData[roadData[n].road[i]].latlng.getLng() , 2))
//                     heap.push({data:roadData[n].road[i], pre:n, score:pytha + data.score}, pytha + data.score)
//                 }
//             }
//             for(let i = 0; i < history.length; i++){
//                 data = heap.pop();
//                 if(typeof history[data.data] === 'undefined'){
//                     history[data.data] = data;
//                     break;
//                 }
//             }
//         }
//         let obj = history[goal];
//         const list:number[] = [];
//         const total = obj.score;
//         while(obj.pre !== -1){
//             let pre = obj.pre;
//             list.push(obj.data);
//             obj = history[pre];
//         }
//         list.reverse()
//         list.unshift(r);
//         console.log(list)
//         return [list, history];
//     }
//     while(choose === r){
//         choose = Math.floor(Math.random() * roadData.length);
//     }
//     return findWay({data:r, score:0, pre:-1}, choose)
// };
function init(map) {
    var loc = null;
    var randLocation = null;
    loc = Math.floor(Math.random() * _roadPoint__WEBPACK_IMPORTED_MODULE_0__.pointData.length);
    randLocation = _roadPoint__WEBPACK_IMPORTED_MODULE_0__.pointData[loc].latlng;
    var circle = new kakao.maps.Circle({
        center: randLocation,
        radius: 20,
        strokeOpacity: 0,
        fillColor: 'red',
        fillOpacity: 1 // 채우기 불투명도
    });
    circle.setMap(map);
    var moveStart = false;
    var reposition = null;
    setInterval(function () {
        if (moveStart == false) {
            var randValue = Math.floor(Math.random() * _roadPoint__WEBPACK_IMPORTED_MODULE_0__.pointData[loc].lines.length);
            var choose = _roadPoint__WEBPACK_IMPORTED_MODULE_0__.pointData[loc].lines[randValue];
            var linePointx = _roadPoint__WEBPACK_IMPORTED_MODULE_0__.lineData[choose].linePath[0].getLat();
            var linePointy = _roadPoint__WEBPACK_IMPORTED_MODULE_0__.lineData[choose].linePath[0].getLng();
            var cirX = circle.getPosition().getLat();
            var cirY = circle.getPosition().getLng();
            if (Math.sqrt(Math.pow(cirX - linePointx, 2) + Math.pow(cirY - linePointy, 2)) < 0.0002) {
                _roadPoint__WEBPACK_IMPORTED_MODULE_0__.lineData[choose].linePath.length;
            }
        }
        else {
            moving(circle, reposition);
        }
    }, 60);
}
function moving(circle, reposition) {
    circle.setPosition(reposition);
}
// type Data = {data:number, score:number, pre:number};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvRGVhdGgudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvYW5zYW5SYW5nZS50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9iYXJHcmFwaC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvaW5mZWNfcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvbGluZUdyYXBoLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL21vdmluZ19wZW9wbGUudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvb3V0cHV0X25PcC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9wZXJzb24udHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvcGxheWVyX2xvY2F0aW9uLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL3JvYWRQb2ludC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9zZXR0aW5nX21hcC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9zaWRlX21lbnUudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvdGltZUJveC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy90aW1lX0FDQy50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy92YXJpYWJsZS50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy/snoTsi5zsgqzrnowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsK0NBQStDLGtCQUFrQixLQUFLLFNBQVMscUJBQXFCLG1DQUFtQyxLQUFLLGVBQWUsMkJBQTJCLG1CQUFtQixpQkFBaUIsaURBQWlELHFCQUFxQixrQ0FBa0MscUJBQXFCLHdCQUF3QiwwQkFBMEIsbUNBQW1DLHFCQUFxQixxQkFBcUIsS0FBSyxjQUFjLHFCQUFxQixzQkFBc0IsMkJBQTJCLGtCQUFrQixxQkFBcUIsS0FBSyxpQkFBaUIscUJBQXFCLHFCQUFxQiwrRUFBK0UsMEJBQTBCLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLGtCQUFrQixLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyxVQUFVLDJCQUEyQixvQkFBb0IscUJBQXFCLGdDQUFnQywyQkFBMkIsS0FBSyxjQUFjLHNCQUFzQix3QkFBd0IsNEJBQTRCLHFCQUFxQiwwQkFBMEIscUJBQXFCLCtCQUErQixxQkFBcUIsK0JBQStCLGtCQUFrQiw2QkFBNkIseUNBQXlDLHVEQUF1RCwwRUFBMEUsOEJBQThCLEtBQUssb0JBQW9CLHdCQUF3Qiw0QkFBNEIsK0JBQStCLGtCQUFrQixrQkFBa0Isb0NBQW9DLG1CQUFtQixnQ0FBZ0MsS0FBSyxrQ0FBa0Msc0NBQXNDLGdDQUFnQyxZQUFZLGtDQUFrQyxLQUFLLCtDQUErQywyQkFBMkIsa0JBQWtCLG1CQUFtQixvQkFBb0Isc0JBQXNCLDZDQUE2QywyQkFBMkIsNEJBQTRCLHVDQUF1QyxxQkFBcUIsS0FBSyxzQ0FBc0MsdUJBQXVCLHNCQUFzQiwyQkFBMkIsa0JBQWtCLGlCQUFpQixvQkFBb0Isb0JBQW9CLDJCQUEyQiwwQkFBMEIsNENBQTRD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QUFLLFlBQVksV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxjQUFjLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGNBQWMsYUFBYSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLFFBQVEsbUJBQW1CLHVCQUF1Qix1QkFBdUIsUUFBUSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFlBQVksWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksK0JBQStCLGtCQUFrQixLQUFLLFNBQVMscUJBQXFC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aUIsRUFBRSxpQkFBaUIsQ0FBQztJQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO0lBQzNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7SUFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztJQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO0lBQzNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Q0FDOUQsQ0FBQztBQUVGLFdBQVc7QUFDSixJQUFNLFdBQVcsR0FBRztJQUN2QixFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxnQkFB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R0FBRyxnREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2RCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFDO2dCQUNuRixnREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO2FBQ25DO1NBQ0o7YUFBSTtZQUNELE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxNQUF3QixFQUFFLFVBQTRCO0lBQ2xFLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0FBQ2xDLENBQUM7QUFDRCx1REFBdUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNtYXB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxyXFxufVxcclxcbiNyZXN1bHREaXZ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjc1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwcHgpO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcbn1cXHJcXG4jdW5kZXJiYXJ7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuI3NldFVuZGVyQmFye1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byByaWdodCwgIzFlMjAxZiAxMCUsIGdyYXkgNTAlLCAjMWUyMDFmKTtcXHJcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxyXFxuXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxMDU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuI3NldFVuZGVyQmFyID4gZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4jcGVvMXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4ubXlsb2NhdGV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMjtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEwMHB4KTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwJSk7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSgwJSkgZHJvcC1zaGFkb3coMCAwIDNweCBibGFjayk7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogbW92ZV9hcnJvdyAwLjVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUgZm9yd2FyZHM7XFxyXFxuXFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4uQ2Fwc2xvY2tfYWxlcnR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVfYXJyb3d7IC8qIO2UjOugiOydtOyWtCDsnITsuZgg7ZmU7IK07ZGcIOyVoOuLiOuplOydtOyFmCAqL1xcclxcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7fVxcclxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwJSk7fVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiDsgqzsnbTtirgg66mU7J24IOuplOuJtCDslaDri4jrqZTsnbTshZggKi9cXHJcXG4ubWFpbk1lbnV7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxNXB4O1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICB3aWR0aDogNTBweDsgXFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMjMyMzU7XFxyXFxuICAgIFxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB6LWluZGV4OiAxNTA7XFxyXFxufVxcclxcbi5tYWluTWVudTpiZWZvcmUsIC5tYWluTWVudTphZnRlcntcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXHJcXG59XFxyXFxuLm1haW5NZW51OmJlZm9yZXtcXHJcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXHJcXG59XFxyXFxuLm1haW5NZW51OmFmdGVye1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxufVxcclxcbi5tYWluTWVudS5hY3RpdmU6YmVmb3Jle1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxufVxcclxcbi5tYWluTWVudS5hY3RpdmU6YWZ0ZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDsgqzsnbTrk5wg66mU64m0IOuCtOyaqSAqL1xcclxcbiNtYWluTWVudV9jb250ZW50c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIGxlZnQ6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4OyBcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzIzMjM1O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAxNDk7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG4jbWFpbk1lbnVfY29udGVudHMgZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEuNXB4ICM1NjU2NWY7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufSNtYWluTWVudV9jb250ZW50cyBkaXY6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmNDY7XFxyXFxufSNtYWluTWVudV9jb250ZW50cyBkaXY6YWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjQ2O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uUGVvcGxlc2hvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMnB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjM1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMCA1cHg7XFxyXFxufS5QZW9wbGVzaG93IGRpdntcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuI1Nfc2hvd2JveHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn0jSV9zaG93Ym94e1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn0jUl9zaG93Ym94e1xcclxcbiAgICBjb2xvcjogZ3JlZW47XFxyXFxufSNEX3Nob3dib3h7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpbWVzaG93e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjM1O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI1MjtcXHJcXG59XFxyXFxuI3RpbWVzZXR7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMWY7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuI3RpbWVTcGVlZHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAxZjtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHdvcmQtc3BhY2luZzogLTEwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udmlydXNfaW5mZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59LnZpcnVzX2luZmVjdGlvbjphY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzU7XFxyXFxufVxcclxcblxcclxcbiN0aW1lYm94e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiN0aW1lU2hhZG93e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjayBpbnNldDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbiN3b3JsZF9uYW1le1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDAgNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycHggMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDFmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuI1NxdWFyZXtcXHJcXG4gICAgd2lkdGg6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlmZTcxO1xcclxcbn0jY2xvY2t7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcblxcclxcbiAgICBjb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jUF9pbmZ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSgwJSk7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDU7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaywgMHB4IDBweCAxMHB4IGJsYWNrLCAwcHggMHB4IDEwcHggYmxhY2ssIDBweCAwcHggMnB4IGJsYWNrO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxyXFxufVxcclxcbi5ncmFwaERpdntcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4jYmFyRGl2e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgbGVmdDogODBweDtcXHJcXG4gICAgei1pbmRleDogMTUwO1xcclxcbn0jbGluZURpdntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwcHg7XFxyXFxuICAgIGxlZnQ6IDgwcHg7XFxyXFxuICAgIHotaW5kZXg6IDE1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmFyZWF7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRvcDogLTVweDtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZzoycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcnR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jcGFydDF7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3BhcnQye1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG4gICAgaGVpZ2h0OiA0MCU7XFxyXFxuXFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4ucG9saWN5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDU1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI1MjtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcblxcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLnBvbF9pbnB1dCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjbGlwOnJlY3QoMCwwLDAsMCk7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuLnBvbF9pbnB1dCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNB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O0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI21hcHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcXHJcXG59XFxyXFxuI3Jlc3VsdERpdntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNXB4O1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTBweCk7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxufVxcclxcbiN1bmRlcmJhcntcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEyNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG4jc2V0VW5kZXJCYXJ7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCAjMWUyMDFmIDEwJSwgZ3JheSA1MCUsICMxZTIwMWYpO1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwNTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG4jc2V0VW5kZXJCYXIgPiBkaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiNwZW8xe1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbi5teWxvY2F0ZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAyO1xcclxcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTAwcHgpO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAlKTtcXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAlKSBkcm9wLXNoYWRvdygwIDAgM3B4IGJsYWNrKTtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBtb3ZlX2Fycm93IDAuNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSBmb3J3YXJkcztcXHJcXG5cXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5DYXBzbG9ja19hbGVydHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSgwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZV9hcnJvd3sgLyog7ZSM66CI7J207Ja0IOychOy5mCDtmZTsgrTtkZwg7JWg64uI66mU7J207IWYICovXFxyXFxuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTt9XFxyXFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAlKTt9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIOyCrOydtO2KuCDrqZTsnbgg66mU64m0IOyVoOuLiOuplOydtOyFmCAqL1xcclxcbi5tYWluTWVudXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIGxlZnQ6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4OyBcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMyMzIzNTtcXHJcXG4gICAgXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHotaW5kZXg6IDE1MDtcXHJcXG59XFxyXFxuLm1haW5NZW51OmJlZm9yZSwgLm1haW5NZW51OmFmdGVye1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcclxcbn1cXHJcXG4ubWFpbk1lbnU6YmVmb3Jle1xcclxcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xcclxcbn1cXHJcXG4ubWFpbk1lbnU6YWZ0ZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuLm1haW5NZW51LmFjdGl2ZTpiZWZvcmV7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWigwKTtcXHJcXG59XFxyXFxuLm1haW5NZW51LmFjdGl2ZTphZnRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxufVxcclxcblxcclxcbi8qIOyCrOydtOuTnCDrqZTribQg64K07JqpICovXFxyXFxuI21haW5NZW51X2NvbnRlbnRze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7IFxcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMjMyMzU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDE0OTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcbiNtYWluTWVudV9jb250ZW50cyBkaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA0NXB4O1xcclxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0OTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMS41cHggIzU2NTY1ZjtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59I21haW5NZW51X2NvbnRlbnRzIGRpdjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2Y0NjtcXHJcXG59I21haW5NZW51X2NvbnRlbnRzIGRpdjphY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmNDY7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5QZW9wbGVzaG93e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG59LlBlb3BsZXNob3cgZGl2e1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jU19zaG93Ym94e1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufSNJX3Nob3dib3h7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufSNSX3Nob3dib3h7XFxyXFxuICAgIGNvbG9yOiBncmVlbjtcXHJcXG59I0Rfc2hvd2JveHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jdGltZXNob3d7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjUyO1xcclxcbn1cXHJcXG4jdGltZXNldHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAxZjtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG4jdGltZVNwZWVke1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDFmO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd29yZC1zcGFjaW5nOiAtMTBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi52aXJ1c19pbmZlY3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn0udmlydXNfaW5mZWN0aW9uOmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzNTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpbWVib3h7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3RpbWVTaGFkb3d7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrIGluc2V0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuI3dvcmxkX25hbWV7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIG1hcmdpbjogMCA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAwO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jU3F1YXJle1xcclxcbiAgICB3aWR0aDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWZlNzE7XFxyXFxufSNjbG9ja3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNQX2luZntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAlKTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHotaW5kZXg6IDEwNTtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrLCAwcHggMHB4IDEwcHggYmxhY2ssIDBweCAwcHggMTBweCBibGFjaywgMHB4IDBweCAycHggYmxhY2s7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwcztcXHJcXG59XFxyXFxuLmdyYXBoRGl2e1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbiNiYXJEaXZ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MHB4O1xcclxcbiAgICBsZWZ0OiA4MHB4O1xcclxcbiAgICB6LWluZGV4OiAxNTA7XFxyXFxufSNsaW5lRGl2e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgbGVmdDogODBweDtcXHJcXG4gICAgei1pbmRleDogMTUwO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJlYXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdG9wOiAtNXB4O1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOjJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFydHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbiNwYXJ0MXtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jcGFydDJ7XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbiAgICBoZWlnaHQ6IDQwJTtcXHJcXG5cXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi5wb2xpY3l7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNTVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjUyO1xcclxcblxcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuXFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4ucG9sX2lucHV0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGNsaXA6cmVjdCgwLDAsMCwwKTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG4ucG9sX2lucHV0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuL3BlcnNvbidcclxuaW1wb3J0IHsgTnVtT2ZQZW9wbGUgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgcGVvcGxlcyB9IGZyb20gJy4vdmFyaWFibGUnXHJcblxyXG5mdW5jdGlvbiBwbHVzRGVhZFJhdGUoKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwZW9wbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBwID0gcGVvcGxlc1tpXTtcclxuICAgICAgICBpZihwLmNvbG9yID09ICdyZWQnKXtcclxuICAgICAgICAgICAgcC5mYXRhbGl0eVJhdGUrKztcclxuICAgICAgICAgICAgRnBlcihwLCBwLmZhdGFsaXR5UmF0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZwZXIocDpQZXJzb24sIHBlcjpudW1iZXIpe1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgbGV0IG51bSA9IHBlci8xMDA7XHJcbiAgICBpZihyYW5kIDw9IG51bSl7XHJcbiAgICAgICAgcC5kZWF0aCgpXHJcbiAgICAgICAgTnVtT2ZQZW9wbGUuSW5mZWN0aW91cy0tO1xyXG4gICAgICAgIE51bU9mUGVvcGxlLmRlYWRQZXIrKztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcGx1c0RlYWRSYXRlIH0iLCJpbXBvcnQgeyBBTlNBTnJhbmdlIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG4vLyDsp4Drj4Tsl5Ag7ZGc7Iuc7ZWgIOuLpOqwge2YleydhCDsg53shLHtlanri4jri6RcclxudmFyIHBvbHlnb24gPSBuZXcga2FrYW8ubWFwcy5Qb2x5Z29uKHtcclxuICAgIHBhdGg6IEFOU0FOcmFuZ2UsXHJcbiAgICBzdHJva2VXZWlnaHQ6IDMsXHJcbiAgICBzdHJva2VDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgc3Ryb2tlT3BhY2l0eTogMC44LFxyXG4gICAgZmlsbE9wYWNpdHk6IDBcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdChtYXA6IGtha2FvLm1hcHMuTWFwKXtcclxuICAgIHBvbHlnb24uc2V0TWFwKG1hcClcclxufSIsImltcG9ydCB7IENoYXJ0LCByZWdpc3RlcmFibGVzIH0gZnJvbSAnY2hhcnQuanMnXHJcbmltcG9ydCB7IG1lbnVCdG5fY2xpY2sgfSBmcm9tICcuL3ZhcmlhYmxlJ1xyXG5pbXBvcnQgeyBOdW1PZlBlb3BsZSwgYmFyRGl2LCBiYXJHcmFwaCwgYmFyR3JhcGhfYnRuIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG5DaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcclxuXHJcbmNvbnN0IG4gPSBOdW1PZlBlb3BsZS53aG9sZVBlcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICBjb25zdCBiYXJDID0gbmV3IENoYXJ0KGJhckdyYXBoLCB7XHJcbiAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnUycsICdJJywgJ1InXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2Jhcl9HcmFwaCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbTnVtT2ZQZW9wbGUud2hvbGVQZXIsIE51bU9mUGVvcGxlLkluZmVjdGlvdXMsIE51bU9mUGVvcGxlLlJlY292ZXJlZF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg5OSwgMjU1LCAxMzIsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk5LCAyNTUsIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmRleEF4aXM6ICd5JyxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogTnVtT2ZQZW9wbGUud2hvbGVQZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJhckMuaGlkZSgwKVxyXG4gICAgc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICB1cGRhdGVDaGFydChiYXJDKVxyXG4gICAgICAgIGlmKG1lbnVCdG5fY2xpY2subWFpbiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGJhckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBiYXJDLmhpZGUoMClcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5iYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LCA2MClcclxuXHJcbiAgICBiYXJHcmFwaF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKG1lbnVCdG5fY2xpY2suYmFyID09IGZhbHNlKXtcclxuICAgICAgICAgICAgYmFyRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXJEaXYuc3R5bGUuekluZGV4ID0gYmFyRGl2LnN0eWxlLnpJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGJhckMuc2hvdygwKVxyXG4gICAgICAgICAgICBtZW51QnRuX2NsaWNrLmxpbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5iYXIgPSB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBiYXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYmFyRGl2LnN0eWxlLnpJbmRleCA9ICcxNTAnO1xyXG4gICAgICAgICAgICBiYXJDLmhpZGUoMClcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5iYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKG1lbnVCdG5fY2xpY2subWFpbiA9PSB0cnVlKXtcclxuICAgICAgICBiYXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBiYXJDLmhpZGUoMClcclxuICAgICAgICBtZW51QnRuX2NsaWNrLmJhciA9IGZhbHNlO1xyXG4gICAgICAgIGJhckRpdi5zdHlsZS56SW5kZXggPSAnMTUwJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hhcnQoY2hhcnQ6Q2hhcnQ8XCJiYXJcIiwgbnVtYmVyW10sIHN0cmluZz4pIHtcclxuICAgICAgICBjaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBbTnVtT2ZQZW9wbGUud2hvbGVQZXIsIE51bU9mUGVvcGxlLkluZmVjdGlvdXMsIE51bU9mUGVvcGxlLlJlY292ZXJlZF07XHJcbiAgICAgICAgY2hhcnQudXBkYXRlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBudW1QIH0gZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHsgbnVtUHNob3cgfSBmcm9tICcuL291dHB1dF9uT3AnXHJcblxyXG5leHBvcnQgY29uc3QgQU5TQU5yYW5nZSA9IFsgLy8g7JWI7IKw7IucIOuylOychCDri6TqsIHtmJVcclxuICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zNDUzNjYwMTM0MDExNywgMTI2Ljc4MzMzNjY4NzI5MzApLFxyXG4gICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjM1MjM5ODAzMjEwMTkxLCAxMjYuODA2NDMxNzcxMDUxOSksXHJcbiAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzQ5MTg2MTA2MTQ2MTMsIDEyNi44MjY5MzU5MTM5NzY2KSxcclxuICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMzc0MTE3Mzg5NjY5MiwgMTI2Ljg2Mjg5Mjg3MjkwMDgpLFxyXG4gICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMzMzMxODE1MTk1NzQ3LCAxMjYuODc2NjIxNTU5NjQzNCksXHJcbiAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMjk5OTU4NjY3MDU1NjIsIDEyNi44OTE3NDQ3MzAzMDQ3KSxcclxuICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4yODEyOTE5NDE2ODk0MywgMTI2Ljg2MDAxNzgzNjQ0NDcpLFxyXG4gICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjI4MTMwNTQxOTI5NzU1LCAxMjYuODM1NDY5NjM4Nzc3NyksXHJcbiAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMjk1MTI0NDMwODY1MTQsIDEyNi43ODMzMTE2OTA0NTQzKSxcclxuICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMjQxNjk5OTM1Njg5NiwgMTI2Ljc2NzEwNTU3MzY5MTEpLFxyXG5dO1xyXG4gICAgXHJcbi8v7JuA7KeB7J6EIOuylOychCDsoJztlZxcclxuZXhwb3J0IGNvbnN0IEFOU0FOdmVjdG9yID0gW1xyXG4gICAgeyB4OiAwLjAyMzA5NTA4Mzc1ODksIHk6IDAuMDA3MDMyMDE4NzAwNzQgfSxcclxuICAgIHsgeDogMC4wMjA1MDQxNDI5MjQ3LCB5OiAtMC4wMDMyMTE5MjU5NTU3OCB9LFxyXG4gICAgeyB4OiAwLjAzNTk1Njk1ODkyNDIsIHk6IC0wLjAxMTc3NDM2NzE3OTIxIH0sXHJcbiAgICB7IHg6IDAuMDEzNzI4Njg2NzQyNiwgeTogLTAuMDA0MDkzNTg3MDA5NDUgfSxcclxuICAgIHsgeDogMC4wMTUxMjMxNzA2NjEzLCB5OiAtMC4wMzMzNTk0ODQ5MDE4NSB9LFxyXG4gICAgeyB4OiAtMC4wMzE3MjY4OTM4NiwgIHk6IC0wLjAxODY2NjcyNTM2NjE5IH0sXHJcbiAgICB7IHg6IC0wLjAyNDU0ODE5NzY2NywgeTogMC4wMDAwMTM0Nzc2MDgxMiB9LFxyXG4gICAgeyB4OiAtMC4wNTIxNTc5NDgzMjM0LCB5OiAwLjAxMzgxOTAxMTU2NzU5IH0sXHJcbiAgICB7IHg6IC0wLjAxNjIwNjExNjc2MzIsIHk6IDAuMDI5MDQ1NTYyNzAzODIgfSxcclxuICAgIHsgeDogMC4wMjExOTYwMTk4MzIyMSwgeTogMC4wMjkwNDU1NjI3MDM4MiB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBNT1ZFX1BBUkFNUyA9IHtcclxuICAgICd3Jzoge1xyXG4gICAgICAgIHZ4OiAwLjAwMDAzLFxyXG4gICAgICAgIHZ5OiAwXHJcbiAgICB9LFxyXG4gICAgJ3MnOiB7XHJcbiAgICAgICAgdng6IC0wLjAwMDAzLFxyXG4gICAgICAgIHZ5OiAwXHJcbiAgICB9LFxyXG4gICAgJ2EnOiB7XHJcbiAgICAgICAgdng6IDAsXHJcbiAgICAgICAgdnk6IC0wLjAwMDAzXHJcbiAgICB9LFxyXG4gICAgJ2QnOiB7XHJcbiAgICAgICAgdng6IDAsXHJcbiAgICAgICAgdnk6IDAuMDAwMDNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IF9OdW1PZlBlb3BsZTogbnVtUCA9IHtcclxuICAgIHdob2xlUGVyOiA4MDAsXHJcbiAgICBJbmZlY3Rpb3VzOiAwLFxyXG4gICAgUmVjb3ZlcmVkOiAwLFxyXG4gICAgZGVhZFBlcjogMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTnVtT2ZQZW9wbGUgPSBuZXcgUHJveHkoXHJcbiAgICBfTnVtT2ZQZW9wbGUsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKHRhcmdldCwgbmFtZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odGFyZ2V0LCBuYW1lLCB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlXHJcbiAgICAgICAgICAgIGlmKG5hbWUgPT0gJ3dob2xlUGVyJyB8fCBuYW1lID09ICdJbmZlY3Rpb3VzJyB8fCBuYW1lID09ICdSZWNvdmVyZWQnIHx8IG5hbWUgPT0gJ2RlYWRQZXInKXtcclxuICAgICAgICAgICAgICAgIG51bVBzaG93KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyN0aW1lc2V0Jyk7XHJcbmV4cG9ydCBjb25zdCB0aW1lYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyN0aW1lYm94Jyk7XHJcbmV4cG9ydCBjb25zdCB0aW1lU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignI3RpbWVTcGVlZCcpO1xyXG5leHBvcnQgY29uc3QgbXlsb2NhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignLm15bG9jYXRlJyk7XHJcbmV4cG9ydCBjb25zdCBDYXBzbG9ja19hbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcuQ2Fwc2xvY2tfYWxlcnQnKTtcclxuZXhwb3J0IGNvbnN0IHZpcnVzX2luZmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcudmlydXNfaW5mZWN0aW9uJyk7XHJcbmV4cG9ydCBjb25zdCBQX2luZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjUF9pbmYnKTtcclxuZXhwb3J0IGNvbnN0IFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjU3F1YXJlJyk7XHJcbmV4cG9ydCBjb25zdCBjbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjY2xvY2snKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNiYXJEaXYnKTtcclxuZXhwb3J0IGNvbnN0IGJhckdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oJyNiYXJHcmFwaCcpO1xyXG5leHBvcnQgY29uc3QgYmFyR3JhcGhfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNiYXJHcmFwaF9idG4nKTtcclxuZXhwb3J0IGNvbnN0IGxpbmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignI2xpbmVEaXYnKTtcclxuZXhwb3J0IGNvbnN0IGxpbmVHcmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KCcjbGluZUdyYXBoJyk7XHJcbmV4cG9ydCBjb25zdCBsaW5lR3JhcGhfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNsaW5lR3JhcGhfYnRuJyk7IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcclxuaW1wb3J0IHsgaW5pdCBhcyDsp4Drj4TshKTsoJUgfSBmcm9tICcuL3NldHRpbmdfbWFwJ1xyXG5pbXBvcnQgeyBpbml0IGFzIOyViOyCsOuylOychCB9IGZyb20gJy4vYW5zYW5SYW5nZSdcclxuaW1wb3J0IHsgaW5pdCBhcyBodG1s7JWg64uI66mU7J207IWYIH0gZnJvbSAnLi9zaWRlX21lbnUnXHJcbmltcG9ydCB7IGluaXQgYXMg7JuA7KeBIH0gZnJvbSAnLi9tb3ZpbmdfcGVvcGxlJ1xyXG5pbXBvcnQgeyBpbml0IGFzIOqwkOyXvOuylOychCB9IGZyb20gJy4vaW5mZWNfcmFuZ2UnXHJcbmltcG9ydCB7IGluaXQgYXMgdGltZWJveCB9IGZyb20gJy4vdGltZUJveCdcclxuaW1wb3J0IHsgaW5pdCBhcyBwbGF5ZXJMb2NhdGlvbiB9IGZyb20gJy4vcGxheWVyX2xvY2F0aW9uJ1xyXG5pbXBvcnQgeyBpbml0IGFzIOyLnOqwhOqwgOyGjSB9IGZyb20gJy4vdGltZV9BQ0MnXHJcbmltcG9ydCB7IGluaXQgYXMg66eJ64yAIH0gZnJvbSAnLi9iYXJHcmFwaCdcclxuaW1wb3J0IHsgaW5pdCBhcyDshKAgfSBmcm9tICcuL2xpbmVHcmFwaCdcclxuLy8gaW1wb3J0IHsgaW5pdCBhcyByb2FkRGF0YSB9IGZyb20gJy4vcm9hZERhdGEnXHJcbmltcG9ydCB7IGluaXQgYXMgcm9hZHBvaW50IH0gZnJvbSAnLi9yb2FkUG9pbnQnXHJcbmltcG9ydCB7IGluaXQgYXMg7J6E7Iuc7IKs656MIH0gZnJvbSAnLi/snoTsi5zsgqzrnownXHJcblxyXG5pbXBvcnQgeyBOdW1PZlBlb3BsZSB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5cclxuY29uc3Qgd29ybGRfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3JsZF9uYW1lJyk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICBcclxuICAgIGxldCB3b3JsZG5hbWUgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIG5hbWUgb2YgdGhpcyB3b3JsZD9cIiwgJ21ldGFfMScpO1xyXG4gICAgbGV0IG5wID0gTnVtYmVyKHByb21wdChgSG93IG1hbnkgcGVvcGxlIGluICR7d29ybGRuYW1lfWAsICc4MDAnKSk7XHJcbiAgICBOdW1PZlBlb3BsZS53aG9sZVBlciA9IG5wO1xyXG4gICAgd29ybGRfbmFtZS5pbm5lckhUTUwgPSB3b3JsZG5hbWU7XHJcblxyXG4gICAgY29uc3QgeyBtYXAgfSA9IOyngOuPhOyEpOyglSgpXHJcbiAgICDslYjsgrDrspTsnIQobWFwKVxyXG4gICAgYXdhaXQgcm9hZHBvaW50KClcclxuICAgIGh0bWzslaDri4jrqZTsnbTshZgoKVxyXG4gICAg7JuA7KeBKG1hcClcclxuICAgIC8vIHJvYWREYXRhKG1hcClcclxuICAgIOyehOyLnOyCrOuejChtYXApXHJcbiAgICDqsJDsl7zrspTsnIQoKVxyXG4gICAgdGltZWJveCgpXHJcbiAgICBwbGF5ZXJMb2NhdGlvbigpXHJcbiAgICDsi5zqsITqsIDsho0oKVxyXG4gICAg66eJ64yAKClcclxuICAgIOyEoCgpXHJcbn1cclxuXHJcbmluaXQoKSIsImltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4vcGVyc29uJ1xyXG5pbXBvcnQgeyBOdW1PZlBlb3BsZSB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBwZW9wbGVzLCB2YXJpYWJsZSB9IGZyb20gJy4vdmFyaWFibGUnXHJcbmltcG9ydCB7IG51bVBzaG93IH0gZnJvbSAnLi9vdXRwdXRfbk9wJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICB2YXJpYWJsZS5zZXQyID0gc2V0SW50ZXJ2YWwoZnVuLCB2YXJpYWJsZS5zcGVlZFZhbHVlMilcclxufVxyXG5cclxuZnVuY3Rpb24gZnVuKCl7XHJcbiAgICBpZih2YXJpYWJsZS5tb3ZpbmdTdGFydCA9PSB0cnVlKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGVvcGxlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwZW9wbGVzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGlmKHBlb3BsZXNbaV0uY29sb3IgPT0gJ3JlZCcgJiYgcGVvcGxlc1tqXS5jb2xvciA9PSAnZ3JlZW4nKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMXggPSBwZW9wbGVzW2ldLnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDF5ID0gcGVvcGxlc1tpXS5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAyeCA9IHBlb3BsZXNbal0ucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMnkgPSBwZW9wbGVzW2pdLnBvc2l0aW9uLnk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gTWF0aC5zcXJ0KE1hdGgucG93KHAxeCAtIHAyeCwgMikgKyBNYXRoLnBvdyhwMXkgLSBwMnksIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPCAwLjAwMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyKDEwLCBwZW9wbGVzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcihuOiBudW1iZXIsIHBlbzogUGVyc29uKXtcclxuICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcclxuICAgIGxldCBudW0gPSBuLzEwMDtcclxuICAgIGlmKHJhbmQgPD0gbnVtKXtcclxuICAgICAgICBwZW8uY2hhbmdlQ29sb3IoKTtcclxuICAgICAgICBOdW1PZlBlb3BsZS5JbmZlY3Rpb3VzKys7XHJcbiAgICAgICAgTnVtT2ZQZW9wbGUud2hvbGVQZXItLTtcclxuICAgICAgICBudW1Qc2hvdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZ1biB9IiwiaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tICdjaGFydC5qcydcclxuaW1wb3J0IHsgbWVudUJ0bl9jbGljaywgdmFyaWFibGUsIHRpbWVfREhTIH0gZnJvbSAnLi92YXJpYWJsZSdcclxuaW1wb3J0IHsgTnVtT2ZQZW9wbGUsIGxpbmVEaXYsIGxpbmVHcmFwaCwgbGluZUdyYXBoX2J0biB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5cclxuQ2hhcnQucmVnaXN0ZXIoLi4ucmVnaXN0ZXJhYmxlcyk7XHJcbmNvbnN0IGFyciA9IFsnd2hvbGVQZXInLCAnSW5mZWN0aW91cycsICdSZXNpc3RlbnQnXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIGNvbnN0IGxpbmVDID0gbmV3IENoYXJ0KGxpbmVHcmFwaCwge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg5OSwgMjU1LCAxMzIsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDk5LCAyNTUsIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjRcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdJJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjRcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDMsXHJcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjRcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IE51bU9mUGVvcGxlLndob2xlUGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgbGluZUMuaGlkZSgwKTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCBuOm51bWJlciA9IG51bGw7XHJcbiAgICBsZXQgc25kID0gMDtcclxuICAgIHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgbiA9IHRpbWVfREhTLm1pbiAlIDEwO1xyXG4gICAgICAgIGlmKG4gPT0gMCAmJiBzbmQgIT09IE1hdGguZmxvb3IodGltZV9ESFMubWluIC8gMTApKXtcclxuICAgICAgICAgICAgc25kID0gTWF0aC5mbG9vcih0aW1lX0RIUy5taW4gLyAxMCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJ0KGxpbmVDKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtZW51QnRuX2NsaWNrLm1haW4gPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBsaW5lRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGxpbmVDLmhpZGUoMClcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5saW5lID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgNjApXHJcblxyXG4gICAgbGluZUdyYXBoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYobWVudUJ0bl9jbGljay5saW5lID09IGZhbHNlKXtcclxuICAgICAgICAgICAgbGluZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgbGluZURpdi5zdHlsZS56SW5kZXggPSBsaW5lRGl2LnN0eWxlLnpJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGxpbmVDLnNob3coMClcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5iYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5saW5lID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGluZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBsaW5lQy5oaWRlKDApXHJcbiAgICAgICAgICAgIGxpbmVEaXYuc3R5bGUuekluZGV4ID0gJzE1MCc7XHJcbiAgICAgICAgICAgIG1lbnVCdG5fY2xpY2subGluZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYobWVudUJ0bl9jbGljay5tYWluID09IHRydWUpe1xyXG4gICAgICAgIGxpbmVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsaW5lQy5oaWRlKDApXHJcbiAgICAgICAgbGluZURpdi5zdHlsZS56SW5kZXggPSAnMTUwJztcclxuICAgICAgICBtZW51QnRuX2NsaWNrLmxpbmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hhcnQoY2hhcnQ6IENoYXJ0PFwibGluZVwiLCBudW1iZXJbXSwgc3RyaW5nPikge1xyXG4gICAgICAgIGNoYXJ0LmRhdGEubGFiZWxzLnB1c2goYFQke2krK31gKTtcclxuICAgICAgICBjaGFydC5kYXRhLmRhdGFzZXRzLmZvckVhY2goKGRhdGFzZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGFzZXQuZGF0YS5wdXNoKE51bU9mUGVvcGxlW2FycltpbmRleF1dKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjaGFydC51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNT1ZFX1BBUkFNUywgTnVtT2ZQZW9wbGUsIHRpbWVzZXQsIENhcHNsb2NrX2FsZXJ0LCB2aXJ1c19pbmZlY3Rpb24sIFBfaW5mIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4vcGVyc29uJ1xyXG5pbXBvcnQgeyBtb3ZlT3B0cywgcGVvcGxlcywgdmFyaWFibGUgfSBmcm9tICcuL3ZhcmlhYmxlJ1xyXG5pbXBvcnQgeyBudW1Qc2hvdyB9IGZyb20gJy4vb3V0cHV0X25PcCdcclxuXHJcbmxldCBjdXJyZW50UGVvcGxlOiBQZXJzb24gPSBudWxsO1xyXG5sZXQgc2V0UGVvcGxlID0gbnVsbDtcclxubGV0IHNldFBlb3BsZVBvc2l0aW9uID0gbnVsbDtcclxubGV0IGluZmVjX3BlbyA9IGZhbHNlO1xyXG5sZXQgbWFwOiBrYWthby5tYXBzLk1hcCA9IG51bGw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdChfbWFwOiBrYWthby5tYXBzLk1hcCl7XHJcbiAgICBtYXAgPSBfbWFwXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IE51bU9mUGVvcGxlLndob2xlUGVyOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHBlcnNvbiA9IG5ldyBQZXJzb24obWFwKVxyXG4gICAgICAgIHBlb3BsZXMucHVzaChwZXJzb24pXHJcbiAgICBcclxuICAgICAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHBlcnNvbi5jaXJjbGUsICdjbGljaycsIGZ1bmN0aW9uKG1vdXNlRXZlbnQpe1xyXG4gICAgICAgICAgICBjdXJyZW50UGVvcGxlID0gcGVyc29uO1xyXG5cclxuICAgICAgICAgICAgUF9pbmYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIFBfaW5mLmlubmVySFRNTCA9IGB4OiAke3Blb3BsZXNbaV0ucG9zaXRpb24ueH08YnI+eTogJHtwZW9wbGVzW2ldLnBvc2l0aW9uLnl9PGJyPmluZmVjdGlvbjogJHtwZW9wbGVzW2ldLmluZmVjdGlvbn1gO1xyXG4gICAgICAgICAgICBQX2luZi5zdHlsZS5maWx0ZXIgPSAnb3BhY2l0eSgxMDAlKSc7XHJcbiAgICAgICAgICAgIFBfaW5mLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuM3MnO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFBfaW5mLnN0eWxlLmZpbHRlciA9ICdvcGFjaXR5KDAlKSc7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgUF9pbmYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBQX2luZi5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAwcyc7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG51bVBzaG93KClcclxuXHJcbiAgICB3aW5kb3cub25rZXlkb3duID0gKGV2dCkgPT57XHJcbiAgICAgICAgaWYoZXZ0LmdldE1vZGlmaWVyU3RhdGUoXCJDYXBzTG9ja1wiKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgQ2Fwc2xvY2tfYWxlcnQuc3R5bGUuZmlsdGVyID0gJ29wYWNpdHkoMTAwJSknO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBDYXBzbG9ja19hbGVydC5zdHlsZS5maWx0ZXIgPSAnb3BhY2l0eSgwJSknO1xyXG4gICAgICAgICAgICBpZihbJ3cnLCAnYScsICdzJywgJ2QnXS5pbmNsdWRlcyhldnQua2V5KSAmJiBjdXJyZW50UGVvcGxlICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gY3VycmVudFBlb3BsZS5jaXJjbGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmKChNYXRoLmFicyhjdXJyZW50UGVvcGxlLnBvc2l0aW9uLnkgLSBtYXAuZ2V0Q2VudGVyKCkuZ2V0TGF0KCkpID4gMC4wMDAwNSB8fCBNYXRoLmFicyhjdXJyZW50UGVvcGxlLnBvc2l0aW9uLnggLSBtYXAuZ2V0Q2VudGVyKCkuZ2V0TG5nKCkpID4gMC4wMDAwNSkgJiYgdmFyaWFibGUucGFudG8gPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFudG8hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcC5wYW5UbyhjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVPcHRzLmtleSA9IGV2dC5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZU9wdHMuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUucGFudG8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZU9wdHMua2V5ID0gZXZ0LmtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYoZXZ0LmtleUNvZGUgPT0gMjcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VTQycpO1xyXG4gICAgICAgICAgICAgICAgbW92ZU9wdHMua2V5ID0gJyc7IFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBlb3BsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdpbmRvdy5vbmtleXVwID0gKGUpID0+e1xyXG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAzMil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzcGFjZWJhcicpXHJcbiAgICAgICAgICAgIGlmKHRpbWVzZXQuaW5uZXJIVE1MID09ICdJSScpe1xyXG4gICAgICAgICAgICAgICAgdGltZXNldC5pbm5lckhUTUwgPSAn4pa2JztcclxuICAgICAgICAgICAgICAgIHRpbWVzZXQuc3R5bGUubGluZUhlaWdodCA9ICdub3JtYWwnO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGUubW92aW5nU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aW1lc2V0LmlubmVySFRNTCA9ICdJSSc7XHJcbiAgICAgICAgICAgICAgICB0aW1lc2V0LnN0eWxlLmxpbmVIZWlnaHQgPSAnMjVweCc7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZS5tb3ZpbmdTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihlLmtleSA9PSBtb3ZlT3B0cy5rZXkpe1xyXG4gICAgICAgICAgICBtb3ZlT3B0cy5rZXkgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApXHJcblxyXG4gICAgdmlydXNfaW5mZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXsgICBcclxuICAgICAgICBpZihjdXJyZW50UGVvcGxlICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpbmZlY19wZW8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGVwKCl7XHJcbiAgICAvLyDtlIzroIjsnbQgdyxhLHMsZFxyXG4gICAgY29uc3QgcCA9IE1PVkVfUEFSQU1TW21vdmVPcHRzLmtleV07XHJcbiAgICBpZihwICE9IG51bGwgJiYgY3VycmVudFBlb3BsZSAhPSBudWxsKXtcclxuICAgICAgICBpZigrbW92ZU9wdHMuZCArIDUwMCA8ICtuZXcgRGF0ZSgpKXtcclxuICAgICAgICAgICAgY3VycmVudFBlb3BsZS5wb3NpdGlvbi54ICs9IHAudnk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQZW9wbGUucG9zaXRpb24ueSArPSBwLnZ4O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3IGtha2FvLm1hcHMuTGF0TG5nKGN1cnJlbnRQZW9wbGUucG9zaXRpb24ueSwgY3VycmVudFBlb3BsZS5wb3NpdGlvbi54KVxyXG4gICAgICAgICAgICBjdXJyZW50UGVvcGxlLmNpcmNsZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgICAgICBtYXAuc2V0Q2VudGVyKGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwZW9wbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBwZW9wbGUgPSBwZW9wbGVzW2ldO1xyXG4gICAgICAgIGlmKHZhcmlhYmxlLm1vdmluZ1N0YXJ0ID09IHRydWUpe1xyXG4gICAgICAgICAgICBpZihjdXJyZW50UGVvcGxlID09IHBlb3BsZSl7XHJcbiAgICAgICAgICAgICAgICBpZihpbmZlY19wZW8gPT0gdHJ1ZSAmJiBwZW9wbGUuY29sb3IgPT0gJ2dyZWVuJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVvcGxlLmNoYW5nZUNvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtT2ZQZW9wbGUuSW5mZWN0aW91cysrO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bU9mUGVvcGxlLndob2xlUGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mZWNfcGVvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocGVvcGxlLmRpZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUucmFuZFZlbCgpXHJcbiAgICAgICAgICAgICAgICBwZW9wbGUudmVsQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIHBlb3BsZS5tb3ZlKClcclxuICAgICAgICAgICAgICAgIHBlb3BsZS5saW1pdFJhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0UGVvcGxlID0gcGVvcGxlLmNpcmNsZTtcclxuICAgICAgICAgICAgICAgIHNldFBlb3BsZVBvc2l0aW9uID0gc2V0UGVvcGxlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAoc2V0UGVvcGxlUG9zaXRpb24gYXMgYW55KS5MYSA9IHBlb3BsZS5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICAgICAgKHNldFBlb3BsZVBvc2l0aW9uIGFzIGFueSkuTWEgPSBwZW9wbGUucG9zaXRpb24ueTtcclxuICAgICAgICAgICAgICAgIHNldFBlb3BsZS5zZXRQb3NpdGlvbihzZXRQZW9wbGVQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKVxyXG59IiwiaW1wb3J0IHsgTnVtT2ZQZW9wbGUgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IFNfc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcjU19zaG93Jyk7XHJcbmNvbnN0IElfc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcjSV9zaG93Jyk7XHJcbmNvbnN0IFJfc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcjUl9zaG93Jyk7XHJcbmNvbnN0IERfc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcjRF9zaG93Jyk7XHJcblxyXG5mdW5jdGlvbiBudW1Qc2hvdygpe1xyXG4gICAgU19zaG93LmlubmVySFRNTCA9IGAke051bU9mUGVvcGxlLndob2xlUGVyfWA7XHJcbiAgICBJX3Nob3cuaW5uZXJIVE1MID0gYCR7TnVtT2ZQZW9wbGUuSW5mZWN0aW91c31gO1xyXG4gICAgUl9zaG93LmlubmVySFRNTCA9IGAke051bU9mUGVvcGxlLlJlY292ZXJlZH1gO1xyXG4gICAgRF9zaG93LmlubmVySFRNTCA9IGAke051bU9mUGVvcGxlLmRlYWRQZXJ9YDtcclxufVxyXG5cclxuZXhwb3J0eyBudW1Qc2hvdyB9IiwiaW1wb3J0IHsgUGVvcGxlIH0gZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHsgQU5TQU5yYW5nZSwgQU5TQU52ZWN0b3IsIE51bU9mUGVvcGxlIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IHZhcmlhYmxlIH0gZnJvbSAnLi92YXJpYWJsZSdcclxuaW1wb3J0IHsgcG9pbnREYXRhIH0gZnJvbSAnLi9yb2FkUG9pbnQnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbiBpbXBsZW1lbnRzIFBlb3BsZSB7XHJcbiAgICBjaXJjbGU6IGtha2FvLm1hcHMuQ2lyY2xlO1xyXG4gICAgcG9zaXRpb246IFBlb3BsZVtcInBvc2l0aW9uXCJdO1xyXG4gICAgdmVsb2NpdHk6IFBlb3BsZVtcInZlbG9jaXR5XCJdO1xyXG4gICAgY29sb3I6IFBlb3BsZVtcImNvbG9yXCJdO1xyXG4gICAgaW5mZWN0aW9uOiBQZW9wbGVbXCJpbmZlY3Rpb25cIl07XHJcbiAgICBkaWUgOiBQZW9wbGVbXCJkaWVcIl07XHJcbiAgICBmYXRhbGl0eVJhdGU6IFBlb3BsZVsnZmF0YWxpdHlSYXRlJ107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1hcDoga2FrYW8ubWFwcy5NYXApe1xyXG4gICAgICAgIGxldCBsb2M6bnVtYmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgcmFuZExvY2F0aW9uOmtha2FvLm1hcHMuTGF0TG5nID0gbnVsbDtcclxuICAgICAgICBsb2MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb2ludERhdGEubGVuZ3RoKTtcclxuICAgICAgICByYW5kTG9jYXRpb24gPSBwb2ludERhdGFbbG9jXS5sYXRsbmc7XHJcblxyXG4gICAgICAgIHRoaXMuY2lyY2xlID0gbmV3IGtha2FvLm1hcHMuQ2lyY2xlKHtcclxuICAgICAgICAgICAgY2VudGVyIDogcmFuZExvY2F0aW9uLCAvLyDsm5DsnZgg7KSR7Ius7KKM7ZGcXHJcbiAgICAgICAgICAgIHJhZGl1czogNSwgLy8g66+47YSwIOuLqOychOydmCDsm5DsnZgg67CY7KeA66aEXHJcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAsIC8vIOyEoOydmCDrtojtiKzrqoXrj4QgMeyXkOyEnCAwIOyCrOydtOydmCDqsJLsnbTrqbAgMOyXkCDqsIDquYzsmrjsiJjroZ0g7Yis66qFXHJcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJ2dyZWVuJywgLy8g7LGE7Jqw6riwIOyDieq5lFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMSAgLy8g7LGE7Jqw6riwIOu2iO2IrOuqheuPhFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2lyY2xlLnNldE1hcChtYXApO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0geyB4OiByYW5kTG9jYXRpb24uZ2V0TG5nKCksIHk6IHJhbmRMb2NhdGlvbi5nZXRMYXQoKSB9O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICB0aGlzLmluZmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmF0YWxpdHlSYXRlID0gMDtcclxuICAgICAgICB0aGlzLmRpZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvbG9yKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb2xvciA9PSAnZ3JlZW4nKXtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGUuc2V0T3B0aW9ucyh7IGZpbGxDb2xvcjogJ3JlZCcgfSlcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgICAgICB0aGlzLmluZmVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlYXRoKCl7XHJcbiAgICAgICAgdGhpcy5jaXJjbGUuc2V0T3B0aW9ucyh7IGZpbGxDb2xvcjogJ2dyYXknIH0pXHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdncmF5JztcclxuICAgICAgICB0aGlzLmRpZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZFZlbCgpe1xyXG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHJhbmQgPCAwLjI1KXtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IDAuMDAwMDAyO1xyXG4gICAgICAgIH0gZWxzZSBpZihyYW5kIDwgMC41KXtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IDAuMDAwMDAyO1xyXG4gICAgICAgIH0gZWxzZSBpZihyYW5kIDwgMC43NSl7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSArPSAwLjAwMDAwMjtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSAwLjAwMDAwMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmVsQ2hlY2soKSB7XHJcbiAgICAgICAgaWYodGhpcy52ZWxvY2l0eS54ID49IHZhcmlhYmxlLnZlbFJhbmdlKXtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdmFyaWFibGUudmVsUmFuZ2U7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy52ZWxvY2l0eS54IDw9IC12YXJpYWJsZS52ZWxSYW5nZSl7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC12YXJpYWJsZS52ZWxSYW5nZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnZlbG9jaXR5LnkgPj0gdmFyaWFibGUudmVsUmFuZ2Upe1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSB2YXJpYWJsZS52ZWxSYW5nZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnZlbG9jaXR5LnkgPD0gLXZhcmlhYmxlLnZlbFJhbmdlKXtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXZhcmlhYmxlLnZlbFJhbmdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgfVxyXG5cclxuICAgIGxpbWl0UmFuZ2UoKXtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgQU5TQU52ZWN0b3IubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBjb25zdCBhbnNhbiA9IEFOU0FOcmFuZ2Vbal07XHJcbiAgICAgICAgICAgIGNvbnN0IHZlYyA9IEFOU0FOdmVjdG9yW2pdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHYyeCA9IHRoaXMucG9zaXRpb24ueCAtIGFuc2FuLmdldExuZygpO1xyXG4gICAgICAgICAgICBsZXQgdjJ5ID0gdGhpcy5wb3NpdGlvbi55IC0gYW5zYW4uZ2V0TGF0KCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmVjLnggKiB2MnkgLSB2ZWMueSAqIHYyeDtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCA+PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbXlsb2NhdGUgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgbW92ZU9wdHMsIHZhcmlhYmxlIH0gZnJvbSAnLi92YXJpYWJsZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7IC8vIO2UjOugiOydtOyWtCDsnITsuZgg7ZGc7IucXHJcbiAgICAgICAgaWYobW92ZU9wdHMua2V5ID09ICcnKXtcclxuICAgICAgICAgICAgbXlsb2NhdGUuc3R5bGUuZmlsdGVyID0gJ29wYWNpdHkoMCUpIGRyb3Atc2hhZG93KDAgMCAzcHggYmxhY2spJztcclxuICAgICAgICAgICAgdmFyaWFibGUucGFudG8gPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBteWxvY2F0ZS5zdHlsZS5maWx0ZXIgPSAnb3BhY2l0eSgxMDAlKSBkcm9wLXNoYWRvdygwIDAgM3B4IGJsYWNrKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgNTApXHJcbn0iLCJpbXBvcnQgeyBtYXAgfSBmcm9tIFwiLi9zZXR0aW5nX21hcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvaW50RGF0YTp7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIGxhdGxuZzprYWthby5tYXBzLkxhdExuZztcclxuICAgIGxpbmVzPzpudW1iZXJbXTtcclxufVtdID0gW107XHJcbmV4cG9ydCBjb25zdCBsaW5lRGF0YToge1xyXG4gICAgcm9hZF9pZDogbnVtYmVyO1xyXG4gICAgbGluZVBhdGg6IGtha2FvLm1hcHMuTGF0TG5nW107XHJcbn1bXSA9IFtdO1xyXG5cclxudHlwZSBQb2ludCA9IHsgXHJcbiAgICB0eXBlOiBcIkZlYXR1cmVcIjsgXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgTk9ERV9JRDogc3RyaW5nO1xyXG4gICAgICAgIE5PREVfVFlQRTogc3RyaW5nO1xyXG4gICAgICAgIE5PREVfTkFNRTogc3RyaW5nO1xyXG4gICAgICAgIFRVUk5fUDpzdHJpbmc7XHJcbiAgICAgICAgUkVNQVJLOiBudWxsIFxyXG4gICAgfTtcclxuICAgIGdlb21ldHJ5OiB7IFxyXG4gICAgICAgIHR5cGU6IFwiUG9pbnRcIjtcclxuICAgICAgICBjb29yZGluYXRlczogWyBudW1iZXIsIG51bWJlciBdXHJcbiAgICB9XHJcbn1cclxudHlwZSByb2FkID0ge1xyXG4gICAgdHlwZTogXCJGZWF0dXJlXCI7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgTElOS19JRDogc3RyaW5nO1xyXG4gICAgICAgIEZfTk9ERTogc3RyaW5nO1xyXG4gICAgICAgIFRfTk9ERTogc3RyaW5nO1xyXG4gICAgICAgIExBTkVTOiBudW1iZXI7XHJcbiAgICAgICAgUk9BRF9SQU5LOiBzdHJpbmc7XHJcbiAgICAgICAgUk9BRF9UWVBFOiBzdHJpbmc7XHJcbiAgICAgICAgUk9BRF9OTzogc3RyaW5nO1xyXG4gICAgICAgIFJPQURfTkFNRTogc3RyaW5nO1xyXG4gICAgICAgIFJPQURfVVNFOiBzdHJpbmc7XHJcbiAgICAgICAgTVVMVElfTElOSzogc3RyaW5nO1xyXG4gICAgICAgIENPTk5FQ1Q6IHN0cmluZztcclxuICAgICAgICBNQVhfU1BEOiBudW1iZXI7XHJcbiAgICAgICAgUkVTVF9WRUg6IHN0cmluZztcclxuICAgICAgICBSRVNUX1c6IG51bWJlcjtcclxuICAgICAgICBSRVNUX0g6IG51bWJlcjtcclxuICAgICAgICBMRU5HVEg6IG51bWJlcjtcclxuICAgICAgICBSRU1BUks6IG51bGxcclxuICAgIH07XHJcbiAgICBnZW9tZXRyeToge1xyXG4gICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiO1xyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdW11cclxuICAgIH0gXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJy4vZGF0YS9hbnNhbnpvbmVfcG9pbnQudHh0Jyk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goJy4vZGF0YS9hbnNhbnpvbmVfcm9hZC50eHQnKTtcclxuICAgIGNvbnN0IHR4dDE9IGF3YWl0IHJlczEudGV4dCgpO1xyXG4gICAgY29uc3QgdHh0MiA9IGF3YWl0IHJlczIudGV4dCgpO1xyXG4gICAgY29uc3QgYXJyMSA9IHR4dDEuc3BsaXQoJ1xcbicpLmZpbHRlcih2ID0+IHYudHJpbSgpKS5tYXAodiA9PiAoSlNPTi5wYXJzZSh2KSBhcyBQb2ludCkuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpO1xyXG4gICAgY29uc3QgYXJyMiA9IHR4dDIuc3BsaXQoJ1xcbicpLmZpbHRlcih2ID0+IHYudHJpbSgpKS5tYXAodiA9PiAoSlNPTi5wYXJzZSh2KSBhcyByb2FkKS5nZW9tZXRyeS5jb29yZGluYXRlcyk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycjEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHBvaW50RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogYCR7aX1gLFxyXG4gICAgICAgICAgICBsYXRsbmc6IG5ldyBrYWthby5tYXBzLkxhdExuZyhhcnIxW2ldWzFdIC0gMC4wMDI3NzgxMjMxMzcxMDc2ODg4LCBhcnIxW2ldWzBdICsgMC4wMDIwODAyMTM4MTY2MTgwMzQpLFxyXG4gICAgICAgICAgICBsaW5lczpbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycjIubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgIGNvbnN0IGxpbmVQYXRoXzprYWthby5tYXBzLkxhdExuZ1tdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBuID0gMDsgbiA8IGFycjJbal0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICBsaW5lUGF0aF8ucHVzaChuZXcga2FrYW8ubWFwcy5MYXRMbmcoYXJyMltqXVtuXVsxXSAtIDAuMDAyNzc4MTIzMTM3MTA3Njg4OCwgYXJyMltqXVtuXVswXSArIDAuMDAyMDgwMjEzODE2NjE4MDM0KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZURhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIHJvYWRfaWQ6IGosXHJcbiAgICAgICAgICAgIGxpbmVQYXRoOiBsaW5lUGF0aF9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwb2ludERhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBsaW5lRGF0YS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGxldCBweDpudW1iZXIgPSBwb2ludERhdGFbaV0ubGF0bG5nLmdldExhdCgpO1xyXG4gICAgICAgICAgICBsZXQgcHk6bnVtYmVyID0gcG9pbnREYXRhW2ldLmxhdGxuZy5nZXRMbmcoKTtcclxuICAgICAgICAgICAgbGV0IGxfbGFzdFg6bnVtYmVyID0gbGluZURhdGFbal0ubGluZVBhdGhbbGluZURhdGFbal0ubGluZVBhdGgubGVuZ3RoIC0gMV0uZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgIGxldCBsX2xhc3RZOm51bWJlciA9IGxpbmVEYXRhW2pdLmxpbmVQYXRoW2xpbmVEYXRhW2pdLmxpbmVQYXRoLmxlbmd0aCAtIDFdLmdldExuZygpO1xyXG4gICAgICAgICAgICBsZXQgbF9mc3RYOm51bWJlciA9IGxpbmVEYXRhW2pdLmxpbmVQYXRoWzBdLmdldExhdCgpO1xyXG4gICAgICAgICAgICBsZXQgbF9mc3RZOm51bWJlciA9IGxpbmVEYXRhW2pdLmxpbmVQYXRoWzBdLmdldExuZygpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihNYXRoLnNxcnQoTWF0aC5wb3cocHggLSBsX2ZzdFgsIDIpICsgTWF0aC5wb3cocHkgLSBsX2ZzdFksIDIpKSA8IDAuMDAwMiB8fCBNYXRoLnNxcnQoTWF0aC5wb3cocHggLSBsX2xhc3RYLCAyKSArIE1hdGgucG93KHB5IC0gbF9sYXN0WSwgMikpIDwgMC4wMDAyKXtcclxuICAgICAgICAgICAgICAgIHBvaW50RGF0YVtpXS5saW5lcy5wdXNoKGxpbmVEYXRhW2pdLnJvYWRfaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocG9pbnREYXRhLCBsaW5lRGF0YSlcclxuICAgIGZvcihsZXQgaSBvZiBwb2ludERhdGEpIHtcclxuICAgICAgICBkaXNwbGF5UG9pbnQoaSlcclxuICAgIH1cclxuICAgIGZvcihsZXQgaiBvZiBsaW5lRGF0YSl7XHJcbiAgICAgICAgZGlzcGxheUxpbmUoailcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVBvaW50KGFycjp0eXBlb2YgcG9pbnREYXRhWzBdKXtcclxuICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBrYWthby5tYXBzLkNpcmNsZSh7XHJcbiAgICAgICAgY2VudGVyOiBhcnIubGF0bG5nLFxyXG4gICAgICAgIHJhZGl1czogMTAsXHJcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiAwLFxyXG4gICAgICAgIGZpbGxDb2xvcjogJyNBMkZGOTknLFxyXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjVcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBjdXN0b21PdmVybGF5ID0gbmV3IGtha2FvLm1hcHMuQ3VzdG9tT3ZlcmxheSh7XHJcbiAgICAgICAgcG9zaXRpb246IGFyci5sYXRsbmcsXHJcbiAgICAgICAgY29udGVudDogYXJyLm5hbWVcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGNpcmNsZSwgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKG1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjdXN0b21PdmVybGF5LnNldENvbnRlbnQoYDxkaXYgY2xhc3M9J2FyZWEnPiR7YXJyLm5hbWV9PC9kaXY+YCk7XHJcbiAgICAgICAgY3VzdG9tT3ZlcmxheS5zZXRQb3NpdGlvbihtb3VzZUV2ZW50LmxhdExuZyk7IFxyXG4gICAgICAgIGN1c3RvbU92ZXJsYXkuc2V0TWFwKG1hcCk7XHJcbiAgICB9KTtcclxuICAgIGtha2FvLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoY2lyY2xlLCAnbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjdXN0b21PdmVybGF5LnNldE1hcChudWxsKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGNpcmNsZSwgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKG1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjdXN0b21PdmVybGF5LnNldFBvc2l0aW9uKG1vdXNlRXZlbnQubGF0TG5nKTtcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlLnNldE1hcChtYXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TGluZShhcnI6IHR5cGVvZiBsaW5lRGF0YVswXSl7XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IGtha2FvLm1hcHMuUG9seWxpbmUoe1xyXG4gICAgICAgIHBhdGg6IGFyci5saW5lUGF0aCxcclxuICAgICAgICBzdHJva2VXZWlnaHQ6IDIsXHJcbiAgICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIHN0cm9rZVN0eWxlOiAnc29saWQnXHJcbiAgICB9KTtcclxuICAgIGxpbmUuc2V0TWFwKG1hcClcclxufSIsImNvbnN0IHJlc3VsdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjcmVzdWx0RGl2JylcclxuXHJcbmV4cG9ydCBsZXQgbWFwOmtha2FvLm1hcHMuTWFwID0gbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7IC8vIOyngOuPhCDquLDrs7gg7ISk7KCVXHJcbiAgICAgICAgY2VudGVyOiBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzIxOTE2NTU1MTA2NTIsIDEyNi44MzA4NDMxMTE4MzI4NyksIC8v7KeA64+E7J2YIOykkeyLrOyijO2RnFxyXG4gICAgICAgIG1pbkxldmVsOiAyLFxyXG4gICAgICAgIG1heExldmVsOiA2LCAgXHJcbiAgICAgICAgbGV2ZWw6IDMgLy/sp4Drj4TsnZgg66CI67KoKO2ZleuMgCwg7LaV7IaMIOygleuPhClcclxuICAgIH07XHJcbiAgICBcclxuICAgIG1hcCA9IG5ldyBrYWthby5tYXBzLk1hcChjb250YWluZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGtha2FvLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnY2xpY2snLCBmdW5jdGlvbihtb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgLy8g7YG066at7ZWcIOychOuPhCwg6rK964+EIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgICAgICBsZXQgbGF0bG5nID0gbW91c2VFdmVudC5sYXRMbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAn7YG066at7ZWcIOychOy5mOydmCDsooztkZwgKOychOuPhCzqsr3rj4QpIDogJyArIGxhdGxuZy5nZXRMYXQoKSArICcsICcgKyBsYXRsbmcuZ2V0TG5nKCk7XHJcblxyXG4gICAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBgJHttZXNzYWdlfWA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbWVudUJ0bl9jbGljayB9IGZyb20gJy4vdmFyaWFibGUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7IKs7J2065OcIOuplOyduCDrqZTribQg7JWg64uI66mU7J207IWYIOyLpO2WiVxyXG4gICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignLm1haW5NZW51Jyk7XHJcbiAgICBjb25zdCBtYWluTWVudV9jb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjbWFpbk1lbnVfY29udGVudHMnKTtcclxuICAgIFxyXG4gICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKG1lbnVCdG5fY2xpY2subWFpbiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIG1haW5NZW51X2NvbnRlbnRzLnN0eWxlLmhlaWdodCA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgIG1lbnVCdG5fY2xpY2subWFpbiA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1haW5NZW51X2NvbnRlbnRzLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5tYWluID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyB2YXJpYWJsZSwgdGltZV9ESFMgfSBmcm9tICcuL3ZhcmlhYmxlJ1xyXG5pbXBvcnQgeyB0aW1lYm94LCBTcXVhcmUsIGNsb2NrIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IHBsdXNEZWFkUmF0ZSB9IGZyb20gJy4vRGVhdGgnXHJcblxyXG5sZXQgbnVtID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIHZhcmlhYmxlLnNldDEgPSBzZXRJbnRlcnZhbCh0aW1lLCB2YXJpYWJsZS5zcGVlZFZhbHVlMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWUoKXtcclxuICAgIGlmKHZhcmlhYmxlLm1vdmluZ1N0YXJ0ID09IHRydWUpe1xyXG4gICAgICAgIFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M5ZmU3MSc7XHJcblxyXG4gICAgICAgIHRpbWVfREhTLm1pbisrO1xyXG4gICAgICAgIG51bSArPSB0aW1lYm94Lm9mZnNldFdpZHRoIC8gMTQ0MDtcclxuICAgICAgICBpZih0aW1lX0RIUy5taW4gPj0gNjApe1xyXG4gICAgICAgICAgICB0aW1lX0RIUy5ob3VyKys7XHJcbiAgICAgICAgICAgIHRpbWVfREhTLm1pbiA9IDA7XHJcbiAgICAgICAgICAgIGlmKHRpbWVfREhTLmhvdXIgPj0gMjQpe1xyXG4gICAgICAgICAgICAgICAgdGltZV9ESFMuZGF0ZSsrO1xyXG4gICAgICAgICAgICAgICAgcGx1c0RlYWRSYXRlKClcclxuICAgICAgICAgICAgICAgIG51bSA9IHRpbWVib3gub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aW1lX0RIUy5ob3VyID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZCA9IFN0cmluZyh0aW1lX0RIUy5kYXRlKTtcclxuICAgICAgICBsZXQgaCA9IFN0cmluZyh0aW1lX0RIUy5ob3VyKTtcclxuICAgICAgICBsZXQgcyA9IFN0cmluZyh0aW1lX0RIUy5taW4pO1xyXG4gICAgXHJcbiAgICAgICAgU3F1YXJlLnN0eWxlLndpZHRoID0gYCR7bnVtfXB4YDtcclxuICAgICAgICBpZihudW0gPiB0aW1lYm94Lm9mZnNldFdpZHRoKXtcclxuICAgICAgICAgICAgbnVtID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xvY2suaW5uZXJIVE1MID0gYCR7ZC5wYWRTdGFydCgyLCAnMCcpfSAvICR7aC5wYWRTdGFydCgyLCAnMCcpfSAvICR7cy5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZTczNzEnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0aW1lIH0iLCJpbXBvcnQgeyB0aW1lU3BlZWQgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgdmFyaWFibGUgfSBmcm9tICcuL3ZhcmlhYmxlJ1xyXG5pbXBvcnQgeyBNT1ZFX1BBUkFNUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyB0aW1lIH0gZnJvbSAnLi90aW1lQm94J1xyXG5pbXBvcnQgeyBmdW4gfSBmcm9tICcuL2luZmVjX3JhbmdlJ1xyXG5cclxubGV0IGNoZWNrID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICB0aW1lU3BlZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aW1lQWNjKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGltZUFjYygpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh2YXJpYWJsZS5zZXQxKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodmFyaWFibGUuc2V0MilcclxuICAgIGlmKGNoZWNrID09IDApe1xyXG4gICAgICAgIHRpbWVTcGVlZC5zdHlsZS5jb2xvciA9ICcjZjNjMTI3JztcclxuICAgICAgICB2YXJpYWJsZS5zcGVlZFZhbHVlMSA9IDYwO1xyXG4gICAgICAgIHZhcmlhYmxlLnNwZWVkVmFsdWUyID0gMjUwO1xyXG4gICAgICAgIHNldG1vdmUoMC4wMDAwNiwgLTAuMDAwMDYsIC0wLjAwMDA2LCAwLjAwMDA2KVxyXG4gICAgICAgIHZhcmlhYmxlLnZlbFJhbmdlID0gMC4wMDAyO1xyXG4gICAgICAgIGNoZWNrID0gMTtcclxuICAgIH1lbHNlIGlmKGNoZWNrID09IDEpe1xyXG4gICAgICAgIHRpbWVTcGVlZC5zdHlsZS5jb2xvciA9ICcjZmU3MzcxJztcclxuICAgICAgICB2YXJpYWJsZS5zcGVlZFZhbHVlMSA9IDEwO1xyXG4gICAgICAgIHZhcmlhYmxlLnNwZWVkVmFsdWUyID0gMjU7XHJcbiAgICAgICAgc2V0bW92ZSgwLjAwMDYsIC0wLjAwMDYsIC0wLjAwMDYsIDAuMDAwNilcclxuICAgICAgICB2YXJpYWJsZS52ZWxSYW5nZSA9IDAuMDAwMTtcclxuICAgICAgICBjaGVjayA9IDI7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aW1lU3BlZWQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgIHZhcmlhYmxlLnNwZWVkVmFsdWUxID0gMjAwOyBcclxuICAgICAgICB2YXJpYWJsZS5zcGVlZFZhbHVlMiA9IDUwMDtcclxuICAgICAgICBzZXRtb3ZlKDAuMDAwMDMsIC0wLjAwMDAzLCAtMC4wMDAwMywgMC4wMDAwMylcclxuICAgICAgICB2YXJpYWJsZS52ZWxSYW5nZSA9IDAuMDAwMDE7XHJcbiAgICAgICAgY2hlY2sgPSAwO1xyXG4gICAgfVxyXG4gICAgdmFyaWFibGUuc2V0MSA9IHNldEludGVydmFsKHRpbWUsIHZhcmlhYmxlLnNwZWVkVmFsdWUxKTtcclxuICAgIHZhcmlhYmxlLnNldDIgPSBzZXRJbnRlcnZhbChmdW4sIHZhcmlhYmxlLnNwZWVkVmFsdWUyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0bW92ZSh3OiBudW1iZXIsIHM6IG51bWJlciwgYTogbnVtYmVyLCBkOiBudW1iZXIpIHtcclxuICAgIE1PVkVfUEFSQU1TLncudnggPSB3O1xyXG4gICAgTU9WRV9QQVJBTVMucy52eCA9IHM7XHJcbiAgICBNT1ZFX1BBUkFNUy5hLnZ5ID0gYTtcclxuICAgIE1PVkVfUEFSQU1TLmQudnkgPSBkO1xyXG59IiwiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9wZXJzb24nXHJcblxyXG5leHBvcnQgbGV0IG1vdmVPcHRzID0ge1xyXG4gICAga2V5OiAnJyxcclxuICAgIGQ6IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGxldCBwZW9wbGVzOiBQZXJzb25bXSA9IFtdO1xyXG5cclxuZXhwb3J0IGxldCB2YXJpYWJsZSA9IHtcclxuICAgIG1vdmluZ1N0YXJ0OiB0cnVlLFxyXG4gICAgcGFudG86IGZhbHNlLFxyXG4gICAgc3BlZWRWYWx1ZTE6IDIwMCxcclxuICAgIHNldDE6bnVsbCxcclxuICAgIHNwZWVkVmFsdWUyOiA1MDAsXHJcbiAgICBzZXQyOm51bGwsXHJcbiAgICB2ZWxSYW5nZTogMC4wMDAwMVxyXG59XHJcblxyXG5leHBvcnQgbGV0IG1lbnVCdG5fY2xpY2sgPSB7XHJcbiAgICBtYWluOiBmYWxzZSxcclxuICAgIGJhcjogZmFsc2UsXHJcbiAgICBsaW5lOiBmYWxzZSxcclxuICAgIHNhdmU6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgdGltZV9ESFMgPSB7XHJcbiAgICBkYXRlOiAwLFxyXG4gICAgaG91cjogMCxcclxuICAgIG1pbjogMFxyXG59IiwiaW1wb3J0IHsgcG9pbnREYXRhLCBsaW5lRGF0YSB9IGZyb20gJy4vcm9hZFBvaW50JztcclxuXHJcbi8vIGNsYXNzIEhlYXA8VD57XHJcbi8vICAgICBwcml2YXRlIGFycjp7c2NvcmU6bnVtYmVyLCBkYXRhOlR9W10gPSBbXTtcclxuLy8gICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4vLyAgICAgcHJpdmF0ZSBoZWFwaWZ5SW5jKG51bTpudW1iZXIpOmJvb2xlYW57XHJcbi8vICAgICAgICAgaWYobnVtID09PSAwKSByZXR1cm4gdHJ1ZTtcclxuLy8gICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmFycjtcclxuLy8gICAgICAgICBjb25zdCBwdW0gPSBNYXRoLmZsb29yKG51bSAvIDIpO1xyXG4vLyAgICAgICAgIGNvbnN0IGN1ciA9IGFycltudW1dO1xyXG4vLyAgICAgICAgIGNvbnN0IG5leCA9IGFycltwdW1dO1xyXG4vLyAgICAgICAgIGlmKGN1ci5zY29yZSA8IG5leC5zY29yZSl7XHJcbi8vICAgICAgICAgICAgIGFycltudW1dID0gbmV4O1xyXG4vLyAgICAgICAgICAgICBhcnJbcHVtXSA9IGN1cjtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhcGlmeUluYyhwdW0pO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwdXNoKGRhdGE6VCwgc2NvcmU6bnVtYmVyKXtcclxuLy8gICAgICAgICBpZihpc05hTihzY29yZSkpIHRocm93IEVycm9yKCdzY29yZSDsiKvsnpDrpbwg7JOw7IS47JqUJyk7XHJcbi8vICAgICAgICAgY29uc3QgbnVtID0gdGhpcy5hcnIucHVzaCh7IGRhdGEsIHNjb3JlIH0pIC0gMTtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5oZWFwaWZ5SW5jKG51bSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHJpdmF0ZSBoZWFwaWZ5RGVjKG51bSA9IDApOmJvb2xlYW57XHJcbi8vICAgICAgICAgY29uc3QgbjIgPSAobnVtICsgMSkgKiAyO1xyXG4vLyAgICAgICAgIGNvbnN0IG4xID0gbjIgLSAxO1xyXG4vLyAgICAgICAgIGNvbnN0IGFyciA9IHRoaXMuYXJyO1xyXG4vLyAgICAgICAgIGNvbnN0IGN1ciA9IGFycltudW1dO1xyXG4vLyAgICAgICAgIGNvbnN0IG5leDEgPSBhcnJbbjFdO1xyXG4vLyAgICAgICAgIGNvbnN0IG5leDIgPSBhcnJbbjJdO1xyXG4vLyAgICAgICAgIGlmKG5leDIpe1xyXG4vLyAgICAgICAgICAgICBsZXQgcGljazogbnVtYmVyO1xyXG4vLyAgICAgICAgICAgICBpZihuZXgyLnNjb3JlID4gbmV4MS5zY29yZSl7XHJcbi8vICAgICAgICAgICAgICAgICBwaWNrID0gbjE7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBwaWNrID0gbjI7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgY29uc3QgbmV4ID0gYXJyW3BpY2tdO1xyXG4vLyAgICAgICAgICAgICBpZihuZXguc2NvcmUgPCBjdXIuc2NvcmUpe1xyXG4vLyAgICAgICAgICAgICAgICAgYXJyW3BpY2tdID0gY3VyO1xyXG4vLyAgICAgICAgICAgICAgICAgYXJyW251bV0gPSBuZXg7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFwaWZ5RGVjKHBpY2spO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgICAgIH0gZWxzZSBpZihuZXgxKXtcclxuLy8gICAgICAgICAgICAgaWYobmV4MS5zY29yZSA8IGN1ci5zY29yZSl7XHJcbi8vICAgICAgICAgICAgICAgICBhcnJbbjFdID0gY3VyO1xyXG4vLyAgICAgICAgICAgICAgICAgYXJyW251bV0gPSBuZXgxO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHBvcCgpe1xyXG4vLyAgICAgICAgIGlmKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gbnVsbDtcclxuLy8gICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmFycjtcclxuLy8gICAgICAgICBjb25zdCBub3cgPSBhcnJbMF07XHJcbi8vICAgICAgICAgY29uc3QgY3VyID0gYXJyLnBvcCgpO1xyXG4vLyAgICAgICAgIGlmKGFyci5sZW5ndGggIT09IDApIHtcclxuLy8gICAgICAgICAgICAgYXJyWzBdID0gY3VyO1xyXG4vLyAgICAgICAgICAgICB0aGlzLmhlYXBpZnlEZWMoKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmV0dXJuIG5vdy5kYXRhO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaXNFbXB0eSgpe1xyXG4vLyAgICAgICAgIGlmKHRoaXMuYXJyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gY29uc3QgbW92ZVN0YXJ0ID0gKGNpcmNsZTprYWthby5tYXBzLkNpcmNsZSwgc3RhcnRQb2ludCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvYWREYXRhLmxlbmd0aCkpID0+IHtcclxuLy8gICAgIGNvbnN0IGNvZGVzID0gZmluZFBhdGgoc3RhcnRQb2ludCk7XHJcbi8vICAgICBjb25zdCB3YXkgPSBjb2Rlc1swXTtcclxuLy8gICAgIGNvbnN0IEVORCA9IHdheVt3YXkubGVuZ3RoIC0gMV07XHJcbi8vICAgICBjb25zdCBoaXN0b3J5ID0gY29kZXNbMV07XHJcbi8vICAgICBjb25zdCBZOm51bWJlciA9IHJvYWREYXRhW3dheVswXV0ubGF0bG5nLmdldExhdCgpO1xyXG4vLyAgICAgY29uc3QgWDpudW1iZXIgPSByb2FkRGF0YVt3YXlbMF1dLmxhdGxuZy5nZXRMbmcoKTtcclxuLy8gICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IGtha2FvLm1hcHMuTGF0TG5nKFksIFgpO1xyXG4vLyAgICAgY2lyY2xlLnNldFBvc2l0aW9uKHBvc2l0aW9uKVxyXG4vLyAgICAgbGV0IGZyb20gPSByb2FkRGF0YVt3YXlbMF1dO1xyXG4vLyAgICAgbGV0IHRvID0gcm9hZERhdGFbd2F5WzFdXTtcclxuLy8gICAgIGNvbnN0IHNwZWVkID0gMTAwMDAwO1xyXG4vLyAgICAgbGV0IGkgPSAwO1xyXG4vLyAgICAgbGV0IGluZGV4ID0gMDtcclxuLy8gICAgIGNvbnN0IG1vdmluZyA9ICgpID0+IHtcclxuICAgICAgICBcclxuLy8gICAgICAgICBjb25zdCBwcmV4ID0gZnJvbS5sYXRsbmcuZ2V0TG5nKCk7XHJcbi8vICAgICAgICAgY29uc3QgcHJleSA9IGZyb20ubGF0bG5nLmdldExhdCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IG5leHggPSB0by5sYXRsbmcuZ2V0TG5nKCk7XHJcbi8vICAgICAgICAgY29uc3QgbmV4eSA9IHRvLmxhdGxuZy5nZXRMYXQoKTtcclxuLy8gICAgICAgICBjb25zdCBkaXN0ID0gKChuZXh4IC0gcHJleCkgKiogMiArIChuZXh5IC0gcHJleSkgKiogMikgKiogMC41ICogc3BlZWQ7XHJcblxyXG5cclxuLy8gICAgICAgICBjb25zdCBYID0gKGkgKiBuZXh4ICsgKGRpc3QgLSBpKSAqIHByZXgpIC8gZGlzdDtcclxuLy8gICAgICAgICBjb25zdCBZID0gKGkgKiBuZXh5ICsgKGRpc3QgLSBpKSAqIHByZXkpIC8gZGlzdDtcclxuLy8gICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBrYWthby5tYXBzLkxhdExuZyhZLCBYKTtcclxuLy8gICAgICAgICBjaXJjbGUuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG5cclxuLy8gICAgICAgICBpKys7XHJcblxyXG4vLyAgICAgICAgIGlmKGkgPj0gZGlzdCl7XHJcbi8vICAgICAgICAgICAgIGkgPSAwO1xyXG4vLyAgICAgICAgICAgICBpbmRleCsrO1xyXG4vLyAgICAgICAgICAgICBpZih3YXkubGVuZ3RoIC0gMSA9PT0gaW5kZXgpe1xyXG4vLyAgICAgICAgICAgICAgICAgbW92ZVN0YXJ0KGNpcmNsZSwgRU5EKTtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBmcm9tID0gcm9hZERhdGFbd2F5W2luZGV4XV07XHJcbi8vICAgICAgICAgICAgIHRvID0gcm9hZERhdGFbd2F5W2luZGV4ICsgMV1dO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobW92aW5nKTtcclxuLy8gICAgIH07XHJcbi8vICAgICBtb3ZpbmcoKTtcclxuLy8gICAgIHJldHVybiB7IFgsIFkgfTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgZmluZFBhdGggPSAoc3RhcnRQb2ludDpudW1iZXIpID0+IHtcclxuLy8gICAgIGNvbnN0IHIgPSBzdGFydFBvaW50O1xyXG4vLyAgICAgbGV0IGNob29zZTpudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb2FkRGF0YS5sZW5ndGgpO1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBmaW5kV2F5ID0gKHN0YXJ0OkRhdGEgLCBnb2FsOiBudW1iZXIpOltudW1iZXJbXSwgRGF0YVtdXSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgaGlzdG9yeTpEYXRhW10gPSBbXTtcclxuLy8gICAgICAgICBjb25zdCBoZWFwID0gbmV3IEhlYXA8RGF0YT4oKTtcclxuLy8gICAgICAgICBsZXQgZGF0YSA9IHN0YXJ0O1xyXG4vLyAgICAgICAgIGhpc3RvcnlbZGF0YS5kYXRhXSA9IGRhdGE7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgd2hpbGUoZ29hbCAhPSBkYXRhLmRhdGEpe1xyXG4vLyAgICAgICAgICAgICBsZXQgbiA9IGRhdGEuZGF0YTtcclxuLy8gICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJvYWREYXRhW25dLnJvYWQubGVuZ3RoOyBpKyspe1xyXG4vLyAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGhpc3Rvcnlbcm9hZERhdGFbbl0ucm9hZFtpXV0gPT09ICd1bmRlZmluZWQnKXtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgcHl0aGEgPSBNYXRoLnNxcnQoTWF0aC5wb3cocm9hZERhdGFbbl0ubGF0bG5nLmdldExhdCgpIC0gcm9hZERhdGFbcm9hZERhdGFbbl0ucm9hZFtpXV0ubGF0bG5nLmdldExhdCgpICwgMikgKyBNYXRoLnBvdyhyb2FkRGF0YVtuXS5sYXRsbmcuZ2V0TG5nKCkgLSByb2FkRGF0YVtyb2FkRGF0YVtuXS5yb2FkW2ldXS5sYXRsbmcuZ2V0TG5nKCkgLCAyKSlcclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWFwLnB1c2goe2RhdGE6cm9hZERhdGFbbl0ucm9hZFtpXSwgcHJlOm4sIHNjb3JlOnB5dGhhICsgZGF0YS5zY29yZX0sIHB5dGhhICsgZGF0YS5zY29yZSlcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGlzdG9yeS5sZW5ndGg7IGkrKyl7XHJcbi8vICAgICAgICAgICAgICAgICBkYXRhID0gaGVhcC5wb3AoKTtcclxuLy8gICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBoaXN0b3J5W2RhdGEuZGF0YV0gPT09ICd1bmRlZmluZWQnKXtcclxuLy8gICAgICAgICAgICAgICAgICAgICBoaXN0b3J5W2RhdGEuZGF0YV0gPSBkYXRhO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGxldCBvYmogPSBoaXN0b3J5W2dvYWxdO1xyXG4vLyAgICAgICAgIGNvbnN0IGxpc3Q6bnVtYmVyW10gPSBbXTtcclxuLy8gICAgICAgICBjb25zdCB0b3RhbCA9IG9iai5zY29yZTtcclxuLy8gICAgICAgICB3aGlsZShvYmoucHJlICE9PSAtMSl7XHJcbi8vICAgICAgICAgICAgIGxldCBwcmUgPSBvYmoucHJlO1xyXG4vLyAgICAgICAgICAgICBsaXN0LnB1c2gob2JqLmRhdGEpO1xyXG4vLyAgICAgICAgICAgICBvYmogPSBoaXN0b3J5W3ByZV07XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGxpc3QucmV2ZXJzZSgpXHJcbi8vICAgICAgICAgbGlzdC51bnNoaWZ0KHIpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbi8vICAgICAgICAgcmV0dXJuIFtsaXN0LCBoaXN0b3J5XTtcclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyAgICAgd2hpbGUoY2hvb3NlID09PSByKXtcclxuLy8gICAgICAgICBjaG9vc2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb2FkRGF0YS5sZW5ndGgpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIGZpbmRXYXkoe2RhdGE6ciwgc2NvcmU6MCwgcHJlOi0xfSwgY2hvb3NlKVxyXG4vLyB9O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KG1hcDoga2FrYW8ubWFwcy5NYXApIHtcclxuICAgIGxldCBsb2M6bnVtYmVyID0gbnVsbDtcclxuICAgIGxldCByYW5kTG9jYXRpb246a2FrYW8ubWFwcy5MYXRMbmcgPSBudWxsO1xyXG4gICAgbG9jID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9pbnREYXRhLmxlbmd0aCk7XHJcbiAgICByYW5kTG9jYXRpb24gPSBwb2ludERhdGFbbG9jXS5sYXRsbmc7XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBrYWthby5tYXBzLkNpcmNsZSh7XHJcbiAgICAgICAgY2VudGVyIDogcmFuZExvY2F0aW9uLCAvLyDsm5DsnZgg7KSR7Ius7KKM7ZGcXHJcbiAgICAgICAgcmFkaXVzOiAyMCwgLy8g66+47YSwIOuLqOychOydmCDsm5DsnZgg67CY7KeA66aEXHJcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogMCwgLy8g7ISg7J2YIOu2iO2IrOuqheuPhCAx7JeQ7IScIDAg7IKs7J207J2YIOqwkuydtOupsCAw7JeQIOqwgOq5jOyauOyImOuhnSDtiKzrqoVcclxuICAgICAgICBmaWxsQ29sb3I6ICdyZWQnLCAvLyDssYTsmrDquLAg7IOJ6rmUXHJcbiAgICAgICAgZmlsbE9wYWNpdHk6IDEgIC8vIOyxhOyasOq4sCDrtojtiKzrqoXrj4RcclxuICAgIH0pO1xyXG5cclxuICAgIGNpcmNsZS5zZXRNYXAobWFwKVxyXG4gICAgbGV0IG1vdmVTdGFydDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgcmVwb3NpdGlvbjprYWthby5tYXBzLkxhdExuZyA9IG51bGw7XHJcbiAgICBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgIGlmKG1vdmVTdGFydCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGxldCByYW5kVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb2ludERhdGFbbG9jXS5saW5lcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgY2hvb3NlID0gcG9pbnREYXRhW2xvY10ubGluZXNbcmFuZFZhbHVlXTtcclxuICAgICAgICAgICAgbGV0IGxpbmVQb2ludHggPSBsaW5lRGF0YVtjaG9vc2VdLmxpbmVQYXRoWzBdLmdldExhdCgpO1xyXG4gICAgICAgICAgICBsZXQgbGluZVBvaW50eSA9IGxpbmVEYXRhW2Nob29zZV0ubGluZVBhdGhbMF0uZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgIGxldCBjaXJYID0gY2lyY2xlLmdldFBvc2l0aW9uKCkuZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgIGxldCBjaXJZID0gY2lyY2xlLmdldFBvc2l0aW9uKCkuZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgIGlmKE1hdGguc3FydChNYXRoLnBvdyhjaXJYIC0gbGluZVBvaW50eCwgMikgKyBNYXRoLnBvdyhjaXJZIC0gbGluZVBvaW50eSwgMikpIDwgMC4wMDAyKXtcclxuICAgICAgICAgICAgICAgIGxpbmVEYXRhW2Nob29zZV0ubGluZVBhdGgubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbW92aW5nKGNpcmNsZSwgcmVwb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9LCA2MClcclxufVxyXG5cclxuZnVuY3Rpb24gbW92aW5nKGNpcmNsZTprYWthby5tYXBzLkNpcmNsZSwgcmVwb3NpdGlvbjprYWthby5tYXBzLkxhdExuZyl7XHJcbiAgICBjaXJjbGUuc2V0UG9zaXRpb24ocmVwb3NpdGlvbilcclxufVxyXG4vLyB0eXBlIERhdGEgPSB7ZGF0YTpudW1iZXIsIHNjb3JlOm51bWJlciwgcHJlOm51bWJlcn07XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==