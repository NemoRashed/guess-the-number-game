//Random number generator
function callMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".body").style.backgroundColor = "black";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".highscore").textContent = score;
  document.querySelector(".score").textContent = 20;
  callMessage("Start guessing...");
});

var randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
var score = 20;
var highscore = 0;

var number = document.querySelector(".number");
document.querySelector(".check").addEventListener("click", function () {
  var x = document.querySelector(".guess").value;
  if (x == randomNumber) {
    var attempt = 20 - score;
    callMessage(
      "Correct, You are the winner you are attempt" +
        " " +
        attempt +
        " " +
        "times"
    );

    number.innerHTML = `${x}`;
    document.querySelector(".body").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
    }
  } else if (x != randomNumber) {
    //score--; //19
    var y = randomNumber - x;

    if (y > 10) {
      score = score - 2;
    } else if (y <= 10) {
      score = score - 1;
    }
    console.log(score);

    document.querySelector(".score").textContent = score;

    if (x > randomNumber) {
      callMessage("You are too high");
    } else if (x < randomNumber) {
      callMessage("Your are too low");
    }

    if (score < 0) {
      callMessage("you lost the game!");

      document.querySelector(".score").textContent = 0;
    }
  }
});
// Write code below
// document.querySelector(".container").classList.add("border");
// document.querySelector(".container").classList.remove("border");
// document.querySelector(".container").classList.toggle("border");
