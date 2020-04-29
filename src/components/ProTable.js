import { THead } from './THead'
import { Tr } from './Tr'
import TBody from './TBody'

class ProTable {
  constructor(elId, options) {
    this.$elId = elId

    const defaultOptions = {
      classes: []
    }

    this.options = { ...defaultOptions, ...options }
    this.thead = null
    this.tbody = null
  }

  generateTable ({ columns, rows }) {
    this.thead = new THead(columns)
    this.tbody = new TBody(rows)

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

export default { ProTable }
export { ProTable}
