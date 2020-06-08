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

    if (this.proTable.options.search?.wrapperElement) {
      this._createWrapper()
      this.$dom = this.$wrapper
      this.$wrapper.appendChild(this.$input)
    } else {
      this.$dom = this.$input
    }
  }

  _createInput () {
    const options = this.proTable.options
  
    this.$input = document.createElement('input')
    this.$input.type = 'text'
    this.$input.placeholder = options.search?.placeholder || 'Search'
    this.$input.addEventListener('keyup', this._onKeyUp.bind(this))

    // apply classes
    if (options.search?.classes) {
      this.$input.classList.add(...options.search.classes)
    }

    this.$input.style.width = 'fit-content'
    this.$input.style.display = 'inline-block'
  }

  _createWrapper () {
    this.$wrapper = document.createElement(this.proTable.options.search?.wrapperElement)
    
    if (this.proTable.options.search?.wrapperClasses?.length) {
      this.$wrapper.classList.add(...this.proTable.options.search?.wrapperClasses)
    }
  }

  _onKeyUp () {
    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }

    this.timeOut = setTimeout(() => {
      this.proTable.setKeyword(this.$input.value)
    }, 300)
  }
}

export default Input
