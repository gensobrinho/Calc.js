import {clear, copyResult, buttonsCalculator, resultInput, input} from './modules/buttons.js';
import {changerTheme} from './modules/theme.js';
import {keyboardOn} from './modules/keys.js';



function calculate() {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');
}

clear();
buttonsCalculator();
copyResult();
changerTheme();
keyboardOn();


export { calculate }


