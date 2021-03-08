let playerScore = 0;
        let computerScore = 0;
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button =>{
        button.addEventListener('click', function(){
        playRound(button.id)
        });
    });

        function computerPlay() {
            switch(Math.floor(Math.random()*3)) { 
            case 0:
            return 'rock';
            break;
            case 1: 
            return 'paper';
            break;
            case 2: 
            return 'scissors';
            break;
        }
    }

        function gameStop() {
        buttons.forEach(e => {
        e.disabled = true
        });
    }

        function playRound(playerSelection) {
        let computerSelection = computerPlay()
        let result = ""

        if (playerSelection == computerSelection) {
            result = `<br>It's a tie. You both chose ${playerSelection}.
            <br>Player score: ${playerScore}
            <br>Computer score: ${computerScore}`;
    }

        else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                 (playerSelection == 'scissors' && computerSelection == 'paper') ||
                 (playerSelection == 'paper' && computerSelection == 'rock')) {
        
                    playerScore++;
                    result = `<br>You win! ${playerSelection} beats ${computerSelection}.
                    <br>Player score: ${playerScore}
                    <br>Computer score: ${computerScore}`;

                if (playerScore >= 5 && computerScore < 5) {
                result = `<h2>Game over! You won!</h2>
                <br>Player score: ${playerScore}
                <br>Computer score: ${computerScore}`;
                gameStop();
        }
    }
        else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
                 (computerSelection === 'paper' && playerSelection === 'rock') ||
                 (computerSelection === 'scissors' && playerSelection === 'paper')) {
            
                    computerScore++;
                    result = `<br>You lose! ${computerSelection} beats ${playerSelection}.
                    <br>Player score: ${playerScore}
                    <br>Computer score: ${computerScore}`;

                if (computerScore >= 5 && playerScore < 5) {
                result = `<h2>Game over! Computer won!</h2>
                <br>Player score: ${playerScore}
                <br>Computer score: ${computerScore}`;
                gameStop();
        }
    }
        document.getElementById('result').innerHTML = result
        return;
}