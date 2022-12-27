const inputEl = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length]').dataset.length
inputEl.addEventListener('blur', onBlurInput);
console.log(dataLength)
function onBlurInput(event) {
    if(event.currentTarget.value.length === Number(dataLength)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.add('invalid');
        
}
}