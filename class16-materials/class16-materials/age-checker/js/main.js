//Create a conditonal that checks their age

	let age = 20;
//If under 16, tell them they can not drive

	if (age < 16){
		console.log('You can not drive');
	}
//If under 18, tell them they can't hate from outside the club, because they can't even get in

	if (age < 18){
		console.log('You can\'t eat from outside the club because you can\'t even get in');
	}
//If under 21, tell them they can not drink

	if (age < 21){
		console.log('You can not drink');
	}
//If under 25, tell them they can not rent cars affordably

	if (age < 25){
		console.log('You can not rent cars affordably');
	}
//If under 30, tell them they can not rent fancy cars affordably

	if (age < 30) {
		console.log('You can not rent fancy cars affordably');
	}

//If under over 30, tell them there is nothing left to look forward too

	if (age === 30 || age > 30){
		console.log('There\'s nothing left to look forward to');
	}

//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('onclick', headOne)
//Take the value from the input
function headOne(){
	const inputValue = document.querySelector('#danceDanceRevolution').value
//Place the result of the conditional in the paragraph
document.querySelector('p').innerText = age;
}

