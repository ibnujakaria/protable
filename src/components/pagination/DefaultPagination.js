import RowsPerPage from "./RowsPerPage"
import generatePagesRange from '../../helpers/pagination-pages'

class DefaultPagination {
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')
    this.$dom.style.display = 'flex'
    this.$dom.style.justifyContent = 'space-between'

    this._buildRowsPerPage()
    this._buildControls()
    this.render()
  }

  _buildRowsPerPage () {
    this.rowsPerPage = new RowsPerPage(this.proTable)
    this.$dom.appendChild(this.rowsPerPage.$dom)
  }

  _buildControls () {
    this.$controls = document.createElement('div')
    this.$dom.appendChild(this.$controls)

    this._buildPrevButton()
    this._buildPageButtons()
    this._buildNextButton()
  }
  
  _buildNextButton () {
    this.$btnNext = document.createElement('button')
    this.$btnNext.innerText = 'Next'
    
    this.$btnNext.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page + 1)
    })

    this.$controls.appendChild(this.$btnNext)
  }

  _buildPrevButton () {
    this.$btnPrev = document.createElement('button')
    this.$btnPrev.innerText = 'Prev'
    
    this.$controls.appendChild(this.$btnPrev)
    
    this.$btnPrev.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page - 1)
    })
  }

  _buildPageButtons () {
    console.log('_buildPageButtons')
    const options = this.proTable.options
    const limit = options.limit
    const totalRows = this.proTable.tbody.filteredTrs.length
    const lastPage = Math.ceil(totalRows / limit)
    
    if (!this.$pageButtonsContainer) {
      this.$pageButtonsContainer = document.createElement('div')
      this.$pageButtonsContainer.style.display = 'inline-block'
      this.$controls.appendChild(this.$pageButtonsContainer)
    } else {
      while (this.$pageButtonsContainer.lastChild) {
        this.$pageButtonsContainer.removeChild(
          this.$pageButtonsContainer.lastChild
        )
      }
    }

    generatePagesRange(options.page, lastPage, 2)
      .forEach(page => {
        const btn = document.createElement('button')
        btn.innerText = page

        if (page === options.page) {
          btn.style.fontWeight = 800
        }

        btn.addEventListener('click', e => {
          this.proTable.setPage(page)
        })
        this.$pageButtonsContainer.appendChild(btn)
      })
  }
  
  render () {
    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit) + 1
    const to = start + limit - 1
    const totalRows = this.proTable.tbody.filteredTrs.length
    const lastPage = Math.ceil(totalRows / limit)

    this.$btnPrev.disabled = page === 1
    this.$btnNext.disabled = page === lastPage

    this._buildPageButtons()
  }
}

export default DefaultPagination
