class Th {
  constructor (string, options) {
    this.key = string
    this.$dom = document.createElement('th')

    this.options = {
      attrs: {
        colspan: 1
      },
      ...options
    }

    for (const attr in this.options.attrs) {
      this.$dom.setAttribute(attr, this.options.attrs[attr])
    }

    if (options && options.classes) {
      options.classes.forEach(_class => this.$dom.classList.add(_class))
    }

    this.$dom.innerHTML = `${string[0].toUpperCase()}${string.toLowerCase().substr(1)}` || '-'
  }
}

export default Th
