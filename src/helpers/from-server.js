import ProTable from '../components/table/ProTable'
import { generateColumns } from './from-array'

/**
 * @typedef { Object } Callbacks
 * @property { Function } url - callback to return a url. It get a page param
 * @property { Function } success
 * @property { ProTable.Options } options
 */
/**
 * 
 * @param { String | HTMLElement } elId 
 * @param { Callbacks } callbacks 
 */
const fromServer = (elId, { url, success, options }) => {
  const proTable = new ProTable(elId, options)
  proTable.options.fromServer = true
  
  let firstLoad = true
  
  proTable.on('pageChanged', async (page) => {
    const query = {
      page,
      limit: proTable.options.limit,
      search: proTable.options.keyword
    }
    let response =  await fetch(url(query))
    let result = await success?.(response, query) || (await response.json())

    proTable.options.totalRows = parseInt(result.meta.total_rows)
    proTable.options.lastPage = parseInt(result.meta.last_page)
    
    if (firstLoad) {
      const columns = result.data.columns || generateColumns(result.data)
      proTable.generateTable({
        columns,
        rows: result.data.rows || result.data
      })

      firstLoad = false
    } else {
      proTable.setRows(result.data.rows || result.data)
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