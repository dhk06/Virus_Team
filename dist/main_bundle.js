"use strict";
(self["webpackChunksocket_test_front"] = self["webpackChunksocket_test_front"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0;\r\n}\r\n#map{\r\n    width: 100vw;\r\n    height: calc(100vh - 90px);\r\n}\r\n#resultDiv{\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0px;\r\n\r\n    background-color: rgb(0, 0, 0, 0.75);\r\n    color: white;\r\n    width: calc(100vw - 10px);\r\n    height: 30px;\r\n    font-size: 15px;\r\n    text-align: right;\r\n\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    z-index: 101;\r\n}\r\n#underbar{\r\n    width: 100vw;\r\n    height: 125px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 100;\r\n}\r\n#setUnderBar{\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 90px;\r\n    background: linear-gradient( to right, #1e201f 10%, gray 50%, #1e201f);\r\n    position: inherit;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    z-index: 105;\r\n    bottom: 0;\r\n}\r\n#setUnderBar > div{\r\n    display: flex;\r\n}\r\n#peo1{\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: green;\r\n    border-radius: 50%;\r\n}\r\n.mylocate{\r\n    display: flex;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    /* color: white; */\r\n\r\n    position: absolute;\r\n    z-index: 102;\r\n    left: 50%;\r\n    /* transition: all 0.1s; */\r\n    transform: translate(-50%, -20%);\r\n    /* filter: drop-shadow(0 0 3px black); */\r\n    \r\n    user-select: none;\r\n    top: calc(50% - 100px);\r\n}\r\n.Warning_alert{\r\n    display: none;\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 1;\r\n\r\n    filter: opacity(0%);\r\n\r\n    transition: all 0s;\r\n}\r\n\r\n/* 플레이어 위치 화살표 애니메이션 */\r\n/* @keyframes move_arrow{ \r\n    from {transform: translate(-50%, 0%);}\r\n    to {transform: translate(-50%, -20%);}\r\n} */\r\n\r\n\r\n/* 사이트 메인 메뉴 애니메이션 */\r\n.mainMenu{\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border: 2px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 50%;\r\n    background: #323235;\r\n    \r\n    box-sizing: border-box;\r\n    z-index: 150;\r\n}\r\n.mainMenu:before, .mainMenu:after{\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 30px;\r\n    height: 4px;\r\n    border-radius: 2px;\r\n    background: white;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    -webkit-transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n}\r\n.mainMenu:before{\r\n    margin-top: -8px;\r\n}\r\n.mainMenu:after{\r\n    margin-top: 4px;\r\n}\r\n.mainMenu.active:before{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n}\r\n.mainMenu.active:after{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n}\r\n\r\n/* 사이드 메뉴 내용 */\r\n#mainMenu_contents{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background: #323235;\r\n    padding-top: 50px;\r\n    align-items: center;\r\n\r\n    box-sizing: border-box;\r\n    overflow-y: hidden;\r\n    z-index: 149;\r\n\r\n    transition: all 0.2s;\r\n}\r\n#mainMenu_contents div{\r\n    display: flex;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    margin: 5px 0;\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #424249;\r\n    box-shadow: 0px 0px 1px 1.5px #56565f;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}#mainMenu_contents div:hover{\r\n    background-color: #3f3f46;\r\n}#mainMenu_contents div:active{\r\n    background-color: #3f3f46;\r\n    box-shadow: none;\r\n}\r\n\r\n.Peopleshow{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 110px;\r\n    height: 22px;\r\n\r\n    background-color: #323235;\r\n    border-radius: 5px;\r\n\r\n    margin: 0 5px;\r\n}.Peopleshow div{\r\n    width: calc(100% - 30px);\r\n    height: 20px;\r\n\r\n    font-size: 15px;\r\n    box-sizing: border-box;\r\n}\r\n#S_showbox{\r\n    color: white;\r\n}#I_showbox{\r\n    color: red;\r\n}#R_showbox{\r\n    color: green;\r\n}#D_showbox{\r\n    color: white;\r\n}\r\n\r\n#timeshow{\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    background-color: #323235;\r\n    color: white;\r\n    border-radius: 5px;\r\n    border: 1px solid #4b4b52;\r\n}\r\n#timeset{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    text-align: center;\r\n\r\n    z-index: 100;\r\n}\r\n#timeSpeed{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n\r\n    word-spacing: -10px;\r\n    line-height: 21px;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n#virus_infection{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    border-radius: 5px;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}#virus_infection:active{\r\n    background-color: #323235;\r\n}\r\n\r\n#timebox{\r\n    position: relative;\r\n    display: flex;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n#timeShadow{\r\n    position: absolute;\r\n    z-index: 101;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0 0 5px black inset;\r\n    background-color: transparent;\r\n}\r\n#world_name{\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    margin: 0 50px;\r\n    text-align: center;\r\n    padding: 2px 0;\r\n    font-size: 15px;\r\n    background-color: #1e201f;\r\n    color: white;\r\n    border-radius: 5px;\r\n\r\n    box-sizing: border-box;\r\n}\r\n#Square{\r\n    width: 0px;\r\n    height: 25px;\r\n    background-color: #c9fe71;\r\n}#clock{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    width: 100px;\r\n    height: 25px;\r\n\r\n    color: rgb(180, 180, 180);\r\n    background-color: transparent;\r\n\r\n    font-size: 15px;\r\n    text-align: center;\r\n    line-height: 25px;\r\n}\r\n\r\n#P_inf{\r\n    display: none;\r\n    filter: opacity(0%);\r\n\r\n    width: 250px;\r\n    height: 250px;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    z-index: 1000;\r\n\r\n    text-align: right;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    color: white;\r\n\r\n    text-shadow: 0px 0px 10px black, 0px 0px 10px black, 0px 0px 10px black, 0px 0px 2px black;\r\n\r\n    transition: all 0s;\r\n}\r\n.graphDiv{\r\n    background: white;\r\n    border: 3px solid black;\r\n}\r\n#barDiv{\r\n    display: none;\r\n\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}#lineDiv{\r\n    display: none;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}\r\n\r\n.area{\r\n    position: absolute;\r\n    background: #fff;\r\n    border: 1px solid #888;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    top: -5px;\r\n    left: 15px;\r\n    padding:2px;\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n}\r\n.hospitalBox{\r\n    width: 170px;\r\n    height: 70px;\r\n    font-size: 13px;\r\n\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n\r\n    padding: 5px 10px;\r\n    box-sizing: border-box;\r\n}\r\n#hospitalName{\r\n    font-weight: bolder;\r\n    margin-bottom: 2px;\r\n}\r\n#hospitalContents{\r\n    margin-left: 2px;\r\n}\r\n\r\n.part{\r\n    width: 100%;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n}\r\n#part1{\r\n    height: 60%;\r\n    justify-content: center;\r\n}\r\n#part2{\r\n    position: inherit;\r\n    height: 40%;\r\n    padding: 0px 50px;\r\n    align-items: center;\r\n}\r\n.policy{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 55px;\r\n    height: 35px;\r\n    background-color: #1e201f;\r\n\r\n    margin: 0 10px;\r\n    border-radius: 5px;\r\n    font-size: 22px;\r\n\r\n    user-select: none;\r\n}\r\n.pol_input input[type=\"checkbox\"] {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip:rect(0,0,0,0);\r\n    border: 0;\r\n}\r\n.pol_input input[type=\"checkbox\"] + label {\r\n    display: inline-block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    margin: 0;\r\n}\r\n#map{\r\n    width: 100vw;\r\n    height: calc(100vh - 90px);\r\n}\r\n#resultDiv{\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0px;\r\n\r\n    background-color: rgb(0, 0, 0, 0.75);\r\n    color: white;\r\n    width: calc(100vw - 10px);\r\n    height: 30px;\r\n    font-size: 15px;\r\n    text-align: right;\r\n\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    z-index: 101;\r\n}\r\n#underbar{\r\n    width: 100vw;\r\n    height: 125px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 100;\r\n}\r\n#setUnderBar{\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 90px;\r\n    background: linear-gradient( to right, #1e201f 10%, gray 50%, #1e201f);\r\n    position: inherit;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    z-index: 105;\r\n    bottom: 0;\r\n}\r\n#setUnderBar > div{\r\n    display: flex;\r\n}\r\n#peo1{\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: green;\r\n    border-radius: 50%;\r\n}\r\n.mylocate{\r\n    display: flex;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    /* color: white; */\r\n\r\n    position: absolute;\r\n    z-index: 102;\r\n    left: 50%;\r\n    /* transition: all 0.1s; */\r\n    transform: translate(-50%, -20%);\r\n    /* filter: drop-shadow(0 0 3px black); */\r\n    \r\n    user-select: none;\r\n    top: calc(50% - 100px);\r\n}\r\n.Warning_alert{\r\n    display: none;\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 1;\r\n\r\n    filter: opacity(0%);\r\n\r\n    transition: all 0s;\r\n}\r\n\r\n/* 플레이어 위치 화살표 애니메이션 */\r\n/* @keyframes move_arrow{ \r\n    from {transform: translate(-50%, 0%);}\r\n    to {transform: translate(-50%, -20%);}\r\n} */\r\n\r\n\r\n/* 사이트 메인 메뉴 애니메이션 */\r\n.mainMenu{\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border: 2px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 50%;\r\n    background: #323235;\r\n    \r\n    box-sizing: border-box;\r\n    z-index: 150;\r\n}\r\n.mainMenu:before, .mainMenu:after{\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 30px;\r\n    height: 4px;\r\n    border-radius: 2px;\r\n    background: white;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    -webkit-transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\r\n}\r\n.mainMenu:before{\r\n    margin-top: -8px;\r\n}\r\n.mainMenu:after{\r\n    margin-top: 4px;\r\n}\r\n.mainMenu.active:before{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(45deg) translateZ(0);\r\n}\r\n.mainMenu.active:after{\r\n    margin-top: -2px;\r\n    -webkit-transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n    transform: translateX(-50%) rotate(-45deg) translateZ(0);\r\n}\r\n\r\n/* 사이드 메뉴 내용 */\r\n#mainMenu_contents{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    width: 50px; \r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background: #323235;\r\n    padding-top: 50px;\r\n    align-items: center;\r\n\r\n    box-sizing: border-box;\r\n    overflow-y: hidden;\r\n    z-index: 149;\r\n\r\n    transition: all 0.2s;\r\n}\r\n#mainMenu_contents div{\r\n    display: flex;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    margin: 5px 0;\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #424249;\r\n    box-shadow: 0px 0px 1px 1.5px #56565f;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}#mainMenu_contents div:hover{\r\n    background-color: #3f3f46;\r\n}#mainMenu_contents div:active{\r\n    background-color: #3f3f46;\r\n    box-shadow: none;\r\n}\r\n\r\n.Peopleshow{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 110px;\r\n    height: 22px;\r\n\r\n    background-color: #323235;\r\n    border-radius: 5px;\r\n\r\n    margin: 0 5px;\r\n}.Peopleshow div{\r\n    width: calc(100% - 30px);\r\n    height: 20px;\r\n\r\n    font-size: 15px;\r\n    box-sizing: border-box;\r\n}\r\n#S_showbox{\r\n    color: white;\r\n}#I_showbox{\r\n    color: red;\r\n}#R_showbox{\r\n    color: green;\r\n}#D_showbox{\r\n    color: white;\r\n}\r\n\r\n#timeshow{\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    background-color: #323235;\r\n    color: white;\r\n    border-radius: 5px;\r\n    border: 1px solid #4b4b52;\r\n}\r\n#timeset{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    text-align: center;\r\n\r\n    z-index: 100;\r\n}\r\n#timeSpeed{\r\n    width: 25px;\r\n    height: 100%;\r\n    background-color: #1e201f;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n\r\n    word-spacing: -10px;\r\n    line-height: 21px;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n#virus_infection{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    border-radius: 5px;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n}#virus_infection:active{\r\n    background-color: #323235;\r\n}\r\n\r\n#timebox{\r\n    position: relative;\r\n    display: flex;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n#timeShadow{\r\n    position: absolute;\r\n    z-index: 101;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0 0 5px black inset;\r\n    background-color: transparent;\r\n}\r\n#world_name{\r\n    position: relative;\r\n\r\n    width: 240px;\r\n    height: 25px;\r\n    margin: 0 50px;\r\n    text-align: center;\r\n    padding: 2px 0;\r\n    font-size: 15px;\r\n    background-color: #1e201f;\r\n    color: white;\r\n    border-radius: 5px;\r\n\r\n    box-sizing: border-box;\r\n}\r\n#Square{\r\n    width: 0px;\r\n    height: 25px;\r\n    background-color: #c9fe71;\r\n}#clock{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    width: 100px;\r\n    height: 25px;\r\n\r\n    color: rgb(180, 180, 180);\r\n    background-color: transparent;\r\n\r\n    font-size: 15px;\r\n    text-align: center;\r\n    line-height: 25px;\r\n}\r\n\r\n#P_inf{\r\n    display: none;\r\n    filter: opacity(0%);\r\n\r\n    width: 250px;\r\n    height: 250px;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    z-index: 1000;\r\n\r\n    text-align: right;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    color: white;\r\n\r\n    text-shadow: 0px 0px 10px black, 0px 0px 10px black, 0px 0px 10px black, 0px 0px 2px black;\r\n\r\n    transition: all 0s;\r\n}\r\n.graphDiv{\r\n    background: white;\r\n    border: 3px solid black;\r\n}\r\n#barDiv{\r\n    display: none;\r\n\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}#lineDiv{\r\n    display: none;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 80px;\r\n    z-index: 150;\r\n}\r\n\r\n.area{\r\n    position: absolute;\r\n    background: #fff;\r\n    border: 1px solid #888;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    top: -5px;\r\n    left: 15px;\r\n    padding:2px;\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n}\r\n.hospitalBox{\r\n    width: 170px;\r\n    height: 70px;\r\n    font-size: 13px;\r\n\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n\r\n    padding: 5px 10px;\r\n    box-sizing: border-box;\r\n}\r\n#hospitalName{\r\n    font-weight: bolder;\r\n    margin-bottom: 2px;\r\n}\r\n#hospitalContents{\r\n    margin-left: 2px;\r\n}\r\n\r\n.part{\r\n    width: 100%;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n}\r\n#part1{\r\n    height: 60%;\r\n    justify-content: center;\r\n}\r\n#part2{\r\n    position: inherit;\r\n    height: 40%;\r\n    padding: 0px 50px;\r\n    align-items: center;\r\n}\r\n.policy{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 55px;\r\n    height: 35px;\r\n    background-color: #1e201f;\r\n\r\n    margin: 0 10px;\r\n    border-radius: 5px;\r\n    font-size: 22px;\r\n\r\n    user-select: none;\r\n}\r\n.pol_input input[type=\"checkbox\"] {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip:rect(0,0,0,0);\r\n    border: 0;\r\n}\r\n.pol_input input[type=\"checkbox\"] + label {\r\n    display: inline-block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/Death.ts":
/*!**********************!*\
  !*** ./src/Death.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    // polygon.setMap(map)
}


/***/ }),

/***/ "./src/barGraph.ts":
/*!*************************!*\
  !*** ./src/barGraph.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   "Warning_alert": () => (/* binding */ Warning_alert),
/* harmony export */   "virus_infection": () => (/* binding */ virus_infection),
/* harmony export */   "P_inf": () => (/* binding */ P_inf),
/* harmony export */   "Square": () => (/* binding */ Square),
/* harmony export */   "clock": () => (/* binding */ clock),
/* harmony export */   "barDiv": () => (/* binding */ barDiv),
/* harmony export */   "barGraph": () => (/* binding */ barGraph),
/* harmony export */   "barGraph_btn": () => (/* binding */ barGraph_btn),
/* harmony export */   "lineDiv": () => (/* binding */ lineDiv),
/* harmony export */   "lineGraph": () => (/* binding */ lineGraph),
/* harmony export */   "lineGraph_btn": () => (/* binding */ lineGraph_btn),
/* harmony export */   "save_btn": () => (/* binding */ save_btn),
/* harmony export */   "pol_mask": () => (/* binding */ pol_mask),
/* harmony export */   "pol_Isolation": () => (/* binding */ pol_Isolation),
/* harmony export */   "pol_prhbtOFgthr": () => (/* binding */ pol_prhbtOFgthr)
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
var Warning_alert = document.querySelector('.Waring_alert');
var virus_infection = document.querySelector('#virus_infection');
var P_inf = document.querySelector('#P_inf');
var Square = document.querySelector('#Square');
var clock = document.querySelector('#clock');
var barDiv = document.querySelector('#barDiv');
var barGraph = document.querySelector('#barGraph');
var barGraph_btn = document.querySelector('#barGraph_btn');
var lineDiv = document.querySelector('#lineDiv');
var lineGraph = document.querySelector('#lineGraph');
var lineGraph_btn = document.querySelector('#lineGraph_btn');
var save_btn = document.querySelector('#save_btn');
var pol_mask = document.querySelector('#pol_mask');
var pol_Isolation = document.querySelector('#pol_Isolation');
var pol_prhbtOFgthr = document.querySelector('#pol_prhbtOFgthr');


/***/ }),

/***/ "./src/hospital_data.ts":
/*!******************************!*\
  !*** ./src/hospital_data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hospital_data": () => (/* binding */ hospital_data),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
