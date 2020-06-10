import Tr from "./Tr"
import Td from "./Td"
import ProTable from "./ProTable"

/**
 * TBody Options
 * 
 * @typedef { Object } TBody.Options
 * @property { string[] } classes - classes of tbody
 * @property { string[] } trClasses - classes of each tr
 * @property { string[] } tdClasses - classes of each td
 */

/**
 * @class TBody
 * @param { TBody.Options } options
 */
class TBody {

  /**
   * Creates an instance of TBody.
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable
   * @param { TBody.Options } payload.options
   * @memberof TBody
   */
  constructor({ proTable, options }) {
    this.$dom = document.createElement('tbody')
    this.proTable = proTable
    this.options = options
    this.generateTrs()
    
    // apply tbody classes
    if (this.options?.classes?.length) {
      this.$dom.classList.add(...this.options.classes)
    }

    this.render()
  }

  generateTrs () {
    const columns = this.proTable.columns
    const rows = this.proTable.rows
    this.trs = []

    rows.forEach(_row => {
      const tr = new Tr({ classes: this.options?.trClasses })
      tr.addTds(this.generateTds(columns, _row))
      this.trs.push(tr)
    })

    this.trs
  }

  /**
   * Generate object array. The return of this function will next be
   * generated to object Tds
   * 
   * @param { Object } columns 
   * @param { Object[] } _row 
   */
  generateTds (columns, _row) {
    let tds = []

    for (const _key in columns) {
      /**
       * the corresponding column of this row
       */
      const _col = columns[_key]

      /**
       * Row Content could be an array that consits with 2 items 
       *  - ['content', { classes: [...] }]
       *  - first item is the content
       *  - the second is the options
       * 
       * And could be just a string/Node
       */
      let rowContent = Array.isArray(_row[_key]) ? _row[_key][0] : _row[_key]
      let rowOptions = Array.isArray(_row[_key]) ? _row[_key][1] : {}

      if (this.options?.tdClasses) {
        rowOptions.classes = (rowOptions.classes || []).concat(this.options?.tdClasses)
      }

      // override content if user defines targetIndex
      if (Number.isInteger(_col.targetIndex)) {
        const contentTmp = _row[
          Object.keys(this.proTable.columns)[_col.targetIndex]
        ]

        rowContent = Array.isArray(contentTmp) ? contentTmp[0] : contentTmp
        rowOptions = {
          ...rowOptions,
          ...Array.isArray(contentTmp) ? contentTmp[1] : {}
        }
      }

      // override content if user defines contents callback
      if (this.proTable.options?.contents?.[_key]) {
        // we pass 2 params:
        // - rowContent: content for this specific cell
        // - _row: contents of the current row
        rowContent = this.proTable.options.contents[_key](rowContent, _row)

        // check if the callback return is [content, { classes: [...] }]
        if (Array.isArray(rowContent) && rowContent.length > 1) {
          rowOptions.classes = (rowOptions.classes || []).concat(rowContent[1]?.classes || [])
          rowContent = rowContent[0]
        }

      }
      
      // if loading, add a div
      if (this.proTable.loading) {
        const tmp = document.createElement('div')
        tmp.innerHTML = new Array(Math.floor((Math.random() * 20) + 20)).fill('-').join('')
        rowContent = tmp
      }

      if (_col.childs) {
        // call generateTds recursively
        tds = tds.concat(
          this.generateTds(_col.childs, _row[_key])
        )
      } else {
        tds.push({
          key: _key,
          label: rowContent,
          options: {
            ...rowOptions,
            searchable: typeof _col.searchable === 'boolean' ? !!_col.searchable : true
          }
        })
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
    
    if (this.proTable.options.fromServer) {
      this.generateTrs()
      this.trs
        .forEach(_tr => this.$dom.appendChild(_tr.$dom))
    } else {
      const limit = this.proTable.options.limit
      const page = this.proTable.options.page
      const start = ((page - 1) * limit)

      this.filteredTrs
        .sort(this._sort.bind(this))
        .slice(start, this.proTable.options.limit * page)
        .forEach(_tr => this.$dom.appendChild(_tr.$dom))
    }

    // if there is no result for given keyword
    if (this.filteredTrs.length < 1 && this.proTable.options.keyword) {
      const tr = new Tr()
      const td = new Td({
        child: this.proTable.options.search?.notFoundText || 'Not matching records found',
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
   * @param { Tr } _tr
   * @memberof TBody
   */
  _filter (_tr) {
    const keyword = this.proTable.options.keyword || ''

    return !!_tr.childs.find(_child => {
      return _child.options.searchable && _child
        ?.$dom
        ?.innerText
        ?.toLowerCase()
        ?.indexOf(
          keyword.toLowerCase()
        ) > -1
    })
  }

  _sort (a, b) {
    const order = this.proTable.options.order

    if (order.key) {
      const tdA = a.childs.find(_td => _td.key === order.key)
      const tdB = b.childs.find(_td => _td.key === order.key)
      
      // check if the value is valid number or not
      const contentA = !isNaN(tdA.$dom.innerText) ? parseFloat(tdA.$dom.innerText) : tdA.$dom.innerText
      const contentB = !isNaN(tdB.$dom.innerText) ? parseFloat(tdB.$dom.innerText) : tdB.$dom.innerText

      // ascending
      if (order.direction === 'asc') {
        return contentA > contentB ? 1 : -1
      } else {
        return contentA > contentB ? -1 : 1
      }
    }

    return 0
  }
}

export default TBody