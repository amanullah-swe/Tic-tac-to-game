console.log("hello");
// variable declaration
let boxes = Array.from(document.getElementsByClassName("boxes"));
var firstTurn = "x";
var secondTurn = "0";
var count = 0;
var turnAudio = new Audio("ting.mp3");
var winSound= new Audio("music.mp3");
var mygif=document.querySelector('.mygif');
var winText=document.querySelector('#wintext');
// boxes click
boxes.forEach((element, i) => {
  element.addEventListener("click", (event) => {
    if (count % 2 == 0) {
      element.innerHTML = firstTurn;
      winText.innerHTML=firstTurn+" "+ "won" ;
      count++;
      turnAudio.play();
      checkWin();
    } else {
      element.innerHTML = secondTurn;
      winText.innerHTML=secondTurn+" "+ "won" ;
      count++;
      turnAudio.play();
      checkWin();
    }
  });
});
// button logic
document.getElementById("button").addEventListener("click", () => {
  boxes.forEach((element) => {
    element.innerHTML = "";
    winSound.pause();
    winSound.currentTime=0;
    mygif.style.width="0";
    winText.style.display='none';
  });
});
// game win logic
function checkWin() {
  var i = 0;
  var j = 9;
  while (i < j) {
    if (
      boxes[i].innerHTML === boxes[i + 1].innerHTML &&
      boxes[i].innerHTML === boxes[i + 2].innerHTML &&
      boxes[i].innerHTML != "" &&
      boxes[i + 1].innerHTML != "" &&
      boxes[i + 2].innerHTML != ""
    ) {
      winSound.play();
      winText.style.display='inline';
      mygif.style.width="25vw";
    }
    i += 3;
  }
  var a = 0;
  while (a < 3) {
    if (
      boxes[a].innerHTML === boxes[a + 3].innerHTML &&
      boxes[a].innerHTML === boxes[a + 6].innerHTML &&
      boxes[a].innerHTML != "" &&
      boxes[a + 3].innerHTML != "" &&
      boxes[a + 6].innerHTML != ""
    ) {
      winSound.play();
      winText.style.display='inline';
      mygif.style.width="25vw";
    }
    a++;
  }
  if (
    (boxes[2].innerHTML === boxes[4].innerHTML &&
      boxes[2].innerHTML === boxes[6].innerHTML &&
      boxes[2].innerHTML != "" &&
      boxes[4].innerHTML != "" &&
      boxes[6].innerHTML != "") ||
    (boxes[0].innerHTML === boxes[4].innerHTML &&
      boxes[0].innerHTML === boxes[8].innerHTML &&
      boxes[0].innerHTML != "" &&
      boxes[4].innerHTML != "" &&
      boxes[8].innerHTML != "")
  ) {
    winSound.play();
    winText.style.display='inline';
    mygif.style.width="25vw";
  }
}
