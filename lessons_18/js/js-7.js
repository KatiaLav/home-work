"use strict"

function getTotalPrice() {
	let totalSumPrice = 0
	// транспорт
	const selTransport = parseFloat(document.getElementById('transport').value)
	// харчування
	const inputFood = document.querySelectorAll('input[type=checkbox]')
	let inputTransportPrice = 0
	for (const inpEl of inputFood) {
		if (inpEl.checked) {
			inputTransportPrice += parseFloat(inpEl.value)
		}
	}
	// Гід
	const inpGuide = document.querySelectorAll('input[type=radio]')
	let inpGuidePrice = 0
	for (const inpEl of inpGuide) {
		if (inpEl.checked)
		inpGuidePrice += parseFloat(inpEl.value)
	}
	totalSumPrice = selTransport + inputTransportPrice + inpGuidePrice
	const showTotalPrice = document.getElementById('totalres')
	showTotalPrice.innerText = totalSumPrice
	document.body.append(showTotalPrice)
}

// ----------------
window.onload = function () {
	document.querySelector('button').onclick = getTotalPrice
}
// --------------------