import ProTable from "../table/ProTable"

class Input {
  /**
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable 
   */
  constructor ({ proTable }) {
    this.proTable = proTable
    this._createInput()
  }

  _createInput () {
    const options = this.proTable.options
  
    this.$dom = document.createElement('input')
    this.$dom.placeholder = options.search?.placeholder || 'Search'
    this.$dom.addEventListener('keyup', this._onKeyUp.bind(this))

    // apply classes
    if (options.search?.classes) {
      this.$dom.classList.add(...options.search.classes)
    }

    this.$dom.style.width = 'fit-content'
    this.$dom.style.display = 'inline-block'
  }

  _onKeyUp () {
    this.proTable.setKeyword(this.$dom.value)
  }
}

export default Input
