// function cook(){
//     console.log('brings chai and parata');
// }

// cook();
// cook();
// cook();
// cook();

// function addSqrt(num){
//     console.log(num * num * num);
// }


// addSqrt(3)
// addSqrt(7)
// addSqrt(19)

// function greetMsg(userName, msg = "How can i help you"){
//     console.log(userName + " " + msg);
// }

// greetMsg("Anus", "Assalamoalaekum");
// greetMsg("Anus",);
// greetMsg("Anus",);


// function letKnowYourWishes(){
//     console.log(arguments);
// }

// letKnowYourWishes("Anus", "Younus", true, 12)


// function letKnowYourWishes(){
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// letKnowYourWishes("Apple", "Banana", "Mango");
// letKnowYourWishes("pineple", "Watermelon")
// letKnowYourWishes("Papaya","Apple", "Banana")

// function letKnowYourWishes(){
//     console.log(arguments[2]);
// }


// letKnowYourWishes("Apple", "Banana", "Mango");
// letKnowYourWishes("pineple", "Watermelon")
// letKnowYourWishes("Papaya","Apple", "Banana")


// function fullName(firstName, lastName){
//     let fullN = firstName + " " + lastName
//     return fullN;
// }

// let check = fullName("Anus", "Younus");

// console.log(check);

// let str = "2233245556768"

// if(!isNaN(str)){
//     let newStr = ""
//     for(let i = 0; i < str.length; i++){
//         if(
//             str[i] % 2 !== 0 &&
//             str[i + 1] % 2 !== 0 &&
//             !isNaN(str[i + 1] % 2)
//         )
//         {
//             newStr += str[i] + '-'
//         }
//         else{
//             newStr += str[i]
//         }
//     }
//     console.log(newStr);
// }
// else{
//    console.log('Number required');
//}

// let date = new Date()

// date.setFullYear(2005);

// date.setDate(15)

// date.setMonth(3);

// console.log(date);

// let date = new Date();

// let dob = new Date("April, 15, 2005")

// let age = date - dob

// console.log("your age is " + Math.floor(age / 1000 / 60 / 60 / 24 / 365));



// let currentDate = new Date();

// let userDate = parseInt(prompt("Enter your birth date"))
// let userMonth = prompt("Enter your birth month");
// let userYear = parseInt(prompt("Enter your birth year"))

// let dateArray = [userMonth, userDate.toString(), userYear.toString()]
// let dob = new Date(dateArray.join())

// let age = currentDate - dob

// console.log("Your age is " + Math.floor(age / 1000 / 60 / 60 / 24 / 365));