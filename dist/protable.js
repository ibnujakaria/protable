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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"normal\":{\"classes\":[\"table\",\"table-striped\",\"table-bordered\"],\"thead\":{\"thClasses\":[\"align-middle\"]},\"pagination\":{\"containerElement\":\"ul\",\"containerClasses\":[\"pagination\"],\"btnWrapper\":\"li\",\"btnWrapperClasses\":[\"page-item\"],\"btnWrapperActiveClasses\":[\"active\"],\"btnClasses\":[\"page-link\"],\"rowsPerPage\":{\"selectClasses\":[\"form-control\"]}},\"search\":{\"classes\":[\"form-control\"]}},\"sm\":{\"classes\":[\"table\",\"table-sm\",\"table-striped\",\"table-bordered\"],\"thead\":{\"thClasses\":[\"align-middle\"]},\"pagination\":{\"containerElement\":\"ul\",\"containerClasses\":[\"pagination\",\"pagination-sm\"],\"btnWrapper\":\"li\",\"btnWrapperClasses\":[\"page-item\"],\"btnWrapperActiveClasses\":[\"active\"],\"btnClasses\":[\"page-link\"],\"rowsPerPage\":{\"selectClasses\":[\"form-control\",\"form-control-sm\"]}},\"search\":{\"classes\":[\"form-control\",\"form-control-sm\"]}}}");

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"classes\":[\"ui\",\"celled\",\"striped\",\"table\"],\"pagination\":{\"containerClasses\":[\"ui\",\"pagination\",\"menu\"],\"btnElement\":\"a\",\"btnClasses\":[\"item\"],\"rowsPerPage\":{\"selectClasses\":[\"ui\",\"dropdown\"]}},\"search\":{\"wrapperElement\":\"div\",\"wrapperClasses\":[\"ui\",\"input\"]}}");

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"pagination\":{\"containerElement\":\"ul\",\"containerClasses\":[\"pagination\"],\"btnWrapper\":\"li\",\"btnElement\":\"a\",\"btnDisabledClasses\":[\"disabled\"],\"rowsPerPage\":{\"selectClasses\":[\"margin-0\"]}},\"search\":{\"classes\":[\"margin-0\"]}}");

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = JSON.parse("{\"classes\":[\"w-full\",\"table-auto\"],\"thead\":{\"thClasses\":[\"px-3\",\"py-2\",\"bg-gray-100\",\"border\"]},\"tbody\":{\"tdClasses\":[\"bg-even-200\",\"odd:bg-gray-200\",\"px-3\",\"py-2\",\"border\"]},\"tfoot\":{\"tdClasses\":[\"px-3\",\"py-2\",\"bg-gray-100\",\"border\"]},\"pagination\":{\"containerClasses\":[\"flex\"],\"btnClasses\":[\"px-2\",\"py-1\",\"border\"],\"btnActiveClasses\":[\"bg-gray-100\"],\"btnDisabledClasses\":[\"text-gray-500\"],\"rowsPerPage\":{\"selectClasses\":[\"px-2\",\"py-1\",\"border\"]}},\"search\":{\"classes\":[\"px-2\",\"py-1\",\"border\"]}}");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "fromArray", function() { return /* reexport */ from_array; });
__webpack_require__.d(__webpack_exports__, "fromTable", function() { return /* reexport */ from_dom_table; });
__webpack_require__.d(__webpack_exports__, "templateOptions", function() { return /* binding */ templateOptions; });

// CONCATENATED MODULE: ./src/components/table/Td.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Td = /*#__PURE__*/function () {
  function Td(_ref) {
    var key = _ref.key,
        child = _ref.child,
        options = _ref.options;

    _classCallCheck(this, Td);

    this.key = key;

    if (child instanceof Node) {
      this.buildDOMFromNode(child);
    } else {
      this.buildDOMFromString(child);
    }

    this.options = _objectSpread({
      attrs: {
        colspan: 1
      },
      style: {},
      searchable: true
    }, options);

    this._applyAttributes();

    this._applyClasses();

    this._applyStyles();
  }

  _createClass(Td, [{
    key: "buildDOMFromString",
    value: function buildDOMFromString(child) {
      this.$dom = document.createElement('td');
      this.$dom.innerHTML = child === null || child === undefined ? '-' : child;
    }
  }, {
    key: "buildDOMFromNode",
    value: function buildDOMFromNode(node) {
      this.$dom = document.createElement('td');
      this.$dom.appendChild(node);
    }
  }, {
    key: "_applyClasses",
    value: function _applyClasses() {
      var _this$options$classes;

      if ((_this$options$classes = this.options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
        var _this$$dom$classList;

        (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, _toConsumableArray(this.options.classes));
      }
    }
  }, {
    key: "_applyAttributes",
    value: function _applyAttributes() {
      for (var attr in this.options.attrs) {
        this.$dom.setAttribute(attr, this.options.attrs[attr]);
      }
    }
  }, {
    key: "_applyStyles",
    value: function _applyStyles() {
      for (var style in this.options.style) {
        this.$dom.style[style] = this.options.style[style];
      }
    }
  }]);

  return Td;
}();

/* harmony default export */ var table_Td = (Td);
// CONCATENATED MODULE: ./src/components/table/Th.js
function Th_toConsumableArray(arr) { return Th_arrayWithoutHoles(arr) || Th_iterableToArray(arr) || Th_unsupportedIterableToArray(arr) || Th_nonIterableSpread(); }

function Th_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Th_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Th_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Th_arrayLikeToArray(o, minLen); }

function Th_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Th_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Th_arrayLikeToArray(arr); }

