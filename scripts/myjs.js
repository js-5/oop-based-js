 export class Validation {
    constructor() {
        this.firstName = false;
        this.lastName = false;
        this.email = false;
        this.password = false;
        this.confirmPassword = false;
        this.allClear = false;
    }

    validateName(inputSelectionField)
    {
        let input = document.getElementById(inputSelectionField);
        let inputValue = input.value;
        console.log(inputValue);
        switch(inputSelectionField){
        case 'nameInput':
            if(lengthNotZero(inputValue)){
                this.firstName = true;
                input.classList.remove('invalid');
                input.classList.add('valid');
            }else
                input.classList.add('invalid');
            break;
        case 'surnameInput':
            if(lengthNotZero(inputValue)){
                this.lastName = true;
                input.classList.remove('invalid');
                input.classList.add('valid');
            }else
                input.classList.add('invalid');
            break;
    }
    }  
}

//document.getElementById('surnameInput').addEventListener("onblur",check.validateName('surnameInput'));
