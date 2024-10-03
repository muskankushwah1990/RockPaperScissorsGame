let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector(".msg")
let userScorePara = document.querySelector(".user-score")
let compScorePara = document.querySelector(".comp-score")

const drawGame = () => {
    console.log("game was draw")
    msg.innerText = "Game was draw! Play again."
    msg.style.backgroundColor = "yellow"
    msg.style.color = "black"
}

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx]
}


const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Won!"
        msg.style.backgroundColor = "green"
        msg.style.color = "white"
        console.log("you win")
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Loss!"
        msg.style.backgroundColor = "red"
         msg.style.color = "white"
        console.log("you lose")
    }
}


const playGame = (userChoice) => {
    console.log("user choice", userChoice)
    //generate computer choice
    let compChoice = genCompChoice();
    console.log("computer choice",compChoice )


    if(userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper"? false: true
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors"? false: true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin);
    }
}

console.log(choices)

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice)
        playGame(userChoice)
    })
})