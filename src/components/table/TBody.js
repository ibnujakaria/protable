import Tr from "./Tr"
import Td from "./Td"

class TBody {
  constructor(proTable) {
    this.$dom = document.createElement('tbody')
    this.proTable = proTable
    this.trs = this.generateTrs(this.proTable.columns, this.proTable.rows)
    console.log(this.trs)

    console.log('TBody', 'constructor')

    this.render()
  }

  generateTrs (columns, rows) {
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

    columns.forEach(_column => {
      if (_column !== null && _column.constructor === Object) {
        // call generateTds recursively
        tds = tds.concat(
          this.generateTds(Object.values(_column)[0], _row[Object.keys(_column)[0]])
        )
      } else {
        tds.push({ key: _column, label: _row[_column] })
      }
    })

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