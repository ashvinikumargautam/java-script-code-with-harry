//GUESS THE NUMBER
//generate random numbers
//keep asking the numbers untile the guess is correct
//increment the chances variable
//eventually after the game is over,display the (100-chances)

// Generate a random integer between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let userinput
let guess =0
while(userinput!=randomNumber){
    userinput = prompt("guess the numebrs")
    userinput = Number.parseInt(userinput)
    if(userinput==0){ 
        break
    }
    if(userinput<randomNumber){
        console.log("your number is less than random number")
        guess++
    }else{
       console.log("your number is greater than random number")
        guess++
    }
} 
console.log("random number is : "+randomNumber);
console.log("you guess the number : "+guess+" times")
console.log("your score is : "+(100-guess))
