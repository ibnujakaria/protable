import Tr from "./Tr"

class TBody {
  constructor({ columns, rows }) {
    this.$dom = document.createElement('tbody')
    this.trs = this.generateTrs(columns, rows)

    // appending trs to dom
    this.trs.forEach(_tr => this.$dom.appendChild(_tr.$dom))
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
}

export default TBody