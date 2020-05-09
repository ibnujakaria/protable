import { THead } from './THead'
import { Tr } from './Tr'
import TBody from './TBody'
import TFoot from './TFoot'

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
    this.thead = new THead({
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

    this.tbody = new TBody(this)
    this.$table.appendChild(this.tbody.$dom)
  }

  generateTFoot () {
    if (this.tfoot) {
      this.$table.removeChild(this.tfoot.$dom)
    }

    this.tfoot = new TFoot(this)
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

export default { ProTable }
export { ProTable}
