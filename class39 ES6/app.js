// try{
//    aler(1)
// }catch(e){
//     console.error(e);
// }

// console.log(1);


// const getValue = new Promise((resolve, reject) => {
//     setInterval(() => {
//         resolve(1)
//     })
// })

// getValue
// .then((succes) => {
//     return succes + 2
// })
// .then((succes) => {
//     console.log(succes);
// })


// const promise1 = Promise.resolve(100)
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setInterval(() => {
//         resolve(3)
//     }, 3000)
// })

// Promise.all([promise1, promise2, promise3])
// .then((succes) => {
//     console.log(succes);
// })

// Promise.race([promise1, promise2, promise3])
// .then((succes) => {
//     console.log(succes);
// } )


// function greetUser(){
//     return new Promise((resolve, rejected) => {
//         setInterval(() => {
//             resolve(120)
//         }, 3000);
//     })
// }


// async function fetchApi(){
//     let user = await greetUser()
//     console.log(user);
// }

// fetchApi()


// let user = {userName: "Anus", email: "anus@gmail.com"}

// let str = JSON.stringify(user)

// console.log(str);

// let newUser = JSON.parse(str)

// console.log(newUser);