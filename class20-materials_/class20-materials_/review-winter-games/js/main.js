//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function evenArr(arr) {
    let set = []
    arr.forEach(n => {
        if(n % 2 === 0) {
            set.push(n)
        }
    })
    return set
}

console.log(evenArr([1,2,3,4,5,6]));