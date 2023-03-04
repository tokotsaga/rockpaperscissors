function getComputerChoice () {
  let choice = ["Rock", "Paper", "Scissors"];
  let computerSelection =  choice[Math.floor(Math.random() * choice.length)];
  return computerSelection;}
  
// prompt for player
  let playerSelection = (prompt("Please enter your choice here"));
  

  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") { 
      return "You lose. Paper beats Rock";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "You win. Rock beats Scissors"
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You lose. Scissors beat Paper"
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "You win. Paper beats Rock"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "You lose. Rock beats Scissors"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "You win. Scissors beat Paper"
    }
    else if (playerSelection == "Rock" && computerSelection  =="Rock") {
      return "Tie"
    }
    else if (playerSelection == "Paper" && computerSelection  =="Paper") {
      return "Tie"
    }
    else if (playerSelection == "Scissors" && computerSelection  =="Scissors") {
      return "Tie"
    }
  }


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
alert ("Computer chooses" + " " +computerSelection)
alert (playRound(playerSelection,computerSelection))