var hospital_data = [
    {
        name: 'hospital_1',
        path: [
            new kakao.maps.LatLng(37.322605335572995, 126.8297779763478),
            new kakao.maps.LatLng(37.32134378898662, 126.82970748786231),
            new kakao.maps.LatLng(37.3212252956456, 126.83190776595863),
            new kakao.maps.LatLng(37.3225319245432, 126.83200075535811),
        ],
        entrance: 614,
        enteredPeople: 0
    }, {
        name: 'hospital_2',
        path: [
            new kakao.maps.LatLng(37.3320780395757, 126.80809749140077),
            new kakao.maps.LatLng(37.33149439694833, 126.80935145979302),
            new kakao.maps.LatLng(37.32858110188657, 126.80751965906758),
            new kakao.maps.LatLng(37.32945262893015, 126.80600546922433),
        ],
        entrance: 661,
        enteredPeople: 0
    }, {
        name: 'hospital_3',
        path: [
            new kakao.maps.LatLng(37.30809331839797, 126.85629083850739),
            new kakao.maps.LatLng(37.309717922020695, 126.85856638533957),
            new kakao.maps.LatLng(37.31184164022694, 126.8563062655128),
            new kakao.maps.LatLng(37.31036104750009, 126.85394018121707),
        ],
        entrance: 232,
        enteredPeople: 0
    }, {
        name: 'hospital_4',
        path: [
            new kakao.maps.LatLng(37.31316362119696, 126.81548944520326),
            new kakao.maps.LatLng(37.310712440755914, 126.81525290402881),
            new kakao.maps.LatLng(37.31062508055614, 126.81701851913964),
            new kakao.maps.LatLng(37.31308067569203, 126.81719870226239),
        ],
        entrance: 73,
        enteredPeople: 0
    }, {
        name: 'hospital_5',
        path: [
            new kakao.maps.LatLng(37.327944556022814, 126.85021657325693),
            new kakao.maps.LatLng(37.327812053741944, 126.85232677488104),
            new kakao.maps.LatLng(37.33133547169189, 126.85263582005217),
            new kakao.maps.LatLng(37.33132554565155, 126.85190240416055),
            new kakao.maps.LatLng(37.32951256097977, 126.85038271077869)
        ],
        entrance: 290,
        enteredPeople: 0
    }, {
        name: 'hospital_6',
        path: [
            new kakao.maps.LatLng(37.308993772802275, 126.7846368076777),
            new kakao.maps.LatLng(37.30781185536328, 126.7887686931239),
            new kakao.maps.LatLng(37.30989500050137, 126.7897555411914),
            new kakao.maps.LatLng(37.31095951130255, 126.78545468186026),
        ],
        entrance: 516,
        enteredPeople: 0
    }, {
        name: 'hospital_7',
        path: [
            new kakao.maps.LatLng(37.33115749882084, 126.7837272883557),
            new kakao.maps.LatLng(37.33266400158438, 126.78470466103488),
            new kakao.maps.LatLng(37.33366860651093, 126.78221932315),
            new kakao.maps.LatLng(37.3324414013902, 126.78124117736604),
        ],
        entrance: 779,
        enteredPeople: 0
    }, {
        name: 'hospital_8',
        path: [
            new kakao.maps.LatLng(37.30268343328614, 126.83612803682246),
            new kakao.maps.LatLng(37.30077926658866, 126.83723187586419),
            new kakao.maps.LatLng(37.30009627145082, 126.83527081034183),
            new kakao.maps.LatLng(37.30209050743626, 126.8341554549218),
        ],
        entrance: 142,
        enteredPeople: 0
    }, {
        name: 'hospital_9',
        path: [
            new kakao.maps.LatLng(37.29660710662468, 126.87384501728393),
            new kakao.maps.LatLng(37.2964437448464, 126.8770088841584),
            new kakao.maps.LatLng(37.29775476840876, 126.87702366749589),
            new kakao.maps.LatLng(37.29778297522266, 126.87385997142779),
        ],
        entrance: 128,
        enteredPeople: 0
    }, {
        name: 'hospital_10',
        path: [
            new kakao.maps.LatLng(37.33933853702548, 126.82739861999775),
            new kakao.maps.LatLng(37.33671838607288, 126.82866847093966),
            new kakao.maps.LatLng(37.336183655909025, 126.82652566036933),
            new kakao.maps.LatLng(37.338804216923855, 126.82554914625105),
        ],
        entrance: 727,
        enteredPeople: 0
    }, {
        name: 'hospital_11',
        path: [
            new kakao.maps.LatLng(37.31192576136485, 126.83773804207023),
            new kakao.maps.LatLng(37.310889459321416, 126.83765566499726),
            new kakao.maps.LatLng(37.31069904742236, 126.84008702959594),
            new kakao.maps.LatLng(37.31183889792004, 126.84011845746463),
        ],
        entrance: 79,
        enteredPeople: 0
    }, {
        name: 'hospital_12',
        path: [
            new kakao.maps.LatLng(37.30173956960084, 126.79952346459272),
            new kakao.maps.LatLng(37.30133944724713, 126.79737021288997),
            new kakao.maps.LatLng(37.29866488791789, 126.79825712876857),
            new kakao.maps.LatLng(37.29914585860836, 126.80027474976013),
        ],
        entrance: 79,
        enteredPeople: 0
    }, {
        name: 'hospital_13',
        path: [
            new kakao.maps.LatLng(37.34604590514482, 126.80650450737329),
            new kakao.maps.LatLng(37.34450633215927, 126.80723073526708),
            new kakao.maps.LatLng(37.34492320330916, 126.80870808938879),
            new kakao.maps.LatLng(37.34638167480294, 126.80797080824857),
        ],
        entrance: 768,
        enteredPeople: 0
    }
];
function init(map) {
    for (var _i = 0, hospital_data_1 = hospital_data; _i < hospital_data_1.length; _i++) {
        var i = hospital_data_1[_i];
        displayHospital(i);
    }
    function displayHospital(arr) {
        var hospital = new kakao.maps.Polygon({
            path: arr.path,
            strokeWeight: 2,
            strokeColor: 'red',
            strokeOpacity: 0.8,
            fillColor: 'white',
            fillOpacity: 0.7
        });
        var customOverlay = new kakao.maps.CustomOverlay({
            position: null,
            content: arr.name
        });
        var infowindow = new kakao.maps.InfoWindow({
            position: null,
            content: "\n            <div class=\"box\">\n                <div id=\"name\">hospital_1</div>\n                <div id=\"contents\">\n                    <div>Number of People : 130</div>\n                    <div>Entrance Numbers : 620</div>\n                </div>\n            </div>",
            removable: true
        });
        kakao.maps.event.addListener(hospital, 'mouseover', function (mouseEvent) {
            customOverlay.setContent("<div class=\"area\"> " + arr.name + " </div>");
            customOverlay.setPosition(mouseEvent.latLng);
            customOverlay.setMap(map);
        });
        kakao.maps.event.addListener(hospital, 'mousemove', function (mouseEvent) {
            customOverlay.setPosition(mouseEvent.latLng);
        });
        kakao.maps.event.addListener(hospital, 'mouseout', function () {
            customOverlay.setMap(null);
        });
        // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다 
        kakao.maps.event.addListener(hospital, 'click', function (mouseEvent) {
            customOverlay.setMap(null);
            var content = "<div class=\"hospitalBox\">\n                                <div id=\"hospitalName\">" + arr.name + "</div>\n                                <div id=\"hospitalContents\">\n                                    <div>Number of People : " + arr.enteredPeople + "</div>\n                                    <div>Entrance Numbers : " + arr.entrance + "</div>\n                                </div>\n                            </div>";
            infowindow.setContent(content);
            infowindow.setPosition(mouseEvent.latLng);
            infowindow.open(map);
        });
        hospital.setMap(map);
    }
}


/***/ }),

/***/ "./src/infec_range.ts":
/*!****************************!*\
  !*** ./src/infec_range.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
                if (_variable__WEBPACK_IMPORTED_MODULE_1__.peoples[i].infection == true && _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j].infection == false) {
                    var p1x = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[i].position.x;
                    var p1y = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[i].position.y;
                    var p2x = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j].position.x;
                    var p2y = _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j].position.y;
                    var result = Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2));
                    if (result < 0.001) {
                        per(_variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j].fatalityRate, _variable__WEBPACK_IMPORTED_MODULE_1__.peoples[j]);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/main.ts");




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
    var worldData = [];
    var worldNumber = 1;
    _constants__WEBPACK_IMPORTED_MODULE_2__.save_btn.onclick = function () {
        worldData[worldNumber] = {
            wldname: _main__WEBPACK_IMPORTED_MODULE_3__.setting.worldname,
            population: _main__WEBPACK_IMPORTED_MODULE_3__.setting.np,
            lineGraph: lineC
        };
        console.log(worldData[worldNumber]);
        worldNumber++;
    };
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "world_name": () => (/* binding */ world_name),
/* harmony export */   "setting": () => (/* binding */ setting)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
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
/* harmony import */ var _hospital_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hospital_data */ "./src/hospital_data.ts");
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













// import { init as 임시사람 } from './임시사람'

var world_name = document.querySelector('#world_name');
var setting = {
    worldname: null,
    np: null,
    infecP: null,
    hospitalSystem: null
};
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var map;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // console.log(NumOfPeople.wholePer, world_name.innerHTML, NumOfPeople.Infectious, setting.hospitalSystem)
                    setting = JSON.parse(new URLSearchParams(location.search).get('json'));
                    console.log(setting.worldname, setting.np, setting.infecP, setting.hospitalSystem);
                    _constants__WEBPACK_IMPORTED_MODULE_13__.NumOfPeople.wholePer = setting.np;
                    world_name.innerHTML = setting.worldname;
                    _constants__WEBPACK_IMPORTED_MODULE_13__.NumOfPeople.Infectious = setting.infecP;
                    map = (0,_setting_map__WEBPACK_IMPORTED_MODULE_1__.init)().map;
                    (0,_ansanRange__WEBPACK_IMPORTED_MODULE_2__.init)(map);
                    (0,_hospital_data__WEBPACK_IMPORTED_MODULE_12__.init)(map);
                    return [4 /*yield*/, (0,_roadPoint__WEBPACK_IMPORTED_MODULE_11__.init)()];
                case 1:
                    _a.sent();
                    (0,_side_menu__WEBPACK_IMPORTED_MODULE_3__.init)();
                    (0,_moving_people__WEBPACK_IMPORTED_MODULE_4__.init)(map);
                    // 임시사람(map)
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

/***/ "./src/moving_people.ts":
/*!******************************!*\
  !*** ./src/moving_people.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "move2ClickedPlace_before": () => (/* binding */ move2ClickedPlace_before)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person */ "./src/person.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _output_nOp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output_nOp */ "./src/output_nOp.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/main.ts");





var currentPeople = null;
var setPeople = null;
var setPeoplePosition = null;
var infec_peo = false;
var map = null;
function init(_map) {
    map = _map;
    console.log(_main__WEBPACK_IMPORTED_MODULE_4__.setting.hospitalSystem);
    var _loop_1 = function (i) {
        var person = new _person__WEBPACK_IMPORTED_MODULE_1__.Person(map);
        _variable__WEBPACK_IMPORTED_MODULE_2__.peoples.push(person);
        kakao.maps.event.addListener(person.circle, 'click', function (mouseEvent) {
            currentPeople = person;
        });
    };
    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.wholePer; i++) {
        _loop_1(i);
    }
    for (var i = 0; i < _variable__WEBPACK_IMPORTED_MODULE_2__.peoples.length; i++) {
        var people = _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i];
        people.findmove();
        if (_main__WEBPACK_IMPORTED_MODULE_4__.setting.hospitalSystem) {
            people.checkedInfection();
            console.log('병원 활성화');
        }
    }
    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Infectious; i++) {
        var people = _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i];
        people.color = 'red';
        people.infection = true;
        people.circle.setOptions({ fillColor: 'red' });
    }
    (0,_output_nOp__WEBPACK_IMPORTED_MODULE_3__.numPshow)();
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
    };
    // step();
    _constants__WEBPACK_IMPORTED_MODULE_0__.virus_infection.addEventListener('click', function () {
        if (currentPeople != null && currentPeople.color == 'green') {
            console.log('change!');
            currentPeople.changeColor();
            _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Infectious++;
            _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.wholePer--;
        }
        else if (currentPeople == null) {
            console.log('currentPeople is null');
        }
    });
    _constants__WEBPACK_IMPORTED_MODULE_0__.pol_mask.addEventListener('click', function () {
        for (var i = 0; i < _variable__WEBPACK_IMPORTED_MODULE_2__.peoples.length; i++) {
            var people = _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i];
            people.WearAMast_toggle();
        }
    });
    // pol_Isolation.addEventListener('click', function(){
    //     for(let i = 0; i < peoples.length; i++){
    //         const people = peoples[i];
    //         people.hospital_toggle();
    //     }
    //     console.log('hospital');
    // })
}
function move2ClickedPlace_before(arrName, arriveLocation) {
    for (var i = 0; i < _variable__WEBPACK_IMPORTED_MODULE_2__.peoples.length; i++) {
        var people = _variable__WEBPACK_IMPORTED_MODULE_2__.peoples[i];
        if (people.per_click) {
            people.move2ClickedPlace(arrName, arriveLocation);
            break;
        }
    }
}
// function step(){
//     // 플레이 w,a,s,d
//     // const p = MOVE_PARAMS[moveOpts.key];
//     // if(p != null && currentPeople != null){
//     //     if(+moveOpts.d + 500 < +new Date()){
//     //         currentPeople.position.x += p.vy;
//     //         currentPeople.position.y += p.vx;
//     //         const currentPosition = new kakao.maps.LatLng(currentPeople.position.y, currentPeople.position.x)
//     //         currentPeople.circle.setPosition(currentPosition);
//     //         map.setCenter(currentPosition);
//     //     }
//     // }
//     requestAnimationFrame(step)
// }


/***/ }),

/***/ "./src/output_nOp.ts":
/*!***************************!*\
  !*** ./src/output_nOp.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_per_click": () => (/* binding */ _per_click),
/* harmony export */   "_per_arrive": () => (/* binding */ _per_arrive),
/* harmony export */   "Person": () => (/* binding */ Person)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _roadPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadPoint */ "./src/roadPoint.ts");
/* harmony import */ var _hospital_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hospital_data */ "./src/hospital_data.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/main.ts");






var _per_click = false;
var _per_arrive = false;
var Heap = /** @class */ (function () {
    function Heap() {
        this.arr = [];
    }
    Heap.prototype.push = function (data) {
        var arr = this.arr;
        if (arr.length === 0) {
            arr.push(data);
            return 0;
        }
        else {
            var index = this.find(arr, 0, arr.length - 1, data.score);
            this.arr.splice(index, 0, data);
        }
    };
    Heap.prototype.pop = function () {
        return this.arr.shift();
    };
    Heap.prototype.find = function (arr, left, right, score) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = -1; }
        if (right === -1) {
            right = arr.length - 1;
        }
        else if (right - left <= 1) {
            if (arr[right].score <= score)
                return right + 1;
            else if (arr[left].score <= score)
                return left + 1;
            else
                return 0;
        }
        var mid = Math.floor((left + right) / 2);
        if (arr[mid].score <= score)
            left = mid;
        else
            right = mid;
        return this.find(arr, left, right, score);
    };
    return Heap;
}());
// =======================================================================================================================================================================
// =======================================================================================================================================================================
var speed_ = 50000;
var Person = /** @class */ (function () {
    function Person(map) {
        var _this = this;
        var loc = null;
        var randLocation = null;
        loc = Math.floor(Math.random() * _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData.length);
        randLocation = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[loc].latlng;
        this.circle = new kakao.maps.Circle({
            center: randLocation,
            radius: 5,
            strokeColor: 'white',
            strokeWeight: 2,
            strokeOpacity: 0,
            fillColor: 'green',
            fillOpacity: 1, // 채우기 불투명도
        });
        kakao.maps.event.addListener(this.circle, 'click', function () {
            if (!_per_click) {
                _per_click = true;
                _this.per_click = true;
                _this.circle.setRadius(15);
            }
            _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.style.display = 'block';
            _constants__WEBPACK_IMPORTED_MODULE_0__.P_inf.innerHTML = "x: " + _this.position.x + "<br>y: " + _this.position.y + "<br>infection: " + _this.infection;
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
        document.addEventListener('keyup', function (e) {
            if (e.key == 'Escape' && _this.per_click == true) {
                _this.circle.setRadius(5);
                if (_this.per_arrive) {
                    _this.per_click = false;
                    _per_click = false;
                    _variable__WEBPACK_IMPORTED_MODULE_1__.moveOpts.check = false;
                    _this.findmove();
                }
                else {
                    var a_1 = setInterval(function () {
                        if (_this.per_arrive) {
                            clearInterval(a_1);
                            if (_this.hvToGoHospital) {
                                console.log('병원');
                            }
                            else {
                                console.log('remove');
                                _this.findmove();
                            }
                            _this.per_click = false;
                            _per_click = false;
                            _variable__WEBPACK_IMPORTED_MODULE_1__.moveOpts.check = false;
                            return;
                        }
                    }, 60);
                }
            }
        });
        this.circle.setMap(map);
        this.position = { x: randLocation.getLng(), y: randLocation.getLat() };
        this.color = 'green';
        this.infection = false;
        this.fatalityRate = 10;
        this.die = false;
        this.locNum = loc;
        this.per_click = false;
        this.per_arrive = false;
        this.lineNum = null;
        this.nexNum = null;
        this.mask = false;
        this.goToHospital_ = false;
        this.hvToGoHospital = false;
        this.nearestHospital = [];
    }
    Person.prototype.changeColor = function () {
        if (this.color == 'green') {
            this.circle.setOptions({ fillColor: 'red' });
            this.color = 'red';
            if (_main__WEBPACK_IMPORTED_MODULE_4__.setting.hospitalSystem) {
                this.hvToGoHospital = true;
            }
            this.infection = true;
        }
    };
    Person.prototype.WearAMast_toggle = function () {
        if (_constants__WEBPACK_IMPORTED_MODULE_0__.pol_mask.checked) {
            this.circle.setOptions({ strokeOpacity: 100 });
            this.fatalityRate = 3;
            this.mask = true;
        }
        else {
            this.circle.setOptions({ strokeOpacity: 0 });
            this.fatalityRate = 10;
            this.mask = false;
        }
    };
    // hospital_toggle(){
    //     if(this.goToHospital_){
    //         this.goToHospital_ = false;
    //         this.hvToGoHospital = false;
    //     }else{
    //         if(this.infection){
    //             this.hvToGoHospital = true;
    //         }
    //         this.checkedInfection();
    //         this.goToHospital_ = true;
    //     }
    // }
    Person.prototype.goToHospital = function (arriveLocation, arrivePoint) {
        this.move2ClickedPlace(arrivePoint, arriveLocation);
    };
    Person.prototype.checkedInfection = function () {
        var _this = this;
        var a = setInterval(function () {
            if (_this.per_click) {
                console.log(_this.per_arrive, _per_arrive);
            }
            if (_this.infection && _this.per_arrive && _per_arrive && !_this.per_click) {
                var per = function (n) {
                    var rand = Math.random();
                    var num = n / 100;
                    if (rand <= num) {
                        clearInterval(a);
                        for (var i = 0; i < _hospital_data__WEBPACK_IMPORTED_MODULE_3__.hospital_data.length; i++) {
                            var hospital_entrance = _hospital_data__WEBPACK_IMPORTED_MODULE_3__.hospital_data[i].entrance;
                            var goalx = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[hospital_entrance].latlng.getLat();
                            var goaly = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[hospital_entrance].latlng.getLng();
                            var nowX = _this.circle.getPosition().getLat();
                            var nowY = _this.circle.getPosition().getLng();
                            var lengthFromStartToFinish = Math.pow((Math.pow((nowX - goalx), 2) + Math.pow((nowY - goaly), 2)), 0.5);
                            _this.nearestHospital.push({ distance: lengthFromStartToFinish, entrance: hospital_entrance, hospitalNumber: i });
                        }
                        _this.nearestHospital.sort(function (a, b) {
                            return a.distance - b.distance;
                        });
                        // console.log(this.nearestHospital[0]);
                        if (_this.nexNum == _this.nearestHospital[0].entrance) {
                            _this.quarantineInHospital();
                        }
                        _this.goToHospital(_roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[_this.nearestHospital[0].entrance].latlng, _this.nearestHospital[0].entrance);
                        return;
                    }
                    else {
                        // console.log('nope');
                        _this.findmove();
                    }
                };
                per(50);
            }
        }, 60);
    };
    Person.prototype.quarantineInHospital = function () {
        var _this = this;
        this.circle.setOptions({ fillOpacity: 0 });
        // console.log(this.nearestHospital)
        _hospital_data__WEBPACK_IMPORTED_MODULE_3__.hospital_data[this.nearestHospital[0].hospitalNumber].enteredPeople++;
        var maxTime = 15;
        var minTime = 10;
        var quarantineTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
        console.log("\uD68C\uBCF5\uC2DC\uAC04: " + quarantineTime);
        var a = setInterval(function () {
            quarantineTime--;
            // console.log(quarantineTime)
            if (quarantineTime <= 0) {
                _this.circle.setOptions({ fillOpacity: 100 });
                _this.infection = false;
                _this.color = 'green';
                _this.circle.setOptions({ fillColor: 'green' });
                _this.fatalityRate = 1;
                _this.locNum = _this.nearestHospital[0].entrance;
                _this.goToHospital_ = false;
                _this.hvToGoHospital = false;
                // console.log(this.nearestHospital[0].entrance)
                _hospital_data__WEBPACK_IMPORTED_MODULE_3__.hospital_data[_this.nearestHospital[0].hospitalNumber].enteredPeople--;
                _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Recovered++;
                _constants__WEBPACK_IMPORTED_MODULE_0__.NumOfPeople.Infectious--;
                _this.findmove();
                clearInterval(a);
            }
        }, 1000);
    };
    Person.prototype.death = function () {
        this.circle.setOptions({ fillColor: 'gray' });
        this.color = 'gray';
        this.die = true;
    };
    Person.prototype.autoMoving = function (circle, speed, lineId, from) {
        var _this = this;
        var followRoad = function () {
            var index = 0;
            var i = 0;
            var n = null;
            var fx = from.getLat();
            var fy = from.getLng();
            var fl_x = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath[i].getLat();
            var fl_y = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath[i].getLng();
            var result = (Math.pow((Math.pow((fx - fl_x), 2) + Math.pow((fy - fl_y), 2)), 0.5));
            var check = function () {
                if (n == 1) {
                    return i >= _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath.length - 1;
                }
                else {
                    return i <= 0;
                }
            };
            if (result <= 0.0002) {
                i = 0;
                n = 1;
            }
            else {
                i = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath.length - 1;
                n = -1;
            }
            var moving1road = function () {
                if (_variable__WEBPACK_IMPORTED_MODULE_1__.variable.movingStart) {
                    var prex = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath[i].getLng();
                    var prey = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath[i].getLat();
                    var nexx = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath[i + n].getLng();
                    var nexy = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].linePath[i + n].getLat();
                    var dist = Math.pow((Math.pow((nexx - prex), 2) + Math.pow((nexy - prey), 2)), 0.5) * speed;
                    var X = (index * nexx + (dist - index) * prex) / dist;
                    var Y = (index * nexy + (dist - index) * prey) / dist;
                    var position = new kakao.maps.LatLng(Y, X);
                    _this.position.x = position.getLng();
                    _this.position.y = position.getLat();
                    circle.setPosition(position);
                    // console.log('error')
                    index++;
                    if (index >= dist) {
                        index = 0;
                        i += n;
                        if (check()) {
                            _this.per_arrive = true;
                            if (_this.per_click) {
                                _per_arrive = true;
                            }
                            else {
                                if (!_this.hvToGoHospital) {
                                    _this.findmove();
                                }
                            }
                            return;
                        }
                    }
                }
                requestAnimationFrame(moving1road);
            };
            moving1road();
        };
        followRoad();
    };
    Person.prototype.findmove = function () {
        var _this = this;
        this.per_arrive = false;
        var from = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[this.locNum]; // start point
        var lines = from.lines.concat();
        for (var i = 0; i < lines.length; i++) {
            var temp = Math.floor(Math.random() * (lines.length - i)) + i;
            var val = lines[i];
            lines[i] = lines[temp];
            lines[temp] = val;
        }
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var i = lines_1[_i];
            this.lineNum = i;
            var picks = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[this.lineNum].points.filter(function (v) { return v !== _this.locNum; }); // 시작점 반대 points
            if (!picks.length) {
                continue;
            }
            this.nexNum = picks[Math.floor(picks.length * Math.random())]; // 도착할 point number
            var speed = speed_;
            this.autoMoving(this.circle, speed, this.lineNum, from.latlng);
            this.locNum = Number(this.nexNum);
            break;
        }
    };
    Person.prototype.move2ClickedPlace = function (arrivePoint, arriveLocation) {
        var _this = this;
        // console.log(`선택지점: ${arrivePoint}`);
        var moveStart = function (startPoint) {
            _this.per_arrive = false;
            _per_arrive = false;
            var codes = _this.findPath(startPoint, arriveLocation, arrivePoint);
            var way = codes[0];
            var wayCount = 0;
            var lineId = [];
            var speed = speed_;
            // console.log(`way: ${way}`);
            var autoMoving = function (from) {
                var lineIdCount = 0;
                for (wayCount; wayCount < way.length - 1; wayCount++) {
                    for (var p = 0; p < _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[way[wayCount]].lines.length - 1; p++) {
                        var checkLine = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[way[wayCount]].lines[p];
                        if (_roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[checkLine].points.includes(way[wayCount]) && _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[checkLine].points.includes(way[wayCount + 1])) {
                            lineId.push(checkLine);
                            break;
                        }
                    }
                }
                wayCount = 0;
                // console.log(`lineId: ${lineId}`);
                var followRoad = function () {
                    // console.log(pointData[way[wayCount]])
                    wayCount++;
                    var index = 0;
                    var i = 0;
                    var n = null;
                    var fx = from.getLat();
                    var fy = from.getLng();
                    var fl_x = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath[i].getLat();
                    var fl_y = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath[i].getLng();
                    var result = (Math.pow((Math.pow((fx - fl_x), 2) + Math.pow((fy - fl_y), 2)), 0.5));
                    var check = function () {
                        if (n == 1) {
                            return i >= _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath.length - 1;
                        }
                        else {
                            return i <= 0;
                        }
                    };
                    if (result <= 0.0002) {
                        i = 0;
                        n = 1;
                        // console.log('경우1')
                    }
                    else {
                        i = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath.length - 1;
                        n = -1;
                        // console.log('경우2')
                    }
                    var moving1road = function () {
                        if (_variable__WEBPACK_IMPORTED_MODULE_1__.variable.movingStart) {
                            var prex = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath[i].getLng(); //현재 좌표 x
                            var prey = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath[i].getLat(); //현재 좌표 y
                            var nexx = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath[i + n].getLng(); //목표 좌표 x
                            var nexy = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId[lineIdCount]].linePath[i + n].getLat(); //목표 좌표 y
                            var dist = Math.pow((Math.pow((nexx - prex), 2) + Math.pow((nexy - prey), 2)), 0.5) * speed; // 점과 점사이 거리에 speed를 곱
                            var X = (index * nexx + (dist - index) * prex) / dist; // 1:99, 2:98, 3:97 ...
                            var Y = (index * nexy + (dist - index) * prey) / dist;
                            var position = new kakao.maps.LatLng(Y, X);
                            // console.log(prex, prey, nexx, nexy, i, n, index, dist);
                            _this.position.x = position.getLng();
                            _this.position.y = position.getLat();
                            _this.circle.setPosition(position);
                            // console.log (index, dist)
                            index++;
                            if (index >= dist) {
                                // console.log(index, dist)
                                index = 0;
                                i += n;
                                if (check()) {
                                    // console.log(`return${lineIdCount}`);
                                    if (lineIdCount > lineId.length - 2) {
                                        _this.per_arrive = true;
                                        _per_arrive = true;
                                        if (_this.hvToGoHospital && !_per_click) {
                                            _this.quarantineInHospital();
                                        }
                                        _this.locNum = arrivePoint;
                                        return;
                                    }
                                    else {
                                        lineIdCount++;
                                        from = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[way[wayCount]].latlng;
                                        followRoad();
                                    }
                                    return;
                                }
                            }
                            requestAnimationFrame(moving1road);
                        }
                    };
                    // console.log(`lineIdCount: ${lineIdCount} (움직임 시작)`)
                    moving1road();
                };
                followRoad();
                return;
            };
            autoMoving(_roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[way[wayCount]].latlng);
            return _this.locNum;
        };
        moveStart(this.locNum);
    };
    Person.prototype.findPath = function (startPoint, arriveLocation, arrivePoint) {
        var _this = this;
        var r = startPoint;
        var findWay = function (start, goal) {
            var history = new Map();
            var heap = new Heap();
            var data = start;
            history.set(data.data, data);
            var goalLocation = arriveLocation;
            var goalx = goalLocation.getLat();
            var goaly = goalLocation.getLng();
            var _loop_1 = function () {
                var currentPointId = data.data;
                var currentPointData = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.pointData[currentPointId];
                var currentPointConnectedLines = currentPointData.lines;
                // 현재 포인트에 연결된 다음 포인트들 중 방문하지 않은 point를 heap에 넣어준다.
                for (var _i = 0, currentPointConnectedLines_1 = currentPointConnectedLines; _i < currentPointConnectedLines_1.length; _i++) {
                    var lineId = currentPointConnectedLines_1[_i];
                    var nextPointId = _roadPoint__WEBPACK_IMPORTED_MODULE_2__.lineData[lineId].points.filter(function (v) { return v !== currentPointId; })[0];
                    if (nextPointId == null || history.has(nextPointId)) {
                        // if(this.per_click){
                        //     console.count('a')
                        // }
                        continue;
                    }
                    // const polyline = new kakao.maps.Polyline({
                    //     path: lineData[lineId].linePath
                    // })
                    var nowX = _this.circle.getPosition().getLat();
                    var nowY = _this.circle.getPosition().getLng();
                    var lengthFromStartToFinish = Math.pow((Math.pow((nowX - goalx), 2) + Math.pow((nowY - goaly), 2)), 0.5);
                    // const roadLength = polyline.getLength();
                    heap.push({
                        data: nextPointId,
                        pre: currentPointId,
                        score: data.score + lengthFromStartToFinish
                    });
                    history.set(nextPointId, data);
                }
                // heap에 있는 후보중 가장 괜찮은 애를 뽑아온다.
                data = heap.pop();
            };
            // 도착전까지
            while (goal != data.data) {
                _loop_1();
            }
            // 도착까지 경로 다 찾음.
            // history에서 도착 포인트를 가져온다.
            var goalPoint = history.get(goal);
            // const total = goalPoint.score;
            var list = [];
            while (goalPoint.pre !== -1) {
                var prevPointId = goalPoint.pre;
                list.push(goalPoint.data);
                goalPoint = history.get(prevPointId);
            }
            list.push(r);
            list.reverse();
            list.push(arrivePoint);
            return [list, history];
        };
        var a = findWay({ data: r, score: 0, pre: -1 }, arrivePoint);
        console.log(a[0]);
        return a;
    };
    ;
    return Person;
}());



