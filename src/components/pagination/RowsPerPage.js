class RowsPerPage {
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')
    this.$dom.style.display = 'inline-block'
    this.$dom.style.marginRight = '1rem'

    this._createSpan()
    this._createSelect()
  }

  _createSpan () {
    const span = document.createElement('span')
    span.innerText = 'Rows per page:'
    span.style.marginRight = '1rem'

    this.$dom.appendChild(span)
  }

  _createSelect () {
    const selectedLimit = this.proTable.options.limit
    this.$select = document.createElement('select');

    ([5, 10, 25, 50, 100, 250, 500]).forEach(limit => {
      const option = document.createElement('option')
      option.value = limit
      option.innerText = limit
      option.selected = parseInt(selectedLimit) === limit

      this.$select.appendChild(option)
    })

    this.$select.addEventListener('change', e => {
      this.proTable.setLimit(this.$select.value)
    })

    this.$dom.appendChild(this.$select)
  }
}

export default RowsPerPage
