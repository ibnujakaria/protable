import test from 'ava'
import { fromArray } from 'protable'

test('create proTable from array', t => {
	const data = [
		{ id: 1, name: 'Nurul Huda' },
		{ id: 2, name: 'Lendis Fabri' },
		{ id: 3, name: 'Wahid Abdullah' },
	]
	const proTable = fromArray(null, data)

	proTable.tbody.trs.forEach((_tr, i) => {
		_tr.childs.forEach((_child) => {
			t.true(
				data[i][_child.key] == _child.$dom.innerHTML
			)
		})
	})
})

test.todo('Test from table')