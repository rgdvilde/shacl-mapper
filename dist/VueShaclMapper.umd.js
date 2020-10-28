(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("shacl"), require("rdflib"));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else if(typeof exports === 'object')
		exports["VueShaclMapper"] = factory(require("shacl"), require("rdflib"));
	else
		root["VueShaclMapper"] = factory(root["SHACLValidator"], root["$rdf"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__5d49__, __WEBPACK_EXTERNAL_MODULE_fd3a__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1d9e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1db8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("031f08e0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1db8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn-add-del[data-v-40cec622]{font-weight:700;font-size:18px;padding:.25rem;line-height:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "3706":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vjs-checkbox{position:absolute;left:-30px;color:#1f2d3d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vjs-checkbox.is-checked .vjs-checkbox__inner{background-color:#1890ff;border-color:#0076e4}.vjs-checkbox.is-checked .vjs-checkbox__inner:after{-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.vjs-checkbox .vjs-checkbox__inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;-webkit-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);-o-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-checkbox .vjs-checkbox__inner:after{-webkit-box-sizing:content-box;box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;-webkit-transform:rotate(45deg) scaleY(0);transform:rotate(45deg) scaleY(0);width:4px;-webkit-transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-o-transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-webkit-transform-origin:center;transform-origin:center}.vjs-checkbox .vjs-checkbox__original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-radio{position:absolute;left:-30px;color:#1f2d3d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vjs-radio.is-checked .vjs-radio__inner{background-color:#1890ff;border-color:#0076e4}.vjs-radio.is-checked .vjs-radio__inner:after{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.vjs-radio .vjs-radio__inner{border:1px solid #bfcbd9;border-radius:100%;width:16px;height:16px;vertical-align:middle;background-color:#fff;position:relative;cursor:pointer;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box}.vjs-radio .vjs-radio__inner:after{width:4px;height:4px;border-radius:100%;background-color:#fff;content:\"\";position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);-webkit-transition:-webkit-transform .15s ease-in;transition:-webkit-transform .15s ease-in;-o-transition:transform .15s ease-in;transition:transform .15s ease-in;transition:transform .15s ease-in,-webkit-transform .15s ease-in}.vjs-radio .vjs-radio__original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px}.vjs-tree.is-root{position:relative}.vjs-tree.is-root.has-selectable-control{margin-left:30px}.vjs-tree.is-mouseover{background-color:#e6f7ff}.vjs-tree.is-highlight-selected{background-color:#ccefff}.vjs-tree .vjs-tree__content{padding-left:1em}.vjs-tree .vjs-tree__content.has-line{border-left:1px dotted #bfcbd9}.vjs-tree .vjs-tree__brackets{cursor:pointer}.vjs-tree .vjs-tree__brackets:hover{color:#1890ff}.vjs-tree .vjs-comment{color:#bfcbd9}.vjs-tree .vjs-value__null{color:#ff4949}.vjs-tree .vjs-value__boolean,.vjs-tree .vjs-value__number{color:#1d8ce0}.vjs-tree .vjs-value__string{color:#13ce66}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4868":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShaclMapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fc8c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShaclMapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShaclMapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShaclMapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4af8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"20b0e721-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormInput.vue?vue&type=template&id=40cec622&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.options.styles.field},[_c('div',{class:_vm.options.styles.label},[_c('abbr',{attrs:{"title":_vm.propertyShape.path.value}},[_vm._v(" "+_vm._s(_vm.shrink(_vm.propertyShape.path))+" ")]),_c('br'),_c('div',{staticClass:"custom-control custom-switch"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.constant),expression:"constant"}],staticClass:"custom-control-input",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.constant)?_vm._i(_vm.constant,null)>-1:(_vm.constant)},on:{"change":function($event){var $$a=_vm.constant,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.constant=$$a.concat([$$v]))}else{$$i>-1&&(_vm.constant=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.constant=$$c}}}}),_c('label',{staticClass:"custom-control-label",on:{"click":function($event){$event.preventDefault();return _vm.typeChange($event)}}},[_vm._v("Constant ")])]),(_vm.isAddable)?_c('button',{class:[_vm.options.styles.button],attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.expand($event)}}},[_vm._v("expand ")]):_vm._e(),(_vm.isAddable)?_c('button',{class:[_vm.options.styles.button, _vm.options.styles.buttonAdd],attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.add($event)}}},[_vm._v("+ ")]):_vm._e()]),(!_vm.expanded.expanded)?_c('div',{class:_vm.options.styles.inputColumn},_vm._l((_vm.inputValue),function(value,index){return _c('div',{class:_vm.options.styles.inputGroup},[_c('typed-input',{attrs:{"constant":_vm.constant,"constraints":_vm.constraintParams,"isValid":_vm.isValid(index)},on:{"input":_vm.onInput},model:{value:(_vm.inputValue[index]),callback:function ($$v) {_vm.$set(_vm.inputValue, index, $$v)},expression:"inputValue[index]"}}),(_vm.constraintParams.languageIn)?_c('div',{class:_vm.options.styles.inputGroupAppend},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.language[index]),expression:"language[index]"}],class:_vm.options.styles.input,on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.language, index, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.onInput]}},_vm._l((_vm.constraintParams.languageIn.elements),function(lang){return _c('option',{domProps:{"value":lang.value}},[_vm._v(_vm._s(lang.value)+" ")])}),0)]):_vm._e(),(_vm.isRemovable)?_c('button',{class:[_vm.options.styles.button, _vm.options.styles.buttonDel],on:{"click":function($event){$event.preventDefault();return _vm.remove(index)}}},[_vm._v("× ")]):_vm._e(),(!_vm.isValid(index))?_c('div',{class:_vm.options.styles.invalidFeedback},[_c('ul',_vm._l((_vm.validation[index]),function(result){return _c('li',[_vm._v(_vm._s(result.message()))])}),0)]):_vm._e()],1)}),0):_c('div',{class:_vm.options.styles.inputColumn},[_c('shacl-form',{ref:"shaclForm",attrs:{"shapesGraphText":_vm.shapesGraphText,"targetClass":_vm.targetClass,"options":_vm.options,"endpointData":_vm.endpointdata,"iteratorText":_vm.iteratorText,"filetype":_vm.filetype},on:{"update":_vm.onUpdate,"load":_vm.onLoad}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormInput.vue?vue&type=template&id=40cec622&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"rdflib","commonjs2":"rdflib","root":"$rdf"}
var external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_ = __webpack_require__("fd3a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"20b0e721-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TypedInput.vue?vue&type=template&id=35e924bf&scoped=true&
var TypedInputvue_type_template_id_35e924bf_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.inputType === 'radio')?_c('div',[_c('div',{class:_vm.options.styles.radioGroup},[_c('input',{class:_vm.options.styles.radio,attrs:{"type":"radio","value":"true","name":_vm.id + '_radio',"id":_vm.id + '_true'},domProps:{"checked":_vm.value === 'true'},on:{"input":_vm.onInput}}),_c('label',{class:_vm.options.styles.radioLabel,attrs:{"for":_vm.id + '_true'}},[_vm._v("true")])]),_c('div',{class:_vm.options.styles.radioGroup},[_c('input',{class:_vm.options.styles.radio,attrs:{"type":"radio","value":"false","name":_vm.id + '_radio',"id":_vm.id + '_false'},domProps:{"checked":_vm.value === 'false'},on:{"input":_vm.onInput}}),_c('label',{class:_vm.options.styles.radioLabel,attrs:{"for":_vm.id + '_false'}},[_vm._v("false")])])]):_c('input',{class:[_vm.options.styles.input, _vm.isValid ? _vm.options.styles.validInput : _vm.options.styles.invalidInput],attrs:{"type":_vm.inputType,"minlength":_vm.minlength,"maxlength":_vm.maxlength},domProps:{"value":_vm.value},on:{"input":_vm.onInput}})}
var TypedInputvue_type_template_id_35e924bf_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TypedInput.vue?vue&type=template&id=35e924bf&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TypedInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const XSD = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://www.w3.org/2001/XMLSchema#');
/* harmony default export */ var TypedInputvue_type_script_lang_js_ = ({
  name: 'TypedInput',
  props: ['constraints', 'value', 'isValid', 'constant'],

  data() {
    return {
      'id': null
    };
  },

  inject: ['options'],

  mounted() {
    this.id = this._uid;
  },

  computed: {
    inputType() {
      if (this.constant === false) {
        return 'text';
      } else {
        switch (!this.constraints.datatype || this.constraints.datatype.value) {
          case XSD('date').value:
            return 'date';

          case XSD('time').value:
            return 'time';

          case XSD('dateTime').value:
          case XSD('dateTimeStamp').value:
            return 'datetime-local';

          case XSD('integer').value:
          case XSD('decimal').value:
            return 'number';

          case XSD('boolean').value:
            return 'radio';

          default:
            return 'text';
        }
      }
    },

    minlength() {
      return this.constraints.minLength ? this.constraints.minLength : null;
    },

    maxlength() {
      return this.constraints.maxLength ? this.constraints.maxLength : null;
    }

  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/TypedInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TypedInputvue_type_script_lang_js_ = (TypedInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/TypedInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TypedInputvue_type_script_lang_js_,
  TypedInputvue_type_template_id_35e924bf_scoped_true_render,
  TypedInputvue_type_template_id_35e924bf_scoped_true_staticRenderFns,
  false,
  null,
  "35e924bf",
  null
  
)

/* harmony default export */ var TypedInput = (component.exports);
// CONCATENATED MODULE: ./src/lib/util.js


function shrinkUri(node, namespaces) {
  let uri;
  if (node.termType && node.termType === 'NamedNode') uri = node.value;else if (typeof node === 'string') uri = node;else return null;

  for (let prefix in namespaces) {
    const prefixUrl = namespaces[prefix];
    if (uri.startsWith(prefixUrl)) return prefix + ':' + uri.substr(prefixUrl.length);
  }

  return uri;
} // From shacl-js/src/rdflib-graph.js
// Monkey Patching rdflib, Literals, BlankNodes and NamedNodes


var exLiteral = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["literal"]("a", "de");
Object.defineProperty(Object.getPrototypeOf(exLiteral), "lex", {
  get: function () {
    return this.value;
  }
});

Object.getPrototypeOf(exLiteral).isBlankNode = function () {
  return false;
};

Object.getPrototypeOf(exLiteral).isLiteral = function () {
  return true;
};

Object.getPrototypeOf(exLiteral).isURI = function () {
  return false;
};

var exBlankNode = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]();

Object.getPrototypeOf(exBlankNode).isBlankNode = function () {
  return true;
};

Object.getPrototypeOf(exBlankNode).isLiteral = function () {
  return false;
};

Object.getPrototypeOf(exBlankNode).isURI = function () {
  return false;
};

var exNamedNode = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["namedNode"]("urn:x-dummy");

Object.getPrototypeOf(exNamedNode).isBlankNode = function () {
  return false;
};

Object.getPrototypeOf(exNamedNode).isLiteral = function () {
  return false;
};

Object.getPrototypeOf(exNamedNode).isURI = function () {
  return true;
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import queries from '../lib/queries'


const SHACL = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://www.w3.org/ns/shacl#');
/* harmony default export */ var FormInputvue_type_script_lang_js_ = ({
  name: 'FormInput',
  props: ['propertyShapeNode', // Shape instance which is sh:PropertyShape
  'subject', // subject of the instance being edited
  'value', 'expansion', 'shapesStore'],

  data() {
    return {
      inputValue: [null],
      language: [null],
      blankNode: [null],
      quadsUnderBlankNode: [],
      constraintParams: {},
      constant: false,
      expanded: {
        expanded: false
      }
    };
  },

  inject: ['shapesGraph', 'options', 'validationResults'],
  watch: {
    subject() {
      this.onInput();
    },

    constraints: {
      immediate: true,

      handler(newValue) {
        this.constraintParams = {};
        newValue.forEach(constraint => {
          for (let param in constraint.parameterValues) {
            let value = constraint.parameterValues[param];

            if (param === 'property') {
              // sh:property
              if (!this.constraintParams[param]) this.$set(this.constraintParams, param, []);
              this.constraintParams[param].push(value);
            } else {
              this.$set(this.constraintParams, param, value);
            }
          }
        });
      }

    }
  },
  computed: {
    propertyShape() {
      return this.shapesGraph.getShape(this.propertyShapeNode);
    },

    constraints() {
      return this.propertyShape.getConstraints();
    },

    isBlankNode() {
      return this.constraintParams['nodeKind'] && this.constraintParams['nodeKind'].equals(SHACL('BlankNode'));
    },

    blankNodeTarget() {
      // from class of sh:class
      if (this.constraintParams['class']) return this.shapesGraph.getShape(this.constraintParams['class']); // from sh:property

      return this.propertyShape;
    },

    isAddable() {
      return !this.constraintParams.maxCount || this.constraintParams.maxCount > this.inputValue.length;
    },

    isRemovable() {
      return !this.constraintParams.minCount || this.constraintParams.minCount < this.inputValue.length;
    },

    validation() {
      if (this.validationResults.length === 0) return [];
      const focusNode = this.subject.termType === 'BlankNode' ? this.subject.toString() : this.subject.value;
      return this.inputValue.map(value => {
        return this.validationResults.filter(result => {
          return result.focusNode() === focusNode && result.path() === this.propertyShape.path.value && (!result.resultNode['http://www.w3.org/ns/shacl#value'] || result.resultNode['http://www.w3.org/ns/shacl#value'][0]['@value'] === value || result.resultNode['http://www.w3.org/ns/shacl#value'][0]['@id'] === value);
        });
      });
    },

    quads() {
      const objects = this.objects();
      if (objects.length === 0) return null;
      if (!this.subject) return null;
      const RR = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://www.w3.org/ns/r2rml#'); // const NGSI = new $rdf.Namespace('https://uri.fiware.org/ns/data-models#')
      // const NGSIC = new $rdf.Namespace('https://uri.etsi.org/ngsi-ld/')

      const RML = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://semweb.mmlab.be/ns/rml#'); // const RL = new $rdf.Namespace('http://example.org/rules/')
      // const QL = new $rdf.Namespace('http://semweb.mmlab.be/ns/ql#')
      // const RDF = new $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')

      let quads = objects.filter(v => v).reduce((r, object) => {
        const blankNode1 = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]();
        const blankNode3 = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]();
        r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](this.subject, RR('predicateObjectMap'), blankNode1));
        r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode1, RR('predicate'), this.propertyShape.path));
        r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode1, RR('objectMap'), blankNode3));

        if (this.constant) {
          r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode3, RR('constant'), object));
        } else {
          r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode3, RML('reference'), object));
        }

        return r;
      }, []); // let quads = objects
      //   .filter(v => v)
      //   .map(object => $rdf.quad(this.subject, this.propertyShape.path, object))          

      if (this.isBlankNode) {
        if (!this.quadsUnderBlankNode || this.quadsUnderBlankNode.flat().length === 0) return null;
        quads = quads.concat(this.quadsUnderBlankNode.flat());
      }

      return quads;
    }

  },
  methods: {
    add() {
      if (this.isBlankNode) {
        this.blankNode.push(null);
      } else {
        this.inputValue.push(null);
        this.language.push(null);
      }
    },

    remove(index) {
      if (this.isBlankNode) {
        this.blankNode.splice(index, 1);
        this.quadsUnderBlankNode.splice(index, 1);
        if (this.blankNode.length === 0) this.add();
      } else {
        this.inputValue.splice(index, 1);
        this.language.splice(index, 1);
        if (this.inputValue.length === 0) this.add();
      }

      this.onInput();
    },

    isValid(index) {
      return !this.validation[index] || this.validation[index].length === 0;
    },

    typeChange() {
      this.constant = !this.constant;
    },

    objects() {
      const objects = [];

      if (this.isBlankNode) {
        this.blankNode.forEach((value, index) => {
          if (!this.blankNode[index]) this.$set(this.blankNode, index, external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]());
          objects.push(this.blankNode[index]);
        });
      } else {
        this.inputValue.forEach((value, index) => {
          if (this.constraintParams['nodeKind'] && this.constraintParams['nodeKind'].equals(SHACL('IRI'))) objects.push(value ? external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["namedNode"](value) : null);else {
            let language = this.constraintParams['languageIn'] && this.constraintParams['languageIn'].elements.length === 1 ? this.constraintParams['languageIn'].elements[0].value // default language tag
            : this.language[index];
            this.$set(this.language, index, language);
            objects.push(value ? external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["literal"](value, this.language[index] || this.constraintParams['datatype']) : null);
          }
        });
      }

      return objects;
    },

    onInput() {
      this.$emit('input', this.quads);
    },

    shrink(node) {
      if (!node) return '';
      return shrinkUri(node, this.shapesGraph.context.$shapes.store.namespaces);
    },

    expand() {
      // const query = queries.getexpansion
      // var eq = $rdf.SPARQLToQuery(query,false,this.shapesStore)
      // var onresult = function(result) {
      //   console.log(result['?b']['value'])
      // }
      // var onDone  = function() {  
      //   console.log('done')
      //  }
      // this.shapesStore.query(eq,onresult,undefined,onDone)
      // // this.expanded.expanded = !this.expanded.expanded    
      console.log(this.propertyShape);
    }

  },
  components: {
    TypedInput: TypedInput,
    ShaclForm: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "e00b"))
  }
});
// CONCATENATED MODULE: ./src/components/FormInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormInputvue_type_script_lang_js_ = (FormInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FormInput.vue?vue&type=style&index=0&id=40cec622&scoped=true&lang=css&
var FormInputvue_type_style_index_0_id_40cec622_scoped_true_lang_css_ = __webpack_require__("9a84");

