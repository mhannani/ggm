webpackHotUpdatemusic_component("main",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createSuper.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createSuper.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

var possibleConstructorReturn = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@react-icons/all-files/fa/FaBook.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fa/FaBook.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FaBook = function FaBook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/fa/FaHeadphones.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fa/FaHeadphones.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FaHeadphones = function FaHeadphones (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/fa/FaPauseCircle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fa/FaPauseCircle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FaPauseCircle = function FaPauseCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/fa/FaPlayCircle.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fa/FaPlayCircle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FaPlayCircle = function FaPlayCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/fa/FaRegMinusSquare.js":
/*!********************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fa/FaRegMinusSquare.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FaRegMinusSquare = function FaRegMinusSquare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/fa/FaSpinner.js":
/*!*************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fa/FaSpinner.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FaSpinner = function FaSpinner (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/fa/FaSyncAlt.js":
/*!*************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fa/FaSyncAlt.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FaSyncAlt = function FaSyncAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/fi/FiChevronsDown.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/fi/FiChevronsDown.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.FiChevronsDown = function FiChevronsDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"7 13 12 18 17 13"}},{"tag":"polyline","attr":{"points":"7 6 12 11 17 6"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/go/GoMute.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react-icons/all-files/go/GoMute.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.GoMute = function GoMute (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/go/GoUnmute.js":
/*!************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/go/GoUnmute.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.GoUnmute = function GoUnmute (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/iconBase.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconBase.js ***!
  \*****************************************************************/
/*! exports provided: GenIcon, IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return GenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ "./node_modules/@react-icons/all-files/lib/esm/iconContext.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), props.children);
  };

  return _iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"] !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__["DefaultContext"]);
}

/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/iconContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconContext.js ***!
  \********************************************************************/
/*! exports provided: DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return DefaultContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return IconContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext && react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(DefaultContext);

/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js ***!
  \**********************************************************************/
/*! exports provided: IconsManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return IconsManifest; });
var IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/refactoringui/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]

/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/index.js ***!
  \**************************************************************/
/*! exports provided: IconsManifest, GenIcon, IconBase, DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ "./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return _iconsManifest__WEBPACK_IMPORTED_MODULE_0__["IconsManifest"]; });

/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ "./node_modules/@react-icons/all-files/lib/esm/iconBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["GenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ "./node_modules/@react-icons/all-files/lib/esm/iconContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["DefaultContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["IconContext"]; });





/***/ }),

/***/ "./node_modules/@react-icons/all-files/md/MdClose.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-icons/all-files/md/MdClose.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.MdClose = function MdClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/md/MdLibraryMusic.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/md/MdLibraryMusic.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.MdLibraryMusic = function MdLibraryMusic (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/md/MdRepeat.js":
/*!************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/md/MdRepeat.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.MdRepeat = function MdRepeat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/md/MdRepeatOne.js":
/*!***************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/md/MdRepeatOne.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.MdRepeatOne = function MdRepeatOne (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/md/MdSkipNext.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/md/MdSkipNext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.MdSkipNext = function MdSkipNext (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/md/MdSkipPrevious.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/md/MdSkipPrevious.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.MdSkipPrevious = function MdSkipPrevious (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 6h2v12H6zm3.5 6l8.5 6V6z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/md/MdViewHeadline.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/md/MdViewHeadline.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.MdViewHeadline = function MdViewHeadline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/ri/RiDeleteBinLine.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/ri/RiDeleteBinLine.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.RiDeleteBinLine = function RiDeleteBinLine (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"}}]}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/ri/RiPlayList2Fill.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/ri/RiPlayList2Fill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.RiPlayList2Fill = function RiPlayList2Fill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0H24V24H0z"}},{"tag":"path","attr":{"d":"M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zm0-7v2H12V4h10z"}}]}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/ti/TiArrowShuffle.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/ti/TiArrowShuffle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.TiArrowShuffle = function TiArrowShuffle (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 9h3.5c.736 0 1.393.391 1.851 1.001.325-.604.729-1.163 1.191-1.662-.803-.823-1.866-1.339-3.042-1.339h-3.5c-.553 0-1 .448-1 1s.447 1 1 1zM11.685 12.111c.551-1.657 2.256-3.111 3.649-3.111h1.838l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.293 1.293h-1.838c-2.274 0-4.711 1.967-5.547 4.479l-.472 1.411c-.641 1.926-2.072 3.11-2.815 3.11h-2.5c-.553 0-1 .448-1 1s.447 1 1 1h2.5c1.837 0 3.863-1.925 4.713-4.479l.472-1.41zM15.879 13.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.338c-1.268 0-2.33-.891-2.691-2.108-.256.75-.627 1.499-1.09 2.185.886 1.162 2.243 1.923 3.781 1.923h2.338l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/ti/TiDownload.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/ti/TiDownload.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon
module.exports.TiDownload = function TiDownload (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.707 7.404c-.189-.188-.448-.283-.707-.283s-.518.095-.707.283l-2.293 2.293v-6.697c0-.552-.448-1-1-1s-1 .448-1 1v6.697l-2.293-2.293c-.189-.188-.44-.293-.707-.293s-.518.105-.707.293c-.39.39-.39 1.024 0 1.414l4.707 4.682 4.709-4.684c.388-.387.388-1.022-.002-1.412zM20.987 16c0-.105-.004-.211-.039-.316l-2-6c-.136-.409-.517-.684-.948-.684h-.219c-.094.188-.21.368-.367.525l-1.482 1.475h1.348l1.667 5h-13.893l1.667-5h1.348l-1.483-1.475c-.157-.157-.274-.337-.367-.525h-.219c-.431 0-.812.275-.948.684l-2 6c-.035.105-.039.211-.039.316-.013 0-.013 5-.013 5 0 .553.447 1 1 1h16c.553 0 1-.447 1-1 0 0 0-5-.013-5z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/is-mobile/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-mobile/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isMobile
module.exports.isMobile = isMobile
module.exports.default = isMobile

var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i

var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i

function isMobile (opts) {
  if (!opts) opts = {}
  var ua = opts.ua
  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent']
  }
  if (typeof ua !== 'string') return false

  var result = opts.tablet ? tabletRE.test(ua) : mobileRE.test(ua)

  if (
    !result &&
    opts.tablet &&
    opts.featureDetect &&
    navigator &&
    navigator.maxTouchPoints > 1 &&
    ua.indexOf('Macintosh') !== -1 &&
    ua.indexOf('Safari') !== -1
  ) {
    result = true
  }

  return result
}


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/rc-slider/lib/Handle.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-slider/lib/Handle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _addEventListener = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js"));

var Handle = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Handle, _React$Component);

  var _super = (0, _createSuper2.default)(Handle);

  function Handle() {
    var _this;

    (0, _classCallCheck2.default)(this, Handle);
    _this = _super.apply(this, arguments);
    _this.state = {
      clickFocused: false
    };

    _this.setHandleRef = function (node) {
      _this.handle = node;
    };

    _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    };

    _this.handleMouseDown = function (e) {
      // avoid selecting text during drag
      // https://github.com/ant-design/ant-design/issues/25010
      e.preventDefault(); // fix https://github.com/ant-design/ant-design/issues/15324

      _this.focus();
    };

    _this.handleBlur = function () {
      _this.setClickFocus(false);
    };

    _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    };

    return _this;
  }

  (0, _createClass2.default)(Handle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = (0, _addEventListener.default)(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    }
  }, {
    key: "clickFocus",
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref, _ref2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          vertical = _this$props.vertical,
          reverse = _this$props.reverse,
          offset = _this$props.offset,
          style = _this$props.style,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaValueTextFormatter = _this$props.ariaValueTextFormatter,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]);
      var className = (0, _classnames.default)(this.props.className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
      var positionStyle = vertical ? (_ref = {}, (0, _defineProperty2.default)(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref, reverse ? 'bottom' : 'top', 'auto'), (0, _defineProperty2.default)(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, (0, _defineProperty2.default)(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref2, reverse ? 'left' : 'right', 'auto'), (0, _defineProperty2.default)(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);
      var elStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), positionStyle);
      var mergedTabIndex = tabIndex || 0;

      if (disabled || tabIndex === null) {
        mergedTabIndex = null;
      }

      var ariaValueText;

      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }

      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        ref: this.setHandleRef,
        tabIndex: mergedTabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown // aria attribute
        ,
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": !!disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }));
    }
  }]);
  return Handle;
}(_react.default.Component);

exports.default = Handle;

/***/ }),

/***/ "./node_modules/rc-slider/lib/Slider.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-slider/lib/Slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _Track = _interopRequireDefault(__webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/lib/common/Track.js"));

var _createSlider = _interopRequireDefault(__webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/lib/common/createSlider.js"));

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/rc-slider/lib/utils.js"));

var Slider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Slider, _React$Component);

  var _super = (0, _createSuper2.default)(Slider);

  /* eslint-enable */
  function Slider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Slider);
    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      return [];
    };

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();

      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        dragging: false
      });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;
    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    (0, _warning.default)(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
    (0, _warning.default)(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  (0, _createClass2.default)(Slider, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          onChange = _this$props.onChange;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      var theValue = value !== undefined ? value : prevState.value;
      var nextValue = this.trimAlignValue(theValue, this.props);

      if (nextValue === prevState.value) {
        return;
      } // eslint-disable-next-line


      this.setState({
        value: nextValue
      });

      if (!(min === prevProps.min && max === prevProps.max) && utils.isValueOutOfRange(theValue, this.props)) {
        onChange(nextValue);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
        value: this.props.max
      }) : state;

      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      this.setState({
        dragging: true
      });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      if (value === prevValue) return;
      this.prevMovedHandleIndex = 0;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position) {
      utils.pauseEvent(e);
      var oldValue = this.state.value;
      var value = this.calcValueByPos(position);
      if (value === oldValue) return;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = utils.getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        utils.pauseEvent(e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        this.onChange({
          value: value
        });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      var minPoint = this.props.startPoint || this.props.min;
      return this.state.value > minPoint ? minPoint : this.state.value;
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      if (this.state.value < this.props.startPoint) {
        return this.props.startPoint;
      }

      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.props), nextProps);
      var val = utils.ensureValueInRange(v, mergedProps);
      return utils.ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          vertical = _this$props3.vertical,
          included = _this$props3.included,
          disabled = _this$props3.disabled,
          minimumTrackStyle = _this$props3.minimumTrackStyle,
          trackStyle = _this$props3.trackStyle,
          handleStyle = _this$props3.handleStyle,
          tabIndex = _this$props3.tabIndex,
          ariaLabelForHandle = _this$props3.ariaLabelForHandle,
          ariaLabelledByForHandle = _this$props3.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = _this$props3.ariaValueTextFormatterForHandle,
          min = _this$props3.min,
          max = _this$props3.max,
          startPoint = _this$props3.startPoint,
          reverse = _this$props3.reverse,
          handleGenerator = _this$props3.handle;
      var _this$state = this.state,
          value = _this$state.value,
          dragging = _this$state.dragging;
      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: "".concat(prefixCls, "-handle"),
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabIndex: tabIndex,
        ariaLabel: ariaLabelForHandle,
        ariaLabelledBy: ariaLabelledByForHandle,
        ariaValueTextFormatter: ariaValueTextFormatterForHandle,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });
      var trackOffset = startPoint !== undefined ? this.calcOffset(startPoint) : 0;
      var mergedTrackStyle = trackStyle[0] || trackStyle;

      var track = /*#__PURE__*/_react.default.createElement(_Track.default, {
        className: "".concat(prefixCls, "-track"),
        vertical: vertical,
        included: included,
        offset: trackOffset,
        reverse: reverse,
        length: offset - trackOffset,
        style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, minimumTrackStyle), mergedTrackStyle)
      });

      return {
        tracks: track,
        handles: handle
      };
    }
  }]);
  return Slider;
}(_react.default.Component);

var _default = (0, _createSlider.default)(Slider);

exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/Marks.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/Marks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = (0, _typeof2.default)(markPoint) === 'object' && ! /*#__PURE__*/_react.default.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(className, "-text"), true), (0, _defineProperty2.default)(_classNames, "".concat(className, "-text-active"), isActive), _classNames));
    var bottomStyle = (0, _defineProperty2.default)({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));
    var leftStyle = (0, _defineProperty2.default)({
      transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
    }, reverse ? 'right' : 'left', "".concat((point - min) / range * 100, "%"));
    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), markPoint.style) : style;
    return /*#__PURE__*/_react.default.createElement("span", {
      className: markClassName,
      style: markStyle,
      key: point,
      onMouseDown: function onMouseDown(e) {
        return onClickLabel(e, point);
      },
      onTouchStart: function onTouchStart(e) {
        return onClickLabel(e, point);
      }
    }, markLabel);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, elements);
};

var _default = Marks;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/Steps.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/Steps.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectSpread4 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning.default)(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _objectSpread4.default)((0, _objectSpread4.default)({}, dotStyle), {}, (0, _defineProperty2.default)({}, reverse ? 'top' : 'bottom', offset)) : (0, _objectSpread4.default)((0, _objectSpread4.default)({}, dotStyle), {}, (0, _defineProperty2.default)({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = (0, _objectSpread4.default)((0, _objectSpread4.default)({}, style), activeDotStyle);
    }

    var pointClassName = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot-active"), isActived), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return /*#__PURE__*/_react.default.createElement("span", {
      className: pointClassName,
      style: style,
      key: point
    });
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, elements);
};

var _default = Steps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/Track.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/Track.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      style = props.style;
  var length = props.length,
      offset = props.offset,
      reverse = props.reverse;

  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }

  var positonStyle = vertical ? (_ref = {}, (0, _defineProperty2.default)(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref, reverse ? 'bottom' : 'top', 'auto'), (0, _defineProperty2.default)(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, (0, _defineProperty2.default)(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref2, reverse ? 'left' : 'right', 'auto'), (0, _defineProperty2.default)(_ref2, "width", "".concat(length, "%")), _ref2);
  var elStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), positonStyle);
  return included ? /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: elStyle
  }) : null;
};

var _default = Track;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/createSlider.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/createSlider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSlider;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _addEventListener = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _Steps = _interopRequireDefault(__webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/lib/common/Steps.js"));

var _Marks = _interopRequireDefault(__webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/lib/common/Marks.js"));

var _Handle = _interopRequireDefault(__webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/lib/Handle.js"));

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/rc-slider/lib/utils.js"));

/* eslint-disable @typescript-eslint/no-explicit-any */
function noop() {}

function createSlider(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_Component) {
    (0, _inherits2.default)(ComponentEnhancer, _Component);

    var _super = (0, _createSuper2.default)(ComponentEnhancer);

    function ComponentEnhancer(props) {
      var _this;

      (0, _classCallCheck2.default)(this, ComponentEnhancer);
      _this = _super.call(this, props);

      _this.onDown = function (e, position) {
        var p = position;
        var _this$props = _this.props,
            draggableTrack = _this$props.draggableTrack,
            isVertical = _this$props.vertical;
        var bounds = _this.state.bounds;
        var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
        var inPoint = utils.isEventFromHandle(e, _this.handlesRefs);
        _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function (n, i) {
          var v = !i ? n >= bounds[i] : true;
          return i === value.length - 1 ? n <= bounds[i] : v;
        }).some(function (c) {
          return !c;
        });

        if (_this.dragTrack) {
          _this.dragOffset = p;
          _this.startBounds = (0, _toConsumableArray2.default)(bounds);
        } else {
          if (!inPoint) {
            _this.dragOffset = 0;
          } else {
            var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
            _this.dragOffset = p - handlePosition;
            p = handlePosition;
          }

          _this.onStart(p);
        }
      };

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        _this.removeDocumentEvents();

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;
        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentTouchEvents();

        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props2 = _this.props,
            onFocus = _this$props2.onFocus,
            vertical = _this$props2.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs) && !_this.dragTrack) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;

          _this.onStart(handlePosition);

          utils.pauseEvent(e);

          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (!_this.dragTrack) {
          _this.onEnd();
        }

        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = utils.getMousePosition(_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();

        _this.onChange({
          value: value
        }); // eslint-disable-next-line react/no-unused-state


        _this.setState({
          value: value
        }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;
      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line

      (0, _warning.default)(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
      _this.handlesRefs = {};
      return _this;
    }

    (0, _createClass2.default)(ComponentEnhancer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var _this$props3 = this.props,
            autoFocus = _this$props3.autoFocus,
            disabled = _this$props3.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if ((0, _get2.default)((0, _getPrototypeOf2.default)(ComponentEnhancer.prototype), "componentWillUnmount", this)) (0, _get2.default)((0, _getPrototypeOf2.default)(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _this$props4 = this.props,
            vertical = _this$props4.vertical,
            reverse = _this$props4.reverse;
        var rect = slider.getBoundingClientRect();

        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }

        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: "getSliderLength",
      value: function getSliderLength() {
        var slider = this.sliderRef;

        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = (0, _addEventListener.default)(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = (0, _addEventListener.default)(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = (0, _addEventListener.default)(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = (0, _addEventListener.default)(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function removeDocumentEvents() {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: "focus",
      value: function focus() {
        var _this$handlesRefs$;

        if (this.props.disabled) {
          return;
        }

        (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        var _this2 = this;

        if (this.props.disabled) {
          return;
        }

        Object.keys(this.handlesRefs).forEach(function (key) {
          var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;

          (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 ? void 0 : (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 ? void 0 : _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
        });
      }
    }, {
      key: "calcValue",
      value: function calcValue(offset) {
        var _this$props5 = this.props,
            vertical = _this$props5.vertical,
            min = _this$props5.min,
            max = _this$props5.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: "calcValueByPos",
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: "calcOffset",
      value: function calcOffset(value) {
        var _this$props6 = this.props,
            min = _this$props6.min,
            max = _this$props6.max;
        var ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
      }
    }, {
      key: "saveHandle",
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props7 = this.props,
            prefixCls = _this$props7.prefixCls,
            className = _this$props7.className,
            marks = _this$props7.marks,
            dots = _this$props7.dots,
            step = _this$props7.step,
            included = _this$props7.included,
            disabled = _this$props7.disabled,
            vertical = _this$props7.vertical,
            reverse = _this$props7.reverse,
            min = _this$props7.min,
            max = _this$props7.max,
            children = _this$props7.children,
            maximumTrackStyle = _this$props7.maximumTrackStyle,
            style = _this$props7.style,
            railStyle = _this$props7.railStyle,
            dotStyle = _this$props7.dotStyle,
            activeDotStyle = _this$props7.activeDotStyle;

        var _get$call = (0, _get2.default)((0, _getPrototypeOf2.default)(ComponentEnhancer.prototype), "render", this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = (0, _classnames.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0, _defineProperty2.default)(_classNames, className, className), _classNames));
        return /*#__PURE__*/_react.default.createElement("div", {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(prefixCls, "-rail"),
          style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, maximumTrackStyle), railStyle)
        }), tracks, /*#__PURE__*/_react.default.createElement(_Steps.default, {
          prefixCls: prefixCls,
          vertical: vertical,
          reverse: reverse,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }), handles, /*#__PURE__*/_react.default.createElement(_Marks.default, {
          className: "".concat(prefixCls, "-mark"),
          onClickLabel: disabled ? noop : this.onClickMarkLabel,
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          reverse: reverse
        }), children);
      }
    }]);
    return ComponentEnhancer;
  }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, Component.defaultProps), {}, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(props) {
      var index = props.index,
          restProps = (0, _objectWithoutProperties2.default)(props, ["index"]);
      delete restProps.dragging;

      if (restProps.value === null) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement(_Handle.default, (0, _extends2.default)({}, restProps, {
        key: index
      }));
    },
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;
exports.calculateNextValue = calculateNextValue;
exports.getKeyboardValueMutator = getKeyboardValueMutator;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _KeyCode = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/KeyCode */ "./node_modules/rc-util/lib/KeyCode.js"));

function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === (0, _reactDom.findDOMNode)(handles[key]);
    });
  } catch (error) {
    return false;
  }
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;
  var points = Object.keys(marks).map(parseFloat);

  if (step !== null) {
    var baseNum = Math.pow(10, getPrecision(step));
    var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }

  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, (0, _toConsumableArray2.default)(diffs)))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;

  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }

  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }

  if (val >= max) {
    return max;
  }

  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;
  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line

  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };
  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  }

  if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }

  return value;
}

