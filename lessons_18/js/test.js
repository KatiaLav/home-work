"use strict"
function getTable() {
	const num = parseInt (document.getElementById('num').value)
	for (let i = 0; i < num; i++) {
		 let input = document.createElement('input')
		 input.setAttribute('type', 'text')
		 input.setAttribute('class', 'ratig')
		document.getElementById('wrap').append(input)
	}
	let btnSum =  document.createElement('button')
	btnSum.innerText = 'get sum'
	document.getElementById('wrap').append(btnSum)
	btnSum.onclick = getSum
}
function getSum() {
	let listNum =document.getElementsByClassName('ratig')
	let sum = 0
	let i = 0
	for (const el of listNum) {
		 sum +=parseInt (el.value)
		 i++
	}
	let resSum= sum/i
	let res = document.createElement('h3')
	res.innerText = `sum = ${resSum.toFixed(1)}`
	document.getElementById('wrap').append(res)
}
let btnTable = document.getElementById('btnTabl')
btnTable.onclick = getTable
