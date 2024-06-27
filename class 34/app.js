// function Student(name, rollNumber, isFessPaid){
//     this.name = name
//     this.rollNumber = rollNumber
//     this.isFessPaid = isFessPaid
// }

// Student.prototype.subjects = ['HTML', 'CSS', 'JavaScript'] 

// let student1 = new Student("Anus", 1223, true)

// let student2 = new Student("Owais", 2234, false)

// let student3 = new Student("Hassan", 1234, true)

// let allValues = Object.values(student1)

// console.log(allValues.includes("Anus"), student1);

// student1.subjects = ['Pythone']

// console.log(student1.subjects, student2, student3);

// for(let key in student1){
//     if(student1[key] === "Anus"){
//         console.log(key);
//     }
// }

// delete student3.isFessPaid
// student3.specialQuota = true

// let allStudents = [student1, student2, student3]

// for (let i = 0; i < allStudents.length; i++) {
//     const element = allStudents[i];
//     if("isFessPaid" in element){
//         if(element.isFessPaid){
//             console.log("Thanks");
//         }
//         else{
//             console.log("Please paid the fee");
//         }
//     }
//     else if("specialQuota" in element){
//         console.log("you are ok");
//     }
    
// }