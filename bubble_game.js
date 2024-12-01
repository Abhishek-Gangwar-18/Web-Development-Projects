// Variables
let timer = 60;
let score = 0;
var rndm = 0;

// Functions
function increasescore() {
  score += 10;
  document.querySelector("#scorebox").textContent = score;
  if (score < 100) {
    document.querySelector("#scorebox").style.color = "red";
  }
  else if (score >= 100 && score < 200) {
    document.querySelector("#scorebox").style.color = "orange";
  }
  else if (score >= 200 && score < 300) {
    document.querySelector("#scorebox").style.color = "yellowgreen";
  }
  else {
    document.querySelector("#scorebox").style.color = "green";
  }
}

function getnewhit() {
  rndm = Math.floor(Math.random() * 10);
  document.querySelector('#hitbox').textContent = rndm;
}

function makeBubble() {
  var clutter = "";
  for (i = 0; i <= 151; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#panel-bottom").innerHTML = clutter;
}

function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer = timer - 1;
      document.querySelector("#timeinterval").textContent = timer;
      if (timer <= 10) {
        document.querySelector("#timeinterval").style.color = "red";
      }
    } else {
      clearInterval(timerint);
      document.querySelector("#panel-bottom").innerHTML = `<div style="text-align: center;"> 
                                                           <h1 style="color: red;">Game Over</h1>
                                                          <h2 style="margin-top: 10px;">Your Score is:- ${score}</h2> 
                                                          </div>`;
    }
  }, 1000);
}

document.querySelector("#panel-bottom").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum == rndm) {
    increasescore();
    makeBubble();
    getnewhit();
  }
});

// Function Calling
makeBubble();
getnewhit();
runtimer();