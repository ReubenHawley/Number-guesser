/* Rules of the Game
-choose a guess between the numbers min and max
-limited amount of guesses
-notify the player of the remaining guesses
-notify the player if they win or lose
-let player play again
*/

//game values

let min = 1,
    max = 10,
    winning_number = 2
    guesses_left = 3;
    
//UI elements
const   UIgame = document.querySelector('#game'),
        min_num = document.querySelector('.min-num'),
        max_num = document.querySelector('.max-num'),
        guess_btn = document.querySelector('#guess-btn'),
        guess_input = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

//Assing min and max
min_num.textContent = min;
max_num.textContent = max;


//Listen for guess
guess_btn.addEventListener('click', function(){
    let guess = parseInt(guess_input.value);
    //validate whether number is valid
    if (isNaN(guess) || guess < min || guess >max){
        setMessage = (`Please enter a value between ${min} and ${max}`);
    }
    if (guess === winning_number){
    //diable input
    guess_input.disabled = true;
    
    //change border color
    guess_input.style.borderColor = "green";
    //set message
    setMessage(`${winning_number} is correct, YOU WIN!!!!`, "green");
    
    }


});

function setMessage(msg,color){
    message.style.color  = color
    message.textContent = msg;
}
