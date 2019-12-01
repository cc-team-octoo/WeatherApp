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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\r\n    --bgcolor: #212221;\r\n    --txtcolor: #212221;\r\n    --btncolor: #1181B2;\r\n}\r\n\r\nbody {\r\n    font-size: 16px;\r\n    font-family: 'Roboto', 'Open Sans', sans-serif;\r\n    background-color: #fafafa;\r\n    padding: 20px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    body {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {    \r\n    .smallCard {\r\n        width: 50%;\r\n        padding: 2% 2%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 480px) {    \r\n    .smallCard {\r\n        width: 100%;\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* Section */\r\n\r\n.section {\r\n    width: 90vw;\r\n    max-width: 1200px;\r\n    margin: 10px auto;\r\n    padding: 20px;\r\n    background-color: var(--bgcolor);\r\n    border-radius: 10px;\r\n}   \r\n\r\nh1 {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    color: #fafafa;\r\n}\r\n\r\np {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n/* input area */\r\n.inputBox {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: flex-end;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.inputs {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .inputBox {\r\n        flex-flow: row nowrap;\r\n        align-items: flex-end;\r\n    }\r\n}\r\n\r\n.input {\r\n    font-size: 1rem;\r\n    margin: 5px 0;\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    max-width: 200px;\r\n    margin-right: 1rem;\r\n}\r\n\r\n#js_countryCode {\r\n    max-width: 70px;\r\n}\r\n\r\n#js_textInput{\r\n    margin-right: 0;\r\n}\r\n\r\n.shortInput {\r\n    max-width: 180px;\r\n}\r\n\r\n.dataInput {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n\r\n.inputContainer {\r\n    position: relative;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.locationIcon {\r\n    position: absolute;\r\n    height: 1.2rem;\r\n    right: 1.2rem;\r\n    top: .8rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.button {\r\n    margin: 5px 0;\r\n    padding: .5rem 1.2rem;\r\n    color: #fafafa;\r\n    font-size: 1.2rem;\r\n    background-color: var(--btncolor);\r\n    border: none;\r\n    border-radius: 5px;\r\n    height: fit-content;\r\n    cursor: pointer;\r\n}\r\n\r\n/* waether cards */\r\n.card {\r\n    background-color: #fafafa;\r\n    color: var(--bgcolor);\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n}\r\n\r\n.highlight {\r\n    font-size: 2rem;\r\n}\r\n\r\n.bigCard {\r\n    max-width: 280px;\r\n}\r\n\r\n.bigCard__top {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#js_midTemp {\r\n    font-size: 4.2rem;\r\n}\r\n\r\n#js_description {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/* Small Cards*/\r\n\r\n.smallCards {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding: 30px 0 ;\r\n}\r\n\r\n.smallCard { \r\n    width: 200px;\r\n    margin: 20px;  \r\n}\r\n\r\n.smallCard__top {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n.smallDate {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.smallTemp {\r\n    font-size: 1.5rem;\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countriesCodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countriesCodes.js */ "./src/js/countriesCodes.js");
/* harmony import */ var _geolocation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation.js */ "./src/js/geolocation.js");
/* harmony import */ var _askForData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./askForData */ "./src/js/askForData.js");
/* harmony import */ var _showCurrentWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showCurrentWeather */ "./src/js/showCurrentWeather.js");






Object(_countriesCodes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
var searchBtn = document.getElementById("js_searchBtn");
var form = document.querySelector(".inputs");
searchBtn.addEventListener('click', function () {
  Object(_askForData__WEBPACK_IMPORTED_MODULE_4__["default"])(form.elements.namedItem("js_inputType").value, form.elements.namedItem("js_textInputType").value, form.elements.namedItem("js_textInputType2").value);
});
var currentCity = document.getElementById("js_currentCity");
var currentTemperature = document.getElementById("js_midTemp");
var weatherDesc = document.getElementById("js_description");
var todayMinTemperature = document.getElementById("js_minTemp");
var todayMaxTemperature = document.getElementById("js_maxTemp");
var currentPressure = document.getElementById("js_pressure");
var currentHumidity = document.getElementById("js_humidity");

var weatherUpdate = function weatherUpdate(obj) {
  currentCity.innerText = obj.name;
  currentTemperature.innerText = obj.main.temp.toFixed(1);
  weatherDesc.innerText = obj.weather[0].description;
  todayMinTemperature.innerText = obj.main.temp_min.toFixed(1);
  todayMaxTemperature.innerText = obj.main.temp_max.toFixed(1);
  currentPressure.innerText = obj.main.pressure;
  currentHumidity.innerText = obj.main.humidity;
};

var dates = document.querySelectorAll(".date");
var dayNames = document.querySelectorAll(".js_date");

var dateUpdate = function dateUpdate() {
  var today = new Date();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var dayName = today.getDay(); // trzeba by było przeiterować się po zmiennych dates i dayNames, np. forEach(el, i) i podorabiać dynamicznie daty
};

dateUpdate();
Object(_geolocation_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); //pobiera dane z lokalizaci użytkownika - proponuje żeby od razu po załadowaniu domu uruchamiała się i wskakiwały ako pierwsze - użytkwonik ma domyślnie pogode dla swoej lokalizacji
//document.querySelector("jakiś super formularz").addEventListener("click",askForData())

Object(_askForData__WEBPACK_IMPORTED_MODULE_4__["default"])(); //- funkcja działa docelowo można sobie sprawdzić ZipCode City i GeoLocation
// export {currentCity, currentTemperature, weatherDesc, todayMinTemperature, todayMaxTemperature, currentPressure, currentHumidity}

/* harmony default export */ __webpack_exports__["default"] = (weatherUpdate);

/***/ }),

