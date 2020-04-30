import { THead } from './THead'
import { Tr } from './Tr'
import TBody from './TBody'
import TFooter from './TFooter'

class ProTable {
  constructor(elId, options) {
    this.$elId = elId

    const defaultOptions = {
      classes: [],
      thead: {},
      limit: 10,
      page: 1,
      pagination: 'simple'
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
    this.generateTFooter()

    // apply options
    if (this.options.classes) {
      this.options.classes.forEach(_class => {
        this.$table.classList.add(_class)
      })
    }

    console.log(this.$table)
  }

  generateThead ({ columns, rows }) {
    this.thead = new THead(columns, this.options.thead)
    this.$table.appendChild(this.thead.$dom)
  }
  
  generateTbody () {
    if (this.tbody) {
      this.$table.removeChild(this.tbody.$dom)
    }

    this.tbody = new TBody(this)
    this.$table.appendChild(this.tbody.$dom)
  }

  generateTFooter () {
    if (this.tfooter) {
      this.$table.removeChild(this.tfooter.$dom)
    }

    this.tfooter = new TFooter(this)
    this.$table.appendChild(this.tfooter.$dom)
  }

  setPage (page) {
    this.options.page = page

    if (page < 1) {
      this.options.page = 1
    }

    this.generateTbody()
    this.generateTFooter()
  }

  draw () {
    document.querySelector(this.$elId).appendChild(this.$table)
  }
}

export default { ProTable }
export { ProTable}
