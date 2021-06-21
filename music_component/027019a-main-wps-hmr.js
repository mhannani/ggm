webpackHotUpdatemusic_component("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _lib_components_Try_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/components/Try.react */ "./src/lib/components/Try.react.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/* eslint no-magic-numbers: 0 */




var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      value: ''
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["MusicComponent"], _extends({
        setProps: this.setProps
      }, this.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_Try_react__WEBPACK_IMPORTED_MODULE_2__["TextInput"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/lib/components/Try.react.js":
/*!*****************************************!*\
  !*** ./src/lib/components/Try.react.js ***!
  \*****************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var TextInput = /*#__PURE__*/function (_Component) {
  _inherits(TextInput, _Component);

  var _super = _createSuper(TextInput);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _super.call(this, props);
    _this.state = {
      value: 'default'
    };
    return _this;
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Try React working");
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: MusicComponent, TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MusicComponent_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MusicComponent.react */ "./src/lib/components/MusicComponent.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return _components_MusicComponent_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_Try_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Try.react */ "./src/lib/components/Try.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _components_Try_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* eslint-disable import/prefer-default-export */




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpY19jb21wb25lbnQvLi9zcmMvZGVtby9BcHAuanMiLCJ3ZWJwYWNrOi8vbXVzaWNfY29tcG9uZW50Ly4vc3JjL2xpYi9jb21wb25lbnRzL1RyeS5yZWFjdC5qcyIsIndlYnBhY2s6Ly9tdXNpY19jb21wb25lbnQvLi9zcmMvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInN0YXRlIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiVGV4dElucHV0IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFO0FBREUsS0FBYjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUxVO0FBTWI7Ozs7V0FFRCxrQkFBU0MsUUFBVCxFQUFtQjtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7V0FFRCxrQkFBUztBQUNMLDBCQUNJLHFGQUNJLDJEQUFDLG1EQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLRjtBQURuQixTQUVRLEtBQUtGLEtBRmIsRUFESixlQUtJLDJEQUFDLG1FQUFELE9BTEosQ0FESjtBQVNIOzs7O0VBeEJhTSwrQzs7QUEyQkhQLGtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBOztJQUVNUSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS1IsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7V0FDRCxrQkFBUztBQUNQLDBCQUFPLDZGQUFQO0FBQ0Q7Ozs7RUFUcUJLLCtDOzs7Ozs7Ozs7Ozs7OztBQ0Z4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsImZpbGUiOiIwMjcwMTlhLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgTXVzaWNDb21wb25lbnQgfSBmcm9tICcuLi9saWInO1xyXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi9saWIvY29tcG9uZW50cy9UcnkucmVhY3QnXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TXVzaWNDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB2YWx1ZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PiBUcnkgUmVhY3Qgd29ya2luZzwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtUZXh0SW5wdXR9OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IE11c2ljQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NdXNpY0NvbXBvbmVudC5yZWFjdCc7XHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL1RyeS5yZWFjdCdcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBNdXNpY0NvbXBvbmVudCwgVGV4dElucHV0XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=