/***/ "./src/js/askForData.js":
/*!******************************!*\
  !*** ./src/js/askForData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ "./src/js/fetch.js");
/* harmony import */ var _showWheater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showWheater */ "./src/js/showWheater.js");
/* harmony import */ var _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCurrentWeather */ "./src/js/showCurrentWeather.js");



var apiKey = "4e687fa0129ef13f04e5dac8867f62ca";

var askForData = function askForData() {
  var inputType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Circle";
  var inputValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  //za input Type wstawiamy z czego pobieramy input Value to value inputa
  //możba sobie potestować wstawiając za input Type City, ZipCode, Geo
  switch (inputType) {
    case 'City':
      //pobiera pod względem miasta
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http://api.openweathermap.org/data/2.5/forecast?q=".concat(inputValue, "&appid=").concat(apiKey), _showWheater__WEBPACK_IMPORTED_MODULE_1__["default"]);
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http:/api.openweathermap.org/data/2.5/weather?q=".concat(inputValue, "&appid=").concat(apiKey), _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"]);
      break;

    case 'ZipCode':
      //pobiera po kodzie
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http://api.openweathermap.org/data/2.5/forecast?zip=".concat(inputValue, ",pl&appid=").concat(apiKey), _showWheater__WEBPACK_IMPORTED_MODULE_1__["default"]);
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http://api.openweathermap.org/data/2.5/weather?zip=".concat(inputValue, ",pl&appid=").concat(apiKey), _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"]);
      break;

    case 'Geo':
      //pobiera po współrzędnych
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(inputValue, "&lon=").concat(inputValue, "&appid=").concat(apiKey), _showWheater__WEBPACK_IMPORTED_MODULE_1__["default"]);
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http:api.openweathermap.org/data/2.5/weather?lat=".concat(inputValue, "&lon=").concat(inputValue, "&appid=").concat(apiKey), _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"]);
      break;

    case 'Rectangle':
      //pobiera po obszarze miast (kwadrat koordynaty geograficzne)
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=".concat(apiKey), _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"]);
      break;

    case 'Circle':
      //pobiera po obszarze miast (okrąg- koordynaty geograficzne)
      Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=".concat(apiKey), _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"]);
      break;

    default:
      console.log('test - something go wrong rly rly wrong ');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (askForData);

/***/ }),

/***/ "./src/js/countriesCodes.js":
/*!**********************************!*\
  !*** ./src/js/countriesCodes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var countries = {
  "AF": "Afghanistan",
  "AX": "Aland Islands",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua And Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BA": "Bosnia And Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo",
  "CD": "Congo, Democratic Republic",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Cote D\"Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (Malvinas)",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island & Mcdonald Islands",
  "VA": "Holy See (Vatican City State)",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran, Islamic Republic Of",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle Of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KR": "Korea",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People\"s Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libyan Arab Jamahiriya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia, Federated States Of",
  "MD": "Moldova",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "AN": "Netherlands Antilles",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territory, Occupied",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "Reunion",
  "RO": "Romania",
  "RU": "Russian Federation",
  "RW": "Rwanda",
  "BL": "Saint Barthelemy",
  "SH": "Saint Helena",
  "KN": "Saint Kitts And Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin",
  "PM": "Saint Pierre And Miquelon",
  "VC": "Saint Vincent And Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome And Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia And Sandwich Isl.",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard And Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad And Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks And Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UM": "United States Outlying Islands",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela",
  "VN": "Viet Nam",
  "VG": "Virgin Islands, British",
  "VI": "Virgin Islands, U.S.",
  "WF": "Wallis And Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
};
var countryCode = document.getElementById('js_countryCode');
var countryCodesList = Object.keys(countries);
var input1 = document.getElementById('js_textInput');
var input2 = document.getElementById('js_textInput2');
var optSelect = document.getElementById('js_optSelect'); //generate countries codes and put into country select input

var countriesCodes = function countriesCodes() {
  for (var i = 0; i < countryCodesList.length; i++) {
    var newOpt = new Option();
    newOpt.text = countryCodesList[i];
    newOpt.value = countryCodesList[i];
    countryCode.add(newOpt);
    countryCodesList[i] === "PL" ? countryCode.options[i].selected = true : null;
  }
}; //set inputs attributes based on selected input type


function prepareInputs() {
  var inputType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'City';

  switch (inputType) {
    case 'City':
      input1.setAttribute('placeholder', 'Poznań');
      input2.classList.add('hidden');
      countryCode.classList.remove('hidden');
      break;

    case 'ZipCode':
      input1.setAttribute('placeholder', '61-875');
      input2.classList.add('hidden');
      countryCode.classList.remove('hidden');
      break;

    case 'Geo':
      input1.setAttribute('placeholder', 'Longitude:');
      input2.setAttribute('placeholder', 'Latitude:');
      input2.classList.remove('hidden');
      countryCode.classList.add('hidden');
      break;

    default:
      console.log("Something's wrong with search option input");
  }
}

; //invoke the function at the very begining and then every on option change

prepareInputs(optSelect.value);
optSelect.addEventListener('change', function (e) {
  return prepareInputs(optSelect.value);
});
/* harmony default export */ __webpack_exports__["default"] = (countriesCodes);

