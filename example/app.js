import { fromArray } from '../src/index'

const options = {
  classes: ['table', 'table-bordered', 'mt-3'],
  thead: {
    thClasses: ['align-middle']
  }
}

// fromArray('#table-from-array', [
//   {
//     name: 'Nurul Huda',
//     relationship: 'Menikah',
//     blog: 'https://jagongoding.com'
//   },
//   {
//     name: 'Abdullah Wahid',
//     city: 'Bangkalan'
//   },
//   {
//     city: 'Lamongan',
//     name: 'Lendis Fabri',
//     blog: 'https://kopiding.in'
//   },
//   {
//     name: 'Elmo Bachtiar',
//     relationship: 'Lajang'
//   }
// ], options)

// fromArray('#table-from-array-2', [
//   {
//     name: 'Nurul Huda',
//     birth: {
//       day: 1,
//       month: 'January',
//       year: 1996
//     },
//     address: {
//       city: 'Surabaya',
//       country: { name: 'Indonesia', code: { loc: 'id', phone: '+62' } }
//     }
//   },
//   {
//     name: 'Wahid Abdullah',
//     birth: {
//       day: 2,
//       month: 'February',
//       year: 1996
//     },
//     address: {
//       city: 'Bangkalan',
//       country: { name: 'Indonesia', code: { loc: 'id', phone: '+62' } }
//     }
//   },
//   {
//     name: 'Lendis Fabri',
//     birth: {
//       day: 3,
//       month: 'Maret',
//       year: 1996
//     },
//     address: {
//       city: 'Lamongan',
//       country: { name: 'Indonesia', code: { loc: 'id', phone: '+62' } }
//     }
//   }
// ], options)


fetch('http://dummy.restapiexample.com/api/v1/employees')
  .then(response => response.json())
  .then(response => {
    fromArray('#table-employee-container', response.data, options)
  })
