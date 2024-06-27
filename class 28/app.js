let todoEle = document.querySelectorAll('.todo-element')
let todoList = []
function add(){
    let newTodo = todoEle[0].value
    todoList.push(newTodo);
    printValue()
    console.log(todoList);
    todoEle[0].value = ""
}

let todoDiv = document.querySelectorAll('.todo-div');

function printValue(){
    todoDiv[0].innerHTML = ""
    for(let i = 0; i < todoList.length; i++){
        todoDiv[0].innerHTML += `<p id="${todoList[i]}-${i}">${todoList[i]}</p> 
        <button onclick="added(${i})">Edit</button>
        <button onclick="delelted(${i})">Delete</button>` 
    }
}

function added(index){
   todoDiv[0].innerHTML = ""
   todoEle[0].value = todoList.splice(index, 1)
   printValue()
}

function delelted(index){
   todoList.splice(index, 1)
   printValue()
}