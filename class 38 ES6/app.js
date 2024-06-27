// let arr = [1, 2, 3, 4, 5, 6]

// let str = "Saylani Mass Information Technology"

// arr.forEach(item => {
//     console.log(item);
// })

// var newArr = arr.map(item => item + 1)

// var newArr = arr.filter(item => item % 2 !== 0)

// var newArr = arr.reduce((int, item) => int + item, 0)

// var newArr = str.split(" ").reduce((int, item) => int + item[0], "")

// console.log(newArr);


// let str = "the quick brown fox pick up the lazy dog"

// let voweles = ['a', 'i', 'e', 'o', 'u'];

// var newArr = str.split("").reduce((int, item) => voweles.includes(item)? int + 1:int, 0)

// console.log(newArr);


// let str = "hello world";

// let revStr = str.split("").reduce((int, chr) => chr + int, "")

// console.log(revStr);

// let students = [15, 14, 16, 17, 19, 22, 30];


// var eligilble = students.every(checkEligble, true)
// var eligilble = students.some(checkEligble, true)
// console.log(eligilble);

// function checkEligble(int, item){
//   item <= 15? int = false:int = true, true
// }


// const user = [
//     {email : "anusyounus@gmail.com", password : "anus1234"},
//     {email : "owaisyounus@gmail.com", password : "owais1234"},
//     {email : "hassanyounus@gmail.com", password : "hassan1234"},
// ];


// function authUser(userEmail, userPassword){
//     return new Promise((resolved, rejected) => {
//         user.forEach(({email, password}) => {
//             if(email === userEmail && password === userPassword){
//                 resolved("Sucssefully login")
//             }
//             else{
//                 rejected("Invalied email or password")
//             }
//         })
//     })
// }

// authUser(prompt("Enter Your email"), prompt("Enter Your Password"))
// .then(succes => console.log(succes))
// .catch(rejected => console.log(rejvected));


