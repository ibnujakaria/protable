import { fromArray, fromTable, optionTemplates } from '../src/index'
import data from './employee-dummy.json'

let proTable = fromArray('#table', {
  columns: ['no', 'name', 'email', 'gender', 'phone'],
  rows: data
}, {
  ...optionTemplates.tailwind,
  contents: {
    no: content => [++content, {
      classes: ["bg-blue-100", "text-center"]
    }],
    gender: content => {
      return content === 'female' ?
        `<span class="badge badge-success">${content}</span>` :
        `<span class="badge badge-info">${content}</span>`
    },
    email: content => {
      return `<a href="mailto:${content}">${content}</a>`
    }
  }
})

console.log('proTable', proTable)