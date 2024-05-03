
class Validation {
   constructor() {
       this.firstNameValidation = false;
       this.lastNameValidation = false;
       this.emailValidation = false;
       this.passwordValidation = false;
       this.confirmPasswordValidation = false;
       this.allClear = false;
       this.firstName = '';
       this.lastName = '';
       this.email = '';
       this.password = '';
       
   }
   setName(){
    let input = document.getElementById('nameInput');
    if(this.validateName('nameInput'))
        this.name = input.value;
   }
   setSurname(){
    let input = document.getElementById('surnameInput');
    if(this.validateEmail('surnameInput')){
        this.setSurname = input.value;}
   }
   setEmail(){
    let input = document.getElementById('emailInput');
    if(this.validateEmail())
        this.email = input.value;
   }
   setPassword(){
    let input = document.getElementById('confirmPasswordInput')
    if(this.validateConfirmPassword()&&(this.validatePassword()))
        this.password = input.value;
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
                   return true;
               } else {
                   this.firstNameValidation = false;
                   changeValidationFail(inputSelectionField);
                   return false;
               }
               break;
           case 'surnameInput':
               if (lengthNotZero(inputValue)) {
                   this.lastNameValidation = true;
                   changeValidationPass(inputSelectionField);
                   return true;
               } else {
                   this.lastNameValidation = false;
                   changeValidationFail(inputSelectionField);
                   return false;
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
            return true;
        }
        else {
            this.emailValidation = false;
            changeValidationFail(inputBox);
            return false;
        }

    }
    validatePassword() {
        let inputBox = 'createPasswordInput';
        let input = document.getElementById(inputBox);
        let inputValue = input.value;
        if (lengthNotZero(inputValue)) {
            changeValidationPass(inputBox);
            this.passwordValidation = true;
            return true;
        }
        else {
            changeValidationFail(inputBox);
            this.passwordValidation = false;
            return false;
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
                return true;
            }
        else{
            this.confirmPasswordValidation = false;
            changeValidationFail(inputBox);
            return false;
        }
    }
   
}
//Miscellaneous 
function lengthNotZero(str)
{
   if(str.length === 0);
    return false;
} 

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
function selectSetter(inputBox)
{
    switch(inputBox){
        case 'nameInput':
            check.setName();
            break;
        case 'surnameInput':
            check.setSurname();
            break;
        case 'emailInput':
            check.setEmail();
            break;
        case 'createPasswordInput':
            check.validatePassword();
            break;
        case 'confirmPasswordInput':
            check.setPassword();
            break;
    }
}
//DOM EVENT LISTENERS
var check = new Validation();
document.addEventListener("DOMContentLoaded",(event)=>{
    console.log('loaded');
});
let input = null;
for(let i =0;i<5;i++)
{
    switch(i){
        case 0:
             input = 'nameInput';
            break;
        case 1:
             input = 'surnameInput';
             break;
        case 2:
            input = 'emailInput';
            break;
        case 3:
            input = 'createPasswordInput';
            break;
        case 4:
            input = 'confirmPasswordInput';
            break;
    }
    document.getElementById(input).addEventListener('blur',selectSetter(input));
    console.log(input);
}
console.log(check.name);