// CONCATENATED MODULE: ./src/components/FormInput.vue






/* normalize component */

var FormInput_component = Object(componentNormalizer["a" /* default */])(
  components_FormInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "40cec622",
  null
  
)

/* harmony default export */ var FormInput = __webpack_exports__["default"] = (FormInput_component.exports);

/***/ }),

/***/ "5d49":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5d49__;

/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "7bd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  format: 'text/turtle',
  styles: {
    // for Bootstrap 4
    field: 'form-group row',
    fieldChild: 'card',
    label: 'col-sm-3 col-form-label text-center',
    inputColumn: 'col',
    input: 'form-control',
    inputGroup: 'input-group',
    inputGroupAppend: 'input-group-append',
    radio: 'form-check-input',
    radioGroup: 'form-check form-check-inline',
    radioLabel: 'form-check-label',
    button: 'btn btn-sm',
    buttonAdd: 'btn-primary btn-add-del',
    buttonDel: 'btn-danger btn-add-del',
    validInput: '',
    invalidInput: 'is-invalid',
    invalidFeedback: 'invalid-feedback'
  }
});

/***/ }),

/***/ "838b":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=67)}([function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(25)("wks"),o=n(27),i=n(2).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){e.exports=!n(8)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(2),o=n(0),i=n(19),a=n(5),s=n(9),u=function(e,t,n){var l,c,f,p=e&u.F,d=e&u.G,h=e&u.S,v=e&u.P,m=e&u.B,y=e&u.W,b=d?o:o[t]||(o[t]={}),g=b.prototype,_=d?r:h?r[t]:(r[t]||{}).prototype;for(l in d&&(n=t),n)(c=!p&&_&&void 0!==_[l])&&s(b,l)||(f=c?_[l]:n[l],b[l]=d&&"function"!=typeof _[l]?n[l]:m&&c?i(f,r):y&&_[l]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[l]=f,e&u.R&&g&&!g[l]&&a(g,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t,n){var r=n(6),o=n(13);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(7),o=n(36),i=n(37),a=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(12);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(15);e.exports=function(e){return Object(r(e))}},function(e,t,n){e.exports={default:n(62),__esModule:!0}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(39),o=n(28);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(25)("keys"),o=n(27);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t){e.exports={}},function(e,t,n){var r=n(35);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(12),o=n(2).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(22),o=n(15);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(23);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(16),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(0),o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(26)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!0},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(6).f,o=n(9),i=n(1)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},function(e,t,n){e.exports={default:n(33),__esModule:!0}},function(e){e.exports=JSON.parse('{"name":"vue-json-pretty","version":"1.7.1","description":"A JSON tree view component that is easy to use and also supports data selection.","author":"leezng <im.leezng@gmail.com>","main":"lib/vue-json-pretty.js","scripts":{"dev":"node build/dev-server.js","build":"node build/build.js","build:example":"cross-env EXAMPLE_ENV=true node build/build.js","e2e":"node test/e2e/runner.js","test":"npm run e2e","lint":"eslint --ext .js,.vue src test/e2e/specs example"},"repository":{"type":"git","url":"git@github.com:leezng/vue-json-pretty.git"},"homepage":"https://leezng.github.io/vue-json-pretty","keywords":["vue","json","format","pretty","vue-component"],"license":"MIT","bugs":{"url":"https://github.com/leezng/vue-json-pretty/issues"},"devDependencies":{"autoprefixer":"^7.1.2","babel-core":"^6.26.3","babel-loader":"7","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-2":"^6.24.1","chalk":"^2.0.1","clean-webpack-plugin":"^3.0.0","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^6.0.2","cross-env":"^7.0.2","cross-spawn":"^5.0.1","css-loader":"^0.28.0","cssnano":"^3.10.0","eslint":"^7.3.1","eslint-friendly-formatter":"^4.0.1","eslint-loader":"^4.0.2","eslint-plugin-vue":"^6.2.2","eventsource-polyfill":"^0.9.6","express":"^4.17.1","file-loader":"^6.0.0","friendly-errors-webpack-plugin":"^1.7.0","html-webpack-plugin":"^4.3.0","http-proxy-middleware":"^0.17.3","less":"^3.11.3","less-loader":"^6.1.2","mini-css-extract-plugin":"^0.9.0","nightwatch":"^1.0.19","opn":"^5.1.0","optimize-css-assets-webpack-plugin":"^5.0.3","selenium-server":"^3.0.1","semver":"^5.3.0","shelljs":"^0.7.6","url-loader":"^4.1.0","vue":"^2.6.11","vue-loader":"^14.2.4","vue-style-loader":"^4.1.2","vue-template-compiler":"^2.6.11","webpack":"^4.43.0","webpack-bundle-analyzer":"^3.8.0","webpack-dev-middleware":"^3.7.2","webpack-hot-middleware":"^2.25.0","webpack-merge":"^4.1.0"},"engines":{"node":">= 10.0.0","npm":">= 5.0.0"},"browserslist":["> 1%","last 10 versions","not ie <= 11"],"files":["lib"],"dependencies":{}}')},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(44),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,i.default)(e)}},function(e,t,n){n(34),e.exports=n(0).Object.assign},function(e,t,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(38)})},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){e.exports=!n(3)&&!n(8)((function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(12);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){"use strict";var r=n(3),o=n(14),i=n(42),a=n(43),s=n(10),u=n(22),l=Object.assign;e.exports=!l||n(8)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r}))?function(e,t){for(var n=s(e),l=arguments.length,c=1,f=i.f,p=a.f;l>c;)for(var d,h=u(arguments[c++]),v=f?o(h).concat(f(h)):o(h),m=v.length,y=0;m>y;)d=v[y++],r&&!p.call(h,d)||(n[d]=h[d]);return n}:l},function(e,t,n){var r=n(9),o=n(21),i=n(40)(!1),a=n(17)("IE_PROTO");e.exports=function(e,t){var n,s=o(e),u=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;t.length>u;)r(s,n=t[u++])&&(~i(l,n)||l.push(n));return l}},function(e,t,n){var r=n(21),o=n(24),i=n(41);e.exports=function(e){return function(t,n,a){var s,u=r(t),l=o(u.length),c=i(a,l);if(e&&n!=n){for(;l>c;)if((s=u[c++])!=s)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}}},function(e,t,n){var r=n(16),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){e.exports={default:n(45),__esModule:!0}},function(e,t,n){n(46),n(55),e.exports=n(0).Array.from},function(e,t,n){"use strict";var r=n(47)(!0);n(48)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},function(e,t,n){var r=n(16),o=n(15);e.exports=function(e){return function(t,n){var i,a,s=String(o(t)),u=r(n),l=s.length;return u<0||u>=l?e?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===l||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):i:e?s.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},function(e,t,n){"use strict";var r=n(26),o=n(4),i=n(49),a=n(5),s=n(18),u=n(50),l=n(29),c=n(54),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};e.exports=function(e,t,n,h,v,m,y){u(n,t,h);var b,g,_,x=function(e){if(!p&&e in C)return C[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},k=t+" Iterator",w="values"==v,j=!1,C=e.prototype,S=C[f]||C["@@iterator"]||v&&C[v],O=S||x(v),A=v?w?x("entries"):O:void 0,M="Array"==t&&C.entries||S;if(M&&(_=c(M.call(new e)))!==Object.prototype&&_.next&&(l(_,k,!0),r||"function"==typeof _[f]||a(_,f,d)),w&&S&&"values"!==S.name&&(j=!0,O=function(){return S.call(this)}),r&&!y||!p&&!j&&C[f]||a(C,f,O),s[t]=O,s[k]=d,v)if(b={values:w?O:x("values"),keys:m?O:x("keys"),entries:A},y)for(g in b)g in C||i(C,g,b[g]);else o(o.P+o.F*(p||j),t,b);return b}},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";var r=n(51),o=n(13),i=n(29),a={};n(5)(a,n(1)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(a,{next:o(1,n)}),i(e,t+" Iterator")}},function(e,t,n){var r=n(7),o=n(52),i=n(28),a=n(17)("IE_PROTO"),s=function(){},u=function(){var e,t=n(20)("iframe"),r=i.length;for(t.style.display="none",n(53).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[i[r]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=u(),void 0===t?n:o(n,t)}},function(e,t,n){var r=n(6),o=n(7),i=n(14);e.exports=n(3)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),s=a.length,u=0;s>u;)r.f(e,n=a[u++],t[n]);return e}},function(e,t,n){var r=n(2).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(9),o=n(10),i=n(17)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){"use strict";var r=n(19),o=n(4),i=n(10),a=n(56),s=n(57),u=n(24),l=n(58),c=n(59);o(o.S+o.F*!n(61)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,f,p=i(e),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,b=c(p);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),null==b||d==Array&&s(b))for(n=new d(t=u(p.length));t>y;y++)l(n,y,m?v(p[y],y):p[y]);else for(f=b.call(p),n=new d;!(o=f.next()).done;y++)l(n,y,m?a(f,v,[o.value,y],!0):o.value);return n.length=y,n}})},function(e,t,n){var r=n(7);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},function(e,t,n){var r=n(18),o=n(1)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[o]===e)}},function(e,t,n){"use strict";var r=n(6),o=n(13);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},function(e,t,n){var r=n(60),o=n(1)("iterator"),i=n(18);e.exports=n(0).getIteratorMethod=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},function(e,t,n){var r=n(23),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},e(i)}catch(e){}return n}},function(e,t,n){n(63),e.exports=n(0).Object.keys},function(e,t,n){var r=n(10),o=n(14);n(64)("keys",(function(){return function(e){return o(r(e))}}))},function(e,t,n){var r=n(4),o=n(0),i=n(8);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i((function(){n(1)})),"Object",a)}},function(e,t,n){var r=n(66);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(68).default)("4e38e324",r,!0,{})},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(30),o=n.n(r),i=n(31),a=n(32),s=n.n(a),u=n(11),l=n.n(u);function c(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function f(e,t,n,r,o,i,a,s){var u=typeof(e=e||{}).default;"object"!==u&&"function"!==u||(e=e.default);var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var f=c.render;c.render=function(e,t){return l.call(t),f(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}var p=f({props:{showDoubleQuotes:Boolean,parentData:{type:[String,Number,Boolean,Array,Object],default:null},data:{type:[String,Number,Boolean],default:""},showComma:Boolean,currentKey:{type:[Number,String],default:""},customValueFormatter:{type:Function,default:null}},computed:{valueClass:function(){return"vjs-value vjs-value__"+this.dataType},dataType:function(){return c(this.data)}},methods:{defaultFormatter:function(e){var t=e+"";return"string"===this.dataType&&(t='"'+t+'"'),t},customFormatter:function(e){return this.customValueFormatter?this.customValueFormatter(e,this.currentKey,this.parentData,this.defaultFormatter(e)):this.defaultFormatter(e)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default"),e._v(" "),e.customValueFormatter?n("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.customFormatter(e.data))}}):n("span",{class:e.valueClass},[e._v(e._s(e.defaultFormatter(e.data)))]),e.showComma?n("span",[e._v(",")]):e._e()],2)}),[],!1,null,null,null).exports,d=f({props:{value:{type:Boolean,default:!1}},data:function(){return{focus:!1}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["vjs-checkbox",e.value?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[n("span",{staticClass:"vjs-checkbox__inner"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"vjs-checkbox__original",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var n=e.model,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=e._i(n,null);r.checked?i<0&&(e.model=n.concat([null])):i>-1&&(e.model=n.slice(0,i).concat(n.slice(i+1)))}else e.model=o},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}})])}),[],!1,null,null,null).exports,h=f({props:{path:{type:String,default:""},value:{type:String,default:""}},data:function(){return{focus:!1}},computed:{currentPath:function(){return this.path},model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{change:function(){this.$emit("change",this.model)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["vjs-radio",e.model===e.currentPath?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[n("span",{staticClass:"vjs-radio__inner"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"vjs-radio__original",attrs:{type:"radio"},domProps:{value:e.currentPath,checked:e._q(e.model,e.currentPath)},on:{change:[function(t){e.model=e.currentPath},e.change],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}})])}),[],!1,null,null,null).exports,v={props:{visible:{required:!0,type:Boolean},data:{required:!0},showComma:Boolean,collapsedOnClickBrackets:Boolean},computed:{dataVisiable:{get:function(){return this.visible},set:function(e){this.collapsedOnClickBrackets&&this.$emit("update:visible",e)}}},methods:{toggleBrackets:function(){this.dataVisiable=!this.dataVisiable},bracketsFormatter:function(e){return this.showComma?e+",":e}}},m=f({mixins:[v],props:{showLength:Boolean},methods:{closedBracketsGenerator:function(e){var t=Array.isArray(e)?"[...]":"{...}";return this.bracketsFormatter(t)},lengthGenerator:function(e){return" // "+(Array.isArray(e)?e.length+" items":l()(e).length+" keys")}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default"),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.dataVisiable,expression:"dataVisiable"}],staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n    "+e._s(Array.isArray(e.data)?"[":"{")+"\n  ")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.dataVisiable,expression:"!dataVisiable"}]},[n("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n      "+e._s(e.closedBracketsGenerator(e.data))+"\n    ")]),e._v(" "),e.showLength?n("span",{staticClass:"vjs-comment"},[e._v("\n      "+e._s(e.lengthGenerator(e.data))+"\n    ")]):e._e()])],2)}),[],!1,null,null,null).exports,y=f({mixins:[v]},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataVisiable,expression:"dataVisiable"}]},[n("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n    "+e._s(e.bracketsFormatter(Array.isArray(e.data)?"]":"}"))+"\n  ")])])}),[],!1,null,null,null),b=f({name:"VueJsonPretty",components:{SimpleText:p,VueCheckbox:d,VueRadio:h,BracketsLeft:m,BracketsRight:y.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},path:{type:String,default:"root"},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:function(){return""}},pathSelectable:{type:Function,default:function(){return!0}},highlightMouseoverNode:{type:Boolean,default:!1},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null},parentData:{type:[String,Number,Boolean,Array,Object],default:null},currentDeep:{type:Number,default:1},currentKey:{type:[Number,String],default:""}},data:function(){return{visible:this.currentDeep<=this.deep,isMouseover:!1,currentCheckboxVal:!!Array.isArray(this.value)&&this.value.includes(this.path)}},computed:{model:{get:function(){var e="multiple"===this.selectableType?[]:"single"===this.selectableType?"":null;return this.value||e},set:function(e){this.$emit("input",e)}},lastKey:function(){if(Array.isArray(this.parentData))return this.parentData.length-1;if(this.isObject(this.parentData)){var e=l()(this.parentData);return e[e.length-1]}return""},notLastKey:function(){return this.currentKey!==this.lastKey},selectable:function(){return this.pathSelectable(this.path,this.data)&&(this.isMultiple||this.isSingle)},isMultiple:function(){return"multiple"===this.selectableType},isSingle:function(){return"single"===this.selectableType},isSelected:function(){return this.isMultiple?this.model.includes(this.path):!!this.isSingle&&this.model===this.path},prettyKey:function(){return this.showDoubleQuotes?'"'+this.currentKey+'"':this.currentKey},propsError:function(){return this.selectableType&&!this.selectOnClickNode&&!this.showSelectController?"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.":""}},watch:{deep:function(e){this.visible=this.currentDeep<=e},propsError:{handler:function(e){if(e)throw new Error("[vue-json-pretty] "+e)},immediate:!0}},methods:{handleValueChange:function(e){var t=this;if(!this.isMultiple||"checkbox"!==e&&"tree"!==e){if(this.isSingle&&("radio"===e||"tree"===e)&&this.model!==this.path){var n=this.model,r=this.path;this.model=r,this.$emit("change",r,n)}}else{var o=this.model.findIndex((function(e){return e===t.path})),i=[].concat(s()(this.model));-1!==o?this.model.splice(o,1):this.model.push(this.path),"checkbox"!==e&&(this.currentCheckboxVal=!this.currentCheckboxVal),this.$emit("change",this.model,i)}},handleClick:function(e){e._uid&&e._uid!==this._uid||(e._uid=this._uid,this.$emit("click",this.path,this.data),this.selectable&&this.selectOnClickNode&&this.handleValueChange("tree"))},handleItemClick:function(e,t){this.$emit("click",e,t)},handleItemChange:function(e,t){this.selectable&&this.$emit("change",e,t)},handleMouseover:function(){this.highlightMouseoverNode&&(this.selectable||""===this.selectableType)&&(this.isMouseover=!0)},handleMouseout:function(){this.highlightMouseoverNode&&(this.selectable||""===this.selectableType)&&(this.isMouseover=!1)},isObject:function(e){return"object"===c(e)},getChildPath:function(e){return this.path+(Array.isArray(this.data)?"["+e+"]":e.includes(".")?'["'+e+'"]':"."+e)}},errorCaptured:function(){return!1}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"vjs-tree":!0,"has-selectable-control":e.isMultiple||e.showSelectController,"is-root":1===e.currentDeep,"is-selectable":e.selectable,"is-selected":e.isSelected,"is-highlight-selected":e.isSelected&&e.highlightSelectedNode,"is-mouseover":e.isMouseover},on:{click:e.handleClick,mouseover:function(t){return t.stopPropagation(),e.handleMouseover(t)},mouseout:function(t){return t.stopPropagation(),e.handleMouseout(t)}}},[e.showSelectController&&e.selectable?[e.isMultiple?n("vue-checkbox",{on:{change:function(t){return e.handleValueChange("checkbox")}},model:{value:e.currentCheckboxVal,callback:function(t){e.currentCheckboxVal=t},expression:"currentCheckboxVal"}}):e.isSingle?n("vue-radio",{attrs:{path:e.path},on:{change:function(t){return e.handleValueChange("radio")}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}):e._e()]:e._e(),e._v(" "),Array.isArray(e.data)||e.isObject(e.data)?[n("brackets-left",{attrs:{visible:e.visible,data:e.data,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,"show-comma":e.notLastKey},on:{"update:visible":function(t){e.visible=t}}},[e.currentDeep>1&&!Array.isArray(e.parentData)?n("span",{staticClass:"vjs-key"},[e._v("\n        "+e._s(e.prettyKey)+":\n      ")]):e._e()]),e._v(" "),e._l(e.data,(function(t,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],key:r,class:{"vjs-tree__content":!0,"has-line":e.showLine}},[n("vue-json-pretty",{attrs:{"parent-data":e.data,data:t,deep:e.deep,"show-length":e.showLength,"show-double-quotes":e.showDoubleQuotes,"show-line":e.showLine,"highlight-mouseover-node":e.highlightMouseoverNode,"highlight-selected-node":e.highlightSelectedNode,path:e.getChildPath(r),"path-selectable":e.pathSelectable,"selectable-type":e.selectableType,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,"current-key":r,"current-deep":e.currentDeep+1,"custom-value-formatter":e.customValueFormatter},on:{click:e.handleItemClick,change:e.handleItemChange},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)})),e._v(" "),n("brackets-right",{attrs:{visible:e.visible,data:e.data,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,"show-comma":e.notLastKey},on:{"update:visible":function(t){e.visible=t}}})]:n("simple-text",{attrs:{"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-comma":e.notLastKey,"parent-data":e.parentData,data:e.data,"current-key":e.currentKey}},[e.parentData&&e.currentKey&&!Array.isArray(e.parentData)?n("span",{staticClass:"vjs-key"},[e._v("\n      "+e._s(e.prettyKey)+":\n    ")]):e._e()])],2)}),[],!1,null,null,null).exports;n(65),t.default=o()({},b,{version:i.version})},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return d}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},f=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(e,t,n,o){l=n,f=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,n.push(u)}t?h(a=r(e,t)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=v()),t=g.bind(null,r,o,!1),n=g.bind(null,r,o,!0)}else r=v(),t=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function g(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function _(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}));

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9a84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_style_index_0_id_40cec622_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d9e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_style_index_0_id_40cec622_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_style_index_0_id_40cec622_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_style_index_0_id_40cec622_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b321":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b83f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3706");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4e39fe90", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c1c0":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})( true && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "e00b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"20b0e721-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ShaclForm.vue?vue&type=template&id=624d8aee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('form',[_c('div',{class:_vm.mergedOptions.styles.field},[_c('label',{class:_vm.mergedOptions.styles.label},[_vm._v(" Subject URI ")]),_c('div',{class:_vm.mergedOptions.styles.inputColumn},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.subjectUri),expression:"subjectUri"}],class:_vm.mergedOptions.styles.input,domProps:{"value":(_vm.subjectUri)},on:{"input":function($event){if($event.target.composing){ return; }_vm.subjectUri=$event.target.value}}})])]),_c('div',{class:_vm.mergedOptions.styles.field},[_c('label',{class:_vm.mergedOptions.styles.label},[_vm._v(" Subject Template ")]),_c('div',{class:_vm.mergedOptions.styles.inputColumn},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.subjectTemplate),expression:"subjectTemplate"}],class:_vm.mergedOptions.styles.input,domProps:{"value":(_vm.subjectTemplate)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.subjectTemplate=$event.target.value},_vm.onUpdate]}})])]),(_vm.shape)?_c('form-group',{attrs:{"subject":_vm.subject,"shape":_vm.shape,"shapesStore":_vm.shapesStore},on:{"input":_vm.onUpdate},model:{value:(_vm.quads),callback:function ($$v) {_vm.quads=$$v},expression:"quads"}}):_vm._e()],1),_c('div',[_vm._v(" "+_vm._s(_vm.keys)+" ")]),_vm._v("> ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/ShaclForm.vue?vue&type=template&id=624d8aee&scoped=true&

// EXTERNAL MODULE: ./node_modules/merge/merge.js
var merge = __webpack_require__("c1c0");
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: external {"commonjs":"rdflib","commonjs2":"rdflib","root":"$rdf"}
var external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_ = __webpack_require__("fd3a");

// EXTERNAL MODULE: external {"commonjs":"shacl","commonjs2":"shacl","root":"SHACLValidator"}
var external_commonjs_shacl_commonjs2_shacl_root_SHACLValidator_ = __webpack_require__("5d49");
var external_commonjs_shacl_commonjs2_shacl_root_SHACLValidator_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_shacl_commonjs2_shacl_root_SHACLValidator_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"20b0e721-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormGroup.vue?vue&type=template&id=0356c697&scoped=true&
var FormGroupvue_type_template_id_0356c697_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.propertyConstraints),function(cons,idx){return _c('form-input',{key:idx,attrs:{"subject":_vm.subject,"propertyShapeNode":cons.paramValue,"shapesStore":_vm.shapesStore},on:{"input":_vm.onInput},model:{value:(_vm.quads[idx]),callback:function ($$v) {_vm.$set(_vm.quads, idx, $$v)},expression:"quads[idx]"}})}),1)}
var FormGroupvue_type_template_id_0356c697_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormGroup.vue?vue&type=template&id=0356c697&scoped=true&

