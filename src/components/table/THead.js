import Tr from "./Tr"
import Th from "./Th"
import ProTable from './ProTable'

/**
 * @typedef { Object } THead.Options
 * @property { string[] } classes - `thead` classes
 * @property { string[] } trClasses - `thead > tr` classes
 * @property { string[] } thClasses - `thead > tr > th` classes
 */

/**
 * @class THead
 * @property { THead.Options } options
 */
class THead {

  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable
   * @param { THead.Options } payload.options
   * @memberof THead
   * @constructor
   */
  constructor ({ proTable, options }) {
    this.proTable = proTable
    this.options = options
    this.$dom = document.createElement('thead')
    this.trs = this.generateTrs(this.proTable.columns)
    this.columnsCount = (() => {
      return this.trs[0].childs
        .map(th => th.options.attrs.colspan)
        .reduce((a, b) => a + b)
    })()

    console.log('trs', this.trs)

    // apply thead classes
    if (this.options?.classes?.length) {
      this.$dom.classList.add(...this.options.classes)
    }

    // append child
    this.trs.forEach(tr => this.$dom.appendChild(tr.$dom))
  }

  /**
   * This function will generate one <tr> tag if its simple.
   * But for complex headers, it will generate more than one <tr> tags.
   * 
   * @param { string[] } columns 
   * @returns { Tr[] } trs
   */
  generateTrs (columns) {
    let trs = []
    let { ths, childs } = this.generateThs(columns)
    let tr = new Tr({ classes: this.options?.trClasses })
    
    ths.forEach(_th => tr.pushTh(_th))
    trs.push(tr)

    console.log('childs', childs)

    if (Object.keys(childs).length) {
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
   * @param { Object } columns 
   */
  generateThs (columns) {
    let ths = []
    let childs = {}

    for (const _key in columns ) {
      const _col = columns[_key]

      ths.push(
        new Th({
          key: _key,
          label: _col.label,
          proTable: this.proTable,
          options: {
            classes: (this.options?.thClasses || []).concat(_col.classes),
            attrs: {
              colspan: this.getColspan(_col.childs)
            },
            orderable: typeof _col.orderable === 'boolean' ? !!_col.orderable : true
          }
        })
      )

      if (_col.childs) {
        childs = { ...childs, ..._col.childs }
      }
    }

    return { ths, childs }
  }

  /**
   * Return the count of colspan of a given childs
   * 
   * @param { Object } childs 
   */
  getColspan (childs) {
    if (!childs) {
      return 1
    }

    let length = Object.keys(childs).length

    for (const _key in childs) {
      if (childs[_key].childs) {
        length += this.getColspan(childs[_key].childs)
      }
    }

    return length
  }

  render () {
    this.trs.forEach(_tr => {
      _tr.childs.forEach(_child => _child.render())
    })
  }
}

export default THead
