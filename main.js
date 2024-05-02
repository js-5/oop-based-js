import Validation from './myjs';

function lengthNotZero(str)
{
   if(str.length === 0);
    return false;
} 
var check = new Validation();
document.addEventListener("DOMContentLoaded",(event)=>{
    console.log('loaded');
    document.getElementById('surnameInput').addEventListener("onblur",check.validateName('surnameInput'));

    
})