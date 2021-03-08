"console-game"

1. Start a new Git repo for your project.
2. Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.
3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    --Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
5. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 
6. Use prompt() to get input from the user.

"full-game"

1. Go back to your “Rock Paper Scissors” game from a previous lesson and give it a simple UI so that the player can play the game by clicking on buttons rather than          typing their answer in a prompt.
2. Copy your original code into a new file so you don’t lose it.
3. For now, remove the logic that plays exactly five rounds.
4. Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
5. Add a div for displaying results and change all of your console.logs into DOM methods.
6. Display the running score, and announce a winner of the game once one player reaches 5 points.
