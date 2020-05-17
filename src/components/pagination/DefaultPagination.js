import RowsPerPage from "./RowsPerPage"
import generatePagesRange from '../../helpers/pagination-pages'

class DefaultPagination {
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')
    this.$dom.style.display = 'flex'
    this.$dom.style.justifyContent = 'space-between'
    this.$dom.style.alignItems = 'center'

    this._buildRowsPerPage()
    this._buildControls()
    this.render()
  }

  _buildRowsPerPage () {
    this.rowsPerPage = new RowsPerPage(this.proTable)
    this.$dom.appendChild(this.rowsPerPage.$dom)
  }

  _buildControls () {
    const options = this.proTable.options
    this.$controls = document.createElement(
      options.pagination.containerElement || 'div'
    )
    this.$controls.style.margin = '0'

    if (options.pagination.containerClasses) {
      this.$controls.classList.add(...options.pagination.containerClasses)
    }

    this.$dom.appendChild(this.$controls)
    this.pageButtons = []

    this._buildPrevButton()
    this._buildNextButton()
    this._buildPageButtons()
  }
  
  _buildNextButton () {
    this.btnNext = this._buildButton('Next')

    // apply classes from options
    if (this.proTable.options.pagination.btnClasses) {
      this.btnNext.$btn.classList.add(...this.proTable.options.pagination.btnClasses)
    }
    
    this.$controls.appendChild(this.btnNext.$wrapper)
    
    this.btnNext.$btn.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page + 1)
    })
  }

  _buildPrevButton () {
    this.btnPrev = this._buildButton('Prev')

    // apply classes from options
    if (this.proTable.options.pagination.btnClasses) {
      this.btnPrev.$btn.classList.add(...this.proTable.options.pagination.btnClasses)
    }
    
    this.$controls.appendChild(this.btnPrev.$wrapper)
    
    this.btnPrev.$btn.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page - 1)
    })
  }

  _buildPageButtons () {
    const options = this.proTable.options
    const limit = options.limit
    const totalRows = this.proTable.tbody.filteredTrs.length
    const lastPage = Math.ceil(totalRows / limit)
    
    while (this.pageButtons.length) {
      const btn = this.pageButtons.pop()
      this.$controls.removeChild(btn.$wrapper)
    }

    generatePagesRange(options.page, lastPage, 2)
      .forEach(page => {
        const btn = this._buildButton(page)

        if (page === options.page) {
          btn.$btn.style.fontWeight = 800

          if (options.pagination.btnActiveClasses) {
            btn.$btn.classList.add(...options.pagination.btnActiveClasses)
          }

          if (options.pagination.btnWrapperActiveClasses) {
            btn.$wrapper.classList.add(...options.pagination.btnWrapperActiveClasses)
          }
        }

        // apply classes from options
        if (options.pagination.btnClasses) {
          btn.$btn.classList.add(...options.pagination.btnClasses)
        }

        btn.$btn.addEventListener('click', e => {
          this.proTable.setPage(page)
        })

        this.pageButtons.push(btn)
        this.$controls.insertBefore(btn.$wrapper, this.btnNext.$wrapper)
      })
  }

  /**
   * Create DOM button
   * 
   * @returns { Object } object of $btn and $wrapper
   */
  _buildButton (text) {
    const $btn = document.createElement('button')
    $btn.innerText = text

    const options = this.proTable.options
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

    this._buildPageButtons()
  }
}

export default DefaultPagination
