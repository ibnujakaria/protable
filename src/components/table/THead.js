import Tr from "./Tr"
import Th from "./Th"

class THead {
  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { * } columns
   * @param { * } options
   * @memberof THead
   */
  constructor (columns, options) {
    this.options = {
      thClasses: [],
      ...options
    }

    this.$dom = document.createElement('thead')
    this.trs = this.generateTrs(columns)

    console.log('trs', this.trs)
    this.columns = columns

    // append child
    this.trs.forEach(tr => this.$dom.appendChild(tr.$dom))
  }

  generateTrs (columns) {
    let trs = []
    
    let { ths, childs } = this.generateThs(columns)
    let tr = new Tr()
    
    ths.forEach(_th => tr.pushTh(_th))
    trs.push(tr)

    if (childs.length) {
      trs = trs.concat(this.generateTrs(childs))
    }
    
    // add rowspan to th that has not colspan attr
    // and fix colspan as its child
    tr.childs.forEach(_th => {
      if (!_th.$dom.getAttribute('colspan')) {
        _th.$dom.setAttribute('rowspan', trs.length)
      }
    })

    return trs
  }

  generateThs (columns) {
    let ths = []
    let childs = []

    columns.forEach(_col => {
      if (_col !== null && _col.constructor === Object) {
        const key = Object.keys(_col)[0]
        ths.push(new Th(key, {
          attrs: {
            colspan: this.getColspan(_col[key])
          },
          classes: this.options.thClasses
        }))
        childs = childs.concat(_col[key])
      } else {
        ths.push(
          new Th(_col, {
            classes: this.options.thClasses
          })
        )
      }
    })

    return { ths, childs }
  }

  getColspan (columns) {
    let colspan = columns.length

    columns.forEach(_col => {
      if ((_col !== null && _col.constructor === Object)) {
        console.log('getColspan', 'isObject', Object.keys(_col)[0])
        colspan += this.getColspan(_col[Object.keys(_col)[0]]) - 1
      }
    })

    return colspan
  }
}

export default { THead }
export { THead }
