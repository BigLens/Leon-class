function minAndMax(...n) {
    let min = Math.min(...n)
    let max = Math.max(...n)
    console.log(`minimun is ${min} and maximum is ${max}`);
}
minAndMax(20, 200, 100, 10, 50);

function randomSelection() {
    let result = Math.random()
    if (result < .5) {
        console.log('head');
    }else {
        console.log('tail');
    }
}
randomSelection();


const numbersArr = [2, 13, 52, 10, 11];

// const arrowF = arr => arr.filter(n => n % 2 === 0)
// console.log(arrowF(numbersArr));

function arrowF(arr) {
    
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] % 2 === 0) {
            console.log(numbersArr[i]);
            
        }
    }
}
arrowF();

console.log('<<<<BRIDGE>>>>');

function sorting(arr) {
    let sorted = arr.sort((a, b) => a - b)
    console.log(sorted[1] + sorted[sorted.length - 2])
}
sorting([1, 12, 10, 4]);

// const termNUm = [23, 24, 12, 10, 100];
// termNUm.sort();
// console.log(termNUm);

// const termNU = [23, 24, 12, 10, 100];
// termNU.sort((a, b) => a - b);
// console.log(termNU);

function sortin(arr) {
    let newArr = arr.sort(function(a, b) {
        return a - b;
    })
    console.log(newArr[1] + newArr[newArr.length -4]);
}
sortin([1, 2, 8, 4])

// console.log(arrowF(numbersArr));

const objectArr = [{name: 'Joel', mail: 'adedejibioku@gmail.com}];
console.log(objectArr[0]?.mail);
