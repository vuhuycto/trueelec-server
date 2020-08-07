/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _startup_imageUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startup/imageUpload */ \"./startup/imageUpload.js\");\n/* harmony import */ var _startup_cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup/cors */ \"./startup/cors.js\");\n/* harmony import */ var _startup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startup/config */ \"./startup/config.js\");\n/* harmony import */ var _startup_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startup/db */ \"./startup/db.js\");\n/* harmony import */ var _startup_logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startup/logging */ \"./startup/logging.js\");\n/* harmony import */ var _startup_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./startup/static */ \"./startup/static.js\");\n/* harmony import */ var _startup_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./startup/routes */ \"./startup/routes.js\");\n/* harmony import */ var _startup_adminApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./startup/adminApp */ \"./startup/adminApp.js\");\n/* harmony import */ var _startup_validation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./startup/validation */ \"./startup/validation.js\");\n/* harmony import */ var _startup_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./startup/prod */ \"./startup/prod.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nObject(_startup_cors__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\nObject(_startup_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_startup_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nObject(_startup_logging__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nObject(_startup_static__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(app);\nObject(_startup_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(app);\nObject(_startup_imageUpload__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\nObject(_startup_adminApp__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(app);\nObject(_startup_validation__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(app);\nObject(_startup_prod__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(app);\nvar port = process.env.PORT || 3001;\nvar server = app.listen(port, function () {\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.info(\"Listening to port \".concat(port));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  var token = req.header('x-auth-token');\n  if (!token) return res.status(401).send('Access denied. No token provided');\n\n  try {\n    var decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token, config__WEBPACK_IMPORTED_MODULE_0___default.a.get('jwtPrivateKey'));\n    req.user = decoded;\n    next();\n  } catch (error) {\n    return res.status(400).send('Invalid token');\n  }\n});\n\n//# sourceURL=webpack:///./middleware/auth.js?");

/***/ }),

/***/ "./middleware/error.js":
/*!*****************************!*\
  !*** ./middleware/error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (err, req, res, next) {\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.error(err.message, err);\n  res.status(500).send('Something failed');\n});\n\n//# sourceURL=webpack:///./middleware/error.js?");

/***/ }),

/***/ "./middleware/validateObjectId.js":
/*!****************************************!*\
  !*** ./middleware/validateObjectId.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId.isValid(req.params.id)) return res.status(404).send('Invalid Id');\n  next();\n});\n\n//# sourceURL=webpack:///./middleware/validateObjectId.js?");

/***/ }),

/***/ "./models/devices.js":
/*!***************************!*\
  !*** ./models/devices.js ***!
  \***************************/
/*! exports provided: Device, validateDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Device\", function() { return Device; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateDevice\", function() { return validateDevice; });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction validateDevice(device) {\n  return joi__WEBPACK_IMPORTED_MODULE_0___default.a.validate(device, {\n    name: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n    price: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().min(0).required(),\n    vendor: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n    details: joi__WEBPACK_IMPORTED_MODULE_0___default.a.array().required(),\n    category: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n    numberInStock: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().min(0).required(),\n    filename: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required()\n  });\n}\n\nvar Device = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('Device', new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true,\n    min: 0\n  },\n  vendor: {\n    type: String,\n    required: true\n  },\n  details: {\n    type: Array,\n    required: true\n  },\n  category: {\n    type: String,\n    required: true\n  },\n  numberInStock: {\n    type: Number,\n    required: true,\n    min: 0\n  },\n  image: {\n    type: Object,\n    required: true\n  }\n}));\n\n\n//# sourceURL=webpack:///./models/devices.js?");

/***/ }),

/***/ "./models/orders.js":
/*!**************************!*\
  !*** ./models/orders.js ***!
  \**************************/
