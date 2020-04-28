import { THead } from './THead'
import { Tr } from './Tr'

class ProTable {
  constructor(elId, options) {
    this.$elId = elId

    const defaultOptions = {}
    this.$options = { ...defaultOptions, options }
    this.$theads = []
    this.$trs = []
  }

  generateTable ({ columns, rows }) {
    this.generateTheads(columns)
    this.generateTrs(rows)

    this.$table = {
      $dom: document.createElement('table'),
      $thead: document.createElement('thead'),
      $tbody: document.createElement('tbody')
    }

    const trThead = document.createElement('tr')
    this.$theads.forEach(_thead => {
      trThead.appendChild(_thead.$dom)
    })

    this.$table.$thead.appendChild(trThead)
    this.$trs.forEach(_tr => {
      this.$table.$tbody.appendChild(_tr.$dom)
    })

    this.$table.$dom.appendChild(this.$table.$thead)
    this.$table.$dom.appendChild(this.$table.$tbody)
  }

  generateTheads (columns) {
    columns.forEach(_column => {
      this.$theads.push(
        new THead(_column)
      )
    })
  }
  
  generateTrs (array) {
    array.forEach(_item => {
      const row = []

      this.$theads.forEach(_thead => {
        row.push(_item[_thead.$key])
      })

      this.$trs.push(
        new Tr(row)
      )
    })
  }

  draw () {
    document.querySelector(this.$elId).appendChild(this.$table.$dom)
  }
}

export default { ProTable }
export { ProTable}
