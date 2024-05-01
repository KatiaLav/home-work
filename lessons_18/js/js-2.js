"use strict"

function getConvert() {
	const euroCurs = 42.55
	const dollarCurs = 39.55
	const sumGrn = parseFloat(document.getElementById('grn').value)

	document.getElementById('euro').value = sumGrn / euroCurs
	document.getElementById('dollar').value = sumGrn / dollarCurs
}
document.getElementById('convert').onclick = getConvert

