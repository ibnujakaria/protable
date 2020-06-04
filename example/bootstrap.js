import { fromArray, fromTable, optionTemplates } from '../src/index'

const proTableFromTable = fromTable('#table-1', {
  columns: {
    Blog: {
      orderable: false,
      searchable: false
    }
  },
  contents: {
    Blog: content => {
      const a = document.createElement('a')
      a.href = content
      a.innerHTML = content

      return a
    }
  },
  search: {
    classes: ['form-control', 'from-control-sm']
  }
})

console.log('proTableFromTable', proTableFromTable)
