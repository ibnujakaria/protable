class Td {
  constructor ({ key, child, options }) {
    this.key = key
    if (child instanceof Node) {
      this.buildDOMFromNode(child)
    } else {
      this.buildDOMFromString(child)
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

  buildDOMFromString (child) {
    this.$dom = document.createElement('td')
    this.$dom.innerHTML = child === null || child === undefined ? '-' : child
  }

  buildDOMFromNode (node) {
    this.$dom = document.createElement('td')
    this.$dom.appendChild(node)
  }
}

export default Td
