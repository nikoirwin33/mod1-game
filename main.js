const boxes = document.querySelectorAll(".box");

// create function for each box
boxes.forEach(function (box) {
  let randomNum = Math.floor(Math.random() * 12);
  box.style.order = randomNum;
});
// intitate cards and counter
let firstCard;
let secondCard;
let clickCounter = 0;