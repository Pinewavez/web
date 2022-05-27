const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2")
const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");

isError = false;

function checkInputs(){
    // get the values from the inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (nameValue === ''){
        //show error
        setErrorFor(name, "Name cannot be blank");
    } else {
        setSuccessFor(name);
    }

    if (emailValue === ''){
        //show error
        setErrorFor(email, 'Email cannot be blank');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        setErrorFor(password, 'Please choose a password');
    } else if(passwordValue.length < 6 || passwordValue > 20){
        setErrorFor(password, 'Password must be between 6 and 20 characters')
    } else {
        setSuccessFor(password);
    }

    if (password2Value === ''){
        setErrorFor(password2, 'Please confirm your password');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords do not match')
    } else {
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message){
    const formRow = input.parentElement;
    const span = formRow.querySelector('span');
    isError = true;

    // add error message inside the span
    span.innerText = message;

    // then add error class
    formRow.className = 'row error';
}

function setSuccessFor(input){
    const formRow = input.parentElement;
    formRow.className = 'row success';
    isError = false;
}

form.addEventListener('submit', (e) => {
    checkInputs();

    if(isError){
        e.preventDefault();
    }
    
})