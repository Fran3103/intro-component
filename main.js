const  firstName = document.querySelector('.section-2__form__first-name');
const  lastName = document.querySelector('.section-2__form__last-name');
const  email = document.querySelector('.section-2__form__email');
const  password = document.querySelector('.section-2__form__pass');
const  btn = document.querySelector('.section-2__form__btn');

const nameError = document.querySelector('.firsf-name_error')
const lastError = document.querySelector('.last-name_error')
const emailError = document.querySelector('.email_error')
const passError = document.querySelector('.pass_error')

const expresion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

btn.addEventListener('click', (event) =>{
    
    valido(firstName.value, firstName, nameError);
    valido(lastName.value, lastName, lastError);
    validoEmail(email.value, email, emailError);
    valido(password.value, password , passError);

})

function validoEmail(valueInput, divInput, divnameError){
    if(expresion.test(valueInput)== true  ) 
    {
        
        hideError(divInput, divnameError);
    } 
    else{
        error(divInput, divnameError);
        
    }
}

function valido (valueInput, divInput, divnameError ){
    if(valueInput.length == 0){
        error(divInput, divnameError, );
        
    }else{
        hideError(divInput, divnameError);
    }
}

function error(divInput, divnameError){
    divInput.style.border = '1px solid red';
    divInput.style.backgroundImage = 'url("/images/icon-error.svg")';
    divnameError.style.display = 'flex';

}

function hideError(divInput, divnameError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divInput.style.backgroundImage = '';
    divnameError.style.display = 'none';
}


