/*function sum(num1, num2){
    console.log(num1 + num2);
}

function sub(num1, num2){
    console.log(num1 - num2);
}

function concat(str1, str2){
    console.log(`${str1} ${str2}`);
}

function useCallBack(a, b, callBack){
    callBack(a, b)
} 

useCallBack(1, 2, sum)
useCallBack(5, 9, sum)
useCallBack(5, 9, sub)
useCallBack("Asslamoalaekm", "Anus!", concat)
*/

let inputEle = document.querySelectorAll('input')
let users = [
    {
        email : "anusyounus@gmail.com",
        password : "anusanus"
    },
    {
        email : "owaisyounus@gmail.com",
        password : "hassananus1525"
    }
]

function succes(){
    console.log('succes');
}

function failer(){
    console.log('failer');
}







let divEle = document.querySelectorAll('div')

function authValid(email, password, succes, failer){
    let autentication = false;
    for(let i = 0; i < users.length; i++){
        let user = users[i]
        if(user.email === email && user.password === password ){
            autentication = true
            break;
        }
    }

    if(autentication){
        succes()
        divEle[0].style.display = 'none'
        divEle[1].style.display = 'block'
        
    }
    else{
        failer()
        divEle[0].style.display = 'none'
        divEle[2].style.display = 'block'
    }
}

