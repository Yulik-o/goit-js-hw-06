const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    }
    if (email && password === '') {
        alert('All fields must be completed');
     } else {
console.log(formData);
event.currentTarget.reset();
}
    
    // event.currentTarget.elements.subscribtion.value
    // const formData = new formData(event.currentTarget);
    // formData.forEach((value, name) => {

    // })
}