// EXTERNAL MODULE: ./src/components/FormInput.vue + 10 modules
var FormInput = __webpack_require__("4af8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//


const SHACL = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://www.w3.org/ns/shacl#');
const RDF = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
/* harmony default export */ var FormGroupvue_type_script_lang_js_ = ({
  name: 'FromGroup',
  props: ['shape', // Shape instance
  'subject', // subject of the instance being edited
  'shapesStore'],

  data() {
    return {
      quads: []
    };
  },

  beforeCreate: function () {
    this.$options.components.FormInput = __webpack_require__("4af8").default;
  },
  computed: {
    propertyConstraints() {
      return this.shape.constraints.filter(cons => {
        return cons.component.node.equals(SHACL('PropertyConstraintComponent'));
      });
    },

    targetClass() {
      return external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["namedNode"]('http://www.w3.org/ns/r2rml#TriplesMap'); // implicit class target
      // if (this.shape.context.$shapes.query().match(this.shape.shapeNode, 'rdf:type', 'rdfs:Class').hasSolution())
      //   return this.shape.shapeNode
      // // class-based target
      // return this.shape.context.$shapes.query().getObject(this.shape.shapeNode, 'sh:targetClass')
    }

  },
  methods: {
    onInput() {
      const quads = this.quads.flat().filter(elm => elm);

      if (this.targetClass) {
        const st = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](this.subject, RDF('type'), this.targetClass);
        quads.push(st);
      }

      this.$emit('input', quads);
    }

  },
  components: {
    FormInput: FormInput["default"]
  }
});
// CONCATENATED MODULE: ./src/components/FormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormGroupvue_type_script_lang_js_ = (FormGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/FormGroup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FormGroupvue_type_script_lang_js_,
  FormGroupvue_type_template_id_0356c697_scoped_true_render,
  FormGroupvue_type_template_id_0356c697_scoped_true_staticRenderFns,
  false,
  null,
  "0356c697",
  null
  
)