/***/ }),

/***/ "./src/js/fetch.js":
/*!*************************!*\
  !*** ./src/js/fetch.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//funkcja odpowiada za pobranie danych następnie uruchamia callback
var getData = function getData(url, callback) {
  var data = fetch(url).then(function (res) {
    return res.json();
  }) //.then(res=>console.log(res))
  .then(function (res) {
    callback(res);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getData);

/***/ }),

/***/ "./src/js/geolocation.js":
/*!*******************************!*\
  !*** ./src/js/geolocation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ "./src/js/fetch.js");
/* harmony import */ var _showWheater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showWheater */ "./src/js/showWheater.js");
/* harmony import */ var _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCurrentWeather */ "./src/js/showCurrentWeather.js");
//import funkcji z fatchem
 //funkcja pomocnicza działająca jako callback dla fetcha - nie wiem jakie elementy mam łapać w query selector i na nich operować



var apiKey = "4e687fa0129ef13f04e5dac8867f62ca";

var geolocation = function geolocation() {
  var userPosition = {};
  var getUserPostion = window.navigator.geolocation.getCurrentPosition(function (position) {
    userPosition = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    console.log("--Geolocation - fetch from user");
    Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(userPosition.latitude, "&lon=").concat(userPosition.longitude, "&appid=").concat(apiKey), _showWheater__WEBPACK_IMPORTED_MODULE_1__["default"]);
    Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http:api.openweathermap.org/data/2.5/weather?lat=".concat(userPosition.latitude, "&lon=").concat(userPosition.longitude, "&appid=").concat(apiKey), _showCurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"]);
    console.log("--------");
  }, function (error) {
    return console.log(error, "Please allow to share your location");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (geolocation);

/***/ }),

/***/ "./src/js/showCurrentWeather.js":
/*!**************************************!*\
  !*** ./src/js/showCurrentWeather.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");


function showCurrentWeather(arg) {
  console.log("-----Aktualna Pogoda------");
  console.log(arg); //całe dane już przerobione z json 

  console.log("-----------");
  Object(_app__WEBPACK_IMPORTED_MODULE_0__["default"])(arg);
}

/* harmony default export */ __webpack_exports__["default"] = (showCurrentWeather);

/***/ }),

/***/ "./src/js/showWheater.js":
/*!*******************************!*\
  !*** ./src/js/showWheater.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var icons = document.querySelectorAll('.js_smallCard__icon');
var maxTemps = document.querySelectorAll('.js_smallMaxTemp');

function getToday() {
  var now = new Date();
  var today = now.toISOString().slice(0, 10);
  return today;
} //store needed data in one object


function getAllDaysData(arg) {
  var allDaysData = [];
  arg.list.map(function (i) {
    allDaysData.push({
      date: i.dt_txt.split(' ')[0],
      time: i.dt_txt.split(' ')[1],
      tempMax: i.main.temp_max,
      icon: i.weather[0].icon
    });
  });
  return allDaysData;
} //get data for 4 next days at noon


function getNextDaysData(arg) {
  var today = getToday();
  var allDaysData = getAllDaysData(arg);
  console.log(today);
  console.log(allDaysData);
  var nextDaysData = allDaysData.filter(function (n) {
    return n.date > today && n.time === "12:00:00";
  });
  return nextDaysData;
} //display weather data in small cards


function showWeather(arg) {
  var nextDaysData = getNextDaysData(arg);

  for (var i = 0; i <= 3; i++) {
    maxTemps[i].textContent = nextDaysData[i].tempMax.toFixed(1);
    icons[i].src = "http://openweathermap.org/img/wn/".concat(nextDaysData[i].icon, "@2x.png");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (showWeather);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map