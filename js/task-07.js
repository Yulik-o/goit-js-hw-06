const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    const rangeValue = inputEl.value;
    textEl.style.fontSize = rangeValue + 'px';

}