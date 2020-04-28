class THead {
  constructor (column) {
    this.$key = column
    this.$dom = document.createElement('th')
    this.$dom.innerText = `${column[0].toUpperCase()}${column.substr(1)}`
  }

  get dom () {
    return this.$dom
  }
}

export default { THead }
export { THead }
