exports.ids = [1];
exports.modules = {

/***/ "./admin-app/App.js":
/*!**************************!*\
  !*** ./admin-app/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ \"./admin-app/config.js\");\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar App = function App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState, 2),\n      selectedImage = _useState2[0],\n      setSelectedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    name: '',\n    vendor: '',\n    category: 'laptop',\n    price: 0,\n    numberInStock: 0\n  }),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState3, 2),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_useState5, 2),\n      details = _useState6[0],\n      setDetails = _useState6[1];\n\n  var handleFileChange = function handleFileChange(event) {\n    var image = event.target.files[0];\n    setSelectedImage(image);\n  };\n\n  var handleChange = function handleChange(event) {\n    var _event$target = event.target,\n        name = _event$target.name,\n        value = _event$target.value;\n    setData(_objectSpread(_objectSpread({}, data), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, name, name === 'price' || name === 'numberInStock' ? parseFloat(value) : value)));\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var preparedData, response, preparedImage;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              preparedData = _objectSpread(_objectSpread({}, data), {}, {\n                details: details,\n                filename: selectedImage.name\n              });\n              _context.next = 5;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hostUrl + '/api/devices', preparedData);\n\n            case 5:\n              response = _context.sent;\n              preparedImage = new FormData();\n              preparedImage.append('file', new File([selectedImage], response.data.image.name, {\n                type: selectedImage.type\n              }));\n              _context.next = 10;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hostUrl + '/upload', preparedImage);\n\n            case 10:\n              _context.next = 15;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](1);\n              alert('Cannot send data to server');\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 12]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleAddDetail = function handleAddDetail(event) {\n    event.preventDefault();\n    setDetails([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(details), [{\n      key: '',\n      value: ''\n    }]));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n    htmlFor: \"image\"\n  }, \"Image\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n    type: \"file\",\n    name: \"image\",\n    id: \"image\",\n    required: true,\n    onChange: handleFileChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n    htmlFor: \"name\"\n  }, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    id: \"name\",\n    value: data.name,\n    required: true,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n    htmlFor: \"vendor\"\n  }, \"Vendor\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"vendor\",\n    id: \"vendor\",\n    value: data.vendor,\n    required: true,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n    htmlFor: \"price\"\n  }, \"Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n    type: \"number\",\n    name: \"price\",\n    id: \"price\",\n    value: data.price,\n    min: \"0\",\n    required: true,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n    htmlFor: \"category\"\n  }, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"select\", {\n    name: \"category\",\n    value: data.category,\n    id: \"category\",\n    onChange: handleChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"option\", {\n    value: \"laptop\"\n  }, \"Laptop\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"option\", {\n    value: \"phone\"\n  }, \"Phone\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"option\", {\n    value: \"camera\"\n  }, \"Camera\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"label\", {\n    htmlFor: \"number-in-stock\"\n  }, \"Number In Stock\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n    type: \"number\",\n    name: \"numberInStock\",\n    id: \"number-in-stock\",\n    min: \"0\",\n    value: data.numberInStock,\n    required: true,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"Details \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n    onClick: handleAddDetail\n  }, \"+\")), details.map(function (detail, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"key\",\n      min: \"0\",\n      value: detail.key,\n      required: true,\n      onChange: function onChange(event) {\n        var updatedDetails = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(details);\n\n        detail.key = event.target.value;\n        setDetails(updatedDetails);\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"value\",\n      min: \"0\",\n      value: detail.value,\n      required: true,\n      onChange: function onChange(event) {\n        var updatedDetails = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(details);\n\n        detail.value = event.target.value;\n        setDetails(updatedDetails);\n      }\n    })));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", null, \"Submit\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./admin-app/App.js?");

/***/ }),

/***/ "./admin-app/config.js":
/*!*****************************!*\
  !*** ./admin-app/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  hostUrl: 'http://localhost:3000'\n});\n\n//# sourceURL=webpack:///./admin-app/config.js?");

/***/ }),

/***/ "./routes/adminApp.js":
/*!****************************!*\
  !*** ./routes/adminApp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _admin_app_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../admin-app/App */ \"./admin-app/App.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();\nrouter.get('/', function (req, res) {\n  fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve('./admin-app/public/index.html'), 'utf8', function (err, data) {\n    if (err) {\n      console.error(err);\n      return res.status(500).send('An error occurred');\n    }\n\n    res.set({\n      'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict'\n    });\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_admin_app_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), \"</div>\")));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/adminApp.js?");

/***/ }),

/***/ "./startup/adminApp.js":
/*!*****************************!*\
  !*** ./startup/adminApp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_adminApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../routes/adminApp */ \"./routes/adminApp.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('./admin-app/public'));\n  app.use('/admin-app', _routes_adminApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./startup/adminApp.js?");

/***/ })

};;