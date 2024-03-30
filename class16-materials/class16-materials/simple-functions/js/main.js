//---Easy
//create a function that subtracts two numbers and alerts the difference
function twoNumbers(n1, n2) {
    alert(n1 - n2)
}
twoNumbers(20, 10);

//create a function that divides three numbers and console logs the quotient
function divideThreeNums(firstNum, secondNum, thirdNum) {
    console.log(firstNum / secondNum / thirdNum);
}
divideThreeNums(15, 5, 3);

//create a function that multiplys three numbers and returns the product
function multiplyTri(num1, num2, num3) {
    return num1 * num2 * num3
}
(multiplyTri(25, 10, 2));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takesThreeNums(oneNum, twoNum, threeNum) {
    return (oneNum + twoNum) % threeNum
}
console.log(takesThreeNums(5, 3, 3));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