/***/ }),

/***/ "./src/player_location.ts":
/*!********************************!*\
  !*** ./src/player_location.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");


function init() {
    // setInterval(() => { // 플레이어 위치 표시
    if (_variable__WEBPACK_IMPORTED_MODULE_1__.moveOpts.check == false) {
        _constants__WEBPACK_IMPORTED_MODULE_0__.mylocate.style.filter = 'opacity(0%)';
    }
    // }, 50)
}


/***/ }),

/***/ "./src/roadPoint.ts":
/*!**************************!*\
  !*** ./src/roadPoint.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointData": () => (/* binding */ pointData),
/* harmony export */   "lineData": () => (/* binding */ lineData),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _setting_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting_map */ "./src/setting_map.ts");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable */ "./src/variable.ts");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person */ "./src/person.ts");
/* harmony import */ var _moving_people__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moving_people */ "./src/moving_people.ts");
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
                            linePath: linePath_,
                            points: []
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
                                lineData[j].points.push(i);
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
        fillOpacity: 0.5,
        zIndex: 1000
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
    kakao.maps.event.addListener(circle, 'click', function () {
        if (_person__WEBPACK_IMPORTED_MODULE_2__._per_click) {
            if (_person__WEBPACK_IMPORTED_MODULE_2__._per_arrive) {
                _variable__WEBPACK_IMPORTED_MODULE_1__.arriveClick.location = circle.getPosition();
                (0,_moving_people__WEBPACK_IMPORTED_MODULE_3__.move2ClickedPlace_before)(Number(arr.name), _variable__WEBPACK_IMPORTED_MODULE_1__.arriveClick.location);
            }
            else {
                console.log("It's moving now");
            }
        }
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveOpts": () => (/* binding */ moveOpts),
/* harmony export */   "peoples": () => (/* binding */ peoples),
/* harmony export */   "variable": () => (/* binding */ variable),
/* harmony export */   "menuBtn_click": () => (/* binding */ menuBtn_click),
/* harmony export */   "time_DHS": () => (/* binding */ time_DHS),
/* harmony export */   "arriveClick": () => (/* binding */ arriveClick)
/* harmony export */ });
var moveOpts = {
    check: false,
    d: null
};
var peoples = [];
var variable = {
    movingStart: true,
    panto: false,
    speedValue1: 200,
    set1: null,
    speedValue2: 700,
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
var arriveClick = {
    location: null
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/main.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsY0FBYyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLFFBQVEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksV0FB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Q0FBQztJQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO0lBQzNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7SUFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztJQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO0lBQzNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7SUFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztJQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO0lBQzNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Q0FDOUQsQ0FBQztBQUVGLFdBQVc7QUFDSixJQUFNLFdBQVcsR0FBRztJQUN2QixFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FB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RUFBRTs0QkFDdEIsSUFBTSxJQUFJLEdBQUcsZ0RBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTOzRCQUMxRSxJQUFNLElBQUksR0FBRyxnREFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVM7NEJBQzFFLElBQU0sSUFBSSxHQUFHLGdEQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVM7NEJBQzlFLElBQU0sSUFBSSxHQUFHLGdEQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVM7NEJBQzlFLElBQU0sSUFBSSxHQUFHLFVBQUMsVUFBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUksQ0FBQyxJQUFHLFVBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFJLENBQUMsRUFBQyxFQUFJLEdBQUcsSUFBRyxLQUFLLENBQUMsQ0FBQyxzQkFBc0I7NEJBQzdGLElBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyx1QkFBdUI7NEJBQ2hGLElBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQ3hELElBQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxF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O0lBQ1YsUUFBUSxFQUFFLE9BQU87Q0FDcEI7QUFFTSxJQUFJLGFBQWEsR0FBRztJQUN2QixJQUFJLEVBQUUsS0FBSztJQUNYLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsS0FBSztDQUNkO0FBRU0sSUFBSSxRQUFRLEdBQUc7SUFDbEIsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLEdBQUcsRUFBRSxDQUFDO0NBQ1Q7QUFFTSxJQUFJLFdBQVcsR0FFbEI7SUFDQSxRQUFRLEVBQUUsSUFBSTtDQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9EZWF0aC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9hbnNhblJhbmdlLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL2JhckdyYXBoLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9ob3NwaXRhbF9kYXRhLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL2luZmVjX3JhbmdlLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL2xpbmVHcmFwaC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL21vdmluZ19wZW9wbGUudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvb3V0cHV0X25PcC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9wZXJzb24udHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvcGxheWVyX2xvY2F0aW9uLnRzIiwid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL3JvYWRQb2ludC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9zZXR0aW5nX21hcC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9zaWRlX21lbnUudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LXRlc3QtZnJvbnQvLi9zcmMvdGltZUJveC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy90aW1lX0FDQy50cyIsIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy92YXJpYWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI21hcHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcXHJcXG59XFxyXFxuI3Jlc3VsdERpdntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNXB4O1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTBweCk7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxufVxcclxcbiN1bmRlcmJhcntcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEyNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG4jc2V0VW5kZXJCYXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCAjMWUyMDFmIDEwJSwgZ3JheSA1MCUsICMxZTIwMWYpO1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwNTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG4jc2V0VW5kZXJCYXIgPiBkaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiNwZW8xe1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbi5teWxvY2F0ZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMjtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4xczsgKi9cXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwJSk7XFxyXFxuICAgIC8qIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDNweCBibGFjayk7ICovXFxyXFxuICAgIFxcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEwMHB4KTtcXHJcXG59XFxyXFxuLldhcm5pbmdfYWxlcnR7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCUpO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxyXFxufVxcclxcblxcclxcbi8qIO2UjOugiOydtOyWtCDsnITsuZgg7ZmU7IK07ZGcIOyVoOuLiOuplOydtOyFmCAqL1xcclxcbi8qIEBrZXlmcmFtZXMgbW92ZV9hcnJvd3sgXFxyXFxuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTt9XFxyXFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAlKTt9XFxyXFxufSAqL1xcclxcblxcclxcblxcclxcbi8qIOyCrOydtO2KuCDrqZTsnbgg66mU64m0IOyVoOuLiOuplOydtOyFmCAqL1xcclxcbi5tYWluTWVudXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIGxlZnQ6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4OyBcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMyMzIzNTtcXHJcXG4gICAgXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHotaW5kZXg6IDE1MDtcXHJcXG59XFxyXFxuLm1haW5NZW51OmJlZm9yZSwgLm1haW5NZW51OmFmdGVye1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcclxcbn1cXHJcXG4ubWFpbk1lbnU6YmVmb3Jle1xcclxcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xcclxcbn1cXHJcXG4ubWFpbk1lbnU6YWZ0ZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuLm1haW5NZW51LmFjdGl2ZTpiZWZvcmV7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWigwKTtcXHJcXG59XFxyXFxuLm1haW5NZW51LmFjdGl2ZTphZnRlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxufVxcclxcblxcclxcbi8qIOyCrOydtOuTnCDrqZTribQg64K07JqpICovXFxyXFxuI21haW5NZW51X2NvbnRlbnRze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7IFxcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMjMyMzU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDE0OTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcbiNtYWluTWVudV9jb250ZW50cyBkaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA0NXB4O1xcclxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0OTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMS41cHggIzU2NTY1ZjtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59I21haW5NZW51X2NvbnRlbnRzIGRpdjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2Y0NjtcXHJcXG59I21haW5NZW51X2NvbnRlbnRzIGRpdjphY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmNDY7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5QZW9wbGVzaG93e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG59LlBlb3BsZXNob3cgZGl2e1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jU19zaG93Ym94e1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufSNJX3Nob3dib3h7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufSNSX3Nob3dib3h7XFxyXFxuICAgIGNvbG9yOiBncmVlbjtcXHJcXG59I0Rfc2hvd2JveHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jdGltZXNob3d7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjUyO1xcclxcbn1cXHJcXG4jdGltZXNldHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAxZjtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG4jdGltZVNwZWVke1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDFmO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd29yZC1zcGFjaW5nOiAtMTBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN2aXJ1c19pbmZlY3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufSN2aXJ1c19pbmZlY3Rpb246YWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjM1O1xcclxcbn1cXHJcXG5cXHJcXG4jdGltZWJveHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jdGltZVNoYWRvd3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2sgaW5zZXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4jd29ybGRfbmFtZXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiAwIDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAxZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbiNTcXVhcmV7XFxyXFxuICAgIHdpZHRoOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZmU3MTtcXHJcXG59I2Nsb2Nre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI1BfaW5me1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCUpO1xcclxcblxcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxNXB4O1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrLCAwcHggMHB4IDEwcHggYmxhY2ssIDBweCAwcHggMTBweCBibGFjaywgMHB4IDBweCAycHggYmxhY2s7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwcztcXHJcXG59XFxyXFxuLmdyYXBoRGl2e1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbiNiYXJEaXZ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MHB4O1xcclxcbiAgICBsZWZ0OiA4MHB4O1xcclxcbiAgICB6LWluZGV4OiAxNTA7XFxyXFxufSNsaW5lRGl2e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgbGVmdDogODBweDtcXHJcXG4gICAgei1pbmRleDogMTUwO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJlYXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdG9wOiAtNXB4O1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOjJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG4uaG9zcGl0YWxCb3h7XFxyXFxuICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jaG9zcGl0YWxOYW1le1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxufVxcclxcbiNob3NwaXRhbENvbnRlbnRze1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFydHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbiNwYXJ0MXtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jcGFydDJ7XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbiAgICBoZWlnaHQ6IDQwJTtcXHJcXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wb2xpY3l7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNTVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDFmO1xcclxcblxcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuXFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4ucG9sX2lucHV0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGNsaXA6cmVjdCgwLDAsMCwwKTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG4ucG9sX2lucHV0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTs7SUFFUixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osc0VBQXNFO0lBQ3RFLGlCQUFpQjs7SUFFakIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsWUFBWTtJQUNaLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLHdDQUF3Qzs7SUFFeEMsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULDJCQUEyQjtJQUMzQixVQUFVOztJQUVWLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0FBQ3RCOztBQUVBLHNCQUFzQjtBQUN0Qjs7O0dBR0c7OztBQUdILG9CQUFvQjtBQUNwQjtJQUNJLGtCQUFrQjtJQUNs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QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7O0lBRXpCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNtYXB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxyXFxufVxcclxcbiNyZXN1bHREaXZ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjc1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwcHgpO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcbn1cXHJcXG4jdW5kZXJiYXJ7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuI3NldFVuZGVyQmFye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byByaWdodCwgIzFlMjAxZiAxMCUsIGdyYXkgNTAlLCAjMWUyMDFmKTtcXHJcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxyXFxuXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxMDU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuI3NldFVuZGVyQmFyID4gZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4jcGVvMXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4ubXlsb2NhdGV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDI7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDAuMXM7ICovXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMCUpO1xcclxcbiAgICAvKiBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAzcHggYmxhY2spOyAqL1xcclxcbiAgICBcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHRvcDogY2FsYyg1MCUgLSAxMDBweCk7XFxyXFxufVxcclxcbi5XYXJuaW5nX2FsZXJ0e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAlKTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDtlIzroIjsnbTslrQg7JyE7LmYIO2ZlOyCtO2RnCDslaDri4jrqZTsnbTshZggKi9cXHJcXG4vKiBAa2V5ZnJhbWVzIG1vdmVfYXJyb3d7IFxcclxcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7fVxcclxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwJSk7fVxcclxcbn0gKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiDsgqzsnbTtirgg66mU7J24IOuplOuJtCDslaDri4jrqZTsnbTshZggKi9cXHJcXG4ubWFpbk1lbnV7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxNXB4O1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICB3aWR0aDogNTBweDsgXFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMjMyMzU7XFxyXFxuICAgIFxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB6LWluZGV4OiAxNTA7XFxyXFxufVxcclxcbi5tYWluTWVudTpiZWZvcmUsIC5tYWluTWVudTphZnRlcntcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXHJcXG59XFxyXFxuLm1haW5NZW51OmJlZm9yZXtcXHJcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXHJcXG59XFxyXFxuLm1haW5NZW51OmFmdGVye1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxufVxcclxcbi5tYWluTWVudS5hY3RpdmU6YmVmb3Jle1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxufVxcclxcbi5tYWluTWVudS5hY3RpdmU6YWZ0ZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDsgqzsnbTrk5wg66mU64m0IOuCtOyaqSAqL1xcclxcbiNtYWluTWVudV9jb250ZW50c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxuICAgIGxlZnQ6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4OyBcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzIzMjM1O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAxNDk7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG4jbWFpbk1lbnVfY29udGVudHMgZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEuNXB4ICM1NjU2NWY7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufSNtYWluTWVudV9jb250ZW50cyBkaXY6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmNDY7XFxyXFxufSNtYWluTWVudV9jb250ZW50cyBkaXY6YWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjQ2O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uUGVvcGxlc2hvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMnB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjM1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMCA1cHg7XFxyXFxufS5QZW9wbGVzaG93IGRpdntcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuI1Nfc2hvd2JveHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn0jSV9zaG93Ym94e1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn0jUl9zaG93Ym94e1xcclxcbiAgICBjb2xvcjogZ3JlZW47XFxyXFxufSNEX3Nob3dib3h7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpbWVzaG93e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjM1O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI1MjtcXHJcXG59XFxyXFxuI3RpbWVzZXR7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMWY7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuI3RpbWVTcGVlZHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAxZjtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHdvcmQtc3BhY2luZzogLTEwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlydXNfaW5mZWN0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn0jdmlydXNfaW5mZWN0aW9uOmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzNTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpbWVib3h7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3RpbWVTaGFkb3d7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrIGluc2V0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuI3dvcmxkX25hbWV7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIG1hcmdpbjogMCA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAwO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jU3F1YXJle1xcclxcbiAgICB3aWR0aDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWZlNzE7XFxyXFxufSNjbG9ja3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNQX2luZntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAlKTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaywgMHB4IDBweCAxMHB4IGJsYWNrLCAwcHggMHB4IDEwcHggYmxhY2ssIDBweCAwcHggMnB4IGJsYWNrO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxyXFxufVxcclxcbi5ncmFwaERpdntcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4jYmFyRGl2e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgbGVmdDogODBweDtcXHJcXG4gICAgei1pbmRleDogMTUwO1xcclxcbn0jbGluZURpdntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwcHg7XFxyXFxuICAgIGxlZnQ6IDgwcHg7XFxyXFxuICAgIHotaW5kZXg6IDE1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmFyZWF7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRvcDogLTVweDtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZzoycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuLmhvc3BpdGFsQm94e1xcclxcbiAgICB3aWR0aDogMTcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuI2hvc3BpdGFsTmFtZXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG4jaG9zcGl0YWxDb250ZW50c3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcnR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jcGFydDF7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3BhcnQye1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG4gICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucG9saWN5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDU1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAxZjtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcblxcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLnBvbF9pbnB1dCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjbGlwOnJlY3QoMCwwLDAsMCk7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuLnBvbF9pbnB1dCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuL3BlcnNvbidcclxuaW1wb3J0IHsgTnVtT2ZQZW9wbGUgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgcGVvcGxlcyB9IGZyb20gJy4vdmFyaWFibGUnXHJcblxyXG5mdW5jdGlvbiBwbHVzRGVhZFJhdGUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlb3BsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwID0gcGVvcGxlc1tpXTtcclxuICAgICAgICBpZiAocC5jb2xvciA9PSAncmVkJykge1xyXG4gICAgICAgICAgICBwLmZhdGFsaXR5UmF0ZSsrO1xyXG4gICAgICAgICAgICBGcGVyKHAsIHAuZmF0YWxpdHlSYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZwZXIocDogUGVyc29uLCBwZXI6IG51bWJlcikge1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgbGV0IG51bSA9IHBlciAvIDEwMDtcclxuICAgIGlmIChyYW5kIDw9IG51bSkge1xyXG4gICAgICAgIHAuZGVhdGgoKTtcclxuICAgICAgICBOdW1PZlBlb3BsZS5JbmZlY3Rpb3VzLS07XHJcbiAgICAgICAgTnVtT2ZQZW9wbGUuZGVhZFBlcisrO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBwbHVzRGVhZFJhdGUgfSIsImltcG9ydCB7IEFOU0FOcmFuZ2UgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbi8vIOyngOuPhOyXkCDtkZzsi5ztlaAg64uk6rCB7ZiV7J2EIOyDneyEse2VqeuLiOuLpFxyXG52YXIgcG9seWdvbiA9IG5ldyBrYWthby5tYXBzLlBvbHlnb24oe1xyXG4gICAgcGF0aDogQU5TQU5yYW5nZSxcclxuICAgIHN0cm9rZVdlaWdodDogMyxcclxuICAgIHN0cm9rZUNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICBzdHJva2VPcGFjaXR5OiAwLjgsXHJcbiAgICBmaWxsT3BhY2l0eTogMFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KG1hcDoga2FrYW8ubWFwcy5NYXApe1xyXG4gICAgLy8gcG9seWdvbi5zZXRNYXAobWFwKVxyXG59IiwiaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tICdjaGFydC5qcydcclxuaW1wb3J0IHsgbWVudUJ0bl9jbGljayB9IGZyb20gJy4vdmFyaWFibGUnXHJcbmltcG9ydCB7IE51bU9mUGVvcGxlLCBiYXJEaXYsIGJhckdyYXBoLCBiYXJHcmFwaF9idG4gfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbkNoYXJ0LnJlZ2lzdGVyKC4uLnJlZ2lzdGVyYWJsZXMpO1xyXG5cclxuY29uc3QgbiA9IE51bU9mUGVvcGxlLndob2xlUGVyO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIGNvbnN0IGJhckMgPSBuZXcgQ2hhcnQoYmFyR3JhcGgsIHtcclxuICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydTJywgJ0knLCAnUiddLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnYmFyX0dyYXBoJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtOdW1PZlBlb3BsZS53aG9sZVBlciwgTnVtT2ZQZW9wbGUuSW5mZWN0aW91cywgTnVtT2ZQZW9wbGUuUmVjb3ZlcmVkXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk5LCAyNTUsIDEzMiwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTksIDI1NSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZGV4QXhpczogJ3knLFxyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBOdW1PZlBlb3BsZS53aG9sZVBlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYmFyQy5oaWRlKDApXHJcbiAgICBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgIHVwZGF0ZUNoYXJ0KGJhckMpXHJcbiAgICAgICAgaWYobWVudUJ0bl9jbGljay5tYWluID09IGZhbHNlKXtcclxuICAgICAgICAgICAgYmFyRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGJhckMuaGlkZSgwKVxyXG4gICAgICAgICAgICBtZW51QnRuX2NsaWNrLmJhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDYwKVxyXG5cclxuICAgIGJhckdyYXBoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYobWVudUJ0bl9jbGljay5iYXIgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBiYXJEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhckRpdi5zdHlsZS56SW5kZXggPSBiYXJEaXYuc3R5bGUuekluZGV4ICsgMTtcclxuICAgICAgICAgICAgYmFyQy5zaG93KDApXHJcbiAgICAgICAgICAgIG1lbnVCdG5fY2xpY2subGluZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtZW51QnRuX2NsaWNrLmJhciA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGJhckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBiYXJEaXYuc3R5bGUuekluZGV4ID0gJzE1MCc7XHJcbiAgICAgICAgICAgIGJhckMuaGlkZSgwKVxyXG4gICAgICAgICAgICBtZW51QnRuX2NsaWNrLmJhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYobWVudUJ0bl9jbGljay5tYWluID09IHRydWUpe1xyXG4gICAgICAgIGJhckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGJhckMuaGlkZSgwKVxyXG4gICAgICAgIG1lbnVCdG5fY2xpY2suYmFyID0gZmFsc2U7XHJcbiAgICAgICAgYmFyRGl2LnN0eWxlLnpJbmRleCA9ICcxNTAnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVDaGFydChjaGFydDpDaGFydDxcImJhclwiLCBudW1iZXJbXSwgc3RyaW5nPikge1xyXG4gICAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IFtOdW1PZlBlb3BsZS53aG9sZVBlciwgTnVtT2ZQZW9wbGUuSW5mZWN0aW91cywgTnVtT2ZQZW9wbGUuUmVjb3ZlcmVkXTtcclxuICAgICAgICBjaGFydC51cGRhdGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IG51bVAgfSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgeyBudW1Qc2hvdyB9IGZyb20gJy4vb3V0cHV0X25PcCdcclxuXHJcbmV4cG9ydCBjb25zdCBBTlNBTnJhbmdlID0gWyAvLyDslYjsgrDsi5wg67KU7JyEIOuLpOqwge2YlVxyXG4gICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjM0NTM2NjAxMzQwMTE3LCAxMjYuNzgzMzM2Njg3MjkzMCksXHJcbiAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzUyMzk4MDMyMTAxOTEsIDEyNi44MDY0MzE3NzEwNTE5KSxcclxuICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zNDkxODYxMDYxNDYxMywgMTI2LjgyNjkzNTkxMzk3NjYpLFxyXG4gICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMzNzQxMTczODk2NjkyLCAxMjYuODYyODkyODcyOTAwOCksXHJcbiAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzMzMzE4MTUxOTU3NDcsIDEyNi44NzY2MjE1NTk2NDM0KSxcclxuICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4yOTk5NTg2NjcwNTU2MiwgMTI2Ljg5MTc0NDczMDMwNDcpLFxyXG4gICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjI4MTI5MTk0MTY4OTQzLCAxMjYuODYwMDE3ODM2NDQ0NyksXHJcbiAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMjgxMzA1NDE5Mjk3NTUsIDEyNi44MzU0Njk2Mzg3Nzc3KSxcclxuICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4yOTUxMjQ0MzA4NjUxNCwgMTI2Ljc4MzMxMTY5MDQ1NDMpLFxyXG4gICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMyNDE2OTk5MzU2ODk2LCAxMjYuNzY3MTA1NTczNjkxMSksXHJcbl07XHJcblxyXG4vL+ybgOyngeyehCDrspTsnIQg7KCc7ZWcXHJcbmV4cG9ydCBjb25zdCBBTlNBTnZlY3RvciA9IFtcclxuICAgIHsgeDogMC4wMjMwOTUwODM3NTg5LCB5OiAwLjAwNzAzMjAxODcwMDc0IH0sXHJcbiAgICB7IHg6IDAuMDIwNTA0MTQyOTI0NywgeTogLTAuMDAzMjExOTI1OTU1NzggfSxcclxuICAgIHsgeDogMC4wMzU5NTY5NTg5MjQyLCB5OiAtMC4wMTE3NzQzNjcxNzkyMSB9LFxyXG4gICAgeyB4OiAwLjAxMzcyODY4Njc0MjYsIHk6IC0wLjAwNDA5MzU4NzAwOTQ1IH0sXHJcbiAgICB7IHg6IDAuMDE1MTIzMTcwNjYxMywgeTogLTAuMDMzMzU5NDg0OTAxODUgfSxcclxuICAgIHsgeDogLTAuMDMxNzI2ODkzODYsIHk6IC0wLjAxODY2NjcyNTM2NjE5IH0sXHJcbiAgICB7IHg6IC0wLjAyNDU0ODE5NzY2NywgeTogMC4wMDAwMTM0Nzc2MDgxMiB9LFxyXG4gICAgeyB4OiAtMC4wNTIxNTc5NDgzMjM0LCB5OiAwLjAxMzgxOTAxMTU2NzU5IH0sXHJcbiAgICB7IHg6IC0wLjAxNjIwNjExNjc2MzIsIHk6IDAuMDI5MDQ1NTYyNzAzODIgfSxcclxuICAgIHsgeDogMC4wMjExOTYwMTk4MzIyMSwgeTogMC4wMjkwNDU1NjI3MDM4MiB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBNT1ZFX1BBUkFNUyA9IHtcclxuICAgICd3Jzoge1xyXG4gICAgICAgIHZ4OiAwLjAwMDAzLFxyXG4gICAgICAgIHZ5OiAwXHJcbiAgICB9LFxyXG4gICAgJ3MnOiB7XHJcbiAgICAgICAgdng6IC0wLjAwMDAzLFxyXG4gICAgICAgIHZ5OiAwXHJcbiAgICB9LFxyXG4gICAgJ2EnOiB7XHJcbiAgICAgICAgdng6IDAsXHJcbiAgICAgICAgdnk6IC0wLjAwMDAzXHJcbiAgICB9LFxyXG4gICAgJ2QnOiB7XHJcbiAgICAgICAgdng6IDAsXHJcbiAgICAgICAgdnk6IDAuMDAwMDNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IF9OdW1PZlBlb3BsZTogbnVtUCA9IHtcclxuICAgIHdob2xlUGVyOiA4MDAsXHJcbiAgICBJbmZlY3Rpb3VzOiAwLFxyXG4gICAgUmVjb3ZlcmVkOiAwLFxyXG4gICAgZGVhZFBlcjogMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTnVtT2ZQZW9wbGUgPSBuZXcgUHJveHkoXHJcbiAgICBfTnVtT2ZQZW9wbGUsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWVcclxuICAgICAgICBpZiAobmFtZSA9PSAnd2hvbGVQZXInIHx8IG5hbWUgPT0gJ0luZmVjdGlvdXMnIHx8IG5hbWUgPT0gJ1JlY292ZXJlZCcgfHwgbmFtZSA9PSAnZGVhZFBlcicpIHtcclxuICAgICAgICAgICAgbnVtUHNob3coKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyN0aW1lc2V0Jyk7XHJcbmV4cG9ydCBjb25zdCB0aW1lYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyN0aW1lYm94Jyk7XHJcbmV4cG9ydCBjb25zdCB0aW1lU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignI3RpbWVTcGVlZCcpO1xyXG5leHBvcnQgY29uc3QgbXlsb2NhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignLm15bG9jYXRlJyk7XHJcbmV4cG9ydCBjb25zdCBXYXJuaW5nX2FsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJy5XYXJpbmdfYWxlcnQnKTtcclxuZXhwb3J0IGNvbnN0IHZpcnVzX2luZmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjdmlydXNfaW5mZWN0aW9uJyk7XHJcbmV4cG9ydCBjb25zdCBQX2luZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjUF9pbmYnKTtcclxuZXhwb3J0IGNvbnN0IFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjU3F1YXJlJyk7XHJcbmV4cG9ydCBjb25zdCBjbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjY2xvY2snKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNiYXJEaXYnKTtcclxuZXhwb3J0IGNvbnN0IGJhckdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oJyNiYXJHcmFwaCcpO1xyXG5leHBvcnQgY29uc3QgYmFyR3JhcGhfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNiYXJHcmFwaF9idG4nKTtcclxuZXhwb3J0IGNvbnN0IGxpbmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignI2xpbmVEaXYnKTtcclxuZXhwb3J0IGNvbnN0IGxpbmVHcmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KCcjbGluZUdyYXBoJyk7XHJcbmV4cG9ydCBjb25zdCBsaW5lR3JhcGhfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNsaW5lR3JhcGhfYnRuJyk7XHJcbmV4cG9ydCBjb25zdCBzYXZlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjc2F2ZV9idG4nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb2xfbWFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNwb2xfbWFzaycpO1xyXG5leHBvcnQgY29uc3QgcG9sX0lzb2xhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNwb2xfSXNvbGF0aW9uJyk7XHJcbmV4cG9ydCBjb25zdCBwb2xfcHJoYnRPRmd0aHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcG9sX3ByaGJ0T0ZndGhyJyk7IiwiZXhwb3J0IGNvbnN0IGhvc3BpdGFsX2RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2hvc3BpdGFsXzEnLFxyXG4gICAgICAgIHBhdGg6IFtcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMyMjYwNTMzNTU3Mjk5NSwgMTI2LjgyOTc3Nzk3NjM0NzgpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzIxMzQzNzg4OTg2NjIsIDEyNi44Mjk3MDc0ODc4NjIzMSksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMjEyMjUyOTU2NDU2LCAxMjYuODMxOTA3NzY1OTU4NjMpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzIyNTMxOTI0NTQzMiwgMTI2LjgzMjAwMDc1NTM1ODExKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVudHJhbmNlOiA2MTQsXHJcbiAgICAgICAgZW50ZXJlZFBlb3BsZTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdob3NwaXRhbF8yJyxcclxuICAgICAgICBwYXRoOiBbXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMzIwNzgwMzk1NzU3LCAxMjYuODA4MDk3NDkxNDAwNzcpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzMxNDk0Mzk2OTQ4MzMsIDEyNi44MDkzNTE0NTk3OTMwMiksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMjg1ODExMDE4ODY1NywgMTI2LjgwNzUxOTY1OTA2NzU4KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMyOTQ1MjYyODkzMDE1LCAxMjYuODA2MDA1NDY5MjI0MzMpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW50cmFuY2U6IDY2MSxcclxuICAgICAgICBlbnRlcmVkUGVvcGxlOiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ2hvc3BpdGFsXzMnLFxyXG4gICAgICAgIHBhdGg6IFtcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMwODA5MzMxODM5Nzk3LCAxMjYuODU2MjkwODM4NTA3MzkpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzA5NzE3OTIyMDIwNjk1LCAxMjYuODU4NTY2Mzg1MzM5NTcpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzExODQxNjQwMjI2OTQsIDEyNi44NTYzMDYyNjU1MTI4KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMxMDM2MTA0NzUwMDA5LCAxMjYuODUzOTQwMTgxMjE3MDcpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW50cmFuY2U6IDIzMixcclxuICAgICAgICBlbnRlcmVkUGVvcGxlOiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ2hvc3BpdGFsXzQnLFxyXG4gICAgICAgIHBhdGg6IFtcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMxMzE2MzYyMTE5Njk2LCAxMjYuODE1NDg5NDQ1MjAzMjYpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzEwNzEyNDQwNzU1OTE0LCAxMjYuODE1MjUyOTA0MDI4ODEpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzEwNjI1MDgwNTU2MTQsIDEyNi44MTcwMTg1MTkxMzk2NCksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMTMwODA2NzU2OTIwMywgMTI2LjgxNzE5ODcwMjI2MjM5KSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVudHJhbmNlOiA3MyxcclxuICAgICAgICBlbnRlcmVkUGVvcGxlOiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ2hvc3BpdGFsXzUnLFxyXG4gICAgICAgIHBhdGg6IFtcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMyNzk0NDU1NjAyMjgxNCwgMTI2Ljg1MDIxNjU3MzI1NjkzKSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMyNzgxMjA1Mzc0MTk0NCwgMTI2Ljg1MjMyNjc3NDg4MTA0KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMzMTMzNTQ3MTY5MTg5LCAxMjYuODUyNjM1ODIwMDUyMTcpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzMxMzI1NTQ1NjUxNTUsIDEyNi44NTE5MDI0MDQxNjA1NSksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMjk1MTI1NjA5Nzk3NywgMTI2Ljg1MDM4MjcxMDc3ODY5KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW50cmFuY2U6IDI5MCxcclxuICAgICAgICBlbnRlcmVkUGVvcGxlOiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ2hvc3BpdGFsXzYnLFxyXG4gICAgICAgIHBhdGg6IFtcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMwODk5Mzc3MjgwMjI3NSwgMTI2Ljc4NDYzNjgwNzY3NzcpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzA3ODExODU1MzYzMjgsIDEyNi43ODg3Njg2OTMxMjM5KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMwOTg5NTAwMDUwMTM3LCAxMjYuNzg5NzU1NTQxMTkxNCksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMTA5NTk1MTEzMDI1NSwgMTI2Ljc4NTQ1NDY4MTg2MDI2KSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVudHJhbmNlOiA1MTYsXHJcbiAgICAgICAgZW50ZXJlZFBlb3BsZTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdob3NwaXRhbF83JyxcclxuICAgICAgICBwYXRoOiBbXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMzExNTc0OTg4MjA4NCwgMTI2Ljc4MzcyNzI4ODM1NTcpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzMyNjY0MDAxNTg0MzgsIDEyNi43ODQ3MDQ2NjEwMzQ4OCksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMzM2Njg2MDY1MTA5MywgMTI2Ljc4MjIxOTMyMzE1KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMzMjQ0MTQwMTM5MDIsIDEyNi43ODEyNDExNzczNjYwNCksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbnRyYW5jZTogNzc5LFxyXG4gICAgICAgIGVudGVyZWRQZW9wbGU6IDBcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnaG9zcGl0YWxfOCcsXHJcbiAgICAgICAgcGF0aDogW1xyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzAyNjgzNDMzMjg2MTQsIDEyNi44MzYxMjgwMzY4MjI0NiksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMDA3NzkyNjY1ODg2NiwgMTI2LjgzNzIzMTg3NTg2NDE5KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMwMDA5NjI3MTQ1MDgyLCAxMjYuODM1MjcwODEwMzQxODMpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzAyMDkwNTA3NDM2MjYsIDEyNi44MzQxNTU0NTQ5MjE4KSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVudHJhbmNlOiAxNDIsXHJcbiAgICAgICAgZW50ZXJlZFBlb3BsZTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdob3NwaXRhbF85JyxcclxuICAgICAgICBwYXRoOiBbXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4yOTY2MDcxMDY2MjQ2OCwgMTI2Ljg3Mzg0NTAxNzI4MzkzKSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjI5NjQ0Mzc0NDg0NjQsIDEyNi44NzcwMDg4ODQxNTg0KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjI5Nzc1NDc2ODQwODc2LCAxMjYuODc3MDIzNjY3NDk1ODkpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMjk3NzgyOTc1MjIyNjYsIDEyNi44NzM4NTk5NzE0Mjc3OSksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbnRyYW5jZTogMTI4LFxyXG4gICAgICAgIGVudGVyZWRQZW9wbGU6IDBcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnaG9zcGl0YWxfMTAnLFxyXG4gICAgICAgIHBhdGg6IFtcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMzOTMzODUzNzAyNTQ4LCAxMjYuODI3Mzk4NjE5OTk3NzUpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzM2NzE4Mzg2MDcyODgsIDEyNi44Mjg2Njg0NzA5Mzk2NiksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMzYxODM2NTU5MDkwMjUsIDEyNi44MjY1MjU2NjAzNjkzMyksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMzg4MDQyMTY5MjM4NTUsIDEyNi44MjU1NDkxNDYyNTEwNSksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbnRyYW5jZTogNzI3LFxyXG4gICAgICAgIGVudGVyZWRQZW9wbGU6IDBcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnaG9zcGl0YWxfMTEnLFxyXG4gICAgICAgIHBhdGg6IFtcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMxMTkyNTc2MTM2NDg1LCAxMjYuODM3NzM4MDQyMDcwMjMpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzEwODg5NDU5MzIxNDE2LCAxMjYuODM3NjU1NjY0OTk3MjYpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzEwNjk5MDQ3NDIyMzYsIDEyNi44NDAwODcwMjk1OTU5NCksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMTE4Mzg4OTc5MjAwNCwgMTI2Ljg0MDExODQ1NzQ2NDYzKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVudHJhbmNlOiA3OSxcclxuICAgICAgICBlbnRlcmVkUGVvcGxlOiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ2hvc3BpdGFsXzEyJyxcclxuICAgICAgICBwYXRoOiBbXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zMDE3Mzk1Njk2MDA4NCwgMTI2Ljc5OTUyMzQ2NDU5MjcyKSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjMwMTMzOTQ0NzI0NzEzLCAxMjYuNzk3MzcwMjEyODg5OTcpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMjk4NjY0ODg3OTE3ODksIDEyNi43OTgyNTcxMjg3Njg1NyksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4yOTkxNDU4NTg2MDgzNiwgMTI2LjgwMDI3NDc0OTc2MDEzKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVudHJhbmNlOiA3OSxcclxuICAgICAgICBlbnRlcmVkUGVvcGxlOiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ2hvc3BpdGFsXzEzJyxcclxuICAgICAgICBwYXRoOiBbXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zNDYwNDU5MDUxNDQ4MiwgMTI2LjgwNjUwNDUwNzM3MzI5KSxcclxuICAgICAgICAgICAgbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM3LjM0NDUwNjMzMjE1OTI3LCAxMjYuODA3MjMwNzM1MjY3MDgpLFxyXG4gICAgICAgICAgICBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzQ0OTIzMjAzMzA5MTYsIDEyNi44MDg3MDgwODkzODg3OSksXHJcbiAgICAgICAgICAgIG5ldyBrYWthby5tYXBzLkxhdExuZygzNy4zNDYzODE2NzQ4MDI5NCwgMTI2LjgwNzk3MDgwODI0ODU3KSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGVudHJhbmNlOiA3NjgsXHJcbiAgICAgICAgZW50ZXJlZFBlb3BsZTogMFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdChtYXA6IGtha2FvLm1hcHMuTWFwKSB7XHJcbiAgICBmb3IgKGxldCBpIG9mIGhvc3BpdGFsX2RhdGEpIHtcclxuICAgICAgICBkaXNwbGF5SG9zcGl0YWwoaSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SG9zcGl0YWwoYXJyOiB0eXBlb2YgaG9zcGl0YWxfZGF0YVswXSkge1xyXG4gICAgICAgIGNvbnN0IGhvc3BpdGFsID0gbmV3IGtha2FvLm1hcHMuUG9seWdvbih7XHJcbiAgICAgICAgICAgIHBhdGg6IGFyci5wYXRoLFxyXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxyXG4gICAgICAgICAgICBmaWxsQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjdcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21PdmVybGF5ID0gbmV3IGtha2FvLm1hcHMuQ3VzdG9tT3ZlcmxheSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICBjb250ZW50OiBhcnIubmFtZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvd2luZG93ID0gbmV3IGtha2FvLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICBjb250ZW50OiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYW1lXCI+aG9zcGl0YWxfMTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5OdW1iZXIgb2YgUGVvcGxlIDogMTMwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FbnRyYW5jZSBOdW1iZXJzIDogNjIwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YCxcclxuICAgICAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGhvc3BpdGFsLCAnbW91c2VvdmVyJywgZnVuY3Rpb24gKG1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgY3VzdG9tT3ZlcmxheS5zZXRDb250ZW50KGA8ZGl2IGNsYXNzPVwiYXJlYVwiPiAke2Fyci5uYW1lfSA8L2Rpdj5gKTtcclxuXHJcbiAgICAgICAgICAgIGN1c3RvbU92ZXJsYXkuc2V0UG9zaXRpb24obW91c2VFdmVudC5sYXRMbmcpO1xyXG4gICAgICAgICAgICBjdXN0b21PdmVybGF5LnNldE1hcChtYXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGhvc3BpdGFsLCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24gKG1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgY3VzdG9tT3ZlcmxheS5zZXRQb3NpdGlvbihtb3VzZUV2ZW50LmxhdExuZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGtha2FvLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaG9zcGl0YWwsICdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY3VzdG9tT3ZlcmxheS5zZXRNYXAobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOuLpOqwge2YleyXkCBjbGljayDsnbTrsqTtirjrpbwg65Ox66Gd7ZWY6rOgIOydtOuypO2KuOqwgCDrsJzsg53tlZjrqbQg64uk6rCB7ZiV7J2YIOydtOumhOqzvCDrqbTsoIHsnYQg7J247Y+s7JyI64+E7Jqw7JeQIO2RnOyLnO2VqeuLiOuLpCBcclxuICAgICAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGhvc3BpdGFsLCAnY2xpY2snLCBmdW5jdGlvbiAobW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICBjdXN0b21PdmVybGF5LnNldE1hcChudWxsKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGA8ZGl2IGNsYXNzPVwiaG9zcGl0YWxCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaG9zcGl0YWxOYW1lXCI+JHthcnIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaG9zcGl0YWxDb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk51bWJlciBvZiBQZW9wbGUgOiAke2Fyci5lbnRlcmVkUGVvcGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkVudHJhbmNlIE51bWJlcnMgOiAke2Fyci5lbnRyYW5jZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIGluZm93aW5kb3cuc2V0Q29udGVudChjb250ZW50KTtcclxuICAgICAgICAgICAgaW5mb3dpbmRvdy5zZXRQb3NpdGlvbihtb3VzZUV2ZW50LmxhdExuZyk7XHJcbiAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBob3NwaXRhbC5zZXRNYXAobWFwKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4vcGVyc29uJ1xyXG5pbXBvcnQgeyBOdW1PZlBlb3BsZSB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBwZW9wbGVzLCB2YXJpYWJsZSB9IGZyb20gJy4vdmFyaWFibGUnXHJcbmltcG9ydCB7IG51bVBzaG93IH0gZnJvbSAnLi9vdXRwdXRfbk9wJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICB2YXJpYWJsZS5zZXQyID0gc2V0SW50ZXJ2YWwoZnVuLCB2YXJpYWJsZS5zcGVlZFZhbHVlMilcclxufVxyXG5cclxuZnVuY3Rpb24gZnVuKCl7XHJcbiAgICBpZih2YXJpYWJsZS5tb3ZpbmdTdGFydCA9PSB0cnVlKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGVvcGxlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwZW9wbGVzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGlmKHBlb3BsZXNbaV0uaW5mZWN0aW9uID09IHRydWUgJiYgcGVvcGxlc1tqXS5pbmZlY3Rpb24gPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAxeCA9IHBlb3BsZXNbaV0ucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMXkgPSBwZW9wbGVzW2ldLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDJ4ID0gcGVvcGxlc1tqXS5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAyeSA9IHBlb3BsZXNbal0ucG9zaXRpb24ueTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBNYXRoLnNxcnQoTWF0aC5wb3cocDF4IC0gcDJ4LCAyKSArIE1hdGgucG93KHAxeSAtIHAyeSwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA8IDAuMDAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyKHBlb3BsZXNbal0uZmF0YWxpdHlSYXRlLCBwZW9wbGVzW2pdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGVyKG46IG51bWJlciwgcGVvOiBQZXJzb24pe1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgbGV0IG51bSA9IG4vMTAwO1xyXG4gICAgaWYocmFuZCA8PSBudW0pe1xyXG4gICAgICAgIHBlby5jaGFuZ2VDb2xvcigpO1xyXG4gICAgICAgIE51bU9mUGVvcGxlLkluZmVjdGlvdXMrKztcclxuICAgICAgICBOdW1PZlBlb3BsZS53aG9sZVBlci0tO1xyXG4gICAgICAgIG51bVBzaG93KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZ1biB9IiwiaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tICdjaGFydC5qcydcclxuaW1wb3J0IHsgbWVudUJ0bl9jbGljaywgdmFyaWFibGUsIHRpbWVfREhTIH0gZnJvbSAnLi92YXJpYWJsZSdcclxuaW1wb3J0IHsgTnVtT2ZQZW9wbGUsIGxpbmVEaXYsIGxpbmVHcmFwaCwgbGluZUdyYXBoX2J0biwgc2F2ZV9idG4gfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgc2V0dGluZyB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbkNoYXJ0LnJlZ2lzdGVyKC4uLnJlZ2lzdGVyYWJsZXMpO1xyXG5jb25zdCBhcnIgPSBbJ3dob2xlUGVyJywgJ0luZmVjdGlvdXMnLCAnUmVzaXN0ZW50J107XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICBjb25zdCBsaW5lQyA9IG5ldyBDaGFydChsaW5lR3JhcGgsIHtcclxuICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoOTksIDI1NSwgMTMyLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg5OSwgMjU1LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgdGVuc2lvbjogMC40XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnSScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgdGVuc2lvbjogMC40XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgdGVuc2lvbjogMC40XHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBOdW1PZlBlb3BsZS53aG9sZVBlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgcG9pbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRlcmFjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGxpbmVDLmhpZGUoMCk7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgbjpudW1iZXIgPSBudWxsO1xyXG4gICAgbGV0IHNuZCA9IDA7XHJcbiAgICBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgIG4gPSB0aW1lX0RIUy5taW4gJSAxMDtcclxuICAgICAgICBpZihuID09IDAgJiYgc25kICE9PSBNYXRoLmZsb29yKHRpbWVfREhTLm1pbiAvIDEwKSl7XHJcbiAgICAgICAgICAgIHNuZCA9IE1hdGguZmxvb3IodGltZV9ESFMubWluIC8gMTApO1xyXG4gICAgICAgICAgICB1cGRhdGVDaGFydChsaW5lQylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWVudUJ0bl9jbGljay5tYWluID09IGZhbHNlKXtcclxuICAgICAgICAgICAgbGluZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBsaW5lQy5oaWRlKDApXHJcbiAgICAgICAgICAgIG1lbnVCdG5fY2xpY2subGluZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDYwKVxyXG5cclxuICAgIGxpbmVHcmFwaF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKG1lbnVCdG5fY2xpY2subGluZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGxpbmVEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGxpbmVEaXYuc3R5bGUuekluZGV4ID0gbGluZURpdi5zdHlsZS56SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBsaW5lQy5zaG93KDApXHJcbiAgICAgICAgICAgIG1lbnVCdG5fY2xpY2suYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1lbnVCdG5fY2xpY2subGluZSA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxpbmVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgbGluZUMuaGlkZSgwKVxyXG4gICAgICAgICAgICBsaW5lRGl2LnN0eWxlLnpJbmRleCA9ICcxNTAnO1xyXG4gICAgICAgICAgICBtZW51QnRuX2NsaWNrLmxpbmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKG1lbnVCdG5fY2xpY2subWFpbiA9PSB0cnVlKXtcclxuICAgICAgICBsaW5lRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbGluZUMuaGlkZSgwKVxyXG4gICAgICAgIGxpbmVEaXYuc3R5bGUuekluZGV4ID0gJzE1MCc7XHJcbiAgICAgICAgbWVudUJ0bl9jbGljay5saW5lID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0KGNoYXJ0OiBDaGFydDxcImxpbmVcIiwgbnVtYmVyW10sIHN0cmluZz4pIHtcclxuICAgICAgICBjaGFydC5kYXRhLmxhYmVscy5wdXNoKGBUJHtpKyt9YCk7XHJcbiAgICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0cy5mb3JFYWNoKChkYXRhc2V0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhc2V0LmRhdGEucHVzaChOdW1PZlBlb3BsZVthcnJbaW5kZXhdXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2hhcnQudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSB3bGREYXRhID0ge1xyXG4gICAgICAgIHdsZG5hbWU6IHN0cmluZztcclxuICAgICAgICBwb3B1bGF0aW9uOiBudW1iZXI7XHJcbiAgICAgICAgbGluZUdyYXBoOiBDaGFydDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgd29ybGREYXRhOndsZERhdGFbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgd29ybGROdW1iZXIgPSAxO1xyXG4gICAgXHJcbiAgICBzYXZlX2J0bi5vbmNsaWNrID0gKCkgPT57XHJcbiAgICAgICAgd29ybGREYXRhW3dvcmxkTnVtYmVyXSA9IHtcclxuICAgICAgICAgICAgd2xkbmFtZTogc2V0dGluZy53b3JsZG5hbWUsXHJcbiAgICAgICAgICAgIHBvcHVsYXRpb246IHNldHRpbmcubnAsXHJcbiAgICAgICAgICAgIGxpbmVHcmFwaDogbGluZUNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cod29ybGREYXRhW3dvcmxkTnVtYmVyXSlcclxuICAgICAgICB3b3JsZE51bWJlcisrO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9tYWluLmNzcydcclxuaW1wb3J0IHsgaW5pdCBhcyDsp4Drj4TshKTsoJUgfSBmcm9tICcuL3NldHRpbmdfbWFwJ1xyXG5pbXBvcnQgeyBpbml0IGFzIOyViOyCsOuylOychCB9IGZyb20gJy4vYW5zYW5SYW5nZSdcclxuaW1wb3J0IHsgaW5pdCBhcyBodG1s7JWg64uI66mU7J207IWYIH0gZnJvbSAnLi9zaWRlX21lbnUnXHJcbmltcG9ydCB7IGluaXQgYXMg7JuA7KeBIH0gZnJvbSAnLi9tb3ZpbmdfcGVvcGxlJ1xyXG5pbXBvcnQgeyBpbml0IGFzIOqwkOyXvOuylOychCB9IGZyb20gJy4vaW5mZWNfcmFuZ2UnXHJcbmltcG9ydCB7IGluaXQgYXMgdGltZWJveCB9IGZyb20gJy4vdGltZUJveCdcclxuaW1wb3J0IHsgaW5pdCBhcyBwbGF5ZXJMb2NhdGlvbiB9IGZyb20gJy4vcGxheWVyX2xvY2F0aW9uJ1xyXG5pbXBvcnQgeyBpbml0IGFzIOyLnOqwhOqwgOyGjSB9IGZyb20gJy4vdGltZV9BQ0MnXHJcbmltcG9ydCB7IGluaXQgYXMg66eJ64yAIH0gZnJvbSAnLi9iYXJHcmFwaCdcclxuaW1wb3J0IHsgaW5pdCBhcyDshKAgfSBmcm9tICcuL2xpbmVHcmFwaCdcclxuaW1wb3J0IHsgaW5pdCBhcyByb2FkcG9pbnQgfSBmcm9tICcuL3JvYWRQb2ludCdcclxuaW1wb3J0IHsgaW5pdCBhcyBob3NwaXRhbCB9IGZyb20gJy4vaG9zcGl0YWxfZGF0YSdcclxuXHJcbi8vIGltcG9ydCB7IGluaXQgYXMg7J6E7Iuc7IKs656MIH0gZnJvbSAnLi/snoTsi5zsgqzrnownXHJcbmltcG9ydCB7IE51bU9mUGVvcGxlIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IHNldHRpbmdUeXBlIH0gZnJvbSAnLi9pbmRleCdcclxuZXhwb3J0IGNvbnN0IHdvcmxkX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ybGRfbmFtZScpO1xyXG5leHBvcnQgbGV0IHNldHRpbmc6c2V0dGluZ1R5cGUgPSB7XHJcbiAgICB3b3JsZG5hbWU6IG51bGwsXHJcbiAgICBucDogbnVsbCxcclxuICAgIGluZmVjUDogbnVsbCxcclxuICAgIGhvc3BpdGFsU3lzdGVtOiBudWxsXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8gY29uc29sZS5sb2coTnVtT2ZQZW9wbGUud2hvbGVQZXIsIHdvcmxkX25hbWUuaW5uZXJIVE1MLCBOdW1PZlBlb3BsZS5JbmZlY3Rpb3VzLCBzZXR0aW5nLmhvc3BpdGFsU3lzdGVtKVxyXG4gICAgc2V0dGluZyA9IEpTT04ucGFyc2UobmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldCgnanNvbicpKTtcclxuICAgIGNvbnNvbGUubG9nKHNldHRpbmcud29ybGRuYW1lLCBzZXR0aW5nLm5wLCBzZXR0aW5nLmluZmVjUCwgc2V0dGluZy5ob3NwaXRhbFN5c3RlbSlcclxuXHJcbiAgICBOdW1PZlBlb3BsZS53aG9sZVBlciA9IHNldHRpbmcubnA7XHJcbiAgICB3b3JsZF9uYW1lLmlubmVySFRNTCA9IHNldHRpbmcud29ybGRuYW1lO1xyXG4gICAgTnVtT2ZQZW9wbGUuSW5mZWN0aW91cyA9IHNldHRpbmcuaW5mZWNQO1xyXG5cclxuICAgIGNvbnN0IHsgbWFwIH0gPSDsp4Drj4TshKTsoJUoKVxyXG4gICAg7JWI7IKw67KU7JyEKG1hcClcclxuICAgIGhvc3BpdGFsKG1hcClcclxuICAgIGF3YWl0IHJvYWRwb2ludCgpXHJcbiAgICBodG1s7JWg64uI66mU7J207IWYKClcclxuICAgIOybgOyngShtYXApXHJcbiAgICAvLyDsnoTsi5zsgqzrnowobWFwKVxyXG4gICAg6rCQ7Je867KU7JyEKClcclxuICAgIHRpbWVib3goKVxyXG4gICAgcGxheWVyTG9jYXRpb24oKVxyXG4gICAg7Iuc6rCE6rCA7IaNKClcclxuICAgIOunieuMgCgpXHJcbiAgICDshKAoKVxyXG59XHJcblxyXG5pbml0KCkiLCJpbXBvcnQgeyBNT1ZFX1BBUkFNUywgTnVtT2ZQZW9wbGUsIHRpbWVzZXQsIHBvbF9Jc29sYXRpb24sIHZpcnVzX2luZmVjdGlvbiwgcG9sX21hc2sgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9wZXJzb24nXHJcbmltcG9ydCB7IG1vdmVPcHRzLCBwZW9wbGVzLCB2YXJpYWJsZSB9IGZyb20gJy4vdmFyaWFibGUnXHJcbmltcG9ydCB7IG51bVBzaG93IH0gZnJvbSAnLi9vdXRwdXRfbk9wJ1xyXG5pbXBvcnQgeyBmdW4gfSBmcm9tICcuL2luZmVjX3JhbmdlJztcclxuaW1wb3J0IHsgc2V0dGluZyB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5sZXQgY3VycmVudFBlb3BsZTogUGVyc29uID0gbnVsbDtcclxubGV0IHNldFBlb3BsZSA9IG51bGw7XHJcbmxldCBzZXRQZW9wbGVQb3NpdGlvbiA9IG51bGw7XHJcbmxldCBpbmZlY19wZW8gPSBmYWxzZTtcclxubGV0IG1hcDoga2FrYW8ubWFwcy5NYXAgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoX21hcDoga2FrYW8ubWFwcy5NYXApe1xyXG4gICAgbWFwID0gX21hcFxyXG4gICAgY29uc29sZS5sb2coc2V0dGluZy5ob3NwaXRhbFN5c3RlbSlcclxuICAgIFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IE51bU9mUGVvcGxlLndob2xlUGVyOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHBlcnNvbiA9IG5ldyBQZXJzb24obWFwKVxyXG4gICAgICAgIHBlb3BsZXMucHVzaChwZXJzb24pXHJcbiAgICAgICAga2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihwZXJzb24uY2lyY2xlLCAnY2xpY2snLCBmdW5jdGlvbihtb3VzZUV2ZW50KXtcclxuICAgICAgICAgICAgY3VycmVudFBlb3BsZSA9IHBlcnNvbjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBlb3BsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHBlb3BsZSA9IHBlb3BsZXNbaV07XHJcbiAgICAgICAgcGVvcGxlLmZpbmRtb3ZlKCk7XHJcbiAgICAgICAgaWYoc2V0dGluZy5ob3NwaXRhbFN5c3RlbSl7XHJcbiAgICAgICAgICAgIHBlb3BsZS5jaGVja2VkSW5mZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrs5Hsm5Ag7Zmc7ISx7ZmUJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IE51bU9mUGVvcGxlLkluZmVjdGlvdXM7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgcGVvcGxlID0gcGVvcGxlc1tpXVxyXG4gICAgICAgIHBlb3BsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIHBlb3BsZS5pbmZlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHBlb3BsZS5jaXJjbGUuc2V0T3B0aW9ucyh7IGZpbGxDb2xvcjogJ3JlZCcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbnVtUHNob3coKTtcclxuICAgIFxyXG4gICAgd2luZG93Lm9ua2V5dXAgPSAoZTogeyBrZXlDb2RlOiBudW1iZXI7IH0pID0+e1xyXG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAzMil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzcGFjZWJhcicpXHJcbiAgICAgICAgICAgIGlmKHRpbWVzZXQuaW5uZXJIVE1MID09ICdJSScpe1xyXG4gICAgICAgICAgICAgICAgdGltZXNldC5pbm5lckhUTUwgPSAn4pa2JztcclxuICAgICAgICAgICAgICAgIHRpbWVzZXQuc3R5bGUubGluZUhlaWdodCA9ICdub3JtYWwnO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGUubW92aW5nU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aW1lc2V0LmlubmVySFRNTCA9ICdJSSc7XHJcbiAgICAgICAgICAgICAgICB0aW1lc2V0LnN0eWxlLmxpbmVIZWlnaHQgPSAnMjVweCc7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZS5tb3ZpbmdTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RlcCgpO1xyXG5cclxuICAgIHZpcnVzX2luZmVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY3VycmVudFBlb3BsZSAhPSBudWxsICYmIGN1cnJlbnRQZW9wbGUuY29sb3IgPT0gJ2dyZWVuJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UhJylcclxuICAgICAgICAgICAgY3VycmVudFBlb3BsZS5jaGFuZ2VDb2xvcigpO1xyXG4gICAgICAgICAgICBOdW1PZlBlb3BsZS5JbmZlY3Rpb3VzKys7XHJcbiAgICAgICAgICAgIE51bU9mUGVvcGxlLndob2xlUGVyLS07XHJcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFBlb3BsZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRQZW9wbGUgaXMgbnVsbCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcG9sX21hc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwZW9wbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc3QgcGVvcGxlID0gcGVvcGxlc1tpXTtcclxuICAgICAgICAgICAgcGVvcGxlLldlYXJBTWFzdF90b2dnbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHBvbF9Jc29sYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwZW9wbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgY29uc3QgcGVvcGxlID0gcGVvcGxlc1tpXTtcclxuICAgIC8vICAgICAgICAgcGVvcGxlLmhvc3BpdGFsX3RvZ2dsZSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnaG9zcGl0YWwnKTtcclxuICAgIC8vIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlMkNsaWNrZWRQbGFjZV9iZWZvcmUoYXJyTmFtZTogbnVtYmVyLCBhcnJpdmVMb2NhdGlvbjoga2FrYW8ubWFwcy5MYXRMbmcpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBlb3BsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHBlb3BsZSA9IHBlb3BsZXNbaV07XHJcbiAgICAgICAgaWYocGVvcGxlLnBlcl9jbGljayl7XHJcbiAgICAgICAgICAgIHBlb3BsZS5tb3ZlMkNsaWNrZWRQbGFjZShhcnJOYW1lLCBhcnJpdmVMb2NhdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gc3RlcCgpe1xyXG4vLyAgICAgLy8g7ZSM66CI7J20IHcsYSxzLGRcclxuLy8gICAgIC8vIGNvbnN0IHAgPSBNT1ZFX1BBUkFNU1ttb3ZlT3B0cy5rZXldO1xyXG4vLyAgICAgLy8gaWYocCAhPSBudWxsICYmIGN1cnJlbnRQZW9wbGUgIT0gbnVsbCl7XHJcbi8vICAgICAvLyAgICAgaWYoK21vdmVPcHRzLmQgKyA1MDAgPCArbmV3IERhdGUoKSl7XHJcbi8vICAgICAvLyAgICAgICAgIGN1cnJlbnRQZW9wbGUucG9zaXRpb24ueCArPSBwLnZ5O1xyXG4vLyAgICAgLy8gICAgICAgICBjdXJyZW50UGVvcGxlLnBvc2l0aW9uLnkgKz0gcC52eDtcclxuXHJcbi8vICAgICAvLyAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IG5ldyBrYWthby5tYXBzLkxhdExuZyhjdXJyZW50UGVvcGxlLnBvc2l0aW9uLnksIGN1cnJlbnRQZW9wbGUucG9zaXRpb24ueClcclxuLy8gICAgIC8vICAgICAgICAgY3VycmVudFBlb3BsZS5jaXJjbGUuc2V0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uKTtcclxuLy8gICAgIC8vICAgICAgICAgbWFwLnNldENlbnRlcihjdXJyZW50UG9zaXRpb24pO1xyXG4vLyAgICAgLy8gICAgIH1cclxuLy8gICAgIC8vIH1cclxuICAgIFxyXG4gICAgXHJcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcClcclxuLy8gfSIsImltcG9ydCB7IE51bU9mUGVvcGxlIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG5jb25zdCBTX3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignI1Nfc2hvdycpO1xyXG5jb25zdCBJX3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignI0lfc2hvdycpO1xyXG5jb25zdCBSX3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignI1Jfc2hvdycpO1xyXG5jb25zdCBEX3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignI0Rfc2hvdycpO1xyXG5cclxuZnVuY3Rpb24gbnVtUHNob3coKXtcclxuICAgIFNfc2hvdy5pbm5lckhUTUwgPSBgJHtOdW1PZlBlb3BsZS53aG9sZVBlcn1gO1xyXG4gICAgSV9zaG93LmlubmVySFRNTCA9IGAke051bU9mUGVvcGxlLkluZmVjdGlvdXN9YDtcclxuICAgIFJfc2hvdy5pbm5lckhUTUwgPSBgJHtOdW1PZlBlb3BsZS5SZWNvdmVyZWR9YDtcclxuICAgIERfc2hvdy5pbm5lckhUTUwgPSBgJHtOdW1PZlBlb3BsZS5kZWFkUGVyfWA7XHJcbn1cclxuXHJcbmV4cG9ydHsgbnVtUHNob3cgfSIsImltcG9ydCB7IFBlb3BsZSB9IGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7IE51bU9mUGVvcGxlLCBwb2xfbWFzaywgdGltZVNwZWVkIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IHZhcmlhYmxlLCBtb3ZlT3B0cyB9IGZyb20gJy4vdmFyaWFibGUnXHJcbmltcG9ydCB7IHBvaW50RGF0YSwgbGluZURhdGEgfSBmcm9tICcuL3JvYWRQb2ludCdcclxuaW1wb3J0IHsgUF9pbmYgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE5vZGVCdWlsZGVyRmxhZ3MgfSBmcm9tICd0eXBlc2NyaXB0JztcclxuaW1wb3J0IHsgZnVuIH0gZnJvbSAnLi9pbmZlY19yYW5nZSdcclxuaW1wb3J0IHsgaG9zcGl0YWxfZGF0YSB9IGZyb20gJy4vaG9zcGl0YWxfZGF0YSc7XHJcbmltcG9ydCB7IHNldHRpbmcgfSBmcm9tICcuL21haW4nO1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgX3Blcl9jbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5leHBvcnQgbGV0IF9wZXJfYXJyaXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG50eXBlIHBkID0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGF0bG5nOiBrYWthby5tYXBzLkxhdExuZztcclxuICAgIGxpbmVzOiBudW1iZXJbXTtcclxufVxyXG50eXBlIGxkID0ge1xyXG4gICAgcm9hZF9pZDogbnVtYmVyO1xyXG4gICAgbGluZVBhdGg6IGtha2FvLm1hcHMuTGF0TG5nW107XHJcbiAgICBwb2ludHM6IG51bWJlcltdO1xyXG59XHJcbnR5cGUgaGVhcFQgPSB7XHJcbiAgICBkYXRhOiBudW1iZXI7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgcHJlOiBudW1iZXI7XHJcbn1cclxudHlwZSByZCA9IHtcclxuICAgIGxvY051bTogbnVtYmVyO1xyXG4gICAgY2xjOiBrYWthby5tYXBzLkNpcmNsZTtcclxuICAgIGxpbmVOdW06IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgSGVhcDxUIGV4dGVuZHMgeyBzY29yZTogbnVtYmVyIH0+e1xyXG4gICAgYXJyID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgcHVzaChkYXRhOiBUKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5hcnI7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kKGFyciwgMCwgYXJyLmxlbmd0aCAtIDEsIGRhdGEuc2NvcmUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGluZGV4LCAwLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3AoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLnNoaWZ0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbmQoYXJyOiBUW10sIGxlZnQgPSAwLCByaWdodCA9IC0xLCBzY29yZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAocmlnaHQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gYXJyLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyaWdodCAtIGxlZnQgPD0gMSkge1xyXG4gICAgICAgICAgICBpZiAoYXJyW3JpZ2h0XS5zY29yZSA8PSBzY29yZSkgcmV0dXJuIHJpZ2h0ICsgMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYXJyW2xlZnRdLnNjb3JlIDw9IHNjb3JlKSByZXR1cm4gbGVmdCArIDE7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcclxuICAgICAgICBpZiAoYXJyW21pZF0uc2NvcmUgPD0gc2NvcmUpIGxlZnQgPSBtaWQ7XHJcbiAgICAgICAgZWxzZSByaWdodCA9IG1pZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kKGFyciwgbGVmdCwgcmlnaHQsIHNjb3JlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBzcGVlZF8gPSA1MDAwMDtcclxuZXhwb3J0IGNsYXNzIFBlcnNvbiBpbXBsZW1lbnRzIFBlb3BsZSB7XHJcbiAgICBjaXJjbGU6IGtha2FvLm1hcHMuQ2lyY2xlO1xyXG4gICAgcG9zaXRpb246IFBlb3BsZVtcInBvc2l0aW9uXCJdO1xyXG4gICAgY29sb3I6IFBlb3BsZVtcImNvbG9yXCJdO1xyXG4gICAgaW5mZWN0aW9uOiBQZW9wbGVbXCJpbmZlY3Rpb25cIl07XHJcbiAgICBkaWU6IFBlb3BsZVtcImRpZVwiXTtcclxuICAgIGZhdGFsaXR5UmF0ZTogUGVvcGxlWydmYXRhbGl0eVJhdGUnXTtcclxuICAgIGxvY051bTogUGVvcGxlWydsb2NOdW0nXTtcclxuICAgIHBlcl9jbGljazogUGVvcGxlWydwZXJfY2xpY2snXTtcclxuICAgIHBlcl9hcnJpdmU6IFBlb3BsZVsncGVyX2Fycml2ZSddO1xyXG4gICAgbGluZU51bTogUGVvcGxlWydsaW5lTnVtJ107XHJcbiAgICBuZXhOdW06IFBlb3BsZVsnbmV4TnVtJ107XHJcbiAgICBtYXNrOiBQZW9wbGVbJ21hc2snXTtcclxuICAgIGdvVG9Ib3NwaXRhbF86IFBlb3BsZVsnZ29Ub0hvc3BpdGFsXyddO1xyXG4gICAgaHZUb0dvSG9zcGl0YWw6IFBlb3BsZVsnaHZUb0dvSG9zcGl0YWwnXTtcclxuICAgIG5lYXJlc3RIb3NwaXRhbDogUGVvcGxlWyduZWFyZXN0SG9zcGl0YWwnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IGtha2FvLm1hcHMuTWFwKSB7XHJcbiAgICAgICAgbGV0IGxvYzogbnVtYmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgcmFuZExvY2F0aW9uOiBrYWthby5tYXBzLkxhdExuZyA9IG51bGw7XHJcbiAgICAgICAgbG9jID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9pbnREYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgcmFuZExvY2F0aW9uID0gcG9pbnREYXRhW2xvY10ubGF0bG5nO1xyXG5cclxuICAgICAgICB0aGlzLmNpcmNsZSA9IG5ldyBrYWthby5tYXBzLkNpcmNsZSh7XHJcbiAgICAgICAgICAgIGNlbnRlcjogcmFuZExvY2F0aW9uLCAvLyDsm5DsnZgg7KSR7Ius7KKM7ZGcXHJcbiAgICAgICAgICAgIHJhZGl1czogNSwgLy8g66+47YSwIOuLqOychOydmCDsm5DsnZgg67CY7KeA66aEXHJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAsIC8vIOyEoOydmCDrtojtiKzrqoXrj4QgMeyXkOyEnCAwIOyCrOydtOydmCDqsJLsnbTrqbAgMOyXkCDqsIDquYzsmrjsiJjroZ0g7Yis66qFXHJcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJ2dyZWVuJywgLy8g7LGE7Jqw6riwIOyDieq5lFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMSwgIC8vIOyxhOyasOq4sCDrtojtiKzrqoXrj4RcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAga2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLmNpcmNsZSwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIV9wZXJfY2xpY2spIHtcclxuICAgICAgICAgICAgICAgIF9wZXJfY2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJfY2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUuc2V0UmFkaXVzKDE1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgUF9pbmYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIFBfaW5mLmlubmVySFRNTCA9IGB4OiAke3RoaXMucG9zaXRpb24ueH08YnI+eTogJHt0aGlzLnBvc2l0aW9uLnl9PGJyPmluZmVjdGlvbjogJHt0aGlzLmluZmVjdGlvbn1gO1xyXG4gICAgICAgICAgICBQX2luZi5zdHlsZS5maWx0ZXIgPSAnb3BhY2l0eSgxMDAlKSc7XHJcbiAgICAgICAgICAgIFBfaW5mLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuM3MnO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFBfaW5mLnN0eWxlLmZpbHRlciA9ICdvcGFjaXR5KDAlKSc7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBQX2luZi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIFBfaW5mLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDBzJztcclxuICAgICAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09ICdFc2NhcGUnICYmIHRoaXMucGVyX2NsaWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlLnNldFJhZGl1cyg1KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcl9hcnJpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcl9jbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9wZXJfY2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlT3B0cy5jaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZG1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcl9hcnJpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5odlRvR29Ib3NwaXRhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrs5Hsm5AnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZG1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyX2NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGVyX2NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlT3B0cy5jaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNjApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNpcmNsZS5zZXRNYXAobWFwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogcmFuZExvY2F0aW9uLmdldExuZygpLCB5OiByYW5kTG9jYXRpb24uZ2V0TGF0KCkgfTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICB0aGlzLmluZmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmF0YWxpdHlSYXRlID0gMTA7XHJcbiAgICAgICAgdGhpcy5kaWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvY051bSA9IGxvYztcclxuICAgICAgICB0aGlzLnBlcl9jbGljayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGVyX2Fycml2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGluZU51bSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXhOdW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWFzayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ29Ub0hvc3BpdGFsXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaHZUb0dvSG9zcGl0YWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5lYXJlc3RIb3NwaXRhbCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvbG9yKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbG9yID09ICdncmVlbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGUuc2V0T3B0aW9ucyh7IGZpbGxDb2xvcjogJ3JlZCcgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSAncmVkJztcclxuICAgICAgICAgICAgaWYgKHNldHRpbmcuaG9zcGl0YWxTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHZUb0dvSG9zcGl0YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5mZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgV2VhckFNYXN0X3RvZ2dsZSgpIHtcclxuICAgICAgICBpZiAocG9sX21hc2suY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZS5zZXRPcHRpb25zKHsgc3Ryb2tlT3BhY2l0eTogMTAwIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmZhdGFsaXR5UmF0ZSA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMubWFzayA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGUuc2V0T3B0aW9ucyh7IHN0cm9rZU9wYWNpdHk6IDAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmF0YWxpdHlSYXRlID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMubWFzayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBob3NwaXRhbF90b2dnbGUoKXtcclxuICAgIC8vICAgICBpZih0aGlzLmdvVG9Ib3NwaXRhbF8pe1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdvVG9Ib3NwaXRhbF8gPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5odlRvR29Ib3NwaXRhbCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICBpZih0aGlzLmluZmVjdGlvbil7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmh2VG9Hb0hvc3BpdGFsID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmNoZWNrZWRJbmZlY3Rpb24oKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5nb1RvSG9zcGl0YWxfID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ29Ub0hvc3BpdGFsKGFycml2ZUxvY2F0aW9uOiBrYWthby5tYXBzLkxhdExuZywgYXJyaXZlUG9pbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW92ZTJDbGlja2VkUGxhY2UoYXJyaXZlUG9pbnQsIGFycml2ZUxvY2F0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja2VkSW5mZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGEgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcl9jbGljaykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wZXJfYXJyaXZlLCBfcGVyX2Fycml2ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbmZlY3Rpb24gJiYgdGhpcy5wZXJfYXJyaXZlICYmIF9wZXJfYXJyaXZlICYmICF0aGlzLnBlcl9jbGljaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyID0gKG46IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gbiAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZCA8PSBudW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvc3BpdGFsX2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvc3BpdGFsX2VudHJhbmNlID0gaG9zcGl0YWxfZGF0YVtpXS5lbnRyYW5jZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvYWx4ID0gcG9pbnREYXRhW2hvc3BpdGFsX2VudHJhbmNlXS5sYXRsbmcuZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnb2FseSA9IHBvaW50RGF0YVtob3NwaXRhbF9lbnRyYW5jZV0ubGF0bG5nLmdldExuZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93WCA9IHRoaXMuY2lyY2xlLmdldFBvc2l0aW9uKCkuZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dZID0gdGhpcy5jaXJjbGUuZ2V0UG9zaXRpb24oKS5nZXRMbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aEZyb21TdGFydFRvRmluaXNoID0gKChub3dYIC0gZ29hbHgpICoqIDIgKyAobm93WSAtIGdvYWx5KSAqKiAyKSAqKiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RIb3NwaXRhbC5wdXNoKHsgZGlzdGFuY2U6IGxlbmd0aEZyb21TdGFydFRvRmluaXNoLCBlbnRyYW5jZTogaG9zcGl0YWxfZW50cmFuY2UsIGhvc3BpdGFsTnVtYmVyOiBpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdEhvc3BpdGFsLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5lYXJlc3RIb3NwaXRhbFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5leE51bSA9PSB0aGlzLm5lYXJlc3RIb3NwaXRhbFswXS5lbnRyYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWFyYW50aW5lSW5Ib3NwaXRhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0hvc3BpdGFsKHBvaW50RGF0YVt0aGlzLm5lYXJlc3RIb3NwaXRhbFswXS5lbnRyYW5jZV0ubGF0bG5nLCB0aGlzLm5lYXJlc3RIb3NwaXRhbFswXS5lbnRyYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm9wZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGVyKDUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDYwKVxyXG4gICAgfVxyXG5cclxuICAgIHF1YXJhbnRpbmVJbkhvc3BpdGFsKCkge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlLnNldE9wdGlvbnMoeyBmaWxsT3BhY2l0eTogMCB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5lYXJlc3RIb3NwaXRhbClcclxuICAgICAgICBob3NwaXRhbF9kYXRhW3RoaXMubmVhcmVzdEhvc3BpdGFsWzBdLmhvc3BpdGFsTnVtYmVyXS5lbnRlcmVkUGVvcGxlKys7XHJcbiAgICAgICAgY29uc3QgbWF4VGltZSA9IDE1O1xyXG4gICAgICAgIGNvbnN0IG1pblRpbWUgPSAxMDtcclxuICAgICAgICBsZXQgcXVhcmFudGluZVRpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4VGltZSAtIG1pblRpbWUgKyAxKSkgKyBtaW5UaW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGDtmozrs7Xsi5zqsIQ6ICR7cXVhcmFudGluZVRpbWV9YClcclxuICAgICAgICBsZXQgYSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgcXVhcmFudGluZVRpbWUtLTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocXVhcmFudGluZVRpbWUpXHJcbiAgICAgICAgICAgIGlmIChxdWFyYW50aW5lVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZS5zZXRPcHRpb25zKHsgZmlsbE9wYWNpdHk6IDEwMCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlLnNldE9wdGlvbnMoeyBmaWxsQ29sb3I6ICdncmVlbicgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZmF0YWxpdHlSYXRlID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jTnVtID0gdGhpcy5uZWFyZXN0SG9zcGl0YWxbMF0uZW50cmFuY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9Ib3NwaXRhbF8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHZUb0dvSG9zcGl0YWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubmVhcmVzdEhvc3BpdGFsWzBdLmVudHJhbmNlKVxyXG4gICAgICAgICAgICAgICAgaG9zcGl0YWxfZGF0YVt0aGlzLm5lYXJlc3RIb3NwaXRhbFswXS5ob3NwaXRhbE51bWJlcl0uZW50ZXJlZFBlb3BsZS0tO1xyXG4gICAgICAgICAgICAgICAgTnVtT2ZQZW9wbGUuUmVjb3ZlcmVkKys7XHJcbiAgICAgICAgICAgICAgICBOdW1PZlBlb3BsZS5JbmZlY3Rpb3VzLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmRtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBkZWF0aCgpIHtcclxuICAgICAgICB0aGlzLmNpcmNsZS5zZXRPcHRpb25zKHsgZmlsbENvbG9yOiAnZ3JheScgfSk7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdncmF5JztcclxuICAgICAgICB0aGlzLmRpZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0b01vdmluZyhjaXJjbGU6IGtha2FvLm1hcHMuQ2lyY2xlLCBzcGVlZDogbnVtYmVyLCBsaW5lSWQ6IG51bWJlciwgZnJvbToga2FrYW8ubWFwcy5MYXRMbmcpIHtcclxuICAgICAgICBjb25zdCBmb2xsb3dSb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBuOiAxIHwgLTEgPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBmeCA9IGZyb20uZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ5ID0gZnJvbS5nZXRMbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgZmxfeCA9IGxpbmVEYXRhW2xpbmVJZF0ubGluZVBhdGhbaV0uZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZsX3kgPSBsaW5lRGF0YVtsaW5lSWRdLmxpbmVQYXRoW2ldLmdldExuZygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSAoKChmeCAtIGZsX3gpICoqIDIgKyAoZnkgLSBmbF95KSAqKiAyKSAqKiAwLjUpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChuID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA+PSBsaW5lRGF0YVtsaW5lSWRdLmxpbmVQYXRoLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpIDw9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA8PSAwLjAwMDIpIHtcclxuICAgICAgICAgICAgICAgIGkgPSAwXHJcbiAgICAgICAgICAgICAgICBuID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGkgPSBsaW5lRGF0YVtsaW5lSWRdLmxpbmVQYXRoLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBuID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbW92aW5nMXJvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGUubW92aW5nU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV4ID0gbGluZURhdGFbbGluZUlkXS5saW5lUGF0aFtpXS5nZXRMbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV5ID0gbGluZURhdGFbbGluZUlkXS5saW5lUGF0aFtpXS5nZXRMYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh4ID0gbGluZURhdGFbbGluZUlkXS5saW5lUGF0aFtpICsgbl0uZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4eSA9IGxpbmVEYXRhW2xpbmVJZF0ubGluZVBhdGhbaSArIG5dLmdldExhdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSAoKG5leHggLSBwcmV4KSAqKiAyICsgKG5leHkgLSBwcmV5KSAqKiAyKSAqKiAwLjUgKiBzcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBYID0gKGluZGV4ICogbmV4eCArIChkaXN0IC0gaW5kZXgpICogcHJleCkgLyBkaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFkgPSAoaW5kZXggKiBuZXh5ICsgKGRpc3QgLSBpbmRleCkgKiBwcmV5KSAvIGRpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcga2FrYW8ubWFwcy5MYXRMbmcoWSwgWCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gcG9zaXRpb24uZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcG9zaXRpb24uZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBkaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSBuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJfYXJyaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucGVyX2NsaWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGVyX2Fycml2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaHZUb0dvSG9zcGl0YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3Zpbmcxcm9hZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG1vdmluZzFyb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvbGxvd1JvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnBlcl9hcnJpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJvbSA9IHBvaW50RGF0YVt0aGlzLmxvY051bV07IC8vIHN0YXJ0IHBvaW50XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gZnJvbS5saW5lcy5jb25jYXQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGluZXMubGVuZ3RoIC0gaSkpICsgaTtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gbGluZXNbaV07XHJcbiAgICAgICAgICAgIGxpbmVzW2ldID0gbGluZXNbdGVtcF07XHJcbiAgICAgICAgICAgIGxpbmVzW3RlbXBdID0gdmFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVOdW0gPSBpO1xyXG4gICAgICAgICAgICBjb25zdCBwaWNrcyA9IGxpbmVEYXRhW3RoaXMubGluZU51bV0ucG9pbnRzLmZpbHRlcih2ID0+IHYgIT09IHRoaXMubG9jTnVtKTsgLy8g7Iuc7J6R7KCQIOuwmOuMgCBwb2ludHNcclxuICAgICAgICAgICAgaWYgKCFwaWNrcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubmV4TnVtID0gcGlja3NbTWF0aC5mbG9vcihwaWNrcy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07IC8vIOuPhOywqe2VoCBwb2ludCBudW1iZXJcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBzcGVlZF87XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b01vdmluZyh0aGlzLmNpcmNsZSwgc3BlZWQsIHRoaXMubGluZU51bSwgZnJvbS5sYXRsbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY051bSA9IE51bWJlcih0aGlzLm5leE51bSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlMkNsaWNrZWRQbGFjZShhcnJpdmVQb2ludDogbnVtYmVyLCBhcnJpdmVMb2NhdGlvbjoga2FrYW8ubWFwcy5MYXRMbmcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhg7ISg7YOd7KeA7KCQOiAke2Fycml2ZVBvaW50fWApO1xyXG4gICAgICAgIGNvbnN0IG1vdmVTdGFydCA9IChzdGFydFBvaW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZXJfYXJyaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9wZXJfYXJyaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGVzID0gdGhpcy5maW5kUGF0aChzdGFydFBvaW50LCBhcnJpdmVMb2NhdGlvbiwgYXJyaXZlUG9pbnQpO1xyXG4gICAgICAgICAgICBjb25zdCB3YXkgPSBjb2Rlc1swXTtcclxuICAgICAgICAgICAgbGV0IHdheUNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lSWQ6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gc3BlZWRfO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgd2F5OiAke3dheX1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGF1dG9Nb3ZpbmcgPSAoZnJvbToga2FrYW8ubWFwcy5MYXRMbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lSWRDb3VudDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAod2F5Q291bnQ7IHdheUNvdW50IDwgd2F5Lmxlbmd0aCAtIDE7IHdheUNvdW50KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHBvaW50RGF0YVt3YXlbd2F5Q291bnRdXS5saW5lcy5sZW5ndGggLSAxOyBwKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tMaW5lOiBudW1iZXIgPSBwb2ludERhdGFbd2F5W3dheUNvdW50XV0ubGluZXNbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lRGF0YVtjaGVja0xpbmVdLnBvaW50cy5pbmNsdWRlcyh3YXlbd2F5Q291bnRdKSAmJiBsaW5lRGF0YVtjaGVja0xpbmVdLnBvaW50cy5pbmNsdWRlcyh3YXlbd2F5Q291bnQgKyAxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJZC5wdXNoKGNoZWNrTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdheUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBsaW5lSWQ6ICR7bGluZUlkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9sbG93Um9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwb2ludERhdGFbd2F5W3dheUNvdW50XV0pXHJcbiAgICAgICAgICAgICAgICAgICAgd2F5Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbjogMSB8IC0xID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmeCA9IGZyb20uZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnkgPSBmcm9tLmdldExuZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsX3ggPSBsaW5lRGF0YVtsaW5lSWRbbGluZUlkQ291bnRdXS5saW5lUGF0aFtpXS5nZXRMYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbF95ID0gbGluZURhdGFbbGluZUlkW2xpbmVJZENvdW50XV0ubGluZVBhdGhbaV0uZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gKCgoZnggLSBmbF94KSAqKiAyICsgKGZ5IC0gZmxfeSkgKiogMikgKiogMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPj0gbGluZURhdGFbbGluZUlkW2xpbmVJZENvdW50XV0ubGluZVBhdGgubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpIDw9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA8PSAwLjAwMDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6rK97JqwMScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxpbmVEYXRhW2xpbmVJZFtsaW5lSWRDb3VudF1dLmxpbmVQYXRoLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+qyveyasDInKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3Zpbmcxcm9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlLm1vdmluZ1N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV4ID0gbGluZURhdGFbbGluZUlkW2xpbmVJZENvdW50XV0ubGluZVBhdGhbaV0uZ2V0TG5nKCk7IC8v7ZiE7J6sIOyijO2RnCB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV5ID0gbGluZURhdGFbbGluZUlkW2xpbmVJZENvdW50XV0ubGluZVBhdGhbaV0uZ2V0TGF0KCk7IC8v7ZiE7J6sIOyijO2RnCB5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh4ID0gbGluZURhdGFbbGluZUlkW2xpbmVJZENvdW50XV0ubGluZVBhdGhbaSArIG5dLmdldExuZygpOyAvL+uqqe2RnCDsooztkZwgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4eSA9IGxpbmVEYXRhW2xpbmVJZFtsaW5lSWRDb3VudF1dLmxpbmVQYXRoW2kgKyBuXS5nZXRMYXQoKTsgLy/rqqntkZwg7KKM7ZGcIHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSAoKG5leHggLSBwcmV4KSAqKiAyICsgKG5leHkgLSBwcmV5KSAqKiAyKSAqKiAwLjUgKiBzcGVlZDsgLy8g7KCQ6rO8IOygkOyCrOydtCDqsbDrpqzsl5Agc3BlZWTrpbwg6rOxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBYID0gKGluZGV4ICogbmV4eCArIChkaXN0IC0gaW5kZXgpICogcHJleCkgLyBkaXN0OyAvLyAxOjk5LCAyOjk4LCAzOjk3IC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgWSA9IChpbmRleCAqIG5leHkgKyAoZGlzdCAtIGluZGV4KSAqIHByZXkpIC8gZGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IGtha2FvLm1hcHMuTGF0TG5nKFksIFgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJleCwgcHJleSwgbmV4eCwgbmV4eSwgaSwgbiwgaW5kZXgsIGRpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gcG9zaXRpb24uZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi5nZXRMYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChpbmRleCwgZGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gZGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4LCBkaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICs9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHJldHVybiR7bGluZUlkQ291bnR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lSWRDb3VudCA+IGxpbmVJZC5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcl9hcnJpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Blcl9hcnJpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaHZUb0dvSG9zcGl0YWwgJiYgIV9wZXJfY2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1YXJhbnRpbmVJbkhvc3BpdGFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jTnVtID0gYXJyaXZlUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9IHBvaW50RGF0YVt3YXlbd2F5Q291bnRdXS5sYXRsbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dSb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3Zpbmcxcm9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBsaW5lSWRDb3VudDogJHtsaW5lSWRDb3VudH0gKOybgOyngeyehCDsi5zsnpEpYClcclxuICAgICAgICAgICAgICAgICAgICBtb3Zpbmcxcm9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9sbG93Um9hZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF1dG9Nb3ZpbmcocG9pbnREYXRhW3dheVt3YXlDb3VudF1dLmxhdGxuZyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY051bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW92ZVN0YXJ0KHRoaXMubG9jTnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUGF0aChzdGFydFBvaW50OiBudW1iZXIsIGFycml2ZUxvY2F0aW9uOiBrYWthby5tYXBzLkxhdExuZywgYXJyaXZlUG9pbnQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHIgPSBzdGFydFBvaW50O1xyXG5cclxuICAgICAgICBjb25zdCBmaW5kV2F5ID0gKHN0YXJ0OiBoZWFwVCwgZ29hbDogbnVtYmVyKTogW251bWJlcltdLCBNYXA8bnVtYmVyLCBoZWFwVD5dID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeTogTWFwPG51bWJlciwgaGVhcFQ+ID0gbmV3IE1hcDxudW1iZXIsIGhlYXBUPigpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFwID0gbmV3IEhlYXA8aGVhcFQ+KCk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIGhpc3Rvcnkuc2V0KGRhdGEuZGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvYWxMb2NhdGlvbiA9IGFycml2ZUxvY2F0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBnb2FseCA9IGdvYWxMb2NhdGlvbi5nZXRMYXQoKTtcclxuICAgICAgICAgICAgY29uc3QgZ29hbHkgPSBnb2FsTG9jYXRpb24uZ2V0TG5nKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDrj4TssKnsoITquYzsp4BcclxuICAgICAgICAgICAgd2hpbGUgKGdvYWwgIT0gZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UG9pbnRJZCA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb2ludERhdGEgPSBwb2ludERhdGFbY3VycmVudFBvaW50SWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBvaW50Q29ubmVjdGVkTGluZXMgPSBjdXJyZW50UG9pbnREYXRhLmxpbmVzO1xyXG4gICAgICAgICAgICAgICAgLy8g7ZiE7J6sIO2PrOyduO2KuOyXkCDsl7DqsrDrkJwg64uk7J2MIO2PrOyduO2KuOuTpCDspJEg67Cp66y47ZWY7KeAIOyViuydgCBwb2ludOulvCBoZWFw7JeQIOuEo+yWtOykgOuLpC5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluZUlkIG9mIGN1cnJlbnRQb2ludENvbm5lY3RlZExpbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW25leHRQb2ludElkXSA9IGxpbmVEYXRhW2xpbmVJZF0ucG9pbnRzLmZpbHRlcih2ID0+IHYgIT09IGN1cnJlbnRQb2ludElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBvaW50SWQgPT0gbnVsbCB8fCBoaXN0b3J5LmhhcyhuZXh0UG9pbnRJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYodGhpcy5wZXJfY2xpY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5jb3VudCgnYScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvbHlsaW5lID0gbmV3IGtha2FvLm1hcHMuUG9seWxpbmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXRoOiBsaW5lRGF0YVtsaW5lSWRdLmxpbmVQYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93WCA9IHRoaXMuY2lyY2xlLmdldFBvc2l0aW9uKCkuZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93WSA9IHRoaXMuY2lyY2xlLmdldFBvc2l0aW9uKCkuZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoRnJvbVN0YXJ0VG9GaW5pc2ggPSAoKG5vd1ggLSBnb2FseCkgKiogMiArIChub3dZIC0gZ29hbHkpICoqIDIpICoqIDAuNTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgcm9hZExlbmd0aCA9IHBvbHlsaW5lLmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5leHRQb2ludElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmU6IGN1cnJlbnRQb2ludElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogZGF0YS5zY29yZSArIGxlbmd0aEZyb21TdGFydFRvRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5zZXQobmV4dFBvaW50SWQsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaGVhcOyXkCDsnojripQg7ZuE67O07KSRIOqwgOyepSDqtJzssK7snYAg7JWg66W8IOu9keyVhOyYqOuLpC5cclxuICAgICAgICAgICAgICAgIGRhdGEgPSBoZWFwLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy8g7ZiE7J6sIO2PrOyduO2KuOyXkOyEnCDri6Tsi5wg7JyEIOqzvOyglSDrsJjrs7VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDrj4TssKnquYzsp4Ag6rK966GcIOuLpCDssL7snYwuXHJcblxyXG4gICAgICAgICAgICAvLyBoaXN0b3J57JeQ7IScIOuPhOywqSDtj6zsnbjtirjrpbwg6rCA7KC47Jio64ukLlxyXG4gICAgICAgICAgICBsZXQgZ29hbFBvaW50ID0gaGlzdG9yeS5nZXQoZ29hbCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHRvdGFsID0gZ29hbFBvaW50LnNjb3JlO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICB3aGlsZSAoZ29hbFBvaW50LnByZSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZQb2ludElkID0gZ29hbFBvaW50LnByZTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChnb2FsUG9pbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBnb2FsUG9pbnQgPSBoaXN0b3J5LmdldChwcmV2UG9pbnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlzdC5wdXNoKHIpO1xyXG4gICAgICAgICAgICBsaXN0LnJldmVyc2UoKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGFycml2ZVBvaW50KVxyXG4gICAgICAgICAgICByZXR1cm4gW2xpc3QsIGhpc3RvcnldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYSA9IGZpbmRXYXkoeyBkYXRhOiByLCBzY29yZTogMCwgcHJlOiAtMSB9LCBhcnJpdmVQb2ludClcclxuICAgICAgICBjb25zb2xlLmxvZyhhWzBdKVxyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IG15bG9jYXRlIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IG1vdmVPcHRzLCB2YXJpYWJsZSB9IGZyb20gJy4vdmFyaWFibGUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4geyAvLyDtlIzroIjsnbTslrQg7JyE7LmYIO2RnOyLnFxyXG4gICAgICAgIGlmKG1vdmVPcHRzLmNoZWNrID09IGZhbHNlKXtcclxuICAgICAgICAgICAgbXlsb2NhdGUuc3R5bGUuZmlsdGVyID0gJ29wYWNpdHkoMCUpJztcclxuICAgICAgICB9XHJcbiAgICAvLyB9LCA1MClcclxufSIsImltcG9ydCB7IG1hcCB9IGZyb20gXCIuL3NldHRpbmdfbWFwXCI7XHJcbmltcG9ydCB7IGFycml2ZUNsaWNrIH0gZnJvbSBcIi4vdmFyaWFibGVcIjtcclxuaW1wb3J0IHsgV2FybmluZ19hbGVydCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBfcGVyX2NsaWNrLCBfcGVyX2Fycml2ZSB9IGZyb20gXCIuL3BlcnNvblwiXHJcbmltcG9ydCB7IG1vdmUyQ2xpY2tlZFBsYWNlX2JlZm9yZSB9IGZyb20gXCIuL21vdmluZ19wZW9wbGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwb2ludERhdGE6e1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBsYXRsbmc6a2FrYW8ubWFwcy5MYXRMbmc7XHJcbiAgICBsaW5lczpudW1iZXJbXTtcclxufVtdID0gW107XHJcbmV4cG9ydCBjb25zdCBsaW5lRGF0YToge1xyXG4gICAgcm9hZF9pZDogbnVtYmVyO1xyXG4gICAgbGluZVBhdGg6IGtha2FvLm1hcHMuTGF0TG5nW107XHJcbiAgICBwb2ludHM6bnVtYmVyW107XHJcbn1bXSA9IFtdO1xyXG5cclxudHlwZSBQb2ludCA9IHsgXHJcbiAgICB0eXBlOiBcIkZlYXR1cmVcIjsgXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgTk9ERV9JRDogc3RyaW5nO1xyXG4gICAgICAgIE5PREVfVFlQRTogc3RyaW5nO1xyXG4gICAgICAgIE5PREVfTkFNRTogc3RyaW5nO1xyXG4gICAgICAgIFRVUk5fUDpzdHJpbmc7XHJcbiAgICAgICAgUkVNQVJLOiBudWxsIFxyXG4gICAgfTtcclxuICAgIGdlb21ldHJ5OiB7IFxyXG4gICAgICAgIHR5cGU6IFwiUG9pbnRcIjtcclxuICAgICAgICBjb29yZGluYXRlczogWyBudW1iZXIsIG51bWJlciBdXHJcbiAgICB9XHJcbn1cclxudHlwZSByb2FkID0ge1xyXG4gICAgdHlwZTogXCJGZWF0dXJlXCI7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgTElOS19JRDogc3RyaW5nO1xyXG4gICAgICAgIEZfTk9ERTogc3RyaW5nO1xyXG4gICAgICAgIFRfTk9ERTogc3RyaW5nO1xyXG4gICAgICAgIExBTkVTOiBudW1iZXI7XHJcbiAgICAgICAgUk9BRF9SQU5LOiBzdHJpbmc7XHJcbiAgICAgICAgUk9BRF9UWVBFOiBzdHJpbmc7XHJcbiAgICAgICAgUk9BRF9OTzogc3RyaW5nO1xyXG4gICAgICAgIFJPQURfTkFNRTogc3RyaW5nO1xyXG4gICAgICAgIFJPQURfVVNFOiBzdHJpbmc7XHJcbiAgICAgICAgTVVMVElfTElOSzogc3RyaW5nO1xyXG4gICAgICAgIENPTk5FQ1Q6IHN0cmluZztcclxuICAgICAgICBNQVhfU1BEOiBudW1iZXI7XHJcbiAgICAgICAgUkVTVF9WRUg6IHN0cmluZztcclxuICAgICAgICBSRVNUX1c6IG51bWJlcjtcclxuICAgICAgICBSRVNUX0g6IG51bWJlcjtcclxuICAgICAgICBMRU5HVEg6IG51bWJlcjtcclxuICAgICAgICBSRU1BUks6IG51bGxcclxuICAgIH07XHJcbiAgICBnZW9tZXRyeToge1xyXG4gICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiO1xyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdW11cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJy4vZGF0YS9hbnNhbnpvbmVfcG9pbnQudHh0Jyk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goJy4vZGF0YS9hbnNhbnpvbmVfcm9hZC50eHQnKTtcclxuICAgIGNvbnN0IHR4dDE9IGF3YWl0IHJlczEudGV4dCgpO1xyXG4gICAgY29uc3QgdHh0MiA9IGF3YWl0IHJlczIudGV4dCgpO1xyXG4gICAgY29uc3QgYXJyMSA9IHR4dDEuc3BsaXQoJ1xcbicpLmZpbHRlcih2ID0+IHYudHJpbSgpKS5tYXAodiA9PiAoSlNPTi5wYXJzZSh2KSBhcyBQb2ludCkuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpO1xyXG4gICAgY29uc3QgYXJyMiA9IHR4dDIuc3BsaXQoJ1xcbicpLmZpbHRlcih2ID0+IHYudHJpbSgpKS5tYXAodiA9PiAoSlNPTi5wYXJzZSh2KSBhcyByb2FkKS5nZW9tZXRyeS5jb29yZGluYXRlcyk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycjEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHBvaW50RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogYCR7aX1gLFxyXG4gICAgICAgICAgICBsYXRsbmc6IG5ldyBrYWthby5tYXBzLkxhdExuZyhhcnIxW2ldWzFdIC0gMC4wMDI3NzgxMjMxMzcxMDc2ODg4LCBhcnIxW2ldWzBdICsgMC4wMDIwODAyMTM4MTY2MTgwMzQpLFxyXG4gICAgICAgICAgICBsaW5lczpbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycjIubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgIGNvbnN0IGxpbmVQYXRoXzprYWthby5tYXBzLkxhdExuZ1tdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBuID0gMDsgbiA8IGFycjJbal0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICBsaW5lUGF0aF8ucHVzaChuZXcga2FrYW8ubWFwcy5MYXRMbmcoYXJyMltqXVtuXVsxXSAtIDAuMDAyNzc4MTIzMTM3MTA3Njg4OCwgYXJyMltqXVtuXVswXSArIDAuMDAyMDgwMjEzODE2NjE4MDM0KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZURhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIHJvYWRfaWQ6IGosXHJcbiAgICAgICAgICAgIGxpbmVQYXRoOiBsaW5lUGF0aF8sXHJcbiAgICAgICAgICAgIHBvaW50czpbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBvaW50RGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGxpbmVEYXRhLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgbGV0IHB4Om51bWJlciA9IHBvaW50RGF0YVtpXS5sYXRsbmcuZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgIGxldCBweTpudW1iZXIgPSBwb2ludERhdGFbaV0ubGF0bG5nLmdldExuZygpO1xyXG4gICAgICAgICAgICBsZXQgbF9sYXN0WDpudW1iZXIgPSBsaW5lRGF0YVtqXS5saW5lUGF0aFtsaW5lRGF0YVtqXS5saW5lUGF0aC5sZW5ndGggLSAxXS5nZXRMYXQoKTtcclxuICAgICAgICAgICAgbGV0IGxfbGFzdFk6bnVtYmVyID0gbGluZURhdGFbal0ubGluZVBhdGhbbGluZURhdGFbal0ubGluZVBhdGgubGVuZ3RoIC0gMV0uZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgIGxldCBsX2ZzdFg6bnVtYmVyID0gbGluZURhdGFbal0ubGluZVBhdGhbMF0uZ2V0TGF0KCk7XHJcbiAgICAgICAgICAgIGxldCBsX2ZzdFk6bnVtYmVyID0gbGluZURhdGFbal0ubGluZVBhdGhbMF0uZ2V0TG5nKCk7XHJcbiAgICAgICAgICAgIGlmKE1hdGguc3FydChNYXRoLnBvdyhweCAtIGxfZnN0WCwgMikgKyBNYXRoLnBvdyhweSAtIGxfZnN0WSwgMikpIDwgMC4wMDAyIHx8IE1hdGguc3FydChNYXRoLnBvdyhweCAtIGxfbGFzdFgsIDIpICsgTWF0aC5wb3cocHkgLSBsX2xhc3RZLCAyKSkgPCAwLjAwMDIpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnREYXRhW2ldLmxpbmVzLnB1c2gobGluZURhdGFbal0ucm9hZF9pZClcclxuICAgICAgICAgICAgICAgIGxpbmVEYXRhW2pdLnBvaW50cy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHBvaW50RGF0YSwgbGluZURhdGEpXHJcbiAgICBmb3IobGV0IGkgb2YgcG9pbnREYXRhKSB7XHJcbiAgICAgICAgZGlzcGxheVBvaW50KGkpXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGogb2YgbGluZURhdGEpe1xyXG4gICAgICAgIGRpc3BsYXlMaW5lKGopXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQb2ludChhcnI6dHlwZW9mIHBvaW50RGF0YVswXSl7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBuZXcga2FrYW8ubWFwcy5DaXJjbGUoe1xyXG4gICAgICAgIGNlbnRlcjogYXJyLmxhdGxuZyxcclxuICAgICAgICByYWRpdXM6IDEwLFxyXG4gICAgICAgIHN0cm9rZVdlaWdodDogMCxcclxuICAgICAgICBmaWxsQ29sb3I6ICcjQTJGRjk5JyxcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC41LFxyXG4gICAgICAgIHpJbmRleDogMTAwMFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGN1c3RvbU92ZXJsYXkgPSBuZXcga2FrYW8ubWFwcy5DdXN0b21PdmVybGF5KHtcclxuICAgICAgICBwb3NpdGlvbjogYXJyLmxhdGxuZyxcclxuICAgICAgICBjb250ZW50OiBhcnIubmFtZVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGtha2FvLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoY2lyY2xlLCAnbW91c2VvdmVyJywgZnVuY3Rpb24obW91c2VFdmVudCkge1xyXG4gICAgICAgIGN1c3RvbU92ZXJsYXkuc2V0Q29udGVudChgPGRpdiBjbGFzcz0nYXJlYSc+JHthcnIubmFtZX08L2Rpdj5gKTtcclxuICAgICAgICBjdXN0b21PdmVybGF5LnNldFBvc2l0aW9uKG1vdXNlRXZlbnQubGF0TG5nKTsgXHJcbiAgICAgICAgY3VzdG9tT3ZlcmxheS5zZXRNYXAobWFwKTtcclxuICAgIH0pO1xyXG4gICAga2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihjaXJjbGUsICdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1c3RvbU92ZXJsYXkuc2V0TWFwKG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGNpcmNsZSwgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKG1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjdXN0b21PdmVybGF5LnNldFBvc2l0aW9uKG1vdXNlRXZlbnQubGF0TG5nKTtcclxuICAgIH0pO1xyXG4gICAga2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihjaXJjbGUsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKF9wZXJfY2xpY2spe1xyXG4gICAgICAgICAgICBpZihfcGVyX2Fycml2ZSl7XHJcbiAgICAgICAgICAgICAgICBhcnJpdmVDbGljay5sb2NhdGlvbiA9IGNpcmNsZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbW92ZTJDbGlja2VkUGxhY2VfYmVmb3JlKE51bWJlcihhcnIubmFtZSksIGFycml2ZUNsaWNrLmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgbW92aW5nIG5vd1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjaXJjbGUuc2V0TWFwKG1hcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlMaW5lKGFycjogdHlwZW9mIGxpbmVEYXRhWzBdKXtcclxuICAgIGNvbnN0IGxpbmUgPSBuZXcga2FrYW8ubWFwcy5Qb2x5bGluZSh7XHJcbiAgICAgICAgcGF0aDogYXJyLmxpbmVQYXRoLFxyXG4gICAgICAgIHN0cm9rZVdlaWdodDogMixcclxuICAgICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgc3Ryb2tlU3R5bGU6ICdzb2xpZCdcclxuICAgIH0pO1xyXG4gICAgbGluZS5zZXRNYXAobWFwKVxyXG59IiwiY29uc3QgcmVzdWx0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNyZXN1bHREaXYnKTtcclxuXHJcbmV4cG9ydCBsZXQgbWFwOmtha2FvLm1hcHMuTWFwID0gbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7IC8vIOyngOuPhCDquLDrs7gg7ISk7KCVXHJcbiAgICAgICAgY2VudGVyOiBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzcuMzIxOTE2NTU1MTA2NTIsIDEyNi44MzA4NDMxMTE4MzI4NyksIC8v7KeA64+E7J2YIOykkeyLrOyijO2RnFxyXG4gICAgICAgIG1pbkxldmVsOiAyLFxyXG4gICAgICAgIG1heExldmVsOiA2LCAgXHJcbiAgICAgICAgbGV2ZWw6IDMgLy/sp4Drj4TsnZgg66CI67KoKO2ZleuMgCwg7LaV7IaMIOygleuPhClcclxuICAgIH07XHJcbiAgICBcclxuICAgIG1hcCA9IG5ldyBrYWthby5tYXBzLk1hcChjb250YWluZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGtha2FvLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnY2xpY2snLCBmdW5jdGlvbihtb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgLy8g7YG066at7ZWcIOychOuPhCwg6rK964+EIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgICAgICBsZXQgbGF0bG5nID0gbW91c2VFdmVudC5sYXRMbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAn7YG066at7ZWcIOychOy5mOydmCDsooztkZwgKOychOuPhCzqsr3rj4QpIDogJyArIGxhdGxuZy5nZXRMYXQoKSArICcsICcgKyBsYXRsbmcuZ2V0TG5nKCk7XHJcblxyXG4gICAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBgJHttZXNzYWdlfWA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbWVudUJ0bl9jbGljayB9IGZyb20gJy4vdmFyaWFibGUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7IKs7J2065OcIOuplOyduCDrqZTribQg7JWg64uI66mU7J207IWYIOyLpO2WiVxyXG4gICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignLm1haW5NZW51Jyk7XHJcbiAgICBjb25zdCBtYWluTWVudV9jb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcjbWFpbk1lbnVfY29udGVudHMnKTtcclxuICAgIFxyXG4gICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKG1lbnVCdG5fY2xpY2subWFpbiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIG1haW5NZW51X2NvbnRlbnRzLnN0eWxlLmhlaWdodCA9ICcyMjBweCc7XHJcbiAgICAgICAgICAgIG1lbnVCdG5fY2xpY2subWFpbiA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1haW5NZW51X2NvbnRlbnRzLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICAgICAgbWVudUJ0bl9jbGljay5tYWluID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyB2YXJpYWJsZSwgdGltZV9ESFMgfSBmcm9tICcuL3ZhcmlhYmxlJ1xyXG5pbXBvcnQgeyB0aW1lYm94LCBTcXVhcmUsIGNsb2NrIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IHBsdXNEZWFkUmF0ZSB9IGZyb20gJy4vRGVhdGgnXHJcblxyXG5sZXQgbnVtID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIHZhcmlhYmxlLnNldDEgPSBzZXRJbnRlcnZhbCh0aW1lLCB2YXJpYWJsZS5zcGVlZFZhbHVlMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWUoKXtcclxuICAgIGlmKHZhcmlhYmxlLm1vdmluZ1N0YXJ0ID09IHRydWUpe1xyXG4gICAgICAgIFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M5ZmU3MSc7XHJcblxyXG4gICAgICAgIHRpbWVfREhTLm1pbisrO1xyXG4gICAgICAgIG51bSArPSB0aW1lYm94Lm9mZnNldFdpZHRoIC8gMTQ0MDtcclxuICAgICAgICBpZih0aW1lX0RIUy5taW4gPj0gNjApe1xyXG4gICAgICAgICAgICB0aW1lX0RIUy5ob3VyKys7XHJcbiAgICAgICAgICAgIHRpbWVfREhTLm1pbiA9IDA7XHJcbiAgICAgICAgICAgIGlmKHRpbWVfREhTLmhvdXIgPj0gMjQpe1xyXG4gICAgICAgICAgICAgICAgdGltZV9ESFMuZGF0ZSsrO1xyXG4gICAgICAgICAgICAgICAgcGx1c0RlYWRSYXRlKClcclxuICAgICAgICAgICAgICAgIG51bSA9IHRpbWVib3gub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aW1lX0RIUy5ob3VyID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZCA9IFN0cmluZyh0aW1lX0RIUy5kYXRlKTtcclxuICAgICAgICBsZXQgaCA9IFN0cmluZyh0aW1lX0RIUy5ob3VyKTtcclxuICAgICAgICBsZXQgcyA9IFN0cmluZyh0aW1lX0RIUy5taW4pO1xyXG4gICAgXHJcbiAgICAgICAgU3F1YXJlLnN0eWxlLndpZHRoID0gYCR7bnVtfXB4YDtcclxuICAgICAgICBpZihudW0gPiB0aW1lYm94Lm9mZnNldFdpZHRoKXtcclxuICAgICAgICAgICAgbnVtID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xvY2suaW5uZXJIVE1MID0gYCR7ZC5wYWRTdGFydCgyLCAnMCcpfSAvICR7aC5wYWRTdGFydCgyLCAnMCcpfSAvICR7cy5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZTczNzEnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0aW1lIH0iLCJpbXBvcnQgeyB0aW1lU3BlZWQgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IHsgdmFyaWFibGUgfSBmcm9tICcuL3ZhcmlhYmxlJ1xyXG5pbXBvcnQgeyBNT1ZFX1BBUkFNUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyB0aW1lIH0gZnJvbSAnLi90aW1lQm94J1xyXG5pbXBvcnQgeyBmdW4gfSBmcm9tICcuL2luZmVjX3JhbmdlJ1xyXG5cclxubGV0IGNoZWNrID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICB0aW1lU3BlZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aW1lQWNjKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGltZUFjYygpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh2YXJpYWJsZS5zZXQxKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodmFyaWFibGUuc2V0MilcclxuICAgIGlmKGNoZWNrID09IDApe1xyXG4gICAgICAgIHRpbWVTcGVlZC5zdHlsZS5jb2xvciA9ICcjZjNjMTI3JztcclxuICAgICAgICB2YXJpYWJsZS5zcGVlZFZhbHVlMSA9IDYwO1xyXG4gICAgICAgIHZhcmlhYmxlLnNwZWVkVmFsdWUyID0gMjUwO1xyXG4gICAgICAgIHNldG1vdmUoMC4wMDAwNiwgLTAuMDAwMDYsIC0wLjAwMDA2LCAwLjAwMDA2KVxyXG4gICAgICAgIHZhcmlhYmxlLnZlbFJhbmdlID0gMC4wMDAyO1xyXG4gICAgICAgIGNoZWNrID0gMTtcclxuICAgIH1lbHNlIGlmKGNoZWNrID09IDEpe1xyXG4gICAgICAgIHRpbWVTcGVlZC5zdHlsZS5jb2xvciA9ICcjZmU3MzcxJztcclxuICAgICAgICB2YXJpYWJsZS5zcGVlZFZhbHVlMSA9IDEwO1xyXG4gICAgICAgIHZhcmlhYmxlLnNwZWVkVmFsdWUyID0gMjU7XHJcbiAgICAgICAgc2V0bW92ZSgwLjAwMDYsIC0wLjAwMDYsIC0wLjAwMDYsIDAuMDAwNilcclxuICAgICAgICB2YXJpYWJsZS52ZWxSYW5nZSA9IDAuMDAwMTtcclxuICAgICAgICBjaGVjayA9IDI7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aW1lU3BlZWQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgIHZhcmlhYmxlLnNwZWVkVmFsdWUxID0gMjAwOyBcclxuICAgICAgICB2YXJpYWJsZS5zcGVlZFZhbHVlMiA9IDUwMDtcclxuICAgICAgICBzZXRtb3ZlKDAuMDAwMDMsIC0wLjAwMDAzLCAtMC4wMDAwMywgMC4wMDAwMylcclxuICAgICAgICB2YXJpYWJsZS52ZWxSYW5nZSA9IDAuMDAwMDE7XHJcbiAgICAgICAgY2hlY2sgPSAwO1xyXG4gICAgfVxyXG4gICAgdmFyaWFibGUuc2V0MSA9IHNldEludGVydmFsKHRpbWUsIHZhcmlhYmxlLnNwZWVkVmFsdWUxKTtcclxuICAgIHZhcmlhYmxlLnNldDIgPSBzZXRJbnRlcnZhbChmdW4sIHZhcmlhYmxlLnNwZWVkVmFsdWUyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0bW92ZSh3OiBudW1iZXIsIHM6IG51bWJlciwgYTogbnVtYmVyLCBkOiBudW1iZXIpIHtcclxuICAgIE1PVkVfUEFSQU1TLncudnggPSB3O1xyXG4gICAgTU9WRV9QQVJBTVMucy52eCA9IHM7XHJcbiAgICBNT1ZFX1BBUkFNUy5hLnZ5ID0gYTtcclxuICAgIE1PVkVfUEFSQU1TLmQudnkgPSBkO1xyXG59IiwiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9wZXJzb24nXHJcblxyXG5leHBvcnQgbGV0IG1vdmVPcHRzID0ge1xyXG4gICAgY2hlY2s6IGZhbHNlLFxyXG4gICAgZDogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgbGV0IHBlb3BsZXM6IFBlcnNvbltdID0gW107XHJcblxyXG5leHBvcnQgbGV0IHZhcmlhYmxlID0ge1xyXG4gICAgbW92aW5nU3RhcnQ6IHRydWUsXHJcbiAgICBwYW50bzogZmFsc2UsXHJcbiAgICBzcGVlZFZhbHVlMTogMjAwLFxyXG4gICAgc2V0MTogbnVsbCxcclxuICAgIHNwZWVkVmFsdWUyOiA3MDAsXHJcbiAgICBzZXQyOiBudWxsLFxyXG4gICAgdmVsUmFuZ2U6IDAuMDAwMDFcclxufVxyXG5cclxuZXhwb3J0IGxldCBtZW51QnRuX2NsaWNrID0ge1xyXG4gICAgbWFpbjogZmFsc2UsXHJcbiAgICBiYXI6IGZhbHNlLFxyXG4gICAgbGluZTogZmFsc2UsXHJcbiAgICBzYXZlOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHRpbWVfREhTID0ge1xyXG4gICAgZGF0ZTogMCxcclxuICAgIGhvdXI6IDAsXHJcbiAgICBtaW46IDBcclxufVxyXG5cclxuZXhwb3J0IGxldCBhcnJpdmVDbGljazoge1xyXG4gICAgbG9jYXRpb246IGtha2FvLm1hcHMuTGF0TG5nXHJcbn0gPSB7XHJcbiAgICBsb2NhdGlvbjogbnVsbFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==