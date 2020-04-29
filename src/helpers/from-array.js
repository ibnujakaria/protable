import { ProTable } from '../components/ProTable'

const fromArray = (elId, array, options) => {
  const columns = generateColumns(array)

  const proTable = new ProTable(elId, options)
  proTable.generateTable({
    columns,
    rows: array
  })

  proTable.draw()
}

/**
 * 
 * @param [{ key: value }, { key: value }] array 
 */
const generateColumns = array => {
  const columns = []
  const objectColumns = []

  array.forEach(_item => {
    for (const key in _item) {
      if (!columns.find(_column => _column === key)) {
        // check wheter the value is an object
        if (_item[key] !== null && _item[key].constructor === Object) {
          // call generateColumns recursively
          if (!objectColumns.find(_objectColumn => _objectColumn === key)) {
            objectColumns.push(key)
            columns.push({ [key]: generateColumns([_item[key]]) })
          }
        } else {
          columns.push(key)
        }
      }
    }
  })

  return columns
}

export default { fromArray }
export { fromArray }