function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;

  switch (e.keyCode) {
    case _KeyCode.default.UP:
      method = vertical && reverse ? decrease : increase;
      break;

    case _KeyCode.default.RIGHT:
      method = !vertical && reverse ? decrease : increase;
      break;

    case _KeyCode.default.DOWN:
      method = vertical && reverse ? increase : decrease;
      break;

    case _KeyCode.default.LEFT:
      method = !vertical && reverse ? increase : decrease;
      break;

    case _KeyCode.default.END:
      return function (value, props) {
        return props.max;
      };

    case _KeyCode.default.HOME:
      return function (value, props) {
        return props.min;
      };

    case _KeyCode.default.PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };

    case _KeyCode.default.PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }

  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}

/***/ }),

/***/ "./node_modules/rc-switch/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-switch/es/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");







var Switch = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (_ref, ref) {
  var _classNames;

  var _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
      className = _ref.className,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      loadingIcon = _ref.loadingIcon,
      checkedChildren = _ref.checkedChildren,
      unCheckedChildren = _ref.unCheckedChildren,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_5__["default"])(false, {
    value: checked,
    defaultValue: defaultChecked
  }),
      _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMergedState, 2),
      innerChecked = _useMergedState2[0],
      setInnerChecked = _useMergedState2[1];

  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalKeyDown(e) {
    if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].LEFT) {
      triggerChange(false, e);
    } else if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].RIGHT) {
      triggerChange(true, e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }

  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }

  var switchClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-checked"), innerChecked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", Object.assign({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    className: "".concat(prefixCls, "-inner")
  }, innerChecked ? checkedChildren : unCheckedChildren));
});
Switch.displayName = 'Switch';
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/KeyCode.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (KeyCode);

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useMergedState.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useMergedState.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useControlledState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](true);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/addEventListener.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/addEventListener.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListenerWrap;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
    _reactDom.default.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-util/lib/KeyCode.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/lib/KeyCode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
var _default = KeyCode;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-util/lib/warning.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/lib/warning.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.note = note;
exports.resetWarned = resetWarned;
exports.call = call;
exports.warningOnce = warningOnce;
exports.noteOnce = noteOnce;
exports.default = void 0;

/* eslint-disable no-console */
var warned = {};

function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}

function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}

function resetWarned() {
  warned = {};
}

function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid, message) {
  call(warning, valid, message);
}

function noteOnce(valid, message) {
  call(note, valid, message);
}

var _default = warningOnce;
/* eslint-enable */

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/Draggable.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/Draggable.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggableCore", {
  enumerable: true,
  get: function get() {
    return _DraggableCore.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "./node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _DraggableCore = _interopRequireDefault(__webpack_require__(/*! ./DraggableCore */ "./node_modules/react-draggable/build/cjs/DraggableCore.js"));

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "./node_modules/react-draggable/build/cjs/utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Define <Draggable>
//
var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  _createClass(Draggable, null, [{
    key: "getDerivedStateFromProps",
    // React 16.3+
    // Arity (props, state)
    value: function getDerivedStateFromProps(_ref, _ref2) {
      var position = _ref.position;
      var prevPropsPosition = _ref2.prevPropsPosition;

      // Set x/y if a new position is provided in props that is different than the previous.
      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
        (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
          position: position,
          prevPropsPosition: prevPropsPosition
        });
        return {
          x: position.x,
          y: position.y,
          prevPropsPosition: _objectSpread({}, position)
        };
      }

      return null;
    }
  }]);

  function Draggable(props
  /*: DraggableProps*/
  ) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, coreData) {
      (0, _log.default)('Draggable: onDragStart: %j', coreData); // Short-circuit if user's callback killed it.

      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData)); // Kills start event on core as well, so move handlers are never bound.


      if (shouldStart === false) return false;

      _this.setState({
        dragging: true,
        dragged: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, coreData) {
      if (!_this.state.dragging) return false;
      (0, _log.default)('Draggable: onDrag: %j', coreData);
      var uiData = (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        x: uiData.x,
        y: uiData.y
      }; // Keep within bounds.

      if (_this.props.bounds) {
        // Save original x and y.
        var x = newState.x,
            y = newState.y; // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY; // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY; // Recalculate slack by noting how much was shaved by the boundPosition handler.

        newState.slackX = _this.state.slackX + (x - newState.x);
        newState.slackY = _this.state.slackY + (y - newState.y); // Update the event we fire to reflect what really happened after bounds took effect.

        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      } // Short-circuit if user's callback killed it.


      var shouldUpdate = _this.props.onDrag(e, uiData);

      if (shouldUpdate === false) return false;

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, coreData) {
      if (!_this.state.dragging) return false; // Short-circuit if user's callback killed it.

      var shouldContinue = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));

      if (shouldContinue === false) return false;
      (0, _log.default)('Draggable: onDragStop: %j', coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        dragging: false,
        slackX: 0,
        slackY: 0
      }; // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.

      var controlled = Boolean(_this.props.position);

      if (controlled) {
        var _this$props$position = _this.props.position,
            x = _this$props$position.x,
            y = _this$props$position.y;
        newState.x = x;
        newState.y = y;
      }

      _this.setState(newState);
    });

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: _objectSpread({}, props.position),
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };

    if (props.position && !(props.onDrag || props.onStop)) {
      // eslint-disable-next-line no-console
      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
    }

    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        dragging: false
      }); // prevents invariant if unmounted while dragging
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactElement<any>*/
    {
      var _classNames;

      var _this$props = this.props,
          axis = _this$props.axis,
          bounds = _this$props.bounds,
          children = _this$props.children,
          defaultPosition = _this$props.defaultPosition,
          defaultClassName = _this$props.defaultClassName,
          defaultClassNameDragging = _this$props.defaultClassNameDragging,
          defaultClassNameDragged = _this$props.defaultClassNameDragged,
          position = _this$props.position,
          positionOffset = _this$props.positionOffset,
          scale = _this$props.scale,
          draggableCoreProps = _objectWithoutProperties(_this$props, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"]);

      var style = {};
      var svgTransform = null; // If this is controlled, we don't want to move it - unless it's dragging.

      var controlled = Boolean(position);
      var draggable = !controlled || this.state.dragging;
      var validPosition = position || defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
        // Set top if vertical drag is enabled
        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
      }; // If this element was SVG, we use the `transform` attribute.

      if (this.state.isElementSVG) {
        svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
      } // Mark with class while dragging


      var className = (0, _classnames.default)(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames)); // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)

      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), React.cloneElement(React.Children.only(children), {
        className: className,
        style: _objectSpread(_objectSpread({}, children.props.style), style),
        transform: svgTransform
      }));
    }
  }]);

  return Draggable;
}(React.Component);

exports.default = Draggable;

_defineProperty(Draggable, "displayName", 'Draggable');

_defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
    left: _propTypes.default.number,
    right: _propTypes.default.number,
    top: _propTypes.default.number,
    bottom: _propTypes.default.number
  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
  defaultClassName: _propTypes.default.string,
  defaultClassNameDragging: _propTypes.default.string,
  defaultClassNameDragged: _propTypes.default.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  positionOffset: _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
}));

_defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: {
    x: 0,
    y: 0
  },
  position: null,
  scale: 1
}));

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/DraggableCore.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/DraggableCore.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "./node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "./node_modules/react-draggable/build/cjs/utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Simple abstraction for dragging events names.
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
}; // Default to mouse events.

var dragEventFor = eventsFor.mouse;
/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/

/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
var DraggableCore = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  var _super = _createSuper(DraggableCore);

  function DraggableCore() {
    var _this;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e); // Only accept left-clicks.


      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false; // Get nodes. Be sure to grab relative document (could be iframed)

      var thisNode = _this.findDOMNode();

      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }

      var ownerDocument = thisNode.ownerDocument; // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      } // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.


      if (e.type === 'touchstart') e.preventDefault(); // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.

      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);

      _this.setState({
        touchIdentifier: touchIdentifier
      }); // Get the current drag point from the event. This is used as the offset.


      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent); // Call event handler. If it returns explicit false, cancel.

      (0, _log.default)('calling', _this.props.onStart);

      var shouldUpdate = _this.props.onStart(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) return; // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.

      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument); // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.

      _this.setState({
        dragging: true,
        lastX: x,
        lastY: y
      }); // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.


      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      // Get the current drag point from the event. This is used as the offset.
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX,
            deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        deltaX = _snapToGrid2[0];
        deltaY = _snapToGrid2[1];
        if (!deltaX && !deltaY) return; // skip useless drag

        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent); // Call event handler. If it returns explicit false, trigger end.

      var shouldUpdate = _this.props.onDrag(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents')
          /*: any*/
          )
          /*: MouseTouchEvent*/
          ); // I see why this insanity was deprecated
          // $FlowIgnore

          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

          _this.handleDragStop(event);
        }

        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function (e) {
      if (!_this.state.dragging) return;
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y;
      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y); // Call event handler

      var shouldContinue = _this.props.onStop(e, coreEvent);

      if (shouldContinue === false || _this.mounted === false) return false;

      var thisNode = _this.findDOMNode();

      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent); // Reset the el.

      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      dragEventFor = eventsFor.mouse;
      return _this.handleDragStop(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStop(e);
    });

    return _this;
  }

  _createClass(DraggableCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true; // Touch handlers must be added with {passive: false} to be cancelable.
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention

      var thisNode = this.findDOMNode();

      if (thisNode) {
        (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false; // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.

      var thisNode = this.findDOMNode();

      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
      }
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return React.cloneElement(React.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See 
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(React.Component);

exports.default = DraggableCore;

_defineProperty(DraggableCore, "displayName", 'DraggableCore');

_defineProperty(DraggableCore, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props
  /*: DraggableCoreProps*/
  , propName
  /*: $Keys<DraggableCoreProps>*/
  ) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,

  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,

  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});

_defineProperty(DraggableCore, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Draggable */ "./node_modules/react-draggable/build/cjs/Draggable.js"),
    Draggable = _require.default,
    DraggableCore = _require.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = DraggableCore;

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/domFns.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/domFns.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.offsetXYFromParent = offsetXYFromParent;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTranslation = getTranslation;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.addUserSelectStyles = addUserSelectStyles;
exports.removeUserSelectStyles = removeUserSelectStyles;
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;

var _shims = __webpack_require__(/*! ./shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _getPrefix = _interopRequireWildcard(__webpack_require__(/*! ./getPrefix */ "./node_modules/react-draggable/build/cjs/utils/getPrefix.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchesSelectorFunc = '';

function matchesSelector(el
/*: Node*/
, selector
/*: string*/
)
/*: boolean*/
{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, _shims.isFunction)(el[method]);
    });
  } // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable


  if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false; // $FlowIgnore: Doesn't think elements are indexable

  return el[matchesSelectorFunc](selector);
} // Works up the tree to the draggable itself attempting to match selector.


function matchesSelectorAndParentsTo(el
/*: Node*/
, selector
/*: string*/
, baseNode
/*: Node*/
)
/*: boolean*/
{
  var node = el;

  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions);

  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions);

  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims.int)(computedStyle.borderTopWidth);
  height += (0, _shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims.int)(computedStyle.borderLeftWidth);
  width += (0, _shims.int)(computedStyle.borderRightWidth);
  return width;
}

function innerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims.int)(computedStyle.paddingTop);
  height -= (0, _shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims.int)(computedStyle.paddingLeft);
  width -= (0, _shims.int)(computedStyle.paddingRight);
  return width;
} // Get from offsetParent


function offsetXYFromParent(evt
/*: {clientX: number, clientY: number}*/
, offsetParent
/*: HTMLElement*/
, scale
/*: number*/
)
/*: ControlPosition*/
{
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x,
    y: y
  };
}

function createCSSTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: Object*/
{
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default), translation);
}

function createSVGTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: string*/
{
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}

function getTranslation(_ref2, positionOffset
/*: PositionOffsetControlPosition*/
, unitSuffix
/*: string*/
)
/*: string*/
{
  var x = _ref2.x,
      y = _ref2.y;
  var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");

  if (positionOffset) {
    var defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }

  return translation;
}

function getTouch(e
/*: MouseTouchEvent*/
, identifier
/*: number*/
)
/*: ?{clientX: number, clientY: number}*/
{
  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e
/*: MouseTouchEvent*/
)
/*: ?number*/
{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
} // User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed


function addUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');

  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;

  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection'); // $FlowIgnore: IE

    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      var selection = (doc.defaultView || window).getSelection();

      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {// probably IE
  }
}

function addClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}

function removeClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
  }
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/getPrefix.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/getPrefix.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports.default = void 0;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];

function getPrefix()
/*: string*/
{
  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
  var style = window.document.documentElement.style;
  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}

function browserPrefixToStyle(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}

function kebabToTitleCase(str
/*: string*/
)
/*: string*/
{
  var out = '';
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }

  return out;
} // Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`


var _default = getPrefix();

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/log.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (undefined) (_console = console).log.apply(_console, arguments);
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/positionFns.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/positionFns.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundPosition = getBoundPosition;
exports.snapToGrid = snapToGrid;
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.getControlPosition = getControlPosition;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;

var _shims = __webpack_require__(/*! ./shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _domFns = __webpack_require__(/*! ./domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");

function getBoundPosition(draggable
/*: Draggable*/
, x
/*: number*/
, y
/*: number*/
)
/*: [number, number]*/
{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y]; // Clone new bounds

  var bounds = draggable.props.bounds;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode;

    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }

    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
    };
  } // Keep x and y below right and bottom limits...


  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom); // But above left and top limits.

  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}

function snapToGrid(grid
/*: [number, number]*/
, pendingX
/*: number*/
, pendingY
/*: number*/
)
/*: [number, number]*/
{
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
} // Get {x, y} positions from event.


function getControlPosition(e
/*: MouseTouchEvent*/
, touchIdentifier
/*: ?number*/
, draggableCore
/*: DraggableCore*/
)
/*: ?ControlPosition*/
{
  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch

  var node = findDOMNode(draggableCore); // User can provide an offsetParent if desired.

  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
} // Create an data object exposed by <DraggableCore>'s events


function createCoreData(draggable
/*: DraggableCore*/
, x
/*: number*/
, y
/*: number*/
)
/*: DraggableData*/
{
  var state = draggable.state;
  var isStart = !(0, _shims.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX,
      deltaY: y - state.lastY,
      lastX: state.lastX,
      lastY: state.lastY,
      x: x,
      y: y
    };
  }
} // Create an data exposed by <Draggable>'s events


function createDraggableData(draggable
/*: Draggable*/
, coreData
/*: DraggableData*/
)
/*: DraggableData*/
{
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
} // A lot faster than stringify/parse


function cloneBounds(bounds
/*: Bounds*/
)
/*: Bounds*/
{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable
/*: Draggable | DraggableCore*/
)
/*: HTMLElement*/
{
  var node = draggable.findDOMNode();

  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  } // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME


  return node;
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/shims.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/shims.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArray = findInArray;
exports.isFunction = isFunction;
exports.isNum = isNum;
exports.int = int;
exports.dontSetMe = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array
/*: Array<any> | TouchList*/
, callback
/*: Function*/
)
/*: any*/
{
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func
/*: any*/
)
/*: boolean %checks*/
{
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num
/*: any*/
)
/*: boolean %checks*/
{
  return typeof num === 'number' && !isNaN(num);
}

function int(a
/*: string*/
)
/*: number*/
{
  return parseInt(a, 10);
}

function dontSetMe(props
/*: Object*/
, propName
/*: string*/
, componentName
/*: string*/
) {
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/components/AudioListsPanel.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/components/AudioListsPanel.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/player */ "./node_modules/react-jinke-music-player/es/config/player.js");
/* harmony import */ var _config_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/sortable */ "./node_modules/react-jinke-music-player/es/config/sortable.js");





var AudioListsPanel = function AudioListsPanel(_ref) {
  var audioLists = _ref.audioLists,
      onCancel = _ref.onCancel,
      onDelete = _ref.onDelete,
      onPlay = _ref.onPlay,
      playId = _ref.playId,
      loading = _ref.loading,
      panelToggleAnimate = _ref.panelToggleAnimate,
      glassBg = _ref.glassBg,
      remove = _ref.remove,
      removeId = _ref.removeId,
      isMobile = _ref.isMobile,
      locale = _ref.locale,
      icon = _ref.icon,
      playing = _ref.playing;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('audio-lists-panel', panelToggleAnimate, {
      'audio-lists-panel-mobile': isMobile,
      'glass-bg': glassBg
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "audio-lists-panel-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "audio-lists-panel-header-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, locale.playListsText, " / "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "audio-lists-panel-header-num"
  }, audioLists.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "audio-lists-panel-header-actions"
  }, remove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "audio-lists-panel-header-delete-btn",
    title: locale.removeAudioListsText,
    onClick: onDelete()
  }, icon["delete"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "audio-lists-panel-header-line"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "audio-lists-panel-header-close-btn",
    title: locale.closeText,
    onClick: onCancel
  }, isMobile ? icon.packUpPanelMobile : icon.close)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('audio-lists-panel-content', {
      'no-content': audioLists.length < 1
    })
  }, audioLists.length >= 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _config_sortable__WEBPACK_IMPORTED_MODULE_3__["default"].selector
  }, audioLists.map(function (audio) {
    var name = audio.name,
        singer = audio.singer;
    var audioId = audio[_config_player__WEBPACK_IMPORTED_MODULE_2__["PLAYER_KEY"]];
    var isCurrentPlaying = playId === audioId;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: audioId,
      title: !playing ? locale.clickToPlayText : isCurrentPlaying ? locale.clickToPauseText : locale.clickToPlayText,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('audio-item', {
        playing: isCurrentPlaying
      }, {
        pause: !playing
      }, {
        remove: removeId === audioId
      }),
      onClick: function onClick() {
        return onPlay(audioId);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "group player-status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "player-icons"
    }, isCurrentPlaying && loading ? icon.loading : isCurrentPlaying ? playing ? icon.pause : icon.play : undefined)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "group player-name",
      title: name
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "group player-singer",
      title: singer
    }, singer), remove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "group player-delete",
      title: locale.clickToDeleteText(name),
      onClick: onDelete(audioId)
    }, icon.close));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, icon.empty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "no-data"
  }, locale.emptyText || locale.notContentText))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(AudioListsPanel));

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/components/CircleProcessBar.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/components/CircleProcessBar.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// 迷你模式进度条


