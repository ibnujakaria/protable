import ProTable from '../components/table/ProTable'
import { generateColumns } from './from-array'

/**
 * @typedef { Object } Callbacks
 * @property { Function } url - callback to return a url. It get a page param
 * @property { Function } success 
 */
/**
 * 
 * @param { String | HTMLElement } elId 
 * @param { Callbacks } callbacks 
 * @param {*} options 
 */
const fromServer = async (elId, { url, success }, options) => {
  const proTable = new ProTable(elId, options)
  proTable.options.fromServer = true
  
  let firstLoad = true
  
  proTable.on('pageChanged', async (page) => {
    let response =  await fetch(url(page))
    let result = success?.(await response.json()) || (await response.json())

    proTable.options.totalRows = result.meta.total_rows
    proTable.options.lastPage = result.meta.last_page
    proTable.options.limit = result.meta.per_page
    
    if (firstLoad) {
      const columns = generateColumns(result.data)
      proTable.generateTable({
        columns,
        rows: result.data
      })

      firstLoad = false
    } else {
      proTable.setRows(result.data)
      proTable.tbody.render()
      proTable.tfoot.render()

      console.log('server', proTable)
    }
  })

  proTable.emit('pageChanged', 1)

  if (elId) {
    proTable.draw()
  }

  console.log('server', proTable)

  return proTable
}

export default fromServer