function Th_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Th_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Th_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Th_ownKeys(Object(source), true).forEach(function (key) { Th_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Th_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Th_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Th_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Th_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Th_createClass(Constructor, protoProps, staticProps) { if (protoProps) Th_defineProperties(Constructor.prototype, protoProps); if (staticProps) Th_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Th Options
 * 
 * @typedef { Object } Th.Options
 * @property { Object } attrs - DOM attributes
 * @property { Number } attrs.colspan - colspan of this th
 */

/**
 * Th class
 *
 * @class Th
 */

var Th = /*#__PURE__*/function () {
  /**
   * Creates an instance of Th.
   * 
   * @param { Object } payload
   * @param { string } payload.key
   * @param { string } payload.label
   * @param { ProTable } payload.proTable
   * @param { Th.Options } payload.options
   * @memberof Th
   */
  function Th(_ref) {
    var key = _ref.key,
        label = _ref.label,
        proTable = _ref.proTable,
        options = _ref.options;

    Th_classCallCheck(this, Th);

    this.key = key;
    this.label = label;
    this.proTable = proTable;
    this.$dom = document.createElement('th');
    /**
     * @type { Th.Options }
     */

    this.options = Th_objectSpread({
      attrs: {
        colspan: 1
      },
      orderabel: true
    }, options);

    this._createContainer();

    this._createSpan();

    this._applyAttributes();

    this._applyClasses();

    this._applyOrderable();
  }

  Th_createClass(Th, [{
    key: "_createContainer",
    value: function _createContainer() {
      this.$container = document.createElement('div');
      this.$container.style.display = 'flex';
      this.$container.style.justifyContent = 'space-between';
      this.$container.style.alignItems = 'center';
      this.$dom.appendChild(this.$container);
    }
  }, {
    key: "_applyAttributes",
    value: function _applyAttributes() {
      for (var attr in this.options.attrs) {
        this.$dom.setAttribute(attr, this.options.attrs[attr]);
      }
    }
  }, {
    key: "_applyClasses",
    value: function _applyClasses() {
      var _this$options$classes;

      if ((_this$options$classes = this.options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
        var _this$$dom$classList;

        (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, Th_toConsumableArray(this.options.classes));
      }
    }
  }, {
    key: "_createSpan",
    value: function _createSpan() {
      this.$spanLabel = document.createElement('span');
      this.$spanLabel.innerHTML = this.label || '-';
      this.$container.appendChild(this.$spanLabel);
    }
  }, {
    key: "_isOrderable",
    value: function _isOrderable() {
      return this.options.orderable && this.options.attrs.colspan === 1;
    }
  }, {
    key: "_applyOrderable",
    value: function _applyOrderable() {
      var _this = this;

      if (!this._isOrderable()) {
        return;
      }

      this.$container.style.cursor = 'pointer'; // caret top

      this.$spanTop = document.createElement('span');
      this.$spanTop.innerHTML = '▴';
      this.$spanTop.style.marginBottom = '-.3rem'; // caret bottom

      this.$spanBottom = document.createElement('span');
      this.$spanBottom.innerHTML = '▾';
      this.$spanBottom.style.marginTop = '-.3rem';
      this.$orderDom = document.createElement('div');
      this.$orderDom.appendChild(this.$spanTop);
      this.$orderDom.appendChild(this.$spanBottom);
      this.$orderDom.style.display = 'inline-flex';
      this.$orderDom.style.flexDirection = 'column';
      this.$orderDom.style.justifyContent = 'center';
      this.$orderDom.style.fontSize = '80%';
      this.$orderDom.style.height = '1rem';
      this.$orderDom.style.opacity = 0.3;
      this.$orderDom.style.marginLeft = '.5rem';
      this.$orderDom.style.userSelect = 'none';
      this.$container.appendChild(this.$orderDom);
      this.$dom.addEventListener('click', function (e) {
        _this._toggleOrder();
      });
    }
  }, {
    key: "_toggleOrder",
    value: function _toggleOrder() {
      var order = this.proTable.options.order;
      var payload = {
        key: this.key,
        direction: 'asc'
      };

      if (order.key === this.key) {
        payload.direction = order.direction === 'desc' ? 'asc' : 'desc';
      }

      this.proTable.setOrder(payload);
    }
  }, {
    key: "render",
    value: function render() {
      if (this._isOrderable()) {
        var order = this.proTable.options.order;
        this.$spanTop.style.visibility = order.key === this.key && order.direction === 'desc' ? 'hidden' : '';
        this.$spanBottom.style.visibility = order.key === this.key && order.direction === 'asc' ? 'hidden' : '';
      }
    }
  }]);

  return Th;
}();

/* harmony default export */ var table_Th = (Th);
// CONCATENATED MODULE: ./src/components/table/Tr.js
function Tr_toConsumableArray(arr) { return Tr_arrayWithoutHoles(arr) || Tr_iterableToArray(arr) || Tr_unsupportedIterableToArray(arr) || Tr_nonIterableSpread(); }

function Tr_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Tr_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Tr_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tr_arrayLikeToArray(o, minLen); }

function Tr_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Tr_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Tr_arrayLikeToArray(arr); }

function Tr_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Tr_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tr_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tr_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tr_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tr_defineProperties(Constructor, staticProps); return Constructor; }




var Tr_Tr = /*#__PURE__*/function () {
  /**
   * @param { Object } options
   * @param { string[] } options.classes
   */
  function Tr(options) {
    var _this$options, _this$options$classes;

    Tr_classCallCheck(this, Tr);

    this.options = options;
    this.$dom = document.createElement('tr');
    this.childs = []; // apply classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, Tr_toConsumableArray(this.options.classes));
    }
  }

  Tr_createClass(Tr, [{
    key: "addTd",
    value: function addTd(_ref) {
      var key = _ref.key,
          label = _ref.label,
          options = _ref.options;
      var td = new table_Td({
        key: key,
        child: label,
        options: options
      });
      this.childs.push(td);
      this.$dom.appendChild(td.$dom);
    }
  }, {
    key: "pushTd",
    value: function pushTd(td) {
      this.childs.push(td);
      this.$dom.appendChild(td.$dom);
    }
  }, {
    key: "addTds",
    value: function addTds(array) {
      var _this = this;

      // _item = { key, label }
      array.forEach(function (_item) {
        _this.addTd(_item);
      });
      return this;
    }
  }, {
    key: "addTh",
    value: function addTh(column, options) {
      var th = new table_Th(column, options);
      this.childs.push(th);
      this.$dom.appendChild(th.$dom);
    }
  }, {
    key: "pushTh",
    value: function pushTh(th) {
      this.childs.push(th);
      this.$dom.appendChild(th.$dom);
    }
  }, {
    key: "addThs",
    value: function addThs(array) {
      var _this2 = this;

      array.forEach(function (_item) {
        _this2.addTh(_item);
      });
      return this;
    }
  }]);

  return Tr;
}();

/* harmony default export */ var table_Tr = (Tr_Tr);

