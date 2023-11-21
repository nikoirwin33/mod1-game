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
    } else if (firstCard && !secondCard) {
      secondCard = box;
      box.classList.add("show");
      firstCard.style.pointerEvents = "none";
        if (firstCard.innerHTML === secondCard.innerHTML) {
        secondCard.style.pointerEvents = "none";
        firstCard = null;
        secondCard = null;
        clickCounter++;
        if (clickCounter >= 6)
          setTimeout(() => alert("GAME IS OVER! Refresh to play again!!"), 2000);
      } else {
        firstCard.classList.add("hide");
        secondCard.classList.add("hide");
        setTimeout(() => {
          firstCard.classList.remove("show");
          secondCard.classList.remove("show");
          firstCard.classList.remove("hide");
          secondCard.classList.remove("hide");
          firstCard = null;
          secondCard = null;
        }, 2000);
      }
    }
  });
});