function game() {
  // Function to generate computer choice
  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  // Prompt for player choice and convert to lowercase
  const playerChoice = prompt("Please enter your choice (Rock, Paper, or Scissors)").toLowerCase();
  
  // Function to determine the winner of a single round
  function playRound(playerChoice, computerChoice) {
    // Handle all possible combinations of player and computer choices
    if (playerChoice === "rock") {
      if (computerChoice === "Paper") {
        return "You lose. Paper beats Rock.";
      } else if (computerChoice === "Scissors") {
        return "You win. Rock beats Scissors.";
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "Rock") {
        return "You win. Paper beats Rock.";
      } else if (computerChoice === "Scissors") {
        return "You lose. Scissors beat Paper.";
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "Rock") {
        return "You lose. Rock beats Scissors.";
      } else if (computerChoice === "Paper") {
        return "You win. Scissors beat Paper.";
      }
    }
    
    // If we haven't returned a result yet, it must be a tie
    return "Tie.";
  }

  // Play a single round
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  
  // Display the result to the user
  alert(`You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`);
}

// Play 5 rounds of the game
for (let i = 0; i < 5; i++) {
  game();
}
