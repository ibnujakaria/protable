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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/table/ProTable.js":
/*!******************************************!*\
  !*** ./src/components/table/ProTable.js ***!
  \******************************************/
/*! exports provided: default, ProTable */
/*! exports used: ProTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProTable; });
/* harmony import */ var _THead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./THead */ "./src/components/table/THead.js");
/* harmony import */ var _Tr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tr */ "./src/components/table/Tr.js");
/* harmony import */ var _TBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TBody */ "./src/components/table/TBody.js");




class ProTable {
  constructor(elId, options) {
    this.$elId = elId

    const defaultOptions = {
      classes: [],
      thead: {}
    }

    this.options = { ...defaultOptions, ...options }
    this.thead = null
    this.tbody = null
  }

  generateTable ({ columns, rows }) {
    this.thead = new _THead__WEBPACK_IMPORTED_MODULE_0__[/* THead */ "a"](columns, this.options.thead)
    this.tbody = new _TBody__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({ columns, rows })

    this.$table = document.createElement('table')
    this.$table.appendChild(this.thead.$dom)
    this.$table.appendChild(this.tbody.$dom)

    // apply options
    if (this.options.classes) {
      this.options.classes.forEach(_class => {
        this.$table.classList.add(_class)
      })
    }

    console.log(this.$table)
  }

  draw () {
    document.querySelector(this.$elId).appendChild(this.$table)
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = ({ ProTable });



/***/ }),

/***/ "./src/components/table/TBody.js":
/*!***************************************!*\
  !*** ./src/components/table/TBody.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Tr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tr */ "./src/components/table/Tr.js");


class TBody {
  constructor({ columns, rows }) {
    this.$dom = document.createElement('tbody')
    this.trs = this.generateTrs(columns, rows)

    // appending trs to dom
    this.trs.forEach(_tr => this.$dom.appendChild(_tr.$dom))
  }

  generateTrs (columns, rows) {
    const trs = []

    rows.forEach(_row => {
      const tr = new _Tr__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]()
      tr.addTds(this.generateTds(columns, _row))
      trs.push(tr)
    })

    return trs
  }

  generateTds (columns, _row) {
    let tds = []

    columns.forEach(_column => {
      if (_column !== null && _column.constructor === Object) {
        // call generateTds recursively
        tds = tds.concat(
          this.generateTds(Object.values(_column)[0], _row[Object.keys(_column)[0]])
        )
      } else {
        tds.push(_row[_column])
      }
    })

    return tds
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TBody);

/***/ }),

/***/ "./src/components/table/THead.js":
/*!***************************************!*\
  !*** ./src/components/table/THead.js ***!
  \***************************************/
/*! exports provided: default, THead */
/*! exports used: THead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return THead; });
/* harmony import */ var _Tr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tr */ "./src/components/table/Tr.js");
/* harmony import */ var _Th__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Th */ "./src/components/table/Th.js");



class THead {
  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { * } columns
   * @param { * } options
   * @memberof THead
   */
  constructor (columns, options) {
    this.options = {
      thClasses: [],
      ...options
    }

    this.$dom = document.createElement('thead')
    this.trs = this.generateTrs(columns)

    console.log('trs', this.trs)
    this.columns = columns

    // append child
    this.trs.forEach(tr => this.$dom.appendChild(tr.$dom))
  }

  generateTrs (columns) {
    let trs = []
    
    let { ths, childs } = this.generateThs(columns)
    let tr = new _Tr__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]()
    
    ths.forEach(_th => tr.pushTh(_th))
    trs.push(tr)

    if (childs.length) {
      trs = trs.concat(this.generateTrs(childs))
    }
    
    // add rowspan to th that has not colspan attr
    // and fix colspan as its child
    tr.childs.forEach(_th => {
      if (!_th.$dom.getAttribute('colspan')) {
        _th.$dom.setAttribute('rowspan', trs.length)
      }
    })

    return trs
  }

  generateThs (columns) {
    let ths = []
    let childs = []

    columns.forEach(_col => {
      if (_col !== null && _col.constructor === Object) {
        const key = Object.keys(_col)[0]
        ths.push(new _Th__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](key, {
          attrs: {
            colspan: this.getColspan(_col[key])
          },
          classes: this.options.thClasses
        }))
        childs = childs.concat(_col[key])
      } else {
        ths.push(
          new _Th__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_col, {
            classes: this.options.thClasses
          })
        )
      }
    })

    return { ths, childs }
  }

  getColspan (columns) {
    let colspan = columns.length

    columns.forEach(_col => {
      if ((_col !== null && _col.constructor === Object)) {
        console.log('getColspan', 'isObject', Object.keys(_col)[0])
        colspan += this.getColspan(_col[Object.keys(_col)[0]]) - 1
      }
    })

    return colspan
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = ({ THead });



/***/ }),

