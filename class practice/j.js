// document.querySelector("#check").addEventListener("click", check);

// function check() {
//   const day = document.querySelector("#day").value;

//   if (day === "Monday" || day === "Tuesday") {
//     alert("come");
//   } else if (day === "Tuesday" || day === "Wednesday") {
//     alert("More work to do");
//   } else {
//     alert("okay you can have fun!");
//   }
// }


// document.querySelector('#btnOne').onclick = firstBtn;
// document.querySelector('#btnTwo').onclick = secondBtn;
// document.querySelector('#btnThree').onclick = thirdBtn;
// document.querySelector('#btnFour').onclick = randomBtn;

// let randoms = ['red', 'green', 'purple', 'white', 'skyblue', 'greenyellow', 'indigo', 'indianred', 'rosybrown', 'rebeccapurple']

// function firstBtn() {
//   document.querySelector('#door').style.backgroundColor = 'orange';
// }
// function secondBtn() {
//   document.querySelector('#door').style.backgroundColor = 'black';
// }
// function thirdBtn() {
//   document.querySelector('#door').style.backgroundColor = 'blue';
// }

// function randomBtn() {
//   let theIndex = Math.floor(Math.random() * randoms.length)
//   document.querySelector('#door').style.backgroundColor = randoms[theIndex]
// }


document.querySelector('#btn').addEventListener('click', yell)

const synth = window.speechSynthesis;

function yell() {
  const firstName = document.querySelector('#firstName').value
  //const secondName = document.querySelector('#secondName').value
 // const middleName = document.querySelector('#middleName').value

  const talkOut = `${firstName}`
  document.querySelector('#wordInput').innerText = talkOut

  let yellOut = new SpeechSynthesisUtterance(talkOut)
  synth.speak(yellOut)


}