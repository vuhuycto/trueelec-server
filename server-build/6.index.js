exports.ids = [6];
exports.modules = {

/***/ "./startup/logging.js":
/*!****************************!*\
  !*** ./startup/logging.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var winston_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! winston-mongodb */ \"winston-mongodb\");\n/* harmony import */ var winston_mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(winston_mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-async-errors */ \"express-async-errors\");\n/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_async_errors__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  process.on('unhandledRejection', function (ex) {\n    throw ex;\n  });\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.handleExceptions(new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({\n    colorize: true,\n    prettyPrint: true\n  }), new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({\n    filename: 'uncaughtExceptions.log'\n  }));\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.add(winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File, {\n    filename: 'logfile.log'\n  });\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.add(winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.MongoDB, {\n    db: config__WEBPACK_IMPORTED_MODULE_1___default.a.get('db'),\n    level: 'error'\n  });\n});\n\n//# sourceURL=webpack:///./startup/logging.js?");

/***/ })

};;