// CONCATENATED MODULE: ./src/components/table/THead.js
function THead_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function THead_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { THead_ownKeys(Object(source), true).forEach(function (key) { THead_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { THead_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function THead_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function THead_toConsumableArray(arr) { return THead_arrayWithoutHoles(arr) || THead_iterableToArray(arr) || THead_unsupportedIterableToArray(arr) || THead_nonIterableSpread(); }

function THead_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function THead_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return THead_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return THead_arrayLikeToArray(o, minLen); }

function THead_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function THead_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return THead_arrayLikeToArray(arr); }

function THead_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function THead_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function THead_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function THead_createClass(Constructor, protoProps, staticProps) { if (protoProps) THead_defineProperties(Constructor.prototype, protoProps); if (staticProps) THead_defineProperties(Constructor, staticProps); return Constructor; }




/**
 * @typedef { Object } THead.Options
 * @property { string[] } classes - `thead` classes
 * @property { string[] } trClasses - `thead > tr` classes
 * @property { string[] } thClasses - `thead > tr > th` classes
 */

/**
 * @class THead
 * @property { THead.Options } options
 */

var THead_THead = /*#__PURE__*/function () {
  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable
   * @param { THead.Options } payload.options
   * @memberof THead
   * @constructor
   */
  function THead(_ref) {
    var _this = this,
        _this$options,
        _this$options$classes;

    var proTable = _ref.proTable,
        options = _ref.options;

    THead_classCallCheck(this, THead);

    this.proTable = proTable;
    this.options = options;
    this.$dom = document.createElement('thead');
    this.trs = this.generateTrs(this.proTable.columns);

    this.columnsCount = function () {
      return _this.trs[0].childs.map(function (th) {
        return th.options.attrs.colspan;
      }).reduce(function (a, b) {
        return a + b;
      });
    }();

    console.log('trs', this.trs); // apply thead classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, THead_toConsumableArray(this.options.classes));
    } // append child


    this.trs.forEach(function (tr) {
      return _this.$dom.appendChild(tr.$dom);
    });
  }
  /**
   * This function will generate one <tr> tag if its simple.
   * But for complex headers, it will generate more than one <tr> tags.
   * 
   * @param { string[] } columns 
   * @returns { Tr[] } trs
   */


  THead_createClass(THead, [{
    key: "generateTrs",
    value: function generateTrs(columns) {
      var _this$options2;

      var trs = [];

      var _this$generateThs = this.generateThs(columns),
          ths = _this$generateThs.ths,
          childs = _this$generateThs.childs;

      var tr = new table_Tr({
        classes: (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.trClasses
      });
      ths.forEach(function (_th) {
        return tr.pushTh(_th);
      });
      trs.push(tr);
      console.log('childs', childs);

      if (Object.keys(childs).length) {
        trs = trs.concat(this.generateTrs(childs));
      } // add rowspan to th that has not colspan attr
      // and fix colspan as its child


      tr.childs.forEach(function (_th) {
        if (_th.options.attrs.colspan === 1) {
          _th.$dom.setAttribute('rowspan', trs.length);
        }
      });
      return trs;
    }
    /**
     * Generate th elements of the head
     * 
     * @param { Object } columns 
     */

  }, {
    key: "generateThs",
    value: function generateThs(columns) {
      var ths = [];
      var childs = {};

      for (var _key in columns) {
        var _this$options3;

        var _col = columns[_key];
        ths.push(new table_Th({
          key: _key,
          label: _col.label,
          proTable: this.proTable,
          options: {
            classes: (((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.thClasses) || []).concat(_col.classes),
            attrs: {
              colspan: this.getColspan(_col.childs)
            },
            orderable: typeof _col.orderable === 'boolean' ? !!_col.orderable : true
          }
        }));

        if (_col.childs) {
          childs = THead_objectSpread(THead_objectSpread({}, childs), _col.childs);
        }
      }

      return {
        ths: ths,
        childs: childs
      };
    }
    /**
     * Return the count of colspan of a given childs
     * 
     * @param { Object } childs 
     */

  }, {
    key: "getColspan",
    value: function getColspan(childs) {
      if (!childs) {
        return 1;
      }

      var length = Object.keys(childs).length;

      for (var _key in childs) {
        if (childs[_key].childs) {
          length += this.getColspan(childs[_key].childs);
        }
      }

      return length;
    }
  }, {
    key: "render",
    value: function render() {
      this.trs.forEach(function (_tr) {
        _tr.childs.forEach(function (_child) {
          return _child.render();
        });
      });
    }
  }]);

  return THead;
}();

/* harmony default export */ var table_THead = (THead_THead);
// CONCATENATED MODULE: ./src/components/table/TBody.js
function TBody_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TBody_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TBody_ownKeys(Object(source), true).forEach(function (key) { TBody_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TBody_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TBody_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TBody_toConsumableArray(arr) { return TBody_arrayWithoutHoles(arr) || TBody_iterableToArray(arr) || TBody_unsupportedIterableToArray(arr) || TBody_nonIterableSpread(); }

function TBody_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TBody_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TBody_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TBody_arrayLikeToArray(o, minLen); }

function TBody_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function TBody_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TBody_arrayLikeToArray(arr); }

function TBody_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TBody_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TBody_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TBody_createClass(Constructor, protoProps, staticProps) { if (protoProps) TBody_defineProperties(Constructor.prototype, protoProps); if (staticProps) TBody_defineProperties(Constructor, staticProps); return Constructor; }




/**
 * TBody Options
 * 
 * @typedef { Object } TBody.Options
 * @property { string[] } classes - classes of tbody
 * @property { string[] } trClasses - classes of each tr
 * @property { string[] } tdClasses - classes of each td
 */

/**
 * @class TBody
 * @param { TBody.Options } options
 */

var TBody_TBody = /*#__PURE__*/function () {
  /**
   * Creates an instance of TBody.
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable
   * @param { TBody.Options } payload.options
   * @memberof TBody
   */
  function TBody(_ref) {
    var _this$options, _this$options$classes;

    var proTable = _ref.proTable,
        options = _ref.options;

    TBody_classCallCheck(this, TBody);

    this.$dom = document.createElement('tbody');
    this.proTable = proTable;
    this.options = options;
    this.trs = this.generateTrs(); // apply tbody classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, TBody_toConsumableArray(this.options.classes));
    }

    this.render();
  }

  TBody_createClass(TBody, [{
    key: "generateTrs",
    value: function generateTrs() {
      var _this = this;

      var columns = this.proTable.columns;
      var rows = this.proTable.rows;
      var trs = [];
      rows.forEach(function (_row) {
        var _this$options2;

        var tr = new table_Tr({
          classes: (_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.trClasses
        });
        tr.addTds(_this.generateTds(columns, _row));
        trs.push(tr);
      });
      return trs;
    }
    /**
     * Generate object array. The return of this function will next be
     * generated to object Tds
     * 
     * @param { Object } columns 
     * @param { Object[] } _row 
     */

  }, {
    key: "generateTds",
    value: function generateTds(columns, _row) {
      var tds = [];

      for (var _key in columns) {
        var _this$options3;

        /**
         * the corresponding column of this row
         */
        var _col = columns[_key];
        /**
         * Row Content could be an array that consits with 2 items 
         *  - ['content', { classes: [...] }]
         *  - first item is the content
         *  - the second is the options
         * 
         * And could be just a string/Node
         */

        var rowContent = Array.isArray(_row[_key]) ? _row[_key][0] : _row[_key];
        var rowOptions = Array.isArray(_row[_key]) ? _row[_key][1] : {};

        if ((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.tdClasses) {
          var _this$options4;

          rowOptions.classes = (rowOptions.classes || []).concat((_this$options4 = this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.tdClasses);
        } // override content if user defines targetIndex


        if (Number.isInteger(_col.targetIndex)) {
          rowContent = _row[Object.keys(this.proTable.columns)[_col.targetIndex]];
        } // override content if user defines contents callback


        if (this.proTable.options.contents && this.proTable.options.contents[_key]) {
          rowContent = this.proTable.options.contents[_key](rowContent); // check if the callback return is [content, { classes: [...] }]

          if (Array.isArray(rowContent) && rowContent.length > 1) {
            var _rowContent$;

            rowOptions.classes = (rowOptions.classes || []).concat(((_rowContent$ = rowContent[1]) === null || _rowContent$ === void 0 ? void 0 : _rowContent$.classes) || []);
            rowContent = rowContent[0];
          }
        }

        if (_col.childs) {
          // call generateTds recursively
          tds = tds.concat(this.generateTds(_col.childs, _row[_key]));
        } else {
          tds.push({
            key: _key,
            label: rowContent,
            options: TBody_objectSpread(TBody_objectSpread({}, rowOptions), {}, {
              searchable: typeof _col.searchable === 'boolean' ? !!_col.searchable : true
            })
          });
        }
      } // console.log('generateTds', tds)


      return tds;
    }
    /**
     * rendering trs
     *
     * @memberof TBody
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // delete rendered trs
      while (this.$dom.lastChild) {
        this.$dom.removeChild(this.$dom.lastChild);
      }

      var limit = this.proTable.options.limit;
      var page = this.proTable.options.page;
      var start = (page - 1) * limit;
      this.filteredTrs.sort(this._sort.bind(this)).slice(start, this.proTable.options.limit * page).forEach(function (_tr) {
        return _this2.$dom.appendChild(_tr.$dom);
      }); // if there is no result for given keyword

      if (this.filteredTrs.length < 1 && this.proTable.options.keyword) {
        var _this$proTable$option;

        var tr = new table_Tr();
        var td = new table_Td({
          child: ((_this$proTable$option = this.proTable.options.search) === null || _this$proTable$option === void 0 ? void 0 : _this$proTable$option.notFoundText) || 'Not matching records found',
          options: {
            attrs: {
              colspan: this.proTable.thead.columnsCount
            },
            style: {
              textAlign: 'center'
            }
          }
        });
        tr.pushTd(td);
        this.$dom.appendChild(tr.$dom);
      }
    }
  }, {
    key: "_filter",

    /**
     * Filter by Tr
     *
     * @param { Tr } _tr
     * @memberof TBody
     */
    value: function _filter(_tr) {
      var keyword = this.proTable.options.keyword || '';
      return !!_tr.childs.find(function (_child) {
        var _child$$dom, _child$$dom$innerText, _child$$dom$innerText2;

        return _child.options.searchable && (_child === null || _child === void 0 ? void 0 : (_child$$dom = _child.$dom) === null || _child$$dom === void 0 ? void 0 : (_child$$dom$innerText = _child$$dom.innerText) === null || _child$$dom$innerText === void 0 ? void 0 : (_child$$dom$innerText2 = _child$$dom$innerText.toLowerCase()) === null || _child$$dom$innerText2 === void 0 ? void 0 : _child$$dom$innerText2.indexOf(keyword.toLowerCase())) > -1;
      });
    }
  }, {
    key: "_sort",
    value: function _sort(a, b) {
      var order = this.proTable.options.order;

      if (order.key) {
        var tdA = a.childs.find(function (_td) {
          return _td.key === order.key;
        });
        var tdB = b.childs.find(function (_td) {
          return _td.key === order.key;
        }); // check if the value is valid number or not

        var contentA = !isNaN(tdA.$dom.innerText) ? parseFloat(tdA.$dom.innerText) : tdA.$dom.innerText;
        var contentB = !isNaN(tdB.$dom.innerText) ? parseFloat(tdB.$dom.innerText) : tdB.$dom.innerText; // ascending

        if (order.direction === 'asc') {
          return contentA > contentB ? 1 : -1;
        } else {
          return contentA > contentB ? -1 : 1;
        }
      }

      return 0;
    }
  }, {
    key: "filteredTrs",
    get: function get() {
      return this.trs.filter(this._filter.bind(this));
    }
  }]);

  return TBody;
}();

/* harmony default export */ var table_TBody = (TBody_TBody);
// CONCATENATED MODULE: ./src/components/pagination/RowsPerPage.js
function RowsPerPage_toConsumableArray(arr) { return RowsPerPage_arrayWithoutHoles(arr) || RowsPerPage_iterableToArray(arr) || RowsPerPage_unsupportedIterableToArray(arr) || RowsPerPage_nonIterableSpread(); }

function RowsPerPage_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function RowsPerPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RowsPerPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RowsPerPage_arrayLikeToArray(o, minLen); }

function RowsPerPage_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function RowsPerPage_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return RowsPerPage_arrayLikeToArray(arr); }

function RowsPerPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RowsPerPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RowsPerPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RowsPerPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) RowsPerPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) RowsPerPage_defineProperties(Constructor, staticProps); return Constructor; }



