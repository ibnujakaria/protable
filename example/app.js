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
      label: 'Name'
    },
    blog: {
      label: 'Link Blog',
      targetIndex: 2
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
    let proTable = fromArray('#table-employee-container', data, {
      ...options,
      columns: ['no', 'name', 'email', 'gender', 'age', 'phone']
    })

    console.log('proTable', proTable)
  })

// fromTable('#table-1', options)