import Input from "./search/Input"

class Header {
  constructor({ proTable }) {
    this.proTable = proTable

    this.$dom = document.createElement('header')
    this._applyStyles()
    this._createSearch()
  }

  _applyStyles () {
    this.$dom.style.textAlign = 'right'
  }

  _createSearch () {
    this.search = new Input({ proTable: this.proTable })
    this.$dom.appendChild(this.search.$dom)
  }
}

export default Header
