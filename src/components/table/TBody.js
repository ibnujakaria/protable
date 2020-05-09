import Tr from "./Tr"

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
        tds.push(_row[_column])
      }
    })

    return tds
  }

  /**
   * rendering trs
   *
   * @memberof TBody
   */
  render () {
    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit)

    console.log(this.trs.slice(start))

    // delete rendered trs
    while (this.$dom.lastChild) {
      this.$dom.removeChild(this.$dom.lastChild)
    }

    this.trs
      .filter(this.filter)
      .slice(start, this.proTable.options.limit * page)
      .forEach(_tr => this.$dom.appendChild(_tr.$dom))
  }

  /**
   * Filter by Tr
   *
   * @param {*} _tr
   * @memberof TBody
   */
  filter (_tr) {
    return true
  }
}

export default TBody