var CircleProcessBar = function CircleProcessBar() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$r = _ref.r,
      r = _ref$r === void 0 ? 40 : _ref$r;

  var currentProgress = progress.toFixed(2);
  var perimeter = Math.PI * 2 * r;
  var strokeDasharray = "".concat(Math.floor(perimeter * currentProgress), " ").concat(Math.floor(perimeter * (1 - currentProgress)));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "audio-circle-process-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "stroke",
    strokeDasharray: strokeDasharray
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "bg",
    strokeDasharray: "0 1000"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(CircleProcessBar));

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/components/Icon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/components/Icon.js ***!
  \*********************************************************************/
/*! exports provided: LyricIcon, FaHeadphonesIcon, FaMinusSquareOIcon, LoadIcon, ReloadIcon, ArrowDownIcon, VolumeMuteIcon, VolumeUnmuteIcon, CloseIcon, EmptyIcon, RepeatIcon, LoopIcon, PrevAudioIcon, OrderPlayIcon, NextAudioIcon, DeleteIcon, PlayListsIcon, ShufflePlayIcon, DownloadIcon, AnimatePlayIcon, AnimatePauseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePlayIcon", function() { return AnimatePlayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePauseIcon", function() { return AnimatePauseIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_icons_all_files_fa_FaPauseCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-icons/all-files/fa/FaPauseCircle */ "./node_modules/@react-icons/all-files/fa/FaPauseCircle.js");
/* harmony import */ var _react_icons_all_files_fa_FaPauseCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaPauseCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_icons_all_files_fa_FaPlayCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-icons/all-files/fa/FaPlayCircle */ "./node_modules/@react-icons/all-files/fa/FaPlayCircle.js");
/* harmony import */ var _react_icons_all_files_fa_FaPlayCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaPlayCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_icons_all_files_fa_FaBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-icons/all-files/fa/FaBook */ "./node_modules/@react-icons/all-files/fa/FaBook.js");
/* harmony import */ var _react_icons_all_files_fa_FaBook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaBook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LyricIcon", function() { return _react_icons_all_files_fa_FaBook__WEBPACK_IMPORTED_MODULE_3__["FaBook"]; });

/* harmony import */ var _react_icons_all_files_fa_FaHeadphones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-icons/all-files/fa/FaHeadphones */ "./node_modules/@react-icons/all-files/fa/FaHeadphones.js");
/* harmony import */ var _react_icons_all_files_fa_FaHeadphones__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaHeadphones__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaHeadphonesIcon", function() { return _react_icons_all_files_fa_FaHeadphones__WEBPACK_IMPORTED_MODULE_4__["FaHeadphones"]; });

/* harmony import */ var _react_icons_all_files_fa_FaRegMinusSquare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-icons/all-files/fa/FaRegMinusSquare */ "./node_modules/@react-icons/all-files/fa/FaRegMinusSquare.js");
/* harmony import */ var _react_icons_all_files_fa_FaRegMinusSquare__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaRegMinusSquare__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaMinusSquareOIcon", function() { return _react_icons_all_files_fa_FaRegMinusSquare__WEBPACK_IMPORTED_MODULE_5__["FaRegMinusSquare"]; });

/* harmony import */ var _react_icons_all_files_fa_FaSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-icons/all-files/fa/FaSpinner */ "./node_modules/@react-icons/all-files/fa/FaSpinner.js");
/* harmony import */ var _react_icons_all_files_fa_FaSpinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaSpinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadIcon", function() { return _react_icons_all_files_fa_FaSpinner__WEBPACK_IMPORTED_MODULE_6__["FaSpinner"]; });

/* harmony import */ var _react_icons_all_files_fa_FaSyncAlt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-icons/all-files/fa/FaSyncAlt */ "./node_modules/@react-icons/all-files/fa/FaSyncAlt.js");
/* harmony import */ var _react_icons_all_files_fa_FaSyncAlt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaSyncAlt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReloadIcon", function() { return _react_icons_all_files_fa_FaSyncAlt__WEBPACK_IMPORTED_MODULE_7__["FaSyncAlt"]; });

/* harmony import */ var _react_icons_all_files_fi_FiChevronsDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-icons/all-files/fi/FiChevronsDown */ "./node_modules/@react-icons/all-files/fi/FiChevronsDown.js");
/* harmony import */ var _react_icons_all_files_fi_FiChevronsDown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fi_FiChevronsDown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDownIcon", function() { return _react_icons_all_files_fi_FiChevronsDown__WEBPACK_IMPORTED_MODULE_8__["FiChevronsDown"]; });

/* harmony import */ var _react_icons_all_files_go_GoMute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-icons/all-files/go/GoMute */ "./node_modules/@react-icons/all-files/go/GoMute.js");
/* harmony import */ var _react_icons_all_files_go_GoMute__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_go_GoMute__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeMuteIcon", function() { return _react_icons_all_files_go_GoMute__WEBPACK_IMPORTED_MODULE_9__["GoMute"]; });

/* harmony import */ var _react_icons_all_files_go_GoUnmute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-icons/all-files/go/GoUnmute */ "./node_modules/@react-icons/all-files/go/GoUnmute.js");
/* harmony import */ var _react_icons_all_files_go_GoUnmute__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_go_GoUnmute__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeUnmuteIcon", function() { return _react_icons_all_files_go_GoUnmute__WEBPACK_IMPORTED_MODULE_10__["GoUnmute"]; });

/* harmony import */ var _react_icons_all_files_md_MdClose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-icons/all-files/md/MdClose */ "./node_modules/@react-icons/all-files/md/MdClose.js");
/* harmony import */ var _react_icons_all_files_md_MdClose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_md_MdClose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return _react_icons_all_files_md_MdClose__WEBPACK_IMPORTED_MODULE_11__["MdClose"]; });

/* harmony import */ var _react_icons_all_files_md_MdLibraryMusic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react-icons/all-files/md/MdLibraryMusic */ "./node_modules/@react-icons/all-files/md/MdLibraryMusic.js");
/* harmony import */ var _react_icons_all_files_md_MdLibraryMusic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_md_MdLibraryMusic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyIcon", function() { return _react_icons_all_files_md_MdLibraryMusic__WEBPACK_IMPORTED_MODULE_12__["MdLibraryMusic"]; });

/* harmony import */ var _react_icons_all_files_md_MdRepeat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @react-icons/all-files/md/MdRepeat */ "./node_modules/@react-icons/all-files/md/MdRepeat.js");
/* harmony import */ var _react_icons_all_files_md_MdRepeat__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_md_MdRepeat__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatIcon", function() { return _react_icons_all_files_md_MdRepeat__WEBPACK_IMPORTED_MODULE_13__["MdRepeat"]; });

/* harmony import */ var _react_icons_all_files_md_MdRepeatOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @react-icons/all-files/md/MdRepeatOne */ "./node_modules/@react-icons/all-files/md/MdRepeatOne.js");
/* harmony import */ var _react_icons_all_files_md_MdRepeatOne__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_md_MdRepeatOne__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopIcon", function() { return _react_icons_all_files_md_MdRepeatOne__WEBPACK_IMPORTED_MODULE_14__["MdRepeatOne"]; });

/* harmony import */ var _react_icons_all_files_md_MdSkipPrevious__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @react-icons/all-files/md/MdSkipPrevious */ "./node_modules/@react-icons/all-files/md/MdSkipPrevious.js");
/* harmony import */ var _react_icons_all_files_md_MdSkipPrevious__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_md_MdSkipPrevious__WEBPACK_IMPORTED_MODULE_15__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrevAudioIcon", function() { return _react_icons_all_files_md_MdSkipPrevious__WEBPACK_IMPORTED_MODULE_15__["MdSkipPrevious"]; });

/* harmony import */ var _react_icons_all_files_md_MdViewHeadline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @react-icons/all-files/md/MdViewHeadline */ "./node_modules/@react-icons/all-files/md/MdViewHeadline.js");
/* harmony import */ var _react_icons_all_files_md_MdViewHeadline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_md_MdViewHeadline__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderPlayIcon", function() { return _react_icons_all_files_md_MdViewHeadline__WEBPACK_IMPORTED_MODULE_16__["MdViewHeadline"]; });

/* harmony import */ var _react_icons_all_files_md_MdSkipNext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @react-icons/all-files/md/MdSkipNext */ "./node_modules/@react-icons/all-files/md/MdSkipNext.js");
/* harmony import */ var _react_icons_all_files_md_MdSkipNext__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_md_MdSkipNext__WEBPACK_IMPORTED_MODULE_17__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextAudioIcon", function() { return _react_icons_all_files_md_MdSkipNext__WEBPACK_IMPORTED_MODULE_17__["MdSkipNext"]; });

/* harmony import */ var _react_icons_all_files_ri_RiDeleteBinLine__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @react-icons/all-files/ri/RiDeleteBinLine */ "./node_modules/@react-icons/all-files/ri/RiDeleteBinLine.js");
/* harmony import */ var _react_icons_all_files_ri_RiDeleteBinLine__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_ri_RiDeleteBinLine__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteIcon", function() { return _react_icons_all_files_ri_RiDeleteBinLine__WEBPACK_IMPORTED_MODULE_18__["RiDeleteBinLine"]; });

/* harmony import */ var _react_icons_all_files_ri_RiPlayList2Fill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @react-icons/all-files/ri/RiPlayList2Fill */ "./node_modules/@react-icons/all-files/ri/RiPlayList2Fill.js");
/* harmony import */ var _react_icons_all_files_ri_RiPlayList2Fill__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_ri_RiPlayList2Fill__WEBPACK_IMPORTED_MODULE_19__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayListsIcon", function() { return _react_icons_all_files_ri_RiPlayList2Fill__WEBPACK_IMPORTED_MODULE_19__["RiPlayList2Fill"]; });

/* harmony import */ var _react_icons_all_files_ti_TiArrowShuffle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @react-icons/all-files/ti/TiArrowShuffle */ "./node_modules/@react-icons/all-files/ti/TiArrowShuffle.js");
/* harmony import */ var _react_icons_all_files_ti_TiArrowShuffle__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_ti_TiArrowShuffle__WEBPACK_IMPORTED_MODULE_20__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShufflePlayIcon", function() { return _react_icons_all_files_ti_TiArrowShuffle__WEBPACK_IMPORTED_MODULE_20__["TiArrowShuffle"]; });

/* harmony import */ var _react_icons_all_files_ti_TiDownload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @react-icons/all-files/ti/TiDownload */ "./node_modules/@react-icons/all-files/ti/TiDownload.js");
/* harmony import */ var _react_icons_all_files_ti_TiDownload__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_ti_TiDownload__WEBPACK_IMPORTED_MODULE_21__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadIcon", function() { return _react_icons_all_files_ti_TiDownload__WEBPACK_IMPORTED_MODULE_21__["TiDownload"]; });























var AnimatePlayIcon = function AnimatePlayIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_icons_all_files_fa_FaPlayCircle__WEBPACK_IMPORTED_MODULE_2__["FaPlayCircle"], {
    className: "react-jinke-music-player-play-icon"
  });
};
var AnimatePauseIcon = function AnimatePauseIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_icons_all_files_fa_FaPauseCircle__WEBPACK_IMPORTED_MODULE_1__["FaPauseCircle"], {
    className: "react-jinke-music-player-pause-icon"
  });
};

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/components/PlayModeTip.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/components/PlayModeTip.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PlayModeTip = function PlayModeTip(_ref) {
  var prefix = _ref.prefix,
      visible = _ref.visible,
      title = _ref.title,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefix, "-play-model-tip"), {
      show: visible
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "".concat(prefix, "-play-model-tip-title")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "".concat(prefix, "-play-model-tip-text")
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PlayModeTip));

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/components/PlayModel.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/components/PlayModel.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PlayModel = function PlayModel(_ref) {
  var visible = _ref.visible,
      value = _ref.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('play-mode-title', {
      'play-mode-title-visible': visible
    })
  }, value);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PlayModel));

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/components/PlayerMobile.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/components/PlayerMobile.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlayModeTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayModeTip */ "./node_modules/react-jinke-music-player/es/components/PlayModeTip.js");



var prefix = 'react-jinke-music-player-mobile';

var PlayerMobile = function PlayerMobile(_ref) {
  var name = _ref.name,
      cover = _ref.cover,
      singer = _ref.singer,
      playing = _ref.playing,
      duration = _ref.duration,
      currentTime = _ref.currentTime,
      loading = _ref.loading,
      themeSwitch = _ref.themeSwitch,
      progressBar = _ref.progressBar,
      openAudioListsPanel = _ref.openAudioListsPanel,
      audioPrevPlay = _ref.audioPrevPlay,
      audioNextPlay = _ref.audioNextPlay,
      playMode = _ref.playMode,
      onClose = _ref.onClose,
      playModeTipVisible = _ref.playModeTipVisible,
      currentPlayModeName = _ref.currentPlayModeName,
      extendsContent = _ref.extendsContent,
      onPlay = _ref.onPlay,
      glassBg = _ref.glassBg,
      onCoverClick = _ref.onCoverClick,
      autoHiddenCover = _ref.autoHiddenCover,
      icon = _ref.icon,
      locale = _ref.locale,
      toggleMode = _ref.toggleMode,
      renderAudioTitle = _ref.renderAudioTitle,
      shouldShowPlayIcon = _ref.shouldShowPlayIcon,
      isResetCoverRotate = _ref.isResetCoverRotate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefix, {
      'default-bg': !glassBg,
      'glass-bg': glassBg
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayModeTip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefix: prefix,
    visible: playModeTipVisible,
    title: playMode,
    text: currentPlayModeName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-header group")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-header-title"),
    title: name
  }, renderAudioTitle()), toggleMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-header-right"),
    onClick: onClose
  }, icon.close)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-singer text-center group")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "".concat(prefix, "-singer-name"),
    title: singer
  }, singer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-switch text-center group")
  }, themeSwitch), (!autoHiddenCover || autoHiddenCover && cover) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-cover text-center"),
    onClick: function onClick() {
      return onCoverClick();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: cover,
    alt: "cover",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cover', {
      'img-rotate-pause': !playing || !cover,
      'img-rotate-reset': isResetCoverRotate
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-progress group")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "current-time"
  }, loading ? '--' : currentTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "".concat(prefix, "-progress-bar")
  }, progressBar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "duration text-right"
  }, loading ? '--' : duration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-toggle text-center group")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "group prev-audio",
    title: locale.previousTrackText,
    onClick: audioPrevPlay
  }, icon.prev), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "group loading-icon"
  }, icon.loading) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "group play-btn",
    title: shouldShowPlayIcon ? locale.clickToPlayText : locale.clickToPauseText,
    onClick: onPlay
  }, shouldShowPlayIcon ? icon.play : icon.pause), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "group next-audio",
    title: locale.nextTrackText,
    onClick: audioNextPlay
  }, icon.next)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefix, "-operation group")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "items"
  }, [playMode, icon.download, icon.reload, icon.lyric].filter(react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"]).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "item",
      key: item.props.className
    }, item);
  }), extendsContent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "item",
    onClick: openAudioListsPanel
  }, icon.playLists))));
};

PlayerMobile.defaultProps = {
  icon: {},
  renderAudioTitle: function renderAudioTitle() {}
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PlayerMobile));

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/animate.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/animate.js ***!
  \********************************************************************/
/*! exports provided: AUDIO_LIST_REMOVE_ANIMATE_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_LIST_REMOVE_ANIMATE_TIME", function() { return AUDIO_LIST_REMOVE_ANIMATE_TIME; });
var AUDIO_LIST_REMOVE_ANIMATE_TIME = 350; // 列表删除动画时间(ms)

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/audioState.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/audioState.js ***!
  \***********************************************************************/
/*! exports provided: AUDIO_NETWORK_STATE, AUDIO_READY_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_NETWORK_STATE", function() { return AUDIO_NETWORK_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_READY_STATE", function() { return AUDIO_READY_STATE; });
var AUDIO_NETWORK_STATE = {
  NETWORK_EMPTY: 0,
  // 未初始化
  NETWORK_IDLE: 1,
  // 未使用网络 304 缓存
  NETWORK_LOADING: 2,
  // 浏览器正在下载数据
  NETWORK_NO_SOURCE: 3,
  // 未找到资源
  NETWORK_READY_SUCCESS_STATE: 4 // 成功

};
var AUDIO_READY_STATE = {
  HAVE_NOTHING: 0,
  // 没有关于音频/视频是否就绪的信息
  HAVE_METADATA: 1,
  // 关于音频/视频就绪的元数据
  HAVE_CURRENT_DATA: 2,
  // 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
  HAVE_FUTURE_DATA: 3,
  // 当前及至少下一帧的数据是可用的
  HAVE_ENOUGH_DATA: 4 // 可用数据足以开始播放

};

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/keycode.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/keycode.js ***!
  \********************************************************************/
/*! exports provided: SPACE_BAR_KEYCODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_BAR_KEYCODE", function() { return SPACE_BAR_KEYCODE; });
var SPACE_BAR_KEYCODE = 32;

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/locale.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/locale.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  en_US: 'en_US',
  zh_CN: 'zh_CN'
});

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/mediaQuery.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/mediaQuery.js ***!
  \***********************************************************************/
/*! exports provided: MEDIA_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_QUERY", function() { return MEDIA_QUERY; });
var MEDIA_QUERY = {
  MOBILE: '(max-width: 768px) and (orientation : portrait)',
  DARK_THEME: 'screen and (prefers-color-scheme: dark)',
  LIGHT_THEME: 'screen and (prefers-color-scheme: light)'
};

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/mode.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/mode.js ***!
  \*****************************************************************/
/*! exports provided: MODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE", function() { return MODE; });
var MODE = {
  FULL: 'full',
  MINI: 'mini'
};

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/playMode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/playMode.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  order: 'order',
  orderLoop: 'orderLoop',
  singleLoop: 'singleLoop',
  shufflePlay: 'shufflePlay'
});

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/player.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/player.js ***!
  \*******************************************************************/
/*! exports provided: DEFAULT_PLAY_INDEX, DEFAULT_VOLUME, DEFAULT_REMOVE_ID, PLAYER_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PLAY_INDEX", function() { return DEFAULT_PLAY_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VOLUME", function() { return DEFAULT_VOLUME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_REMOVE_ID", function() { return DEFAULT_REMOVE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_KEY", function() { return PLAYER_KEY; });
var DEFAULT_PLAY_INDEX = 0;
var DEFAULT_VOLUME = 1;
var DEFAULT_REMOVE_ID = -1;
var PLAYER_KEY = '__PLAYER_KEY__';

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/propTypes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/propTypes.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/react-jinke-music-player/es/config/locale.js");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mode */ "./node_modules/react-jinke-music-player/es/config/mode.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./node_modules/react-jinke-music-player/es/config/theme.js");




