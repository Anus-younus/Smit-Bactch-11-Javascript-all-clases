let danger = document.querySelectorAll('.alert')

danger[0].style.display = 'none'

danger[1].style.display = 'none'

danger[2].style.display = 'none'

danger[3].style.display = 'none'


let user = +prompt("Enter your roll number");

if(user >= 1001  && user <= 2000){
    danger[0].style.display = "block" 
}
else if(user >= 2001  && user <= 4000){
    danger[1].style.display = "block" 
}
else if(user == ""){
    danger[3].style.display = "block"
}
else{
    danger[2].style.display = "block"
}