import ProTable from "./ProTable"

/**
 * Th Options
 * 
 * @typedef { Object } Th.Options
 * @property { Object } attrs - DOM attributes
 * @property { Number } attrs.colspan - colspan of this th
 */

/**
 * Th class
 *
 * @class Th
 */
class Th {
  /**
   * Creates an instance of Th.
   * 
   * @param { Object } payload
   * @param { string } payload.key
   * @param { string } payload.label
   * @param { ProTable } payload.proTable
   * @param { Th.Options } payload.options
   * @memberof Th
   */
  constructor ({ key, label, proTable, options }) {
    this.key = key
    this.label = label
    this.proTable = proTable
    this.$dom = document.createElement('th')

    /**
     * @type { Th.Options }
     */
    this.options = {
      attrs: {
        colspan: 1
      },
      orderabel: true,
      ...options
    }

    this._createContainer()
    this._createSpan()
    this._applyAttributes()
    this._applyClasses()
    this._applyOrderable()
  }

  _createContainer () {
    this.$container = document.createElement('div')
    this.$container.classList.add('th-container')

    this.$dom.appendChild(this.$container)
  }

  _applyAttributes () {
    for (const attr in this.options.attrs) {
      this.$dom.setAttribute(attr, this.options.attrs[attr])
    }
  }

  _applyClasses () {
    if (this.options.classes?.length) {
      this.$dom.classList.add(...this.options.classes)
    }
  }

  _createSpan () {
    this.$spanLabel = document.createElement('span')
    this.$spanLabel.innerHTML = this.label || '-'
    this.$container.appendChild(this.$spanLabel)
  }

  _isOrderable () {
    return this.options.orderable && this.options.attrs.colspan === 1
  }

  _applyOrderable () {
    if (!this._isOrderable()) {
      return
    }

    this.$container.style.cursor = 'pointer'

    // caret top
    this.$arrowUp = document.createElement('span')
    this.$arrowUp.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="6 2 12 12" width="9" height="12">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 8l6 6H6z"/>
    </svg>`;
    this.$arrowUp.classList.add('caret-up')
    // caret bottom
    this.$arrowBottom = document.createElement('span')
    this.$arrowBottom.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="6 10 12 12" width="9" height="12">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 16l-6-6h12z"/>
    </svg>`
    this.$arrowBottom.classList.add('caret-down')

    this.$orderDom = document.createElement('div')
    this.$orderDom.classList.add('arrows')
    this.$orderDom.appendChild(this.$arrowUp)
    this.$orderDom.appendChild(this.$arrowBottom)
    this.$container.appendChild(this.$orderDom)

    this.$dom.addEventListener('click', e => {
      this._toggleOrder()
    })
  }
  
  _toggleOrder () {
    const order = this.proTable.options.order
    let payload = {
      key: this.key,
      direction: 'asc'
    }

    if (order.key === this.key) {
      payload.direction = order.direction === 'desc' ? 'asc' : 'desc'
    }

    this.proTable.setOrder(payload)
  }

  render () {
    if (this._isOrderable()) {
      const order = this.proTable.options.order;
  
      this.$orderDom.classList.remove(...['asc', 'desc'])

      if (order.key === this.key) {
        this.$orderDom.classList.add(order.direction)
      }
    }
  }
}

export default Th
