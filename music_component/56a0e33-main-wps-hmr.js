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

var audioList1 = [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpY19jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvTXVzaWNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiYXVkaW9MaXN0MSIsIm5hbWUiLCJzaW5nZXIiLCJjb3ZlciIsIm11c2ljU3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcHRpb25zIiwiYXVkaW9MaXN0cyIsImRlZmF1bHRQbGF5SW5kZXgiLCJ0aGVtZSIsImJvdW5kcyIsInF1aWV0VXBkYXRlIiwiY2xlYXJQcmlvckF1ZGlvTGlzdHMiLCJhdXRvUGxheUluaXRMb2FkUGxheUxpc3QiLCJwcmVsb2FkIiwiZ2xhc3NCZyIsInJlbWVtYmVyIiwicmVtb3ZlIiwiZGVmYXVsdFBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJkZWZhdWx0UGxheU1vZGUiLCJtb2RlIiwib25jZSIsImF1dG9QbGF5IiwidG9nZ2xlTW9kZSIsInNob3dNaW5pTW9kZUNvdmVyIiwic2hvd01pbmlQcm9jZXNzQmFyIiwiZHJhZyIsInNlZWtlZCIsInNob3dNZWRpYVNlc3Npb24iLCJzaG93UHJvZ3Jlc3NMb2FkQmFyIiwic2hvd1BsYXkiLCJzaG93UmVsb2FkIiwic2hvd0Rvd25sb2FkIiwic2hvd1BsYXlNb2RlIiwic2hvd1RoZW1lU3dpdGNoIiwic2hvd0x5cmljIiwic2hvd0Rlc3Ryb3kiLCJleHRlbmRzQ29udGVudCIsImRlZmF1bHRWb2x1bWUiLCJwbGF5TW9kZVNob3dUaW1lIiwibG9hZEF1ZGlvRXJyb3JQbGF5TmV4dCIsImF1dG9IaWRkZW5Db3ZlciIsInNwYWNlQmFyIiwibG9jYWxlIiwiTG9jYWxlIiwiZW5fVVMiLCJyZXNwb25zaXZlIiwibW9iaWxlTWVkaWFRdWVyeSIsInZvbHVtZUZhZGUiLCJmYWRlSW4iLCJmYWRlT3V0IiwicmVzdGFydEN1cnJlbnRPblByZXYiLCJzb3J0YWJsZU9wdGlvbnMiLCJvbkF1ZGlvRG93bmxvYWQiLCJhdWRpb0luZm8iLCJjb25zb2xlIiwibG9nIiwib25BdWRpb1BsYXkiLCJvbkF1ZGlvUGF1c2UiLCJvbkF1ZGlvU2Vla2VkIiwib25BdWRpb1ZvbHVtZUNoYW5nZSIsImN1cnJlbnRWb2x1bWUiLCJvbkF1ZGlvRW5kZWQiLCJjdXJyZW50UGxheUlkIiwib25BdWRpb0Fib3J0Iiwib25BdWRpb1Byb2dyZXNzIiwib25BdWRpb1JlbG9hZCIsIm9uQXVkaW9FcnJvciIsImVyck1zZyIsImVycm9yIiwib25BdWRpb0xpc3RzQ2hhbmdlIiwib25BdWRpb1BsYXlUcmFja0NoYW5nZSIsIm9uQXVkaW9MaXN0c1BhbmVsQ2hhbmdlIiwicGFuZWxWaXNpYmxlIiwib25BdWRpb0xpc3RzU29ydEVuZCIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJvbkF1ZGlvTHlyaWNDaGFuZ2UiLCJsaW5lTnVtIiwiY3VycmVudEx5cmljIiwiZ2V0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0QXVkaW9JbnN0YW5jZSIsImF1ZGlvIiwib25CZWZvcmVEZXN0cm95IiwicmVqZWN0Iiwid2luZG93IiwiY29uZmlybSIsIm9uRGVzdHJveWVkIiwib25Db3ZlckNsaWNrIiwiTXVzaWNDb21wb25lbnQiLCJhdWRpb0xpc3QyIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNFQyxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBTSxFQUFFLFVBRlY7QUFHRUMsT0FBSyxFQUNILHFGQUpKO0FBS0VDLFVBQVEsRUFDTjtBQU5KLENBRGlCLEVBU2pCO0FBQ0VILE1BQUksRUFBRSxpQkFEUjtBQUVFQyxRQUFNLEVBQUUsaUJBRlY7QUFHRUMsT0FBSyxFQUNILDRHQUpKO0FBS0VDLFVBQVEs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RUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBclZjLENBQWhCOztJQXlWcUJxQyxjOzs7Ozs7Ozs7Ozs7O1dBQ2pCLGtCQUFTO0FBQ0wsMEJBQ0kscUZBQ0ksMkRBQUMsZ0VBQUQ7QUFBb0Isa0JBQVUsRUFBRTtBQUFFQyxvQkFBVSxFQUFWQTtBQUFGLFNBQWhDO0FBQWdELFlBQUksRUFBRSxNQUF0RDtBQUE4RCx3QkFBZ0IsRUFBRTtBQUFoRixRQURKLE1BREo7QUFLSDs7OztFQVB1Q0MsK0M7OztBQVU1Q0YsY0FBYyxDQUFDRyxZQUFmLEdBQThCLEVBQTlCO0FBRUFILGNBQWMsQ0FBQ0ksU0FBZixHQUEyQjtBQUN2QjtBQUNKO0FBQ0E7QUFDSUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQztBQUpTLENBQTNCLEMiLCJmaWxlIjoiNTZhMGUzMy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0SmtNdXNpY1BsYXllciBmcm9tICdyZWFjdC1qaW5rZS1tdXNpYy1wbGF5ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG5cclxuICovXHJcbmNvbnN0IGF1ZGlvTGlzdDEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0JlZHRpbWUgU3RvcmllcycsXHJcbiAgICBzaW5nZXI6ICdKYXkgQ2hvdScsXHJcbiAgICBjb3ZlcjpcclxuICAgICAgJ2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vYWxpY2svaW1hZ2UvdXBsb2FkL3YxNTAyMzc1OTc4L2JlZHRpbWVfc3Rvcmllc19ieXdnZ3ouanBnJyxcclxuICAgIG11c2ljU3JjOlxyXG4gICAgICAnaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9hbGljay92aWRlby91cGxvYWQvdjE1MDIzNzU2NzQvQmVkdGltZV9TdG9yaWVzLm1wMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRG9yb3N0IE5lbWlzaGFtJyxcclxuICAgIHNpbmdlcjogJ1NpcnZhbiBLaG9zcmF2aScsXHJcbiAgICBjb3ZlcjpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Voc2FuYWhtYWRpL2ltYWdlL3VwbG9hZC92MTU3Mzc1ODc3OC9TaXJ2YW4tS2hvc3JhdmktRG9yb3N0LU5lbWlzaGFtX2dsaWNrcy5qcGcnLFxyXG4gICAgbXVzaWNTcmM6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcclxuICAgICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZWhzYW5haG1hZGkvdmlkZW8vdXBsb2FkL3YxNTczNTUwNzcwL1NpcnZhbi1LaG9zcmF2aS1Eb3Jvc3QtTmVtaXNoYW0tMTI4X2tiOHVycS5tcDMnLFxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Rlc3BhY2l0bycsXHJcbiAgICBzaW5nZXI6ICdMdWlzIEZvbnNpJyxcclxuICAgIGNvdmVyOlxyXG4gICAgICAnaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9hbGljay9pbWFnZS91cGxvYWQvdjE1MDI2ODk3MzEvRGVzcGFjaXRvX3V2b2xocC5qcGcnLFxyXG4gICAgbXVzaWNTcmM6XHJcbiAgICAgICdodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2FsaWNrL3ZpZGVvL3VwbG9hZC92MTUwMjY4OTY4My9MdWlzX0ZvbnNpXy1fRGVzcGFjaXRvX2Z0Ll9EYWRkeV9ZYW5rZWVfdXl2cXc5Lm1wMycsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAvLyBhdWRpbyBsaXN0cyBtb2RlbFxyXG4gIGF1ZGlvTGlzdHM6IGF1ZGlvTGlzdDEsXHJcblxyXG4gIC8vIGRlZmF1bHQgcGxheSBpbmRleCBvZiB0aGUgYXVkaW8gcGxheWVyICBbdHlwZSBgbnVtYmVyYCBkZWZhdWx0IGAwYF1cclxuICBkZWZhdWx0UGxheUluZGV4OiAwLFxyXG5cclxuICAvLyBpZiB5b3Ugd2FudCBkeW5hbWljIGNoYW5nZSBjdXJyZW50IHBsYXkgYXVkaW8geW91IGNhbiBjaGFuZ2UgaXQgW3R5cGUgYG51bWJlcmAgZGVmYXVsdCBgMGBdXHJcbiAgLy8gcGxheUluZGV4OiAwLFxyXG5cclxuICAvLyBjb2xvciBvZiB0aGUgbXVzaWMgcGxheWVyIHRoZW1lICAgIFsgdHlwZTogJ2xpZ2h0JyB8ICdkYXJrJyB8ICdhdXRvJyAgZGVmYXVsdCBgZGFya2AgXVxyXG4gIHRoZW1lOiAnYXV0bycsXHJcblxyXG4gIC8vIFNwZWNpZmllcyBtb3ZlbWVudCBib3VuZGFyaWVzLiBBY2NlcHRlZCB2YWx1ZXM6XHJcbiAgLy8gLSBgcGFyZW50YCByZXN0cmljdHMgbW92ZW1lbnQgd2l0aGluIHRoZSBub2RlJ3Mgb2Zmc2V0UGFyZW50XHJcbiAgLy8gICAgKG5lYXJlc3Qgbm9kZSB3aXRoIHBvc2l0aW9uIHJlbGF0aXZlIG9yIGFic29sdXRlKSwgb3JcclxuICAvLyAtIGEgc2VsZWN0b3IsIHJlc3RyaWN0cyBtb3ZlbWVudCB3aXRoaW4gdGhlIHRhcmdldGVkIG5vZGVcclxuICAvLyAtIEFuIG9iamVjdCB3aXRoIGBsZWZ0LCB0b3AsIHJpZ2h0LCBhbmQgYm90dG9tYCBwcm9wZXJ0aWVzLlxyXG4gIC8vICAgVGhlc2UgaW5kaWNhdGUgaG93IGZhciBpbiBlYWNoIGRpcmVjdGlvbiB0aGUgZHJhZ2dhYmxlXHJcbiAgLy8gICBjYW4gYmUgbW92ZWQuXHJcbiAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vU1RSTUwvcmVhY3QtZHJhZ2dhYmxlI2RyYWdnYWJsZS1hcGlcclxuICBib3VuZHM6ICdib2R5JyxcclxuXHJcbiAgLyoqXHJcbiAgICogRG9uJ3QgaW50ZXJydXB0IGN1cnJlbnQgcGxheWluZyBzdGF0ZSB3aGVuIGF1ZGlvIGxpc3QgdXBkYXRlZFxyXG4gICAqIGF1ZGlvTGlzdHMgZWcuIChBKSBpcyBjdXJyZW50IHBsYXlpbmcuLi5cclxuICAgKiBbQSxCXSA9PiBbQSxDLEJdXHJcbiAgICogW0EsQl0gPT4gW0EsQixDXVxyXG4gICAqXHJcbiAgICogaWYgKEEpIG5vdCBpbiB1cGRhdGVkIGF1ZGlvIGxpc3RzXHJcbiAgICogW0EsQl0gPT4gW0NdXHJcbiAgICogKEMpIGlzIHBsYXlpbmdcclxuICAgKi9cclxuICAvLyBbdHlwZSBgYm9vbGVhbmAsIGRlZmF1bHQgYGZhbHNlYF1cclxuICBxdWlldFVwZGF0ZTogZmFsc2UsXHJcblxyXG4gIC8vIFJlcGxhY2UgYSBuZXcgcGxheWxpc3Qgd2l0aCB0aGUgZmlyc3QgbG9hZGVkIHBsYXlsaXN0XHJcbiAgLy8gaW5zdGVhZCBvZiBhZGRpbmcgaXQgYXQgdGhlIGVuZCBvZiBpdC5cclxuICAvLyBbdHlwZSBgYm9vbGVhbmAsIGRlZmF1bHQgYGZhbHNlYF1cclxuICBjbGVhclByaW9yQXVkaW9MaXN0czogZmFsc2UsXHJcblxyXG4gIC8vIFBsYXkgeW91ciBuZXcgcGxheSBsaXN0IHJpZ2h0IGFmdGVyIHlvdXIgbmV3IHBsYXkgbGlzdCBpcyBsb2FkZWQgdHVybiBmYWxzZS5cclxuICAvLyBbdHlwZSBgYm9vbGVhbmAsIGRlZmF1bHQgYGZhbHNlYF1cclxuICBhdXRvUGxheUluaXRMb2FkUGxheUxpc3Q6IGZhbHNlLFxyXG5cclxuICAvLyBXaGV0aGVyIHRvIGxvYWQgYXVkaW8gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHMuICBbdHlwZSBgQm9vbGVhbiB8IFN0cmluZ2AsIGRlZmF1bHQgYGZhbHNlYF1cclxuICAvLyBcImF1dG98bWV0YWRhdGF8bm9uZVwiIFwidHJ1ZXwgZmFsc2VcIlxyXG4gIHByZWxvYWQ6IGZhbHNlLFxyXG5cclxuICAvLyBXaGV0aGVyIHRoZSBwbGF5ZXIncyBiYWNrZ3JvdW5kIGRpc3BsYXlzIGZyb3N0ZWQgZ2xhc3MgZWZmZWN0ICBbdHlwZSBgQm9vbGVhbmAsIGRlZmF1bHQgYGZhbHNlYF1cclxuICBnbGFzc0JnOiBmYWxzZSxcclxuXHJcbiAgLy8gVGhlIG5leHQgdGltZSB5b3UgYWNjZXNzIHRoZSBwbGF5ZXIsIGRvIHlvdSBrZWVwIHRoZSBsYXN0IHN0YXRlICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgZmFsc2VgXVxyXG4gIHJlbWVtYmVyOiBmYWxzZSxcclxuXHJcbiAgLy8gVGhlIEF1ZGlvIENhbiBiZSBkZWxldGVkICBbdHlwZSBgQm9vbGVhbmAsIGRlZmF1bHQgYHRydWVgXVxyXG4gIHJlbW92ZTogdHJ1ZSxcclxuXHJcbiAgLy8gYXVkaW8gY29udHJvbGxlciBpbml0aWFsIHBvc2l0aW9uICAgIFsgdHlwZSBgT2JqZWN0YCBkZWZhdWx0ICd7dG9wOjAsbGVmdDowfScgXVxyXG4gIGRlZmF1bHRQb3NpdGlvbjoge1xyXG4gICAgcmlnaHQ6IDEwMCxcclxuICAgIGJvdHRvbTogMTIwLFxyXG4gIH0sXHJcblxyXG4gIC8vIGlmIHlvdSB3YW50IGR5bmFtaWMgY2hhbmdlIGN1cnJlbnQgcGxheSBtb2RlIHlvdSBjYW4gY2hhbmdlIGl0XHJcbiAgLy8gW3R5cGVgb3JkZXIgfCBvcmRlckxvb3AgfCBzaW5nbGVMb29wIHwgc2h1ZmZsZVBsYXlgLCBkZWZhdWx0IGBvcmRlcmBdXHJcbiAgLy8gcGxheU1vZGU6ICdvcmRlcicsXHJcbiAgZGVmYXVsdFBsYXlNb2RlOiAnb3JkZXInLFxyXG5cclxuICAvLyBhdWRpbyBtb2RlICAgICAgICBtaW5pIHwgZnVsbCAgICAgICAgICBbdHlwZSBgU3RyaW5nYCAgZGVmYXVsdCBgbWluaWBdXHJcbiAgbW9kZTogJ2Z1bGwnLFxyXG5cclxuICAvKipcclxuICAgKiBbIHR5cGUgYEJvb2xlYW5gIGRlZmF1bHQgJ2ZhbHNlJyBdXHJcbiAgICogVGhlIGRlZmF1bHQgYXVkaW9QbGF5IGhhbmRsZSBmdW5jdGlvbiB3aWxsIGJlIHBsYXllZCBhZ2FpbiBhZnRlciBlYWNoIHBhdXNlLCBJZiB5b3Ugb25seSB3YW50IHRvIHRyaWdnZXIgaXQgb25jZSwgeW91IGNhbiBzZXQgJ3RydWUnXHJcbiAgICovXHJcbiAgb25jZTogZmFsc2UsXHJcblxyXG4gIC8vIFdoZXRoZXIgdGhlIGF1ZGlvIGlzIHBsYXllZCBhZnRlciBsb2FkaW5nIGlzIGNvbXBsZXRlZC4gW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgJ3RydWUnXVxyXG4gIGF1dG9QbGF5OiBmYWxzZSxcclxuXHJcbiAgLy8gV2hldGhlciB5b3UgY2FuIHN3aXRjaCBiZXR3ZWVuIHR3byBtb2RlcywgZnVsbCA9PiBtaW5pICBvciBtaW5pID0+IGZ1bGwgICBbdHlwZSAnQm9vbGVhbicgZGVmYXVsdCAndHJ1ZSddXHJcbiAgdG9nZ2xlTW9kZTogdHJ1ZSxcclxuXHJcbiAgLy8gYXVkaW8gY292ZXIgaXMgc2hvdyBvZiB0aGUgXCJtaW5pXCIgbW9kZSBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCAndHJ1ZSddXHJcbiAgc2hvd01pbmlNb2RlQ292ZXI6IHRydWUsXHJcblxyXG4gIC8vIGF1ZGlvIHBsYXlpbmcgcHJvZ3Jlc3MgaXMgc2hvdyBvZiB0aGUgXCJtaW5pXCIgIG1vZGVcclxuICBzaG93TWluaVByb2Nlc3NCYXI6IGZhbHNlLFxyXG5cclxuICAvLyBhdWRpbyBjb250cm9sbGVyIGlzIGNhbiBiZSBkcmFnIG9mIHRoZSBcIm1pbmlcIiBtb2RlICAgICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgZHJhZzogdHJ1ZSxcclxuXHJcbiAgLy8gZHJhZyB0aGUgYXVkaW8gcHJvZ3Jlc3MgYmFyIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0IGB0cnVlYF1cclxuICBzZWVrZWQ6IHRydWUsXHJcblxyXG4gIC8vIERpc3BsYXkgY2hyb21lIG1lZGlhIHNlc3Npb24uICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgZmFsc2VgXVxyXG4gIHNob3dNZWRpYVNlc3Npb246IHRydWUsXHJcblxyXG4gIC8vIERpc3BsYXlzIHRoZSBhdWRpbyBsb2FkIHByb2dyZXNzIGJhci4gIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0IGB0cnVlYF1cclxuICBzaG93UHJvZ3Jlc3NMb2FkQmFyOiB0cnVlLFxyXG5cclxuICAvLyBwbGF5IGJ1dHRvbiBkaXNwbGF5IG9mIHRoZSBhdWRpbyBwbGF5ZXIgcGFuZWwgICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgc2hvd1BsYXk6IHRydWUsXHJcblxyXG4gIC8vIHJlbG9hZCBidXR0b24gZGlzcGxheSBvZiB0aGUgYXVkaW8gcGxheWVyIHBhbmVsICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIHNob3dSZWxvYWQ6IHRydWUsXHJcblxyXG4gIC8vIGRvd25sb2FkIGJ1dHRvbiBkaXNwbGF5IG9mIHRoZSBhdWRpbyBwbGF5ZXIgcGFuZWwgICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgc2hvd0Rvd25sb2FkOiB0cnVlLFxyXG5cclxuICAvLyBsb29wIGJ1dHRvbiBkaXNwbGF5IG9mIHRoZSBhdWRpbyBwbGF5ZXIgcGFuZWwgICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgc2hvd1BsYXlNb2RlOiB0cnVlLFxyXG5cclxuICAvLyB0aGVtZSB0b2dnbGUgc3dpdGNoICBkaXNwbGF5IG9mIHRoZSBhdWRpbyBwbGF5ZXIgcGFuZWwgICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgc2hvd1RoZW1lU3dpdGNoOiB0cnVlLFxyXG5cclxuICAvLyBseXJpYyBkaXNwbGF5IG9mIHRoZSBhdWRpbyBwbGF5ZXIgcGFuZWwgICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgZmFsc2VgXVxyXG4gIHNob3dMeXJpYzogdHJ1ZSxcclxuXHJcbiAgLy8gZGVzdHJveSBwbGF5ZXIgYnV0dG9uIGRpc3BsYXkgIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgc2hvd0Rlc3Ryb3k6IHRydWUsXHJcblxyXG4gIC8vIEV4dGVuc2libGUgY3VzdG9tIGNvbnRlbnQgICAgICAgW3R5cGUgJ0FycmF5JyBkZWZhdWx0ICctJyBdXHJcbiAgZXh0ZW5kc0NvbnRlbnQ6IG51bGwsXHJcblxyXG4gIC8vIGRlZmF1bHQgdm9sdW1lIG9mIHRoZSBhdWRpbyBwbGF5ZXIgW3R5cGUgYE51bWJlcmAgZGVmYXVsdCBgMWAgcmFuZ2UgYDAtMWBdXHJcbiAgZGVmYXVsdFZvbHVtZTogMSxcclxuXHJcbiAgLy8gcGxheU1vZGVUZXh0IHNob3cgdGltZSBbdHlwZSBgTnVtYmVyKG1zKWAgZGVmYXVsdCBgNzAwYF1cclxuICBwbGF5TW9kZVNob3dUaW1lOiA2MDAsXHJcblxyXG4gIC8vIFdoZXRoZXIgdG8gdHJ5IHBsYXlpbmcgdGhlIG5leHQgYXVkaW8gd2hlbiB0aGUgY3VycmVudCBhdWRpbyBwbGF5YmFjayBmYWlscyBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgbG9hZEF1ZGlvRXJyb3JQbGF5TmV4dDogdHJ1ZSxcclxuXHJcbiAgLy8gQXV0byBoaWRlIHRoZSBjb3ZlciBwaG90byBpZiBubyBjb3ZlciBwaG90byBpcyBhdmFpbGFibGUgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYGZhbHNlYF1cclxuICBhdXRvSGlkZGVuQ292ZXI6IGZhbHNlLFxyXG5cclxuICAvLyBQbGF5IGFuZCBwYXVzZSBhdWRpbyB0aHJvdWdoIGJsYW5rIHNwYWNlIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgc3BhY2VCYXI6IHRydWUsXHJcblxyXG4gIC8vIGludGVybmF0aW9uYWwgW3R5cGUgYGVuX1VTIHwgemhfQ04gfCBPYmplY3RgIGRlZmF1bHQgYGVuX1VTYF1cclxuICBsb2NhbGU6IExvY2FsZS5lbl9VUyxcclxuXHJcbiAgLy8gRW5hYmxlIHJlc3BvbnNpdmUgcGxheWVyLCBhdXRvIHRvZ2dsZSBkZXNrdG9wIGFuZCBtb2JpbGUgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIHJlc3BvbnNpdmU6IHRydWUsXHJcblxyXG4gIC8qKlxyXG4gICAqIEN1c3RvbSBtb2JpbGUgbWVkaWEgcXVlcnkgc3RyaW5nLCBlZyB1c2UgdGhlIG1vYmlsZSB2ZXJzaW9uIFVJIG9uIGlQYWQuXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL01lZGlhX1F1ZXJpZXMvVXNpbmdfbWVkaWFfcXVlcmllc1xyXG4gICAqIFt0eXBlIGBTdHJpbmdgIGRlZmF1bHQgJyhtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpJ11cclxuICAgKi9cclxuICBtb2JpbGVNZWRpYVF1ZXJ5OiAnKG1heC13aWR0aDogMTAyNHB4KScsXHJcblxyXG4gIC8vIEF1ZGlvIHZvbHVtZSB3aXRoIGZhZGUgaW4gYW5kIGZhZGUgb3V0IFt0eXBlIGB7IGZhZGVJbjogbnVtYmVyLCBmYWRlT3V0OiBudW1iZXIgfWAgZGVmYXVsdCBgeyBmYWRlSW46IDAsIGZhZGVPdXQ6IDAgfWBdXHJcbiAgdm9sdW1lRmFkZToge1xyXG4gICAgZmFkZUluOiAxMDAwLFxyXG4gICAgZmFkZU91dDogMTAwMCxcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFJlc3RhcnRzIHRoZSBjdXJyZW50IHRyYWNrIHdoZW4gdHJ5aW5nIHRvIHBsYXkgcHJldmlvdXMgc29uZywgaWYgdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgc29uZyBpcyBtb3JlIHRoYW4gMSBzZWNvbmRcclxuICAgICAgT3RoZXJ3aXNlLCBwbGF5cyB0aGUgcHJldmlvdXMgc29uZyBpbiB0aGUgbGlzdFxyXG4gICAgICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgZmFsc2VgXVxyXG4gICovXHJcbiAgcmVzdGFydEN1cnJlbnRPblByZXY6IGZhbHNlLFxyXG5cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vU29ydGFibGVKUy9Tb3J0YWJsZSNvcHRpb25zXHJcbiAgc29ydGFibGVPcHRpb25zOiB7fSxcclxuXHJcbiAgLy8gTXVzaWMgaXMgZG93bmxvYWRlZCBoYW5kbGVcclxuICBvbkF1ZGlvRG93bmxvYWQoYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gZG93bmxvYWQnLCBhdWRpb0luZm8pXHJcbiAgfSxcclxuXHJcbiAgLy8gYXVkaW8gcGxheSBoYW5kbGVcclxuICBvbkF1ZGlvUGxheShhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBwbGF5aW5nJywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIC8vIGF1ZGlvIHBhdXNlIGhhbmRsZVxyXG4gIG9uQXVkaW9QYXVzZShhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBwYXVzZScsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICAvLyBXaGVuIHRoZSB1c2VyIGhhcyBtb3ZlZC9qdW1wZWQgdG8gYSBuZXcgbG9jYXRpb24gaW4gYXVkaW9cclxuICBvbkF1ZGlvU2Vla2VkKGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1ZGlvIHNlZWtlZCcsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICAvLyBXaGVuIHRoZSB2b2x1bWUgaGFzIGNoYW5nZWQgIG1pbiA9IDAuMCAgbWF4ID0gMS4wXHJcbiAgb25BdWRpb1ZvbHVtZUNoYW5nZShjdXJyZW50Vm9sdW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gdm9sdW1lIGNoYW5nZScsIGN1cnJlbnRWb2x1bWUpXHJcbiAgfSxcclxuXHJcbiAgLy8gVGhlIHNpbmdsZSBzb25nIGlzIGVuZGVkIGhhbmRsZVxyXG4gIG9uQXVkaW9FbmRlZChjdXJyZW50UGxheUlkLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBlbmRlZCcsIGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICAvLyBhdWRpbyBsb2FkIGFib3J0XHJcbiAgb25BdWRpb0Fib3J0KGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1ZGlvIGFib3J0JywgY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIC8vIGF1ZGlvIHBsYXkgcHJvZ3Jlc3MgaGFuZGxlXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgb25BdWRpb1Byb2dyZXNzKGF1ZGlvSW5mbykge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2F1ZGlvIHByb2dyZXNzJywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIC8vIGF1ZGlvIHJlbG9hZCBoYW5kbGVcclxuICBvbkF1ZGlvUmVsb2FkKGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1ZGlvIHJlbG9hZDonLCBhdWRpb0luZm8pXHJcbiAgfSxcclxuXHJcbiAgLy8gYXVkaW8gbG9hZCBmYWlsZWQgZXJyb3IgaGFuZGxlXHJcbiAgb25BdWRpb0Vycm9yKGVyck1zZywgY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdhdWRpbyBlcnJvcicsIGVyck1zZywgY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIC8vIHRoZW1lIGNoYW5nZSBoYW5kbGVcclxuICAvLyBvblRoZW1lQ2hhbmdlKHRoZW1lKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygndGhlbWUgY2hhbmdlOicsIHRoZW1lKVxyXG4gIC8vIH0sXHJcblxyXG4gIG9uQXVkaW9MaXN0c0NoYW5nZShjdXJyZW50UGxheUlkLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBsaXN0cyBjaGFuZ2U6JywgY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIG9uQXVkaW9QbGF5VHJhY2tDaGFuZ2UoY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJ2F1ZGlvIHBsYXkgdHJhY2sgY2hhbmdlOicsXHJcbiAgICAgIGN1cnJlbnRQbGF5SWQsXHJcbiAgICAgIGF1ZGlvTGlzdHMsXHJcbiAgICAgIGF1ZGlvSW5mbyxcclxuICAgIClcclxuICB9LFxyXG5cclxuICAvLyBvblBsYXlNb2RlQ2hhbmdlKHBsYXlNb2RlKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygncGxheSBtb2RlIGNoYW5nZTonLCBwbGF5TW9kZSlcclxuICAvLyB9LFxyXG5cclxuICAvLyBvbk1vZGVDaGFuZ2UobW9kZSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ21vZGUgY2hhbmdlOicsIG1vZGUpXHJcbiAgLy8gfSxcclxuXHJcbiAgb25BdWRpb0xpc3RzUGFuZWxDaGFuZ2UocGFuZWxWaXNpYmxlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gbGlzdHMgcGFuZWwgdmlzaWJsZTonLCBwYW5lbFZpc2libGUpXHJcbiAgfSxcclxuXHJcbiAgb25BdWRpb0xpc3RzU29ydEVuZChvbGRJbmRleCwgbmV3SW5kZXgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBsaXN0cyBzb3J0IGVuZDonLCBvbGRJbmRleCwgbmV3SW5kZXgpXHJcbiAgfSxcclxuXHJcbiAgb25BdWRpb0x5cmljQ2hhbmdlKGxpbmVOdW0sIGN1cnJlbnRMeXJpYykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1ZGlvIGx5cmljIGNoYW5nZTonLCBsaW5lTnVtLCBjdXJyZW50THlyaWMpXHJcbiAgfSxcclxuXHJcbiAgLy8gY3VzdG9tIG11c2ljIHBsYXllciByb290IG5vZGVcclxuICBnZXRDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBnZXQgb3JpZ2luIGF1ZGlvIGVsZW1lbnQgaW5zdGFuY2UgLCB5b3UgY2FuIHVzZSBpdCBkbyBldmVyeXRoaW5nXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBhdWRpby5wbGF5YmFja1JhdGUgPSAxLjUgIC8vIHNldCBwbGF5IGJhY2sgcmF0ZVxyXG4gICAqIGF1ZGlvLmNyb3NzT3JpZ2luID0gJ3h4eCcgLy8gY29uZmlnIGNyb3NzIG9yaWdpblxyXG4gICAqL1xyXG4gIGdldEF1ZGlvSW5zdGFuY2UoYXVkaW8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBpbnN0YW5jZScsIGF1ZGlvKVxyXG4gIH0sXHJcblxyXG4gIG9uQmVmb3JlRGVzdHJveShjdXJyZW50UGxheUlkLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkJlZm9yZURlc3Ryb3kgY3VycmVudFBsYXlJZDogJywgY3VycmVudFBsYXlJZClcclxuICAgIGNvbnNvbGUubG9nKCdvbkJlZm9yZURlc3Ryb3kgYXVkaW9MaXN0czogJywgYXVkaW9MaXN0cylcclxuICAgIGNvbnNvbGUubG9nKCdvbkJlZm9yZURlc3Ryb3kgYXVkaW9JbmZvOiAnLCBhdWRpb0luZm8pXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAvLyB5b3VyIGN1c3RvbSB2YWxpZGF0ZVxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IGNvbmZpcm0gZGVzdHJveSB0aGUgcGxheWVyPycpKSB7XHJcbiAgICAgICAgLy8gaWYgcmVzb2x2ZSwgcGxheWVyIGRlc3Ryb3llZFxyXG4gICAgICAgIHJlc29sdmUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGlmIHJlamVjdCwgc2tpcC5cclxuICAgICAgICByZWplY3QoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uRGVzdHJveWVkKGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5sb2coJ29uRGVzdHJveWVkOicsIGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICBvbkNvdmVyQ2xpY2sobW9kZSwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25Db3ZlckNsaWNrOiAnLCBtb2RlLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pXHJcbiAgfSxcclxuXHJcbiAgLy8gY3VzdG9tIGF1ZGlvIHRpdGxlXHJcbiAgLy8gcmVuZGVyQXVkaW9UaXRsZShhdWRpb0luZm8pIHtcclxuICAvLyAgIHJldHVybiA8YSBocmVmPVwiI1wiPnthdWRpb0luZm8ubmFtZX08L2E+XHJcbiAgLy8gfSxcclxuXHJcbiAgLy8gb25QbGF5SW5kZXhDaGFuZ2UgKHBsYXlJbmRleCkge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ29uUGxheUluZGV4Q2hhbmdlOiAnLCBwbGF5SW5kZXgpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdHJhbnNmb3JtIGF1ZGlvIGluZm8gbGlrZSByZXR1cm4gYSBQcm9taXNlXHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5cclxuICAgKiAge1xyXG4gICAqICAgIHNyYzogJ3h4eCcsXHJcbiAgICogICAgZmlsZW5hbWU6ICd4eHgnLFxyXG4gICAqICAgIG1pbWVUeXBlOiAneHh4J1xyXG4gICAqICB9XHJcbiAgICovXHJcbiAgLy8gb25CZWZvcmVBdWRpb0Rvd25sb2FkKCkge1xyXG4gIC8vICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XHJcbiAgLy8gICAgIHNyYzogJzEubXAzJyxcclxuICAvLyAgIH0pXHJcbiAgLy8gfSxcclxuXHJcbiAgLyoqXHJcbiAgICogY3VzdG9tZXIgZG93bmxvYWQgaGFuZGxlclxyXG4gICAqIGVnLiBhIGxpbmsgLCBvciBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9maWxlLXNhdmVyXHJcbiAgICogQHBhcmFtIHsqfSBkb3dubG9hZEluZm9cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqXHJcbiAgICAgICBjdXN0b21Eb3dubG9hZGVyKGRvd25sb2FkSW5mbykge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICBsaW5rLmhyZWYgPSBkb3dubG9hZEluZm8uc3JjXHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9IGRvd25sb2FkSW5mby5maWxlbmFtZSB8fCAndGVzdCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXHJcbiAgICAgICAgbGluay5jbGljaygpXHJcbiAgICAgIH0sXHJcbiAgICovXHJcbiAgLy8gY3VzdG9tRG93bmxvYWRlcihkb3dubG9hZEluZm8pIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGRvd25sb2FkSW5mby5zcmMpXHJcbiAgLy8gICBjb25zb2xlLmxvZyhkb3dubG9hZEluZm8uZmlsZW5hbWUpXHJcbiAgLy8gICBjb25zb2xlLmxvZyhkb3dubG9hZEluZm8ubWltZVR5cGUpXHJcbiAgLy8gfSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2ljQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0SmtNdXNpY1BsYXllciBhdWRpb0xpc3RzPXt7IGF1ZGlvTGlzdDIgfX0gbW9kZT17XCJmdWxsXCJ9IGRlZmF1bHRQbGF5SW5kZXg9ezB9Lz4sXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk11c2ljQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuTXVzaWNDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=