var playModePropTypes = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['order', 'orderLoop', 'singleLoop', 'shufflePlay']);
/* harmony default export */ __webpack_exports__["default"] = ({
  audioLists: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object.values(_locale__WEBPACK_IMPORTED_MODULE_1__["default"]))]),
  theme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object.values(_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"])),
  mode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object.values(_mode__WEBPACK_IMPORTED_MODULE_2__["MODE"])),
  defaultPlayMode: playModePropTypes,
  playMode: playModePropTypes,
  drag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  seeked: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  clearPriorAudioLists: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  autoPlayInitLoadPlayList: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  playModeText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  panelTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  closeText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  openText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  clickToPlayText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  clickToPauseText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  nextTrackText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  previousTrackText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  reloadText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  volumeText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  playListsText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  toggleLyricText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  toggleMiniModeText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  destroyText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  downloadText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  emptyText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  controllerTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  defaultPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
  }),
  onAudioPlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioPause: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioEnded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioAbort: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioVolumeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioProgress: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioSeeked: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioDownload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioReload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onThemeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioListsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onPlayModeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onModeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioListsPanelChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioPlayTrackChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioListsSortEnd: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAudioLyricChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  showDownload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showPlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showReload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showPlayMode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showThemeSwitch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showMiniModeCover: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  toggleMode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  once: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  extendsContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  checkedText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  unCheckedText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  defaultVolume: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  playModeShowTime: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  bounds: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  showMiniProcessBar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  loadAudioErrorPlayNext: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  preload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['auto', 'metadata', 'none'])]),
  glassBg: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  remember: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  remove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  defaultPlayIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  playIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  lyricClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  emptyLyricText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  showLyric: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getAudioInstance: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onBeforeAudioDownload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  autoHiddenCover: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  spaceBar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showDestroy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onBeforeDestroy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onDestroyed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  customDownloader: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  audioTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  quietUpdate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  renderAudioTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  mobileMediaQuery: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  volumeFade: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    fadeIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    fadeOut: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  }),
  sortableOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
});

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/slider.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/slider.js ***!
  \*******************************************************************/
/*! exports provided: PROGRESS_BAR_SLIDER_OPTIONS, VOLUME_BAR_SLIDER_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_BAR_SLIDER_OPTIONS", function() { return PROGRESS_BAR_SLIDER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_BAR_SLIDER_OPTIONS", function() { return VOLUME_BAR_SLIDER_OPTIONS; });
var PROGRESS_BAR_SLIDER_OPTIONS = {
  min: 0,
  step: 1
};
var VOLUME_BAR_SLIDER_OPTIONS = {
  min: 0,
  max: 1,
  step: 0.01
};

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/sortable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/sortable.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  selector: 'audio-lists-panel-content-wrap',
  swapClass: 'audio-lists-panel-sortable-highlight-bg',
  swap: true,
  animation: 100,
  easing: 'cubic-bezier(0.43, -0.1, 0.16, 1.1)'
});

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/theme.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/theme.js ***!
  \******************************************************************/
/*! exports provided: THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME", function() { return THEME; });
var THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/config/volumeFade.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/config/volumeFade.js ***!
  \***********************************************************************/
/*! exports provided: VOLUME_FADE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_FADE", function() { return VOLUME_FADE; });
var VOLUME_FADE = {
  IN: 'in',
  OUT: 'out',
  NONE: 'none'
};

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactJkMusicPlayer; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-mobile */ "./node_modules/is-mobile/index.js");
/* harmony import */ var is_mobile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_mobile__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider/lib/Slider */ "./node_modules/rc-slider/lib/Slider.js");
/* harmony import */ var rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _components_AudioListsPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AudioListsPanel */ "./node_modules/react-jinke-music-player/es/components/AudioListsPanel.js");
/* harmony import */ var _components_CircleProcessBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CircleProcessBar */ "./node_modules/react-jinke-music-player/es/components/CircleProcessBar.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Icon */ "./node_modules/react-jinke-music-player/es/components/Icon.js");
/* harmony import */ var _components_PlayerMobile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/PlayerMobile */ "./node_modules/react-jinke-music-player/es/components/PlayerMobile.js");
/* harmony import */ var _components_PlayModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/PlayModel */ "./node_modules/react-jinke-music-player/es/components/PlayModel.js");
/* harmony import */ var _config_animate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config/animate */ "./node_modules/react-jinke-music-player/es/config/animate.js");
/* harmony import */ var _config_keycode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config/keycode */ "./node_modules/react-jinke-music-player/es/config/keycode.js");
/* harmony import */ var _config_locale__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./config/locale */ "./node_modules/react-jinke-music-player/es/config/locale.js");
/* harmony import */ var _config_mediaQuery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./config/mediaQuery */ "./node_modules/react-jinke-music-player/es/config/mediaQuery.js");
/* harmony import */ var _config_mode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./config/mode */ "./node_modules/react-jinke-music-player/es/config/mode.js");
/* harmony import */ var _config_audioState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./config/audioState */ "./node_modules/react-jinke-music-player/es/config/audioState.js");
/* harmony import */ var _config_playMode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./config/playMode */ "./node_modules/react-jinke-music-player/es/config/playMode.js");
/* harmony import */ var _config_propTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./config/propTypes */ "./node_modules/react-jinke-music-player/es/config/propTypes.js");
/* harmony import */ var _config_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./config/slider */ "./node_modules/react-jinke-music-player/es/config/slider.js");
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./config/theme */ "./node_modules/react-jinke-music-player/es/config/theme.js");
/* harmony import */ var _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./config/volumeFade */ "./node_modules/react-jinke-music-player/es/config/volumeFade.js");
/* harmony import */ var _config_player__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./config/player */ "./node_modules/react-jinke-music-player/es/config/player.js");
/* harmony import */ var _config_sortable__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./config/sortable */ "./node_modules/react-jinke-music-player/es/config/sortable.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./locale */ "./node_modules/react-jinke-music-player/es/locale/index.js");
/* harmony import */ var _lyric__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lyric */ "./node_modules/react-jinke-music-player/es/lyric.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils */ "./node_modules/react-jinke-music-player/es/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name react-jinke-music-player
 * @description Maybe the best beautiful HTML5 responsive player component for react :)
 * @author Jinke.Li <1359518268@qq.com>
 * @license MIT
 */






























sortablejs__WEBPACK_IMPORTED_MODULE_8__["default"].mount(new sortablejs__WEBPACK_IMPORTED_MODULE_8__["Swap"]());
var IS_MOBILE = is_mobile__WEBPACK_IMPORTED_MODULE_2___default()();
var DEFAULT_ICON = {
  pause: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["AnimatePauseIcon"], null),
  play: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["AnimatePlayIcon"], null),
  destroy: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["CloseIcon"], null),
  close: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["CloseIcon"], null),
  "delete": /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["DeleteIcon"], {
    size: 24
  }),
  download: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["DownloadIcon"], {
    size: 26
  }),
  toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["FaMinusSquareOIcon"], null),
  lyric: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["LyricIcon"], null),
  volume: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["VolumeUnmuteIcon"], {
    size: 26
  }),
  mute: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["VolumeMuteIcon"], {
    size: 26
  }),
  next: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["NextAudioIcon"], null),
  prev: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["PrevAudioIcon"], null),
  playLists: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["PlayListsIcon"], null),
  reload: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["ReloadIcon"], {
    size: 22
  }),
  loop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["LoopIcon"], {
    size: 26
  }),
  order: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["OrderPlayIcon"], {
    size: 26
  }),
  orderLoop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["RepeatIcon"], {
    size: 26
  }),
  shuffle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["ShufflePlayIcon"], {
    size: 26
  }),
  loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["LoadIcon"], null),
  packUpPanelMobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["ArrowDownIcon"], {
    size: 26
  }),
  empty: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["EmptyIcon"], null)
};

