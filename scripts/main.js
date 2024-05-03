
class Validation {
   constructor() {
       this.firstName = false;
       this.lastName = false;
       this.emailValidation = false;
       this.passwordValidation = false;
       this.confirmPasswordValidation = false;
       this.allClear = false;
   }

   validateName(inputSelectionField)
   {
       let input = document.getElementById(inputSelectionField);
       let inputValue = input.value;
       console.log(inputValue);
       switch (inputSelectionField) {
           case 'nameInput':
               if (lengthNotZero(inputValue)) {
                   this.firstNameValidation = true;
                   changeValidationPass(inputSelectionField);
               } else {
                   this.firstNameValidation = false;
                   changeValidationFail(inputSelectionField);
               }
               break;
           case 'surnameInput':
               if (lengthNotZero(inputValue)) {
                   this.lastNameValidation = true;
                   changeValidationPass(inputSelectionField);
               } else {
                   this.lastNameValidation = false;
                   changeValidationFail(inputSelectionField);
               }
               break;
       }
   }
   
    validateEmail() {
        let inputBox = 'emailInput';
        let input = document.getElementById(inputBox);
        let inputValue = input.value;
        const emailRegex =
            new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        let isValidEmail = emailRegex.test(inputValue);
        console.log(isValidEmail)
        if (isValidEmail) {
            this.emailValidation = true;
            changeValidationPass(inputBox);
        }
        else {
            this.emailValidation = false;
            changeValidationFail(inputBox);
        }

    }
    validatePassword() {
        let inputBox = 'createPasswordInput';
        let input = document.getElementById(inputBox);
        let inputValue = input.value;
        if (lengthNotZero(inputValue)) {
            changeValidationPass(inputBox);
            this.passwordValidation = true;
        }
        else {
            changeValidationFail(inputBox);
            this.passwordValidation = false;
        }
    }
    validateConfirmPassword()
    {
        let inputBox = 'confirmPasswordInput';
        let input = document.getElementById(inputBox);
        let inputValue = input.value;
        let passwordValue = document.getElementById('createPasswordInput').value;
        if(inputValue === passwordValue)
            {
                this.confirmPasswordValidation = true;
                changeValidationPass(inputBox);
            }
        else{
            this.confirmPasswordValidation = false;
            changeValidationFail(inputBox);
        }
    }
   
}
function lengthNotZero(str)
{
   if(str.length === 0);
    return false;
} 
var check = new Validation();
document.addEventListener("DOMContentLoaded",(event)=>{
    console.log('loaded');
    document.getElementById('surnameInput').addEventListener("onblur",check.validateName('surnameInput'));
});
function changeValidationFail(inputBox)
{
    input = document.getElementById(inputBox);
    input.classList.add('invalid');
    input.classList.remove('valid');  
}
function changeValidationPass(inputBox)
{
    input = document.getElementById(inputBox);
    input.classList.add('valid');
    input.classList.remove('invalid');  
}
    

