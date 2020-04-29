import { fromArray } from '../src/index'

fromArray('#table-from-array', [
  {
    name: 'Nurul Huda',
    relationship: 'Menikah',
    blog: 'https://jagongoding.com'
  },
  {
    name: 'Abdullah Wahid',
    city: 'Bangkalan'
  },
  {
    city: 'Lamongan',
    name: 'Lendis Fabri',
    blog: 'https://kopiding.in'
  },
  {
    name: 'Elmo Bachtiar',
    relationship: 'Lajang'
  }
])

const options = {
  classes: ['table', 'table-bordered', 'mt-3']
}

fromArray('#table-from-array-2', [
  {
    name: 'Nurul Huda',
    birth: {
      day: 1,
      month: 'January',
      year: 1996
    },
    city: 'Surabaya'
  },
  {
    name: 'Wahid Abdullah',
    birth: {
      day: 2,
      month: 'February',
      year: 1996
    },
    city: 'Bangkalan'
  },
  {
    name: 'Lendis Fabri',
    birth: {
      day: 3,
      month: 'Maret',
      year: 1996
    },
    city: 'Lamongan'
  }
])
