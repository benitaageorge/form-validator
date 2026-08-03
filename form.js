const form = document.querySelector('form');
const fname = document.getElementById('firstname');
const fnameerror = document.getElementById('firstname_error');
const lname = document.getElementById('lastname');
const lnameerror = document.getElementById('lastname_error');
const age = document.getElementById('age');
const ageerror = document.getElementById('age_error');
const dob = document.getElementById('date');
const doberror = document.getElementById('dob_error');
const email = document.getElementById('email');
const emailerror = document.getElementById('email_error');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    //checking first name
    const numbers = '0123456789';
    let string = fname.value.trim();
    let i = 0;
    let hasNum = false;
    console.log("before making the error text empty");
    fnameerror.textContent = "";
    for (i = 0; i < string.length; i++) {
        if (numbers.includes(string[i]))
            hasNum = true;
    }
    console.log("After the loop");
    if (fname.value.trim() === '') {
        fnameerror.textContent = "This field has to be filled !";
        console.log("After checking empty field");
    }
    else if (hasNum) {
        fnameerror.textContent = "This field cannot contain a number !!";
        console.log("After checking numbers");
    }
    else {
        fnameerror.textContent = "";
        console.log("after intitializing to empty");
    }

    lnameerror.textContent = "";

});