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

