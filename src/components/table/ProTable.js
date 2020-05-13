import { THead } from './THead'
import { Tr } from './Tr'
import TBody from './TBody'
import TFoot from './TFoot'
import Header from '../Header'

/**
 * ProTable Options
 * 
 * @typedef { Object } ProTable.Options
 * @property { string[] } classes - Classes name of the table
 * @property { Object } thead - Thead
 * @property { string[] | Object } columns - Custom columns of table
 * @property { Object } pagination - Pagination specific options
 * @property { string } pagination.type - Pagination type
 */

/**
 * ProTable class
 *
 * @class ProTable
 * @property { ProTable.Options } options
 */
class ProTable {
  /**
   *Creates an instance of ProTable.
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

    console.log(this.options)
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
    this._generateThead({ columns })
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
    this.header = new Header({ proTable: this })
    this.$dom.prepend(this.header.$dom)
  }

  _generateThead ({ columns }) {
    this.thead = new THead({
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

    this.tbody = new TBody(this)
    this.$table.appendChild(this.tbody.$dom)
  }

  _generateTFoot () {
    if (this.tfoot) {
      this.$table.removeChild(this.tfoot.$dom)
    }

    this.tfoot = new TFoot(this)
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
    document.querySelector(this.selector).appendChild(this.$dom)
  }
}

export default ProTable
