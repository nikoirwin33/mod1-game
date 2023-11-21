const boxes = document.querySelectorAll(".box");

// create function for each box
boxes.forEach(function (box) {
  let randomNum = Math.floor(Math.random() * 12);
  box.style.order = randomNum;
});

const cardArray = [ 
  { name: "heyarnold", image:"heyarnold1.png", }, 
  { name: "heyarnold", image: "heyarnold1.png", },
  { name: "mojo", image: "mojojojo.png", },
  { name: "mojo", image: "pizza.png", }, 
  { name: "patrick", image: "patrick1.png", },
  { name: "patrick", image: "patrick1.png", }, 
  { name: "rocketpower", image: "rocketpower.png",},
  { name: "rocketpower", image: "rocketpower.png", },
  { name: "rugrats", image: "rugrats.png", },
  { name: "rugrats", image: "rugrats.png", },
  { name: "spongebob", image: "spongebob1.png", },
  { name: "spongebob", image: "spongebob1.png", }, 
  ]; 