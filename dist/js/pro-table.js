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
__webpack_require__.d(__webpack_exports__, "ProTable", function() { return /* reexport */ table_ProTable; });

// CONCATENATED MODULE: ./src/components/table/Td.js
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

/* harmony default export */ var table_Td = (Td);

// CONCATENATED MODULE: ./src/components/table/Th.js
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

/* harmony default export */ var table_Th = (Th);

// CONCATENATED MODULE: ./src/components/table/Tr.js



class Tr_Tr {
  constructor () {
    this.$dom = document.createElement('tr')
    this.childs = []
  }

  addTd ({ key, label }) {
    const td = new table_Td({ key, child: label })
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
    const th = new table_Th(column, options)
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

/* harmony default export */ var table_Tr = (Tr_Tr);


// CONCATENATED MODULE: ./src/components/table/THead.js



class THead_THead {

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
    let tr = new table_Tr()
    
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
        ths.push(new table_Th({
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
          new table_Th({
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

/* harmony default export */ var table_THead = ({ THead: THead_THead });


// CONCATENATED MODULE: ./src/components/table/TBody.js



class TBody_TBody {
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
      const tr = new table_Tr()
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
    // delete rendered trs
    while (this.$dom.lastChild) {
      this.$dom.removeChild(this.$dom.lastChild)
    }

    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit)

    this.filteredTrs
      .sort(this._sort.bind(this))
      .slice(start, this.proTable.options.limit * page)
      .forEach(_tr => this.$dom.appendChild(_tr.$dom))

    // if there is no result for given keyword
    if (this.filteredTrs.length < 1 && this.proTable.options.keyword) {
      const tr = new table_Tr()
      const td = new table_Td({
        child: 'Not matching records found',
        options: {
          attrs: {
            colspan: this.proTable.thead.columnsCount
          },
          style: {
            textAlign: 'center'
          }
        }
      })

      tr.pushTd(td)
      this.$dom.appendChild(tr.$dom)
    }
  }

  get filteredTrs () {
    return this.trs
      .filter(this._filter.bind(this))
  }

  /**
   * Filter by Tr
   *
   * @param {*} _tr
   * @memberof TBody
   */
  _filter (_tr) {
    const keyword = this.proTable.options.keyword || ''

    return !!_tr.childs.find(_child => {
      return _child
        .$dom
        .innerText
        .toLowerCase()
        .indexOf(
          keyword.toLowerCase()
        ) > -1
    })
  }

  _sort (a, b) {
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

/* harmony default export */ var table_TBody = (TBody_TBody);
// CONCATENATED MODULE: ./src/components/pagination/RowsPerPage.js
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

/* harmony default export */ var pagination_RowsPerPage = (RowsPerPage);

// CONCATENATED MODULE: ./src/components/pagination/SimplePagination.js


class SimplePagination_SimplePagination {
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
    this.rowsPerPage = new pagination_RowsPerPage(this.proTable)
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
    const totalRows = this.proTable.tbody.filteredTrs.length
    const lastPage = Math.ceil(totalRows / limit)

    this.$span.innerText = `${start}-${(to > totalRows ? totalRows : to)} of ${totalRows}`

    this.$btnPrev.disabled = page === 1
    this.$btnNext.disabled = page === lastPage
  }
}

/* harmony default export */ var pagination_SimplePagination = (SimplePagination_SimplePagination);

// CONCATENATED MODULE: ./src/components/table/TFoot.js




class TFoot_TFoot {
  
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

    this.simplePagination = new pagination_SimplePagination(this.proTable)

    const columnsCount = this.proTable.thead.columnsCount
    const tr = new table_Tr()

    const td = new table_Td({
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

/* harmony default export */ var table_TFoot = (TFoot_TFoot);

// CONCATENATED MODULE: ./src/components/search/Input.js
class Input {
  constructor ({ proTable }) {
    this.proTable = proTable

    this._createInput()
  }

  _createInput () {
    this.$dom = document.createElement('input')
    this.$dom.placeholder = 'Search'
    this.$dom.addEventListener('keyup', this._onKeyUp.bind(this))
  }

  _onKeyUp () {
    this.proTable.setKeyword(this.$dom.value)
  }
}

/* harmony default export */ var search_Input = (Input);

// CONCATENATED MODULE: ./src/components/Header.js


class Header_Header {
  constructor({ proTable }) {
    this.proTable = proTable

    this.$dom = document.createElement('header')
    this._applyStyles()
    this._createSearch()
  }

  _applyStyles () {
    this.$dom.style.textAlign = 'right'
  }

  _createSearch () {
    this.search = new search_Input({ proTable: this.proTable })
    this.$dom.appendChild(this.search.$dom)
  }
}

/* harmony default export */ var components_Header = (Header_Header);

// CONCATENATED MODULE: ./src/components/table/ProTable.js






class ProTable_ProTable {
  constructor(elId, options) {
    this.elId = elId

    const defaultOptions = {
      classes: [],
      thead: {},
      limit: 10,
      page: 1,
      keyword: null,
      pagination: 'simple',
      order: {
        key: null,
        direction: null
      }
    }

    this.options = { ...defaultOptions, ...options }
    this.thead = null
    this.tbody = null
    this.$dom = document.createElement('section')
    this.$dom.classList.add('pro-table')
  }

  generateTable ({ columns, rows }) {
    this.columns = columns
    this.rows = rows
    this.$table = document.createElement('table')
    this.$dom.appendChild(this.$table)
    this._generateHeader()
    this._generateThead({ columns, rows })
    this._generateTbody()
    this._generateTFoot()

    // apply options
    if (this.options.classes) {
      this.options.classes.forEach(_class => {
        this.$table.classList.add(_class)
      })
    }

    console.log(this.$table)
  }

  _generateHeader () {
    this.header = new components_Header({ proTable: this })
    this.$dom.prepend(this.header.$dom)
  }

  _generateThead ({ columns, rows }) {
    this.thead = new THead_THead({
      columns,
      proTable: this,
      options: this.options.thead
    })
    this.$table.appendChild(this.thead.$dom)
  }
  
  _generateTbody () {
    if (this.tbody) {
      this.$table.removeChild(this.tbody.$dom)
    }

    this.tbody = new table_TBody(this)
    this.$table.appendChild(this.tbody.$dom)
  }

  _generateTFoot () {
    if (this.tfoot) {
      this.$table.removeChild(this.tfoot.$dom)
    }

    this.tfoot = new table_TFoot(this)
    this.$table.appendChild(this.tfoot.$dom)
  }

  setKeyword (keyword) {
    this.options.keyword = keyword
    this.setPage(1)
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
    document.querySelector(this.elId).appendChild(this.$dom)
  }
}

/* harmony default export */ var table_ProTable = (ProTable_ProTable);

// CONCATENATED MODULE: ./src/helpers/from-array.js


const fromArray = (elId, array, options) => {
  const columns = generateColumns(array)

  console.log('columns', columns)

  const proTable = new table_ProTable(elId, options)
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

/* harmony default export */ var from_array = (fromArray);

// CONCATENATED MODULE: ./src/helpers/from-dom-table.js


const fromDOMTable = (selector, options) => {
  const dom = document.querySelector(selector)
  const columns = getColumnsFromDom(dom)
  const rows = getRowsFromDom(dom, columns)

  console.log('fromTable', 'dom:', dom)
  console.log('fromTable', 'columns:', columns)
  console.log('fromTable', 'rows:', rows)

  const proTable = new table_ProTable(null, options)
  proTable.generateTable({
    columns,
    rows
  })

  console.log('fromTable', 'proTable:', proTable.$dom)

  // replace the dom input
  dom.replaceWith(proTable.$dom)
}

function getColumnsFromDom (table) {
  const firstTr = table.querySelector('thead tr')

  return Array.from(firstTr.children)
    .map(_child => _child.innerText)
}

function getRowsFromDom (table, columns) {
  const trs = table.querySelectorAll('tbody tr')

  return Array.from(trs)
    .map(_tr => {
      const row = {}

      columns.forEach((_column, _index) => {
        row[_column] = _tr.children[_index].innerText
      })

      return row
    })
}

/* harmony default export */ var from_dom_table = (fromDOMTable);

// CONCATENATED MODULE: ./src/index.js




/* harmony default export */ var src = __webpack_exports__["default"] = ({
  fromArray: from_array,
  ProTable: table_ProTable
});




/***/ })
/******/ ]);
//# sourceMappingURL=pro-table.js.map