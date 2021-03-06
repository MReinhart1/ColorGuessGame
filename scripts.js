
//All selected variables

var squares = document.querySelectorAll(".square");
var RGBLabel = document.getElementById("labelForGuess");
var message = document.getElementById("response");
var reloadPage = document.getElementById("newColorButton");
var easy = document.getElementById("easyMode");
var hard = document.getElementById("hardMode");
var mode = true;

//All variables made here
var colors = generateRandColors(6);
var pickedColor = pickRandColor();


//All declarations
RGBLabel.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      message.textContent = "Correct!!!";
      changeAllColors(pickedColor);
    } else{
      this.style.backgroundColor = "#232223";
      message.textContent = "Try Again";
    }
  });

}


// All functions to make game work

function setup(num){
  message.textContent = "GUESS!";
  colors = generateRandColors(num);
  pickedColor = pickRandColor();
  RGBLabel.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  if (num===3){
    for ( var i = 3; i <6;i++){
      squares[i].style.backgroundColor = "#232223";
    }

  }
}

function changeAllColors(color) {
  if (mode === true) {
    for (var i = 0; i < squares.length; i++) {
      this.squares[i].style.backgroundColor = color;
      reloadPage.textContent = "Play again?"
    }
  }
  else {
    for (var i = 0; i < (squares.length / 2); i++) {
      this.squares[i].style.backgroundColor = color;
      reloadPage.textContent = "Play again?";
    }
    for (var i = 3; i < 6; i++) {
      squares[i].style.backgroundColor = "#232223";
    }

  }

}


function pickRandColor() {
  var ans = Math.floor(Math.random()*colors.length);
  return colors[ans];
}


function generateRandColors(len){
  var arr = [];

  for(var i = 0; i < len; i++){
    arr.push(randColor());
  }
  return arr;
}

function randColor(){
  var col = "rgb("+ Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256)  + ", " + Math.floor(Math.random()*256) + ")";
  return col;
}


//Event listeners
reloadPage.addEventListener("click", function(){
  mode === false ? setup(3) : setup(6)
});


easy.addEventListener("click", function(){
  mode=false;
  this.style.backgroundColor = "#4682b4";
  this.style.color = "#ffffff";
  hard.style.backgroundColor = "#ffffff";
  hard.style.color = "#4682b4";

  setup(3);
});


hard.addEventListener("click", function(){
  mode=true;
  this.style.backgroundColor = "#4682b4";
  this.style.color = "#ffffff";
  easy.style.backgroundColor = "#ffffff";
  easy.style.color = "#4682b4";

  setup(6);
});



