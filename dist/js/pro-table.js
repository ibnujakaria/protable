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

/***/ "./src/components/pagination/RowsPerPage.js":
/*!**************************************************!*\
  !*** ./src/components/pagination/RowsPerPage.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RowsPerPage {
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')
    this.$dom.style.display = 'inline-block'
    this.$dom.style.marginRight = '1rem'

    this._createSpan()
    this._createSelect()
  }

  _createSpan () {
    const span = document.createElement('span')
    span.innerText = 'Rows per page:'
    span.style.marginRight = '1rem'

    this.$dom.appendChild(span)
  }

  _createSelect () {
    const selectedLimit = this.proTable.options.limit
    this.$select = document.createElement('select');

    ([5, 10, 25, 50, 100, 250, 500]).forEach(limit => {
      const option = document.createElement('option')
      option.value = limit
      option.innerText = limit
      option.selected = parseInt(selectedLimit) === limit

      this.$select.appendChild(option)
    })

    this.$select.addEventListener('change', e => {
      this.proTable.setLimit(this.$select.value)
    })

    this.$dom.appendChild(this.$select)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (RowsPerPage);


/***/ }),

/***/ "./src/components/pagination/SimplePagination.js":
/*!*******************************************************!*\
  !*** ./src/components/pagination/SimplePagination.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _RowsPerPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowsPerPage */ "./src/components/pagination/RowsPerPage.js");


class SimplePagination {
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')

    this._createRowsPerPage()
    this._createSpan()
    this._createPrevButton()
    this._createNextButton()
    this.render()
  }

  _createRowsPerPage () {
    this.rowsPerPage = new _RowsPerPage__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this.proTable)
    this.$dom.appendChild(this.rowsPerPage.$dom)
  }

  _createSpan () {
    this.$span = document.createElement('span')
    this.$span.style.marginRight = '1rem'
    this.$dom.appendChild(this.$span)
  }
  
  _createNextButton () {
    this.$btnNext = document.createElement('button')
    this.$btnNext.innerText = 'Next'
    
    this.$btnNext.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page + 1)
    })

    this.$dom.appendChild(this.$btnNext)
  }

  _createPrevButton () {
    this.$btnPrev = document.createElement('button')
    this.$btnPrev.innerText = 'Prev'
    
    this.$dom.appendChild(this.$btnPrev)
    
    this.$btnPrev.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page - 1)
    })
  }
  
  render () {
    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit) + 1
    const to = start + limit - 1
    const totalRows = this.proTable.tbody.trs.length
    const lastPage = Math.ceil(totalRows / limit)

    this.$span.innerText = `${start}-${(to > totalRows ? totalRows : to)} of ${totalRows}`

    this.$btnPrev.disabled = page === 1
    this.$btnNext.disabled = page === lastPage
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SimplePagination);


/***/ }),

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
/* harmony import */ var _TFoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TFoot */ "./src/components/table/TFoot.js");





class ProTable {
  constructor(elId, options) {
    this.$elId = elId

    const defaultOptions = {
      classes: [],
      thead: {},
      limit: 10,
      page: 1,
      pagination: 'simple',
      order: {
        key: null,
        direction: null
      }
    }

    this.options = { ...defaultOptions, ...options }
    this.thead = null
    this.tbody = null
  }

  generateTable ({ columns, rows }) {
    this.columns = columns
    this.rows = rows
    this.$table = document.createElement('table')
    this.generateThead({ columns, rows })
    this.generateTbody()
    this.generateTFoot()

    // apply options
    if (this.options.classes) {
      this.options.classes.forEach(_class => {
        this.$table.classList.add(_class)
      })
    }

    console.log(this.$table)
  }

  generateThead ({ columns, rows }) {
    this.thead = new _THead__WEBPACK_IMPORTED_MODULE_0__[/* THead */ "a"]({
      columns,
      proTable: this,
      options: this.options.thead
    })
    this.$table.appendChild(this.thead.$dom)
  }
  
