import { fromArray, fromTable } from '../src/index'

const options = {
  classes: ['table', 'table-sm', 'table-bordered', 'mt-3'],
  thead: {
    thClasses: ['align-middle']
  },
  pagination: {
    type: 'default',
    containerElement: 'ul',
    containerClasses: [
      'pagination', 'pagination-sm'
    ],
    btnWrapper: 'li',
    btnWrapperClasses: [
      'page-item'
    ],
    btnWrapperActiveClasses: [
      'active'
    ],
    btnClasses: [
      'page-link'
    ]
  }
}

const simpleProTable = fromArray('#table-from-array', [
  {
    name: 'Nurul Huda',
    relationship: 'Menikah',
    ['link bloggg']: 'https://jagongoding.com'
  },
  {
    name: 'Abdullah Wahid',
    city: 'Bangkalan'
  },
  {
    city: 'Lamongan',
    name: 'Lendis Fabri',
    ['link bloggg']: 'https://kopiding.in'
  },
  {
    name: 'Elmo Bachtiar',
    relationship: 'Lajang'
  }
], {
  ...options,
  columns: {
    name: {
      label: 'Full Name'
    },
    blog: {
      label: 'Link Blog',
      targetIndex: 3
    }
  }
})

console.log('simpleProTable', simpleProTable)

const proTableComplex = fromArray('#table-from-array-2', [
  {
    name: 'Nurul Huda',
    birth: {
      day: 1,
      month: 'January',
      year: 1996
    },
    address: {
      city: 'Surabaya',
      country: { name: 'Indonesia', code: { loc: 'id', phone: '+62' } }
    }
  },
  {
    name: 'Wahid Abdullah',
    birth: {
      day: 2,
      month: 'February',
      year: 1996
    },
    address: {
      city: 'Bangkalan',
      country: { name: 'Indonesia', code: { loc: 'id', phone: '+62' } }
    }
  },
  {
    name: 'Lendis Fabri',
    birth: {
      day: 3,
      month: 'Maret',
      year: 1996
    },
    address: {
      city: 'Lamongan',
      country: { name: 'Indonesia', code: { loc: 'id', phone: '+62' } }
    }
  }
], options)

console.log('proTableComplex', proTableComplex)


fetch('http://www.json-generator.com/api/json/get/cllKoSVvKG?indent=2')
  .then(response => response.json())
  .then(data => {
    let proTable = fromArray('#table-employee-container', {
      columns: ['no', 'name', 'email', 'gender', 'phone'],
      rows: data
    }, {
      ...options,
      contents: {
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
  })

const proTableFromTable = fromTable('#table-1', {
  ...options
})

console.log('proTableFromTable', proTableFromTable)