var RowsPerPage = /*#__PURE__*/function () {
  /**
   * 
   * @param { ProTable } proTable 
   */
  function RowsPerPage(proTable) {
    RowsPerPage_classCallCheck(this, RowsPerPage);

    this.proTable = proTable;
    this.$dom = document.createElement('div');
    this.$dom.style.display = 'inline-flex';
    this.$dom.style.marginRight = '1rem';
    this.$dom.style.alignItems = 'center';

    this._createSpan();

    this._createSelect();
  }

  RowsPerPage_createClass(RowsPerPage, [{
    key: "_createSpan",
    value: function _createSpan() {
      var _this$proTable$option, _this$proTable$option2, _this$proTable$option3;

      var span = document.createElement('span');
      span.innerText = ((_this$proTable$option = this.proTable.options) === null || _this$proTable$option === void 0 ? void 0 : (_this$proTable$option2 = _this$proTable$option.pagination) === null || _this$proTable$option2 === void 0 ? void 0 : (_this$proTable$option3 = _this$proTable$option2.rowsPerPage) === null || _this$proTable$option3 === void 0 ? void 0 : _this$proTable$option3.text) || 'Rows per page';
      span.style.marginRight = '1rem';
      this.$dom.appendChild(span);
    }
  }, {
    key: "_createSelect",
    value: function _createSelect() {
      var _options$pagination,
          _options$pagination$r,
          _options$pagination2,
          _options$pagination2$,
          _this = this;

      var options = this.proTable.options;
      var selectedLimit = options.limit;
      this.$select = document.createElement('select');
      this.$select.style.width = 'fit-content';

      if ((_options$pagination = options.pagination) === null || _options$pagination === void 0 ? void 0 : (_options$pagination$r = _options$pagination.rowsPerPage) === null || _options$pagination$r === void 0 ? void 0 : _options$pagination$r.selectClasses) {
        var _this$$select$classLi;

        (_this$$select$classLi = this.$select.classList).add.apply(_this$$select$classLi, RowsPerPage_toConsumableArray(options.pagination.rowsPerPage.selectClasses));
      }

      var ranges = ((_options$pagination2 = options.pagination) === null || _options$pagination2 === void 0 ? void 0 : (_options$pagination2$ = _options$pagination2.rowsPerPage) === null || _options$pagination2$ === void 0 ? void 0 : _options$pagination2$.ranges) || [5, 10, 25, 50, 100, 250, 500]; // if selectedLimit doesn't exist in ranges array

      if (!ranges.find(function (_range) {
        return _range === selectedLimit;
      })) {
        ranges.push(selectedLimit);
      }

      ranges.sort(function (a, b) {
        return a - b;
      }).forEach(function (limit) {
        var option = document.createElement('option');
        option.value = limit;
        option.innerText = limit;
        option.selected = parseInt(selectedLimit) === limit;

        _this.$select.appendChild(option);
      });
      this.$select.addEventListener('change', function (e) {
        _this.proTable.setLimit(_this.$select.value);
      });
      this.$dom.appendChild(this.$select);
    }
  }]);

  return RowsPerPage;
}();

/* harmony default export */ var pagination_RowsPerPage = (RowsPerPage);
// CONCATENATED MODULE: ./src/components/pagination/SimplePagination.js
function SimplePagination_toConsumableArray(arr) { return SimplePagination_arrayWithoutHoles(arr) || SimplePagination_iterableToArray(arr) || SimplePagination_unsupportedIterableToArray(arr) || SimplePagination_nonIterableSpread(); }

function SimplePagination_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SimplePagination_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SimplePagination_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SimplePagination_arrayLikeToArray(o, minLen); }

function SimplePagination_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function SimplePagination_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return SimplePagination_arrayLikeToArray(arr); }

function SimplePagination_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SimplePagination_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SimplePagination_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SimplePagination_createClass(Constructor, protoProps, staticProps) { if (protoProps) SimplePagination_defineProperties(Constructor.prototype, protoProps); if (staticProps) SimplePagination_defineProperties(Constructor, staticProps); return Constructor; }