var ReactJkMusicPlayer = /*#__PURE__*/function (_PureComponent) {
  _inherits(ReactJkMusicPlayer, _PureComponent);

  var _super = _createSuper(ReactJkMusicPlayer);

  function ReactJkMusicPlayer(props) {
    var _this;

    _classCallCheck(this, ReactJkMusicPlayer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isDrag", false);

    _defineProperty(_assertThisInitialized(_this), "initPlayId", '');

    _defineProperty(_assertThisInitialized(_this), "state", {
      audioLists: [],
      playId: _this.initPlayId,
      // 播放id
      name: '',
      // 当前歌曲名
      cover: '',
      // 当前歌曲封面
      singer: '',
      // 当前歌手
      musicSrc: '',
      // 当前歌曲链
      lyric: '',
      // 当前歌词
      currentLyric: '',
      isMobile: IS_MOBILE,
      toggle: _this.props.mode === _config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].FULL,
      playing: false,
      currentTime: 0,
      soundValue: _config_player__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_VOLUME"] * 100,
      moveX: 0,
      moveY: 0,
      loading: false,
      audioListsPanelVisible: false,
      playModelNameVisible: false,
      theme: _this.props.theme || _this.darkThemeName,
      playMode: _this.props.playMode || _this.props.defaultPlayMode || '',
      // 当前播放模式
      currentAudioVolume: 0,
      // 当前音量  静音后恢复到之前记录的音量
      initAnimate: false,
      isInitAutoPlay: _this.props.autoPlay,
      isInitRemember: false,
      loadedProgress: 0,
      removeId: _config_player__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_REMOVE_ID"],
      isNeedMobileHack: IS_MOBILE,
      audioLyricVisible: false,
      isAutoPlayWhenUserClicked: false,
      playIndex: _this.props.playIndex || _this.props.defaultPlayIndex || _config_player__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_PLAY_INDEX"],
      canPlay: false,
      currentVolumeFade: _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].NONE,
      currentVolumeFadeInterval: undefined,
      updateIntervalEndVolume: undefined,
      isAudioSeeking: false,
      isResetCoverRotate: false
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayIndex", function () {
      var playIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.playIndex;
      var audioLists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.audioLists;
      return Math.max(_config_player__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_PLAY_INDEX"], Math.min(audioLists.length - 1, playIndex));
    });

    _defineProperty(_assertThisInitialized(_this), "onCoverClick", function () {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].FULL;
      var showMiniModeCover = _this.props.showMiniModeCover;
      var cover = _this.state.cover;

      if (!showMiniModeCover && mode === _config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].MINI) {
        return;
      }

      if (_this.props.onCoverClick && cover) {
        _this.props.onCoverClick(mode, _this.state.audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAudioTitle", function () {
      var _ref = _this.locale || {},
          audioTitle = _ref.audioTitle;

      var _this$state = _this.state,
          name = _this$state.name,
          singer = _this$state.singer;

      if (typeof audioTitle === 'function' && _this.audio) {
        return audioTitle(_this.getBaseAudioInfo());
      }

      return audioTitle || "".concat(name).concat(singer ? " - ".concat(singer) : '');
    });

    _defineProperty(_assertThisInitialized(_this), "renderAudioTitle", function () {
      var _this$state2 = _this.state,
          isMobile = _this$state2.isMobile,
          name = _this$state2.name;

      if (_this.props.renderAudioTitle) {
        return _this.props.renderAudioTitle(_this.getBaseAudioInfo(), isMobile);
      }

      return isMobile ? name : _this.getAudioTitle();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleAudioLyric", function () {
      _this.setState({
        audioLyricVisible: !_this.state.audioLyricVisible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePlayMode", function () {
      var index = _this._PLAY_MODE_.findIndex(function (mode) {
        return mode === _this.state.playMode;
      });

      var playMode = index === _this._PLAY_MODE_LENGTH_ - 1 ? _this._PLAY_MODE_[0] : _this._PLAY_MODE_[++index];

      _this.setState({
        playMode: playMode,
        playModelNameVisible: true,
        playModeTipVisible: true
      });

      _this.props.onPlayModeChange && _this.props.onPlayModeChange(playMode);
      clearTimeout(_this.playModelTimer);
      _this.playModelTimer = setTimeout(function () {
        _this.setState({
          playModelNameVisible: false,
          playModeTipVisible: false
        });
      }, _this.props.playModeShowTime);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPlayModeIcon", function (playMode) {
      var animateProps = {
        className: 'react-jinke-music-player-mode-icon'
      };
      var IconNode = null;

      switch (playMode) {
        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order:
          IconNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(_this.iconMap.order, animateProps);
          break;

        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].orderLoop:
          IconNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(_this.iconMap.orderLoop, animateProps);
          break;

        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].singleLoop:
          IconNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(_this.iconMap.loop, animateProps);
          break;

        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].shufflePlay:
          IconNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(_this.iconMap.shuffle, animateProps);
          break;

        default:
          IconNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(_this.iconMap.order, animateProps);
      }

      return IconNode;
    });

    _defineProperty(_assertThisInitialized(_this), "audioListsPlay", function (playId) {
      var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state;
      var currentPlayId = state.playId,
          playing = state.playing,
          audioLists = state.audioLists,
          loading = state.loading,
          canPlay = state.canPlay;

      if (Array.isArray(audioLists) && audioLists.length === 0) {
        // eslint-disable-next-line no-console
        return console.warn('Warning: Your playlist has no songs. and cannot play !');
      }

      if (loading && playId === currentPlayId) {
        return;
      }

      var playIndex = audioLists.findIndex(function (audio) {
        return audio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] === playId;
      });

      var _ref2 = audioLists[playIndex] || {},
          name = _ref2.name,
          cover = _ref2.cover,
          musicSrc = _ref2.musicSrc,
          singer = _ref2.singer,
          _ref2$lyric = _ref2.lyric,
          lyric = _ref2$lyric === void 0 ? '' : _ref2$lyric;

      var loadAudio = function loadAudio(originMusicSrc) {
        _this.setState({
          name: name,
          cover: cover,
          musicSrc: originMusicSrc,
          singer: singer,
          playId: playId,
          lyric: lyric,
          currentTime: 0,
          playing: false,
          loading: true,
          canPlay: false,
          loadedProgress: 0,
          playIndex: playIndex,
          isAutoPlayWhenUserClicked: true
        }, function () {
          _this.lyric && _this.lyric.stop();

          _this.audio.load();

          _this.updateMediaSessionMetadata();

          setTimeout(function () {
            _this.initLyricParser();
          }, 0);
        });
      }; // 如果点击当前项 就暂停 或者播放


      if (playId === currentPlayId && !ignore) {
        _this.setState({
          playing: !playing
        });

        if (!playing) {
          if (canPlay) {
            _this.play();

            return;
          }

          return loadAudio(musicSrc);
        }

        return _this.audio.pause();
      }

      _this.props.onAudioPlayTrackChange && _this.props.onAudioPlayTrackChange(playId, audioLists, _this.getBaseAudioInfo());
      _this.props.onPlayIndexChange && _this.props.onPlayIndexChange(playIndex);

      switch (_typeof(musicSrc)) {
        case 'function':
          musicSrc().then(loadAudio, _this.onAudioError);
          break;

        default:
          loadAudio(musicSrc);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetAudioStatus", function () {
      _this.audio.pause();

      _this.lyric && _this.lyric.stop();

      _this.initPlayInfo([]);

      _this.resetAudioPlayStatus();

      _this.resetAudioPlayId();
    });

    _defineProperty(_assertThisInitialized(_this), "resetAudioPlayId", function () {
      _this.setState({
        playId: _this.initPlayId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearAudioLists", function () {
      _this.props.onAudioListsChange && _this.props.onAudioListsChange('', [], {});

      _this.resetAudioStatus();
    });

    _defineProperty(_assertThisInitialized(_this), "onDeleteAudioLists", function (audioId) {
      return function (e) {
        e.stopPropagation(); // 如果不 传 id  删除全部

        var _this$state3 = _this.state,
            audioLists = _this$state3.audioLists,
            playId = _this$state3.playId;

        if (audioLists.length < 1) {
          return;
        }

        _this.lyric && _this.lyric.stop();

        if (!audioId) {
          _this.clearAudioLists();

          return;
        }

        var newAudioLists = _toConsumableArray(audioLists).filter(function (audio) {
          return audio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] !== audioId;
        }); // 触发删除动画,等动画结束 删除列表


        _this.setState({
          removeId: audioId
        });

        setTimeout(function () {
          _this.setState({
            audioLists: newAudioLists,
            removeId: -1
          }, function () {
            if (!newAudioLists.length) {
              return _this.resetAudioStatus();
            } // 如果删除的是当前正在播放的 顺延下一首播放


            if (audioId === playId) {
              _this.handlePlay(_config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].orderLoop);
            }
          });
        }, _config_animate__WEBPACK_IMPORTED_MODULE_14__["AUDIO_LIST_REMOVE_ANIMATE_TIME"]);
        _this.props.onAudioListsChange && _this.props.onAudioListsChange(playId, newAudioLists, _this.getBaseAudioInfo());
      };
    });

    _defineProperty(_assertThisInitialized(_this), "openAudioListsPanel", function () {
      _this.setState(function (_ref3) {
        var audioListsPanelVisible = _ref3.audioListsPanelVisible;
        return {
          initAnimate: true,
          audioListsPanelVisible: !audioListsPanelVisible
        };
      });

      _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(!_this.state.audioListsPanelVisible);
    });

    _defineProperty(_assertThisInitialized(_this), "closeAudioListsPanel", function (e) {
      e.stopPropagation();

      _this._closeAudioListsPanel();
    });

    _defineProperty(_assertThisInitialized(_this), "_closeAudioListsPanel", function () {
      var audioListsPanelVisible = _this.state.audioListsPanelVisible;

      _this.setState({
        audioListsPanelVisible: false
      });

      if (audioListsPanelVisible) {
        _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "themeChange", function (isLight) {
      var theme = isLight ? _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].LIGHT : _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].DARK;

      _this.setState({
        theme: theme
      });

      _this.props.onThemeChange && _this.props.onThemeChange(theme);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioDownload", function () {
      var musicSrc = _this.state.musicSrc;

      if (_this.state.musicSrc) {
        var customDownloader = _this.props.customDownloader;

        var baseAudioInfo = _this.getBaseAudioInfo();

        var onBeforeAudioDownload = _this.props.onBeforeAudioDownload(baseAudioInfo);

        var transformedDownloadAudioInfo = {};

        if (onBeforeAudioDownload && onBeforeAudioDownload.then) {
          onBeforeAudioDownload.then(function (info) {
            var src = info.src,
                filename = info.filename,
                mimeType = info.mimeType;
            transformedDownloadAudioInfo = info;

            if (customDownloader) {
              customDownloader(info);
            } else {
              downloadjs__WEBPACK_IMPORTED_MODULE_1___default()(src, filename, mimeType);
            }
          });
        } else {
          customDownloader ? customDownloader({
            src: musicSrc
          }) : downloadjs__WEBPACK_IMPORTED_MODULE_1___default()(musicSrc);
        }

        _this.props.onAudioDownload && _this.props.onAudioDownload(baseAudioInfo, transformedDownloadAudioInfo);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDrag", function (e, _ref4) {
      var x = _ref4.x,
          y = _ref4.y;
      var _this$state4 = _this.state,
          moveX = _this$state4.moveX,
          moveY = _this$state4.moveY;
      _this.isDrag = true; // mousedown will trigger drag event on android devices (react-draggable) :(

      if (moveX === x && moveY === y) {
        _this.isDrag = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDragStart", function (e, _ref5) {
      var x = _ref5.x,
          y = _ref5.y;
      _this.isDrag = false;

      _this.setState({
        moveX: x,
        moveY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDragStop", function (e, _ref6) {
      var x = _ref6.x,
          y = _ref6.y;

      if (_this.props.showDestroy && _this.destroyBtn && _this.destroyBtn.current && _this.destroyBtn.current.contains(e.target)) {
        _this.onDestroyPlayer();

        return;
      }

      if (!_this.isDrag) {
        if (_this.state.isNeedMobileHack) {
          _this.loadAndPlayAudio();

          _this.setState({
            isNeedMobileHack: false
          });
        }

        _this.onOpenPanel();
      }

      _this.setState({
        moveX: x,
        moveY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResetVolume", function () {
      var currentAudioVolume = _this.state.currentAudioVolume;

      _this.setAudioVolume(_this.getVolumeBarValue(currentAudioVolume || 0.1));
    });

    _defineProperty(_assertThisInitialized(_this), "setAudioVolume", function (volumeBarValue) {
      _this.audio.volume = _this.getListeningVolume(volumeBarValue);

      _this.setState({
        currentAudioVolume: volumeBarValue,
        soundValue: volumeBarValue
      }); // Update fade-in interval to transition to new volume


      if (_this.state.currentVolumeFade === _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].IN) {
        _this.state.updateIntervalEndVolume && _this.state.updateIntervalEndVolume(volumeBarValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopAll", function (target) {
      target.stopPropagation();
      target.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "getBoundingClientRect", function (ele) {
      var _ele$getBoundingClien = ele.getBoundingClientRect(),
          left = _ele$getBoundingClien.left,
          top = _ele$getBoundingClien.top;

      return {
        left: left,
        top: top
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getListeningVolume", function (volumeBarValue) {
      return Math.pow(volumeBarValue, 2);
    });

    _defineProperty(_assertThisInitialized(_this), "getVolumeBarValue", function (listeningVolume) {
      return Math.sqrt(listeningVolume);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioReload", function () {
      if (_this.props.audioLists.length) {
        _this.handlePlay(_config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].singleLoop);

        _this.props.onAudioReload && _this.props.onAudioReload(_this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onOpenPanel", function () {
      var _this$props = _this.props,
          toggleMode = _this$props.toggleMode,
          spaceBar = _this$props.spaceBar;

      if (toggleMode) {
        _this.setState({
          toggle: true
        });

        _this.props.onModeChange && _this.props.onModeChange(_config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].FULL);

        if (spaceBar && _this.player.current) {
          _this.player.current.focus({
            preventScroll: true
          });
        }
      }

      _this.onCoverClick(_config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].MINI);
    });

    _defineProperty(_assertThisInitialized(_this), "onHidePanel", function () {
      _this.setState({
        toggle: false,
        audioListsPanelVisible: false
      });

      _this.props.onModeChange && _this.props.onModeChange(_config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].MINI);
    });

    _defineProperty(_assertThisInitialized(_this), "onDestroyPlayer", function () {
      if (_this.props.onBeforeDestroy) {
        var onBeforeDestroy = Promise.resolve(_this.props.onBeforeDestroy(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo()));

        if (onBeforeDestroy && onBeforeDestroy.then) {
          onBeforeDestroy.then(function () {
            _this._onDestroyPlayer();
          }) // ignore unhandledrejection handler
          ["catch"](function () {});
        }

        return;
      }

      _this._onDestroyPlayer();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDestroyPlayer", function () {
      _this.unInstallPlayer();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDestroyed", function () {
      _this.setState({
        isPlayDestroyed: true
      });

      if (_this.props.onDestroyed) {
        _this.props.onDestroyed(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentPlayIndex", function () {
      return _this.state.audioLists.findIndex(function (audio) {
        return audio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] === _this.state.playId;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetAudioPlayStatus", function () {
      return new Promise(function (res) {
        _this.setState({
          currentTime: 0,
          loading: false,
          playing: false,
          canPlay: false,
          lyric: '',
          currentLyric: '',
          loadedProgress: 0,
          playIndex: _config_player__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_PLAY_INDEX"]
        }, res);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTogglePlay", function () {
      _this.setState({
        isAudioSeeking: false
      });

      if (_this.state.audioLists.length >= 1) {
        var _ref7 = _this.props.volumeFade || {},
            fadeIn = _ref7.fadeIn,
            fadeOut = _ref7.fadeOut;

        var _this$state5 = _this.state,
            currentVolumeFade = _this$state5.currentVolumeFade,
            currentVolumeFadeInterval = _this$state5.currentVolumeFadeInterval;
        var isCurrentlyFading = currentVolumeFade === _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].IN || currentVolumeFade === _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].OUT;
        /**
         * Currently in middle of fading in/out, so need to cancel the current interval and do the opposite action.
         * E.g. if currently fading out, then we need to cancel the fade-out and do a fade-in starting at current volume.
         */

        if (isCurrentlyFading) {
          // Clear current fade-in/out
          clearInterval(currentVolumeFadeInterval);

          _this.setState({
            currentVolumeFadeInterval: undefined,
            updateIntervalEndVolume: undefined
          });
        } // Currently playing track or in the middle of fading in


        if (!isCurrentlyFading && _this.state.playing || currentVolumeFade === _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].IN) {
          _this.setState({
            currentVolumeFade: _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].OUT
          }); // Fade in from current volume to 0


          var _adjustVolume = Object(_utils__WEBPACK_IMPORTED_MODULE_29__["adjustVolume"])(_this.audio, _this.audio.volume, 0, {
            duration: fadeOut
          }, function () {
            _this.audio.pause();

            _this.setState({
              currentVolumeFade: _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].NONE,
              currentVolumeFadeInterval: undefined,
              playing: false,
              updateIntervalEndVolume: undefined
            }); // Restore volume so slider does not reset to zero


            // Restore volume so slider does not reset to zero
            _this.audio.volume = _this.getListeningVolume(_this.state.soundValue);
          }),
              fadeOutInterval = _adjustVolume.fadeInterval,
              updateIntervalEndVolume = _adjustVolume.updateIntervalEndVolume;

          _this.setState({
            currentVolumeFadeInterval: fadeOutInterval,
            updateIntervalEndVolume: updateIntervalEndVolume
          });
        } else {
          _this.setState({
            currentVolumeFade: _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].IN
          }); // Start volume may not be 0 if interrupting a fade-out


          var startVolume = isCurrentlyFading ? _this.audio.volume : 0;

          var endVolume = _this.getListeningVolume(_this.state.soundValue);

          var _adjustVolume2 = Object(_utils__WEBPACK_IMPORTED_MODULE_29__["adjustVolume"])(_this.audio, startVolume, endVolume, {
            duration: fadeIn
          }, function () {
            _this.setState({
              currentVolumeFade: _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].NONE,
              currentVolumeFadeInterval: undefined,
              updateIntervalEndVolume: undefined
            }); // It's possible that the volume level in the UI has changed since beginning of fade


            // It's possible that the volume level in the UI has changed since beginning of fade
            _this.audio.volume = _this.getListeningVolume(_this.state.soundValue);
          }),
              fadeInInterval = _adjustVolume2.fadeInterval,
              _updateIntervalEndVolume = _adjustVolume2.updateIntervalEndVolume;

          _this.setState({
            currentVolumeFadeInterval: fadeInInterval,
            updateIntervalEndVolume: _updateIntervalEndVolume,
            isAutoPlayWhenUserClicked: true
          }, function () {
            if (fadeInInterval) {
              _this.audio.volume = startVolume;
            }

            _this.loadAndPlayAudio();
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playAudio", function () {
      var isLoaded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (_this.isAudioCanPlay || isLoaded) {
        if (isLoaded) {
          _this.setAudioLoaded();
        }

        _this.loadAndPlayAudio(isLoaded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setAudioLoaded", function () {
      _this.setState({
        loading: false,
        playing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioPause", function () {
      _this.setState({
        playing: false
      });

      _this.props.onAudioPause && _this.props.onAudioPause(_this.getBaseAudioInfo());

      if (_this.state.lyric && _this.lyric) {
        _this.lyric.togglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioPlay", function () {
      // Audio currentTime changed will be trigger audio playing event
      if (_this.state.isAudioSeeking) {
        return;
      }

      _this.setState({
        playing: true,
        loading: false
      });

      _this.props.onAudioPlay && _this.props.onAudioPlay(_this.getBaseAudioInfo());

      if (_this.state.lyric && _this.lyric) {
        _this.lyric.togglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSetAudioLoadedProgress", function () {
      var _this$audio = _this.audio,
          timeRanges = _this$audio.buffered,
          duration = _this$audio.duration;

      if (timeRanges.length && timeRanges.end) {
        var loadedProgress = timeRanges.end(timeRanges.length - 1) / duration * 100;

        _this.setState({
          loadedProgress: loadedProgress
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadAndPlayAudio", function () {
      var isLoaded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var remember = _this.props.remember;
      var _this$state6 = _this.state,
          isInitRemember = _this$state6.isInitRemember,
          musicSrc = _this$state6.musicSrc;
      var _this$audio2 = _this.audio,
          networkState = _this$audio2.networkState,
          readyState = _this$audio2.readyState;

      if (!musicSrc) {
        return;
      }

      if (networkState === _config_audioState__WEBPACK_IMPORTED_MODULE_19__["AUDIO_NETWORK_STATE"].NETWORK_NO_SOURCE || networkState === _config_audioState__WEBPACK_IMPORTED_MODULE_19__["AUDIO_NETWORK_STATE"].NETWORK_EMPTY) {
        return _this.onAudioError({
          reason: "\n          [loadAndPlayAudio]: Failed to load because no supported source was found.\n          current network status is ".concat(networkState, ".\n        ")
        });
      }

      _this.setState({
        playing: false,
        loading: true,
        isAudioSeeking: false,
        isResetCoverRotate: false
      });

      if (isLoaded || readyState >= _config_audioState__WEBPACK_IMPORTED_MODULE_19__["AUDIO_READY_STATE"].HAVE_FUTURE_DATA) {
        var _this$getLastPlayStat = _this.getLastPlayStatus(),
            playing = _this$getLastPlayStat.playing;

        var isLastPause = remember && !isInitRemember && !playing;
        var canPlay = remember ? !isLastPause : _this.isAudioCanPlay;

        _this.setState({
          playing: canPlay,
          loading: false
        }, function () {
          if (canPlay) {
            _this.play();
          }

          _this.setState({
            isInitAutoPlay: true,
            isInitRemember: true,
            isAutoPlayWhenUserClicked: false
          });
        });
      } else {
        _this.audio.load();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioError", function (error) {
      var _this$state7 = _this.state,
          playMode = _this$state7.playMode,
          audioLists = _this$state7.audioLists,
          playId = _this$state7.playId,
          musicSrc = _this$state7.musicSrc;
      var loadAudioErrorPlayNext = _this.props.loadAudioErrorPlayNext;
      var isSingleLoop = playMode === _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].singleLoop;
      var currentPlayMode = isSingleLoop ? _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order : playMode;
      _this.lyric && _this.lyric.stop(); // 如果删除歌曲或其他原因导致列表为空时
      // 这时候会触发 https://developer.mozilla.org/en-US/docs/Web/API/MediaError

      if (musicSrc) {
        // 如果当前音乐加载出错 尝试播放下一首
        if (loadAudioErrorPlayNext && audioLists.length) {
          var isLastAudio = (playMode === _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order || playMode === _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].orderLoop) && playId === audioLists[audioLists.length - 1][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]];

          if (!isLastAudio) {
            _this.handlePlay(currentPlayMode, true);
          }
        }

        _this.props.onAudioError && _this.props.onAudioError(_this.audio.error || error && error.reason || null, playId, audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function (playMode) {
      var isNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$state8 = _this.state,
          playId = _this$state8.playId,
          audioLists = _this$state8.audioLists;
      var audioListsLen = audioLists.length;

      if (!audioListsLen) {
        return;
      }

      var currentPlayIndex = _this.getCurrentPlayIndex();

      switch (playMode) {
        // 顺序播放
        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order:
          // 拖拽排序后 或者 正常播放 到最后一首歌 就暂停
          if (currentPlayIndex === audioListsLen - 1) {
            _this.audio.pause();

            return;
          }

          _this.audioListsPlay(isNext ? audioLists[currentPlayIndex + 1][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] : audioLists[currentPlayIndex - 1][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]]);

          break;
        // 列表循环

        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].orderLoop:
          if (isNext) {
            if (currentPlayIndex === audioListsLen - 1) {
              return _this.audioListsPlay(audioLists[0][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]]);
            }

            _this.audioListsPlay(audioLists[currentPlayIndex + 1][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]]);
          } else {
            if (currentPlayIndex === 0) {
              return _this.audioListsPlay(audioLists[audioListsLen - 1][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]]);
            }

            _this.audioListsPlay(audioLists[currentPlayIndex - 1][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]]);
          }

          break;
        // 单曲循环

        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].singleLoop:
          _this.audio.currentTime = 0;

          _this.audioListsPlay(playId, true);

          break;
        // 随机播放

        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].shufflePlay:
          {
            var randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_29__["createRandomNum"])(0, audioListsLen - 1);

            if (randomIndex === _this.getCurrentPlayIndex()) {
              randomIndex = _this.getPlayIndex(randomIndex + 1);
            }

            var randomPlayId = (audioLists[randomIndex] || {})[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]];

            _this.audioListsPlay(randomPlayId, true);
          }
          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioEnd", function () {
      _this.props.onAudioEnded && _this.props.onAudioEnded(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo());

      _this.handlePlay(_this.state.playMode);
    });

    _defineProperty(_assertThisInitialized(_this), "audioPrevAndNextBasePlayHandle", function () {
      var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var playMode = _this.state.playMode;
      var _playMode = '';

      switch (playMode) {
        case _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].shufflePlay:
          _playMode = playMode;
          break;

        default:
          _playMode = _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].orderLoop;
          break;
      }

      _this.handlePlay(_playMode, isNext);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayPrevAudio", function () {
      var restartCurrentOnPrev = _this.props.restartCurrentOnPrev;

      if (restartCurrentOnPrev && _this.audio.currentTime > 1) {
        _this.audio.currentTime = 0;
        return;
      }

      _this.audioPrevAndNextBasePlayHandle(false);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayNextAudio", function () {
      _this.audioPrevAndNextBasePlayHandle(true);
    });

    _defineProperty(_assertThisInitialized(_this), "audioTimeUpdate", function () {
      var currentTime = _this.audio.currentTime;

      _this.setState({
        currentTime: currentTime
      });

      if (_this.props.remember) {
        _this.saveLastPlayStatus();
      }

      _this.props.onAudioProgress && _this.props.onAudioProgress(_this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioSoundChange", function (value) {
      _this.setAudioVolume(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioVolumeChange", function () {
      var volume = _this.audio.volume;
      var _this$state9 = _this.state,
          currentVolumeFade = _this$state9.currentVolumeFade,
          currentAudioVolume = _this$state9.currentAudioVolume;

      if (currentVolumeFade !== _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].NONE || currentAudioVolume === volume) {
        return;
      }

      var volumeBarValue = _this.getVolumeBarValue(volume);

      _this.setState({
        soundValue: volumeBarValue
      });

      if (_this.props.onAudioVolumeChange) {
        var formattedVolume = parseFloat(volume.toFixed(4));

        _this.props.onAudioVolumeChange(formattedVolume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onProgressChange", function (currentTime) {
      if (_this.audio) {
        _this.audio.currentTime = currentTime;
      }

      _this.setState({
        currentTime: currentTime,
        isAudioSeeking: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioSeeked", function (currentTime) {
      _this.setState({
        isAudioSeeking: true
      });

      if (!_this.state.audioLists.length) {
        return;
      }

      _this.lyric && _this.lyric.seek(currentTime * 1000);

      if (!_this.state.playing) {
        _this.lyric && _this.lyric.stop();
      }

      if (_this.audio) {
        _this.audio.currentTime = currentTime;
      }

      _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
      setTimeout(function () {
        _this.setState({
          isAudioSeeking: false
        });
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioMute", function () {
      _this.setState({
        soundValue: 0,
        currentAudioVolume: _this.audio.volume
      }, function () {
        _this.audio.volume = 0;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioAbort", function (e) {
      var _this$state10 = _this.state,
          audioLists = _this$state10.audioLists,
          playId = _this$state10.playId;

      var audioInfo = _this.getBaseAudioInfo();

      var mergedAudioInfo = _objectSpread(_objectSpread({}, e), audioInfo);

      _this.props.onAudioAbort && _this.props.onAudioAbort(playId, audioLists, mergedAudioInfo);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMode", function (mode) {
      if (mode === _config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].FULL) {
        _this.setState({
          toggle: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleTheme", function (theme) {
      _this.setState({
        theme: theme
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioListsSortEnd", function (_ref8) {
      var oldIndex = _ref8.oldIndex,
          newIndex = _ref8.newIndex;

      if (oldIndex === newIndex) {
        return;
      }

      var _this$state11 = _this.state,
          playId = _this$state11.playId,
          audioLists = _this$state11.audioLists;

      var _audioLists = _toConsumableArray(audioLists);

      var item = _audioLists.splice(oldIndex, 1)[0];

      _audioLists.splice(newIndex, 0, item); // 如果拖动正在播放的歌曲 播放Id 等于 拖动后的index


      var _playId = oldIndex === playId ? newIndex : playId;

      _this.setState({
        audioLists: _audioLists,
        playId: _playId
      });

      _this.props.onAudioListsSortEnd && _this.props.onAudioListsSortEnd(oldIndex, newIndex);
      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_playId, _audioLists, _this.getBaseAudioInfo()); // TODO: remove

      if (_this.props.onAudioListsDragEnd) {
        // eslint-disable-next-line no-console
        console.warn('[Deprecated] onAudioListsDragEnd is deprecated. please use onAudioListsSortEnd(oldIndex, newIndex){}');

        _this.props.onAudioListsDragEnd(oldIndex, newIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveLastPlayStatus", function () {
      var _this$state12 = _this.state,
          currentTime = _this$state12.currentTime,
          playId = _this$state12.playId,
          theme = _this$state12.theme,
          soundValue = _this$state12.soundValue,
          playMode = _this$state12.playMode,
          name = _this$state12.name,
          cover = _this$state12.cover,
          singer = _this$state12.singer,
          musicSrc = _this$state12.musicSrc;
      var lastPlayStatus = JSON.stringify({
        currentTime: currentTime,
        playId: playId,
        theme: theme,
        playMode: playMode,
        soundValue: soundValue,
        name: name,
        cover: cover,
        singer: singer,
        musicSrc: musicSrc
      });
      localStorage.setItem('lastPlayStatus', lastPlayStatus);
    });

    _defineProperty(_assertThisInitialized(_this), "getLastPlayStatus", function () {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          defaultPlayMode = _this$props2.defaultPlayMode,
          playMode = _this$props2.playMode,
          defaultPlayIndex = _this$props2.defaultPlayIndex,
          playIndex = _this$props2.playIndex;
      var status = {
        currentTime: 0,
        playMode: playMode || defaultPlayMode || _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order,
        name: '',
        cover: '',
        singer: '',
        musicSrc: '',
        lyric: '',
        playId: _this.getDefaultPlayId(),
        theme: theme,
        playing: true,
        playIndex: playIndex || defaultPlayIndex || 0
      };

      try {
        return JSON.parse(localStorage.getItem('lastPlayStatus')) || status;
      } catch (error) {
        return status;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkCurrentPlayingAudioIsInUpdatedAudioLists", function () {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      var _this$state13 = _this.state,
          playId = _this$state13.playId,
          musicSrc = _this$state13.musicSrc;

      if (!nextProps.quietUpdate || !Array.isArray(nextProps.audioLists)) {
        return false;
      }

      return playId && nextProps.audioLists.some(function (newAudioInfo) {
        return newAudioInfo[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] === playId || newAudioInfo.musicSrc === musicSrc;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
      var playPromise = _this.audio.play();

      if (playPromise && playPromise.then) {
        playPromise.then(function () {
          _this.setState({
            loading: false,
            playing: true
          });
        })["catch"](function () {
          _this.setState({
            loading: false,
            playing: false
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mockAutoPlayForMobile", function () {
      if (_this.props.autoPlay && !_this.state.playing) {
        _this.audio.load();

        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bindMobileAutoPlayEvents", function () {
      document.addEventListener('touchstart', function () {
        _this.mockAutoPlayForMobile();
      }, {
        once: true
      }); // 监听微信准备就绪事件

      document.addEventListener('WeixinJSBridgeReady', function () {
        _this.mockAutoPlayForMobile();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bindSafariAutoPlayEvents", function () {
      document.addEventListener('click', function () {
        _this.mockAutoPlayForMobile();
      }, {
        once: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "unBindEvents", function () {
      var _this2;

      (_this2 = _this).bindEvents.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "bindEvents", function () {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.audio;
      var eventsNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        waiting: _this.loadAndPlayAudio,
        canplay: _this.onAudioCanPlay,
        error: _this.onAudioError,
        ended: _this.onAudioEnd,
        pause: _this.onAudioPause,
        play: _this.onAudioPlay,
        timeupdate: _this.audioTimeUpdate,
        volumechange: _this.onAudioVolumeChange,
        abort: _this.onAudioAbort,
        progress: _this.onSetAudioLoadedProgress
      };
      var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var once = _this.props.once;

      for (var name in eventsNames) {
        var _events = eventsNames[name];

        if (target) {
          bind ? target.addEventListener(name, _events, {
            once: !!(once && name === 'play')
          }) : target.removeEventListener(name, _events);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayId", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.audioLists;

      var playIndex = _this.getPlayIndex(undefined, audioLists);

      var playId = _this.state.playId || audioLists[playIndex] && audioLists[playIndex][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]];
      return playId;
    });

    _defineProperty(_assertThisInitialized(_this), "_getPlayInfo", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var playId = _this.getPlayId(audioLists);

      var _ref9 = audioLists.find(function (audio) {
        return audio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] === playId;
      }) || {},
          _ref9$name = _ref9.name,
          name = _ref9$name === void 0 ? '' : _ref9$name,
          _ref9$cover = _ref9.cover,
          cover = _ref9$cover === void 0 ? '' : _ref9$cover,
          _ref9$singer = _ref9.singer,
          singer = _ref9$singer === void 0 ? '' : _ref9$singer,
          _ref9$musicSrc = _ref9.musicSrc,
          musicSrc = _ref9$musicSrc === void 0 ? '' : _ref9$musicSrc,
          _ref9$lyric = _ref9.lyric,
          lyric = _ref9$lyric === void 0 ? '' : _ref9$lyric;

      return {
        name: name,
        cover: cover,
        singer: singer,
        musicSrc: musicSrc,
        lyric: lyric,
        audioLists: audioLists,
        playId: playId
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayInfo", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var newAudioLists = audioLists.filter(function (audio) {
        return !audio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]];
      });
      var lastAudioLists = audioLists.filter(function (audio) {
        return audio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]];
      });
      var mergedAudioLists = [].concat(_toConsumableArray(lastAudioLists), _toConsumableArray(newAudioLists.map(function (info) {
        return _objectSpread(_objectSpread({}, info), {}, _defineProperty({}, _config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"], Object(_utils__WEBPACK_IMPORTED_MODULE_29__["uuId"])()));
      })));
      return _this._getPlayInfo(mergedAudioLists);
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayInfoOfNewList", function (nextProps) {
      var _nextProps$audioLists = nextProps.audioLists,
          audioLists = _nextProps$audioLists === void 0 ? [] : _nextProps$audioLists;

      var _audioLists = audioLists.map(function (info) {
        var prevAudioBeforeUpdate = nextProps.quietUpdate && _this.state.audioLists.find(function (_ref10) {
          var musicSrc = _ref10.musicSrc;
          return musicSrc === info.musicSrc;
        }) || {};
        return _objectSpread(_objectSpread({}, info), {}, _defineProperty({}, _config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"], prevAudioBeforeUpdate[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] || Object(_utils__WEBPACK_IMPORTED_MODULE_29__["uuId"])()));
      });

      return _this._getPlayInfo(_audioLists);
    });

    _defineProperty(_assertThisInitialized(_this), "initPlayInfo", function (audioLists, cb) {
      var info = _this.getPlayInfo(audioLists);

      switch (_typeof(info.musicSrc)) {
        case 'function':
          info.musicSrc().then(function (originMusicSrc) {
            _this.setState(_objectSpread(_objectSpread({}, info), {}, {
              musicSrc: originMusicSrc
            }), cb);
          }, _this.onAudioError);
          break;

        default:
          _this.setState(info, cb);

      }
    });

    _defineProperty(_assertThisInitialized(_this), "addMatchMediaListener", function (query, handler) {
      var media = window.matchMedia(query);
      handler(media);

      if ('addEventListener' in media) {
        media.addEventListener('change', handler);
      } else {
        media.addListener(handler);
      }

      return media;
    });

    _defineProperty(_assertThisInitialized(_this), "removeMatchMediaListener", function (media, handler) {
      if (media) {
        if ('removeEventListener' in media) {
          media.removeEventListener('change', handler);
        } else {
          media.removeListener && media.removeListener(handler);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addMobileListener", function () {
      _this.mobileMedia = _this.addMatchMediaListener(_this.props.mobileMediaQuery, _this.mobileMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "removeMobileListener", function () {
      _this.removeMatchMediaListener(_this.mobileMedia, _this.mobileMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "addSystemThemeListener", function () {
      _this.systemThemeMedia = _this.addMatchMediaListener(_config_mediaQuery__WEBPACK_IMPORTED_MODULE_17__["MEDIA_QUERY"].DARK_THEME, _this.systemThemeMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSystemThemeListener", function () {
      _this.removeMatchMediaListener(_this.systemThemeMedia, _this.systemThemeMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "mobileMediaHandler", function (_ref11) {
      var matches = _ref11.matches;

      _this.setState({
        isMobile: !!matches
      });
    });

    _defineProperty(_assertThisInitialized(_this), "systemThemeMediaHandler", function (_ref12) {
      var matches = _ref12.matches;

      if (_this.props.theme === _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].AUTO) {
        var theme = matches ? _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].DARK : _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].LIGHT;

        _this.updateTheme(theme);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setDefaultAudioVolume", function () {
      var _this$props3 = _this.props,
          defaultVolume = _this$props3.defaultVolume,
          remember = _this$props3.remember; // 音量 [0-1]

      _this.defaultVolume = Math.max(0, Math.min(defaultVolume, 1));

      var _this$getLastPlayStat2 = _this.getLastPlayStatus(),
          _this$getLastPlayStat3 = _this$getLastPlayStat2.soundValue,
          soundValue = _this$getLastPlayStat3 === void 0 ? _this.defaultVolume : _this$getLastPlayStat3;

      _this.setAudioVolume(remember ? soundValue : _this.defaultVolume);
    });

    _defineProperty(_assertThisInitialized(_this), "getDefaultPlayId", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.audioLists;

      var playIndex = _this.getPlayIndex();

      return audioLists[playIndex] && audioLists[playIndex][_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]];
    });

    _defineProperty(_assertThisInitialized(_this), "initLyricParser", function () {
      _this.lyric = new _lyric__WEBPACK_IMPORTED_MODULE_28__["default"](_this.state.lyric, _this.onLyricChange);

      _this.setState({
        currentLyric: _this.lyric.lines[0] && _this.lyric.lines[0].text
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLyricChange", function (_ref13) {
      var lineNum = _ref13.lineNum,
          txt = _ref13.txt;

      _this.setState({
        currentLyric: txt
      });

      _this.props.onAudioLyricChange && _this.props.onAudioLyricChange(lineNum, txt);
    });

    _defineProperty(_assertThisInitialized(_this), "updateTheme", function (theme) {
      if (theme && theme !== _this.props.theme && Object.values(_config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"]).includes(theme)) {
        _this.setState({
          theme: theme
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMode", function (mode) {
      if (mode && mode !== _this.props.mode && Object.values(_config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"]).includes(mode)) {
        _this.setState({
          toggle: mode === _config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].FULL
        });

        if (mode === _config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].MINI) {
          _this._closeAudioListsPanel();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatePlayMode", function (playMode) {
      if (!Object.values(_config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"]).includes(playMode)) {
        return;
      }

      if (playMode !== _this.props.playMode) {
        _this.setState({
          playMode: playMode
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateAudioLists", function (audioLists) {
      var newAudioLists = [].concat(_toConsumableArray(_this.state.audioLists), _toConsumableArray(audioLists.filter(function (audio) {
        return _this.state.audioLists.findIndex(function (v) {
          return v.musicSrc === audio.musicSrc;
        }) === -1;
      })));

      _this.initPlayInfo(newAudioLists);

      _this.bindEvents(_this.audio);

      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, audioLists, _this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "loadNewAudioLists", function (nextProps) {
      var audioLists = nextProps.audioLists,
          remember = nextProps.remember,
          playMode = nextProps.playMode,
          theme = nextProps.theme,
          autoPlayInitLoadPlayList = nextProps.autoPlayInitLoadPlayList,
          playIndex = nextProps.playIndex;

      if (!Array.isArray(audioLists) || !audioLists.length) {
        return;
      }

      var info = _this.getPlayInfoOfNewList(nextProps);

      var lastPlayStatus = remember ? _this.getLastPlayStatus() : {
        playMode: playMode || _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order,
        playIndex: playIndex || _config_player__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_PLAY_INDEX"]
      };

      if (theme !== _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].AUTO) {
        lastPlayStatus.theme = theme;
      }

      var audioInfo = _objectSpread(_objectSpread(_objectSpread({}, info), lastPlayStatus), {}, {
        isInitAutoPlay: autoPlayInitLoadPlayList,
        playing: _this.isAudioCanPlay
      });

      if (_this.checkCurrentPlayingAudioIsInUpdatedAudioLists(nextProps)) {
        _this.setState({
          audioLists: info.audioLists
        });

        return;
      }

      switch (_typeof(info.musicSrc)) {
        case 'function':
          info.musicSrc().then(function (musicSrc) {
            _this.setState(_objectSpread(_objectSpread({}, audioInfo), {}, {
              musicSrc: musicSrc
            }));
          }, _this.onAudioError);
          break;

        default:
          _this.setState(audioInfo);

      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetPlayId", function () {
      return new Promise(function (res) {
        _this.setState({
          playId: _this.initPlayId
        }, res);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeAudioLists", function (nextProps) {
      if (!_this.checkCurrentPlayingAudioIsInUpdatedAudioLists(nextProps)) {
        _this.resetAudioStatus();
      }

      _this.resetPlayId().then(function () {
        _this.loadNewAudioLists(nextProps);

        _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, nextProps.audioLists, _this.getBaseAudioInfo());
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePlayIndex", function (playIndex) {
      var currentPlayIndex = _this.getCurrentPlayIndex();

      if (playIndex !== undefined && currentPlayIndex !== playIndex) {
        _this.resetAudioPlayStatus().then(function () {
          var currentPlayAudio = _this.state.audioLists[_this.getPlayIndex(playIndex)];

          if (currentPlayAudio && currentPlayAudio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]]) {
            _this.audioListsPlay(currentPlayAudio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]], true);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playByIndex", function (index) {
      _this.updatePlayIndex(index);
    });

    _defineProperty(_assertThisInitialized(_this), "getEnhanceAudio", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          audio = _assertThisInitialize.audio;

      [{
        name: 'destroy',
        value: _this.onDestroyPlayer
      }, {
        name: 'updatePlayIndex',
        value: _this.updatePlayIndex
      }, {
        name: 'playByIndex',
        value: _this.playByIndex
      }, {
        name: 'playNext',
        value: _this.onPlayNextAudio
      }, {
        name: 'playPrev',
        value: _this.onPlayPrevAudio
      }, {
        name: 'togglePlay',
        value: _this.onTogglePlay
      }, {
        name: 'clear',
        value: _this.clearAudioLists
      }, {
        name: 'sortable',
        value: _this.sortable
      }].forEach(function (_ref14) {
        var name = _ref14.name,
            value = _ref14.value;
        Object.defineProperty(audio, name, {
          value: value,
          writable: false
        });
      });
      return audio;
    });

    _defineProperty(_assertThisInitialized(_this), "onGetAudioInstance", function () {
      if (_this.props.getAudioInstance) {
        _this.props.getAudioInstance(_this.getEnhanceAudio());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMediaSessionMetadata", function () {
      if ('mediaSession' in navigator && _this.props.showMediaSession) {
        var _this$state14 = _this.state,
            name = _this$state14.name,
            cover = _this$state14.cover,
            singer = _this$state14.singer;
        var mediaMetaDataConfig = {
          title: name,
          artist: singer,
          album: name
        };

        if (cover) {
          mediaMetaDataConfig.artwork = ['96x96', '128x128', '192x192', '256x256', '384x384', '512x512'].map(function (size) {
            return {
              src: cover,
              sizes: size,
              type: 'image/png'
            };
          });
        }

        navigator.mediaSession.metadata = new MediaMetadata(mediaMetaDataConfig);

        _this.updateMediaSessionPositionState();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMediaSessionPositionState", function () {
      if ('setPositionState' in navigator.mediaSession) {
        try {
          var _assertThisInitialize2 = _assertThisInitialized(_this),
              audio = _assertThisInitialize2.audio;

          navigator.mediaSession.setPositionState({
            duration: _this.audioDuration,
            playbackRate: audio.playbackRate || 1,
            position: audio.currentTime || 0
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Update media session position state failed: ', error);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddMediaSession", function () {
      if ('mediaSession' in navigator && _this.props.showMediaSession) {
        var defaultSkipTime = 10;
        navigator.mediaSession.setActionHandler('play', _this.onTogglePlay);
        navigator.mediaSession.setActionHandler('pause', _this.onTogglePlay);
        navigator.mediaSession.setActionHandler('seekbackward', function (details) {
          var skipTime = details.seekOffset || defaultSkipTime;
          _this.audio.currentTime = Math.max(_this.audio.currentTime - skipTime, 0);
          _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
        });
        navigator.mediaSession.setActionHandler('seekforward', function (details) {
          var skipTime = details.seekOffset || defaultSkipTime;
          _this.audio.currentTime = Math.min(_this.audio.currentTime + skipTime, _this.audioDuration);
          _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
        });
        navigator.mediaSession.setActionHandler('previoustrack', _this.onPlayPrevAudio);
        navigator.mediaSession.setActionHandler('nexttrack', _this.onPlayNextAudio);
        setTimeout(function () {
          _this.updateMediaSessionMetadata();
        }, 0);

        try {
          navigator.mediaSession.setActionHandler('seekto', function (event) {
            if (event.fastSeek && 'fastSeek' in _this.audio) {
              _this.audio.fastSeek(event.seekTime);

              return;
            }

            _this.audio.currentTime = event.seekTime;

            _this.updateMediaSessionPositionState();
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn('Warning! The "seekto" media session action is not supported.');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bindUnhandledRejection", function () {
      window.addEventListener('unhandledrejection', _this.onAudioError);
    });

    _defineProperty(_assertThisInitialized(_this), "unBindUnhandledRejection", function () {
      window.removeEventListener('unhandledrejection', _this.onAudioError);
    });

    _defineProperty(_assertThisInitialized(_this), "bindKeyDownEvents", function () {
      if (_this.props.spaceBar && _this.player.current) {
        _this.player.current.addEventListener('keydown', _this.onKeyDown, false);

        _this.player.current.focus({
          preventScroll: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unBindKeyDownEvents", function () {
      if (_this.player.current) {
        _this.player.current.removeEventListener('keydown', _this.onKeyDown, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var spaceBar = _this.props.spaceBar;

      if (spaceBar && e.keyCode === _config_keycode__WEBPACK_IMPORTED_MODULE_15__["SPACE_BAR_KEYCODE"]) {
        _this.onTogglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initPlayer", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.audioLists;
      var isBindKeyDownEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var resetAudioVolume = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!Array.isArray(audioLists) || !audioLists.length) {
        return;
      }

      if (resetAudioVolume) {
        _this.setDefaultAudioVolume();
      }

      _this.bindUnhandledRejection();

      _this.bindEvents(_this.audio);

      _this.initLyricParser();

      _this.onAddMediaSession();

      if (IS_MOBILE) {
        _this.bindMobileAutoPlayEvents();
      } else {
        if (isBindKeyDownEvents) {
          _this.bindKeyDownEvents();
        }

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_29__["isSafari"])()) {
          _this.bindSafariAutoPlayEvents();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeLyric", function () {
      if (_this.lyric) {
        _this.lyric.stop();

        _this.lyric = undefined;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unInstallPlayer", function () {
      _this.unBindEvents(_this.audio, undefined, false);

      _this.unBindUnhandledRejection();

      _this.unBindKeyDownEvents();

      _this.removeMobileListener();

      _this.removeLyric();

      _this._onDestroyed();

      _this.sortable && _this.sortable.destroy();
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioCanPlay", function () {
      if (_this.state.isAudioSeeking) {
        return;
      }

      _this.setState({
        canPlay: true
      }, function () {
        _this.playAudio(true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initSortableAudioLists", function () {
      var _this$props4 = _this.props,
          audioLists = _this$props4.audioLists,
          sortableOptions = _this$props4.sortableOptions;

      var selector = _config_sortable__WEBPACK_IMPORTED_MODULE_26__["default"].selector,
          defaultOptions = _objectWithoutProperties(_config_sortable__WEBPACK_IMPORTED_MODULE_26__["default"], ["selector"]);

      var container = document.querySelector(".".concat(selector));

      if (Array.isArray(audioLists) && !audioLists.length || !container) {
        return;
      }

      if (_this.sortable) {
        _this.sortable.destroy();
      }

      _this.sortable = new sortablejs__WEBPACK_IMPORTED_MODULE_8__["default"](container, _objectSpread(_objectSpread({
        onEnd: _this.onAudioListsSortEnd
      }, defaultOptions), sortableOptions));
    });

    _this.audio = null;
    _this.targetId = 'music-player-controller';
    _this._PLAY_MODE_ = Object.values(_config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"]);
    _this._PLAY_MODE_LENGTH_ = _this._PLAY_MODE_.length;
    _this.player = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["createRef"])();
    _this.destroyBtn = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["createRef"])();
    return _this;
  }

  _createClass(ReactJkMusicPlayer, [{
    key: "locale",
    get: // 初始播放id
    function get() {
      var locale = this.props.locale;

      if (typeof locale === 'string') {
        return _locale__WEBPACK_IMPORTED_MODULE_27__["default"][this.props.locale];
      }

      return locale ? _objectSpread(_objectSpread({}, _locale__WEBPACK_IMPORTED_MODULE_27__["default"][_config_locale__WEBPACK_IMPORTED_MODULE_16__["default"].en_US]), locale) : {};
    }
  }, {
    key: "audioDuration",
    get: function get() {
      var _this$state15 = this.state,
          audioLists = _this$state15.audioLists,
          playId = _this$state15.playId;

      if (!audioLists.length || !this.audio) {
        return 0;
      }

      var _ref15 = audioLists.find(function (audio) {
        return audio[_config_player__WEBPACK_IMPORTED_MODULE_25__["PLAYER_KEY"]] === playId;
      }) || {},
          duration = _ref15.duration;

      return Math.max(Number(duration) || this.audio.duration || 0, 0);
    }
  }, {
    key: "isAudioCanPlay",
    get: function get() {
      var autoPlay = this.props.autoPlay;
      var _this$state16 = this.state,
          isInitAutoPlay = _this$state16.isInitAutoPlay,
          isAutoPlayWhenUserClicked = _this$state16.isAutoPlayWhenUserClicked,
          canPlay = _this$state16.canPlay;
      return canPlay && (isInitAutoPlay || autoPlay || isAutoPlayWhenUserClicked);
    }
  }, {
    key: "iconMap",
    get: function get() {
      var _this3 = this;

      var Spin = function Spin() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "loading group"
        }, _this3.props.icon.loading);
      };

      return _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_ICON), this.props.icon), {}, {
        loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Spin, null)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          drag = _this$props5.drag,
          style = _this$props5.style,
          showDownload = _this$props5.showDownload,
          showPlay = _this$props5.showPlay,
          showReload = _this$props5.showReload,
          showPlayMode = _this$props5.showPlayMode,
          showThemeSwitch = _this$props5.showThemeSwitch,
          toggleMode = _this$props5.toggleMode,
          showMiniModeCover = _this$props5.showMiniModeCover,
          extendsContent = _this$props5.extendsContent,
          defaultPlayMode = _this$props5.defaultPlayMode,
          seeked = _this$props5.seeked,
          showProgressLoadBar = _this$props5.showProgressLoadBar,
          bounds = _this$props5.bounds,
          defaultPosition = _this$props5.defaultPosition,
          showMiniProcessBar = _this$props5.showMiniProcessBar,
          preload = _this$props5.preload,
          glassBg = _this$props5.glassBg,
          remove = _this$props5.remove,
          lyricClassName = _this$props5.lyricClassName,
          showLyric = _this$props5.showLyric,
          getContainer = _this$props5.getContainer,
          autoHiddenCover = _this$props5.autoHiddenCover,
          showDestroy = _this$props5.showDestroy,
          responsive = _this$props5.responsive;
      var locale = this.locale;
      var _this$state17 = this.state,
          toggle = _this$state17.toggle,
          playing = _this$state17.playing,
          currentTime = _this$state17.currentTime,
          soundValue = _this$state17.soundValue,
          moveX = _this$state17.moveX,
          moveY = _this$state17.moveY,
          loading = _this$state17.loading,
          audioListsPanelVisible = _this$state17.audioListsPanelVisible,
          theme = _this$state17.theme,
          name = _this$state17.name,
          cover = _this$state17.cover,
          singer = _this$state17.singer,
          musicSrc = _this$state17.musicSrc,
          playId = _this$state17.playId,
          isMobile = _this$state17.isMobile,
          playMode = _this$state17.playMode,
          playModeTipVisible = _this$state17.playModeTipVisible,
          playModelNameVisible = _this$state17.playModelNameVisible,
          initAnimate = _this$state17.initAnimate,
          loadedProgress = _this$state17.loadedProgress,
          audioLists = _this$state17.audioLists,
          removeId = _this$state17.removeId,
          currentLyric = _this$state17.currentLyric,
          audioLyricVisible = _this$state17.audioLyricVisible,
          isPlayDestroyed = _this$state17.isPlayDestroyed,
          isResetCoverRotate = _this$state17.isResetCoverRotate;
      var preloadState = preload === false || preload === 'none' ? {} : preload === true ? {
        preload: 'auto'
      } : {
        preload: preload
      };
      var panelToggleAnimate = initAnimate ? {
        show: audioListsPanelVisible,
        hide: !audioListsPanelVisible
      } : {
        show: audioListsPanelVisible
      };
      var currentPlayMode = _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"][playMode || defaultPlayMode] || _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order;
      var currentPlayModeName = locale.playModeText[currentPlayMode];
      var miniModeCoverConfig = showMiniModeCover && !autoHiddenCover || autoHiddenCover && cover ? {
        style: {
          backgroundImage: "url(".concat(cover, ")")
        }
      } : {};
      var formattedCurrentTime = Object(_utils__WEBPACK_IMPORTED_MODULE_29__["formatTime"])(currentTime);
      var formattedAudioDuration = Object(_utils__WEBPACK_IMPORTED_MODULE_29__["formatTime"])(this.audioDuration);
      var progressHandler = seeked ? {
        onChange: this.onProgressChange,
        onAfterChange: this.onAudioSeeked
      } : {};
      var ProgressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, showProgressLoadBar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "progress-load-bar",
        style: {
          width: "".concat(Math.min(loadedProgress, 100), "%")
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
        max: Math.ceil(this.audioDuration),
        defaultValue: 0,
        value: Math.ceil(currentTime)
      }, progressHandler, _config_slider__WEBPACK_IMPORTED_MODULE_22__["PROGRESS_BAR_SLIDER_OPTIONS"])));
      var DownloadComponent = showDownload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group audio-download",
        onClick: this.onAudioDownload,
        title: locale.downloadText
      }, this.iconMap.download);
      var ThemeSwitchComponent = showThemeSwitch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group theme-switch"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "theme-switch-container",
        onChange: this.themeChange,
        checkedChildren: locale.lightThemeText,
        unCheckedChildren: locale.darkThemeText,
        checked: theme === _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].LIGHT,
        title: locale.switchThemeText
      }));
      var ReloadComponent = showReload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group reload-btn",
        onClick: this.onAudioReload,
        title: locale.reloadText
      }, this.iconMap.reload);
      var LyricComponent = showLyric && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('group lyric-btn', {
          'lyric-btn-active': audioLyricVisible
        }),
        onClick: this.toggleAudioLyric,
        title: locale.toggleLyricText
      }, this.iconMap.lyric);
      var PlayModeComponent = showPlayMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('group loop-btn'),
        onClick: this.togglePlayMode,
        title: locale.playModeText[currentPlayMode]
      }, this.renderPlayModeIcon(currentPlayMode));
      var miniProcessBarR = isMobile ? 30 : 40;
      var DestroyComponent = showDestroy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        title: locale.destroyText,
        className: "group destroy-btn",
        ref: this.destroyBtn,
        onClick: !drag || toggle ? this.onDestroyPlayer : undefined
      }, this.iconMap.destroy);
      var AudioController = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('react-jinke-music-player'),
        style: defaultPosition,
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('music-player')
      }, showMiniProcessBar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CircleProcessBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        progress: currentTime / this.audioDuration,
        r: miniProcessBarR
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", _extends({
        id: this.targetId,
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('scale', 'music-player-controller', {
          'music-player-playing': playing
        })
      }, miniModeCoverConfig, {
        onClick: !drag ? this.onOpenPanel : undefined
      }), loading ? this.iconMap.loading : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "controller-title"
      }, locale.controllerTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "music-player-controller-setting"
      }, toggle ? locale.closeText : locale.openText))), DestroyComponent));
      var container = getContainer() || document.body;
      var audioTitle = this.getAudioTitle();

      if (isPlayDestroyed) {
        return null;
      }

      var shouldShowPlayIcon = !playing || this.state.currentVolumeFade === _config_volumeFade__WEBPACK_IMPORTED_MODULE_24__["VOLUME_FADE"].OUT;
      return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('react-jinke-music-player-main', {
          'light-theme': theme === _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].LIGHT,
          'dark-theme': theme === _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].DARK
        }, className),
        style: style,
        ref: this.player,
        tabIndex: "-1"
      }, toggle && isMobile && responsive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PlayerMobile__WEBPACK_IMPORTED_MODULE_12__["default"], {
        playing: playing,
        loading: loading,
        name: name,
        singer: singer,
        cover: cover,
        themeSwitch: ThemeSwitchComponent,
        duration: formattedAudioDuration,
        currentTime: formattedCurrentTime,
        progressBar: ProgressBar,
        onPlay: this.onTogglePlay,
        currentPlayModeName: currentPlayModeName,
        playMode: PlayModeComponent,
        audioNextPlay: this.onPlayNextAudio,
        audioPrevPlay: this.onPlayPrevAudio,
        icon: _objectSpread(_objectSpread({}, this.iconMap), {}, {
          reload: ReloadComponent,
          download: DownloadComponent,
          lyric: LyricComponent
        }),
        playModeTipVisible: playModeTipVisible,
        openAudioListsPanel: this.openAudioListsPanel,
        onClose: this.onHidePanel,
        extendsContent: extendsContent,
        glassBg: glassBg,
        autoHiddenCover: autoHiddenCover,
        onCoverClick: this.onCoverClick,
        locale: locale,
        toggleMode: toggleMode,
        renderAudioTitle: this.renderAudioTitle,
        shouldShowPlayIcon: shouldShowPlayIcon,
        isResetCoverRotate: isResetCoverRotate
      }), toggle ? undefined : drag ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_7___default.a, {
        bounds: bounds,
        position: {
          x: moveX,
          y: moveY
        },
        onDrag: this.onControllerDrag,
        onStop: this.onControllerDragStop,
        onStart: this.onControllerDragStart
      }, AudioController) : AudioController, toggle && (!isMobile || !responsive) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('music-player-panel', 'translate', {
          'glass-bg': glassBg
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "panel-content"
      }, (!autoHiddenCover || autoHiddenCover && cover) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('img-content', 'img-rotate', {
          'img-rotate-pause': !playing || !cover,
          'img-rotate-reset': isResetCoverRotate
        }),
        style: {
          backgroundImage: "url(".concat(cover, ")")
        },
        onClick: function onClick() {
          return _this4.onCoverClick();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "progress-bar-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "audio-title",
        title: audioTitle
      }, this.renderAudioTitle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "audio-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "current-time",
        title: formattedCurrentTime
      }, loading ? '--' : formattedCurrentTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "progress-bar"
      }, ProgressBar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "duration",
        title: formattedAudioDuration
      }, loading ? '--' : formattedAudioDuration))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "player-content"
      }, !showPlay ? loading && this.iconMap.loading : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group prev-audio",
        title: locale.previousTrackText,
        onClick: this.onPlayPrevAudio
      }, this.iconMap.prev), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group loading-icon",
        title: locale.loadingText
      }, this.iconMap.loading) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group play-btn",
        onClick: this.onTogglePlay,
        title: shouldShowPlayIcon ? locale.clickToPlayText : locale.clickToPauseText
      }, shouldShowPlayIcon ? this.iconMap.play : this.iconMap.pause), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group next-audio",
        title: locale.nextTrackText,
        onClick: this.onPlayNextAudio
      }, this.iconMap.next)), ReloadComponent, DownloadComponent, ThemeSwitchComponent, extendsContent || null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group play-sounds",
        title: locale.volumeText
      }, soundValue === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "sounds-icon",
        onClick: this.onResetVolume
      }, this.iconMap.mute) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "sounds-icon",
        onClick: this.onAudioMute
      }, this.iconMap.volume), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
        value: soundValue,
        onChange: this.onAudioSoundChange,
        className: "sound-operation"
      }, _config_slider__WEBPACK_IMPORTED_MODULE_22__["VOLUME_BAR_SLIDER_OPTIONS"]))), PlayModeComponent, LyricComponent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group audio-lists-btn",
        title: locale.playListsText,
        onClick: this.openAudioListsPanel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "audio-lists-icon"
      }, this.iconMap.playLists), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "audio-lists-num"
      }, audioLists.length)), toggleMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "group hide-panel",
        title: locale.toggleMiniModeText,
        onClick: this.onHidePanel
      }, this.iconMap.toggle), DestroyComponent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AudioListsPanel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        playing: playing,
        playId: playId,
        loading: loading,
        visible: audioListsPanelVisible,
        audioLists: audioLists,
        onPlay: this.audioListsPlay,
        onCancel: this.closeAudioListsPanel,
        icon: this.iconMap,
        isMobile: isMobile,
        panelToggleAnimate: panelToggleAnimate,
        glassBg: glassBg,
        cover: cover,
        remove: remove,
        onDelete: this.onDeleteAudioLists,
        removeId: removeId,
        locale: locale
      }), !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PlayModel__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: playModelNameVisible,
        value: currentPlayModeName
      }), audioLyricVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('music-player-lyric', lyricClassName)
      }, currentLyric || locale.emptyLyricText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("audio", _extends({
        className: "music-player-audio",
        title: audioTitle
      }, preloadState, {
        src: musicSrc,
        ref: function ref(node) {
          _this4.audio = node;
        }
      }))), container);
    }
  }, {
    key: "getBaseAudioInfo",
    value: // 返回给使用者的 音乐信息
    function getBaseAudioInfo() {
      var _this$state18 = this.state,
          cover = _this$state18.cover,
          name = _this$state18.name,
          musicSrc = _this$state18.musicSrc,
          soundValue = _this$state18.soundValue,
          lyric = _this$state18.lyric,
          audioLists = _this$state18.audioLists,
          currentLyric = _this$state18.currentLyric;

      var _ref16 = this.audio || {},
          currentTime = _ref16.currentTime,
          muted = _ref16.muted,
          networkState = _ref16.networkState,
          readyState = _ref16.readyState,
          played = _ref16.played,
          paused = _ref16.paused,
          ended = _ref16.ended,
          startDate = _ref16.startDate;

      var currentPlayIndex = this.getCurrentPlayIndex();
      var currentAudioListInfo = audioLists[currentPlayIndex] || {};
      return _objectSpread(_objectSpread({}, currentAudioListInfo), {}, {
        cover: cover,
        name: name,
        musicSrc: musicSrc,
        volume: soundValue,
        currentTime: currentTime,
        duration: this.audioDuration,
        muted: muted,
        networkState: networkState,
        readyState: readyState,
        played: played,
        paused: paused,
        ended: ended,
        startDate: startDate,
        lyric: lyric,
        currentLyric: currentLyric,
        playIndex: currentPlayIndex
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (prevState.musicSrc !== this.state.musicSrc) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isResetCoverRotate: true
        });
      }
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this5 = this;

      var audioLists = nextProps.audioLists,
          playIndex = nextProps.playIndex,
          theme = nextProps.theme,
          mode = nextProps.mode,
          playMode = nextProps.playMode,
          clearPriorAudioLists = nextProps.clearPriorAudioLists;
      var isEqualAudioLists = Object(_utils__WEBPACK_IMPORTED_MODULE_29__["arrayEqual"])(audioLists)(this.props.audioLists);

      if (!isEqualAudioLists) {
        if (clearPriorAudioLists) {
          this.changeAudioLists(nextProps);
        } else {
          this.updateAudioLists(audioLists);
        }

        if (!this.checkCurrentPlayingAudioIsInUpdatedAudioLists(nextProps)) {
          this.initPlayer(audioLists, false, false);
        }

        setTimeout(function () {
          return _this5.initSortableAudioLists();
        }, 200);
      }

      this.updatePlayIndex(!isEqualAudioLists && clearPriorAudioLists ? _config_player__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_PLAY_INDEX"] : playIndex);
      this.updateTheme(theme);
      this.updateMode(mode);
      this.updatePlayMode(playMode);
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this6 = this;

      var _this$props6 = this.props,
          audioLists = _this$props6.audioLists,
          remember = _this$props6.remember;

      if (Array.isArray(audioLists) && audioLists.length >= 1) {
        var playInfo = this.getPlayInfo(audioLists);
        var lastPlayStatus = remember ? this.getLastPlayStatus() : {};

        switch (_typeof(playInfo.musicSrc)) {
          case 'function':
            playInfo.musicSrc().then(function (val) {
              _this6.setState(_objectSpread(_objectSpread({}, playInfo), {}, {
                musicSrc: val
              }, lastPlayStatus));
            }, this.onAudioError);
            break;

          default:
            this.setState(_objectSpread(_objectSpread({}, playInfo), lastPlayStatus));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unInstallPlayer();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addMobileListener();
      this.addSystemThemeListener();
      this.initPlayer();
      this.initSortableAudioLists();
      this.onGetAudioInstance();
    }
  }]);

  return ReactJkMusicPlayer;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

