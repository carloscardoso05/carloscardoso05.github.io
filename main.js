const $ = (e) => document.querySelector(e);
const myName = "CARLOS CARDOSO";
const myNameElement = $("#my-name");
myNameElement.innerText = `${getRandomString(6)} ${getRandomString(7)}`
let letterIndex = 1;

// const writingInterval = setInterval(() => {
//   setInterval(() => {
//     myNameElement.innerText = `${getRandomString(6)} ${getRandomString(7)}`
//   },80)
//   if (letterIndex > myName.length) return;
//   myNameElement.innerText = myName.slice(0, letterIndex);
//   letterIndex++;
// }, 160);

const writingInterval = setInterval(() => {
    if (letterIndex > myName.length) clearInterval(writingInterval)
    const myNameString = myName.substring(0, letterIndex)
    const randomStr = `${getRandomString(6)} ${getRandomString(7)}`.substring(letterIndex, myName.length)
    myNameElement.innerText = myNameString + randomStr;
    letterIndex++
}, 160);

function getRandomString(length = 1) {
  let randomString = "";
  let i = 1;
  while (i <= length) {
    const randomLetterIndex = Math.floor(Math.random() * 26);
    const randomLetter = String.fromCharCode(65 + randomLetterIndex);
    randomString += randomLetter;
    i++;
  }
  return randomString;
}
