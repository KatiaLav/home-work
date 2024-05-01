"use strict"
function getTable() {
	const numInpt = parseFloat(document.getElementById('number').value)
	
	for (let i = 0; i < numInpt; i++) {
		const elementInput = document.createElement('input')
		elementInput.setAttribute('class', 'inputNow')
		elementInput.setAttribute('placeholder', '5')
		elementInput.style.marginBottom = '8px'
		elementInput.style.marginRight = '4px'
		document.querySelector('.block-table').append(elementInput)
	}
	// -----------button get sum
	const divForBtn = document.createElement('div')
	const btnGetSum = document.createElement('button')
	btnGetSum.setAttribute('id', 'getSum')
	btnGetSum.innerText = 'Get Sum'
	document.querySelector('div').append(btnGetSum)
	document.querySelector('.block-table').append(divForBtn)
	btnGetSum.onclick = getSum
}
// ----------------------------
function getSum() {
	const inputScours = document.getElementsByClassName('inputNow')
	let sum = 0
	let count = 0
	for (const num of inputScours) {
		sum += parseFloat(num.value)
		count++
	}
	let averageScours = sum / count
	document.getElementById('totalRes').innerText = `${Math.round(averageScours)}`
	document.getElementById('totalRes').prepend(s)
}
document.getElementById('getTable').onclick =  getTable



// -----------
// -----------

// function getTable() {
// 	const numInpt = parseFloat(document.getElementById('number').value)

// 	for (let i = 0; i < numInpt; i++) {
// 		const elementInput = document.createElement('input')
// 		elementInput.setAttribute('class', 'inputNow')
// 		elementInput.setAttribute('value', '5')
// 		elementInput.style.marginBottom = '8px'
// 		elementInput.style.marginRight = '4px'
// 		document.querySelector('.block-table').append(elementInput)
// 	}
// 	// -----------button get sum
// 	const divForBtn = document.createElement('div')
// 	const btnGetSum = document.createElement('button')
// 	btnGetSum.setAttribute('id', 'getSum')
// 	btnGetSum.innerText = 'Get Sum'
// 	document.querySelector('div').append(btnGetSum)
// 	document.querySelector('.block-table').prepend(divForBtn)

// 	// --------------------------------
// 	let inputScours = document.getElementsByClassName('.inputNow').value
	
// 	let sum = 0
// 	let count = 0
// 	for (const num of inputScours.value) {
// 		sum += parseFloat(num.value)
// 		count++
// 	}
// 	let averageScours = sum / count
// 	// ----------------------------------
// 	document.getElementById('getSum').onclick = averageScours
// 	document.getElementById('totalRes').innerText = averageScours
// }
// // --------------
// // --------------
// document.getElementById('getTable').onclick = getTable







