let bckColors =["lightblue","lightpink"];
let i = 0;
setInterval(function(){
  document.body.style.backgroundColor = bckColors [i]; i= (i+1) % bckColors.length;},2000)

const boxes = document.querySelectorAll(".box");

// create function for each box
boxes.forEach(function (box) {
  let randomNum = Math.floor(Math.random() * 12);
  box.style.order = randomNum;
});
// intitate varibles for cards and counter
let firstCard;
let secondCard;
let clickCounter = 0;


boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (!firstCard && !secondCard) {
      firstCard = box;
      box.classList.add("show");
    }
  }
}