class FormModel {

    name; 

    constructor() {

        document.getElementById('nameInput').addEventListener("change", (event) => this.setName(event.target.value));

        
    }

    setName = (newName) => {
        this.name = newName;
        this.validateName()
    }

    validateName = () => {
        if (hasMoreCharactersThan(this.name, 2)) {
            console.log("Name is valid")
        }
        else{
            console.log("Name is invalid.")
        }
    }
}

function hasMoreCharactersThan(input, numberOfCharacters) {
    return input.length > numberOfCharacters
}

const form = new FormModel()