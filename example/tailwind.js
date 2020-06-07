import { fromArray, fromTable, templateOptions } from '../src/index'
import data from './data/employee-dummy.json'

let tailwindOptions = templateOptions.tailwind

tailwindOptions.thead.classes = ['shadow-lg']
tailwindOptions.tbody.classes = ['bg-yellow-200']
tailwindOptions.tbody.trClasses = ['text-red-600']
tailwindOptions.tfoot.trClasses = ['shadow-lg']

let proTable = fromArray('#table', {
  columns: ['no', 'name', 'email', 'gender', 'phone'],
  rows: data
}, {
  ...tailwindOptions,
  contents: {
    no: content => [++content, {
      classes: ["bg-blue-100", "text-center", "shadow-lg"]
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