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
/* harmony import */ var _gnawa_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gnawa.mp3 */ "./src/lib/components/gnawa.mp3");
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
  musicSrc: _gnawa_mp3__WEBPACK_IMPORTED_MODULE_3__["default"]
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
  // locale: Locale.en_US,
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_jinke_music_player__WEBPACK_IMPORTED_MODULE_1__["default"], options), ",");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpY19jb21wb25lbnQvLi9zcmMvbGliL2NvbXBvbmVudHMvTXVzaWNDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiYXVkaW9MaXN0MSIsIm5hbWUiLCJzaW5nZXIiLCJjb3ZlciIsIm11c2ljU3JjIiwic291bmRGaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcHRpb25zIiwiYXVkaW9MaXN0cyIsImRlZmF1bHRQbGF5SW5kZXgiLCJ0aGVtZSIsImJvdW5kcyIsInF1aWV0VXBkYXRlIiwiY2xlYXJQcmlvckF1ZGlvTGlzdHMiLCJhdXRvUGxheUluaXRMb2FkUGxheUxpc3QiLCJwcmVsb2FkIiwiZ2xhc3NCZyIsInJlbWVtYmVyIiwicmVtb3ZlIiwiZGVmYXVsdFBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJkZWZhdWx0UGxheU1vZGUiLCJtb2RlIiwib25jZSIsImF1dG9QbGF5IiwidG9nZ2xlTW9kZSIsInNob3dNaW5pTW9kZUNvdmVyIiwic2hvd01pbmlQcm9jZXNzQmFyIiwiZHJhZyIsInNlZWtlZCIsInNob3dNZWRpYVNlc3Npb24iLCJzaG93UHJvZ3Jlc3NMb2FkQmFyIiwic2hvd1BsYXkiLCJzaG93UmVsb2FkIiwic2hvd0Rvd25sb2FkIiwic2hvd1BsYXlNb2RlIiwic2hvd1RoZW1lU3dpdGNoIiwic2hvd0x5cmljIiwic2hvd0Rlc3Ryb3kiLCJleHRlbmRzQ29udGVudCIsImRlZmF1bHRWb2x1bWUiLCJwbGF5TW9kZVNob3dUaW1lIiwibG9hZEF1ZGlvRXJyb3JQbGF5TmV4dCIsImF1dG9IaWRkZW5Db3ZlciIsInNwYWNlQmFyIiwicmVzcG9uc2l2ZSIsIm1vYmlsZU1lZGlhUXVlcnkiLCJ2b2x1bWVGYWRlIiwiZmFkZUluIiwiZmFkZU91dCIsInJlc3RhcnRDdXJyZW50T25QcmV2Iiwic29ydGFibGVPcHRpb25zIiwib25BdWRpb0Rvd25sb2FkIiwiYXVkaW9JbmZvIiwiY29uc29sZSIsImxvZyIsIm9uQXVkaW9QbGF5Iiwib25BdWRpb1BhdXNlIiwib25BdWRpb1NlZWtlZCIsIm9uQXVkaW9Wb2x1bWVDaGFuZ2UiLCJjdXJyZW50Vm9sdW1lIiwib25BdWRpb0VuZGVkIiwiY3VycmVudFBsYXlJZCIsIm9uQXVkaW9BYm9ydCIsIm9uQXVkaW9Qcm9ncmVzcyIsIm9uQXVkaW9SZWxvYWQiLCJvbkF1ZGlvRXJyb3IiLCJlcnJNc2ciLCJlcnJvciIsIm9uQXVkaW9MaXN0c0NoYW5nZSIsIm9uQXVkaW9QbGF5VHJhY2tDaGFuZ2UiLCJvbkF1ZGlvTGlzdHNQYW5lbENoYW5nZSIsInBhbmVsVmlzaWJsZSIsIm9uQXVkaW9MaXN0c1NvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4Iiwib25BdWRpb0x5cmljQ2hhbmdlIiwibGluZU51bSIsImN1cnJlbnRMeXJpYyIsImdldENvbnRhaW5lciIsImRvY3VtZW50IiwiYm9keSIsImdldEF1ZGlvSW5zdGFuY2UiLCJhdWRpbyIsIm9uQmVmb3JlRGVzdHJveSIsInJlamVjdCIsIndpbmRvdyIsImNvbmZpcm0iLCJvbkRlc3Ryb3llZCIsIm9uQ292ZXJDbGljayIsIk11c2ljQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNFQyxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBTSxFQUFFLFVBRlY7QUFHRUMsT0FBSyxFQUNILHFGQUpKO0FBS0VDLFVBQVEsRUFDTkMsa0RBQVNBO0FBTmIsQ0FEaUIsRUFTakI7QUFDRUosTUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQU0sRUFBRSxpQkFGVjtBQUdFQyxPQUFLLEVBQ0gsNEdBSko7QUFLRUMsVUFBUSxFQUFFLG9CQUFNO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyVmMsQ0FBaEI7O0lBeVZxQnFDLGM7Ozs7Ozs7Ozs7Ozs7V0FDakIsa0JBQVM7QUFDTCwwQkFDSSxxRkFDSSwyREFBQyxnRUFBRCxFQUF3QnBGLE9BQXhCLENBREosTUFESjtBQUtIOzs7O0VBUHVDcUYsK0M7OztBQVU1Q0QsY0FBYyxDQUFDRSxZQUFmLEdBQThCLEVBQTlCO0FBRUFGLGNBQWMsQ0FBQ0csU0FBZixHQUEyQjtBQUN2QjtBQUNKO0FBQ0E7QUFDSUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQztBQUpTLENBQTNCLEMiLCJmaWxlIjoiMmMyNWI0ZS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0SmtNdXNpY1BsYXllciBmcm9tICdyZWFjdC1qaW5rZS1tdXNpYy1wbGF5ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc291bmRGaWxlIGZyb20gJy4vZ25hd2EubXAzJztcclxuXHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuXHJcbiAqL1xyXG5jb25zdCBhdWRpb0xpc3QxID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdCZWR0aW1lIFN0b3JpZXMnLFxyXG4gICAgc2luZ2VyOiAnSmF5IENob3UnLFxyXG4gICAgY292ZXI6XHJcbiAgICAgICdodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2FsaWNrL2ltYWdlL3VwbG9hZC92MTUwMjM3NTk3OC9iZWR0aW1lX3N0b3JpZXNfYnl3Z2d6LmpwZycsXHJcbiAgICBtdXNpY1NyYzpcclxuICAgICAgc291bmRGaWxlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Rvcm9zdCBOZW1pc2hhbScsXHJcbiAgICBzaW5nZXI6ICdTaXJ2YW4gS2hvc3JhdmknLFxyXG4gICAgY292ZXI6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9laHNhbmFobWFkaS9pbWFnZS91cGxvYWQvdjE1NzM3NTg3NzgvU2lydmFuLUtob3NyYXZpLURvcm9zdC1OZW1pc2hhbV9nbGlja3MuanBnJyxcclxuICAgIG11c2ljU3JjOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXHJcbiAgICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Voc2FuYWhtYWRpL3ZpZGVvL3VwbG9hZC92MTU3MzU1MDc3MC9TaXJ2YW4tS2hvc3JhdmktRG9yb3N0LU5lbWlzaGFtLTEyOF9rYjh1cnEubXAzJyxcclxuICAgICAgKVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEZXNwYWNpdG8nLFxyXG4gICAgc2luZ2VyOiAnTHVpcyBGb25zaScsXHJcbiAgICBjb3ZlcjpcclxuICAgICAgJ2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vYWxpY2svaW1hZ2UvdXBsb2FkL3YxNTAyNjg5NzMxL0Rlc3BhY2l0b191dm9saHAuanBnJyxcclxuICAgIG11c2ljU3JjOlxyXG4gICAgICAnaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9hbGljay92aWRlby91cGxvYWQvdjE1MDI2ODk2ODMvTHVpc19Gb25zaV8tX0Rlc3BhY2l0b19mdC5fRGFkZHlfWWFua2VlX3V5dnF3OS5tcDMnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgLy8gYXVkaW8gbGlzdHMgbW9kZWxcclxuICBhdWRpb0xpc3RzOiBhdWRpb0xpc3QxLFxyXG5cclxuICAvLyBkZWZhdWx0IHBsYXkgaW5kZXggb2YgdGhlIGF1ZGlvIHBsYXllciAgW3R5cGUgYG51bWJlcmAgZGVmYXVsdCBgMGBdXHJcbiAgZGVmYXVsdFBsYXlJbmRleDogMCxcclxuXHJcbiAgLy8gaWYgeW91IHdhbnQgZHluYW1pYyBjaGFuZ2UgY3VycmVudCBwbGF5IGF1ZGlvIHlvdSBjYW4gY2hhbmdlIGl0IFt0eXBlIGBudW1iZXJgIGRlZmF1bHQgYDBgXVxyXG4gIC8vIHBsYXlJbmRleDogMCxcclxuXHJcbiAgLy8gY29sb3Igb2YgdGhlIG11c2ljIHBsYXllciB0aGVtZSAgICBbIHR5cGU6ICdsaWdodCcgfCAnZGFyaycgfCAnYXV0bycgIGRlZmF1bHQgYGRhcmtgIF1cclxuICB0aGVtZTogJ2F1dG8nLFxyXG5cclxuICAvLyBTcGVjaWZpZXMgbW92ZW1lbnQgYm91bmRhcmllcy4gQWNjZXB0ZWQgdmFsdWVzOlxyXG4gIC8vIC0gYHBhcmVudGAgcmVzdHJpY3RzIG1vdmVtZW50IHdpdGhpbiB0aGUgbm9kZSdzIG9mZnNldFBhcmVudFxyXG4gIC8vICAgIChuZWFyZXN0IG5vZGUgd2l0aCBwb3NpdGlvbiByZWxhdGl2ZSBvciBhYnNvbHV0ZSksIG9yXHJcbiAgLy8gLSBhIHNlbGVjdG9yLCByZXN0cmljdHMgbW92ZW1lbnQgd2l0aGluIHRoZSB0YXJnZXRlZCBub2RlXHJcbiAgLy8gLSBBbiBvYmplY3Qgd2l0aCBgbGVmdCwgdG9wLCByaWdodCwgYW5kIGJvdHRvbWAgcHJvcGVydGllcy5cclxuICAvLyAgIFRoZXNlIGluZGljYXRlIGhvdyBmYXIgaW4gZWFjaCBkaXJlY3Rpb24gdGhlIGRyYWdnYWJsZVxyXG4gIC8vICAgY2FuIGJlIG1vdmVkLlxyXG4gIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL1NUUk1ML3JlYWN0LWRyYWdnYWJsZSNkcmFnZ2FibGUtYXBpXHJcbiAgYm91bmRzOiAnYm9keScsXHJcblxyXG4gIC8qKlxyXG4gICAqIERvbid0IGludGVycnVwdCBjdXJyZW50IHBsYXlpbmcgc3RhdGUgd2hlbiBhdWRpbyBsaXN0IHVwZGF0ZWRcclxuICAgKiBhdWRpb0xpc3RzIGVnLiAoQSkgaXMgY3VycmVudCBwbGF5aW5nLi4uXHJcbiAgICogW0EsQl0gPT4gW0EsQyxCXVxyXG4gICAqIFtBLEJdID0+IFtBLEIsQ11cclxuICAgKlxyXG4gICAqIGlmIChBKSBub3QgaW4gdXBkYXRlZCBhdWRpbyBsaXN0c1xyXG4gICAqIFtBLEJdID0+IFtDXVxyXG4gICAqIChDKSBpcyBwbGF5aW5nXHJcbiAgICovXHJcbiAgLy8gW3R5cGUgYGJvb2xlYW5gLCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgcXVpZXRVcGRhdGU6IGZhbHNlLFxyXG5cclxuICAvLyBSZXBsYWNlIGEgbmV3IHBsYXlsaXN0IHdpdGggdGhlIGZpcnN0IGxvYWRlZCBwbGF5bGlzdFxyXG4gIC8vIGluc3RlYWQgb2YgYWRkaW5nIGl0IGF0IHRoZSBlbmQgb2YgaXQuXHJcbiAgLy8gW3R5cGUgYGJvb2xlYW5gLCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgY2xlYXJQcmlvckF1ZGlvTGlzdHM6IGZhbHNlLFxyXG5cclxuICAvLyBQbGF5IHlvdXIgbmV3IHBsYXkgbGlzdCByaWdodCBhZnRlciB5b3VyIG5ldyBwbGF5IGxpc3QgaXMgbG9hZGVkIHR1cm4gZmFsc2UuXHJcbiAgLy8gW3R5cGUgYGJvb2xlYW5gLCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgYXV0b1BsYXlJbml0TG9hZFBsYXlMaXN0OiBmYWxzZSxcclxuXHJcbiAgLy8gV2hldGhlciB0byBsb2FkIGF1ZGlvIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBwYWdlIGxvYWRzLiAgW3R5cGUgYEJvb2xlYW4gfCBTdHJpbmdgLCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgLy8gXCJhdXRvfG1ldGFkYXRhfG5vbmVcIiBcInRydWV8IGZhbHNlXCJcclxuICBwcmVsb2FkOiBmYWxzZSxcclxuXHJcbiAgLy8gV2hldGhlciB0aGUgcGxheWVyJ3MgYmFja2dyb3VuZCBkaXNwbGF5cyBmcm9zdGVkIGdsYXNzIGVmZmVjdCAgW3R5cGUgYEJvb2xlYW5gLCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgZ2xhc3NCZzogZmFsc2UsXHJcblxyXG4gIC8vIFRoZSBuZXh0IHRpbWUgeW91IGFjY2VzcyB0aGUgcGxheWVyLCBkbyB5b3Uga2VlcCB0aGUgbGFzdCBzdGF0ZSAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYGZhbHNlYF1cclxuICByZW1lbWJlcjogZmFsc2UsXHJcblxyXG4gIC8vIFRoZSBBdWRpbyBDYW4gYmUgZGVsZXRlZCAgW3R5cGUgYEJvb2xlYW5gLCBkZWZhdWx0IGB0cnVlYF1cclxuICByZW1vdmU6IHRydWUsXHJcblxyXG4gIC8vIGF1ZGlvIGNvbnRyb2xsZXIgaW5pdGlhbCBwb3NpdGlvbiAgICBbIHR5cGUgYE9iamVjdGAgZGVmYXVsdCAne3RvcDowLGxlZnQ6MH0nIF1cclxuICBkZWZhdWx0UG9zaXRpb246IHtcclxuICAgIHJpZ2h0OiAxMDAsXHJcbiAgICBib3R0b206IDEyMCxcclxuICB9LFxyXG5cclxuICAvLyBpZiB5b3Ugd2FudCBkeW5hbWljIGNoYW5nZSBjdXJyZW50IHBsYXkgbW9kZSB5b3UgY2FuIGNoYW5nZSBpdFxyXG4gIC8vIFt0eXBlYG9yZGVyIHwgb3JkZXJMb29wIHwgc2luZ2xlTG9vcCB8IHNodWZmbGVQbGF5YCwgZGVmYXVsdCBgb3JkZXJgXVxyXG4gIC8vIHBsYXlNb2RlOiAnb3JkZXInLFxyXG4gIGRlZmF1bHRQbGF5TW9kZTogJ29yZGVyJyxcclxuXHJcbiAgLy8gYXVkaW8gbW9kZSAgICAgICAgbWluaSB8IGZ1bGwgICAgICAgICAgW3R5cGUgYFN0cmluZ2AgIGRlZmF1bHQgYG1pbmlgXVxyXG4gIG1vZGU6ICdmdWxsJyxcclxuXHJcbiAgLyoqXHJcbiAgICogWyB0eXBlIGBCb29sZWFuYCBkZWZhdWx0ICdmYWxzZScgXVxyXG4gICAqIFRoZSBkZWZhdWx0IGF1ZGlvUGxheSBoYW5kbGUgZnVuY3Rpb24gd2lsbCBiZSBwbGF5ZWQgYWdhaW4gYWZ0ZXIgZWFjaCBwYXVzZSwgSWYgeW91IG9ubHkgd2FudCB0byB0cmlnZ2VyIGl0IG9uY2UsIHlvdSBjYW4gc2V0ICd0cnVlJ1xyXG4gICAqL1xyXG4gIG9uY2U6IGZhbHNlLFxyXG5cclxuICAvLyBXaGV0aGVyIHRoZSBhdWRpbyBpcyBwbGF5ZWQgYWZ0ZXIgbG9hZGluZyBpcyBjb21wbGV0ZWQuIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0ICd0cnVlJ11cclxuICBhdXRvUGxheTogZmFsc2UsXHJcblxyXG4gIC8vIFdoZXRoZXIgeW91IGNhbiBzd2l0Y2ggYmV0d2VlbiB0d28gbW9kZXMsIGZ1bGwgPT4gbWluaSAgb3IgbWluaSA9PiBmdWxsICAgW3R5cGUgJ0Jvb2xlYW4nIGRlZmF1bHQgJ3RydWUnXVxyXG4gIHRvZ2dsZU1vZGU6IHRydWUsXHJcblxyXG4gIC8vIGF1ZGlvIGNvdmVyIGlzIHNob3cgb2YgdGhlIFwibWluaVwiIG1vZGUgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgJ3RydWUnXVxyXG4gIHNob3dNaW5pTW9kZUNvdmVyOiB0cnVlLFxyXG5cclxuICAvLyBhdWRpbyBwbGF5aW5nIHByb2dyZXNzIGlzIHNob3cgb2YgdGhlIFwibWluaVwiICBtb2RlXHJcbiAgc2hvd01pbmlQcm9jZXNzQmFyOiBmYWxzZSxcclxuXHJcbiAgLy8gYXVkaW8gY29udHJvbGxlciBpcyBjYW4gYmUgZHJhZyBvZiB0aGUgXCJtaW5pXCIgbW9kZSAgICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIGRyYWc6IHRydWUsXHJcblxyXG4gIC8vIGRyYWcgdGhlIGF1ZGlvIHByb2dyZXNzIGJhciBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgc2Vla2VkOiB0cnVlLFxyXG5cclxuICAvLyBEaXNwbGF5IGNocm9tZSBtZWRpYSBzZXNzaW9uLiAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYGZhbHNlYF1cclxuICBzaG93TWVkaWFTZXNzaW9uOiB0cnVlLFxyXG5cclxuICAvLyBEaXNwbGF5cyB0aGUgYXVkaW8gbG9hZCBwcm9ncmVzcyBiYXIuICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgdHJ1ZWBdXHJcbiAgc2hvd1Byb2dyZXNzTG9hZEJhcjogdHJ1ZSxcclxuXHJcbiAgLy8gcGxheSBidXR0b24gZGlzcGxheSBvZiB0aGUgYXVkaW8gcGxheWVyIHBhbmVsICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIHNob3dQbGF5OiB0cnVlLFxyXG5cclxuICAvLyByZWxvYWQgYnV0dG9uIGRpc3BsYXkgb2YgdGhlIGF1ZGlvIHBsYXllciBwYW5lbCAgIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0IGB0cnVlYF1cclxuICBzaG93UmVsb2FkOiB0cnVlLFxyXG5cclxuICAvLyBkb3dubG9hZCBidXR0b24gZGlzcGxheSBvZiB0aGUgYXVkaW8gcGxheWVyIHBhbmVsICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIHNob3dEb3dubG9hZDogdHJ1ZSxcclxuXHJcbiAgLy8gbG9vcCBidXR0b24gZGlzcGxheSBvZiB0aGUgYXVkaW8gcGxheWVyIHBhbmVsICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIHNob3dQbGF5TW9kZTogdHJ1ZSxcclxuXHJcbiAgLy8gdGhlbWUgdG9nZ2xlIHN3aXRjaCAgZGlzcGxheSBvZiB0aGUgYXVkaW8gcGxheWVyIHBhbmVsICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIHNob3dUaGVtZVN3aXRjaDogdHJ1ZSxcclxuXHJcbiAgLy8gbHlyaWMgZGlzcGxheSBvZiB0aGUgYXVkaW8gcGxheWVyIHBhbmVsICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYGZhbHNlYF1cclxuICBzaG93THlyaWM6IHRydWUsXHJcblxyXG4gIC8vIGRlc3Ryb3kgcGxheWVyIGJ1dHRvbiBkaXNwbGF5ICBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgZmFsc2VgXVxyXG4gIHNob3dEZXN0cm95OiB0cnVlLFxyXG5cclxuICAvLyBFeHRlbnNpYmxlIGN1c3RvbSBjb250ZW50ICAgICAgIFt0eXBlICdBcnJheScgZGVmYXVsdCAnLScgXVxyXG4gIGV4dGVuZHNDb250ZW50OiBudWxsLFxyXG5cclxuICAvLyBkZWZhdWx0IHZvbHVtZSBvZiB0aGUgYXVkaW8gcGxheWVyIFt0eXBlIGBOdW1iZXJgIGRlZmF1bHQgYDFgIHJhbmdlIGAwLTFgXVxyXG4gIGRlZmF1bHRWb2x1bWU6IDEsXHJcblxyXG4gIC8vIHBsYXlNb2RlVGV4dCBzaG93IHRpbWUgW3R5cGUgYE51bWJlcihtcylgIGRlZmF1bHQgYDcwMGBdXHJcbiAgcGxheU1vZGVTaG93VGltZTogNjAwLFxyXG5cclxuICAvLyBXaGV0aGVyIHRvIHRyeSBwbGF5aW5nIHRoZSBuZXh0IGF1ZGlvIHdoZW4gdGhlIGN1cnJlbnQgYXVkaW8gcGxheWJhY2sgZmFpbHMgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYHRydWVgXVxyXG4gIGxvYWRBdWRpb0Vycm9yUGxheU5leHQ6IHRydWUsXHJcblxyXG4gIC8vIEF1dG8gaGlkZSB0aGUgY292ZXIgcGhvdG8gaWYgbm8gY292ZXIgcGhvdG8gaXMgYXZhaWxhYmxlIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0IGBmYWxzZWBdXHJcbiAgYXV0b0hpZGRlbkNvdmVyOiBmYWxzZSxcclxuXHJcbiAgLy8gUGxheSBhbmQgcGF1c2UgYXVkaW8gdGhyb3VnaCBibGFuayBzcGFjZSBbdHlwZSBgQm9vbGVhbmAgZGVmYXVsdCBgZmFsc2VgXVxyXG4gIHNwYWNlQmFyOiB0cnVlLFxyXG5cclxuICAvLyBpbnRlcm5hdGlvbmFsIFt0eXBlIGBlbl9VUyB8IHpoX0NOIHwgT2JqZWN0YCBkZWZhdWx0IGBlbl9VU2BdXHJcbiAgLy8gbG9jYWxlOiBMb2NhbGUuZW5fVVMsXHJcblxyXG4gIC8vIEVuYWJsZSByZXNwb25zaXZlIHBsYXllciwgYXV0byB0b2dnbGUgZGVza3RvcCBhbmQgbW9iaWxlIFt0eXBlIGBCb29sZWFuYCBkZWZhdWx0IGB0cnVlYF1cclxuICByZXNwb25zaXZlOiB0cnVlLFxyXG5cclxuICAvKipcclxuICAgKiBDdXN0b20gbW9iaWxlIG1lZGlhIHF1ZXJ5IHN0cmluZywgZWcgdXNlIHRoZSBtb2JpbGUgdmVyc2lvbiBVSSBvbiBpUGFkLlxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9NZWRpYV9RdWVyaWVzL1VzaW5nX21lZGlhX3F1ZXJpZXNcclxuICAgKiBbdHlwZSBgU3RyaW5nYCBkZWZhdWx0ICcobWF4LXdpZHRoOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSddXHJcbiAgICovXHJcbiAgbW9iaWxlTWVkaWFRdWVyeTogJyhtYXgtd2lkdGg6IDEwMjRweCknLFxyXG5cclxuICAvLyBBdWRpbyB2b2x1bWUgd2l0aCBmYWRlIGluIGFuZCBmYWRlIG91dCBbdHlwZSBgeyBmYWRlSW46IG51bWJlciwgZmFkZU91dDogbnVtYmVyIH1gIGRlZmF1bHQgYHsgZmFkZUluOiAwLCBmYWRlT3V0OiAwIH1gXVxyXG4gIHZvbHVtZUZhZGU6IHtcclxuICAgIGZhZGVJbjogMTAwMCxcclxuICAgIGZhZGVPdXQ6IDEwMDAsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBSZXN0YXJ0cyB0aGUgY3VycmVudCB0cmFjayB3aGVuIHRyeWluZyB0byBwbGF5IHByZXZpb3VzIHNvbmcsIGlmIHRoZSBjdXJyZW50IHRpbWUgb2YgdGhlIHNvbmcgaXMgbW9yZSB0aGFuIDEgc2Vjb25kXHJcbiAgICAgIE90aGVyd2lzZSwgcGxheXMgdGhlIHByZXZpb3VzIHNvbmcgaW4gdGhlIGxpc3RcclxuICAgICAgW3R5cGUgYEJvb2xlYW5gIGRlZmF1bHQgYGZhbHNlYF1cclxuICAqL1xyXG4gIHJlc3RhcnRDdXJyZW50T25QcmV2OiBmYWxzZSxcclxuXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1NvcnRhYmxlSlMvU29ydGFibGUjb3B0aW9uc1xyXG4gIHNvcnRhYmxlT3B0aW9uczoge30sXHJcblxyXG4gIC8vIE11c2ljIGlzIGRvd25sb2FkZWQgaGFuZGxlXHJcbiAgb25BdWRpb0Rvd25sb2FkKGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5sb2coJ2F1ZGlvIGRvd25sb2FkJywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIC8vIGF1ZGlvIHBsYXkgaGFuZGxlXHJcbiAgb25BdWRpb1BsYXkoYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gcGxheWluZycsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICAvLyBhdWRpbyBwYXVzZSBoYW5kbGVcclxuICBvbkF1ZGlvUGF1c2UoYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gcGF1c2UnLCBhdWRpb0luZm8pXHJcbiAgfSxcclxuXHJcbiAgLy8gV2hlbiB0aGUgdXNlciBoYXMgbW92ZWQvanVtcGVkIHRvIGEgbmV3IGxvY2F0aW9uIGluIGF1ZGlvXHJcbiAgb25BdWRpb1NlZWtlZChhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBzZWVrZWQnLCBhdWRpb0luZm8pXHJcbiAgfSxcclxuXHJcbiAgLy8gV2hlbiB0aGUgdm9sdW1lIGhhcyBjaGFuZ2VkICBtaW4gPSAwLjAgIG1heCA9IDEuMFxyXG4gIG9uQXVkaW9Wb2x1bWVDaGFuZ2UoY3VycmVudFZvbHVtZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2F1ZGlvIHZvbHVtZSBjaGFuZ2UnLCBjdXJyZW50Vm9sdW1lKVxyXG4gIH0sXHJcblxyXG4gIC8vIFRoZSBzaW5nbGUgc29uZyBpcyBlbmRlZCBoYW5kbGVcclxuICBvbkF1ZGlvRW5kZWQoY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gZW5kZWQnLCBjdXJyZW50UGxheUlkLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pXHJcbiAgfSxcclxuXHJcbiAgLy8gYXVkaW8gbG9hZCBhYm9ydFxyXG4gIG9uQXVkaW9BYm9ydChjdXJyZW50UGxheUlkLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBhYm9ydCcsIGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICAvLyBhdWRpbyBwbGF5IHByb2dyZXNzIGhhbmRsZVxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gIG9uQXVkaW9Qcm9ncmVzcyhhdWRpb0luZm8pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdWRpbyBwcm9ncmVzcycsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICAvLyBhdWRpbyByZWxvYWQgaGFuZGxlXHJcbiAgb25BdWRpb1JlbG9hZChhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyByZWxvYWQ6JywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIC8vIGF1ZGlvIGxvYWQgZmFpbGVkIGVycm9yIGhhbmRsZVxyXG4gIG9uQXVkaW9FcnJvcihlcnJNc2csIGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5lcnJvcignYXVkaW8gZXJyb3InLCBlcnJNc2csIGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICAvLyB0aGVtZSBjaGFuZ2UgaGFuZGxlXHJcbiAgLy8gb25UaGVtZUNoYW5nZSh0aGVtZSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ3RoZW1lIGNoYW5nZTonLCB0aGVtZSlcclxuICAvLyB9LFxyXG5cclxuICBvbkF1ZGlvTGlzdHNDaGFuZ2UoY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gbGlzdHMgY2hhbmdlOicsIGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbylcclxuICB9LFxyXG5cclxuICBvbkF1ZGlvUGxheVRyYWNrQ2hhbmdlKGN1cnJlbnRQbGF5SWQsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICdhdWRpbyBwbGF5IHRyYWNrIGNoYW5nZTonLFxyXG4gICAgICBjdXJyZW50UGxheUlkLFxyXG4gICAgICBhdWRpb0xpc3RzLFxyXG4gICAgICBhdWRpb0luZm8sXHJcbiAgICApXHJcbiAgfSxcclxuXHJcbiAgLy8gb25QbGF5TW9kZUNoYW5nZShwbGF5TW9kZSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ3BsYXkgbW9kZSBjaGFuZ2U6JywgcGxheU1vZGUpXHJcbiAgLy8gfSxcclxuXHJcbiAgLy8gb25Nb2RlQ2hhbmdlKG1vZGUpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdtb2RlIGNoYW5nZTonLCBtb2RlKVxyXG4gIC8vIH0sXHJcblxyXG4gIG9uQXVkaW9MaXN0c1BhbmVsQ2hhbmdlKHBhbmVsVmlzaWJsZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2F1ZGlvIGxpc3RzIHBhbmVsIHZpc2libGU6JywgcGFuZWxWaXNpYmxlKVxyXG4gIH0sXHJcblxyXG4gIG9uQXVkaW9MaXN0c1NvcnRFbmQob2xkSW5kZXgsIG5ld0luZGV4KSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gbGlzdHMgc29ydCBlbmQ6Jywgb2xkSW5kZXgsIG5ld0luZGV4KVxyXG4gIH0sXHJcblxyXG4gIG9uQXVkaW9MeXJpY0NoYW5nZShsaW5lTnVtLCBjdXJyZW50THlyaWMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBseXJpYyBjaGFuZ2U6JywgbGluZU51bSwgY3VycmVudEx5cmljKVxyXG4gIH0sXHJcblxyXG4gIC8vIGN1c3RvbSBtdXNpYyBwbGF5ZXIgcm9vdCBub2RlXHJcbiAgZ2V0Q29udGFpbmVyKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gZ2V0IG9yaWdpbiBhdWRpbyBlbGVtZW50IGluc3RhbmNlICwgeW91IGNhbiB1c2UgaXQgZG8gZXZlcnl0aGluZ1xyXG4gICAqIEBleGFtcGxlXHJcbiAgICogYXVkaW8ucGxheWJhY2tSYXRlID0gMS41ICAvLyBzZXQgcGxheSBiYWNrIHJhdGVcclxuICAgKiBhdWRpby5jcm9zc09yaWdpbiA9ICd4eHgnIC8vIGNvbmZpZyBjcm9zcyBvcmlnaW5cclxuICAgKi9cclxuICBnZXRBdWRpb0luc3RhbmNlKGF1ZGlvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXVkaW8gaW5zdGFuY2UnLCBhdWRpbylcclxuICB9LFxyXG5cclxuICBvbkJlZm9yZURlc3Ryb3koY3VycmVudFBsYXlJZCwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25CZWZvcmVEZXN0cm95IGN1cnJlbnRQbGF5SWQ6ICcsIGN1cnJlbnRQbGF5SWQpXHJcbiAgICBjb25zb2xlLmxvZygnb25CZWZvcmVEZXN0cm95IGF1ZGlvTGlzdHM6ICcsIGF1ZGlvTGlzdHMpXHJcbiAgICBjb25zb2xlLmxvZygnb25CZWZvcmVEZXN0cm95IGF1ZGlvSW5mbzogJywgYXVkaW9JbmZvKVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgLy8geW91ciBjdXN0b20gdmFsaWRhdGVcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBjb25maXJtIGRlc3Ryb3kgdGhlIHBsYXllcj8nKSkge1xyXG4gICAgICAgIC8vIGlmIHJlc29sdmUsIHBsYXllciBkZXN0cm95ZWRcclxuICAgICAgICByZXNvbHZlKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpZiByZWplY3QsIHNraXAuXHJcbiAgICAgICAgcmVqZWN0KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBvbkRlc3Ryb3llZChjdXJyZW50UGxheUlkLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkRlc3Ryb3llZDonLCBjdXJyZW50UGxheUlkLCBhdWRpb0xpc3RzLCBhdWRpb0luZm8pXHJcbiAgfSxcclxuXHJcbiAgb25Db3ZlckNsaWNrKG1vZGUsIGF1ZGlvTGlzdHMsIGF1ZGlvSW5mbykge1xyXG4gICAgY29uc29sZS5sb2coJ29uQ292ZXJDbGljazogJywgbW9kZSwgYXVkaW9MaXN0cywgYXVkaW9JbmZvKVxyXG4gIH0sXHJcblxyXG4gIC8vIGN1c3RvbSBhdWRpbyB0aXRsZVxyXG4gIC8vIHJlbmRlckF1ZGlvVGl0bGUoYXVkaW9JbmZvKSB7XHJcbiAgLy8gICByZXR1cm4gPGEgaHJlZj1cIiNcIj57YXVkaW9JbmZvLm5hbWV9PC9hPlxyXG4gIC8vIH0sXHJcblxyXG4gIC8vIG9uUGxheUluZGV4Q2hhbmdlIChwbGF5SW5kZXgpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdvblBsYXlJbmRleENoYW5nZTogJywgcGxheUluZGV4KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHRyYW5zZm9ybSBhdWRpbyBpbmZvIGxpa2UgcmV0dXJuIGEgUHJvbWlzZVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJuXHJcbiAgICogIHtcclxuICAgKiAgICBzcmM6ICd4eHgnLFxyXG4gICAqICAgIGZpbGVuYW1lOiAneHh4JyxcclxuICAgKiAgICBtaW1lVHlwZTogJ3h4eCdcclxuICAgKiAgfVxyXG4gICAqL1xyXG4gIC8vIG9uQmVmb3JlQXVkaW9Eb3dubG9hZCgpIHtcclxuICAvLyAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xyXG4gIC8vICAgICBzcmM6ICcxLm1wMycsXHJcbiAgLy8gICB9KVxyXG4gIC8vIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIGN1c3RvbWVyIGRvd25sb2FkIGhhbmRsZXJcclxuICAgKiBlZy4gYSBsaW5rICwgb3IgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmlsZS1zYXZlclxyXG4gICAqIEBwYXJhbSB7Kn0gZG93bmxvYWRJbmZvXHJcbiAgICogQGV4YW1wbGVcclxuICAgKlxyXG4gICAgICAgY3VzdG9tRG93bmxvYWRlcihkb3dubG9hZEluZm8pIHtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAgICAgbGluay5ocmVmID0gZG93bmxvYWRJbmZvLnNyY1xyXG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBkb3dubG9hZEluZm8uZmlsZW5hbWUgfHwgJ3Rlc3QnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKVxyXG4gICAgICAgIGxpbmsuY2xpY2soKVxyXG4gICAgICB9LFxyXG4gICAqL1xyXG4gIC8vIGN1c3RvbURvd25sb2FkZXIoZG93bmxvYWRJbmZvKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhkb3dubG9hZEluZm8uc3JjKVxyXG4gIC8vICAgY29uc29sZS5sb2coZG93bmxvYWRJbmZvLmZpbGVuYW1lKVxyXG4gIC8vICAgY29uc29sZS5sb2coZG93bmxvYWRJbmZvLm1pbWVUeXBlKVxyXG4gIC8vIH0sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpY0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdEprTXVzaWNQbGF5ZXIgey4uLm9wdGlvbnN9Lz4sXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk11c2ljQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuTXVzaWNDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=