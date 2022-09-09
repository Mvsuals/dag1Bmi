var fnameError = document.getElementById('fname-error');
var lnameError = document.getElementById('lname-error');
var emailError = document.getElementById('email-error');
var emailGood = document.getElementById('email-good');

let nameError = document.getElementById('mes-error');


function checkName(){
    var name = document.getElementById('fname').value;

    if(name.lenght == 0){
        fnameError.innerHTML = 'Name is required';
        return false;
    }
   /* if (!name.match(/^[A-Za_z]*\s{1}[A-Za-z]*&/)){
        fnameError.innerHTML = 'Name is required';
    }
    */
   fnameError.innerHTML = '<i class="fas fa-check-circle"></i>'
   return true;
}

function checkLname(){
    var name = document.getElementById('lname').value;

    if(name.lenght == 0){
        lnameError.innerHTML = 'Name is required';
        return false;
    }
   /* if (!name.match(/^[A-Za_z]*\s{1}[A-Za-z]*&/)){
        fnameError.innerHTML = 'Name is required';
    }
    */
   lnameError.innerHTML = '<i class="fas fa-check-circle"></i>'
   return false;
}

function checkEmail(){
    var email = document.getElementById('femail').value;

    if(email.lenght === "" || email.lenght == null){
        emailError.innerHTML = 'E-mail is required'
        return true;
    }


if(!email.match(/^[A-Za-z\._\-[0-9]*[@](cphbusiness)*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email needs to be cphbusiness'
        return false;
    }
 
 
    emailGood.innerHTML = '<i class="fas fa-check-circle"></i>';
    emailError.innerHTML = ''
   return true;
}