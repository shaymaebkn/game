
var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")
var msg4 = document.getElementsByClassName("message4")
var rejouerBtn = document.getElementsByClassName("button")
var resetGame = document.getElementsByClassName("setGameOver")


var answer = Math.floor(Math.random()*100) + 1;
var  no_of_guesses= 10;
var guessed_it = 0;
var guesses_nums = [];

function play(){
    var user_guess = document.getElementById("guess").
    value;
    if (user_guess < 1 || user_guess > 100 && no_of_guesses<=10) {
        alert("please enter a number between 1 and 100");
    }
    else { 
        guesses_nums.push(user_guess);
        no_of_guesses-= 1;
        guessed_it+=1;

        if(user_guess < answer && no_of_guesses>=0){   
            msg1.textContent = "your guess is  low.";
            msg2.textContent = "NO. of guesses : " + no_of_guesses;
            msg3.textContent = "Guessed numbers are : " + guessed_nums;
         }
         
         
         else if(user_guess > answer && no_of_guesses>=0 ){
             msg1.textContent = "your guess is high.";
             msg2.textContent = "No. of guesses : " + no_of_guesses;
             msg3.textContent = "Guesses numbers are : " + guesses_nums;
             
         }

        if(user_guess == answer  && no_of_guesses <= 7){
             msg1.textContent = "yuupiiieeeee you win ! goood joob";
             msg2.textContent = "the number was : " + answer;
             msg3.textContent = "you guessed it in " + guessed_it + "guesses";


              
            
        } 

         if(user_guess == answer )
               {
                   if(  no_of_guesses >= 8){
                        msg1.textContent = "wooow you are genuis ! ";
                        msg2.textContent = "the number was : " + answer;
                        msg3.textContent = "you guessed it in " + guessed_it + "guesses";

           
                }
                   }
         
            if (no_of_guesses == 0)
                {
                    alert(" you lost!")
                
                } 

        } 
        } 
      
        
           

       


 
