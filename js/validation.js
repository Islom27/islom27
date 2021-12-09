let email = document.getElementById('email');
let email_text = document.getElementById('email_text');

//email validation
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validation(){
    if (email.value.match(pattern)){
        email_text.innerText = "Valid";
    }else{
        email_text.innerText = "Invalid";
    }
};