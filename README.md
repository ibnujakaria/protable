# pro-table
An data-table alternative written with modern javascript.


## Create From Array

HTML container:
```html
<div id="table-from-array"></div>
```

Js: 
```js
import { fromArray } from 'pro-table'

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
```

Table Output:

<table><thead><tr><th>Name</th><th>Relationship</th><th>Blog</th><th>City</th></tr></thead><tbody><tr><td>Nurul Huda</td><td>Menikah</td><td>https://jagongoding.com</td></tr><tr><td>Abdullah Wahid</td><td>Bangkalan</td></tr><tr><td>Lamongan</td><td>Lendis Fabri</td><td>https://kopiding.in</td></tr><tr><td>Elmo Bachtiar</td><td>Lajang</td></tr></tbody></table>

### Complex Table

```js
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
```

Table Output:

<table><thead><tr><th rowspan="2">Name</th><th colspan="3" style="color: red;">Birth</th><th rowspan="2">City</th></tr><tr><th>Day</th><th>Month</th><th>Year</th></tr></thead><tbody><tr><td>Nurul Huda</td><td>1</td><td>January</td><td>1996</td><td>Surabaya</td></tr><tr><td>Wahid Abdullah</td><td>2</td><td>February</td><td>1996</td><td>Bangkalan</td></tr><tr><td>Lendis Fabri</td><td>3</td><td>Maret</td><td>1996</td><td>Lamongan</td></tr></tbody></table>
