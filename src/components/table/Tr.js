import Td from './Td'
import Th from './Th'

class Tr {
  constructor () {
    this.$dom = document.createElement('tr')
    this.childs = []
  }

  addTd ({ key, label, options }) {
    const td = new Td({ key, child: label, options })
    this.childs.push(td)
    this.$dom.appendChild(td.$dom)
  }

  pushTd (td) {
    this.childs.push(td)
    this.$dom.appendChild(td.$dom)
  }

  addTds (array) {
    // _item = { key, label }

    array.forEach(_item => {
      this.addTd(_item)
    })
    
    return this
  }

  addTh (column, options) {
    const th = new Th(column, options)
    this.childs.push(th)
    this.$dom.appendChild(th.$dom)
  }

  pushTh (th) {
    this.childs.push(th)
    this.$dom.appendChild(th.$dom)
  }

  addThs (array) {
    array.forEach(_item => {
      this.addTh(_item)
    })
    
    return this
  }
}

export default Tr
export { Tr }
