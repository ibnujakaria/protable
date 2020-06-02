import ProTable from "../components/table/ProTable"

const fromDOMTable = (selector, options) => {
  const dom = document.querySelector(selector)
  const columns = getColumnsFromDom(dom)
  const rows = getRowsFromDom(dom, columns)

  console.log({ columns })

  options = {
    classes: Array.from(dom.classList),
    ...options
  }

  const proTable = new ProTable(null, options)
  proTable.generateTable({
    columns,
    rows
  })

  // replace the dom input
  dom.replaceWith(proTable.$dom)

  return proTable
}

function getColumnsFromDom (table) {
  const firstTr = table.querySelector('thead tr')
  const columns = {}

  Array.from(firstTr.children).forEach(_child => {
    columns[_child.innerHTML] = {
      label: _child.innerHTML,
      classes: Array.from(_child.classList)
    }
  })

  return columns
}

function getRowsFromDom (table, columns) {
  const trs = table.querySelectorAll('tbody tr')

  return Array.from(trs)
    .map(_tr => {
      const row = {}

      Object.keys(columns).forEach((_column, _index) => {
        row[_column] = [_tr.children[_index].innerHTML, {
          classes: Array.from(_tr.children[_index].classList)
        }]
      })

      return row
    })
}

export default fromDOMTable
