webpackHotUpdatemusic_component("main",{

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
        mode: "full"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpY19jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvTXVzaWNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiYXVkaW9MaXN0MiIsIm5hbWUiLCJzaW5nZXIiLCJjb3ZlciIsIm11c2ljU3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJNdXNpY0NvbXBvbmVudCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsTUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQU0sRUFBRSxVQUZWO0FBR0VDLE9BQUssRUFDSCxxRkFKSjtBQUtFQyxVQUFRLEVBQ047QUFOSixDQURpQixFQVNqQjtBQUNFSCxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBTSxFQUFFLGlCQUZWO0FBR0VDLE9BQUssRUFDSCw0R0FKSjtBQUtFQyxVQUFRLEVBQUUsb0JBQU07QUFDZCxXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FDTCxnSEFESyxDQUFQO0FBR0Q7QUFUSCxDQVRpQixFQW9CakI7QUFDRUwsTUFBSSxFQUFFLFdBRFI7QUFFRUMsUUFBTSxFQUFFLFlBRlY7QUFHRUMsT0FBSyxFQUNILCtFQUpKO0FBS0VDLFVBQVEsRUFDTjtBQU5KLENBcEJpQixDQUFuQjs7SUE2QnFCRyxjOzs7Ozs7Ozs7Ozs7O1dBQ2pCLGtCQUFTO0FBQ0wsMEJBQ0kscUZBQ0ksMkRBQUMsZ0VBQUQ7QUFBb0Isa0JBQVUsRUFBRTtBQUFFUCxvQkFBVSxFQUFWQTtBQUFGLFNBQWhDO0FBQWdELFlBQUksRUFBRTtBQUF0RCxRQURKLE1BREo7QUFLSDs7OztFQVB1Q1EsK0M7OztBQVU1Q0QsY0FBYyxDQUFDRSxZQUFmLEdBQThCLEVBQTlCO0FBRUFGLGNBQWMsQ0FBQ0csU0FBZixHQUEyQjtBQUN2QjtBQUNKO0FBQ0E7QUFDSUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQztBQUpTLENBQTNCLEMiLCJmaWxlIjoiN2IyZjFkOC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0SmtNdXNpY1BsYXllciBmcm9tICdyZWFjdC1qaW5rZS1tdXNpYy1wbGF5ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG5cclxuICovXHJcbmNvbnN0IGF1ZGlvTGlzdDIgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0JlZHRpbWUgU3RvcmllcycsXHJcbiAgICBzaW5nZXI6ICdKYXkgQ2hvdScsXHJcbiAgICBjb3ZlcjpcclxuICAgICAgJ2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vYWxpY2svaW1hZ2UvdXBsb2FkL3YxNTAyMzc1OTc4L2JlZHRpbWVfc3Rvcmllc19ieXdnZ3ouanBnJyxcclxuICAgIG11c2ljU3JjOlxyXG4gICAgICAnaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9hbGljay92aWRlby91cGxvYWQvdjE1MDIzNzU2NzQvQmVkdGltZV9TdG9yaWVzLm1wMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRG9yb3N0IE5lbWlzaGFtJyxcclxuICAgIHNpbmdlcjogJ1NpcnZhbiBLaG9zcmF2aScsXHJcbiAgICBjb3ZlcjpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Voc2FuYWhtYWRpL2ltYWdlL3VwbG9hZC92MTU3Mzc1ODc3OC9TaXJ2YW4tS2hvc3JhdmktRG9yb3N0LU5lbWlzaGFtX2dsaWNrcy5qcGcnLFxyXG4gICAgbXVzaWNTcmM6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcclxuICAgICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZWhzYW5haG1hZGkvdmlkZW8vdXBsb2FkL3YxNTczNTUwNzcwL1NpcnZhbi1LaG9zcmF2aS1Eb3Jvc3QtTmVtaXNoYW0tMTI4X2tiOHVycS5tcDMnLFxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Rlc3BhY2l0bycsXHJcbiAgICBzaW5nZXI6ICdMdWlzIEZvbnNpJyxcclxuICAgIGNvdmVyOlxyXG4gICAgICAnaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9hbGljay9pbWFnZS91cGxvYWQvdjE1MDI2ODk3MzEvRGVzcGFjaXRvX3V2b2xocC5qcGcnLFxyXG4gICAgbXVzaWNTcmM6XHJcbiAgICAgICdodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2FsaWNrL3ZpZGVvL3VwbG9hZC92MTUwMjY4OTY4My9MdWlzX0ZvbnNpXy1fRGVzcGFjaXRvX2Z0Ll9EYWRkeV9ZYW5rZWVfdXl2cXc5Lm1wMycsXHJcbiAgfSxcclxuXVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpY0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdEprTXVzaWNQbGF5ZXIgYXVkaW9MaXN0cz17eyBhdWRpb0xpc3QyIH19IG1vZGU9e1wiZnVsbFwifS8+LFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NdXNpY0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk11c2ljQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9