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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "fromArray", function() { return /* reexport */ from_array; });
__webpack_require__.d(__webpack_exports__, "fromTable", function() { return /* reexport */ from_dom_table; });

// CONCATENATED MODULE: ./src/components/table/Td.js
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

    for (var attr in this.options.attrs) {
      this.$dom.setAttribute(attr, this.options.attrs[attr]);
    }

    for (var style in this.options.style) {
      this.$dom.style[style] = this.options.style[style];
    }
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
  }]);

  return Td;
}();

/* harmony default export */ var table_Td = (Td);
// CONCATENATED MODULE: ./src/components/table/Th.js
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
      var _this = this;

      if (this.options.classes) {
        this.options.classes.forEach(function (_class) {
          return _this.$dom.classList.add(_class);
        });
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
      var _this2 = this;

      if (!this._isOrderable()) {
        return;
      }

      this.$container.style.cursor = 'pointer'; // caret top

      this.$spanTop = document.createElement('span');
      this.$spanTop.innerHTML = '&#9652;';
      this.$spanTop.style.marginBottom = '-4px'; // caret bottom

      this.$spanBottom = document.createElement('span');
      this.$spanBottom.innerHTML = '&#9662;';
      this.$spanBottom.style.marginTop = '-4px';
      this.$orderDom = document.createElement('div');
      this.$orderDom.appendChild(this.$spanTop);
      this.$orderDom.appendChild(this.$spanBottom);
      this.$orderDom.style.display = 'inline-flex';
      this.$orderDom.style.flexDirection = 'column';
      this.$orderDom.style.justifyContent = 'center';
      this.$orderDom.style.fontSize = '70%';
      this.$orderDom.style.height = '20px';
      this.$orderDom.style.opacity = 0.3;
      this.$container.appendChild(this.$orderDom);
      this.$dom.addEventListener('click', function (e) {
        _this2._toggleOrder();
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
function Tr_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tr_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tr_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tr_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tr_defineProperties(Constructor, staticProps); return Constructor; }




var Tr_Tr = /*#__PURE__*/function () {
  function Tr() {
    Tr_classCallCheck(this, Tr);

    this.$dom = document.createElement('tr');
    this.childs = [];
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

function THead_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function THead_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function THead_createClass(Constructor, protoProps, staticProps) { if (protoProps) THead_defineProperties(Constructor.prototype, protoProps); if (staticProps) THead_defineProperties(Constructor, staticProps); return Constructor; }





var THead_THead = /*#__PURE__*/function () {
  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable
   * @param { Object } payload.options
   * @memberof THead
   * @constructor
   */
  function THead(_ref) {
    var _this = this;

    var proTable = _ref.proTable,
        options = _ref.options;

    THead_classCallCheck(this, THead);

    this.options = THead_objectSpread({
      thClasses: []
    }, options);
    this.proTable = proTable;
    this.$dom = document.createElement('thead');
    this.trs = this.generateTrs(this.proTable.columns);

    this.columnsCount = function () {
      return _this.trs[0].childs.map(function (th) {
        return th.options.attrs.colspan;
      }).reduce(function (a, b) {
        return a + b;
      });
    }();

    console.log('trs', this.trs); // append child

    this.trs.forEach(function (tr) {
      return _this.$dom.appendChild(tr.$dom);
    });
  }

  THead_createClass(THead, [{
    key: "generateTrs",
    value: function generateTrs(columns) {
      var trs = [];

      var _this$generateThs = this.generateThs(columns),
          ths = _this$generateThs.ths,
          childs = _this$generateThs.childs;

      var tr = new table_Tr();
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
        var _col = columns[_key];
        ths.push(new table_Th({
          key: _key,
          label: _col.label,
          proTable: this.proTable,
          options: {
            classes: this.options.thClasses,
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

/* harmony default export */ var table_THead = ({
  THead: THead_THead
});

// CONCATENATED MODULE: ./src/components/table/TBody.js
function TBody_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TBody_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TBody_createClass(Constructor, protoProps, staticProps) { if (protoProps) TBody_defineProperties(Constructor.prototype, protoProps); if (staticProps) TBody_defineProperties(Constructor, staticProps); return Constructor; }





var TBody_TBody = /*#__PURE__*/function () {
  /**
   * Creates an instance of TBody.
   * @param { ProTable } proTable
   * @memberof TBody
   */
  function TBody(proTable) {
    TBody_classCallCheck(this, TBody);

    this.$dom = document.createElement('tbody');
    this.proTable = proTable;
    this.trs = this.generateTrs();
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
        var tr = new table_Tr();
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
        var _col = columns[_key];
        var rowContent = _row[_key]; // override content if user defines targetIndex

        if (Number.isInteger(_col.targetIndex)) {
          rowContent = _row[Object.keys(this.proTable.columns)[_col.targetIndex]];
        } // override content if user defines contents callback


        if (this.proTable.options.contents && this.proTable.options.contents[_key]) {
          rowContent = this.proTable.options.contents[_key](rowContent);
        }

        if (_col.childs) {
          // call generateTds recursively
          tds = tds.concat(this.generateTds(_col.childs, _row[_key]));
        } else {
          tds.push({
            key: _key,
            label: rowContent,
            options: {
              searchable: typeof _col.searchable === 'boolean' ? !!_col.searchable : true
            }
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

        (_this$$select$classLi = this.$select.classList).add.apply(_this$$select$classLi, _toConsumableArray(options.pagination.rowsPerPage.selectClasses));
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
      var options = this.proTable.options;
      var $btn = document.createElement('button');
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
      var limit = this.proTable.options.limit;
      var page = this.proTable.options.page;
      var start = (page - 1) * limit + 1;
      var to = start + limit - 1;
      var totalRows = this.proTable.tbody.filteredTrs.length;
      var lastPage = Math.ceil(totalRows / limit);
      this.$span.innerText = "".concat(start, "-").concat(to > totalRows ? totalRows : to, " of ").concat(totalRows);
      this.btnPrev.$btn.disabled = page === 1;
      this.btnNext.$btn.disabled = page === lastPage;

      if (page === 1) {
        this.btnPrev.$wrapper.classList.add('disabled');
      } else {
        this.btnPrev.$wrapper.classList.remove('disabled');
      }

      if (page === lastPage) {
        this.btnNext.$wrapper.classList.add('disabled');
      } else {
        this.btnNext.$wrapper.classList.remove('disabled');
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
      var $btn = document.createElement('button');
      $btn.innerText = text;
      var options = this.proTable.options; // if there is a wrapper

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
      var limit = this.proTable.options.limit;
      var page = this.proTable.options.page;
      var start = (page - 1) * limit + 1;
      var to = start + limit - 1;
      var totalRows = this.proTable.tbody.filteredTrs.length;
      var lastPage = Math.ceil(totalRows / limit);
      this.btnPrev.$btn.disabled = page === 1;
      this.btnNext.$btn.disabled = page === lastPage;

      if (page === 1) {
        this.btnPrev.$wrapper.classList.add('disabled');
      } else {
        this.btnPrev.$wrapper.classList.remove('disabled');
      }

      if (page === lastPage) {
        this.btnNext.$wrapper.classList.add('disabled');
      } else {
        this.btnNext.$wrapper.classList.remove('disabled');
      }

      this._buildPageButtons();
    }
  }]);

  return DefaultPagination;
}();

/* harmony default export */ var pagination_DefaultPagination = (DefaultPagination_DefaultPagination);
// CONCATENATED MODULE: ./src/components/table/TFoot.js
function TFoot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TFoot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TFoot_createClass(Constructor, protoProps, staticProps) { if (protoProps) TFoot_defineProperties(Constructor.prototype, protoProps); if (staticProps) TFoot_defineProperties(Constructor, staticProps); return Constructor; }






var TFoot_TFoot = /*#__PURE__*/function () {
  function TFoot(proTable) {
    var _this = this;

    TFoot_classCallCheck(this, TFoot);

    this.proTable = proTable;
    this.$dom = document.createElement('tfoot');
    this.trs = [];
    this.createPagination();
    this.trs.forEach(function (_tr) {
      return _this.$dom.appendChild(_tr.$dom);
    });
  }

  TFoot_createClass(TFoot, [{
    key: "createPagination",
    value: function createPagination() {
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
      var tr = new table_Tr();
      var td = new table_Td({
        child: this.pagination.$dom,
        options: {
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
    var proTable = _ref.proTable;

    Input_classCallCheck(this, Input);

    this.proTable = proTable;

    this._createInput();
  }

  Input_createClass(Input, [{
    key: "_createInput",
    value: function _createInput() {
      var _options$search, _options$search2;

      var options = this.proTable.options;
      this.$dom = document.createElement('input');
      this.$dom.placeholder = ((_options$search = options.search) === null || _options$search === void 0 ? void 0 : _options$search.placeholder) || 'Search';
      this.$dom.addEventListener('keyup', this._onKeyUp.bind(this)); // apply classes

      if ((_options$search2 = options.search) === null || _options$search2 === void 0 ? void 0 : _options$search2.classes) {
        var _this$$dom$classList;

        (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, Input_toConsumableArray(options.search.classes));
      }

      this.$dom.style.width = 'fit-content';
      this.$dom.style.display = 'inline-block';
    }
  }, {
    key: "_onKeyUp",
    value: function _onKeyUp() {
      this.proTable.setKeyword(this.$dom.value);
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
 * @property { Object } thead - Thead
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
    this.$dom.classList.add('pro-table');
  }

  ProTable_createClass(ProTable, [{
    key: "generateTable",
    value: function generateTable(_ref) {
      var _this = this;

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
        this.options.classes.forEach(function (_class) {
          _this.$table.classList.add(_class);
        });
      }
    }
  }, {
    key: "_formatColumns",
    value: function _formatColumns(columns) {
      var _this2 = this;

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
            childs: _this2._formatColumns(Object.values(_col)[0])
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
      this.thead = new THead_THead({
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

      this.tbody = new table_TBody(this);
      this.$table.appendChild(this.tbody.$dom);
    }
  }, {
    key: "_generateTFoot",
    value: function _generateTFoot() {
      if (this.tfoot) {
        this.$table.removeChild(this.tfoot.$dom);
      }

      this.tfoot = new table_TFoot(this);
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
 * Generate column from an array
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


var from_dom_table_fromDOMTable = function fromDOMTable(selector, options) {
  var dom = document.querySelector(selector);
  var columns = getColumnsFromDom(dom);
  var rows = getRowsFromDom(dom, columns);
  var proTable = new table_ProTable(null, options);
  proTable.generateTable({
    columns: columns,
    rows: rows
  });
  console.log('fromTable', 'proTable:', proTable.$dom); // replace the dom input

  dom.replaceWith(proTable.$dom);
  return proTable;
};

function getColumnsFromDom(table) {
  var firstTr = table.querySelector('thead tr');
  return Array.from(firstTr.children).map(function (_child) {
    return _child.innerHTML;
  });
}

function getRowsFromDom(table, columns) {
  var trs = table.querySelectorAll('tbody tr');
  return Array.from(trs).map(function (_tr) {
    var row = {};
    columns.forEach(function (_column, _index) {
      row[_column] = _tr.children[_index].innerHTML;
    });
    return row;
  });
}

/* harmony default export */ var from_dom_table = (from_dom_table_fromDOMTable);
// CONCATENATED MODULE: ./src/index.js


window.ProTable = {
  fromArray: from_array,
  fromTable: from_dom_table
};
/* harmony default export */ var src = __webpack_exports__["default"] = ({
  fromArray: from_array,
  fromTable: from_dom_table
});


/***/ })
/******/ ]);
//# sourceMappingURL=pro-table.js.map