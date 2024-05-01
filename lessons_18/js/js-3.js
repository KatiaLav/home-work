"use strict"

function getAgeUser() {
	const userYear = parseInt(document.getElementById('userYear').value)
	const nowYear = new Date().getFullYear()
	document.getElementById('resultAge').value = nowYear - userYear
}
document.getElementById('brdAge').onclick = getAgeUser