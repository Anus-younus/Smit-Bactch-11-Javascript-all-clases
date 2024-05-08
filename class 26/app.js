let inputEle = document.querySelectorAll('input');
let h1Ele = document.querySelectorAll('h1');
let h3Ele = document.querySelectorAll('h3');
h1Ele[0].innerHTML = '0'
inputEle[0].value = '1'


function sum(){
   let formValue = inputEle[0].value
   displayMsg(formValue, '+')
}

function sub(){
    let formValue = inputEle[0].value
    displayMsg(formValue, '-')
 }
function displayMsg(formValue, operater){
    if(isNaN(formValue)){
        h3Ele[0].style.display = 'block'
    }
    else if(operater === "+"){
        h1Ele[0].innerHTML = Number(h1Ele[0].innerHTML) + Number(inputEle[0].value)
        errorMsg()
    }
    else if(operater === "-"){
        h1Ele[0].innerHTML = Number(h1Ele[0].innerHTML) - Number(inputEle[0].value)
       errorMsg()
    }
}

function errorMsg(){
    h3Ele[0].style.display = 'none'
}
let buttonEle = document.querySelectorAll('button');

buttonEle[0].addEventListener('click', () => {
   h1Ele[0].innerHTML = 0
   inputEle[0].value = ''
   h3Ele[0].style.display = 'none'
});