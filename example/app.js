import { fromArray, fromTable } from '../src/index'
import ProTable from '../src/components/table/ProTable'

/**
 * @type ProTable.Options
 */
const options = {
  classes: ['table', 'table-sm', 'table-striped', 'table-bordered', 'mt-3'],
  thead: {
    thClasses: ['align-middle']
  },
  limit: 5,
  pagination: {
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
    ],
    rowsPerPage: {
      selectClasses: ['form-control', 'form-control-sm'],
      ranges: [5, 10, 15, 1000]
    }
  },
  search: {
    placeholder: 'Cari..',
    classes: ['form-control', 'form-control-sm']
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
        no: content => ++content,
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
  ...options,
  contents: {
    Name: content => content.toUpperCase(),
    Blog: content => {
      const a = document.createElement('a')
      a.href = content
      a.innerHTML = content

      return a
    }
  }
})

console.log('proTableFromTable', proTableFromTable)