
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
function bam(){
for( let i = 0; i < values.length; i++){
	sum += values[i];
	
}console.log(sum);
}


// Write a program that creates the following arra
//y, then calculates and shows the array's maximum v
//alue.                                                                                               // const values = [3, 11, 7, 2, 9, 10];;



function maxNumbers(maxx){
	let max = maxx[0];
	for(let i = 0; i < maxx.length; i++){
		if (maxx[i] > max) max = maxx[i]
	}
	console.log(max);
}
maxNumbers([3, 11, 7, 2, 9, 10]);

function sortingArray(Arr){
	let max = Arr.sort((a, b) => a - b);
	console.log(max[max.length - 1]);
}
sortingArray([26, 10, 19, 100, 200, 5, 99]);


function maxV(...n){
	let maxc = Math.max(...n)
	console.log(maxc)
}
maxV(23, 14, 80, 900, 65);