_defineProperty(ReactJkMusicPlayer, "defaultProps", {
  audioLists: [],
  theme: _config_theme__WEBPACK_IMPORTED_MODULE_23__["THEME"].DARK,
  mode: _config_mode__WEBPACK_IMPORTED_MODULE_18__["MODE"].MINI,
  defaultPlayMode: _config_playMode__WEBPACK_IMPORTED_MODULE_20__["default"].order,
  defaultPosition: {
    left: 0,
    top: 0
  },
  once: false,
  // onAudioPlay 事件  是否只触发一次
  drag: true,
  toggleMode: true,
  // 能换在迷你 和完整模式下 互相切换
  showMiniModeCover: true,
  // 迷你模式下 是否显示封面图
  showDownload: true,
  showPlay: true,
  showReload: true,
  showPlayMode: true,
  showThemeSwitch: true,
  showLyric: false,
  playModeTipVisible: false,
  // 手机端切换播放模式
  autoPlay: true,
  defaultVolume: 1,
  showProgressLoadBar: true,
  // 音频预加载进度
  seeked: true,
  playModeShowTime: 600,
  // 播放模式提示 显示时间,
  bounds: 'body',
  // mini 模式拖拽的可移动边界
  showMiniProcessBar: false,
  // 是否在迷你模式 显示进度条
  loadAudioErrorPlayNext: true,
  // 加载音频失败时 是否尝试播放下一首
  preload: false,
  // 是否在页面加载后立即加载音频
  glassBg: false,
  // 是否是毛玻璃效果
  remember: false,
  // 是否记住当前播放状态
  remove: true,
  // 音乐是否可以删除
  defaultPlayIndex: 0,
  // 默认播放索引
  getContainer: function getContainer() {
    return document.body;
  },
  // 播放器挂载的节点
  autoHiddenCover: false,
  // 当前播放歌曲没有封面时是否自动隐藏
  onBeforeAudioDownload: function onBeforeAudioDownload() {},
  // 下载前转换音频地址等
  spaceBar: false,
  // 是否可以通过空格键 控制播放暂停
  showDestroy: false,
  showMediaSession: false,
  locale: _config_locale__WEBPACK_IMPORTED_MODULE_16__["default"].en_US,
  responsive: true,
  icon: DEFAULT_ICON,
  quietUpdate: false,
  // 更新后的播放列表如果有当前正在播放的歌曲不打断当前播放状态
  mobileMediaQuery: _config_mediaQuery__WEBPACK_IMPORTED_MODULE_17__["MEDIA_QUERY"].MOBILE,
  // 音频暂停播放 淡入淡出
  volumeFade: {
    fadeIn: 0,
    fadeOut: 0
  },
  restartCurrentOnPrev: false,
  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {}
});

