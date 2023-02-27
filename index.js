const calc = document.querySelector('.calculator');
const input = document.getElementsByClassName('.input');


const allowKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

input.addEventListener('keydown', function(ev){
    ev.preventDefault(); 
    if(allowKeys.includes(ev.key)){ 
        input.value += ev.key; 
        return;
    }
})
