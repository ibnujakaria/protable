class Input {
  constructor ({ proTable }) {
    this.proTable = proTable

    this._createInput()
  }

  _createInput () {
    this.$dom = document.createElement('input')
    this.$dom.placeholder = 'Search'
    this.$dom.addEventListener('keyup', this._onKeyUp.bind(this))
  }

  _onKeyUp () {
    this.proTable.setKeyword(this.$dom.value)
  }
}

export default Input
