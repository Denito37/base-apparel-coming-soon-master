const button = document.getElementsByTagName("button");
const input = document.querySelector('.email');
const errors = document.querySelector(".error");
const errorMessage = document.querySelector(".message");

button.addEventListener("click", error);

function error(){
    if (!input.checkValidity() || input.value === ""){
        errorMessage.style.visibility = 'visible';
        errors.style.visibility = "visible";
    }
}