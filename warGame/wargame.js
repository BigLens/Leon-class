if(!localStorage.getItem('gameScore')){
	localStorage.setItem('gameScore', 0);
}

document.querySelector('button').addEventListener('click',addCard)

function addCard(){
	let gamecard = Number(localStorage.getItem('gamescore'));
	gamecard += 1;
	localStorage.setItem('gamescore', gamecard)
}
