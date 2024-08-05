let choices = document.querySelectorAll(".choice");
let choiceArr = ["rock", "paper", "scissor"];
let gameMsg = document.getElementById("msg");
let userScoreboard = document.querySelector("#user-score");
let compScoreboard = document.querySelector("#comp-score");
let userWin = true;
let userScore = 0;
let compScore = 0;
let resetBtn = document.querySelector("#reset-btn");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreboard.innerText = userScore;
    compScoreboard.innerText = compScore;
    gameMsg.style.backgroundColor = "#13505B";
    gameMsg.innerText = "Play Your Move";
})

const scoreUpdate = (userWin, user_choice, comp_choice) => {
    if(userWin){
        userScore++;
        userScoreboard.innerText = userScore;
        gameMsg.style.backgroundColor = "green";
        gameMsg.innerText = `Your ${user_choice} beats ${comp_choice}`;
    }
    else{
        compScore++;
        compScoreboard.innerText = compScore;
        gameMsg.style.backgroundColor = "red";
        gameMsg.innerText = `Your ${user_choice} loses to ${comp_choice}`;
    }
};

const calcWinner = (user_choice, comp_choice) => {
    if(user_choice === comp_choice){
        gameMsg.style.backgroundColor = "#13505B";
        gameMsg.innerText = "It's a DRAW! Try Again."
    }
    else{
        if(user_choice === "rock"){
            userWin = comp_choice === "scissor" ? true : false;
        }
        else if(user_choice === "paper"){
            userWin = comp_choice === "rock" ? true : false;
        }
        else{
            userWin = comp_choice === "paper" ? true : false;
        }
        scoreUpdate(userWin, user_choice, comp_choice);
    }
};

const compSelection = () => {
    randID = Math.floor(Math.random() * 3);
    return choiceArr[randID];
}

const playGame = (choice) => {
    let user_choice = choice;
    let comp_choice = compSelection();
    calcWinner(user_choice, comp_choice);
}