// document.getElementById('purple').onclick = normalPurple;
// document.getElementById('yellow').onclick = normalYellow;

// document.getElementById('green').onclick = normalGreen;
// document.querySelector('#grey').onclick = normalGrey



// function normalPurple() {
//     document.querySelector('body').style.backgroundColor = 'purple';
//     document.querySelector('body').style.color = 'white';
// }

// function normalYellow() {
//     document.querySelector('body').style.backgroundColor = 'yellow';
// }

// function normalGreen() {
//     document.querySelector('body').style.backgroundColor = 'green';
// }

// function normalGrey() {
//     document.querySelector('body').style.backgroundColor = 'grey';
// }
///////////////////////////////////////////////////////////////////////////////////


// let Result = 0;
// document.querySelector('#total').addEventListener('click', Total)
// document.querySelector('#zero').addEventListener('click', zeroDigit);
// document.querySelector('#plusThree').addEventListener('click', threeDigit);
// document.querySelector('#plusNine').addEventListener('click', nineDigit);
// document.querySelector('#minusTwo').addEventListener('click', removeTwo);


// function zeroDigit() {
//     Result = 0;
//     document.querySelector('#total').innerText = Result
// }

// function threeDigit() {
//     Result += 3;
//     document.querySelector('#total').innerText = Result;
// }
//  function Total() {
//     document.querySelector('#total').innerText = emptyParagraph;
//  }

// function nineDigit() {
//     Result += 9;
//     document.querySelector('#total').innerText = Result;
// }
// function removeTwo() {
//     Result -= 2;
//     document.querySelector('#total').innerText = Result;
// }

//////////////////////////////////////////////////////////////////////////////////
document.querySelector('#check').addEventListener('click', check);

function check() {

    const day = document.querySelector('#day').value;
//////////////////////
    if(day === "Tuesday" || "Thursday") {
        alert('CLASS DAY!');
    }else if(day === "Saturday" || "Sunday") {
        alert('WEEKEND!');
    }else{
        alert('BORINNNNNGGGGGG!')
    }
}
