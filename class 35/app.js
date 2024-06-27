/*
Object
mutable boolean string number undefined null
immutable object Array function
Object.assign(storeValue, target)
[ ...refrence ] { ...refrence }
new Promise(function(succses, error){}) .then(function) .catch(function)  // (promise function)
function Students() // (contructer function)
function.prototype.ref = value
delete Object.Key
Object.keys(object)
Object.values(object)
for(let key in obj){}
Object.hasOwnProperty("object.keyValue")
*/

















// let user = "anus"
// let name = user
// user = "owais"

// console.log(user, name);

// immutable

// let user = ["anus", "owais", "raza"]

// let student = user

// student.push("manan")

// console.log(student, user);

// let students = {
//     student1 : "Anus",
//     student2 : "Owais",
//     student3 : "Raza"
// }

// let users = students

// users.student4 = "Manan"

// console.log(users, students);

// let users = ["Anus", "Owais", "Raza"]

// let students = users.slice(0);

// students.push("Manan")

// console.log(users, students);


// let students = {
//     student1 : "Anus",
//     student2 : "Owais",
//     student3 : "Raza"
// }

// let users = Object.assign({}, students)

// users.student4 = "Manan"

// console.log(students, users);


// let users = ["Anus", "Owais", "Raza"];

// let students = [...users ]

// students.push("Manan")

// console.log(students, users);



// let students = {
//     student1 : "Anus",
//     student2 : "Owais",
//     student3 : "Raza"
// }


// let users = { ...students }

// users.student4 = "Manan"

// console.log(users, students);



// let lunch = new Promise(function (succes, errorMsg){
//        let user = confirm("Biryani is Avalible");
//        if (user) {
//         let whichVarity = prompt("Which Varity")
//         succes(whichVarity)
//        }
//        else{
//         errorMsg("Not Avaliable")
//        }
// })

// lunch
// .then(function (user){
//     console.log(user);
// })
// .catch(function (er) {
//     console.log(er);
// })


// let userLocation = prompt("Which location you got to go");

// location = `https://www.${userLocation}.com`

// let currentURL = location

// console.log(currentURL);


// function Student(name, rollNum, email, isFeePaid){
//     this.name = name
//     this.rollNum = rollNum
//     this.email = email
//     this.isFeePaid = isFeePaid
// }

// Student.prototype.subject = ["HTML", "CSS", "JavaScript",]

// let student1 = new Student("Anus", 2345, "anus@gmaikl.com", false)

// let student2 = new Student("Owais", 2344, "owais@gmail.com",false)

// let student3 = new Student("Hassan", 2343, "hassan@gmail.com",true)

// student1.subject = ["Pythone"]

// console.log(student1, student2, student3);


// let allValues = Object.values(student1)
// console.log(allValues.includes("Anus"), student1);

// for(let key in student1){
//     if (student1[key] === "Anus") {
//         console.log(key);
//     }
// }


// delete student1.isFeePaid

// student1.isSpecialQota = true

// console.log("isSpecialQota" in student1)
// console.log("isFeePaid" in student1);

// let allStudents = [student1, student2, student3]

// console.log(allStudents);

// for(let i = 0; i < allStudents.length; i++){
//     let student = allStudents[i]
//     if("isFeePaid" in student){
//         if (student.isFeePaid) {
//             console.log(student.name, "Thanks for fee submission");
//         }
//         else{
//             console.log(student.name, "Please paid thie fee");
//         }
//     }else if ("isSpecialQota" in student) {
//         console.log(student.name, "del laga ke paro");
//     }
// }

// console.log(student1.hasOwnProperty("isFeePaid"));
// console.log(student2.hasOwnProperty("isFeePaid"));