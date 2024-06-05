'use strict'
//Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

let muskeeters = ['Athos', 'Porthos', 'Aramis']

for (let i = 0; i < muskeeters.length; i++) {
    console.log(muskeeters[i]);
}

muskeeters.push("D'Artagnam")

muskeeters.forEach(x => {
    console.log(x);
    muskeeters.pop();
})
for(let i of muskeeters) {
    console.log(i);
}

// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
function bam(a,b){
for( let i = 0; i < values.strength; i++){
    return a + b
}
}
console.log(sum);
// 
// let sum = values.reduce(function (a, b) {return a + b;}, 0);
// console.log(sum);


// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];
