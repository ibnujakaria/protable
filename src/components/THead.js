import Tr from "./Tr"

class THead {
  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { * } columns
   * @memberof THead
   */
  constructor (columns) {
    this.$dom = document.createElement('thead')
    this.trs = this.generateTrs(columns)
    this.columns = columns

    // append child
    this.trs.forEach(tr => this.$dom.appendChild(tr.$dom))
  }

  generateTrs (columns) {
    let tr = new Tr()
    let trs = [tr]

    columns.forEach(_col => {
      if (_col !== null && _col.constructor === Object) {
        for (const key in _col) {
          tr.addTh(key, {
            attrs: {
              colspan: _col[key].length
            }
          })

          trs = trs.concat(
            this.generateTrs(_col[key])
          )
        }
      } else {
        tr.addTh(_col)
      }
    })

    // setting rowspan for td/th that hasnt a colspan attr
    tr.childs.forEach(_child => {
      if (!_child.$dom.getAttribute('colspan') && trs.length > 1) {
        _child.$dom.setAttribute('rowspan', trs.length)
      }
    })

    return trs
  }
}

export default { THead }
export { THead }