_defineProperty(ReactJkMusicPlayer, "propTypes", _config_propTypes__WEBPACK_IMPORTED_MODULE_21__["default"]);



/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/locale/en_US.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/locale/en_US.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./node_modules/react-jinke-music-player/es/components/Icon.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  playModeText: {
    order: 'Play in order',
    orderLoop: 'List loop',
    singleLoop: 'Single loop',
    shufflePlay: 'Shuffle playback'
  },
  openText: 'Open',
  closeText: 'Close',
  emptyText: 'No music',
  clickToPlayText: 'Click to play',
  clickToPauseText: 'Click to pause',
  nextTrackText: 'Next track',
  previousTrackText: 'Previous track',
  reloadText: 'Reload',
  volumeText: 'Volume',
  playListsText: 'Playlists',
  toggleLyricText: 'Toggle lyric',
  toggleMiniModeText: 'Minimize',
  destroyText: 'Destroy',
  downloadText: 'Download',
  lightThemeText: 'L',
  darkThemeText: 'D',
  switchThemeText: 'Dark/Light mode',
  removeAudioListsText: 'Delete audio lists',
  clickToDeleteText: function clickToDeleteText(name) {
    return "Click to delete ".concat(name);
  },
  controllerTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["FaHeadphonesIcon"], null),
  emptyLyricText: 'No lyric',
  loadingText: 'Loading'
});

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/locale/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/locale/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/locale */ "./node_modules/react-jinke-music-player/es/config/locale.js");
/* harmony import */ var _en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en_US */ "./node_modules/react-jinke-music-player/es/locale/en_US.js");
/* harmony import */ var _zh_CN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh_CN */ "./node_modules/react-jinke-music-player/es/locale/zh_CN.js");
var _locale;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable camelcase */



