rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissors = document.getElementById('scissors');
result = document.getElementById('result');
playerScore = document.getElementById('pScore');
computerScore = document.getElementById('cScore');
playerChoice = document.getElementById('playerChoice');
computerChoice = document.getElementById('computerChoice');
buttonContainer = document.getElementById('buttonContainer');
playerScoreValue = 0;
computerScoreValue = 0;
playerChoiceValue = '';
computerChoiceValue = '';
choices = ['rock', 'paper', 'scissors'];
playerScore.textContent = `Player Score: ${playerScoreValue}`;
computerScore.textContent = `Computer Score: ${computerScoreValue}`;
buttonContainer.addEventListener('click', function(btn) {
    if(btn.target.id === 'rock' || btn.target.id === 'paper' || btn.target.id === 'scissors') {
        switch (btn.target.id) {
            case 'rock':
                playerChoiceValue = 'rock';
                break;
            case 'paper':
                playerChoiceValue = 'paper';
                break;
            case 'scissors':
                playerChoiceValue = 'scissors';
                break;
            default:
                break;
        }
        computerChoiceValue = choices[Math.floor(Math.random() * choices.length)];
        playerChoice.textContent = playerChoiceValue;
        computerChoice.textContent = computerChoiceValue;
        if(playerChoiceValue === computerChoiceValue) {
            result.textContent = "IT'S A TIE";
        } else if(playerChoiceValue === 'rock' && computerChoiceValue === 'scissors') {
            result.style.color = 'chartreuse';
            result.textContent = 'YOU WIN';
            playerScoreValue++;
        } else if(playerChoiceValue === 'rock' && computerChoiceValue === 'paper') {
            result.textContent = 'YOU LOSE';
            result.style.color = 'hsl(0, 91%, 65%)';
            computerScoreValue++;
        } else if(playerChoiceValue === 'paper' && computerChoiceValue === 'rock') {
            result.textContent = 'YOU WIN';
            result.style.color = 'chartreuse';
            playerScoreValue++;
        } else if(playerChoiceValue === 'paper' && computerChoiceValue === 'scissors') {
            result.textContent = 'YOU LOSE';
            result.style.color = 'hsl(0, 91%, 65%)';
            computerScoreValue++;
        } else if(playerChoiceValue === 'scissors' && computerChoiceValue === 'rock') {
            result.textContent = 'YOU LOSE';
            result.style.color = 'hsl(0, 91%, 65%)';
            computerScoreValue++;
        } else if(playerChoiceValue === 'scissors' && computerChoiceValue === 'paper') {
            result.textContent = 'YOU WIN';
            result.style.color = 'chartreuse';
            playerScoreValue++;
        }
        playerScore.textContent = `Player Score: ${playerScoreValue}`;
        computerScore.textContent = `Computer Score: ${computerScoreValue}`;
    }
});

