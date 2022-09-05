
const form = document.getElementById("form");

const messages = ["First Name cannot be empty", "Last Name cannot be empty", "Email cannot be empty", "Looks like this is not an email", "Password cannot be empty"]

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    const email = form["email"].value;
    const password = form["password"].value;

    if(firstName === ""){
       error("firstName", "First Name cannot be empty");
    }
    else{
        errorDelete("firstName");
    }

    if (lastName === "") {
        error("lastName", "Last Name cannot be empty");
    }
    else{
        errorDelete("lastName");
    }

    if (email === "") {
        error("email", "Email cannot be empty");
    }
    else if(!isValid(email)) {
        error("email", "Looks like this is not an email");
    }
    else{
        errorDelete("email");
    }

    if (password === "") {
        error("password", "Password cannot be empty")
    }
    else{
        errorDelete("password");
    }
})

function error(field, message) {
    const formControl = form[field].parentNode;
    const small = formControl.querySelector("small");
    const span = formControl.querySelector("span");
    formControl.classList.add("error");
    small.innerText = message;
    small.style.opacity = 1;
    span.style.opacity = 1;
}

function errorDelete(field) {
    const formControl = form[field].parentNode;
    const small = formControl.querySelector("small");
    const span = formControl.querySelector("span");
    formControl.classList.remove("error");
    small.innerText = "";
    small.style.opacity = 0;
    span.style.opacity = 0;
}

function isValid(email){
    var re = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+([A-Za-z0-9]{2,4}|museum)$/;
    return re.test(String(email).toLowerCase());
}