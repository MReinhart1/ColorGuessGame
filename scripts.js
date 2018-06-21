
//All selected variables

var squares = document.querySelectorAll(".square");
var RGBLabel = document.getElementById("labelForGuess");
var message = document.getElementById("response");
var reloadPage = document.getElementById("newColorButton");
var easy = document.getElementById("easyMode");
var hard = document.getElementById("hardMode");


//All variables made here
var colors = generateRandColors(6);
var pickedColor = pickRandColor();


//All declarations
RGBLabel.textContent = pickedColor;



// All functions to make game work
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


function changeAllColors(color){
  for(var i = 0; i < squares.length; i++){
    this.squares[i].style.backgroundColor = color;
    reloadPage.textContent = "Play again?"
  }
}



function pickRandColor() {
  var ans = Math.floor(Math.random()*colors.length);
  return colors[ans];
}


function generateRandColors(len){
  var arr = []

  for(var i = 0; i < len; i++){
    arr.push(randColor());
  }
  return arr;
}

function randColor(){
  var col = "rgb("+ Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256)  + ", " + Math.floor(Math.random()*256) + ")";
  return col;
}


reloadPage.addEventListener("click", function(){
  this.textContent = "NEW COLORS";
  message.textContent = "Try Again";
  colors = generateRandColors(6);
  pickedColor = pickRandColor();
  RGBLabel.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }

});



easy.addEventListener("click", function(){
  alert("clicked");
});





hard.addEventListener("click", function(){
  alert("clicked");
});

