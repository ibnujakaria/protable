import Input from "./search/Input"
import ProTable from "./table/ProTable"

class Header {
  /**
   * @param { Object } payload
   * @param { ProTable } payload.proTable 
   */
  constructor({ proTable }) {
    this.proTable = proTable

    this.$dom = document.createElement('header')
    this._applyStyles()

    if (this.proTable.options.search !== false) {
      this._createSearch()
    }
  }

  _applyStyles () {
    this.$dom.style.textAlign = 'right'
    this.$dom.style.marginBottom = '1rem'
  }

  _createSearch () {
    this.search = new Input({ proTable: this.proTable })
    this.$dom.appendChild(this.search.$dom)
  }
}

export default Header
