const button = document.getElementsByTagName("button");
const input = document.querySelector("input");
const errors = document.querySelector(".error");
const errorMessage = document.querySelector(".message");

button.addEventListener("click", (e) => {
    if (!input.checkValidity() ||input.value === ""){
        error();
        e.preventDefault();
    }
});

function error(){
    if(input.validity.valueMissing){
        errorMessage.textContent = "Enter an email";
    }
    else if (input.validity.typeMismatch){
        errorMessage.style.visibility = 'visible';
        errors.style.visibility = "visible"
    }
}