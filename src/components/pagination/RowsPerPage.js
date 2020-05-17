import ProTable from '../table/ProTable'

class RowsPerPage {
  /**
   * 
   * @param { ProTable } proTable 
   */
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')
    this.$dom.style.display = 'inline-flex'
    this.$dom.style.marginRight = '1rem'
    this.$dom.style.alignItems = 'center'

    this._createSpan()
    this._createSelect()
  }

  _createSpan () {
    const span = document.createElement('span')
    span.innerText = this.proTable.options?.pagination?.rowsPerPage?.text || 'Rows per page'
    span.style.marginRight = '1rem'

    this.$dom.appendChild(span)
  }

  _createSelect () {
    const options = this.proTable.options
    const selectedLimit = options.limit

    this.$select = document.createElement('select');
    this.$select.style.width = 'fit-content'

    if (options.pagination?.rowsPerPage?.selectClasses) {
      this.$select.classList.add(...options.pagination.rowsPerPage.selectClasses)
    }

    const ranges = options.pagination?.rowsPerPage?.ranges || [5, 10, 25, 50, 100, 250, 500]

    // if selectedLimit doesn't exist in ranges array
    if (!ranges.find(_range => _range === selectedLimit)) {
      ranges.push(selectedLimit)
    }

    ranges.sort((a, b) => a - b).forEach(limit => {
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
