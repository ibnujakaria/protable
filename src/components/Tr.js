class Tr {
  constructor (array) {
    this.$tds = []
    this.$dom = document.createElement('tr')

    array.forEach(_item => {
      const td = {
        $key: _item,
        $dom: document.createElement('td')
      }

      td.$dom.innerText = _item || '-'
      this.$tds.push(td)
      this.$dom.appendChild(td.$dom)
    })
  }
}

export default { Tr }
export { Tr }