/* harmony default export */ var FormGroup = (component.exports);
// EXTERNAL MODULE: ./src/lib/options.js
var options = __webpack_require__("7bd8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ShaclForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const RR = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://www.w3.org/ns/r2rml#'); // const NGSI = new $rdf.Namespace('https://uri.fiware.org/ns/data-models#')

const RML = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://semweb.mmlab.be/ns/rml#'); // const RL = new $rdf.Namespace('http://example.org/rules/')

const QL = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://semweb.mmlab.be/ns/ql#');
const ShaclFormvue_type_script_lang_js_RDF = new external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Namespace"]('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
/* harmony default export */ var ShaclFormvue_type_script_lang_js_ = ({
  name: 'ShaclForm',
  props: {
    shapesGraph: Object,
    shapesGraphText: String,
    targetClass: String,
    options: Object,
    endpointData: Object,
    iteratorText: String,
    filetype: String
  },

  data() {
    return {
      subjectUri: null,
      quads: [],
      mergedOptions: options["a" /* default */],
      validator: new external_commonjs_shacl_commonjs2_shacl_root_SHACLValidator_default.a(),
      validationResults: [],
      subjectTemplate: ''
    };
  },

  provide() {
    return {
      shapesGraph: this.validator.shapesGraph,
      validationResults: this.validationResults,
      options: this.mergedOptions
    };
  },

  watch: {
    shapesGraphText: {
      immediate: true,

      handler(newValue) {
        this.validator.updateShapesGraph(newValue, this.mergedOptions.format, () => {
          this.onLoad();
        });
      }

    },
    shapesGraph: {
      deep: true,

      handler(newValue) {
        this.validator.updateShapesGraphRdfModel(newValue, () => {
          this.onLoad();
        });
      }

    },
    options: {
      deep: true,
      immediate: true,

      handler(newOptions) {
        merge_default.a.recursive(options["a" /* default */], newOptions);
      }

    },
    targetClass: {
      deep: true,
      immediate: true,

      handler() {
        this.quads = [];
        this.onUpdate();
      }

    }
  },
  computed: {
    subject() {
      try {
        return external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["namedNode"](this.subjectUri);
      } catch (e) {
        return null;
      }
    },

    currentNodeShape() {
      return null;
    },

    shapeNode() {
      return this.targetClass ? external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["namedNode"](this.targetClass) : null;
    },

    shape() {
      return this.shapeNode ? this.validator.shapesGraph.getShape(this.shapeNode) : null;
    },

    keys() {
      return Object.keys(this.endpointData);
    },

    defaultHeaders() {
      let r = [];
      const blankNode4 = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]();
      const blankNode5 = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]();
      const blankNode6 = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]();
      const blankNode8 = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["blankNode"]();
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](this.subject, RML('logicalSource'), blankNode4));
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode4, RML('source'), external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["literal"]('data.json')));

      switch (this.filetype) {
        case 'json':
          r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode4, RML('referenceFormulation'), QL('JSONPath')));
          break;

        default:
          r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode4, RML('referenceFormulation'), QL('JSONPath')));
      }

      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode4, RML('iterator'), external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["literal"](this.iteratorText)));
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](this.subject, RR('subjectMap'), blankNode5));
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode5, RR('template'), external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["literal"](this.subjectTemplate)));
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](this.subject, RR('predicateObjectMap'), blankNode6));
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode6, RR('predicate'), ShaclFormvue_type_script_lang_js_RDF('type')));
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode6, RR('objectMap'), blankNode8));
      r.push(external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["quad"](blankNode8, RR('constant'), this.targetClass));
      return r;
    },

    shapesStore() {
      let uri = 'https://example.org/resource.ttl';
      let mimeType = 'text/turtle';
      let store = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["graph"]();

      try {
        external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["parse"](this.shapesGraphText, store, uri, mimeType);
      } catch (err) {
        console.log(err);
      }

      return store;
    }

  },
  methods: {
    onUpdate() {
      const graph = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["graph"]();

      if (this.subject) {
        graph.namespaces = Object.assign({}, this.validator.$shapes.store.namespaces);
        graph.addAll(this.defaultHeaders);
        graph.addAll(this.quads);
      }

      this.$emit('update', graph);
    },

    onLoad() {
      const shapes = this.validator.shapesGraph.getShapesWithTarget().filter(shape => {
        const uri = shape.shapeNode.value;
        return !uri.startsWith('http://datashapes.org/dash#') && !uri.startsWith('http://www.w3.org/ns/shacl#');
      }).map(shape => {
        return shape.shapeNode.value;
      });
      this.$emit('load', shapes);
    },

    validate() {
      return new Promise((resolve, reject) => {
        const graph = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["graph"]();
        graph.addAll(this.quads);
        this.validator.updateDataGraphRdfModel(graph, (err, report) => {
          if (err) {
            reject(err);
          } else {
            this.validationResults.splice(0, this.validationResults.length);
            this.validationResults.push(...report.results());
            resolve(report.results());
          }
        });
      });
    }

  },
  components: {
    FormGroup: FormGroup
  }
});
// CONCATENATED MODULE: ./src/ShaclForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ShaclFormvue_type_script_lang_js_ = (ShaclFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/ShaclForm.vue





