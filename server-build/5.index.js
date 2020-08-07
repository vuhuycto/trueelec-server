exports.ids = [5];
exports.modules = {

/***/ "./startup/db.js":
/*!***********************!*\
  !*** ./startup/db.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fawn */ \"fawn\");\n/* harmony import */ var fawn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fawn__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar trimQuotes = function trimQuotes(str) {\n  return str.indexOf('\"') !== -1 ? str.slice(1, str.length - 1) : str;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var db = trimQuotes(config__WEBPACK_IMPORTED_MODULE_3___default.a.get('db'));\n  mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(db, {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n  }).then(function () {\n    winston__WEBPACK_IMPORTED_MODULE_1___default.a.info(\"Connected to \".concat(db));\n    fawn__WEBPACK_IMPORTED_MODULE_0___default.a.init(mongoose__WEBPACK_IMPORTED_MODULE_2___default.a);\n  });\n});\n\n//# sourceURL=webpack:///./startup/db.js?");

/***/ })

};;