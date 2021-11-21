// Displaying slider number
// Syncing value of slider and arrow buttons 

const slider = document.querySelector('#slider');
const minus1 = document.querySelector('#minus1');
const plus1 = document.querySelector('#plus1');
const inputDisplay = document.querySelector('#inputDisplay');


slider.addEventListener('input', function(){
     inputDisplay.textContent = slider.value;
});
minus1.addEventListener('click', function(){
    slider.value--;
    inputDisplay.textContent = slider.value;
});
plus1.addEventListener('click', function(){
    slider.value++;
    inputDisplay.textContent = slider.value;
});



// generating random number

let randomNumber = Math.floor(Math.random()*100) + 1;



// number input

const form = document.querySelector('#form');

form.addEventListener('submit', function(){
    let input = Number(slider.value); // passing through Number constructor to make sure value is a number. type String --> Number here
    checkCorrect(input);
});




// Selecting DOM elements for displaying respective result

const result = document.querySelector('#result');
const lowOrHi = document.querySelector('#lowOrHi');
const prevGuesses = document.querySelector('#prevGuesses');
const livesDOM = document.querySelector('#lives span');
const modalBg = document.querySelector('#modal-bg');

 
let lives =10;



// checking if guess correct

function checkCorrect(input){
    if(input === randomNumber){
        result.textContent = 'You Win!';
        setGameOver();
    }
    else{
        if(lives == 1)
            setGameOver();
        else{
            wrongGuess(input);
        }
    }
}

function setGameOver(){
    slider.disabled = true;
    minus1.disabled = true;
    plus1.disabled = true;
  
    livesDOM.textContent = 'Correct number was '+randomNumber;

    // create a modal for reset button
    modalBg.classList.add('modal-on');
}

function resetGame(){
    modalBg.classList.remove('modal-on');
    lives = 10;
    slider.value = 50;
    inputDisplay.textContent = 50;
    slider.disabled = false;
    minus1.disabled = false;
    plus1.disabled = false;

}

function wrongGuess(input){
    lives--;
    livesDOM.textContent = lives;
    if(input>randomNumber)
       lowOrHi.textContent = 'Go Low';
    else
       lowOrHi.textContent = 'Go High';
    prevGuesses.textContent = prevGuesses.textContent + ' ' + input;


}

//resetting game

document.querySelector('#reset').addEventListener('click', resetGame);
