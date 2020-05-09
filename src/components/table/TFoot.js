import Tr from "./Tr"
import Td from "./Td"
import SimplePagination from "../pagination/SimplePagination"

class TFoot {
  
  constructor(proTable) {
    this.proTable = proTable
    this.$dom = document.createElement('tfoot')
    this.trs = []

    if (this.proTable.options.pagination == 'simple') {
      this.renderSimplePagination()
    }

    this.trs.forEach(_tr => this.$dom.appendChild(_tr.$dom))
  }

  renderSimplePagination () {
    if (this.proTable.tbody.trs.length < this.proTable.options.limit) {
      return
    }

    this.simplePagination = new SimplePagination(this.proTable)

    const columnsCount = this.proTable.thead.columnsCount
    const tr = new Tr()

    const td = new Td(this.simplePagination.$dom, {
      attrs: {
        colspan: columnsCount
      },
      style: {
        textAlign: 'right'
      }
    })

    tr.pushTd(td)
    this.trs.push(tr)
  }
}

export default TFoot
