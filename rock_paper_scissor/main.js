let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userScoreboard = document.querySelector(".userScore");
let compScoreboard = document.querySelector(".compScore");
const msg = document.querySelector("#msg");

// generate random computer choice
let genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  console.log("computer: ", options[randIdx]);

  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreboard.innerText = userScore;
    msg.innerHTML = `great! your choice ${userChoice} beats computers choice ${compChoice}`;
  } else {
    compScore++;
    compScoreboard.innerText = compScore;
    msg.innerHTML = `oops! computer choice ${compChoice} beats your choice ${userChoice}`;
  }
};

const draw = () => {
  msg.innerText = "Game was Draw. Play again.";
};

const playGame = (userChoice) => {
  let compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //draw
    draw();
  } else {
    let userWin = true;

    if (userChoice == "rock") {
      //paper , scissors
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice == "paper") {
      //rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //scissors -- user choice
      //rock , paper -- computer choice
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choices) => {
  choices.addEventListener("click", function () {
    let userChoice = choices.getAttribute("id");
    console.log("user:", userChoice);
    playGame(userChoice);
  });
});
