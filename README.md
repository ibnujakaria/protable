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
    nama: 'Nurul Huda',
    domisili: 'Bangkalan',
    status: 'Menikah'
  },
  {
    domisili: 'Bangkalan',
    nama: 'Lendis Fabri',
    blog: 'https://kopiding.in'
  },
  {
    nama: 'Abdullah Wahid',
    domisili: 'Bangkalan'
  }
])
```

Output:

<table><thead><tr><th>Nama</th><th>Domisili</th><th>Status</th><th>Blog</th></tr></thead><tbody><tr><td>Nurul Huda</td><td>Bangkalan</td><td>Menikah</td><td>-</td></tr><tr><td>Lendis Fabri</td><td>Bangkalan</td><td>-</td><td>https://kopiding.in</td></tr><tr><td>Abdullah Wahid</td><td>Bangkalan</td><td>-</td><td>-</td></tr></tbody></table>