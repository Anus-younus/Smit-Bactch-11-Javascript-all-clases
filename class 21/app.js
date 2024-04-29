// function calculateVolume(l, h, w){
//    let vHeight = h * 0.024
//    let vWieght = w * 0.024
//    let vLenght = l * 0.024
//    let totalVolume = vHeight * vLenght * vWieght
//    return totalVolume.toFixed(2) + "m"
// }

// let ulEle = document.querySelectorAll('ul');

// let items = ["mobile", "remote", "laptop"]
// let h = [25, 26, 100]
// let l = [14, 30, 113]
// let w = [120, 112, 112] 
// let volumeInMeters = []

// for(let i = 0; i < items.length; i++){
//     let volume = calculateVolume(25, 20, 16);
//     volumeInMeters.push(volume)
//     ulEle[0].innerHTML += `<li>item ${items[i]} volume is ${volume}</li>`
// }

// function sum(num1, num2) {
//     let sum = num1 + num2
//     return sum;
// }

// let ulEle = document.querySelectorAll('ul');

// let totalfee = sum(7000, 2000) 
// let grocery = sum(10000, 2000)

// ulEle[0].innerHTML += `<li>Student total fee ${totalfee}</li>`
// ulEle[0].innerHTML += `<li>Student total fee ${grocery}</li>`



// function grade(marks){
//     let grade;
//     if(marks >= 80){
//         grade = "Grade A-One"
//     }
//     else if(marks >= 70 && marks < 80){
//         grade = "Grade A"
//     }
//     else if(marks >= 60 && marks < 70){
//         grade = "Grade B"
//     }
//     else if(marks >= 50 && marks < 60){
//         grade = "Grade C"
//     }
//     else if(marks >= 40 && marks < 50){
//         grade = "Grade D"
//     }
//     else if(marks >= 30 && marks < 40){
//         grade = "Grade A"
//     }
//     else{
//         grade = "Grade F"
//     }
//     return grade
// }


// let tbodyEle = document.querySelectorAll('tbody');

// let students = ["Anus", "Owais", "Hassan"]
// let sMarks = [30, 50, 70]
// for(let i = 0; i < students.length; i++){
//     let  cGrade = grade(sMarks[i])
//     tbodyEle[0].innerHTML += `
//     <td> ${students[i]} <td/>
//     <td> ${sMarks[i]} <td/>
//     <td> ${cGrade} <td/>
//     `
// }


// function myConsole() {
//     console.log(arguments);
// }

// myConsole("Anus")

let currentDate = new Date()

let dob = new Date("April 15, 2005")

let age = currentDate - dob

console.log(Math.floor(age/1000/60/60/24/365));