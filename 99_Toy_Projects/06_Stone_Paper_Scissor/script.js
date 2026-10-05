const choices = ["stone", "paper", "scissor"]
const compChoice = choices[Math.round(Math.random() * 2)]
// console.log(compChoice)
let userChoice = null;
buttons = document.querySelectorAll(".choice.option")

const beatsComputer = {
    stone: "scissor",
    paper: "stone",
    scissor: "paper"
};

buttons.forEach(function(currEle) {
    currEle.addEventListener('click', function(e) {
        userChoice = e.target.id
        console.log(userChoice)
        document.querySelector(".userChoice").innerHTML = `You chose ${userChoice}`
        document.querySelector('.results').innerHTML = ``
    })
});

document.querySelector('.play').addEventListener('click', function(e) {
    if(userChoice === null) {
        document.querySelector('.results').innerHTML = `Please choose your object`
        return;
    }
    if(beatsComputer[userChoice] === compChoice) {
        document.querySelector('.results').innerHTML = `You Won, the computer chose ${compChoice}`
    } else if (userChoice === compChoice) {
        document.querySelector('.results').innerHTML = `Its a draw, the computer also chose ${compChoice}`
    } else {
        document.querySelector('.results').innerHTML = `You Lost, the computer chose ${compChoice}`
    }
})


