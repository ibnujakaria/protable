import ProTable from '../components/table/ProTable'


/**
 * @typedef { Object } FromArray.Data
 * @property { string[]|Object } columns
 * @property { Object[] } rows
 */

/**
 * Helper to create instance of ProTable using array data
 * 
 * @param { string | Node } elId 
 * @param { array | FromArray.Data } data 
 * @param { ProTable.Options } options 
 */
const fromArray = (elId, data, options) => {
  const columns = data.columns || generateColumns(data)

  const proTable = new ProTable(elId, options)
  proTable.generateTable({
    columns,
    rows: data.rows || data
  })

  if (elId) {
    proTable.draw()
  }

  return proTable
}

/**
 * Generate column from an array
 * 
 * @param [{ key: value }, { key: value }] array 
 * @returns { String[] }
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

export default fromArray
