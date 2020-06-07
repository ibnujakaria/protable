import Tr from "./Tr"
import Td from "./Td"
import SimplePagination from "../pagination/SimplePagination"
import DefaultPagination from "../pagination/DefaultPagination"

/**
 * @typedef { Object } TFoot.Options
 * @property { string[] } classes - `tfoot` classes
 * @property { string[] } trClasses - `tfoot > tr` classes
 * @property { string[] } thClasses - `tfoot > tr > th` classes
 */

/**
 * @class TFoot
 * @property { TFoot.Options } options
 */
class TFoot {
  
  constructor({ proTable, options }) {
    this.proTable = proTable
    this.options = options
    this.$dom = document.createElement('tfoot')
    this.trs = []

    this.createPagination()
    this.trs.forEach(_tr => this.$dom.appendChild(_tr.$dom))

    // apply tfoot classes
    if (this.options?.classes?.length) {
      this.$dom.classList.add(...this.options.classes)
    }
  }

  createPagination () {
    const options = this.proTable.options

    if (this.proTable.totalRows < this.proTable.options.limit || !!!options.pagination) {
      return
    }

    if (options.pagination === 'simple' || options.pagination.type === 'simple') {
      this.pagination = new SimplePagination(this.proTable)
    } else {
      this.pagination = new DefaultPagination(this.proTable)
    }

    const columnsCount = this.proTable.thead.columnsCount
    const tr = new Tr({ classes: this.options?.trClasses })

    const td = new Td({
      child: this.pagination.$dom,
      options: {
          classes: this.options?.tdClasses || [],
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
