/** let newVocab = 'Trim down the string';
newVocab = newVocab.trim();
console.log(newVocab);
**/

function rockPapperScissors(){
	let random = Math.random();
	if (random < .33){
		console.log('rock');
	}else if(random < .66){
		console.log('papper');
	}else{
		console.log('scissors');
	}
}
rockPapperScissors();



