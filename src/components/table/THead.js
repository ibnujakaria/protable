import Tr from "./Tr"
import Th from "./Th"
import ProTable from './ProTable'

class THead {

  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { Object } payload
   * @param { string[] } payload.columns
   * @param { ProTable } payload.proTable
   * @param { Object } payload.options
   * @memberof THead
   * @constructor
   */
  constructor ({ columns, proTable, options }) {
    this.options = {
      thClasses: [],
      ...options
    }
    this.proTable = proTable
    this.columns = columns
    this.$dom = document.createElement('thead')
    this.trs = this.generateTrs()
    this.columnsCount = (() => {
      return this.trs[0].childs
        .map(th => th.options.attrs.colspan)
        .reduce((a, b) => a + b)
    })()

    console.log('trs', this.trs)

    // append child
    this.trs.forEach(tr => this.$dom.appendChild(tr.$dom))
  }

  generateTrs () {
    let trs = []
    
    let { ths, childs } = this.generateThs(
      this.proTable.options.columns || this.columns
    )

    let tr = new Tr()
    
    ths.forEach(_th => tr.pushTh(_th))
    trs.push(tr)

    if (childs.length) {
      trs = trs.concat(this.generateTrs(childs))
    }
    
    // add rowspan to th that has not colspan attr
    // and fix colspan as its child
    tr.childs.forEach(_th => {
      if (_th.options.attrs.colspan === 1) {
        _th.$dom.setAttribute('rowspan', trs.length)
      }
    })

    return trs
  }

  /**
   * Generate th elements of the head
   * 
   * @param { string[] } columns 
   */
  generateThs (columns) {
    let ths = []
    let childs = []

    columns.forEach(_col => {
      if (_col !== null && _col.constructor === Object) {
        const key = Object.keys(_col)[0]
        ths.push(new Th({
          key,
          proTable: this.proTable,
          options: {
            attrs: {
              colspan: this.getColspan(_col[key])
            },
            classes: this.options.thClasses
          }
        }))
        childs = childs.concat(_col[key])
      } else {
        ths.push(
          new Th({
            key: _col, 
            proTable: this.proTable,
            options: {
              classes: this.options.thClasses
            }
          })
        )
      }
    })

    return { ths, childs }
  }

  /**
   * Return the count of colspan of a given columns
   * 
   * @param { string[] } columns 
   */
  getColspan (columns) {
    let colspan = columns.length

    columns.forEach(_col => {
      if ((_col !== null && _col.constructor === Object)) {
        colspan += this.getColspan(_col[Object.keys(_col)[0]]) - 1
      }
    })

    return colspan
  }

  render () {
    this.trs.forEach(_tr => {
      _tr.childs.forEach(_child => _child.render())
    })
  }
}

export default { THead }
export { THead }
