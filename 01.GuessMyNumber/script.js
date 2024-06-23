'use strict';


let correctNum = Math.floor(Math.random() * 30) + 1;
console.log("Số ngẫu nhiên1", correctNum);
let score = 20;
const initualScore = 20;
let hightscore = 0
const displayMessage = function( message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    console.log("Số ngẫu nhiên2 ", correctNum);
    const guessNumber = Number(document.querySelector('.guess').value) ;
    console.log(guessNumber);

    if(!guessNumber){
        document.querySelector('.number').textContent = "?";
        displayMessage("❌ No Number");

    }
    else if(guessNumber !== correctNum){
        displayMessage(document.querySelector('.message').textContent = guessNumber >correctNum ?  "❌ Too high" : "❌ Too low")
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;        
        }else{
            displayMessage("💥 You lost the game")
            document.querySelector('.score').textContent = 0;
        }
    }
    else{
        displayMessage("🎉 Correct Number")
        if(score >= hightscore){
            hightscore = score;
            score = initualScore;
        }
        document.querySelector('.highscore').textContent = hightscore;
        document.querySelector('.number').textContent = correctNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
    }
})

document.querySelector('.again').addEventListener('click', () =>{
    let correctNum2 = Math.floor(Math.random() * 30) + 1;
    correctNum = correctNum2 
    document.querySelector('.score').textContent = initualScore;
    document.querySelector('.guess').value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    displayMessage("Start guessing...")

})
console.log(correctNum);