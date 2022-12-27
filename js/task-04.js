let counterValue = 0;
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

function onIncButtonClick(event) {
    counterValue += 1;
    counterEl.textContent = counterValue;
};
function onDecButtonClick(event) {
    counterValue -= 1;
    counterEl.textContent = counterValue;
};
buttonInc.addEventListener('click', onIncButtonClick) 

buttonDec.addEventListener('click', onDecButtonClick);