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
    let string2 = lname.value.trim();
    let s2hasNum = false;
    i = 0;
    for (i = 0; i < string2.length; i++) {
        if (numbers.includes(string2[i]))
            s2hasNum = true;
    }
    if (string2 === "") {
        lnameerror.textContent = "This field has to be filled !";

    }
    else if (s2hasNum === true) {
        lnameerror.textContent = "This field cannot contain a number !";
    }
    else {
        lnameerror.textContent = "";
    }

    //now for age and dob
    //age has to be a whole no. between 0 and 80
    ageerror.textContent = "";
    if (age.value === "")
        ageerror.textContent = "This field cannot be left empty !";
    else if (age.value < 0)
        ageerror.textContent = "This is not a valid number !";
    else if (age.value < 15 || age.value > 80)
        ageerror.textContent = "You are not eligible to register !";
    else
        ageerror.textContent = "";

    doberror.textContent = "";
    const birthdate = new Date(dob.value);
    const today = new Date();
    if (birthdate === "") {
        doberror.textContent = "This field cannot be left empty !";
    }
    else if (birthdate > today) {
        doberror.textContent = "This date is in the future !! That's not possible...";
    }
    else {
        const age = birthdate - today;
        if (age < 15 || age > 80)
            doberror.textContent = "You are not eligible to register :(";
    }


});