/* normalize component */

var ShaclForm_component = Object(componentNormalizer["a" /* default */])(
  src_ShaclFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "624d8aee",
  null
  
)

/* harmony default export */ var ShaclForm = __webpack_exports__["default"] = (ShaclForm_component.exports);

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"20b0e721-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ShaclMapper.vue?vue&type=template&id=497555ad&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"ShaclMapper"}},[_c('div',{staticClass:"container"},[_c('form',[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Target")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.targetClass),expression:"targetClass"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.targetClass=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.targetShapes),function(uri){return _c('option',{domProps:{"value":uri}},[_vm._v(_vm._s(uri))])}),0)])]),_c('div',{class:_vm.mergedOptions.styles.field},[_c('label',{class:_vm.mergedOptions.styles.label,attrs:{"for":"cars"}},[_vm._v("Filetype")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.filetype),expression:"filetype"}],attrs:{"id":"filetypelist","name":"filetypelist","form":"filetyplist"},on:{"input":_vm.onUpdate,"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.filetype=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"json"}},[_vm._v("Json")])])]),_c('div',{class:_vm.mergedOptions.styles.field},[_c('label',{class:_vm.mergedOptions.styles.label},[_vm._v(" Iterator ")]),_c('div',{class:_vm.mergedOptions.styles.inputColumn},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.iteratorText),expression:"iteratorText"}],class:_vm.mergedOptions.styles.input,domProps:{"value":(_vm.iteratorText)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.iteratorText=$event.target.value},_vm.onUpdate]}})])]),_c('div',{class:_vm.mergedOptions.styles.field},[_c('div',{staticClass:"form-check"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.toggleEndpoint),expression:"toggleEndpoint"}],staticClass:"form-check-input",attrs:{"type":"checkbox","id":"exampleCheck1"},domProps:{"checked":Array.isArray(_vm.toggleEndpoint)?_vm._i(_vm.toggleEndpoint,null)>-1:(_vm.toggleEndpoint)},on:{"change":function($event){var $$a=_vm.toggleEndpoint,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.toggleEndpoint=$$a.concat([$$v]))}else{$$i>-1&&(_vm.toggleEndpoint=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.toggleEndpoint=$$c}}}}),_c('label',{staticClass:"form-check-label",attrs:{"for":"exampleCheck1"}},[_vm._v("Toggle Endpoint")])])]),_c('hr'),_c('div',{staticClass:"row"},[(_vm.toggleEndpoint)?_c('div',{staticClass:"col-sm"},[_c('vue-json-pretty',{attrs:{"path":'res',"data":_vm.endpointData}})],1):_vm._e(),_c('div',{staticClass:"col-sm"},[_vm._m(0),_c('div',{staticClass:"tab-content",attrs:{"id":"myTabContent"}},[_c('div',{staticClass:"tab-pane show active",attrs:{"id":"form","role":"tabpanel","aria-labelledby":"form-tab"}},[_c('shacl-form',{ref:"shaclForm",attrs:{"shapesGraphText":_vm.shapesGraphText,"targetClass":_vm.targetClass,"targetShapes":_vm.targetShapes,"options":_vm.options,"endpointData":_vm.endpointdata,"iteratorText":_vm.iteratorText,"filetype":_vm.filetype},on:{"update":_vm.onUpdate,"load":_vm.onLoad}}),_c('button',{staticClass:"btn btn-warning",on:{"click":function($event){$event.preventDefault();return _vm.validate($event)}}},[_vm._v(" Validate ")])],1),_c('div',{staticClass:"tab-pane",attrs:{"id":"shapes","role":"tabpanel","aria-labelledby":"shapes-tab"}},[_c('div',{staticClass:"card text-left"},[_c('div',{staticClass:"card-body"},[_c('pre',{domProps:{"textContent":_vm._s(_vm.shapesGraphText)}})])])]),_c('div',{staticClass:"tab-pane",attrs:{"id":"data","role":"tabpanel","aria-labelledby":"data-tab"}},[_c('div',{staticClass:"card text-left"},[_c('div',{staticClass:"card-body"},[_c('pre',{domProps:{"textContent":_vm._s(_vm.dataText)}})])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav nav-tabs",attrs:{"id":"myTab","role":"tablist"}},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"id":"home-tab","data-toggle":"tab","href":"#form","role":"tab","aria-controls":"home","aria-selected":"true"}},[_vm._v("Form")])]),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"id":"profile-tab","data-toggle":"tab","href":"#shapes","role":"tab","aria-controls":"profile","aria-selected":"false"}},[_vm._v("Shapes")])]),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"id":"contact-tab","data-toggle":"tab","href":"#data","role":"tab","aria-controls":"contact","aria-selected":"false"}},[_vm._v("Data")])])])}]


