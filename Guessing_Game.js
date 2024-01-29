const max=prompt("Enter Max Range of Number");
const MyGuess=Math.floor(Math.random() * max)+1;
let YourGuess=prompt("ENTER YOUR GUESS");
while(true){
    if(YourGuess=="quit")
    {
        console.log("You quit the game");
        break;
    }
    if(MyGuess==YourGuess){
        console.log("You Guess it right",YourGuess);
        break;
    }
    else if(YourGuess>MyGuess){
            YourGuess=prompt("Your guessing too high,Enter Your Guess again");
        }
    else{
              YourGuess=prompt("Your guess is too small,Enter your Guess again");
        }
    
}