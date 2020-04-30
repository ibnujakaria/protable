import Tr from "./Tr"
import Td from "./Td"

class TFooter {
  
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

    const columnsCount = this.proTable.thead.columnsCount
    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit) + 1
    const to = start + limit - 1
    const totalRows = this.proTable.tbody.trs.length
    const tr = new Tr()

    const div = document.createElement('div')
    div.innerText = `${start}-${(to > totalRows ? totalRows : to)} of ${totalRows}`

    const btnPrev = document.createElement('button')
    btnPrev.innerText = 'Prev'
    const btnNext = document.createElement('button')
    btnNext.innerText = 'Next'

    div.appendChild(btnPrev)
    div.appendChild(btnNext)

    btnPrev.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page - 1)
    })

    btnNext.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page + 1)
    })

    const td = new Td(div, {
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

export default TFooter
