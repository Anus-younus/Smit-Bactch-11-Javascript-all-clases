// let obj =  {
//      userName : "Anus",
//      Anus : "He is frontend developer",
//      fatherName : "Younus"
// }

// let objectKeys = Object.keys(obj)

// let objectValues = Object.values(obj)

// console.log(objectKeys, objectValues);

// console.log(obj["userName"]);

// for (const key in obj) {
//     let user = {
//         [key] : obj[key]
//     }
//     console.log(user);
// }

// function Student(name, email, password, confirmPassword){
//     this.name = name
//     this.email = email
//     this.password = password
//     this.confirmPassword = confirmPassword
// }

// Student.prototype.fatherName = "Younus"

// let student1 = new Student("Anus", "anusbandija@gmail.com", "anusanus", "anusanus");
// let student2 = new Student("Owais", "owaisbandija@gmail.com", "owaisowais", "owaisowais");

// console.log(student1, student2);




// let sec = 1
// let intervalFunction = setInterval(function (){
//     if (sec === 10) {
//         clearInterval(intervalFunction)
//     }
//     console.log(sec++);
// }, 1000)



// let timeOutFunction = setTimeout(function(){
//     console.log("fire");
// }, 1)


// let user = prompt("Enter a answare")

// if (user === "yes") {
//     clearTimeout(timeOutFunction)
// }



// function CalculateBill(amount, price1, price2, item1Quantity, item2Quantity){
//        this.amount = amount
//        this.price1 = price1
//        this.price2 = price2
//        this.item1Quantity = item1Quantity
//        this.item2Quantity = item2Quantity
// }


// CalculateBill.prototype.total = function(price1, price2, item1Quantity, item2Quantity){
//      console.log(`${(price1 * item1Quantity) + (price2 * item2Quantity)} `);
// }


// let callFunc = new CalculateBill(2000, 1000, 500, 4, 5)

// callFunc.total(1000, 500, 4, 5)