/*! exports provided: AnonymousOrder, validateAnonymousOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnonymousOrder\", function() { return AnonymousOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateAnonymousOrder\", function() { return validateAnonymousOrder; });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction validateAnonymousOrder(order) {\n  return joi__WEBPACK_IMPORTED_MODULE_0___default.a.validate(order, {\n    customerName: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n    address: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n    phoneNumber: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(10).max(10).required(),\n    email: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required().email(),\n    devices: joi__WEBPACK_IMPORTED_MODULE_0___default.a.array().items(joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({\n      deviceId: joi__WEBPACK_IMPORTED_MODULE_0___default.a.objectId().required(),\n      quantity: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required()\n    })).required()\n  });\n}\n\nvar AnonymousOrder = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('AnonymousOrder', new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({\n  customerName: {\n    type: String,\n    required: true\n  },\n  address: {\n    type: String,\n    required: true\n  },\n  phoneNumber: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  },\n  devices: {\n    type: Array,\n    required: true\n  },\n  isDelivered: {\n    type: Boolean,\n    required: true,\n    \"default\": false\n  },\n  isPaid: {\n    type: Boolean,\n    required: true,\n    \"default\": false\n  }\n}));\n\n\n//# sourceURL=webpack:///./models/orders.js?");

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

/***/ "./routes/anonymousOrders.js":
/*!***********************************!*\
  !*** ./routes/anonymousOrders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_devices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/devices */ \"./models/devices.js\");\n/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/orders */ \"./models/orders.js\");\n/* harmony import */ var _middleware_validateObjectId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middleware/validateObjectId */ \"./middleware/validateObjectId.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../middleware/auth */ \"./middleware/auth.js\");\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_4___default.a.Router();\n\nfunction findDevices(_x) {\n  return _findDevices.apply(this, arguments);\n}\n\nfunction _findDevices() {\n  _findDevices = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {\n    var devices, _iterator2, _step2, device, record;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            devices = [];\n            _iterator2 = _createForOfIteratorHelper(data);\n            _context2.prev = 2;\n\n            _iterator2.s();\n\n          case 4:\n            if ((_step2 = _iterator2.n()).done) {\n              _context2.next = 14;\n              break;\n            }\n\n            device = _step2.value;\n            _context2.next = 8;\n            return _models_devices__WEBPACK_IMPORTED_MODULE_5__[\"Device\"].findById(device.deviceId);\n\n          case 8:\n            record = _context2.sent;\n\n            if (record) {\n              _context2.next = 11;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", false);\n\n          case 11:\n            devices.push({\n              data: record,\n              quantity: device.quantity\n            });\n\n          case 12:\n            _context2.next = 4;\n            break;\n\n          case 14:\n            _context2.next = 19;\n            break;\n\n          case 16:\n            _context2.prev = 16;\n            _context2.t0 = _context2[\"catch\"](2);\n\n            _iterator2.e(_context2.t0);\n\n          case 19:\n            _context2.prev = 19;\n\n            _iterator2.f();\n\n            return _context2.finish(19);\n\n          case 22:\n            return _context2.abrupt(\"return\", devices);\n\n          case 23:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 16, 19, 22]]);\n  }));\n  return _findDevices.apply(this, arguments);\n}\n\nrouter.get('/:id', [_middleware_auth__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _middleware_validateObjectId__WEBPACK_IMPORTED_MODULE_7__[\"default\"]], function (req, res) {});\nrouter.post('/', /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var _validateAnonymousOrd, error, devices, order, _iterator, _step, device;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _validateAnonymousOrd = Object(_models_orders__WEBPACK_IMPORTED_MODULE_6__[\"validateAnonymousOrder\"])(req.body), error = _validateAnonymousOrd.error;\n\n            if (!error) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send(error.details[0].message));\n\n          case 3:\n            _context.next = 5;\n            return findDevices(req.body.devices);\n\n          case 5:\n            devices = _context.sent;\n\n            if (devices) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send('Invalid device'));\n\n          case 8:\n            _context.next = 10;\n            return new _models_orders__WEBPACK_IMPORTED_MODULE_6__[\"AnonymousOrder\"](_objectSpread(_objectSpread({}, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.pick(req.body, ['customerName', 'address', 'phoneNumber', 'email'])), {}, {\n              devices: devices.map(function (device) {\n                return _objectSpread(_objectSpread({}, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.pick(device.data, ['_id', 'name', 'price', 'imageUrl'])), {}, {\n                  quantity: device.quantity\n                });\n              })\n            }));\n\n          case 10:\n            order = _context.sent;\n            _context.prev = 11;\n            order.save();\n            _iterator = _createForOfIteratorHelper(devices);\n            _context.prev = 14;\n\n            _iterator.s();\n\n          case 16:\n            if ((_step = _iterator.n()).done) {\n              _context.next = 22;\n              break;\n            }\n\n            device = _step.value;\n            _context.next = 20;\n            return _models_devices__WEBPACK_IMPORTED_MODULE_5__[\"Device\"].findByIdAndUpdate(device.data._id, {\n              $inc: {\n                numberInStock: -1\n              }\n            }, {\n              \"new\": true\n            });\n\n          case 20:\n            _context.next = 16;\n            break;\n\n          case 22:\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](14);\n\n            _iterator.e(_context.t0);\n\n          case 27:\n            _context.prev = 27;\n\n            _iterator.f();\n\n            return _context.finish(27);\n\n          case 30:\n            res.send(order);\n            _context.next = 36;\n            break;\n\n          case 33:\n            _context.prev = 33;\n            _context.t1 = _context[\"catch\"](11);\n            res.status(500).send('Something failed');\n\n          case 36:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[11, 33], [14, 24, 27, 30]]);\n  }));\n\n  return function (_x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/anonymousOrders.js?");

