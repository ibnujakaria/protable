import Td from './Td'
import Th from './Th'

class Tr {
  constructor () {
    this.$dom = document.createElement('tr')
    this.childs = []
  }

  addTd (column) {
    const td = new Td(column)
    this.childs.push(td)
    this.$dom.appendChild(td.$dom)
  }

  addTds (array) {
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
