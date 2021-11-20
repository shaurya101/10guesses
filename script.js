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
const lowOrHigh = document.querySelector('#lowOrHigh');
const prevGuesses = document.querySelector('#prevGuesses');



// checking if guess correct

function checkCorrect(input){
    if(input === randomNumber){
        result.textContent = 'You Win!';
        setGameOver();
    }
    else{


    }
}

function setGameOver(){
    slider.disabled = true;
    minus1.disabled = true;
    plus1.disabled = true;
    // create a modal for reset button
}

function resetGame(){

}
