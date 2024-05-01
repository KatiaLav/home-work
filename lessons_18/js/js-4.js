"use strict"

const wishesList = ['миру', 'щастя', 'здоров\'я', 'любові', 'достатку', 'успіхів']

function getWishesForYou(arrList, number) {
	const blockWish = document.createElement('div')
	blockWish.style.color = 'red'
	blockWish.style.fontSize = '32px'
	blockWish.style.marginBottom = '18px'
	blockWish.style.fontWeight = '900'
	blockWish.innerText = 'Бажаю Вам:'
	document.getElementById('wish-container').append(blockWish)
	let copyArrWish = [...arrList]

	for (let i = 0; i < number; i++) {
		const rand = Math.floor(Math.random() * copyArrWish.length) 
		
		const blockEl = document.createElement('div')
		blockEl.style.fontWeight = '700'
		blockEl.style.marginBottom = '8px'
		blockEl.innerText = copyArrWish[rand]
		document.getElementById('wish-container').append(blockEl)
		copyArrWish.splice(rand, 1)
		copyArrWish.length--

	}
}

getWishesForYou(wishesList,3)