/***/ }),

/***/ "./routes/devices.js":
/*!***************************!*\
  !*** ./routes/devices.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_devices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/devices */ \"./models/devices.js\");\n/* harmony import */ var _middleware_validateObjectId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../middleware/validateObjectId */ \"./middleware/validateObjectId.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_4___default.a.Router();\nrouter.get('/', /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {\n    var category, devices;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            category = req.query.category;\n\n            if (!category) {\n              _context.next = 7;\n              break;\n            }\n\n            _context.next = 4;\n            return _models_devices__WEBPACK_IMPORTED_MODULE_5__[\"Device\"].find().where('category', category);\n\n          case 4:\n            devices = _context.sent;\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.next = 9;\n            return _models_devices__WEBPACK_IMPORTED_MODULE_5__[\"Device\"].find();\n\n          case 9:\n            devices = _context.sent;\n\n          case 10:\n            res.send(devices);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.get('/:id', _middleware_validateObjectId__WEBPACK_IMPORTED_MODULE_6__[\"default\"], /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res) {\n    var device;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _models_devices__WEBPACK_IMPORTED_MODULE_5__[\"Device\"].findById(req.params.id);\n\n          case 2:\n            device = _context2.sent;\n\n            if (device) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(404).send(\"There is no Device with id \".concat(req.params.id)));\n\n          case 5:\n            res.send(device);\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nrouter.post('/', /*#__PURE__*/function () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(req, res) {\n    var _validateDevice, error, device, renamedImageFile;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _validateDevice = Object(_models_devices__WEBPACK_IMPORTED_MODULE_5__[\"validateDevice\"])(req.body), error = _validateDevice.error;\n\n            if (!error) {\n              _context3.next = 3;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(400).send(error.details[0].message));\n\n          case 3:\n            _context3.next = 5;\n            return new _models_devices__WEBPACK_IMPORTED_MODULE_5__[\"Device\"](_objectSpread({}, req.body));\n\n          case 5:\n            device = _context3.sent;\n            renamedImageFile = device._id + path__WEBPACK_IMPORTED_MODULE_3___default.a.extname(req.body.filename);\n            device.set('image', {\n              name: renamedImageFile,\n              url: '/assets/' + renamedImageFile\n            });\n            device.save();\n            res.send(device);\n\n          case 10:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/devices.js?");

/***/ }),

/***/ "./routes/upload.js":
/*!**************************!*\
  !*** ./routes/upload.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post('/', function (req, res) {\n  if (!req.files) return res.status(400).send('File is required');\n  var image = req.files.file;\n  image.mv('assets/' + image.name, function (err) {\n    if (err) return res.status(500).send(err);\n    res.send('File uploaded!');\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/upload.js?");

/***/ }),

/***/ "./startup/adminApp.js":
/*!*****************************!*\
  !*** ./startup/adminApp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_adminApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../routes/adminApp */ \"./routes/adminApp.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('./admin-app/public'));\n  app.use('/admin-app', _routes_adminApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./startup/adminApp.js?");

/***/ }),

/***/ "./startup/config.js":
/*!***************************!*\
  !*** ./startup/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (!config__WEBPACK_IMPORTED_MODULE_0___default.a.get('jwtPrivateKey')) throw new Error('FATAL ERROR: jwtPrivateKey is not defined!');\n});\n\n//# sourceURL=webpack:///./startup/config.js?");

/***/ }),

/***/ "./startup/cors.js":
/*!*************************!*\
  !*** ./startup/cors.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()());\n});\n\n//# sourceURL=webpack:///./startup/cors.js?");

/***/ }),

