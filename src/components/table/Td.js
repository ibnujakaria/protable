class Td {
  constructor (string, options) {
    if (string instanceof Node) {
      this.buildDOMFromNode(string)
    } else {
      this.buildDOMFromString(string)
    }

    this.options = {
      attrs: {
        colspan: 1
      },
      style: {},
      ...options
    }

    for (const attr in this.options.attrs) {
      this.$dom.setAttribute(attr, this.options.attrs[attr])
    }

    for (const style in this.options.style) {
      this.$dom.style[style] = this.options.style[style]
    }
  }

  buildDOMFromString (string) {
    this.key = string
    this.$dom = document.createElement('td')
    this.$dom.innerHTML = string || '-'
  }

  buildDOMFromNode (node) {
    this.key = node.toString()
    this.$dom = document.createElement('td')
    this.$dom.appendChild(node)
  }
}

export default Td
