// var userName = 'Chris';
// userName ? console.log('Hello ' + userName) : console.log('Hello');
// var userQuestion = 'What is my name?';
// console.log(userQuestion);
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';
switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall ='Reply hazy try again';
    break;
  case 3:
    eightBall ='Cannot predict now';
    break;
  case 4:
    eightBall ='Do not count on it';
    break;
  case 5:
    eightBall ='My sources say no';
    break;
  case 6:
    eightBall ='Outlook not so good';
    break;
  case 7:
    eightBall ='Signs point to yes';
    break;
}
var button = document.getElementById('submit');
var input = document.getElementById('input');
var answer = document.getElementById('answer');

function inputLength() {return input.value.length}
function eightBallAnswer() {
  return answer.appendChild(document.createTextNode(`${eightBall} `));
}
function recieveAnswerAfterClick() {
  if (inputLength() > 0) {
    eightBallAnswer();
}}

button.addEventListener('click', recieveAnswerAfterClick)

input.addEventListener('keypress', function(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    eightBallAnswer();
  };
})