var SimplePagination_SimplePagination = /*#__PURE__*/function () {
  /**
   * Create SimplePagination
   * 
   * @param { ProTable ``} proTable
   * @memberof SimplePagination
   */
  function SimplePagination(proTable) {
    SimplePagination_classCallCheck(this, SimplePagination);

    this.proTable = proTable;
    this.$dom = document.createElement('div');
    this.$dom.style.display = 'flex';
    this.$dom.style.justifyContent = 'flex-end';
    this.$dom.style.alignItems = 'baseline';

    this._buildRowsPerPage();

    this._buildSpan();

    this._buildControls();

    this.render();
  }

  SimplePagination_createClass(SimplePagination, [{
    key: "_buildRowsPerPage",
    value: function _buildRowsPerPage() {
      this.rowsPerPage = new pagination_RowsPerPage(this.proTable);
      this.$dom.appendChild(this.rowsPerPage.$dom);
    }
  }, {
    key: "_buildSpan",
    value: function _buildSpan() {
      this.$span = document.createElement('span');
      this.$span.style.marginRight = '1rem';
      this.$dom.appendChild(this.$span);
    }
  }, {
    key: "_buildControls",
    value: function _buildControls() {
      var options = this.proTable.options;
      this.$controls = document.createElement(options.pagination.containerElement || 'div');
      this.$controls.style.margin = '0';

      if (options.pagination.containerClasses) {
        var _this$$controls$class;

        (_this$$controls$class = this.$controls.classList).add.apply(_this$$controls$class, SimplePagination_toConsumableArray(options.pagination.containerClasses));
      }

      this.$dom.appendChild(this.$controls);

      this._buildPrevButton();

      this._buildNextButton();
    }
  }, {
    key: "_buildNextButton",
    value: function _buildNextButton() {
      var _this = this;

      this.btnNext = this._buildButton('Next');
      this.$controls.appendChild(this.btnNext.$wrapper);
      this.btnNext.$btn.addEventListener('click', function (e) {
        _this.proTable.setPage(_this.proTable.options.page + 1);
      });
    }
  }, {
    key: "_buildPrevButton",
    value: function _buildPrevButton() {
      var _this2 = this;

      this.btnPrev = this._buildButton('Prev');
      this.$controls.appendChild(this.btnPrev.$wrapper);
      this.btnPrev.$btn.addEventListener('click', function (e) {
        _this2.proTable.setPage(_this2.proTable.options.page - 1);
      });
    }
    /**
     * Create DOM button
     * 
     * @returns { Object } object of $btn and $wrapper
     */

  }, {
    key: "_buildButton",
    value: function _buildButton(text) {
      var _options$pagination;

      var options = this.proTable.options;
      var $btn = document.createElement(((_options$pagination = options.pagination) === null || _options$pagination === void 0 ? void 0 : _options$pagination.btnElement) || 'button');
      $btn.innerText = text; // apply classes from options

      if (this.proTable.options.pagination.btnClasses) {
        var _$btn$classList;

        (_$btn$classList = $btn.classList).add.apply(_$btn$classList, SimplePagination_toConsumableArray(this.proTable.options.pagination.btnClasses));
      } // if there is a wrapper


      if (options.pagination.btnWrapper) {
        var $wrapper = document.createElement(options.pagination.btnWrapper);
        $wrapper.appendChild($btn);

        if (options.pagination.btnWrapperClasses) {
          var _$wrapper$classList;

          (_$wrapper$classList = $wrapper.classList).add.apply(_$wrapper$classList, SimplePagination_toConsumableArray(options.pagination.btnWrapperClasses));
        }

        return {
          $wrapper: $wrapper,
          $btn: $btn
        };
      }

      return {
        $btn: $btn,
        $wrapper: $btn
      };
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.proTable.options;
      var limit = options.limit;
      var page = options.page;
      var start = (page - 1) * limit + 1;
      var to = start + limit - 1;
      var totalRows = this.proTable.tbody.filteredTrs.length;
      var lastPage = Math.ceil(totalRows / limit);
      this.$span.innerText = "".concat(start, "-").concat(to > totalRows ? totalRows : to, " of ").concat(totalRows);
      this.btnPrev.$btn.disabled = page === 1;
      this.btnNext.$btn.disabled = page === lastPage;

      if (page === 1) {
        var _options$pagination2, _options$pagination2$;

        this.btnPrev.$wrapper.classList.add('disabled');

        if ((_options$pagination2 = options.pagination) === null || _options$pagination2 === void 0 ? void 0 : (_options$pagination2$ = _options$pagination2.btnDisabledClasses) === null || _options$pagination2$ === void 0 ? void 0 : _options$pagination2$.length) {
          var _this$btnPrev$$btn$cl;

          (_this$btnPrev$$btn$cl = this.btnPrev.$btn.classList).add.apply(_this$btnPrev$$btn$cl, SimplePagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination3, _options$pagination3$;

        this.btnPrev.$wrapper.classList.remove('disabled');

        if ((_options$pagination3 = options.pagination) === null || _options$pagination3 === void 0 ? void 0 : (_options$pagination3$ = _options$pagination3.btnDisabledClasses) === null || _options$pagination3$ === void 0 ? void 0 : _options$pagination3$.length) {
          var _this$btnPrev$$btn$cl2;

          (_this$btnPrev$$btn$cl2 = this.btnPrev.$btn.classList).remove.apply(_this$btnPrev$$btn$cl2, SimplePagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      }

      if (page === lastPage) {
        var _options$pagination4, _options$pagination4$;

        this.btnNext.$wrapper.classList.add('disabled');

        if ((_options$pagination4 = options.pagination) === null || _options$pagination4 === void 0 ? void 0 : (_options$pagination4$ = _options$pagination4.btnDisabledClasses) === null || _options$pagination4$ === void 0 ? void 0 : _options$pagination4$.length) {
          var _this$btnNext$$btn$cl;

          (_this$btnNext$$btn$cl = this.btnNext.$btn.classList).add.apply(_this$btnNext$$btn$cl, SimplePagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination5, _options$pagination5$;

        this.btnNext.$wrapper.classList.remove('disabled');

        if ((_options$pagination5 = options.pagination) === null || _options$pagination5 === void 0 ? void 0 : (_options$pagination5$ = _options$pagination5.btnDisabledClasses) === null || _options$pagination5$ === void 0 ? void 0 : _options$pagination5$.length) {
          var _this$btnNext$$btn$cl2;

          (_this$btnNext$$btn$cl2 = this.btnNext.$btn.classList).remove.apply(_this$btnNext$$btn$cl2, SimplePagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      }
    }
  }]);

  return SimplePagination;
}();

/* harmony default export */ var pagination_SimplePagination = (SimplePagination_SimplePagination);
// CONCATENATED MODULE: ./src/helpers/pagination-pages.js
var getRange = function getRange(start, end) {
  return Array(end - start).fill().map(function (v, i) {
    return i + start;
  });
};

/* harmony default export */ var pagination_pages = (function (currentPage, totalPage) {
  var visiblePages = 10; // default

  if (visiblePages > totalPage) {
    visiblePages = totalPage;
  }

  var start = currentPage;

  if (currentPage <= Math.floor(visiblePages / 2)) {
    start = 1;
  } else {
    start = currentPage - Math.floor(visiblePages / 2);
  }

  if (start + visiblePages >= totalPage) {
    start = totalPage - visiblePages + 1;
  }

  return getRange(start, start + visiblePages);
});
// CONCATENATED MODULE: ./src/components/pagination/DefaultPagination.js
function DefaultPagination_toConsumableArray(arr) { return DefaultPagination_arrayWithoutHoles(arr) || DefaultPagination_iterableToArray(arr) || DefaultPagination_unsupportedIterableToArray(arr) || DefaultPagination_nonIterableSpread(); }

function DefaultPagination_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function DefaultPagination_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DefaultPagination_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DefaultPagination_arrayLikeToArray(o, minLen); }

function DefaultPagination_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function DefaultPagination_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return DefaultPagination_arrayLikeToArray(arr); }

function DefaultPagination_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DefaultPagination_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DefaultPagination_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DefaultPagination_createClass(Constructor, protoProps, staticProps) { if (protoProps) DefaultPagination_defineProperties(Constructor.prototype, protoProps); if (staticProps) DefaultPagination_defineProperties(Constructor, staticProps); return Constructor; }




var DefaultPagination_DefaultPagination = /*#__PURE__*/function () {
  function DefaultPagination(proTable) {
    DefaultPagination_classCallCheck(this, DefaultPagination);

    this.proTable = proTable;
    this.$dom = document.createElement('div');
    this.$dom.style.display = 'flex';
    this.$dom.style.justifyContent = 'space-between';
    this.$dom.style.alignItems = 'center';

    this._buildRowsPerPage();

    this._buildControls();

    this.render();
  }

  DefaultPagination_createClass(DefaultPagination, [{
    key: "_buildRowsPerPage",
    value: function _buildRowsPerPage() {
      this.rowsPerPage = new pagination_RowsPerPage(this.proTable);
      this.$dom.appendChild(this.rowsPerPage.$dom);
    }
  }, {
    key: "_buildControls",
    value: function _buildControls() {
      var options = this.proTable.options;
      this.$controls = document.createElement(options.pagination.containerElement || 'div');
      this.$controls.style.margin = '0';

      if (options.pagination.containerClasses) {
        var _this$$controls$class;

        (_this$$controls$class = this.$controls.classList).add.apply(_this$$controls$class, DefaultPagination_toConsumableArray(options.pagination.containerClasses));
      }

      this.$dom.appendChild(this.$controls);
      this.pageButtons = [];

      this._buildPrevButton();

      this._buildNextButton();

      this._buildPageButtons();
    }
  }, {
    key: "_buildNextButton",
    value: function _buildNextButton() {
      var _this = this;

      this.btnNext = this._buildButton('Next'); // apply classes from options

      if (this.proTable.options.pagination.btnClasses) {
        var _this$btnNext$$btn$cl;

        (_this$btnNext$$btn$cl = this.btnNext.$btn.classList).add.apply(_this$btnNext$$btn$cl, DefaultPagination_toConsumableArray(this.proTable.options.pagination.btnClasses));
      }

      this.$controls.appendChild(this.btnNext.$wrapper);
      this.btnNext.$btn.addEventListener('click', function (e) {
        _this.proTable.setPage(_this.proTable.options.page + 1);
      });
    }
  }, {
    key: "_buildPrevButton",
    value: function _buildPrevButton() {
      var _this2 = this;

      this.btnPrev = this._buildButton('Prev'); // apply classes from options

      if (this.proTable.options.pagination.btnClasses) {
        var _this$btnPrev$$btn$cl;

        (_this$btnPrev$$btn$cl = this.btnPrev.$btn.classList).add.apply(_this$btnPrev$$btn$cl, DefaultPagination_toConsumableArray(this.proTable.options.pagination.btnClasses));
      }

      this.$controls.appendChild(this.btnPrev.$wrapper);
      this.btnPrev.$btn.addEventListener('click', function (e) {
        _this2.proTable.setPage(_this2.proTable.options.page - 1);
      });
    }
  }, {
    key: "_buildPageButtons",
    value: function _buildPageButtons() {
      var _this3 = this;

      var options = this.proTable.options;
      var limit = options.limit;
      var totalRows = this.proTable.tbody.filteredTrs.length;
      var lastPage = Math.ceil(totalRows / limit);

      while (this.pageButtons.length) {
        var btn = this.pageButtons.pop();
        this.$controls.removeChild(btn.$wrapper);
      }

      pagination_pages(options.page, lastPage, 2).forEach(function (page) {
        var btn = _this3._buildButton(page);

        if (page === options.page) {
          btn.$btn.style.fontWeight = 800;

          if (options.pagination.btnActiveClasses) {
            var _btn$$btn$classList;

            (_btn$$btn$classList = btn.$btn.classList).add.apply(_btn$$btn$classList, DefaultPagination_toConsumableArray(options.pagination.btnActiveClasses));
          }

          if (options.pagination.btnWrapperActiveClasses) {
            var _btn$$wrapper$classLi;

            (_btn$$wrapper$classLi = btn.$wrapper.classList).add.apply(_btn$$wrapper$classLi, DefaultPagination_toConsumableArray(options.pagination.btnWrapperActiveClasses));
          }
        } // apply classes from options


        if (options.pagination.btnClasses) {
          var _btn$$btn$classList2;

          (_btn$$btn$classList2 = btn.$btn.classList).add.apply(_btn$$btn$classList2, DefaultPagination_toConsumableArray(options.pagination.btnClasses));
        }

        btn.$btn.addEventListener('click', function (e) {
          _this3.proTable.setPage(page);
        });

        _this3.pageButtons.push(btn);

        _this3.$controls.insertBefore(btn.$wrapper, _this3.btnNext.$wrapper);
      });
    }
    /**
     * Create DOM button
     * 
     * @returns { Object } object of $btn and $wrapper
     */

  }, {
    key: "_buildButton",
    value: function _buildButton(text) {
      var _options$pagination;

      var options = this.proTable.options;
      var $btn = document.createElement(((_options$pagination = options.pagination) === null || _options$pagination === void 0 ? void 0 : _options$pagination.btnElement) || 'button');
      $btn.innerText = text; // if there is a wrapper

      if (options.pagination.btnWrapper) {
        var $wrapper = document.createElement(options.pagination.btnWrapper);
        $wrapper.appendChild($btn);

        if (options.pagination.btnWrapperClasses) {
          var _$wrapper$classList;

          (_$wrapper$classList = $wrapper.classList).add.apply(_$wrapper$classList, DefaultPagination_toConsumableArray(options.pagination.btnWrapperClasses));
        }

        return {
          $wrapper: $wrapper,
          $btn: $btn
        };
      }

      return {
        $btn: $btn,
        $wrapper: $btn
      };
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.proTable.options;
      var limit = options.limit;
      var page = options.page;
      var start = (page - 1) * limit + 1;
      var to = start + limit - 1;
      var totalRows = this.proTable.tbody.filteredTrs.length;
      var lastPage = Math.ceil(totalRows / limit);
      this.btnPrev.$btn.disabled = page === 1;
      this.btnNext.$btn.disabled = page === lastPage;

      if (page === 1) {
        var _options$pagination2, _options$pagination2$;

        this.btnPrev.$wrapper.classList.add('disabled');

        if ((_options$pagination2 = options.pagination) === null || _options$pagination2 === void 0 ? void 0 : (_options$pagination2$ = _options$pagination2.btnDisabledClasses) === null || _options$pagination2$ === void 0 ? void 0 : _options$pagination2$.length) {
          var _this$btnPrev$$btn$cl2;

          (_this$btnPrev$$btn$cl2 = this.btnPrev.$btn.classList).add.apply(_this$btnPrev$$btn$cl2, DefaultPagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination3, _options$pagination3$;

        this.btnPrev.$wrapper.classList.remove('disabled');

        if ((_options$pagination3 = options.pagination) === null || _options$pagination3 === void 0 ? void 0 : (_options$pagination3$ = _options$pagination3.btnDisabledClasses) === null || _options$pagination3$ === void 0 ? void 0 : _options$pagination3$.length) {
          var _this$btnPrev$$btn$cl3;

          (_this$btnPrev$$btn$cl3 = this.btnPrev.$btn.classList).remove.apply(_this$btnPrev$$btn$cl3, DefaultPagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      }

      if (page === lastPage) {
        var _options$pagination4, _options$pagination4$;

        this.btnNext.$wrapper.classList.add('disabled');

        if ((_options$pagination4 = options.pagination) === null || _options$pagination4 === void 0 ? void 0 : (_options$pagination4$ = _options$pagination4.btnDisabledClasses) === null || _options$pagination4$ === void 0 ? void 0 : _options$pagination4$.length) {
          var _this$btnNext$$btn$cl2;

          (_this$btnNext$$btn$cl2 = this.btnNext.$btn.classList).add.apply(_this$btnNext$$btn$cl2, DefaultPagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination5, _options$pagination5$;

        this.btnNext.$wrapper.classList.remove('disabled');

        if ((_options$pagination5 = options.pagination) === null || _options$pagination5 === void 0 ? void 0 : (_options$pagination5$ = _options$pagination5.btnDisabledClasses) === null || _options$pagination5$ === void 0 ? void 0 : _options$pagination5$.length) {
          var _this$btnNext$$btn$cl3;

          (_this$btnNext$$btn$cl3 = this.btnNext.$btn.classList).remove.apply(_this$btnNext$$btn$cl3, DefaultPagination_toConsumableArray(options.pagination.btnDisabledClasses));
        }
      }

      this._buildPageButtons();
    }
  }]);

  return DefaultPagination;
}();

/* harmony default export */ var pagination_DefaultPagination = (DefaultPagination_DefaultPagination);
// CONCATENATED MODULE: ./src/components/table/TFoot.js
function TFoot_toConsumableArray(arr) { return TFoot_arrayWithoutHoles(arr) || TFoot_iterableToArray(arr) || TFoot_unsupportedIterableToArray(arr) || TFoot_nonIterableSpread(); }

function TFoot_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TFoot_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TFoot_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TFoot_arrayLikeToArray(o, minLen); }

function TFoot_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function TFoot_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TFoot_arrayLikeToArray(arr); }

function TFoot_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TFoot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TFoot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TFoot_createClass(Constructor, protoProps, staticProps) { if (protoProps) TFoot_defineProperties(Constructor.prototype, protoProps); if (staticProps) TFoot_defineProperties(Constructor, staticProps); return Constructor; }





/**
 * @typedef { Object } TFoot.Options
 * @property { string[] } classes - `tfoot` classes
 * @property { string[] } trClasses - `tfoot > tr` classes
 * @property { string[] } thClasses - `tfoot > tr > th` classes
 */

/**
 * @class TFoot
 * @property { TFoot.Options } options
 */

var TFoot_TFoot = /*#__PURE__*/function () {
  function TFoot(_ref) {
    var _this = this,
        _this$options,
        _this$options$classes;

    var proTable = _ref.proTable,
        options = _ref.options;

    TFoot_classCallCheck(this, TFoot);

    this.proTable = proTable;
    this.options = options;
    this.$dom = document.createElement('tfoot');
    this.trs = [];
    this.createPagination();
    this.trs.forEach(function (_tr) {
      return _this.$dom.appendChild(_tr.$dom);
    }); // apply tfoot classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, TFoot_toConsumableArray(this.options.classes));
    }
  }

  TFoot_createClass(TFoot, [{
    key: "createPagination",
    value: function createPagination() {
      var _this$options2, _this$options3;

      var options = this.proTable.options;

      if (this.proTable.tbody.trs.length < this.proTable.options.limit || !!!options.pagination) {
        return;
      }

      if (options.pagination === 'simple' || options.pagination.type === 'simple') {
        this.pagination = new pagination_SimplePagination(this.proTable);
      } else {
        this.pagination = new pagination_DefaultPagination(this.proTable);
      }

      var columnsCount = this.proTable.thead.columnsCount;
      var tr = new table_Tr({
        classes: (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.trClasses
      });
      var td = new table_Td({
        child: this.pagination.$dom,
        options: {
          classes: ((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.tdClasses) || [],
          attrs: {
            colspan: columnsCount
          },
          style: {
            textAlign: 'right'
          }
        }
      });
      tr.pushTd(td);
      this.trs.push(tr);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.pagination) {
        this.pagination.render();
      }
    }
  }]);

  return TFoot;
}();

/* harmony default export */ var table_TFoot = (TFoot_TFoot);
// CONCATENATED MODULE: ./src/components/search/Input.js
function Input_toConsumableArray(arr) { return Input_arrayWithoutHoles(arr) || Input_iterableToArray(arr) || Input_unsupportedIterableToArray(arr) || Input_nonIterableSpread(); }

function Input_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Input_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Input_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Input_arrayLikeToArray(o, minLen); }

function Input_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Input_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Input_arrayLikeToArray(arr); }

function Input_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Input_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Input_createClass(Constructor, protoProps, staticProps) { if (protoProps) Input_defineProperties(Constructor.prototype, protoProps); if (staticProps) Input_defineProperties(Constructor, staticProps); return Constructor; }



var Input = /*#__PURE__*/function () {
  /**
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable 
   */
  function Input(_ref) {
    var _this$proTable$option;

    var proTable = _ref.proTable;

    Input_classCallCheck(this, Input);

    this.proTable = proTable;

    this._createInput();

    if ((_this$proTable$option = this.proTable.options.search) === null || _this$proTable$option === void 0 ? void 0 : _this$proTable$option.wrapperElement) {
      this._createWrapper();

      this.$dom = this.$wrapper;
      this.$wrapper.appendChild(this.$input);
    } else {
      this.$dom = this.$input;
    }
  }

  Input_createClass(Input, [{
    key: "_createInput",
    value: function _createInput() {
      var _options$search, _options$search2;

      var options = this.proTable.options;
      this.$input = document.createElement('input');
      this.$input.type = 'text';
      this.$input.placeholder = ((_options$search = options.search) === null || _options$search === void 0 ? void 0 : _options$search.placeholder) || 'Search';
      this.$input.addEventListener('keyup', this._onKeyUp.bind(this)); // apply classes

      if ((_options$search2 = options.search) === null || _options$search2 === void 0 ? void 0 : _options$search2.classes) {
        var _this$$input$classLis;

        (_this$$input$classLis = this.$input.classList).add.apply(_this$$input$classLis, Input_toConsumableArray(options.search.classes));
      }

      this.$input.style.width = 'fit-content';
      this.$input.style.display = 'inline-block';
    }
  }, {
    key: "_createWrapper",
    value: function _createWrapper() {
      var _this$proTable$option2, _this$proTable$option3, _this$proTable$option4;

      this.$wrapper = document.createElement((_this$proTable$option2 = this.proTable.options.search) === null || _this$proTable$option2 === void 0 ? void 0 : _this$proTable$option2.wrapperElement);

      if ((_this$proTable$option3 = this.proTable.options.search) === null || _this$proTable$option3 === void 0 ? void 0 : (_this$proTable$option4 = _this$proTable$option3.wrapperClasses) === null || _this$proTable$option4 === void 0 ? void 0 : _this$proTable$option4.length) {
        var _this$$wrapper$classL, _this$proTable$option5;

        (_this$$wrapper$classL = this.$wrapper.classList).add.apply(_this$$wrapper$classL, Input_toConsumableArray((_this$proTable$option5 = this.proTable.options.search) === null || _this$proTable$option5 === void 0 ? void 0 : _this$proTable$option5.wrapperClasses));
      }
    }
  }, {
    key: "_onKeyUp",
    value: function _onKeyUp() {
      this.proTable.setKeyword(this.$input.value);
    }
  }]);

  return Input;
}();

/* harmony default export */ var search_Input = (Input);
// CONCATENATED MODULE: ./src/components/Header.js
function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }




var Header_Header = /*#__PURE__*/function () {
  /**
   * @param { Object } payload
   * @param { ProTable } payload.proTable 
   */
  function Header(_ref) {
    var proTable = _ref.proTable;

    Header_classCallCheck(this, Header);

    this.proTable = proTable;
    this.$dom = document.createElement('header');

    this._applyStyles();

    if (this.proTable.options.search !== false) {
      this._createSearch();
    }
  }

  Header_createClass(Header, [{
    key: "_applyStyles",
    value: function _applyStyles() {
      this.$dom.style.textAlign = 'right';
      this.$dom.style.marginBottom = '1rem';
    }
  }, {
    key: "_createSearch",
    value: function _createSearch() {
      this.search = new search_Input({
        proTable: this.proTable
      });
      this.$dom.appendChild(this.search.$dom);
    }
  }]);

  return Header;
}();

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./src/components/table/ProTable.js
function ProTable_toConsumableArray(arr) { return ProTable_arrayWithoutHoles(arr) || ProTable_iterableToArray(arr) || ProTable_unsupportedIterableToArray(arr) || ProTable_nonIterableSpread(); }

function ProTable_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProTable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProTable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProTable_arrayLikeToArray(o, minLen); }

function ProTable_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function ProTable_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ProTable_arrayLikeToArray(arr); }

function ProTable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProTable_ownKeys(Object(source), true).forEach(function (key) { ProTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ProTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProTable_defineProperties(Constructor, staticProps); return Constructor; }





/**
 * ProTable Options
 * 
 * @typedef { Object } ProTable.Options
 * @property { string[] } classes - Classes name of the table
 * @property { Thead.Options } thead - Thead
 * @property { Object } tbody - TBody
 * @property { TFoot.Options } tfoot - Tfoot
 * @property { Object } columns - Custom columns of table
 * @property { Number } limit - page limit
 * @property { Object } pagination - Pagination specific options
 * @property { string } pagination.type - Pagination type
 * @property { Object } pagination.rowsPerPage - Pagination rows per page options
 * @property { string } pagination.rowsPerPage.text - Pagination rows per page text
 * @property { string[] } pagination.rowsPerPage.selectClasses
 * @property { Number[] } pagination.rowsPerPage.ranges
 * @property { Object } search
 * @property { string } search.placeholder
 * @property { string[] } search.classes
 * @property { string } search.notFoundText
 */

/**
 * ProTable class
 *
 * @class ProTable
 * @property { ProTable.Options } options
 */

var ProTable_ProTable = /*#__PURE__*/function () {
  /**
   * Creates an instance of ProTable.
   * @param { string } selector - DOM selector where the ProTable should replace
   * @param { ProTable.Options } options
   * @memberof ProTable
   */
  function ProTable(selector, options) {
    ProTable_classCallCheck(this, ProTable);

    this.selector = selector;
    /**
     * @type ProTable.Options
     */

    var defaultOptions = {
      classes: [],
      thead: {},
      limit: 10,
      page: 1,
      keyword: null,
      pagination: {
        type: 'default'
      },
      order: {
        key: null,
        direction: null
      }
    };
    /**
     * @type { ProTable.Options }
     */

    this.options = ProTable_objectSpread(ProTable_objectSpread({}, defaultOptions), options);
    this.thead = null;
    this.tbody = null;
    this.$dom = document.createElement('section');
    this.$dom.classList.add('protable');
  }

  ProTable_createClass(ProTable, [{
    key: "generateTable",
    value: function generateTable(_ref) {
      var columns = _ref.columns,
          rows = _ref.rows;
      this.$table = document.createElement('table');
      this.$dom.appendChild(this.$table);
      this.columns = this._formatColumns(columns);

      if (this.options.columns) {
        // merging
        for (var _key in this.options.columns) {
          var _col = this.options.columns[_key];

          if (Number.isInteger(_col.targetIndex)) {
            var _targetKey = Object.keys(this.columns)[_col.targetIndex];

            this.columns[_targetKey] = ProTable_objectSpread(ProTable_objectSpread({}, this.columns[_targetKey]), _col);
          } else if (this.columns[_key]) {
            this.columns[_key] = ProTable_objectSpread(ProTable_objectSpread({}, this.columns[_key]), _col);
          }
        }
      }

      this.rows = rows;

      this._generateHeader();

      this._generateThead();

      this._generateTbody();

      this._generateTFoot(); // apply options


      if (this.options.classes) {
        var _this$$table$classLis;

        (_this$$table$classLis = this.$table.classList).add.apply(_this$$table$classLis, ProTable_toConsumableArray(this.options.classes));
      }
    }
  }, {
    key: "_formatColumns",
    value: function _formatColumns(columns) {
      var _this = this;

      // if columns is Object, return as is
      if (columns !== null && columns.constructor === Object) {
        return columns;
      }

      var formatted = {};
      columns.forEach(function (_col) {
        if (_col !== null && _col.constructor === Object) {
          var key = Object.keys(_col)[0];
          formatted[key] = {
            label: "".concat(key[0].toUpperCase()).concat(key.substr(1)),
            childs: _this._formatColumns(Object.values(_col)[0])
          };
        } else {
          formatted[_col] = {
            label: "".concat(_col[0].toUpperCase()).concat(_col.substr(1))
          };
        }
      });
      return formatted;
    }
  }, {
    key: "_generateHeader",
    value: function _generateHeader() {
      this.header = new components_Header({
        proTable: this
      });
      this.$dom.prepend(this.header.$dom);
    }
  }, {
    key: "_generateThead",
    value: function _generateThead() {
      this.thead = new table_THead({
        proTable: this,
        options: this.options.thead
      });
      this.$table.appendChild(this.thead.$dom);
    }
  }, {
    key: "_generateTbody",
    value: function _generateTbody() {
      if (this.tbody) {
        this.$table.removeChild(this.tbody.$dom);
      }

      this.tbody = new table_TBody({
        proTable: this,
        options: this.options.tbody
      });
      this.$table.appendChild(this.tbody.$dom);
    }
  }, {
    key: "_generateTFoot",
    value: function _generateTFoot() {
      if (this.tfoot) {
        this.$table.removeChild(this.tfoot.$dom);
      }

      this.tfoot = new table_TFoot({
        proTable: this,
        options: this.options.tfoot
      });
      this.$table.appendChild(this.tfoot.$dom);
    }
  }, {
    key: "setKeyword",
    value: function setKeyword(keyword) {
      this.options.keyword = keyword;
      this.setPage(1);
    }
  }, {
    key: "setPage",
    value: function setPage(page) {
      this.options.page = page;

      if (page < 1) {
        this.options.page = 1;
      }

      this.tbody.render();
      this.tfoot.render();
    }
  }, {
    key: "setLimit",
    value: function setLimit(limit) {
      this.options.page = 1;
      this.options.limit = parseInt(limit);
      this.tbody.render();
      this.tfoot.render();
    }
  }, {
    key: "setOrder",
    value: function setOrder(_ref2) {
      var key = _ref2.key,
          direction = _ref2.direction;
      this.options.order = {
        key: key,
        direction: direction
      };
      this.thead.render();
      this.setPage(1);
    }
  }, {
    key: "draw",
    value: function draw() {
      document.querySelector(this.selector).appendChild(this.$dom);
    }
  }]);

  return ProTable;
}();

/* harmony default export */ var table_ProTable = (ProTable_ProTable);
// CONCATENATED MODULE: ./src/helpers/from-array.js
function from_array_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * @typedef { Object } FromArray.Data
 * @property { string[]|Object } columns
 * @property { Object[] } rows
 */

/**
 * Helper to create instance of ProTable using array data
 * 
 * @param { string | Node } elId 
 * @param { array | FromArray.Data } data 
 * @param { ProTable.Options } options 
 */

var from_array_fromArray = function fromArray(elId, data, options) {
  var columns = data.columns || generateColumns(data);
  console.log('fromArray', columns);
  var proTable = new table_ProTable(elId, options);
  proTable.generateTable({
    columns: columns,
    rows: data.rows || data
  });

  if (elId) {
    proTable.draw();
  }

  return proTable;
};
/**
 * Generate column from an objects[]
 * 
 * It will return array such:
 *  - ['no', 'name', 'city'] - for simple headers
 *  - ['name', { birth: ['day', 'month', 'year'] }, 'city'] - for complex headers
 * 
 * @param [{ key: value }, { key: value }] array
 * @returns { String[] }
 */


var generateColumns = function generateColumns(array) {
  var columns = [];
  var objectColumns = [];
  array.forEach(function (_item) {
    var _loop = function _loop(key) {
      if (!columns.find(function (_column) {
        return _column === key;
      })) {
        // check wheter the value is an object
        if (_item[key] !== null && _item[key].constructor === Object) {
          // call generateColumns recursively
          if (!objectColumns.find(function (_objectColumn) {
            return _objectColumn === key;
          })) {
            objectColumns.push(key);
            columns.push(from_array_defineProperty({}, key, generateColumns([_item[key]])));
          }
        } else {
          columns.push(key);
        }
      }
    };

    for (var key in _item) {
      _loop(key);
    }
  });
  return columns;
};

/* harmony default export */ var from_array = (from_array_fromArray);
// CONCATENATED MODULE: ./src/helpers/from-dom-table.js
function from_dom_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function from_dom_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { from_dom_table_ownKeys(Object(source), true).forEach(function (key) { from_dom_table_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { from_dom_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function from_dom_table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var from_dom_table_fromDOMTable = function fromDOMTable(selector, options) {
  var dom = document.querySelector(selector);
  var columns = getColumnsFromDom(dom);
  var rows = getRowsFromDom(dom, columns);
  console.log({
    columns: columns
  });
  options = from_dom_table_objectSpread({
    classes: Array.from(dom.classList)
  }, options);
  var proTable = new table_ProTable(null, options);
  proTable.generateTable({
    columns: columns,
    rows: rows
  }); // replace the dom input

  dom.replaceWith(proTable.$dom);
  return proTable;
};

function getColumnsFromDom(table) {
  var firstTr = table.querySelector('thead tr');
  var columns = {};
  Array.from(firstTr.children).forEach(function (_child) {
    columns[_child.innerHTML] = {
      label: _child.innerHTML,
      classes: Array.from(_child.classList)
    };
  });
  return columns;
}

function getRowsFromDom(table, columns) {
  var trs = table.querySelectorAll('tbody tr');
  return Array.from(trs).map(function (_tr) {
    var row = {};
    Object.keys(columns).forEach(function (_column, _index) {
      row[_column] = [_tr.children[_index].innerHTML, {
        classes: Array.from(_tr.children[_index].classList)
      }];
    });
    return row;
  });
}

/* harmony default export */ var from_dom_table = (from_dom_table_fromDOMTable);
// EXTERNAL MODULE: ./src/const/bootstrap-options.json
var bootstrap_options = __webpack_require__(0);

// EXTERNAL MODULE: ./src/const/semantic-ui-options.json
var semantic_ui_options = __webpack_require__(1);

// EXTERNAL MODULE: ./src/const/foundation.json
var foundation = __webpack_require__(2);

// EXTERNAL MODULE: ./src/const/tailwind.json
var tailwind = __webpack_require__(3);

// CONCATENATED MODULE: ./src/index.js






var templateOptions = {
  bootstrap: bootstrap_options.normal,
  bootstrapSm: bootstrap_options.sm,
  semanticUI: semantic_ui_options,
  foundation: foundation,
  tailwind: tailwind
};
window.ProTable = {
  fromArray: from_array,
  fromTable: from_dom_table,
  templateOptions: templateOptions
};
/* harmony default export */ var src = __webpack_exports__["default"] = ({
  fromArray: from_array,
  fromTable: from_dom_table,
  templateOptions: templateOptions
});


/***/ })
/******/ ]);
//# sourceMappingURL=protable.js.map