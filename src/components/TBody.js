import Tr from "./Tr"

class TBody {
  constructor(rows) {
    this.$dom = document.createElement('tbody')
    this.trs = this.generateTrs(rows)

    // appending trs to dom
    this.trs.forEach(_tr => this.$dom.appendChild(_tr.$dom))
  }

  generateTrs (rows) {
    const trs = []

    rows.forEach(_columns => {
      const tr = new Tr()
      tr.addTds(this.generateTds(_columns))
      trs.push(tr)      
    })

    return trs
  }

  generateTds (columns) {
    let tds = []

    for (const key in columns) {
      if (columns[key] !== null && columns[key].constructor === Object) {
        // call generateTds recursively
        tds = tds.concat(this.generateTds(columns[key]))
      } else {
        tds.push(columns[key])
      }
    }

    return tds
  }
}

export default TBody