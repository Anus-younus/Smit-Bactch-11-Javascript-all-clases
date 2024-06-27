let inputEle = document.getElementById('input')

let printArray = document.getElementById('print-array')

let array = []

function add(){
   array.push(inputEle.value)
   console.log(array);
   printedArray()
   inputEle.value = ""
}

function printedArray(){
   printArray.innerHTML = ""
   for(let i = 0; i < array.length; i++){
    printArray.innerHTML += `
    <p>${array[i]}</p>
    <button onclick="edit(${i})">Edit</button>
    <button onclick="deleted(${i})">Delete</button>
    `
   }
}

function deleted(index){
    array.splice(index, 1)
    printedArray()
}


let replaceDiv = document.getElementById('replace-div')

let newDiv = document.getElementById('new-div')

let newInput = document.getElementById('new-input')

let isEditing = false;

function changeDiv(){
    if(isEditing){
        replaceDiv.className = ""
        newDiv.className += " hide"
    } else{
        replaceDiv.className += " hide"
        newDiv.className = ""
    }
    isEditing = !isEditing
}

let getIndex;

function edit(index){
    if(isEditing){
        displayerror()
    } else {
    changeDiv()
    newInput.value = array[index] 
    getIndex = index
   }
}


function save(){
    changeDiv()
    array.splice(getIndex, 1, newInput.value)
    printedArray()
}

let error = document.getElementById('error')
function displayerror(){
    error.style.display = "block"
    setTimeout(function (){
    error.style.display = "none"
    }, 1000)
}