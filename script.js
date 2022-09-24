let sum = 0;
let card = [];
let message = "";
let theVal;
let body = document.querySelector("body");
let mesColor;
let hasBlackJack = false;
let isAlive = false;
let gameStart = document.getElementsByClassName("gameStart");
let player = document.getElementById("player-info");
let features = document.querySelectorAll("input");
let playerName = features[0];
playerName.addEventListener("keyup", (val) => {
  let addLater = document.getElementById("add-later");
  theVal = val.target.value;
  addLater.innerHTML = theVal.toUpperCase();
});
function gameOn() {
  body.style.backgroundPosition = "right";
  document.documentElement.scrollTop = 1600;
  player.innerHTML += " " + theVal;
}

function loadStart() {
  document.documentElement.scrollTop = 0;
}

function randNum() {
  let rand = Math.ceil(Math.random() * 11);
  if (rand > 10) {
    return 10;
  } else if (rand === 1) {
    return 11;
  } else {
    return rand;
  }
}

function startGame() {
  isAlive = true;
  let num1 = randNum();
  let num2 = randNum();
  card = [num1, num2];
  sum = num1 + num2;
  renderGame();
}

function renderGame() {
  let textMessage = document.getElementById("bj-subtext");
  let cards = document.getElementById("bj-cards");
  let theSum = document.getElementById("bj-sum");

  cards.innerHTML = `Cards: `;
  card.forEach((n) => (cards.innerHTML += n + " "));

  theSum.innerHTML = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do want to draw a new card ?";
    mesColor = textMessage.style.color = "green";
    isAlive = true;
  } else if (sum === 21) {
    message = " You have won the Black Jack !!";
    hasBlackJack = true;
    mesColor = textMessage.style.color = "#c34cff";
  } else {
    message = " You have lost the game try again later";
    isAlive = false;
    mesColor = textMessage.style.color = "red";
  }
  textMessage.innerHTML = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let cardText = randNum();
    card.push(cardText);
    sum += cardText;
    renderGame();
  }
}
