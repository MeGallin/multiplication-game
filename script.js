const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('btn');

let number1 = Math.ceil(Math.random() * 10);
let number2 = Math.ceil(Math.random() * 10);
questionEl.innerText = `What is ${number1} X ${number2}`;
const correctAnswer = number1 * number2;
let score = JSON.parse(localStorage.getItem('score'));

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener('submit', () => {
  const userAnswer = +inputEl.value;
  inputEl.value = null;
  inputEl.focus();

  if (userAnswer === correctAnswer) {
    score++;
    storeLocalStorage();
  } else {
    score--;
    storeLocalStorage();
  }
});

const storeLocalStorage = () => {
  localStorage.setItem('score', JSON.stringify(score));
};
