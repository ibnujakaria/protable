import RowsPerPage from "./RowsPerPage"
import ProTable from "../table/ProTable"

class SimplePagination {
  /**
   * Create SimplePagination
   * 
   * @param { ProTable ``} proTable
   * @memberof SimplePagination
   */
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')
    this.$dom.style.display = 'flex'
    this.$dom.style.justifyContent = 'flex-end'
    this.$dom.style.alignItems = 'baseline'

    this._buildRowsPerPage()
    this._buildSpan()
    this._buildControls()
    this.render()
  }

  _buildRowsPerPage () {
    this.rowsPerPage = new RowsPerPage(this.proTable)
    this.$dom.appendChild(this.rowsPerPage.$dom)
  }

  _buildSpan () {
    this.$span = document.createElement('span')
    this.$span.style.marginRight = '1rem'
    this.$dom.appendChild(this.$span)
  }

  _buildControls () {
    const options = this.proTable.options
    this.$controls = document.createElement(
      options.pagination.containerElement || 'div'
    )

    if (options.pagination.containerClasses) {
      this.$controls.classList.add(...options.pagination.containerClasses)
    }

    this.$dom.appendChild(this.$controls)

    this._buildPrevButton()
    this._buildNextButton()
  }
  
  _buildNextButton () {
    this.btnNext = this._buildButton('Next')
    
    this.$controls.appendChild(this.btnNext.$wrapper)

    this.btnNext.$btn.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page + 1)
    })
  }

  _buildPrevButton () {
    this.btnPrev = this._buildButton('Prev')
    
    this.$controls.appendChild(this.btnPrev.$wrapper)
    
    this.btnPrev.$btn.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page - 1)
    })
  }

  /**
   * Create DOM button
   * 
   * @returns { Object } object of $btn and $wrapper
   */
  _buildButton (text) {
    const options = this.proTable.options
    const $btn = document.createElement('button')
    $btn.innerText = text

    // apply classes from options
    if (this.proTable.options.pagination.btnClasses) {
      $btn.classList.add(...this.proTable.options.pagination.btnClasses)
    }

    // if there is a wrapper
    if (options.pagination.btnWrapper) {
      const $wrapper = document.createElement(options.pagination.btnWrapper)
      $wrapper.appendChild($btn)

      if (options.pagination.btnWrapperClasses) {
        $wrapper.classList.add(...options.pagination.btnWrapperClasses)
      }

      return { $wrapper, $btn }
    }

    return { $btn, $wrapper: $btn }
  }
  
  render () {
    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit) + 1
    const to = start + limit - 1
    const totalRows = this.proTable.tbody.filteredTrs.length
    const lastPage = Math.ceil(totalRows / limit)

    this.$span.innerText = `${start}-${(to > totalRows ? totalRows : to)} of ${totalRows}`

    this.btnPrev.$btn.disabled = page === 1
    this.btnNext.$btn.disabled = page === lastPage

    if (page === 1) {
      this.btnPrev.$wrapper.classList.add('disabled')
    } else {
      this.btnPrev.$wrapper.classList.remove('disabled')
    }

    if (page === lastPage) {
      this.btnNext.$wrapper.classList.add('disabled')
    } else {
      this.btnNext.$wrapper.classList.remove('disabled')
    }
  }
}

export default SimplePagination
