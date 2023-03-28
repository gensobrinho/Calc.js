import { calculate } from "../index.js";
const resultInput = document.getElementById('result');
const input = document.getElementById('input');
const keyButton = document.getElementsByClassName('charKey');

function clear(){
    document.getElementById('clear').addEventListener('click',function(){
        input.value = "";
        input.focus();
    })
}

function buttonsCalculator(){
    document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
        charKeyBtn.addEventListener('click', function(){
            const value = charKeyBtn.dataset.value;
            input.value += value;
        })
    })
}

function copyResult(){
    document.getElementById("copyToClipboard").addEventListener('click', function(ev){
        const copyBtn = ev.currentTarget;
        if(copyBtn.innerText === "Copy"){
            copyBtn.innerText = "Copied!";
            copyBtn.classList.add('sucess');
            navigator.clipboard.writeText(resultInput.value);
        }else{
            copyBtn.innerText = "Copy";
            copyBtn.classList.remove('sucess');
        }
    })
}

export { clear, buttonsCalculator, copyResult , resultInput, input}