/***/ "./startup/db.js":
/*!***********************!*\
  !*** ./startup/db.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fawn */ \"fawn\");\n/* harmony import */ var fawn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fawn__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar trimQuotes = function trimQuotes(str) {\n  return str.indexOf('\"') !== -1 ? str.slice(1, str.length - 1) : str;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var db = trimQuotes(config__WEBPACK_IMPORTED_MODULE_3___default.a.get('db'));\n  mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(db, {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n  }).then(function () {\n    winston__WEBPACK_IMPORTED_MODULE_1___default.a.info(\"Connected to \".concat(db));\n    fawn__WEBPACK_IMPORTED_MODULE_0___default.a.init(mongoose__WEBPACK_IMPORTED_MODULE_2___default.a);\n  });\n});\n\n//# sourceURL=webpack:///./startup/db.js?");

/***/ }),

/***/ "./startup/imageUpload.js":
/*!********************************!*\
  !*** ./startup/imageUpload.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/upload */ \"./routes/upload.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(express_fileupload__WEBPACK_IMPORTED_MODULE_0___default()({\n    createParentPath: true\n  }));\n  app.use('/upload', _routes_upload__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./startup/imageUpload.js?");

/***/ }),

/***/ "./startup/logging.js":
/*!****************************!*\
  !*** ./startup/logging.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var winston_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! winston-mongodb */ \"winston-mongodb\");\n/* harmony import */ var winston_mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(winston_mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-async-errors */ \"express-async-errors\");\n/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_async_errors__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  process.on('unhandledRejection', function (ex) {\n    throw ex;\n  });\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.handleExceptions(new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({\n    colorize: true,\n    prettyPrint: true\n  }), new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File({\n    filename: 'uncaughtExceptions.log'\n  }));\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.add(winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.File, {\n    filename: 'logfile.log'\n  });\n  winston__WEBPACK_IMPORTED_MODULE_0___default.a.add(winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.MongoDB, {\n    db: config__WEBPACK_IMPORTED_MODULE_1___default.a.get('db'),\n    level: 'error'\n  });\n});\n\n//# sourceURL=webpack:///./startup/logging.js?");

/***/ }),

/***/ "./startup/prod.js":
/*!*************************!*\
  !*** ./startup/prod.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(helmet__WEBPACK_IMPORTED_MODULE_0___default()());\n  app.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\n});\n\n//# sourceURL=webpack:///./startup/prod.js?");

/***/ }),

/***/ "./startup/routes.js":
/*!***************************!*\
  !*** ./startup/routes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../middleware/error */ \"./middleware/error.js\");\n/* harmony import */ var _routes_devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../routes/devices */ \"./routes/devices.js\");\n/* harmony import */ var _routes_anonymousOrders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../routes/anonymousOrders */ \"./routes/anonymousOrders.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n  app.use(_middleware_error__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  app.use('/api/devices', _routes_devices__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  app.use('/api/orders/anonymous', _routes_anonymousOrders__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./startup/routes.js?");

/***/ }),

/***/ "./startup/static.js":
/*!***************************!*\
  !*** ./startup/static.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use('/assets', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('assets'));\n});\n\n//# sourceURL=webpack:///./startup/static.js?");

/***/ }),

/***/ "./startup/validation.js":
/*!*******************************!*\
  !*** ./startup/validation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  joi__WEBPACK_IMPORTED_MODULE_0___default.a.objectId = __webpack_require__(/*! joi-objectid */ \"joi-objectid\")(joi__WEBPACK_IMPORTED_MODULE_0___default.a);\n});\n\n//# sourceURL=webpack:///./startup/validation.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"config\");\n\n//# sourceURL=webpack:///external_%22config%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-async-errors":
/*!***************************************!*\
  !*** external "express-async-errors" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-async-errors\");\n\n//# sourceURL=webpack:///external_%22express-async-errors%22?");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-fileupload\");\n\n//# sourceURL=webpack:///external_%22express-fileupload%22?");

/***/ }),

/***/ "fawn":
/*!***********************!*\
  !*** external "fawn" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fawn\");\n\n//# sourceURL=webpack:///external_%22fawn%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "joi-objectid":
/*!*******************************!*\
  !*** external "joi-objectid" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi-objectid\");\n\n//# sourceURL=webpack:///external_%22joi-objectid%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ }),

/***/ "winston-mongodb":
/*!**********************************!*\
  !*** external "winston-mongodb" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston-mongodb\");\n\n//# sourceURL=webpack:///external_%22winston-mongodb%22?");

/***/ })

/******/ });