var locale = (_locale = {}, _defineProperty(_locale, _config_locale__WEBPACK_IMPORTED_MODULE_0__["default"].en_US, _en_US__WEBPACK_IMPORTED_MODULE_1__["default"]), _defineProperty(_locale, _config_locale__WEBPACK_IMPORTED_MODULE_0__["default"].zh_CN, _zh_CN__WEBPACK_IMPORTED_MODULE_2__["default"]), _locale);
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/locale/zh_CN.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/locale/zh_CN.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icon */ "./node_modules/react-jinke-music-player/es/components/Icon.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  playModeText: {
    order: '顺序播放',
    orderLoop: '列表循环',
    singleLoop: '单曲循环',
    shufflePlay: '随机播放'
  },
  openText: '打开',
  closeText: '关闭',
  emptyText: '音乐播放列表为空',
  clickToPlayText: '点击播放',
  clickToPauseText: '点击暂停',
  nextTrackText: '下一首',
  previousTrackText: '上一首',
  reloadText: '重新播放',
  volumeText: '音量',
  playListsText: '播放列表',
  toggleLyricText: '显示/隐藏 歌词',
  toggleMiniModeText: '切换至迷你模式',
  destroyText: '移除播放器',
  downloadText: '下载',
  lightThemeText: '亮',
  darkThemeText: '暗',
  switchThemeText: '暗黑/明亮 主题',
  removeAudioListsText: '清空播放列表',
  clickToDeleteText: function clickToDeleteText(name) {
    return "\u70B9\u51FB\u5220\u9664 ".concat(name);
  },
  controllerTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_1__["FaHeadphonesIcon"], null),
  emptyLyricText: '暂无歌词',
  loadingText: '加载中'
});

/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/lyric.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/lyric.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lyric; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// use by https://github.com/ustbhuangyi/lyric-parser
var timeExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g;
var STATE_PAUSE = 0;
var STATE_PLAYING = 1;
var tagRegMap = {
  title: 'ti',
  artist: 'ar',
  album: 'al',
  offset: 'offset',
  by: 'by'
};

var Lyric = /*#__PURE__*/function () {
  function Lyric(lrc) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    _classCallCheck(this, Lyric);

    this.lrc = lrc;
    this.tags = {};
    this.lines = [];
    this.handler = handler;
    this.state = STATE_PAUSE;
    this.curLine = 0;

    this._init();
  }

  _createClass(Lyric, [{
    key: "_init",
    value: function _init() {
      this._initTag();

      this._initLines();
    }
  }, {
    key: "_initTag",
    value: function _initTag() {
      for (var tag in tagRegMap) {
        var matches = this.lrc.match(new RegExp("\\[".concat(tagRegMap[tag], ":([^\\]]*)]"), 'i'));
        this.tags[tag] = matches && matches[1] || '';
      }
    }
  }, {
    key: "_initLines",
    value: function _initLines() {
      var lines = this.lrc.split('\n');
      var offset = parseInt(this.tags.offset, 10) || 0;

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var result = timeExp.exec(line);

        if (result) {
          var txt = line.replace(timeExp, '').trim();

          if (txt) {
            this.lines.push({
              time: result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10 + offset,
              txt: txt
            });
          }
        }
      }

      this.lines.sort(function (a, b) {
        return a.time - b.time;
      });
    }
  }, {
    key: "_findCurNum",
    value: function _findCurNum(time) {
      for (var i = 0; i < this.lines.length; i++) {
        if (time <= this.lines[i].time) {
          return i;
        }
      }

      return this.lines.length - 1;
    }
  }, {
    key: "_callHandler",
    value: function _callHandler(i) {
      if (i < 0) {
        return;
      }

      this.handler({
        txt: this.lines[i].txt,
        lineNum: i
      });
    }
  }, {
    key: "_playRest",
    value: function _playRest() {
      var _this = this;

      var line = this.lines[this.curNum];
      var delay = line.time - (+new Date() - this.startStamp);
      this.timer = setTimeout(function () {
        _this._callHandler(_this.curNum++);

        if (_this.curNum < _this.lines.length && _this.state === STATE_PLAYING) {
          _this._playRest();
        }
      }, delay);
    }
  }, {
    key: "play",
    value: function play() {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var skipLast = arguments.length > 1 ? arguments[1] : undefined;

      if (!this.lines.length) {
        return;
      }

      this.state = STATE_PLAYING;
      this.curNum = this._findCurNum(startTime);
      this.startStamp = +new Date() - startTime;

      if (!skipLast) {
        this._callHandler(this.curNum - 1);
      }

      if (this.curNum < this.lines.length) {
        clearTimeout(this.timer);

        this._playRest();
      }
    }
  }, {
    key: "togglePlay",
    value: function togglePlay() {
      var now = +new Date();

      if (this.state === STATE_PLAYING) {
        this.stop();
        this.pauseStamp = now;
      } else {
        this.state = STATE_PLAYING;
        this.play((this.pauseStamp || now) - (this.startStamp || now), true);
        this.pauseStamp = 0;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.state = STATE_PAUSE;
      clearTimeout(this.timer);
    }
  }, {
    key: "seek",
    value: function seek(offset) {
      this.play(offset);
    }
  }]);

  return Lyric;
}();



/***/ }),

/***/ "./node_modules/react-jinke-music-player/es/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-jinke-music-player/es/utils.js ***!
  \***********************************************************/
/*! exports provided: formatTime, createRandomNum, distinct, arrayEqual, uuId, isSafari, isIOS, swing, adjustVolume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRandomNum", function() { return createRandomNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuId", function() { return uuId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return swing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustVolume", function() { return adjustVolume; });
/* eslint-disable no-param-reassign */

/* eslint-disable radix */

/* eslint-disable no-bitwise */
function formatTime(second) {
  var i = 0;
  var h = 0;
  var s = parseInt(second);

  if (s >= 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);

    if (i >= 60) {
      h = parseInt(i / 60);
      i = parseInt(i % 60);
    }
  } // 补零


  var zero = function zero(v) {
    return v >> 0 < 10 ? "0".concat(v) : v;
  };

  if (h > 0) return [zero(h), zero(i), zero(s)].join(':');
  return [zero(i), zero(s)].join(':');
}
function createRandomNum(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}
function distinct(array) {
  return array.map(function (item) {
    return JSON.stringify(item);
  }).filter(function (item, idx, arr) {
    return idx === arr.indexOf(item);
  }).map(function (item) {
    return JSON.parse(item);
  });
}
var arrayEqual = function arrayEqual(arr1) {
  return function (arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };
};

var s4 = function s4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}; // Generate a pseudo-GUID by concatenating random hexadecimal.


var uuId = function uuId() {
  return "".concat(s4() + s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4()).concat(s4()).concat(s4());
};
var isSafari = function isSafari() {
  return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}; // https://stackoverflow.com/a/9039885/2789451

function isIOS() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes('Mac') && 'ontouchend' in document;
} // https://stackoverflow.com/questions/7451508/html5-audio-playback-with-fade-in-and-fade-out

function swing(p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}
function adjustVolume(element, startVolume, endVolume) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1000 : _ref$duration,
      _ref$easing = _ref.easing,
      easing = _ref$easing === void 0 ? swing : _ref$easing,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 13 : _ref$interval;

  var callback = arguments.length > 4 ? arguments[4] : undefined;
  var delta = endVolume - startVolume;

  if (!delta || !duration || !easing || !interval || isIOS()) {
    element.volume = endVolume;
    callback();
    return {
      fadeInterval: undefined,
      updateIntervalEndVolume: undefined
    };
  }

  var ticks = Math.floor(duration / interval);
  var tick = 1;

  var updateIntervalEndVolume = function updateIntervalEndVolume(newVolume) {
    endVolume = newVolume;
  };

  var timer = setInterval(function () {
    // End volume may have changed in middle of fading
    var newDelta = endVolume - startVolume;

    if (newDelta !== delta) {
      delta = newDelta;
    }

    element.volume = startVolume + easing(tick / ticks) * delta;

    if (++tick >= ticks) {
      element.volume = endVolume;
      clearInterval(timer);
      callback();
    }
  }, interval);
  return {
    fadeInterval: timer,
    updateIntervalEndVolume: updateIntervalEndVolume
  };
}

/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/*! exports provided: default, MultiDrag, Sortable, Swap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.13.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.13.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



/***/ }),

/***/ "./src/lib/components/MusicComponent.react.js":
/*!****************************************************!*\
  !*** ./src/lib/components/MusicComponent.react.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MusicComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jinke_music_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jinke-music-player */ "./node_modules/react-jinke-music-player/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * ExampleComponent is an example component.

 */

var audioList2 = [{
  name: 'Bedtime Stories',
  singer: 'Jay Chou',
  cover: 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
  musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3'
}, {
  name: 'Dorost Nemisham',
  singer: 'Sirvan Khosravi',
  cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
  musicSrc: function musicSrc() {
    return Promise.resolve('https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3');
  }
}, {
  name: 'Despacito',
  singer: 'Luis Fonsi',
  cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
  musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
}];
var options = {
  // audio lists model
  audioLists: audioList1,
  // default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,
  // if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,
  // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
  theme: 'auto',
  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  // Ref: https://github.com/STRML/react-draggable#draggable-api
  bounds: 'body',

  /**
   * Don't interrupt current playing state when audio list updated
   * audioLists eg. (A) is current playing...
   * [A,B] => [A,C,B]
   * [A,B] => [A,B,C]
   *
   * if (A) not in updated audio lists
   * [A,B] => [C]
   * (C) is playing
   */
  // [type `boolean`, default `false`]
  quietUpdate: false,
  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,
  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,
  // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  // "auto|metadata|none" "true| false"
  preload: false,
  // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,
  // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,
  // The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,
  // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    right: 100,
    bottom: 120
  },
  // if you want dynamic change current play mode you can change it
  // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
  // playMode: 'order',
  defaultPlayMode: 'order',
  // audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,
  // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,
  // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,
  // audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,
  // audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,
  // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,
  // drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,
  // Display chrome media session.  [type `Boolean` default `false`]
  showMediaSession: true,
  // Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,
  // play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,
  // reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,
  // download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: true,
  // loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,
  // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,
  // lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: true,
  // destroy player button display  [type `Boolean` default `false`]
  showDestroy: true,
  // Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,
  // default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,
  // playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,
  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,
  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: false,
  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,
  // international [type `en_US | zh_CN | Object` default `en_US`]
  locale: Locale.en_US,
  // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
  responsive: true,

  /**
   * Custom mobile media query string, eg use the mobile version UI on iPad.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
   * [type `String` default '(max-width: 768px) and (orientation : portrait)']
   */
  mobileMediaQuery: '(max-width: 1024px)',
  // Audio volume with fade in and fade out [type `{ fadeIn: number, fadeOut: number }` default `{ fadeIn: 0, fadeOut: 0 }`]
  volumeFade: {
    fadeIn: 1000,
    fadeOut: 1000
  },

  /**
   * Restarts the current track when trying to play previous song, if the current time of the song is more than 1 second
      Otherwise, plays the previous song in the list
      [type `Boolean` default `false`]
  */
  restartCurrentOnPrev: false,
  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {},
  // Music is downloaded handle
  onAudioDownload: function onAudioDownload(audioInfo) {
    console.log('audio download', audioInfo);
  },
  // audio play handle
  onAudioPlay: function onAudioPlay(audioInfo) {
    console.log('audio playing', audioInfo);
  },
  // audio pause handle
  onAudioPause: function onAudioPause(audioInfo) {
    console.log('audio pause', audioInfo);
  },
  // When the user has moved/jumped to a new location in audio
  onAudioSeeked: function onAudioSeeked(audioInfo) {
    console.log('audio seeked', audioInfo);
  },
  // When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange: function onAudioVolumeChange(currentVolume) {
    console.log('audio volume change', currentVolume);
  },
  // The single song is ended handle
  onAudioEnded: function onAudioEnded(currentPlayId, audioLists, audioInfo) {
    console.log('audio ended', currentPlayId, audioLists, audioInfo);
  },
  // audio load abort
  onAudioAbort: function onAudioAbort(currentPlayId, audioLists, audioInfo) {
    console.log('audio abort', currentPlayId, audioLists, audioInfo);
  },
  // audio play progress handle
  // eslint-disable-next-line no-unused-vars
  onAudioProgress: function onAudioProgress(audioInfo) {// console.log('audio progress', audioInfo)
  },
  // audio reload handle
  onAudioReload: function onAudioReload(audioInfo) {
    console.log('audio reload:', audioInfo);
  },
  // audio load failed error handle
  onAudioError: function onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
    console.error('audio error', errMsg, currentPlayId, audioLists, audioInfo);
  },
  // theme change handle
  // onThemeChange(theme) {
  //   console.log('theme change:', theme)
  // },
  onAudioListsChange: function onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log('audio lists change:', currentPlayId, audioLists, audioInfo);
  },
  onAudioPlayTrackChange: function onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log('audio play track change:', currentPlayId, audioLists, audioInfo);
  },
  // onPlayModeChange(playMode) {
  //   console.log('play mode change:', playMode)
  // },
  // onModeChange(mode) {
  //   console.log('mode change:', mode)
  // },
  onAudioListsPanelChange: function onAudioListsPanelChange(panelVisible) {
    console.log('audio lists panel visible:', panelVisible);
  },
  onAudioListsSortEnd: function onAudioListsSortEnd(oldIndex, newIndex) {
    console.log('audio lists sort end:', oldIndex, newIndex);
  },
  onAudioLyricChange: function onAudioLyricChange(lineNum, currentLyric) {
    console.log('audio lyric change:', lineNum, currentLyric);
  },
  // custom music player root node
  getContainer: function getContainer() {
    return document.body;
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance: function getAudioInstance(audio) {
    console.log('audio instance', audio);
  },
  onBeforeDestroy: function onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    console.log('onBeforeDestroy currentPlayId: ', currentPlayId);
    console.log('onBeforeDestroy audioLists: ', audioLists);
    console.log('onBeforeDestroy audioInfo: ', audioInfo);
    return new Promise(function (resolve, reject) {
      // your custom validate
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you confirm destroy the player?')) {
        // if resolve, player destroyed
        resolve();
      } else {
        // if reject, skip.
        reject();
      }
    });
  },
  onDestroyed: function onDestroyed(currentPlayId, audioLists, audioInfo) {
    console.log('onDestroyed:', currentPlayId, audioLists, audioInfo);
  },
  onCoverClick: function onCoverClick(mode, audioLists, audioInfo) {
    console.log('onCoverClick: ', mode, audioLists, audioInfo);
  } // custom audio title
  // renderAudioTitle(audioInfo) {
  //   return <a href="#">{audioInfo.name}</a>
  // },
  // onPlayIndexChange (playIndex) {
  //   console.log('onPlayIndexChange: ', playIndex);
  // }
  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3',
  //   })
  // },

  /**
   * customer download handler
   * eg. a link , or https://www.npmjs.com/package/file-saver
   * @param {*} downloadInfo
   * @example
   *
       customDownloader(downloadInfo) {
        const link = document.createElement('a')
        link.href = downloadInfo.src
        link.download = downloadInfo.filename || 'test'
        document.body.appendChild(link)
        link.click()
      },
   */
  // customDownloader(downloadInfo) {
  //   console.log(downloadInfo.src)
  //   console.log(downloadInfo.filename)
  //   console.log(downloadInfo.mimeType)
  // },

};

var MusicComponent = /*#__PURE__*/function (_Component) {
  _inherits(MusicComponent, _Component);

  var _super = _createSuper(MusicComponent);

  function MusicComponent() {
    _classCallCheck(this, MusicComponent);

    return _super.apply(this, arguments);
  }

  _createClass(MusicComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_jinke_music_player__WEBPACK_IMPORTED_MODULE_1__["default"], {
        audioLists: {
          audioList2: audioList2
        },
        mode: "full",
        defaultPlayIndex: 0
      }), ",");
    }
  }]);

  return MusicComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


MusicComponent.defaultProps = {};
MusicComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ })

})