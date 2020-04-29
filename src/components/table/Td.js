class Td {
  constructor (string) {
    this.key = string
    this.$dom = document.createElement('td')

    this.$dom.innerHTML = string || '-'
  }
}

export default Td