  generateTbody () {
    if (this.tbody) {
      this.$table.removeChild(this.tbody.$dom)
    }

    this.tbody = new _TBody__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](this)
    this.$table.appendChild(this.tbody.$dom)
  }

  generateTFoot () {
    if (this.tfoot) {
      this.$table.removeChild(this.tfoot.$dom)
    }

    this.tfoot = new _TFoot__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](this)
    this.$table.appendChild(this.tfoot.$dom)
  }

  setPage (page) {
    this.options.page = page

    if (page < 1) {
      this.options.page = 1
    }

    this.tbody.render()
    this.tfoot.render()
  }

  setLimit (limit) {
    this.options.page = 1
    this.options.limit = parseInt(limit)

    this.tbody.render()
    this.tfoot.render()
  }

  setOrder ({ key, direction }) {
    this.options.order = { key, direction }
    
    this.thead.render()
    this.setPage(1)
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
  constructor(proTable) {
    this.$dom = document.createElement('tbody')
    this.proTable = proTable
    this.trs = this.generateTrs(this.proTable.columns, this.proTable.rows)
    console.log(this.trs)

    console.log('TBody', 'constructor')

    this.render()
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
        tds.push({ key: _column, label: _row[_column] })
      }
    })

    console.log('generateTds', tds)

    return tds
  }

  /**
   * rendering trs
   *
   * @memberof TBody
   */
  render () {
    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit)

    console.log(this.trs.slice(start))

    // delete rendered trs
    while (this.$dom.lastChild) {
      this.$dom.removeChild(this.$dom.lastChild)
    }

    this.trs
      .filter(this.filter)
      .sort((a, b) => this.sort(a, b))
      .slice(start, this.proTable.options.limit * page)
      .forEach(_tr => this.$dom.appendChild(_tr.$dom))
  }

  /**
   * Filter by Tr
   *
   * @param {*} _tr
   * @memberof TBody
   */
  filter (_tr) {
    return true
  }

  sort (a, b) {
    const order = this.proTable.options.order

    if (order.key) {
      const tdA = a.childs.find(_td => _td.key === order.key)
      const tdB = b.childs.find(_td => _td.key === order.key)
      
      // ascending
      if (order.direction === 'asc') {
        return tdA.$dom.innerText > tdB.$dom.innerText ? 1 : -1
      } else {
        return tdA.$dom.innerText > tdB.$dom.innerText ? -1 : 1
      }
    }

    return 0
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TBody);

/***/ }),

/***/ "./src/components/table/TFoot.js":
/*!***************************************!*\
  !*** ./src/components/table/TFoot.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Tr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tr */ "./src/components/table/Tr.js");
/* harmony import */ var _Td__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Td */ "./src/components/table/Td.js");
/* harmony import */ var _pagination_SimplePagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pagination/SimplePagination */ "./src/components/pagination/SimplePagination.js");




class TFoot {
  
  constructor(proTable) {
    this.proTable = proTable
    this.$dom = document.createElement('tfoot')
    this.trs = []

    if (this.proTable.options.pagination == 'simple') {
      this.createSimplePagination()
    }

    this.trs.forEach(_tr => this.$dom.appendChild(_tr.$dom))
  }

  createSimplePagination () {
    if (this.proTable.tbody.trs.length < this.proTable.options.limit) {
      return
    }

    this.simplePagination = new _pagination_SimplePagination__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](this.proTable)

