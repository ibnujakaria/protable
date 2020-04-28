import { ProTable } from '../components/ProTable'

const fromArray = (elId, array, options) => {
  const columns = []

  array.forEach(_item => {
    const row = []

    for (const key in _item) {
      if (!columns.find(_column => _column === key)) {
        columns.push(key)
      }
    }
  })

  const proTable = new ProTable(elId)
  proTable.generateTable({
    columns,
    rows: array
  })

  proTable.draw()

  console.log(proTable.$table.$dom)
}

export default { fromArray }
export { fromArray }
