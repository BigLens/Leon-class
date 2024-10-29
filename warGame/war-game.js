if(!localStorage.getItem('getCard'){
	localStorage.setItem('getCard', 0);
}

document.querySelector('button').addEventListener('click', addCard);

function addCard(){
	let appendCard = Number(localStorage.getItem('getCard'));
	appendCard += 1;
	localStorage.setItem('getCard', appendCard);
}
