
let averageTemperature = 0;
for (let temp = 1; temp <= 12; temp++ ) {
	const indicator = parseFloat(prompt(`Введіть показник температури за ${temp} місяць`));
	averageTemperature += indicator;
	}
document.write(`Середня температура за рік ${averageTemperature / 12}`);

