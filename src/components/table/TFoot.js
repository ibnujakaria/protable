import Tr from "./Tr"
import Td from "./Td"
import SimplePagination from "../pagination/SimplePagination"
import DefaultPagination from "../pagination/DefaultPagination"

class TFoot {
  
  constructor(proTable) {
    this.proTable = proTable
    this.$dom = document.createElement('tfoot')
    this.trs = []

    this.createPagination()
    this.trs.forEach(_tr => this.$dom.appendChild(_tr.$dom))
  }

  createPagination () {
    const options = this.proTable.options

    if (this.proTable.tbody.trs.length < this.proTable.options.limit || !!!options.pagination) {
      return
    }

    if (options.pagination === 'simple' || options.pagination.type === 'simple') {
      this.pagination = new SimplePagination(this.proTable)
    } else {
      this.pagination = new DefaultPagination(this.proTable)
    }

    const columnsCount = this.proTable.thead.columnsCount
    const tr = new Tr()

    const td = new Td({
      child: this.pagination.$dom,
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
    if (this.pagination) {
      this.pagination.render()
    }
  }
}

export default TFoot
