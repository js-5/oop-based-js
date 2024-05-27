
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

    setName(input) {
        if (this.validateName(input.value)) {
            this.firstname = input.value;
            changeValidationPass(input.getAttribute('id'));
        } else {
            changeValidationFail(input.getAttribute('id'));
        }
    }

    setSurname(input) {
        if (this.validateSurname(input.value)) {
            this.lastName = input.value;
            this.lastNameValidation = true;
            changeValidationPass(input.getAttribute('id'));
        } else {
            this.lastNameValidation = false;
            changeValidationFail(input.getAttribute('id'));
        }
    }

    setEmail() {
        let input = document.getElementById('emailInput');
        if (this.validateEmail())
            this.email = input.value;
    }

    setPassword() {
        let input = document.getElementById('confirmPasswordInput')
        if (this.validateConfirmPassword() && (this.validatePassword()))
            this.password = input.value;
    }

    validateName(inputValue) {
        if (lengthNotZero(inputValue)) {
            this.firstNameValidation = true;
            return true;
        } else {
            this.firstNameValidation = false;
            return false;
        }
    }

    validateSurname(inputValue) {

        if (lengthNotZero(inputValue)) {
            console.log('surname pass');
            return true;
        } else {
            console.log('surname Fail');
            return false;
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

    validateConfirmPassword() {
        let inputBox = 'confirmPasswordInput';
        let input = document.getElementById(inputBox);
        let inputValue = input.value;
        let passwordValue = document.getElementById('createPasswordInput').value;
        if (inputValue === passwordValue) {
            this.confirmPasswordValidation = true;
            changeValidationPass(inputBox);
            return true;
        }
        else {
            this.confirmPasswordValidation = false;
            changeValidationFail(inputBox);
            return false;
        }
    }

}
//Miscellaneous 
function lengthNotZero(str) {
    if (str.length == 0)
        return false;
    else return true;
}

function changeValidationFail(inputBox) {
    input = document.getElementById(inputBox);
    input.classList.add('invalid');
    input.classList.remove('valid');
}
function changeValidationPass(inputBox) {
    input = document.getElementById(inputBox);
    input.classList.add('valid');
    input.classList.remove('invalid');
}

//DOM EVENT LISTENERS
var check = new Validation();
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('loaded');
});
document.getElementById('nameInput').addEventListener('blur', (event) => (check.setName(event.target)));
document.getElementById('surnameInput').addEventListener('blur', (event) => check.setSurname(event.target));
document.getElementById('emailInput').addEventListener('blur', (event) => (check.setEmail()));
document.getElementById('createPasswordInput').addEventListener('blur', (event) => (check.validatePassword()));
document.getElementById('confirmPasswordInput').addEventListener('blur', (event) => (check.setPassword()));
document.getElementById('planSelectOne').addEventListener('change', (event) => checkboxChecked('planSelectOne'));
document.getElementById('planSelectTwo').addEventListener('change', (event) => checkboxChecked('planSelectTwo'));
document.getElementById('planSelectThree').addEventListener('change', (event) => checkboxChecked('planSelectThree'));

function checkboxChecked(checkedbox) {
    console.log(checkedbox);
    if (checkedbox == 'planSelectOne') {
        document.getElementById('planSelectTwo').checked = false;
        document.getElementById('planSelectThree').checked = false;
        document.getElementById('plan-type').outerHTML = "<p id = 'plan-type' class = 'plan-type'> Standard Plan <br> (Mobile)</p>";
        document.getElementById('plan-cost').outerHTML = "<p id = 'plan-cost' class = 'plan-cost'> R69.00 </p>";
        document.getElementById('total-cost').innerHTML = "R69.00"
    }
    else if (checkedbox == 'planSelectTwo') {
        document.getElementById('planSelectOne').checked = false;
        document.getElementById('planSelectThree').checked = false;
        document.getElementById('plan-type').outerHTML = "<p id = 'plan-type' class = 'plan-type'> Premium Plan <br> (3-Devices)</p>";
        document.getElementById('plan-cost').outerHTML = "<p id = 'plan-cost' class = 'plan-cost'> R109.00 </p>";
        document.getElementById('total-cost').innerHTML = "R109.00"
    }
    else if (checkedbox == 'planSelectThree') {
        document.getElementById('planSelectOne').checked = false;
        document.getElementById('planSelectTwo').checked = false;
        document.getElementById('plan-type').outerHTML = "<p id = 'plan-type' class = 'plan-type'> Standard Plan <br> (Walled-Garden Apple-Plan)</p>";
        document.getElementById('plan-cost').outerHTML = "<p id = 'plan-cost' class = 'plan-cost'> R690.00 </p>";
        document.getElementById('total-cost').innerHTML = "R690.00"
    }

}