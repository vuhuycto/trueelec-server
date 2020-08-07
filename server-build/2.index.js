exports.ids = [2];
exports.modules = {

/***/ "./routes/upload.js":
/*!**************************!*\
  !*** ./routes/upload.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post('/', function (req, res) {\n  if (!req.files) return res.status(400).send('File is required');\n  var image = req.files.file;\n  image.mv('assets/' + image.name, function (err) {\n    if (err) return res.status(500).send(err);\n    res.send('File uploaded!');\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/upload.js?");

/***/ }),

/***/ "./startup/imageUpload.js":
/*!********************************!*\
  !*** ./startup/imageUpload.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/upload */ \"./routes/upload.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(express_fileupload__WEBPACK_IMPORTED_MODULE_0___default()({\n    createParentPath: true\n  }));\n  app.use('/upload', _routes_upload__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./startup/imageUpload.js?");

/***/ })

};;