// CONCATENATED MODULE: ./src/ShaclMapper.vue?vue&type=template&id=497555ad&

// EXTERNAL MODULE: external {"commonjs":"rdflib","commonjs2":"rdflib","root":"$rdf"}
var external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_ = __webpack_require__("fd3a");

// EXTERNAL MODULE: ./src/ShaclForm.vue + 9 modules
var ShaclForm = __webpack_require__("e00b");

// EXTERNAL MODULE: ./node_modules/vue-json-pretty/lib/vue-json-pretty.js
var vue_json_pretty = __webpack_require__("838b");
var vue_json_pretty_default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty);

// EXTERNAL MODULE: ./node_modules/vue-json-pretty/lib/styles.css
var styles = __webpack_require__("b83f");

// EXTERNAL MODULE: ./src/lib/options.js
var options = __webpack_require__("7bd8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ShaclMapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var ShaclMappervue_type_script_lang_js_ = ({
  name: 'ShaclMapper',
  props: {
    shapesGraphText: String,
    options: Object,
    endpointData: Object
  },

  data() {
    return {
      shapeFileUri: document.location.origin + '/ngsi.ttl',
      mergedOptions: options["a" /* default */],
      targetClass: '',
      dataText: '',
      iteratorText: '$',
      filetype: 'json',
      shapesGraph: external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["graph"](),
      targetShapes: [],
      endpointdata: {},
      url: 'https://data.stad.gent/api/records/1.0/search/?dataset=donkey-republic-deelfietsen-stations-locaties&q=',
      toggleEndpoint: true
    };
  },

  mounted() {},

  methods: {
    validate() {
      this.$refs.shaclForm.validate();
    },

    onUpdate(graph) {
      const serializer = external_commonjs_rdflib_commonjs2_rdflib_root_$rdf_["Serializer"](graph);
      this.dataText = serializer.statementsToN3(graph.statements);
    },

    onLoad(shapes) {
      this.targetShapes = shapes;
    }

  },
  components: {
    ShaclForm: ShaclForm["default"],
    VueJsonPretty: vue_json_pretty_default.a
  }
});
// CONCATENATED MODULE: ./src/ShaclMapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ShaclMappervue_type_script_lang_js_ = (ShaclMappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/ShaclMapper.vue?vue&type=style&index=0&lang=css&
var ShaclMappervue_type_style_index_0_lang_css_ = __webpack_require__("4868");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/ShaclMapper.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ShaclMappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ShaclMapper = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (ShaclMapper);



/***/ }),

/***/ "fc8c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b321");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("35548393", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fd3a":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fd3a__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=VueShaclMapper.umd.js.map