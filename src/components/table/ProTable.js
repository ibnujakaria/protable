import THead from './THead'
import TBody from './TBody'
import TFoot from './TFoot'
import Header from '../Header'

/**
 * ProTable Options
 * 
 * @typedef { Object } ProTable.Options
 * @property { string[] } classes - Classes name of the table
 * @property { Thead.Options } thead - Thead
 * @property { Object } tbody - TBody
 * @property { TFoot.Options } tfoot - Tfoot
 * @property { Object } columns - Custom columns of table
 * @property { Object } contents
 * @property { Number } limit - page limit
 * @property { Boolean } fromServer 
 * @property { String } keyword for searching purpose
 * @property { Object } order
 * @property { String } order.key order key
 * @property { String } order.direction direction 'asc' or 'desc'
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
class ProTable {
  /**
   * Creates an instance of ProTable.
   * @param { string } selector - DOM selector where the ProTable should replace
   * @param { ProTable.Options } options
   * @memberof ProTable
   */
  constructor(selector, options) {
    this.selector = selector
    
    /**
     * @type ProTable.Options
     */
    const defaultOptions = {
      classes: [],
      thead: {},
      limit: 10,
      page: 1,
      fromServer: false,
      keyword: null,
      pagination: {
        type: 'default'
      },
      order: {
        key: null,
        direction: null
      }
    }

    /**
     * @type { ProTable.Options }
     */
    this.options = { ...defaultOptions, ...options }

    this.thead = null
    this.tbody = null
    this.$dom = document.createElement('section')
    this.$dom.classList.add('protable')
    this._listeners = {}
  }

  generateTable ({ columns, rows }) {
    this.$table = document.createElement('table')
    this.$dom.appendChild(this.$table)

    this.setColumns(columns)
    this.setRows(rows)

    this._generateHeader()
    this._generateThead()
    this._generateTbody()
    this._generateTFoot()

    // apply options
    if (this.options.classes) {
      this.$table.classList.add(...this.options.classes)
    }
  }

  setColumns (columns) {
    this.columns = this._formatColumns(columns)
    if (this.options.columns) {
      // merging
      for (const _key in this.options.columns) {
        const _col = this.options.columns[_key]

        if (Number.isInteger(_col.targetIndex)) {
          const _targetKey = Object.keys(this.columns)[_col.targetIndex]
          this.columns[_targetKey] = { ...this.columns[_targetKey], ..._col }
        } else if (this.columns[_key]) {
          this.columns[_key] = { ...this.columns[_key], ..._col }
        }
      }
    }
  }

  setRows (rows) {
    this.rows = rows
  }

  _formatColumns (columns) {
    // if columns is Object, return as is
    if (columns !== null && columns.constructor === Object) {
      return columns
    }

    const formatted = {}

    columns.forEach(_col => {
      if (_col !== null && _col.constructor === Object) {
        const key = Object.keys(_col)[0]
        formatted[key] = {
          label: `${key[0].toUpperCase()}${key.substr(1)}`,
          childs: this._formatColumns(
            Object.values(_col)[0]
          )
        }
      } else {
        formatted[_col] = {
          label: `${_col[0].toUpperCase()}${_col.substr(1)}`
        }
      }
    })

    return formatted
  }

  _generateHeader () {
    this.header = new Header({ proTable: this })
    this.$dom.prepend(this.header.$dom)
  }

  _generateThead () {
    this.thead = new THead({
      proTable: this,
      options: this.options.thead
    })
    this.$table.appendChild(this.thead.$dom)
  }
  
  _generateTbody () {
    if (this.tbody) {
      this.$table.removeChild(this.tbody.$dom)
    }

    this.tbody = new TBody({
      proTable: this,
      options: this.options.tbody
    })
    this.$table.appendChild(this.tbody.$dom)
  }

  _generateTFoot () {
    if (this.tfoot) {
      this.$table.removeChild(this.tfoot.$dom)
    }

    this.tfoot = new TFoot({ proTable: this, options: this.options.tfoot })
    this.$table.appendChild(this.tfoot.$dom)
  }

  setKeyword (keyword) {
    this.options.keyword = keyword
    this.setPage(1)
  }

  async setPage (page) {
    this.options.page = page

    if (page < 1) {
      this.options.page = 1
    }

    if (!this.options.fromServer) {
      this.tbody?.render()
      this.tfoot?.render()
    }

    this.emit('pageChanged', page)
  }

  setLimit (limit) {
    this.options.page = 1
    this.options.limit = parseInt(limit)

    this.setPage(1)
  }

  setOrder ({ key, direction }) {
    this.options.order = { key, direction }
    
    this.thead.render()
    this.setPage(1)
  }

  get totalRows () {
    if (this.options.fromServer) {
      return this.options.totalRows
    }

    return this.tbody.trs.length
  }

  get totalFilteredRows () {
    if (this.options.fromServer) {
      return this.options.totalRows
    }

    return this.tbody.filteredTrs.length
  }

  get lastPage () {
    if (this.options.fromServer) {
      return this.options.lastPage
    }

    return Math.ceil(this.totalFilteredRows / this.options.limit)
  }

  /**
   * Set listener to the ProTable. The listener will called
   * by using emit() function
   *
   * @param { String } event 
   * @param { Function } listener 
   */
  on (event, listener) {
    if (!this._listeners[event]) {
      this._listeners[event] = []
    }

    this._listeners[event].push(listener)
  }

  /**
   * Trigger an event
   * 
   * @param { String } event 
   */
  emit (event, payload) {
    if (this._listeners[event]?.length) {
      this._listeners[event].forEach(callback => callback(payload))
    }
  }

  draw () {
    document.querySelector(this.selector).appendChild(this.$dom)
  }
}

export default ProTable
