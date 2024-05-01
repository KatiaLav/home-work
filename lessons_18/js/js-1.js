"use strict"

function getAdd() {
	const first = parseFloat(document.getElementById('first').value)
	const second = parseFloat(document.getElementById('second').value)

	document.getElementById('res').value = first + second
}
function getSubtract() {
	const first = parseFloat(document.getElementById('first').value)
	const second = parseFloat(document.getElementById('second').value)

	document.getElementById('res').value = first - second
}
function getMultiply() {
	const first = parseFloat(document.getElementById('first').value)
	const second = parseFloat(document.getElementById('second').value)

	document.getElementById('res').value = first * second
}
function getShare() {
	const first = parseFloat(document.getElementById('first').value)
	const second = parseFloat(document.getElementById('second').value)

	document.getElementById('res').value = first / second
}

document.getElementById('add').onclick = getAdd
document.getElementById('subtract').onclick = getSubtract
document.getElementById('multiply').onclick = getMultiply
document.getElementById('share').onclick = getShare

// ----------------------------------