/***/ "./src/components/table/Td.js":
/*!************************************!*\
  !*** ./src/components/table/Td.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Td {
  constructor (string) {
    this.key = string
    this.$dom = document.createElement('td')

    this.$dom.innerHTML = string || '-'
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Td);


/***/ }),

/***/ "./src/components/table/Th.js":
/*!************************************!*\
  !*** ./src/components/table/Th.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Th {
  constructor (string, options) {
    this.key = string
    this.$dom = document.createElement('th')

    if (options && options.attrs) {
      for (const attr in options.attrs) {
        this.$dom.setAttribute(attr, options.attrs[attr])
      }
    }

    if (options && options.classes) {
      options.classes.forEach(_class => this.$dom.classList.add(_class))
    }

    this.$dom.innerHTML = `${string[0].toUpperCase()}${string.toLowerCase().substr(1)}` || '-'
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Th);


/***/ }),

/***/ "./src/components/table/Tr.js":
/*!************************************!*\
  !*** ./src/components/table/Tr.js ***!
  \************************************/
/*! exports provided: default, Tr */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tr */
/* harmony import */ var _Td__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Td */ "./src/components/table/Td.js");
/* harmony import */ var _Th__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Th */ "./src/components/table/Th.js");



class Tr {
  constructor () {
    this.$dom = document.createElement('tr')
    this.childs = []
  }

  addTd (column) {
    const td = new _Td__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](column)
    this.childs.push(td)
    this.$dom.appendChild(td.$dom)
  }

  addTds (array) {
    array.forEach(_item => {
      this.addTd(_item)
    })
    
    return this
  }

  addTh (column, options) {
    const th = new _Th__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](column, options)
    this.childs.push(th)
    this.$dom.appendChild(th.$dom)
  }

  pushTh (th) {
    this.childs.push(th)
    this.$dom.appendChild(th.$dom)
  }

  addThs (array) {
    array.forEach(_item => {
      this.addTh(_item)
    })
    
    return this
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Tr);



/***/ }),

/***/ "./src/helpers/from-array.js":
/*!***********************************!*\
  !*** ./src/helpers/from-array.js ***!
  \***********************************/
/*! exports provided: default, fromArray */
/*! exports used: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromArray; });
/* harmony import */ var _components_table_ProTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/table/ProTable */ "./src/components/table/ProTable.js");


const fromArray = (elId, array, options) => {
  const columns = generateColumns(array)

  console.log('columns', columns)

  const proTable = new _components_table_ProTable__WEBPACK_IMPORTED_MODULE_0__[/* ProTable */ "a"](elId, options)
  proTable.generateTable({
    columns,
    rows: array
  })

  proTable.draw()
}

/**
 * 
 * @param [{ key: value }, { key: value }] array 
 */
const generateColumns = array => {
  const columns = []
  const objectColumns = []

  array.forEach(_item => {
    for (const key in _item) {
      if (!columns.find(_column => _column === key)) {
        // check wheter the value is an object
        if (_item[key] !== null && _item[key].constructor === Object) {
          // call generateColumns recursively
          if (!objectColumns.find(_objectColumn => _objectColumn === key)) {
            objectColumns.push(key)
            columns.push({ [key]: generateColumns([_item[key]]) })
          }
        } else {
          columns.push(key)
        }
      }
    }
  })

  return columns
}

/* unused harmony default export */ var _unused_webpack_default_export = ({ fromArray });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, fromArray, ProTable */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/from-array */ "./src/helpers/from-array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return _helpers_from_array__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _components_table_ProTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/table/ProTable */ "./src/components/table/ProTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProTable", function() { return _components_table_ProTable__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  fromArray: _helpers_from_array__WEBPACK_IMPORTED_MODULE_0__[/* fromArray */ "a"],
  ProTable: _components_table_ProTable__WEBPACK_IMPORTED_MODULE_1__[/* ProTable */ "a"]
});




/***/ })

/******/ });
//# sourceMappingURL=pro-table.js.map