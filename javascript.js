function getComputerChoice () {
  let choice = ["Rock", "Paper", "Scissors"];
  let computerSelection =  choice[Math.floor(Math.random() * choice.length)];
  return computerSelection;}
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") { 
      return "You lose. Paper beats Rock";
    }
  }
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));