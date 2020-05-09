class SimplePagination {
  constructor(proTable) {
    this.proTable = proTable

    this.$dom = document.createElement('div')

    this._createSpan()
    this._createPrevButton()
    this._createNextButton()
    this.render()
  }

  _createSpan () {
    this.$span = document.createElement('span')
    this.$span.style.marginRight = '1rem'
    this.$dom.appendChild(this.$span)
  }
  
  _createNextButton () {
    this.$btnNext = document.createElement('button')
    this.$btnNext.innerText = 'Next'
    
    this.$btnNext.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page + 1)
    })

    this.$dom.appendChild(this.$btnNext)
  }

  _createPrevButton () {
    this.$btnPrev = document.createElement('button')
    this.$btnPrev.innerText = 'Prev'
    
    this.$dom.appendChild(this.$btnPrev)
    
    this.$btnPrev.addEventListener('click', e => {
      this.proTable.setPage(this.proTable.options.page - 1)
    })
  }
  
  render () {
    const limit = this.proTable.options.limit
    const page = this.proTable.options.page
    const start = ((page - 1) * limit) + 1
    const to = start + limit - 1
    const totalRows = this.proTable.tbody.trs.length
    const lastPage = Math.ceil(totalRows / limit)

    this.$span.innerText = `${start}-${(to > totalRows ? totalRows : to)} of ${totalRows}`

    this.$btnPrev.disabled = page === 1
    this.$btnNext.disabled = page === lastPage
  }
}

export default SimplePagination