    const columnsCount = this.proTable.thead.columnsCount
    const tr = new _Tr__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]()

    const td = new _Td__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]({
      child: this.simplePagination.$dom,
      options: {
          attrs: {
          colspan: columnsCount
        },
        style: {
          textAlign: 'right'
        }
      }
    })

    tr.pushTd(td)
    this.trs.push(tr)
  }

  render () {
    if (this.proTable.options.pagination == 'simple' && this.simplePagination) {
      this.simplePagination.render()
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TFoot);


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
   * @param {*} { columns, proTable, options }
   * @memberof THead
   */
  constructor ({ columns, proTable, options }) {
    this.options = {
      thClasses: [],
      ...options
    }
    this.proTable = proTable
    this.$dom = document.createElement('thead')
    this.trs = this.generateTrs(columns)
    this.columnsCount = (() => {
      return this.trs[0].childs
        .map(th => th.options.attrs.colspan)
        .reduce((a, b) => a + b)
    })()

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
      if (_th.options.attrs.colspan === 1) {
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
        ths.push(new _Th__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]({
          key,
          proTable: this.proTable,
          options: {
            attrs: {
              colspan: this.getColspan(_col[key])
            },
            classes: this.options.thClasses
          }
        }))
        childs = childs.concat(_col[key])
      } else {
        ths.push(
          new _Th__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]({
            key: _col, 
            proTable: this.proTable,
            options: {
              classes: this.options.thClasses
            }
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
        colspan += this.getColspan(_col[Object.keys(_col)[0]]) - 1
      }
    })

    return colspan
  }

  render () {
    this.trs.forEach(_tr => {
      _tr.childs.forEach(_child => _child.render())
    })
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
  constructor ({ key, child, options }) {
    this.key = key
    if (child instanceof Node) {
      this.buildDOMFromNode(child)
    } else {
      this.buildDOMFromString(child)
    }

    this.options = {
      attrs: {
        colspan: 1
      },
      style: {},
      ...options
    }

    for (const attr in this.options.attrs) {
      this.$dom.setAttribute(attr, this.options.attrs[attr])
    }

    for (const style in this.options.style) {
      this.$dom.style[style] = this.options.style[style]
    }
  }

  buildDOMFromString (child) {
    this.$dom = document.createElement('td')
    this.$dom.innerHTML = child || '-'
  }

  buildDOMFromNode (node) {
    this.$dom = document.createElement('td')
    this.$dom.appendChild(node)
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
  constructor ({ key, proTable, options }) {
    this.key = key
    this.proTable = proTable
    this.$dom = document.createElement('th')

    this.options = {
      attrs: {
        colspan: 1
      },
      orderabel: true,
      ...options
    }

    this._createContainer()
    this._createSpan()
    this._applyAttributes()
    this._applyClasses()
    this._applyOrderable()
  }

  _createContainer () {
    this.$container = document.createElement('div')
    this.$container.style.display = 'flex'
    this.$container.style.justifyContent = 'space-between'
    this.$container.style.alignItems = 'center'

    this.$dom.appendChild(this.$container)
  }

  _applyAttributes () {
    for (const attr in this.options.attrs) {
      this.$dom.setAttribute(attr, this.options.attrs[attr])
    }
  }

  _applyClasses () {
    if (this.options.classes) {
      this.options.classes.forEach(_class => this.$dom.classList.add(_class))
    }
  }

  _createSpan () {
    this.$spanLabel = document.createElement('span')
    this.$spanLabel.innerHTML = `${this.key[0].toUpperCase()}${this.key.toLowerCase().substr(1)}` || '-'
    this.$container.appendChild(this.$spanLabel)
  }

  _isOrderable () {
    return this.options.orderabel && this.options.attrs.colspan === 1
  }

  _applyOrderable () {
    if (!this._isOrderable()) {
      return
    }

    this.$container.style.cursor = 'pointer'

    this.$spanTop = document.createElement('span')
    this.$spanTop.innerHTML = '&#9652;'
    this.$spanTop.style.marginBottom = '-4px'

    this.$spanBottom = document.createElement('span')
    this.$spanBottom.innerHTML = '&#9662;'
    this.$spanBottom.style.marginTop = '-4px'

    this.$orderDom = document.createElement('div')
    this.$orderDom.appendChild(this.$spanTop)
    this.$orderDom.appendChild(this.$spanBottom)
    this.$orderDom.style.display = 'inline-flex'
    this.$orderDom.style.flexDirection = 'column'
    this.$orderDom.style.justifyContent = 'center'
    this.$orderDom.style.fontSize = '70%'
    this.$orderDom.style.height = '20px'
    this.$orderDom.style.opacity = 0.3
    this.$container.appendChild(this.$orderDom)

    this.$dom.addEventListener('click', e => {
      this._toggleOrder()
    })
  }
  
  _toggleOrder () {
    const order = this.proTable.options.order
    let payload = {
      key: this.key,
      direction: 'asc'
    }

    if (order.key === this.key) {
      payload.direction = order.direction === 'desc' ? 'asc' : 'desc'
    }

    this.proTable.setOrder(payload)
  }

  render () {
    if (this._isOrderable()) {
      const order = this.proTable.options.order;
  
      this.$spanTop.style.visibility = order.key === this.key &&
        order.direction === 'desc' ?'hidden' : ''
  
      this.$spanBottom.style.visibility = order.key === this.key &&
        order.direction === 'asc' ?'hidden' : ''
    }
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

  addTd ({ key, label }) {
    const td = new _Td__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({ key, child: label })
    this.childs.push(td)
    this.$dom.appendChild(td.$dom)
  }

  pushTd (td) {
    this.childs.push(td)
    this.$dom.appendChild(td.$dom)
  }

  addTds (array) {
    // _item = { key, label }

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