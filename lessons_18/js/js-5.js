"use strict"

function tableTable(rows = 3, column = 4, min = 1, max = 100) {
	const elTable = document.createElement('table')
	for (let r = 0; r < rows; r++) {
		const trRow = document.createElement('tr');
		for (let c = 0; c < column; c++) {
			const tdColumn = document.createElement('td');
			const random = min + Math.floor(Math.random() * (max - min + 1))
			tdColumn.innerText = random
			trRow.append(tdColumn)
		}
		elTable.append(trRow)
	}
	return elTable
}
document.body.append(tableTable())