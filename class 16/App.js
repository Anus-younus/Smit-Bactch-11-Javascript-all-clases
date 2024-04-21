let heading = document.querySelectorAll('h1');

heading[0].innerHTML = "SMIT Students"

let image = document.querySelectorAll('img')

let newImage = false;

function changeImage(){
    if(newImage === false){
        image[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnFgdOqI3ng2L3UJqMeW9Acz5mGj6LAcbMGOApTkJYA&s"
        newImage = true;
    }
    else{
        image[0].src = "https://i.pinimg.com/474x/4b/f6/f1/4bf6f197ad48bcf5bcc0a761954cb48d.jpg"
        newImage = false;
    }
}

let span = document.querySelectorAll('span');

span[0].innerHTML = "this is not awesome"

let paragraph = document.querySelectorAll('p')

for(let i = 0; i < paragraph.length; i++){
    paragraph[i].innerHTML = "Javascript is a flexible multi-paradigm programming language largely used in the web-development space for both front-end and back-end applications. Whereas HTML and CSS describe the elements on a webpage, code written in JavaScript makes them interactive. A framework such as NodeJS allows back-end code to be written in JavaScript. The tutorials below provide tips and tricks on how to get started with Javascript."
}

let input = document.querySelectorAll('input')

let ulEle = document.querySelectorAll('ul')

let newEle = false;

function showMessage(){
    ulEle[0].innerHTML += "<li>" + input[0].value + "</li>"
    input[0].value = ""
}