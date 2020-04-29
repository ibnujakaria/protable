class Th {
  constructor (string, options) {
    this.key = string
    this.$dom = document.createElement('th')

    if (options && options.attrs) {
      for (const attr in options.attrs) {
        this.$dom.setAttribute(attr, options.attrs[attr])
      }
      this.$dom.style.color = 'red'
    }

    this.$dom.innerHTML = `${string[0].toUpperCase()}${string.toLowerCase().substr(1)}` || '-'
  }
}

export default Th
