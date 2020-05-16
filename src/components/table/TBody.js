import Tr from "./Tr"
import Td from "./Td"
import ProTable from "./ProTable"

class TBody {
  /**
   * Creates an instance of TBody.
   * @param { ProTable } proTable
   * @memberof TBody
   */
  constructor(proTable) {
    this.$dom = document.createElement('tbody')
    this.proTable = proTable
    this.trs = this.generateTrs()
    this.render()
  }

  generateTrs () {
    const columns = this.proTable.options.columns || this.proTable.columns
    const rows = this.proTable.rows
    const trs = []

    rows.forEach(_row => {
      const tr = new Tr()
      tr.addTds(this.generateTds(columns, _row))
      trs.push(tr)
    })

    return trs
  }

  generateTds (columns, _row) {
    let tds = []

    for (const _key in columns) {
      const _col = columns[_key]
      let rowContent = _row[_key]

      // override content if user defines targetIndex
      if (Number.isInteger(_col.targetIndex)) {
        rowContent = _row[
          Object.keys(this.proTable.columns)[_col.targetIndex]
        ]
      }

      // override content if user defines contents callback
      if (this.proTable.options.contents && this.proTable.options.contents[_key]) {
        rowContent = this.proTable.options.contents[_key](rowContent)
      }

      if (_col.childs) {
        // call generateTds recursively
        tds = tds.concat(
          this.generateTds(_col.childs, _row[_key])
        )
      } else {
        tds.push({ key: _key, label: rowContent })
      }
    }

    // console.log('generateTds', tds)

    return tds
  }

  /**
   * rendering trs
   *
   * @memberof TBody
   */
  render () {
    // delete rendered trs
    while (this.$dom.lastChild) {
      this.$dom.removeChild(this.$dom.lastChild)
    }

    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit)

    this.filteredTrs
      .sort(this._sort.bind(this))
      .slice(start, this.proTable.options.limit * page)
      .forEach(_tr => this.$dom.appendChild(_tr.$dom))

    // if there is no result for given keyword
    if (this.filteredTrs.length < 1 && this.proTable.options.keyword) {
      const tr = new Tr()
      const td = new Td({
        child: 'Not matching records found',
        options: {
          attrs: {
            colspan: this.proTable.thead.columnsCount
          },
          style: {
            textAlign: 'center'
          }
        }
      })

      tr.pushTd(td)
      this.$dom.appendChild(tr.$dom)
    }
  }

  get filteredTrs () {
    return this.trs
      .filter(this._filter.bind(this))
  }

  /**
   * Filter by Tr
   *
   * @param {*} _tr
   * @memberof TBody
   */
  _filter (_tr) {
    const keyword = this.proTable.options.keyword || ''

    return !!_tr.childs.find(_child => {
      return _child
        .$dom
        .innerText
        .toLowerCase()
        .indexOf(
          keyword.toLowerCase()
        ) > -1
    })
  }

  _sort (a, b) {
    const order = this.proTable.options.order

    if (order.key) {
      const tdA = a.childs.find(_td => _td.key === order.key)
      const tdB = b.childs.find(_td => _td.key === order.key)
      
      // ascending
      if (order.direction === 'asc') {
        return tdA.$dom.innerText > tdB.$dom.innerText ? 1 : -1
      } else {
        return tdA.$dom.innerText > tdB.$dom.innerText ? -1 : 1
      }
    }

    return 0
  }
}

export default TBody