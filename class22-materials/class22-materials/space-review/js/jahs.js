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



function Detonator(height, hair, color, number){
	this.height = height
	this.hair = hair
	this.color = color
	this.number = number
	this.algo = function(){
		console.log(`He's so ${height}`);
	}
	this.menD = function(){
		console.log(`Harry closed ${number} doors`);
	}
}

let newConstruct = new Detonator('Tall', 'Hairy', 'Grey', 5);

newConstruct.algo();
newConstruct.menD();

