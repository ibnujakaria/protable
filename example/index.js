import { fromArray, fromServer, templateOptions } from '../src/index'
import ProTable from '../src/components/table/ProTable'
import employees from './data/employee-dummy.json'

/**
 * @type ProTable.Options
 */
const options = {
  classes: ['table', 'table-sm', 'table-striped', 'table-bordered'],
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
    classes: ['form-control', 'form-control-sm'],
    notFoundText: 'Oops. The data that you are looking for is not found.'
  }
}

const proTableFromServer = fromServer('#table-1', {
  url: ({ page }) => {
    return `/data/server-side-example/${page}.json`
  },
  success: res => {
    return res.json()
  }
})

fromServer('#table-2', {
  url: ({ page, limit }) => {
    const baseURL = `https://reqres.in/api/users`
    const query = new URLSearchParams({
      page,
      per_page: limit
    }).toString()

    return `${baseURL}?${query}`
  },
  success: async res => {
    const body = await res.json()
    return {
      data: {
        columns: ['id', 'avatar', 'first_name', 'last_name', 'actions'],
        rows: body.data
      },
      meta: {
        last_page: body.total_pages,
        total_rows: body.total
      }
    }
  },
  options: {
    limit: 5,
    contents: {
      avatar: src => {
        const img = document.createElement('img')
        img.src = src
        img.style.width = '2.5rem'
  
        return img
      },
      actions: () => {
        const dom = document.createElement('div')
        const btnEdit = document.createElement('button')
        btnEdit.innerText = 'Edit'
        dom.appendChild(btnEdit)
  
        return dom
      }
    },
    pagination: {
      rowsPerPage: {
        ranges: [1, 2, 3, 4, 5, 6, 12]
      }
    }
  }
})

fromServer('#table-3', {
  url: ({ page, limit, search }) => {
    const baseURL = `https://api.github.com/search/repositories`
    const query = {
      page, per_page: limit, q: search
    }

    query.q = `${query.q}+language:php`

    return `${baseURL}?${new URLSearchParams(query).toString()}`
  },
  success: async res => {
    const body = await res.json()
    const linkHeaders = (await res.headers.get('Link')).split(',')
    const lastLink = new URL(
      linkHeaders[1].split(';')[0].replace(/<|>/g, '')
    )

    console.log('server', 'body', body)
    console.log('server', 'linkHeaders', linkHeaders)
    console.log('server', 'lastLink', lastLink)

    return {
      data: body.items.map(_item => ({
        name: _item.name,
        owner: _item.owner.login,
        avatar_url: _item.owner.avatar_url,
        homepage: _item.homepage,
        html_url: _item.html_url
      })),
      meta: {
        total_rows: 10,
        last_page: 5
      }
    }
  }
})

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
  columns: {
    name: {
      label: 'Full Name'
    },
    blog: {
      label: 'Link Blog',
      targetIndex: 3
    }
  },
  search: {
    classes: ['form-control', 'form-control-sm'],
    wrapperElement: 'section',
    wrapperClasses: ['p-2']
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

let proTable = fromArray('#table-employee-container', {
  columns: ['no', 'name', 'email', 'gender', 'phone'],
  rows: employees
}, {
  ...templateOptions.bootstrapSm,
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
